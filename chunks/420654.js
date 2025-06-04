n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(892001),
    d = n(280885),
    f = n(388032),
    _ = n(383994);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
            [I, S] = i.useState(!1),
            T = i.useRef(null),
            A = (e) => {
                (T.current = e), null != e && (v(!I && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && S(!0));
            },
            N = () => {
                null == n || n(),
                    (0, u.openUserProfileModal)(
                        g(h({}, b), {
                            userId: t.id,
                            sourceAnalyticsLocations: y
                        })
                    );
            },
            C = (e) => {
                null == T.current || T.current.contains(e.relatedTarget) || (T.current.scrollTop = 0);
            };
        return p || null == a || '' === a
            ? null
            : (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)('div', {
                          ref: A,
                          className: o()(_.descriptionClamp, I && _.maxBioHeight),
                          onBlur: C,
                          children: (0, r.jsx)(d.Z, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (O || I) &&
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              className: _.viewFullBio,
                              color: o()(_.viewFullBioColor, m && _.viewFullBioDisabled),
                              onClick: N,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: f.intl.string(f.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
