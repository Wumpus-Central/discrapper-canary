r.d(t, {
    T: () => O,
    Z: () => N
});
var n = r(200651),
    l = r(192379),
    s = r(442837),
    i = r(481060),
    a = r(239091),
    c = r(129861),
    o = r(81897),
    u = r(906732),
    d = r(158776),
    m = r(785717),
    p = r(806729),
    f = r(857302),
    j = r(171368),
    b = r(981631),
    x = r(388032),
    v = r(301150);
function g(e) {
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
function h(e, t) {
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
let y = (0, i.pxk)(i.EFr.SIZE_40);
function O(e) {
    let { user: t, status: l, onSelect: o } = e,
        u = (0, s.e7)([d.Z], () => d.Z.isMobileOnline(t.id));
    return (0, n.jsxs)(i.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('70686')]).then(r.bind(r, 881351));
                return (r) => (0, n.jsx)(e, h(g({}, r), { user: t }));
            });
        },
        children: [
            (0, n.jsx)(i.qEK, {
                src: t.getAvatarURL(void 0, y),
                'aria-label': t.username,
                size: i.EFr.SIZE_40,
                status: l,
                isMobile: u,
                className: v.listAvatar
            }),
            (0, n.jsx)(c.Z, {
                user: t,
                className: v.listName,
                discriminatorClass: v.listDiscriminator
            })
        ]
    });
}
function N(e) {
    let { user: t, onClose: r } = e,
        { mutualFriends: s } = (0, p.Z)(t),
        { analyticsLocations: a } = (0, u.ZP)(),
        { context: c, trackUserProfileAction: d } = (0, m.KZ)(),
        y = (0, o.Z)();
    l.useEffect(() => {
        (0, f.Z)(t.id, y);
    }, [t.id, y]);
    let N = (e) => {
        r(),
            (0, j.openUserProfileModal)(
                h(g({}, c), {
                    userId: e,
                    sourceAnalyticsLocations: a,
                    analyticsLocation: { section: b.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                })
            );
    };
    return (0, n.jsx)(i.zJl, {
        className: v.listScroller,
        fade: !0,
        children:
            null == s
                ? (0, n.jsx)('div', {
                      className: v.empty,
                      children: (0, n.jsx)(i.$jN, {})
                  })
                : 0 === s.length
                  ? (0, n.jsxs)('div', {
                        className: v.empty,
                        children: [
                            (0, n.jsx)('div', { className: v.emptyIconFriends }),
                            (0, n.jsx)('div', {
                                className: v.emptyText,
                                children: x.NW.string(x.t['/5p4g4'])
                            })
                        ]
                    })
                  : s.map((e) => {
                        let { key: t, user: r, status: l } = e;
                        return (0, n.jsx)(
                            O,
                            {
                                user: r,
                                status: l,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), N(r.id);
                                }
                            },
                            t
                        );
                    })
    });
}
