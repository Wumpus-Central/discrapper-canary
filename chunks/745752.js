n.d(t, {
    I1: () => O,
    eM: () => y,
    rK: () => v,
    rj: () => b
}),
    n(789020);
var r = n(544891),
    i = n(570140),
    o = n(367907),
    a = n(314897),
    s = n(271383),
    l = n(430824),
    c = n(626135),
    u = n(630388),
    d = n(45966),
    f = n(290511),
    _ = n(981631),
    p = n(372897);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
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
    c.default.track(
        _.rMx.GUILD_ONBOARDING_LOADED,
        E(m({}, (0, o.hH)(e)), {
            has_new_prompts: !1,
            number_of_prompts: 0
        })
    );
}
function y(e) {
    return (
        i.Z.dispatch({
            type: 'GUILD_ONBOARDING_PROMPTS_FETCH_START',
            guildId: e
        }),
        r.tn
            .get({
                url: _.ANM.GUILD_ONBOARDING(e),
                rejectWithError: !1
            })
            .then(
                (t) => {
                    let { body: n } = t,
                        r = (0, f.cf)(n);
                    return i.Z.dispatch(
                        m(
                            {
                                type: 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS',
                                guildId: e
                            },
                            r
                        )
                    ).then(() => r.prompts);
                },
                (t) => (
                    i.Z.dispatch({
                        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE',
                        guildId: e
                    }),
                    t
                )
            )
    );
}
async function v(e) {
    var t, n;
    let r = a.default.getId(),
        i = (0, u.yE)(null != (n = null == (t = s.ZP.getMember(e, r)) ? void 0 : t.flags) ? n : 0, p.q.COMPLETED_ONBOARDING),
        o = l.Z.getGuild(e);
    if (null == o || !o.hasFeature(_.oNc.GUILD_ONBOARDING)) return Promise.resolve();
    let c = d.Z.shouldFetchPrompts(e),
        f = d.Z.getOnboardingPrompts(e);
    if (!c && f.length > 0) return f.every((e) => !e.inOnboarding) ? S(e) : i || O(e), Promise.resolve();
    let h = await y(e);
    return Array.isArray(h) && h.every((e) => !e.inOnboarding) ? (S(e), Promise.resolve()) : (i || O(e), h);
}
function O(e) {
    i.Z.dispatch({
        type: 'GUILD_ONBOARDING_START',
        guildId: e
    });
}
let I = -2;
function S(e) {
    c.default.track(
        _.rMx.GUILD_ONBOARDING_STEP_VIEWED,
        E(m({}, (0, o.hH)(e)), {
            step: I,
            required: !0
        })
    ),
        c.default.track(
            _.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
            E(m({}, (0, o.hH)(e)), {
                step: I,
                skipped: !1,
                is_final_step: !0,
                in_onboarding: !0
            })
        );
}
