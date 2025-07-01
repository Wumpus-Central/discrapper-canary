n.d(t, { i: () => f });
var r = n(255367),
    i = n(481060),
    a = n(626135),
    o = n(598117),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = async function () {
    let { userImage: e = null, guildId: t = null, analyticsLocation: l = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (a.default.track(s.rMx.OPEN_MODAL, {
        type: 'Emoji Studio',
        source: l
    }),
        await (0, i.ZDy)(
            async () => {
                let { EmojiStudioModal: i } = await Promise.all([n.e('20087'), n.e('56535')]).then(n.bind(n, 546200));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        d(c({}, n), {
                            userImage: e,
                            guildId: t
                        })
                    );
            },
            { modalKey: o.Hj }
        ));
};
