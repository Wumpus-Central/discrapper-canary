n.d(t, {
    T: () => y,
    Z: () => O
});
var r = n(200651),
    l = n(192379),
    s = n(442837),
    i = n(481060),
    a = n(239091),
    c = n(129861),
    o = n(81897),
    u = n(906732),
    d = n(158776),
    m = n(785717),
    p = n(806729),
    f = n(857302),
    j = n(171368),
    b = n(388032),
    x = n(301150);
function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (0, i.pxk)(i.EFr.SIZE_40);
function y(e) {
    let { user: t, status: l, onSelect: o } = e,
        u = (0, s.e7)([d.Z], () => d.Z.isMobileOnline(t.id));
    return (0, r.jsxs)(i.P3F, {
        focusProps: { offset: { right: 8 } },
        className: x.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                return (n) => (0, r.jsx)(e, g(v({}, n), { user: t }));
            });
        },
        children: [
            (0, r.jsx)(i.qEK, {
                src: t.getAvatarURL(void 0, h),
                'aria-label': t.username,
                size: i.EFr.SIZE_40,
                status: l,
                isMobile: u,
                className: x.listAvatar
            }),
            (0, r.jsx)(c.Z, {
                user: t,
                className: x.listName,
                discriminatorClass: x.listDiscriminator
            })
        ]
    });
}
function O(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: s } = (0, p.Z)(t),
        { analyticsLocations: a } = (0, u.ZP)(),
        { context: c, trackUserProfileAction: d } = (0, m.KZ)(),
        h = (0, o.Z)();
    l.useEffect(() => {
        (0, f.Z)(t.id, h);
    }, [t.id, h]);
    let O = (e) => {
        n(),
            (0, j.openUserProfileModal)(
                g(v({}, c), {
                    userId: e,
                    sourceAnalyticsLocations: a
                })
            );
    };
    return (0, r.jsx)(i.zJl, {
        className: x.listScroller,
        fade: !0,
        children:
            null == s
                ? (0, r.jsx)('div', {
                      className: x.empty,
                      children: (0, r.jsx)(i.$jN, {})
                  })
                : 0 === s.length
                  ? (0, r.jsxs)('div', {
                        className: x.empty,
                        children: [
                            (0, r.jsx)('div', { className: x.emptyIconFriends }),
                            (0, r.jsx)('div', {
                                className: x.emptyText,
                                children: b.intl.string(b.t['/5p4g4'])
                            })
                        ]
                    })
                  : s.map((e) => {
                        let { key: t, user: n, status: l } = e;
                        return (0, r.jsx)(
                            y,
                            {
                                user: n,
                                status: l,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), O(n.id);
                                }
                            },
                            t
                        );
                    })
    });
}
