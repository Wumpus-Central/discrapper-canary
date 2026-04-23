"use strict";
n.d(t, { A: () => v }), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(636537),
    o = n(228366),
    l = n(334738),
    d = n(58149),
    _ = n(445077),
    u = n(529942),
    c = n(164956),
    E = n(816662),
    h = n(734057),
    m = n(696451),
    f = n(287809),
    g = n(954571),
    p = n(403362),
    A = n(38405),
    I = n(935208),
    T = n(591552),
    S = n(961973),
    N = n(487626),
    C = n(652215),
    R = n(340837),
    O = n(790782);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (c.A.isFullServerPreview(e)) return;
    let n = t ? T.A.getOnboardingPromptsForOnboarding(e) : T.A.getOnboardingPrompts(e),
        i = T.A.getOnboardingResponses(e),
        r = n.map((e) => e.options.filter((e) => i.includes(e.id))).flat(),
        s = {},
        l = {};
    return (n.forEach((e) => {
        (s[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? a.Bo.post({
              url: C.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: r.map((e) => e.id),
                  onboarding_prompts_seen: s,
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
        : a.Bo.put({
              url: C.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: r.map((e) => e.id),
                  onboarding_prompts_seen: s,
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
let v = {
    selectOption(e, t, n, i) {
        let s = T.A.getOnboardingPrompt(t);
        if (null == s) return;
        let a = s.singleSelect ? r().without(r().map(s.options, "id"), n) : [];
        o.h.dispatch({
            type: "GUILD_ONBOARDING_SELECT_OPTION",
            guildId: e,
            promptId: t,
            optionId: n,
            selected: i,
            removedOptionIds: a,
        });
    },
    updateOnboardingResponses: r().debounce(y, 1e3),
    updateRolesLocal: function (e, t, n) {
        let i = m.Ay.getSelfMember(e)?.roles ?? [];
        c.A.isViewingRoles(e)
            ? (0, u.ID)(e, r().difference(r().union(i, t), n))
            : (t.length > 0 || n.length > 0) &&
              o.h.dispatch({
                  type: "GUILD_MEMBER_UPDATE_LOCAL",
                  guildId: e,
                  roles: r().difference(r().union(i, t), n),
                  addedRoleIds: t,
                  removedRoleIds: n,
              });
    },
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            i = T.A.getSelectedOptions(e),
            r = (0, S.a)(i),
            a = (0, S.vV)(i),
            o = T.A.getEnabled(e) ? T.A.getDefaultChannelIds(e) : [],
            [_, E] = (0, S._N)(e, t, o),
            A = [...a, ...o],
            v = A.map((e) => h.A.getChannel(e)).filter(p.Vq),
            D = (0, N.w)(e, new Set(A), v, !0).length,
            L = null == n ? [] : n.options.map((e) => e.id),
            b = T.A.getConnections(e),
            w = (0, S.H_)(b),
            P = (0, S.OG)(b);
        if (
            (g.default.track(C.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, d.H$)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : i.filter((e) => L.includes(e.id)).length,
                skipped: L.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: r.size,
                channels_granted: D,
                guild_onboarding_covered_channel_ids: _.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: E.map((e) => e.id),
                provider_connections_connected: w.connected,
                provider_connections_not_connected: w.notConnected,
                application_connections_connected: P.connected,
                application_connections_not_connected: P.notConnected,
            }),
            (0, l.hK)(e, O.P.GUILD_ONBOARDING_QUESTION, I.default.fromTimestamp(Date.now())),
            y(e, !0),
            c.A.isFullServerPreview(e))
        ) {
            (0, u.$u)(e, A, []), (0, u.Z$)(e, { optInEnabled: !0 }), (0, u.ID)(e, Array.from(r));
            let t = f.default.getCurrentUser();
            if (null != t) {
                let n = m.Ay.getMember(e, t.id)?.flags ?? 0;
                (0, u.Z$)(e, { memberOptions: { flags: (0, s.lA)(n, R.D.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (T.A.getEnabled(e) ? T.A.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)),
            n.size > 0 && (0, E.Hb)(e, Array.from(n), !0, { page: C.liQ.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        o.h.dispatch({ type: "GUILD_ONBOARDING_COMPLETE", guildId: e });
    },
    setUserOnboardingStep(e, t) {
        o.h.dispatch({ type: "GUILD_ONBOARDING_SET_STEP", guildId: e, step: t });
    },
    async resetOnboarding(e) {
        let t = f.default.getCurrentUser();
        if (null != t) {
            let n = m.Ay.getMember(e, t.id)?.flags ?? 0;
            await (0, _.T)(e, { flags: (0, s.lA)(n, R.D.COMPLETED_ONBOARDING, !1) });
        }
    },
};
