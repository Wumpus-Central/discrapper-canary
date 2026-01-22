n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(652215);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    a.default.track(s.HAw.OPEN_MODAL, {
        type: s.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
        location: e,
    }),
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("53274").then(n.bind(n, 397313));
            return (t) => (0, r.jsx)(e, l({}, t));
        });
}
