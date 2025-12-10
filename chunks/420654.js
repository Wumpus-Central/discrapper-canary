n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(892001),
    d = n(280885),
    f = n(388032),
    p = n(108670);
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
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 57.75,
    b = i.memo(function (e) {
        let { user: t, onClose: n, bio: a, hidePersonalInformation: _, viewFullBioDisabled: h = !1 } = e,
            { context: b } = (0, c.KZ)(),
            { analyticsLocations: y } = (0, l.ZP)(),
            [O, v] = i.useState(!1),
            [S, I] = i.useState(!1),
            T = i.useRef(null),
            C = (e) => {
                (T.current = e),
                    null != e &&
                        (v(!S && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && I(!0));
            },
            A = () => {
                null == n || n(),
                    (0, u.openUserProfileModal)(
                        g(m({}, b), {
                            userId: t.id,
                            sourceAnalyticsLocations: y,
                        }),
                    );
            },
            N = (e) => {
                null == T.current || T.current.contains(e.relatedTarget) || (T.current.scrollTop = 0);
            };
        return _ || null == a || "" === a
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          ref: C,
                          className: o()(p.descriptionClamp, S && p.maxBioHeight),
                          onBlur: N,
                          children: (0, r.jsx)(d.Z, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: "header-primary",
                          }),
                      }),
                      (O || S) &&
                          (0, r.jsx)("div", {
                              className: p.viewFullBio,
                              children: (0, r.jsx)(s.Avr, {
                                  textVariant: "text-xs/normal",
                                  size: "sm",
                                  variant: "secondary",
                                  text: f.intl.string(f.t.YDiPq8),
                                  onClick: A,
                                  disabled: h,
                              }),
                          }),
                  ],
              });
    });
