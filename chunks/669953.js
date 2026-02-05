"use strict";
n.d(t, { A: () => O }), n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(562465),
    o = n(73153),
    l = n(334738),
    u = n(58149),
    c = n(445077),
    d = n(529942),
    _ = n(164956),
    f = n(816662),
    p = n(734057),
    h = n(696451),
    m = n(287809),
    g = n(954571),
    E = n(403362),
    A = n(728458),
    I = n(661191),
    T = n(591552),
    y = n(961973),
    S = n(487626),
    v = n(652215),
    C = n(340837),
    b = n(790782);
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (_.A.isFullServerPreview(e)) return;
    let n = t ? T.A.getOnboardingPromptsForOnboarding(e) : T.A.getOnboardingPrompts(e),
        r = T.A.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        a = {},
        l = {};
    return (n.forEach((e) => {
        (a[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? s.Bo.post({
              url: v.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: i.map((e) => e.id),
                  onboarding_prompts_seen: a,
                  onboarding_responses_seen: l,
              },
              rejectWithError: !0,
          })
              .then((t) => {
                  null != t.body &&
                      o.h.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((e) => A.A.captureException(e))
        : s.Bo.put({
              url: v.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: i.map((e) => e.id),
                  onboarding_prompts_seen: a,
                  onboarding_responses_seen: l,
              },
              rejectWithError: !1,
          })
              .then((t) => {
                  null != t.body &&
                      o.h.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((t) => {
                  A.A.captureException(
                      Error(`Failed to update onboarding responses for guild ${e}: ${t.statusCode}`, { cause: t }),
                  );
              });
}
function R(e, t, n) {
    let r = h.Ay.getSelfMember(e)?.roles ?? [];
    _.A.isViewingRoles(e)
        ? (0, d.ID)(e, i().difference(i().union(r, t), n))
        : (t.length > 0 || n.length > 0) &&
          o.h.dispatch({
              type: "GUILD_MEMBER_UPDATE_LOCAL",
              guildId: e,
              roles: i().difference(i().union(r, t), n),
              addedRoleIds: t,
              removedRoleIds: n,
          });
}
let O = {
    selectOption(e, t, n, r) {
        let a = T.A.getOnboardingPrompt(t);
        if (null == a) return;
        let s = a.singleSelect ? i().without(i().map(a.options, "id"), n) : [];
        o.h.dispatch({
            type: "GUILD_ONBOARDING_SELECT_OPTION",
            guildId: e,
            promptId: t,
            optionId: n,
            selected: r,
            removedOptionIds: s,
        });
    },
    updateOnboardingResponses: i().debounce(N, 1e3),
    updateRolesLocal: R,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = T.A.getSelectedOptions(e),
            i = (0, y.a)(r),
            s = (0, y.vV)(r),
            o = T.A.getEnabled(e) ? T.A.getDefaultChannelIds(e) : [],
            [c, f] = (0, y._N)(e, t, o),
            A = [...s, ...o],
            R = A.map((e) => p.A.getChannel(e)).filter(E.Vq),
            O = (0, S.w)(e, new Set(A), R, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id),
            L = T.A.getConnections(e),
            w = (0, y.H_)(L),
            x = (0, y.OG)(L);
        if (
            (g.default.track(v.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, u.H$)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : r.filter((e) => D.includes(e.id)).length,
                skipped: D.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: i.size,
                channels_granted: O,
                guild_onboarding_covered_channel_ids: c.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: f.map((e) => e.id),
                provider_connections_connected: w.connected,
                provider_connections_not_connected: w.notConnected,
                application_connections_connected: x.connected,
                application_connections_not_connected: x.notConnected,
            }),
            (0, l.hK)(e, b.P.GUILD_ONBOARDING_QUESTION, I.default.fromTimestamp(Date.now())),
            N(e, !0),
            _.A.isFullServerPreview(e))
        ) {
            (0, d.$u)(e, A, []), (0, d.Z$)(e, { optInEnabled: !0 }), (0, d.ID)(e, Array.from(i));
            let t = m.default.getCurrentUser();
            if (null != t) {
                let n = h.Ay.getMember(e, t.id)?.flags ?? 0;
                (0, d.Z$)(e, { memberOptions: { flags: (0, a.lA)(n, C.D.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (T.A.getEnabled(e) ? T.A.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)),
            n.size > 0 && (0, f.Hb)(e, Array.from(n), !0, { page: v.liQ.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        o.h.dispatch({ type: "GUILD_ONBOARDING_COMPLETE", guildId: e });
    },
    setUserOnboardingStep(e, t) {
        o.h.dispatch({ type: "GUILD_ONBOARDING_SET_STEP", guildId: e, step: t });
    },
    async resetOnboarding(e) {
        let t = m.default.getCurrentUser();
        if (null != t) {
            let n = h.Ay.getMember(e, t.id)?.flags ?? 0;
            await (0, c.T)(e, { flags: (0, a.lA)(n, C.D.COMPLETED_ONBOARDING, !1) });
        }
    },
};
