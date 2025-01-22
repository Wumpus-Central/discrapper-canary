r.d(n, {
    I1: function () {
        return y;
    },
    eM: function () {
        return E;
    },
    rK: function () {
        return v;
    },
    rj: function () {
        return g;
    }
});
var i = r(789020);
var a = r(544891),
    o = r(570140),
    s = r(367907),
    l = r(314897),
    u = r(271383),
    c = r(430824),
    d = r(626135),
    f = r(630388),
    p = r(45966),
    h = r(290511),
    _ = r(981631),
    m = r(372897);
function g(e) {
    d.default.track(_.rMx.GUILD_ONBOARDING_LOADED, {
        ...(0, s.hH)(e),
        has_new_prompts: !1,
        number_of_prompts: 0
    });
}
function E(e) {
    return (
        o.Z.dispatch({
            type: 'GUILD_ONBOARDING_PROMPTS_FETCH_START',
            guildId: e
        }),
        a.tn
            .get({
                url: _.ANM.GUILD_ONBOARDING(e),
                rejectWithError: !1
            })
            .then(
                (n) => {
                    let { body: r } = n,
                        i = (0, h.cf)(r);
                    return o.Z.dispatch({
                        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS',
                        guildId: e,
                        ...i
                    }).then(() => i.prompts);
                },
                (n) => (
                    o.Z.dispatch({
                        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE',
                        guildId: e
                    }),
                    n
                )
            )
    );
}
async function v(e) {
    var n, r;
    let i = l.default.getId(),
        a = (0, f.yE)(null !== (r = null === (n = u.ZP.getMember(e, i)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, m.q.COMPLETED_ONBOARDING),
        o = c.Z.getGuild(e);
    if (null == o || !o.hasFeature(_.oNc.GUILD_ONBOARDING)) return Promise.resolve();
    let s = p.Z.shouldFetchPrompts(e),
        d = p.Z.getOnboardingPrompts(e);
    if (!s && d.length > 0) return d.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (!a && y(e), Promise.resolve());
    let h = await E(e);
    return Array.isArray(h) && h.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (!a && y(e), h);
}
function y(e) {
    o.Z.dispatch({
        type: 'GUILD_ONBOARDING_START',
        guildId: e
    });
}
let b = -2;
function I(e) {
    d.default.track(_.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, s.hH)(e),
        step: b,
        required: !0
    }),
        d.default.track(_.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.hH)(e),
            step: b,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        });
}
