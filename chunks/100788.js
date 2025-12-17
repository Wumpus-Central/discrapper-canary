n.d(t, { z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(409813),
    s = n(51499),
    l = n(614277),
    c = n(658114),
    u = n(514749),
    d = n(81088),
    f = n(175977);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = (e) => (0, r.jsx)(h, _({}, e)),
    h = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: o,
                reviewBodyLegalContent: u,
                errorMessage: p,
                warningMessage: m,
                primaryCTAButtonProps: h,
            } = t,
            g = i.useMemo(
                () =>
                    _(
                        {
                            variant: "active",
                            type: "submit",
                            "data-testid": "submitButton",
                        },
                        h,
                    ),
                [h],
            );
        return n
            ? (0, r.jsx)("div", {
                  className: f.stepBody,
                  children: (0, r.jsx)(a.$jN, { type: a.$jN.Type.WANDERING_CUBES }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Z, {}),
                      (0, r.jsxs)(l.C3, {
                          children: [
                              (0, r.jsxs)(a.Kqy, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != p ? (0, r.jsx)(d.vw, { message: p }) : null,
                                      null != m ? (0, r.jsx)(c.Z, { message: m }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.stepBody,
                                  children: [o, u],
                              }),
                          ],
                      }),
                      (0, r.jsx)(l.O3, {
                          children: (0, r.jsx)(d.Ds, {
                              primaryCTAButtonProps: g,
                              showLockIcon: !0,
                          }),
                      }),
                  ],
              });
    },
    g = (0, u.q)({
        step: o.h8.REVIEW,
        renderStep: m,
        DirectStepComponent: h,
    });
