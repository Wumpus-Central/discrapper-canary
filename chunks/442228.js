n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(688810),
    c = n(183555),
    u = n(657331),
    d = n(389996),
    f = n(985018),
    p = n(200894);
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
                _(e, t, n[t]);
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
        let { user: t, onClose: n, bio: a, hidePersonalInformation: _, viewFullBioDisabled: m = !1 } = e,
            { context: b } = (0, c.NJ)(),
            { analyticsLocations: y } = (0, l.Ay)(),
            [O, A] = i.useState(!1),
            [v, S] = i.useState(!1),
            I = i.useRef(null),
            T = (e) => {
                (I.current = e),
                    null == e ||
                        (A(!v && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && S(!0));
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
                null == I.current || I.current.contains(e.relatedTarget) || (I.current.scrollTop = 0);
            };
        return _ || null == a || "" === a
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)("div", {
                          ref: T,
                          className: s()(p.mA, v && p.Em),
                          onBlur: N,
                          children: (0, r.jsx)(d.A, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: "text-strong",
                          }),
                      }),
                      (O || v) &&
                          (0, r.jsx)("div", {
                              className: p.HV,
                              children: (0, r.jsx)(o.QWc, {
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
