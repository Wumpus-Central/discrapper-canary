n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
        let { user: t, onClose: n, bio: o, hidePersonalInformation: p, viewFullBioDisabled: m = !1 } = e,
            { context: b } = (0, c.KZ)(),
            { analyticsLocations: y } = (0, l.ZP)(),
            [O, v] = i.useState(null),
            [I, S] = i.useState(!1),
            [T, A] = i.useState(!1),
            N = (e) => {
                null != e && (v(e), S(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && A(!0));
            },
            C = () => {
                null == n || n(),
                    (0, u.openUserProfileModal)(
                        g(h({}, b), {
                            userId: t.id,
                            sourceAnalyticsLocations: y
                        })
                    );
            },
            R = (e) => {
                null == O || (null == O ? void 0 : O.contains(e.relatedTarget)) || (O.scrollTop = 0);
            };
        return p || null == o || '' === o
            ? null
            : (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)('div', {
                          ref: N,
                          className: a()(_.descriptionClamp, T && _.maxBioHeight),
                          onBlur: R,
                          children: (0, r.jsx)(d.Z, {
                              userBio: o,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (I || T) &&
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              className: _.viewFullBio,
                              color: a()(_.viewFullBioColor, m && _.viewFullBioDisabled),
                              onClick: C,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: f.intl.string(f.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
