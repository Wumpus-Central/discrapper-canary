n.d(t, {
    T: function () {
        return C;
    },
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(239091),
    s = n(129861),
    o = n(906732),
    c = n(158776),
    d = n(785717),
    u = n(697927),
    h = n(171368),
    p = n(981631),
    m = n(388032),
    f = n(731218);
let g = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_40);
function C(e) {
    let { user: t, status: o, onSelect: d } = e,
        u = (0, l.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, i.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t
                    });
            });
        },
        children: [
            (0, i.jsx)(r.Avatar, {
                src: t.getAvatarURL(void 0, g),
                'aria-label': t.username,
                size: r.AvatarSizes.SIZE_40,
                status: o,
                isMobile: u,
                className: f.listAvatar
            }),
            (0, i.jsx)(s.Z, {
                user: t,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function x(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: l, isFetching: a } = (0, u.Z)(t.id),
        { analyticsLocations: s } = (0, o.ZP)(),
        { context: c, trackUserProfileAction: g } = (0, d.KZ)(),
        x = (e) => {
            n(),
                (0, h.openUserProfileModal)({
                    ...c,
                    userId: e,
                    sourceAnalyticsLocations: s,
                    analyticsLocation: { section: p.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, i.jsx)(r.ScrollerThin, {
        className: f.listScroller,
        fade: !0,
        children:
            null == l && a
                ? (0, i.jsx)('div', {
                      className: f.empty,
                      children: (0, i.jsx)(r.Spinner, {})
                  })
                : (null != l || a) && (null == l ? void 0 : l.length) !== 0
                  ? null == l
                      ? void 0
                      : l.map((e) => {
                            let { key: t, user: n, status: l } = e;
                            return (0, i.jsx)(
                                C,
                                {
                                    user: n,
                                    status: l,
                                    onSelect: () => {
                                        g({ action: 'PRESS_MUTUAL_FRIEND' }), x(n.id);
                                    }
                                },
                                t
                            );
                        })
                  : (0, i.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, i.jsx)('div', { className: f.emptyIconFriends }),
                            (0, i.jsx)('div', {
                                className: f.emptyText,
                                children: m.intl.string(m.t['/5p4g4'])
                            })
                        ]
                    })
    });
}
