n.d(t, {
    i: () => u,
    y: () => d
});
var r = n(200651);
n(192379);
var i = n(481060);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = 'EMOJI_STUDIO_MODAL_KEY',
    u = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        await (0, i.ZDy)(
            async () => {
                let { EmojiStudioModal: t } = await Promise.all([n.e('80728'), n.e('13912')]).then(n.bind(n, 311770));
                return (n) => (0, r.jsx)(t, l(o({}, n), { userImage: e }));
            },
            { modalKey: c }
        );
    },
    d = () => {
        (0, i.Mr3)(c);
    };
