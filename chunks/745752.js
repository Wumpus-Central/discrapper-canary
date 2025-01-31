n.d(t, {
    I1: () => E,
    eM: () => m,
    rK: () => g,
    rj: () => h
}),
    n(789020);
var i = n(544891),
    r = n(570140),
    a = n(367907),
    s = n(314897),
    o = n(271383),
    l = n(430824),
    u = n(626135),
    c = n(630388),
    d = n(45966),
    f = n(290511),
    _ = n(981631),
    p = n(372897);
function h(e) {
    u.default.track(_.rMx.GUILD_ONBOARDING_LOADED, {
        ...(0, a.hH)(e),
        has_new_prompts: !1,
        number_of_prompts: 0
    });
}
function m(e) {
    return (
        r.Z.dispatch({
            type: 'GUILD_ONBOARDING_PROMPTS_FETCH_START',
            guildId: e
        }),
        i.tn
            .get({
                url: _.ANM.GUILD_ONBOARDING(e),
                rejectWithError: !1
            })
            .then(
                (t) => {
                    let { body: n } = t,
                        i = (0, f.cf)(n);
                    return r.Z.dispatch({
                        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS',
                        guildId: e,
                        ...i
                    }).then(() => i.prompts);
                },
                (t) => (
                    r.Z.dispatch({
                        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE',
                        guildId: e
                    }),
                    t
                )
            )
    );
}
async function g(e) {
    var t, n;
    let i = s.default.getId(),
        r = (0, c.yE)(null !== (n = null === (t = o.ZP.getMember(e, i)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, p.q.COMPLETED_ONBOARDING),
        a = l.Z.getGuild(e);
    if (null == a || !a.hasFeature(_.oNc.GUILD_ONBOARDING)) return Promise.resolve();
    let u = d.Z.shouldFetchPrompts(e),
        f = d.Z.getOnboardingPrompts(e);
    if (!u && f.length > 0) return f.every((e) => !e.inOnboarding) ? y(e) : r || E(e), Promise.resolve();
    let h = await m(e);
    return Array.isArray(h) && h.every((e) => !e.inOnboarding) ? (y(e), Promise.resolve()) : (r || E(e), h);
}
function E(e) {
    r.Z.dispatch({
        type: 'GUILD_ONBOARDING_START',
        guildId: e
    });
}
let v = -2;
function y(e) {
    u.default.track(_.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, a.hH)(e),
        step: v,
        required: !0
    }),
        u.default.track(_.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, a.hH)(e),
            step: v,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        });
}
