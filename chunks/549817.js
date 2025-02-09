n.d(t, { Z: () => O }), n(536091), n(411104), n(47120), n(789020);
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(45114),
    l = n(367907),
    u = n(781792),
    c = n(962086),
    d = n(160404),
    f = n(152376),
    _ = n(592125),
    p = n(271383),
    h = n(594174),
    m = n(626135),
    g = n(630388),
    E = n(823379),
    v = n(960048),
    y = n(709054),
    I = n(45966),
    T = n(637853),
    b = n(816436),
    S = n(981631),
    A = n(372897),
    N = n(490897);
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (d.Z.isFullServerPreview(e)) return;
    let n = t ? I.Z.getOnboardingPromptsForOnboarding(e) : I.Z.getOnboardingPrompts(e),
        i = I.Z.getOnboardingResponses(e),
        r = n.map((e) => e.options.filter((e) => i.includes(e.id))).flat(),
        o = {},
        l = {};
    return (n.forEach((e) => {
        (o[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? a.tn
              .post({
                  url: S.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: r.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !0
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((e) => v.Z.captureException(e))
        : a.tn
              .put({
                  url: S.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: r.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !1
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
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
function R(e, t, n) {
    var i, a;
    let o = null !== (a = null === (i = p.ZP.getSelfMember(e)) || void 0 === i ? void 0 : i.roles) && void 0 !== a ? a : [];
    if (d.Z.isViewingRoles(e)) {
        (0, c.og)(e, r().difference(r().union(o, t), n));
        return;
    }
    (t.length > 0 || n.length > 0) &&
        s.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: r().difference(r().union(o, t), n),
            addedRoleIds: t,
            removedRoleIds: n
        });
}
let O = {
    selectOption(e, t, n, i) {
        let a = I.Z.getOnboardingPrompt(t);
        if (null == a) return;
        let o = a.singleSelect ? r().without(r().map(a.options, 'id'), n) : [];
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_SELECT_OPTION',
            guildId: e,
            promptId: t,
            optionId: n,
            selected: i,
            removedOptionIds: o
        });
    },
    updateOnboardingResponses: r().debounce(C, 1000),
    updateRolesLocal: R,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            i = I.Z.getSelectedOptions(e),
            r = (0, T.L6)(i),
            a = (0, T.dX)(i),
            s = I.Z.getEnabled(e) ? I.Z.getDefaultChannelIds(e) : [],
            [u, f] = (0, T.Ee)(e, t, s),
            v = [...a, ...s],
            R = v.map((e) => _.Z.getChannel(e)).filter(E.lm),
            O = (0, b.v)(e, new Set(v), R, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id);
        if (
            (m.default.track(S.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, l.hH)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : i.filter((e) => D.includes(e.id)).length,
                skipped: D.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: r.size,
                channels_granted: O,
                guild_onboarding_covered_channel_ids: u.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: f.map((e) => e.id)
            }),
            (0, o.Ju)(e, N.W.GUILD_ONBOARDING_QUESTION, y.default.fromTimestamp(Date.now())),
            C(e, !0),
            d.Z.isFullServerPreview(e))
        ) {
            (0, c.zS)(e, v, []), (0, c.aq)(e, { optInEnabled: !0 }), (0, c.og)(e, Array.from(r));
            let t = h.default.getCurrentUser();
            if (null != t) {
                var L, x;
                let n = null !== (x = null === (L = p.ZP.getMember(e, t.id)) || void 0 === L ? void 0 : L.flags) && void 0 !== x ? x : 0;
                (0, c.aq)(e, { memberOptions: { flags: (0, g.mB)(n, A.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (I.Z.getEnabled(e) ? I.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)), n.size > 0 && (0, f.Mo)(e, Array.from(n), !0, { page: S.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_COMPLETE',
            guildId: e
        });
    },
    setUserOnboardingStep(e, t) {
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_SET_STEP',
            guildId: e,
            step: t
        });
    },
    async resetOnboarding(e) {
        let t = h.default.getCurrentUser();
        if (null != t) {
            var n, i;
            let r = null !== (i = null === (n = p.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
            await (0, u.e)(e, { flags: (0, g.mB)(r, A.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
