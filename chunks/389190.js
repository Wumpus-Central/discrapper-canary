r.d(t, {
    T: () => y,
    Z: () => h
});
var n = r(200651);
r(192379);
var l = r(442837),
    s = r(481060),
    i = r(239091),
    a = r(129861),
    o = r(906732),
    c = r(158776),
    u = r(785717),
    d = r(697927),
    m = r(171368),
    p = r(981631),
    j = r(388032),
    f = r(865152);
function x(e) {
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
function b(e, t) {
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
let v = (0, s.pxk)(s.EFr.SIZE_40);
function y(e) {
    let { user: t, status: o, onSelect: u } = e,
        d = (0, l.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, n.jsxs)(s.P3F, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: u,
        onContextMenu: (e) => {
            (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('79695'), r.e('69220'), r.e('31327')]).then(r.bind(r, 881351));
                return (r) => (0, n.jsx)(e, b(x({}, r), { user: t }));
            });
        },
        children: [
            (0, n.jsx)(s.qEK, {
                src: t.getAvatarURL(void 0, v),
                'aria-label': t.username,
                size: s.EFr.SIZE_40,
                status: o,
                isMobile: d,
                className: f.listAvatar
            }),
            (0, n.jsx)(a.Z, {
                user: t,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function h(e) {
    let { user: t, onClose: r } = e,
        { mutualFriends: l, isFetching: i } = (0, d.Z)(t.id),
        { analyticsLocations: a } = (0, o.ZP)(),
        { context: c, trackUserProfileAction: v } = (0, u.KZ)(),
        h = (e) => {
            r(),
                (0, m.openUserProfileModal)(
                    b(x({}, c), {
                        userId: e,
                        sourceAnalyticsLocations: a,
                        analyticsLocation: { section: p.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                    })
                );
        };
    return (0, n.jsx)(s.zJl, {
        className: f.listScroller,
        fade: !0,
        children:
            null == l && i
                ? (0, n.jsx)('div', {
                      className: f.empty,
                      children: (0, n.jsx)(s.$jN, {})
                  })
                : (null != l || i) && (null == l ? void 0 : l.length) !== 0
                  ? null == l
                      ? void 0
                      : l.map((e) => {
                            let { key: t, user: r, status: l } = e;
                            return (0, n.jsx)(
                                y,
                                {
                                    user: r,
                                    status: l,
                                    onSelect: () => {
                                        v({ action: 'PRESS_MUTUAL_FRIEND' }), h(r.id);
                                    }
                                },
                                t
                            );
                        })
                  : (0, n.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, n.jsx)('div', { className: f.emptyIconFriends }),
                            (0, n.jsx)('div', {
                                className: f.emptyText,
                                children: j.NW.string(j.t['/5p4g4'])
                            })
                        ]
                    })
    });
}
