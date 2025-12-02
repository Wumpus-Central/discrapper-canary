n.d(t, { s: () => h });
var r = n(54381),
    i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(409813),
    l = n(51499),
    c = n(614277),
    u = n(658114),
    d = n(81088),
    f = n(467368),
    p = n(671930);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = (e) => {
    let { paymentModalStepProps: t } = e,
        { unifiedCheckoutStepProps: n } = (0, f.Li)(),
        i = n[s.h8.REVIEW];
    a()(null != i, "Unified review step props are not set");
    let {
        reviewBodyContent: _,
        reviewBodyLegalContent: h,
        errorMessage: g,
        warningMessage: E,
        primaryCTAButtonProps: b,
        SideEffectComponent: y,
    } = i;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != y ? (0, r.jsx)(y, m({}, t)) : null,
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)(c.C3, {
                children: [
                    (0, r.jsxs)(o.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            null != g ? (0, r.jsx)(d.vw, { message: g }) : null,
                            null != E ? (0, r.jsx)(u.Z, { message: E }) : null,
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: p.stepBody,
                        children: [_, h],
                    }),
                ],
            }),
            (0, r.jsx)(c.O3, { children: (0, r.jsx)(d.Ds, { primaryCTAButtonProps: b }) }),
        ],
    });
};
