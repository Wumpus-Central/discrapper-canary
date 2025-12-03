n.d(t, { z: () => g }), n(415506);
var r = n(54381);
n(473749);
var i = n(512722),
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
let h = (e) => (0, r.jsx)(E, m({}, e)),
    g = (e) => {
        let { paymentModalStepProps: t } = e,
            n = (0, f.Li)(),
            { unifiedCheckoutStepMappings: i, renderModalProps: o } = n,
            l = i[s.h8.REVIEW];
        if ((a()(null != l, "Unified review step config is not set"), "StepController" in l)) {
            if (!n.enableStepControllers) throw Error("Step controllers are not enabled in Unified Checkout Context");
            let e = l.StepController,
                { checkoutContext: i } = n;
            return (0, r.jsx)(e, {
                renderStep: h,
                checkoutContext: i,
                paymentModalStepProps: t,
                renderModalProps: o,
            });
        }
        let c = l.directProps;
        return (0, r.jsx)(E, {
            paymentModalStepProps: t,
            unifiedStepProps: c,
        });
    },
    E = (e) => {
        let { paymentModalStepProps: t, unifiedStepProps: n } = e,
            {
                isStepLoading: i,
                reviewBodyContent: a,
                reviewBodyLegalContent: s,
                errorMessage: f,
                warningMessage: _,
                primaryCTAButtonProps: h,
                SideEffectComponent: g,
            } = n;
        return i
            ? (0, r.jsx)("div", {
                  className: p.stepBody,
                  children: (0, r.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      null != g ? (0, r.jsx)(g, m({}, t)) : null,
                      (0, r.jsx)(l.Z, {}),
                      (0, r.jsxs)(c.C3, {
                          children: [
                              (0, r.jsxs)(o.Kqy, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != f ? (0, r.jsx)(d.vw, { message: f }) : null,
                                      null != _ ? (0, r.jsx)(u.Z, { message: _ }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: p.stepBody,
                                  children: [a, s],
                              }),
                          ],
                      }),
                      (0, r.jsx)(c.O3, { children: (0, r.jsx)(d.Ds, { primaryCTAButtonProps: h }) }),
                  ],
              });
    };
