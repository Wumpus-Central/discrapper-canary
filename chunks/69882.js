n.d(t, { P: () => g });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(166532),
    o = n(69494),
    l = n(482132),
    c = n(516248),
    u = n(866485),
    d = n(981036),
    f = n(954848);
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
let h = (e) => (0, r.jsx)(m, _({}, e)),
    m = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: s,
                reviewBodyLegalContent: u,
                errorMessage: p,
                warningMessage: h,
                primaryCTAButtonProps: m,
            } = t,
            g = i.useMemo(
                () =>
                    _(
                        {
                            variant: "active",
                            type: "submit",
                            "data-testid": "submitButton",
                        },
                        m,
                    ),
                [m],
            );
        return n
            ? (0, r.jsx)("div", {
                  className: f.D,
                  children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.WANDERING_CUBES }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.A, {}),
                      (0, r.jsxs)(l.dZ, {
                          children: [
                              (0, r.jsxs)(a.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != p ? (0, r.jsx)(d.Wg, { message: p }) : null,
                                      null != h ? (0, r.jsx)(c.A, { message: h }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.D,
                                  children: [s, u],
                              }),
                          ],
                      }),
                      (0, r.jsx)(l.UX, {
                          children: (0, r.jsx)(d.cy, {
                              primaryCTAButtonProps: g,
                              showLockIcon: !0,
                          }),
                      }),
                  ],
              });
    },
    g = (0, u.R)({
        step: s.pn.REVIEW,
        renderStep: h,
        DirectStepComponent: m,
    });
