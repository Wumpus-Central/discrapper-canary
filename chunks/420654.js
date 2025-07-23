(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(785717),
    d = n(892001),
    _ = n(280885),
    f = n(388032),
    p = n(383994);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 57.75,
    y = i.memo(function (e) {
        let { user: t, onClose: n, bio: a, hidePersonalInformation: h, viewFullBioDisabled: g = !1 } = e,
            { context: y } = (0, u.KZ)(),
            { analyticsLocations: O } = (0, c.ZP)(),
            [v, I] = i.useState(!1),
            [T, S] = i.useState(!1),
            A = i.useRef(null),
            N = (e) => {
                ((A.current = e), null != e && (I(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > b && S(!0)));
            },
            C = () => {
                (null == n || n(),
                    (0, d.openUserProfileModal)(
                        E(m({}, y), {
                            userId: t.id,
                            sourceAnalyticsLocations: O
                        })
                    ));
            },
            R = (e) => {
                null == A.current || A.current.contains(e.relatedTarget) || (A.current.scrollTop = 0);
            };
        return h || null == a || '' === a
            ? null
            : (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)('div', {
                          ref: N,
                          className: o()(p.descriptionClamp, T && p.maxBioHeight),
                          onBlur: R,
                          children: (0, r.jsx)(_.Z, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (v || T) &&
                          (0, r.jsx)(s.zx, {
                              look: s.zx.Looks.BLANK,
                              size: s.zx.Sizes.NONE,
                              className: p.viewFullBio,
                              color: o()(p.viewFullBioColor, g && p.viewFullBioDisabled),
                              onClick: C,
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: f.intl.string(f.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
