n.d(t, { Z: () => x }), n(86693), n(536091), n(411104), n(47120), n(789020);
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
    p = n(592125),
    _ = n(271383),
    h = n(594174),
    m = n(626135),
    g = n(630388),
    E = n(823379),
    v = n(960048),
    b = n(709054),
    y = n(45966),
    O = n(637853),
    S = n(816436),
    I = n(981631),
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
    let n = t ? y.Z.getOnboardingPromptsForOnboarding(e) : y.Z.getOnboardingPrompts(e),
        r = y.Z.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        s = {},
        l = {};
    return (n.forEach((e) => {
        (s[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? o.tn
              .post({
                  url: I.ANM.GUILD_ONBOARDING_RESPONSES(e),
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
              .catch((e) => v.Z.captureException(e))
        : o.tn
              .put({
                  url: I.ANM.GUILD_ONBOARDING_RESPONSES(e),
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
                  v.Z.captureException(Error('Failed to update onboarding responses for guild '.concat(e, ': ').concat(t.statusCode), { cause: t }));
              });
}
function D(e, t, n) {
    var r, o;
    let s = null !== (o = null === (r = _.ZP.getSelfMember(e)) || void 0 === r ? void 0 : r.roles) && void 0 !== o ? o : [];
    if (d.Z.isViewingRoles(e)) {
        (0, u.og)(e, i().difference(i().union(s, t), n));
        return;
    }
    (t.length > 0 || n.length > 0) &&
        a.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: i().difference(i().union(s, t), n),
            addedRoleIds: t,
            removedRoleIds: n
        });
}
let x = {
    selectOption(e, t, n, r) {
        let o = y.Z.getOnboardingPrompt(t);
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
            r = y.Z.getSelectedOptions(e),
            i = (0, O.L6)(r),
            o = (0, O.dX)(r),
            a = y.Z.getEnabled(e) ? y.Z.getDefaultChannelIds(e) : [],
            [c, f] = (0, O.Ee)(e, t, a),
            v = [...o, ...a],
            A = v.map((e) => p.Z.getChannel(e)).filter(E.lm),
            R = (0, S.v)(e, new Set(v), A, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id);
        if (
            (m.default.track(
                I.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
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
            (0, s.Ju)(e, N.W.GUILD_ONBOARDING_QUESTION, b.default.fromTimestamp(Date.now())),
            w(e, !0),
            d.Z.isFullServerPreview(e))
        ) {
            (0, u.zS)(e, v, []), (0, u.aq)(e, { optInEnabled: !0 }), (0, u.og)(e, Array.from(i));
            let t = h.default.getCurrentUser();
            if (null != t) {
                var x, L;
                let n = null !== (L = null === (x = _.ZP.getMember(e, t.id)) || void 0 === x ? void 0 : x.flags) && void 0 !== L ? L : 0;
                (0, u.aq)(e, { memberOptions: { flags: (0, g.mB)(n, T.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (y.Z.getEnabled(e) ? y.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)), n.size > 0 && (0, f.Mo)(e, Array.from(n), !0, { page: I.ZY5.GUILD_ONBOARDING });
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
            let i = null !== (r = null === (n = _.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
            await (0, c.e)(e, { flags: (0, g.mB)(i, T.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
