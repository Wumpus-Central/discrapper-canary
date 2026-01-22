n.d(t, { A: () => x }), n(864466), n(443073), n(65821), n(896048), n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(562465),
    o = n(73153),
    l = n(334738),
    c = n(58149),
    u = n(445077),
    d = n(529942),
    f = n(164956),
    p = n(816662),
    _ = n(734057),
    h = n(696451),
    m = n(287809),
    g = n(954571),
    E = n(403362),
    b = n(728458),
    y = n(661191),
    O = n(591552),
    A = n(961973),
    v = n(487626),
    S = n(652215),
    I = n(340837),
    T = n(790782);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (f.A.isFullServerPreview(e)) return;
    let n = t ? O.A.getOnboardingPromptsForOnboarding(e) : O.A.getOnboardingPrompts(e),
        r = O.A.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        a = {},
        l = {};
    return (n.forEach((e) => {
        (a[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? s.Bo.post({
              url: S.Rsh.GUILD_ONBOARDING_RESPONSES(e),
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
              .catch((e) => b.A.captureException(e))
        : s.Bo.put({
              url: S.Rsh.GUILD_ONBOARDING_RESPONSES(e),
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
                  b.A.captureException(
                      Error("Failed to update onboarding responses for guild ".concat(e, ": ").concat(t.statusCode), {
                          cause: t,
                      }),
                  );
              });
}
function D(e, t, n) {
    var r, a;
    let s = null != (r = null == (a = h.Ay.getSelfMember(e)) ? void 0 : a.roles) ? r : [];
    f.A.isViewingRoles(e)
        ? (0, d.ID)(e, i().difference(i().union(s, t), n))
        : (t.length > 0 || n.length > 0) &&
          o.h.dispatch({
              type: "GUILD_MEMBER_UPDATE_LOCAL",
              guildId: e,
              roles: i().difference(i().union(s, t), n),
              addedRoleIds: t,
              removedRoleIds: n,
          });
}
let x = {
    selectOption(e, t, n, r) {
        let a = O.A.getOnboardingPrompt(t);
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
    updateOnboardingResponses: i().debounce(P, 1000),
    updateRolesLocal: D,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = O.A.getSelectedOptions(e),
            i = (0, A.a)(r),
            s = (0, A.vV)(r),
            o = O.A.getEnabled(e) ? O.A.getDefaultChannelIds(e) : [],
            [u, p] = (0, A._N)(e, t, o),
            b = [...s, ...o],
            C = b.map((e) => _.A.getChannel(e)).filter(E.Vq),
            R = (0, v.w)(e, new Set(b), C, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id),
            x = O.A.getConnections(e),
            L = (0, A.H_)(x),
            j = (0, A.OG)(x);
        if (
            (g.default.track(
                S.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
                w(N({}, (0, c.H$)(e)), {
                    step: t.length - 1,
                    options_selected: null == n ? 0 : r.filter((e) => D.includes(e.id)).length,
                    skipped: D.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: i.size,
                    channels_granted: R,
                    guild_onboarding_covered_channel_ids: u.map((e) => e.id),
                    guild_onboarding_uncovered_channel_ids: p.map((e) => e.id),
                    provider_connections_connected: L.connected,
                    provider_connections_not_connected: L.notConnected,
                    application_connections_connected: j.connected,
                    application_connections_not_connected: j.notConnected,
                }),
            ),
            (0, l.hK)(e, T.P.GUILD_ONBOARDING_QUESTION, y.default.fromTimestamp(Date.now())),
            P(e, !0),
            f.A.isFullServerPreview(e))
        ) {
            (0, d.$u)(e, b, []), (0, d.Z$)(e, { optInEnabled: !0 }), (0, d.ID)(e, Array.from(i));
            let t = m.default.getCurrentUser();
            if (null != t) {
                var M, k;
                let n = null != (M = null == (k = h.Ay.getMember(e, t.id)) ? void 0 : k.flags) ? M : 0;
                (0, d.Z$)(e, { memberOptions: { flags: (0, a.lA)(n, I.D.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (O.A.getEnabled(e) ? O.A.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)),
            n.size > 0 && (0, p.Hb)(e, Array.from(n), !0, { page: S.liQ.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        o.h.dispatch({
            type: "GUILD_ONBOARDING_COMPLETE",
            guildId: e,
        });
    },
    setUserOnboardingStep(e, t) {
        o.h.dispatch({
            type: "GUILD_ONBOARDING_SET_STEP",
            guildId: e,
            step: t,
        });
    },
    async resetOnboarding(e) {
        let t = m.default.getCurrentUser();
        if (null != t) {
            var n, r;
            let i = null != (n = null == (r = h.Ay.getMember(e, t.id)) ? void 0 : r.flags) ? n : 0;
            await (0, u.T)(e, { flags: (0, a.lA)(i, I.D.COMPLETED_ONBOARDING, !1) });
        }
    },
};
