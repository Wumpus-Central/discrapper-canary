n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(785717),
    u = n(280885),
    d = n(171368),
    f = n(981631),
    _ = n(388032),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
        let { user: t, onClose: n, bio: o, hidePersonalInformation: h, viewFullBioDisabled: g = !1 } = e,
            { context: y } = (0, c.KZ)(),
            { analyticsLocations: v } = (0, l.ZP)(),
            [O, I] = i.useState(null),
            [S, T] = i.useState(!1),
            [N, A] = i.useState(!1),
            C = (e) => {
                null != e && (I(e), T(!N && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > b && A(!0));
            },
            R = () => {
                null == n || n(),
                    (0, d.openUserProfileModal)(
                        E(m({}, y), {
                            userId: t.id,
                            sourceAnalyticsLocations: v,
                            analyticsLocation: { section: f.jXE.BITE_SIZE_PROFILE_POPOUT }
                        })
                    );
            },
            P = (e) => {
                null == O || (null == O ? void 0 : O.contains(e.relatedTarget)) || (O.scrollTop = 0);
            };
        return h || null == o || '' === o
            ? null
            : (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)('div', {
                          ref: C,
                          className: a()(p.descriptionClamp, N && p.maxBioHeight),
                          onBlur: P,
                          children: (0, r.jsx)(u.Z, {
                              userBio: o,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (S || N) &&
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              className: p.viewFullBio,
                              color: a()(p.viewFullBioColor, g && p.viewFullBioDisabled),
                              onClick: R,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: _.NW.string(_.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
