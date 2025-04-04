n.d(t, { z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(239091),
    a = n(430824),
    s = n(594174),
    l = n(74538);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t, i, a) {
    let c = s.default.getCurrentUser();
    (null != t || l.ZP.canUseCustomCallSounds(c)) &&
        (0, o.jW)(e, async () => {
            let { default: e } = await n.e('93741').then(n.bind(n, 547652));
            return (n) =>
                (0, r.jsx)(
                    e,
                    f(u({}, n), {
                        soundGuild: t,
                        activeCallGuildId: a,
                        sound: i
                    })
                );
        });
}
function p(e, t) {
    return i.useCallback(
        (n) => {
            n.stopPropagation();
            let r = a.Z.getGuild(e.guildId),
                i = s.default.getCurrentUser();
            (null != r || l.ZP.canUseCustomCallSounds(i)) && _(n, r, e, t);
        },
        [e, t]
    );
}
