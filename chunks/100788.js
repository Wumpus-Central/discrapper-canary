n.d(t, { z: () => h });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(409813),
    o = n(51499),
    s = n(614277),
    l = n(658114),
    c = n(514749),
    u = n(81088),
    d = n(175977);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = (e) => (0, r.jsx)(m, p({}, e)),
    m = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: a,
                reviewBodyLegalContent: c,
                errorMessage: f,
                warningMessage: p,
                primaryCTAButtonProps: _,
            } = t;
        return n
            ? (0, r.jsx)("div", {
                  className: d.stepBody,
                  children: (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.Z, {}),
                      (0, r.jsxs)(s.C3, {
                          children: [
                              (0, r.jsxs)(i.Kqy, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != f ? (0, r.jsx)(u.vw, { message: f }) : null,
                                      null != p ? (0, r.jsx)(l.Z, { message: p }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: d.stepBody,
                                  children: [a, c],
                              }),
                          ],
                      }),
                      (0, r.jsx)(s.O3, {
                          children: (0, r.jsx)(u.Ds, {
                              primaryCTAButtonProps: _,
                              showLockIcon: !0,
                          }),
                      }),
                  ],
              });
    },
    h = (0, c.q)({
        step: a.h8.REVIEW,
        renderStep: _,
        DirectStepComponent: m,
    });
