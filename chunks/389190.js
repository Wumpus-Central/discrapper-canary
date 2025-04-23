r.d(t, {
    T: () => O,
    Z: () => h
});
var n = r(200651),
    i = r(192379),
    s = r(442837),
    l = r(481060),
    a = r(239091),
    c = r(129861),
    o = r(81897),
    u = r(906732),
    d = r(158776),
    p = r(785717),
    f = r(806729),
    m = r(857302),
    j = r(892001),
    b = r(388032),
    g = r(301150);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let y = (0, l.pxk)(l.EFr.SIZE_40);
function O(e) {
    let { user: t, status: i, onSelect: o } = e,
        u = (0, s.e7)([d.Z], () => d.Z.isMobileOnline(t.id));
    return (0, n.jsxs)(l.P3F, {
        focusProps: { offset: { right: 8 } },
        className: g.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                return (r) => (0, n.jsx)(e, x(v({}, r), { user: t }));
            });
        },
        children: [
            (0, n.jsx)(l.qEK, {
                src: t.getAvatarURL(void 0, y),
                'aria-label': t.username,
                size: l.EFr.SIZE_40,
                status: i,
                isMobile: u,
                className: g.listAvatar
            }),
            (0, n.jsx)(c.Z, {
                user: t,
                className: g.listName,
                discriminatorClass: g.listDiscriminator
            })
        ]
    });
}
function h(e) {
    let { user: t, onClose: r } = e,
        { mutualFriends: s } = (0, f.Z)(t),
        { analyticsLocations: a } = (0, u.ZP)(),
        { context: c, trackUserProfileAction: d } = (0, p.KZ)(),
        y = (0, o.Z)();
    i.useEffect(() => {
        (0, m.Z)(t.id, y);
    }, [t.id, y]);
    let h = (e) => {
        r(),
            (0, j.openUserProfileModal)(
                x(v({}, c), {
                    userId: e,
                    sourceAnalyticsLocations: a
                })
            );
    };
    return (0, n.jsx)(l.zJl, {
        className: g.listScroller,
        fade: !0,
        children:
            null == s
                ? (0, n.jsx)('div', {
                      className: g.empty,
                      children: (0, n.jsx)(l.$jN, {})
                  })
                : 0 === s.length
                  ? (0, n.jsxs)('div', {
                        className: g.empty,
                        children: [
                            (0, n.jsx)('div', { className: g.emptyIconFriends }),
                            (0, n.jsx)('div', {
                                className: g.emptyText,
                                children: b.intl.string(b.t['/5p4g4'])
                            })
                        ]
                    })
                  : s.map((e) => {
                        let { key: t, user: r, status: i } = e;
                        return (0, n.jsx)(
                            O,
                            {
                                user: r,
                                status: i,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), h(r.id);
                                }
                            },
                            t
                        );
                    })
    });
}
