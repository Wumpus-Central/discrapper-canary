n.d(t, { Z: () => b }), n(47120);
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
    p = n(388032),
    _ = n(285424);
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
let v = 57.75,
    b = i.memo(function (e) {
        let { user: t, onClose: n, bio: o, hidePersonalInformation: h, viewFullBioDisabled: g = !1 } = e,
            { context: b } = (0, c.KZ)(),
            { analyticsLocations: y } = (0, l.ZP)(),
            [O, S] = i.useState(null),
            [I, T] = i.useState(!1),
            [N, A] = i.useState(!1),
            C = (e) => {
                null != e && (S(e), T(!N && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > v && A(!0));
            },
            R = () => {
                null == n || n(),
                    (0, d.openUserProfileModal)(
                        E(m({}, b), {
                            userId: t.id,
                            sourceAnalyticsLocations: y,
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
                          className: a()(_.descriptionClamp, N && _.maxBioHeight),
                          onBlur: P,
                          children: (0, r.jsx)(u.Z, {
                              userBio: o,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (I || N) &&
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              className: _.viewFullBio,
                              color: a()(_.viewFullBioColor, g && _.viewFullBioDisabled),
                              onClick: R,
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: p.NW.string(p.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
