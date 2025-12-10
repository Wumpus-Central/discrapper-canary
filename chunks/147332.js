n.d(t, { P: () => _ });
var r = n(54381),
    i = n(600164),
    a = n(409813),
    o = n(614277),
    s = n(514749),
    l = n(81088),
    c = n(933240);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = (e) => (0, r.jsx)(p, d({}, e)),
    p = (e) => {
        let { unifiedStepProps: t } = e,
            { leftColumnComponent: n, rightColumnComponent: a, primaryCTAButtonProps: s, onBackClick: u } = t;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.C3, {
                    children: (0, r.jsxs)("div", {
                        className: c.stepBody,
                        children: [n, a],
                    }),
                }),
                (0, r.jsx)(o.O3, {
                    children: (0, r.jsx)(l.Ds, {
                        onBackClick: u,
                        primaryCTAButtonProps: s,
                        justify: i.Z.Justify.BETWEEN,
                        align: i.Z.Align.CENTER,
                    }),
                }),
            ],
        });
    },
    _ = (0, s.q)({
        step: a.h8.GIFT_CUSTOMIZATION,
        renderStep: f,
        DirectStepComponent: p,
    });
