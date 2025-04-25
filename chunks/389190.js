r.d(t, {
    T: () => x,
    Z: () => h
});
var n = r(200651),
    s = r(192379),
    i = r(442837),
    l = r(481060),
    c = r(239091),
    a = r(129861),
    o = r(81897),
    u = r(906732),
    d = r(158776),
    p = r(785717),
    f = r(806729),
    b = r(857302),
    j = r(892001),
    m = r(388032),
    y = r(301150);
function O(e) {
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
function g(e, t) {
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
let v = (0, l.pxk)(l.EFr.SIZE_40);
function x(e) {
    let { user: t, status: s, onSelect: o } = e,
        u = (0, i.e7)([d.Z], () => d.Z.isMobileOnline(t.id));
    return (0, n.jsxs)(l.P3F, {
        focusProps: { offset: { right: 8 } },
        className: y.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                return (r) => (0, n.jsx)(e, g(O({}, r), { user: t }));
            });
        },
        children: [
            (0, n.jsx)(l.qEK, {
                src: t.getAvatarURL(void 0, v),
                'aria-label': t.username,
                size: l.EFr.SIZE_40,
                status: s,
                isMobile: u,
                className: y.listAvatar
            }),
            (0, n.jsx)(a.Z, {
                user: t,
                className: y.listName,
                discriminatorClass: y.listDiscriminator
            })
        ]
    });
}
function h(e) {
    let { user: t, onClose: r } = e,
        { mutualFriends: i } = (0, f.Z)(t),
        { analyticsLocations: c } = (0, u.ZP)(),
        { context: a, trackUserProfileAction: d } = (0, p.KZ)(),
        v = (0, o.Z)();
    s.useEffect(() => {
        (0, b.Z)(t.id, v);
    }, [t.id, v]);
    let h = (e) => {
        r(),
            (0, j.openUserProfileModal)(
                g(O({}, a), {
                    userId: e,
                    sourceAnalyticsLocations: c
                })
            );
    };
    return (0, n.jsx)(l.zJl, {
        className: y.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, n.jsx)('div', {
                      className: y.empty,
                      children: (0, n.jsx)(l.$jN, {})
                  })
                : 0 === i.length
                  ? (0, n.jsxs)('div', {
                        className: y.empty,
                        children: [
                            (0, n.jsx)('div', { className: y.emptyIconFriends }),
                            (0, n.jsx)('div', {
                                className: y.emptyText,
                                children: m.intl.string(m.t['/5p4g4'])
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { key: t, user: r, status: s } = e;
                        return (0, n.jsx)(
                            x,
                            {
                                user: r,
                                status: s,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), h(r.id);
                                }
                            },
                            t
                        );
                    })
    });
}
