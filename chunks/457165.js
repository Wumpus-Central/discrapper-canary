n.d(t, { i: () => l });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(981631);
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
function s(e) {
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
function l() {
    (0, i.ZDy)(async () => {
        let { default: e } = await n.e("10165").then(n.bind(n, 166335));
        return (t) =>
            (0, r.jsx)(
                e,
                s(
                    {
                        analyticsSource: a.Sbl.VOICE_FILTERS,
                        analyticsLocation: {
                            section: a.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            object: a.qAy.BUTTON_CTA,
                        },
                    },
                    t,
                ),
            );
    });
}
