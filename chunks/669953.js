"use strict";
n.d(t, { A: () => y }), n(938796);
var i = n(435558),
    r = n.n(i),
    a = n(665260),
    s = n(636537),
    l = n(228366),
    o = n(334738),
    d = n(95561),
    c = n(445077),
    u = n(529942),
    _ = n(164956),
    E = n(816662),
    A = n(734057),
    h = n(696451),
    I = n(287809),
    f = n(174459),
    p = n(403362),
    T = n(38405),
    m = n(935208),
    g = n(591552),
    S = n(961973),
    N = n(487626),
    C = n(652215),
    O = n(340837),
    R = n(790782);
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (_.A.isFullServerPreview(e)) return;
    let n = t ? g.A.getOnboardingPromptsForOnboarding(e) : g.A.getOnboardingPrompts(e),
        i = g.A.getOnboardingResponses(e),
        r = n.map((e) => e.options.filter((e) => i.includes(e.id))).flat(),
        a = {},
        o = {};
    return (n.forEach((e) => {
        (a[e.id] = Date.now()), e.options.forEach((e) => (o[e.id] = Date.now()));
    }),
    t)
        ? s.Bo.post({
              url: C.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: r.map((e) => e.id),
                  onboarding_prompts_seen: a,
                  onboarding_responses_seen: o,
              },
              rejectWithError: !0,
          })
              .then((t) => {
                  null != t.body &&
                      l.h.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((e) => T.A.captureException(e))
        : s.Bo.put({
              url: C.Rsh.GUILD_ONBOARDING_RESPONSES(e),
              body: {
                  onboarding_responses: r.map((e) => e.id),
                  onboarding_prompts_seen: a,
                  onboarding_responses_seen: o,
              },
              rejectWithError: !1,
          })
              .then((t) => {
                  null != t.body &&
                      l.h.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((t) => {
                  T.A.captureException(
                      Error(`Failed to update onboarding responses for guild ${e}: ${t.statusCode}`, { cause: t }),
                  );
              });
}
let y = {
    selectOption(e, t, n, i) {
        let a = g.A.getOnboardingPrompt(t);
        if (null == a) return;
        let s = a.singleSelect ? r().without(r().map(a.options, "id"), n) : [];
        l.h.dispatch({
            type: "GUILD_ONBOARDING_SELECT_OPTION",
            guildId: e,
            promptId: t,
            optionId: n,
            selected: i,
            removedOptionIds: s,
        });
    },
    updateOnboardingResponses: r().debounce(L, 1e3),
    updateRolesLocal: function (e, t, n) {
        let i = h.Ay.getSelfMember(e)?.roles ?? [];
        _.A.isViewingRoles(e)
            ? (0, u.ID)(e, r().difference(r().union(i, t), n))
            : (t.length > 0 || n.length > 0) &&
              l.h.dispatch({
                  type: "GUILD_MEMBER_UPDATE_LOCAL",
                  guildId: e,
                  roles: r().difference(r().union(i, t), n),
                  addedRoleIds: t,
                  removedRoleIds: n,
              });
    },
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            i = g.A.getSelectedOptions(e),
            r = (0, S.a)(i),
            s = (0, S.vV)(i),
            l = g.A.getEnabled(e) ? g.A.getDefaultChannelIds(e) : [],
            [c, E] = (0, S._N)(e, t, l),
            T = [...s, ...l],
            y = T.map((e) => A.A.getChannel(e)).filter(p.Vq),
            D = (0, N.w)(e, new Set(T), y, !0).length,
            v = null == n ? [] : n.options.map((e) => e.id),
            b = g.A.getConnections(e),
            M = (0, S.H_)(b),
            P = (0, S.OG)(b);
        if (
            (f.default.track(C.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, d.H$)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : i.filter((e) => v.includes(e.id)).length,
                skipped: v.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: r.size,
                channels_granted: D,
                guild_onboarding_covered_channel_ids: c.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: E.map((e) => e.id),
                provider_connections_connected: M.connected,
                provider_connections_not_connected: M.notConnected,
                application_connections_connected: P.connected,
                application_connections_not_connected: P.notConnected,
            }),
            (0, o.hK)(e, R.P.GUILD_ONBOARDING_QUESTION, m.default.fromTimestamp(Date.now())),
            L(e, !0),
            _.A.isFullServerPreview(e))
        ) {
            (0, u.$u)(e, T, []), (0, u.Z$)(e, { optInEnabled: !0 }), (0, u.ID)(e, Array.from(r));
            let t = I.default.getCurrentUser();
            if (null != t) {
                let n = h.Ay.getMember(e, t.id)?.flags ?? 0;
                (0, u.Z$)(e, { memberOptions: { flags: (0, a.lA)(n, O.D.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (g.A.getEnabled(e) ? g.A.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)),
            n.size > 0 && (0, E.Hb)(e, Array.from(n), !0, { page: C.liQ.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        l.h.dispatch({ type: "GUILD_ONBOARDING_COMPLETE", guildId: e });
    },
    setUserOnboardingStep(e, t) {
        l.h.dispatch({ type: "GUILD_ONBOARDING_SET_STEP", guildId: e, step: t });
    },
    async resetOnboarding(e) {
        let t = I.default.getCurrentUser();
        if (null != t) {
            let n = h.Ay.getMember(e, t.id)?.flags ?? 0;
            await (0, c.T)(e, { flags: (0, a.lA)(n, O.D.COMPLETED_ONBOARDING, !1) });
        }
    },
};
