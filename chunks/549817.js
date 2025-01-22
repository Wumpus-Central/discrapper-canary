var i = r(536091);
var a = r(411104);
var o = r(47120);
var s = r(789020);
var l = r(392711),
    u = r.n(l),
    c = r(544891),
    d = r(570140),
    f = r(45114),
    p = r(367907),
    h = r(781792),
    _ = r(962086),
    m = r(160404),
    g = r(152376),
    E = r(592125),
    v = r(271383),
    y = r(594174),
    b = r(626135),
    I = r(630388),
    T = r(823379),
    S = r(960048),
    A = r(709054),
    C = r(45966),
    N = r(637853),
    R = r(816436),
    O = r(981631),
    D = r(372897),
    L = r(490897);
function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (m.Z.isFullServerPreview(e)) return;
    let r = n ? C.Z.getOnboardingPromptsForOnboarding(e) : C.Z.getOnboardingPrompts(e),
        i = C.Z.getOnboardingResponses(e),
        a = r.map((e) => e.options.filter((e) => i.includes(e.id))).flat(),
        o = {},
        s = {};
    return (r.forEach((e) => {
        (o[e.id] = Date.now()), e.options.forEach((e) => (s[e.id] = Date.now()));
    }),
    n)
        ? c.tn
              .post({
                  url: O.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: a.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: s
                  },
                  rejectWithError: !0
              })
              .then((n) => {
                  null != n.body &&
                      d.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: n.body.onboarding_responses,
                          prompts_seen: n.body.onboarding_prompts_seen,
                          options_seen: n.body.onboarding_responses_seen
                      });
              })
              .catch((e) => S.Z.captureException(e))
        : c.tn
              .put({
                  url: O.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: a.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: s
                  },
                  rejectWithError: !1
              })
              .then((n) => {
                  null != n.body &&
                      d.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: n.body.onboarding_responses,
                          prompts_seen: n.body.onboarding_prompts_seen,
                          options_seen: n.body.onboarding_responses_seen
                      });
              })
              .catch((n) => {
                  S.Z.captureException(Error('Failed to update onboarding responses for guild '.concat(e, ': ').concat(n.statusCode), { cause: n }));
              });
}
function w(e, n, r) {
    var i, a;
    let o = null !== (a = null === (i = v.ZP.getSelfMember(e)) || void 0 === i ? void 0 : i.roles) && void 0 !== a ? a : [];
    if (m.Z.isViewingRoles(e)) {
        (0, _.og)(e, u().difference(u().union(o, n), r));
        return;
    }
    (n.length > 0 || r.length > 0) &&
        d.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: u().difference(u().union(o, n), r),
            addedRoleIds: n,
            removedRoleIds: r
        });
}
n.Z = {
    selectOption(e, n, r, i) {
        let a = C.Z.getOnboardingPrompt(n);
        if (null == a) return;
        let o = a.singleSelect ? u().without(u().map(a.options, 'id'), r) : [];
        d.Z.dispatch({
            type: 'GUILD_ONBOARDING_SELECT_OPTION',
            guildId: e,
            promptId: n,
            optionId: r,
            selected: i,
            removedOptionIds: o
        });
    },
    updateOnboardingResponses: u().debounce(x, 1000),
    updateRolesLocal: w,
    completeOnboarding(e, n) {
        let r = n.length > 0 ? n[n.length - 1] : null,
            i = C.Z.getSelectedOptions(e),
            a = (0, N.L6)(i),
            o = (0, N.dX)(i),
            s = C.Z.getEnabled(e) ? C.Z.getDefaultChannelIds(e) : [],
            [l, u] = (0, N.Ee)(e, n, s),
            c = [...o, ...s],
            d = c.map((e) => E.Z.getChannel(e)).filter(T.lm),
            h = (0, R.v)(e, new Set(c), d, !0).length,
            g = null == r ? [] : r.options.map((e) => e.id);
        if (
            (b.default.track(O.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, p.hH)(e),
                step: n.length - 1,
                options_selected: null == r ? 0 : i.filter((e) => g.includes(e.id)).length,
                skipped: g.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: a.size,
                channels_granted: h,
                guild_onboarding_covered_channel_ids: l.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: u.map((e) => e.id)
            }),
            (0, f.Ju)(e, L.W.GUILD_ONBOARDING_QUESTION, A.default.fromTimestamp(Date.now())),
            x(e, !0),
            m.Z.isFullServerPreview(e))
        ) {
            (0, _.zS)(e, c, []), (0, _.aq)(e, { optInEnabled: !0 }), (0, _.og)(e, Array.from(a));
            let n = y.default.getCurrentUser();
            if (null != n) {
                var S, w;
                let r = null !== (w = null === (S = v.ZP.getMember(e, n.id)) || void 0 === S ? void 0 : S.flags) && void 0 !== w ? w : 0;
                (0, _.aq)(e, { memberOptions: { flags: (0, I.mB)(r, D.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, n) {
        let r = new Set(n);
        (C.Z.getEnabled(e) ? C.Z.getDefaultChannelIds(e) : []).forEach((e) => r.add(e)), r.size > 0 && (0, g.Mo)(e, Array.from(r), !0, { page: O.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        d.Z.dispatch({
            type: 'GUILD_ONBOARDING_COMPLETE',
            guildId: e
        });
    },
    setUserOnboardingStep(e, n) {
        d.Z.dispatch({
            type: 'GUILD_ONBOARDING_SET_STEP',
            guildId: e,
            step: n
        });
    },
    async resetOnboarding(e) {
        let n = y.default.getCurrentUser();
        if (null != n) {
            var r, i;
            let a = null !== (i = null === (r = v.ZP.getMember(e, n.id)) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : 0;
            await (0, h.e)(e, { flags: (0, I.mB)(a, D.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
