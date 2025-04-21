n.d(t, {
    T: () => O,
    Z: () => P
});
var r = n(200651),
    l = n(192379),
    i = n(442837),
    s = n(481060),
    a = n(239091),
    c = n(129861),
    o = n(81897),
    u = n(906732),
    d = n(158776),
    m = n(785717),
    p = n(806729),
    f = n(857302),
    j = n(171368),
    b = n(981631),
    x = n(388032),
    v = n(301150);
function g(e) {
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
function h(e, t) {
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
let y = (0, s.pxk)(s.EFr.SIZE_40);
function O(e) {
    let { user: t, status: l, onSelect: o } = e,
        u = (0, i.e7)([d.Z], () => d.Z.isMobileOnline(t.id));
    return (0, r.jsxs)(s.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('70686')]).then(n.bind(n, 881351));
                return (n) => (0, r.jsx)(e, h(g({}, n), { user: t }));
            });
        },
        children: [
            (0, r.jsx)(s.qEK, {
                src: t.getAvatarURL(void 0, y),
                'aria-label': t.username,
                size: s.EFr.SIZE_40,
                status: l,
                isMobile: u,
                className: v.listAvatar
            }),
            (0, r.jsx)(c.Z, {
                user: t,
                className: v.listName,
                discriminatorClass: v.listDiscriminator
            })
        ]
    });
}
function P(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: i } = (0, p.Z)(t),
        { analyticsLocations: a } = (0, u.ZP)(),
        { context: c, trackUserProfileAction: d } = (0, m.KZ)(),
        y = (0, o.Z)();
    l.useEffect(() => {
        (0, f.Z)(t.id, y);
    }, [t.id, y]);
    let P = (e) => {
        n(),
            (0, j.openUserProfileModal)(
                h(g({}, c), {
                    userId: e,
                    sourceAnalyticsLocations: a,
                    analyticsLocation: { section: b.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                })
            );
    };
    return (0, r.jsx)(s.zJl, {
        className: v.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, r.jsx)('div', {
                      className: v.empty,
                      children: (0, r.jsx)(s.$jN, {})
                  })
                : 0 === i.length
                  ? (0, r.jsxs)('div', {
                        className: v.empty,
                        children: [
                            (0, r.jsx)('div', { className: v.emptyIconFriends }),
                            (0, r.jsx)('div', {
                                className: v.emptyText,
                                children: x.intl.string(x.t['/5p4g4'])
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { key: t, user: n, status: l } = e;
                        return (0, r.jsx)(
                            O,
                            {
                                user: n,
                                status: l,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), P(n.id);
                                }
                            },
                            t
                        );
                    })
    });
}
