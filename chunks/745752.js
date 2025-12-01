n.d(t, {
    I1: () => v,
    Xx: () => I,
    eM: () => y,
    rK: () => O,
    rj: () => b,
}),
    n(997841);
var r = n(95015),
    i = n(544891),
    a = n(570140),
    o = n(367907),
    s = n(314897),
    l = n(271383),
    c = n(430824),
    u = n(626135),
    d = n(45966),
    f = n(290511),
    p = n(981631),
    _ = n(372897);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    u.default.track(
        p.rMx.GUILD_ONBOARDING_LOADED,
        E(h({}, (0, o.hH)(e)), {
            has_new_prompts: !1,
            number_of_prompts: 0,
        }),
    );
}
function y(e) {
    return (
        a.Z.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
            guildId: e,
        }),
        i.tn
            .get({
                url: p.ANM.GUILD_ONBOARDING(e),
                rejectWithError: !1,
            })
            .then(
                (t) => {
                    let { body: n } = t,
                        r = (0, f.cf)(n);
                    return a.Z.dispatch(
                        h(
                            {
                                type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                                guildId: e,
                            },
                            r,
                        ),
                    ).then(() => r.prompts);
                },
                (t) => (
                    a.Z.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: e,
                    }),
                    t
                ),
            )
    );
}
async function O(e) {
    var t, n;
    let i = s.default.getId(),
        a = (0, r.yE)(
            null != (n = null == (t = l.ZP.getMember(e, i)) ? void 0 : t.flags) ? n : 0,
            _.q.COMPLETED_ONBOARDING,
        ),
        o = c.Z.getGuild(e);
    if (null == o || !o.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let u = d.Z.shouldFetchPrompts(e),
        f = d.Z.getOnboardingPrompts(e);
    if (!u && f.length > 0) return f.every((e) => !e.inOnboarding) ? T(e) : a || v(e), Promise.resolve();
    let m = await y(e);
    return Array.isArray(m) && m.every((e) => !e.inOnboarding) ? (T(e), Promise.resolve()) : (a || v(e), m);
}
function v(e) {
    a.Z.dispatch({
        type: "GUILD_ONBOARDING_START",
        guildId: e,
    });
}
let S = -2,
    I = -3;
function T(e) {
    u.default.track(
        p.rMx.GUILD_ONBOARDING_STEP_VIEWED,
        E(h({}, (0, o.hH)(e)), {
            step: S,
            required: !0,
        }),
    ),
        u.default.track(
            p.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
            E(h({}, (0, o.hH)(e)), {
                step: S,
                skipped: !1,
                is_final_step: !0,
                in_onboarding: !0,
            }),
        );
}
