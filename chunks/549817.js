n.d(t, { Z: () => L }), n(86693), n(536091), n(411104), n(47120), n(789020);
var r = n(392711),
    i = n.n(r),
    o = n(544891),
    a = n(570140),
    s = n(45114),
    l = n(367907),
    c = n(781792),
    u = n(962086),
    d = n(160404),
    f = n(152376),
    _ = n(592125),
    p = n(271383),
    h = n(594174),
    m = n(626135),
    g = n(630388),
    E = n(823379),
    b = n(960048),
    y = n(709054),
    v = n(45966),
    O = n(637853),
    I = n(816436),
    S = n(981631),
    T = n(372897),
    N = n(490897);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
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
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (d.Z.isFullServerPreview(e)) return;
    let n = t ? v.Z.getOnboardingPromptsForOnboarding(e) : v.Z.getOnboardingPrompts(e),
        r = v.Z.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        s = {},
        l = {};
    return (n.forEach((e) => {
        (s[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? o.tn
              .post({
                  url: S.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: s,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !0
              })
              .then((t) => {
                  null != t.body &&
                      a.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((e) => b.Z.captureException(e))
        : o.tn
              .put({
                  url: S.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: s,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !1
              })
              .then((t) => {
                  null != t.body &&
                      a.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((t) => {
                  b.Z.captureException(Error('Failed to update onboarding responses for guild '.concat(e, ': ').concat(t.statusCode), { cause: t }));
              });
}
function D(e, t, n) {
    var r, o;
    let s = null != (o = null == (r = p.ZP.getSelfMember(e)) ? void 0 : r.roles) ? o : [];
    if (d.Z.isViewingRoles(e)) return void (0, u.og)(e, i().difference(i().union(s, t), n));
    (t.length > 0 || n.length > 0) &&
        a.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: i().difference(i().union(s, t), n),
            addedRoleIds: t,
            removedRoleIds: n
        });
}
let L = {
    selectOption(e, t, n, r) {
        let o = v.Z.getOnboardingPrompt(t);
        if (null == o) return;
        let s = o.singleSelect ? i().without(i().map(o.options, 'id'), n) : [];
        a.Z.dispatch({
            type: 'GUILD_ONBOARDING_SELECT_OPTION',
            guildId: e,
            promptId: t,
            optionId: n,
            selected: r,
            removedOptionIds: s
        });
    },
    updateOnboardingResponses: i().debounce(w, 1000),
    updateRolesLocal: D,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = v.Z.getSelectedOptions(e),
            i = (0, O.L6)(r),
            o = (0, O.dX)(r),
            a = v.Z.getEnabled(e) ? v.Z.getDefaultChannelIds(e) : [],
            [c, f] = (0, O.Ee)(e, t, a),
            b = [...o, ...a],
            A = b.map((e) => _.Z.getChannel(e)).filter(E.lm),
            R = (0, I.v)(e, new Set(b), A, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id);
        if (
            (m.default.track(
                S.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                P(C({}, (0, l.hH)(e)), {
                    step: t.length - 1,
                    options_selected: null == n ? 0 : r.filter((e) => D.includes(e.id)).length,
                    skipped: D.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: i.size,
                    channels_granted: R,
                    guild_onboarding_covered_channel_ids: c.map((e) => e.id),
                    guild_onboarding_uncovered_channel_ids: f.map((e) => e.id)
                })
            ),
            (0, s.Ju)(e, N.W.GUILD_ONBOARDING_QUESTION, y.default.fromTimestamp(Date.now())),
            w(e, !0),
            d.Z.isFullServerPreview(e))
        ) {
            (0, u.zS)(e, b, []), (0, u.aq)(e, { optInEnabled: !0 }), (0, u.og)(e, Array.from(i));
            let t = h.default.getCurrentUser();
            if (null != t) {
                var L, x;
                let n = null != (x = null == (L = p.ZP.getMember(e, t.id)) ? void 0 : L.flags) ? x : 0;
                (0, u.aq)(e, { memberOptions: { flags: (0, g.mB)(n, T.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (v.Z.getEnabled(e) ? v.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)), n.size > 0 && (0, f.Mo)(e, Array.from(n), !0, { page: S.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        a.Z.dispatch({
            type: 'GUILD_ONBOARDING_COMPLETE',
            guildId: e
        });
    },
    setUserOnboardingStep(e, t) {
        a.Z.dispatch({
            type: 'GUILD_ONBOARDING_SET_STEP',
            guildId: e,
            step: t
        });
    },
    async resetOnboarding(e) {
        let t = h.default.getCurrentUser();
        if (null != t) {
            var n, r;
            let i = null != (r = null == (n = p.ZP.getMember(e, t.id)) ? void 0 : n.flags) ? r : 0;
            await (0, c.e)(e, { flags: (0, g.mB)(i, T.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
