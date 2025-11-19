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
    _ = n(108670);
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
function h(e) {
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
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 57.75,
    b = i.memo(function (e) {
        let { user: t, onClose: n, bio: a, hidePersonalInformation: p, viewFullBioDisabled: m = !1 } = e,
            { context: b } = (0, c.KZ)(),
            { analyticsLocations: y } = (0, l.ZP)(),
            [O, v] = i.useState(!1),
            [I, T] = i.useState(!1),
            S = i.useRef(null),
            A = (e) => {
                (S.current = e),
                    null != e &&
                        (v(!I && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && T(!0));
            },
            C = () => {
                null == n || n(),
                    (0, u.openUserProfileModal)(
                        g(h({}, b), {
                            userId: t.id,
                            sourceAnalyticsLocations: y,
                        }),
                    );
            },
            N = (e) => {
                null == S.current || S.current.contains(e.relatedTarget) || (S.current.scrollTop = 0);
            };
        return p || null == a || "" === a
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          ref: A,
                          className: o()(_.descriptionClamp, I && _.maxBioHeight),
                          onBlur: N,
                          children: (0, r.jsx)(d.Z, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: "header-primary",
                          }),
                      }),
                      (O || I) &&
                          (0, r.jsx)("div", {
                              className: _.viewFullBio,
                              children: (0, r.jsx)(s.Avr, {
                                  textVariant: "text-xs/normal",
                                  size: "sm",
                                  variant: "secondary",
                                  text: f.intl.string(f.t.YDiPq8),
                                  onClick: C,
                                  disabled: m,
                              }),
                          }),
                  ],
              });
    });
