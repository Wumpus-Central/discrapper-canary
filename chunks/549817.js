n.d(t, { Z: () => L }), n(472816), n(794429), n(415506), n(388685), n(997841);
var r = n(392711),
    i = n.n(r),
    a = n(95015),
    o = n(544891),
    s = n(570140),
    l = n(45114),
    c = n(367907),
    u = n(781792),
    d = n(962086),
    f = n(160404),
    _ = n(152376),
    p = n(592125),
    h = n(271383),
    m = n(594174),
    g = n(626135),
    E = n(823379),
    b = n(960048),
    y = n(709054),
    O = n(45966),
    v = n(637853),
    I = n(816436),
    T = n(981631),
    S = n(372897),
    A = n(490897);
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
function P(e, t) {
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
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (f.Z.isFullServerPreview(e)) return;
    let n = t ? O.Z.getOnboardingPromptsForOnboarding(e) : O.Z.getOnboardingPrompts(e),
        r = O.Z.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        a = {},
        l = {};
    return (n.forEach((e) => {
        (a[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? o.tn
              .post({
                  url: T.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: a,
                      onboarding_responses_seen: l,
                  },
                  rejectWithError: !0,
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((e) => b.Z.captureException(e))
        : o.tn
              .put({
                  url: T.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: a,
                      onboarding_responses_seen: l,
                  },
                  rejectWithError: !1,
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
                          type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen,
                      });
              })
              .catch((t) => {
                  b.Z.captureException(
                      Error("Failed to update onboarding responses for guild ".concat(e, ": ").concat(t.statusCode), {
                          cause: t,
                      }),
                  );
              });
}
function w(e, t, n) {
    var r, a;
    let o = null != (a = null == (r = h.ZP.getSelfMember(e)) ? void 0 : r.roles) ? a : [];
    if (f.Z.isViewingRoles(e)) return void (0, d.og)(e, i().difference(i().union(o, t), n));
    (t.length > 0 || n.length > 0) &&
        s.Z.dispatch({
            type: "GUILD_MEMBER_UPDATE_LOCAL",
            guildId: e,
            roles: i().difference(i().union(o, t), n),
            addedRoleIds: t,
            removedRoleIds: n,
        });
}
let L = {
    selectOption(e, t, n, r) {
        let a = O.Z.getOnboardingPrompt(t);
        if (null == a) return;
        let o = a.singleSelect ? i().without(i().map(a.options, "id"), n) : [];
        s.Z.dispatch({
            type: "GUILD_ONBOARDING_SELECT_OPTION",
            guildId: e,
            promptId: t,
            optionId: n,
            selected: r,
            removedOptionIds: o,
        });
    },
    updateOnboardingResponses: i().debounce(D, 1000),
    updateRolesLocal: w,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = O.Z.getSelectedOptions(e),
            i = (0, v.L6)(r),
            o = (0, v.dX)(r),
            s = O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : [],
            [u, _] = (0, v.Ee)(e, t, s),
            b = [...o, ...s],
            C = b.map((e) => p.Z.getChannel(e)).filter(E.lm),
            R = (0, I.v)(e, new Set(b), C, !0).length,
            w = null == n ? [] : n.options.map((e) => e.id),
            L = O.Z.getConnections(e),
            x = (0, v.OZ)(L),
            M = (0, v.N4)(L);
        if (
            (g.default.track(
                T.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                P(N({}, (0, c.hH)(e)), {
                    step: t.length - 1,
                    options_selected: null == n ? 0 : r.filter((e) => w.includes(e.id)).length,
                    skipped: w.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: i.size,
                    channels_granted: R,
                    guild_onboarding_covered_channel_ids: u.map((e) => e.id),
                    guild_onboarding_uncovered_channel_ids: _.map((e) => e.id),
                    provider_connections_connected: x.connected,
                    provider_connections_not_connected: x.notConnected,
                    application_connections_connected: M.connected,
                    application_connections_not_connected: M.notConnected,
                }),
            ),
            (0, l.Ju)(e, A.W.GUILD_ONBOARDING_QUESTION, y.default.fromTimestamp(Date.now())),
            D(e, !0),
            f.Z.isFullServerPreview(e))
        ) {
            (0, d.zS)(e, b, []), (0, d.aq)(e, { optInEnabled: !0 }), (0, d.og)(e, Array.from(i));
            let t = m.default.getCurrentUser();
            if (null != t) {
                var k, j;
                let n = null != (j = null == (k = h.ZP.getMember(e, t.id)) ? void 0 : k.flags) ? j : 0;
                (0, d.aq)(e, { memberOptions: { flags: (0, a.mB)(n, S.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)),
            n.size > 0 && (0, _.Mo)(e, Array.from(n), !0, { page: T.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        s.Z.dispatch({
            type: "GUILD_ONBOARDING_COMPLETE",
            guildId: e,
        });
    },
    setUserOnboardingStep(e, t) {
        s.Z.dispatch({
            type: "GUILD_ONBOARDING_SET_STEP",
            guildId: e,
            step: t,
        });
    },
    async resetOnboarding(e) {
        let t = m.default.getCurrentUser();
        if (null != t) {
            var n, r;
            let i = null != (r = null == (n = h.ZP.getMember(e, t.id)) ? void 0 : n.flags) ? r : 0;
            await (0, u.e)(e, { flags: (0, a.mB)(i, S.q.COMPLETED_ONBOARDING, !1) });
        }
    },
};
