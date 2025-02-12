s.d(l, {
    T: () => p,
    Z: () => f
});
var t = s(200651);
s(192379);
var i = s(442837),
    a = s(481060),
    n = s(239091),
    r = s(129861),
    c = s(906732),
    o = s(158776),
    d = s(785717),
    u = s(697927),
    m = s(171368),
    x = s(981631),
    v = s(388032),
    j = s(782276);
let h = (0, a.pxk)(a.EFr.SIZE_40);
function p(e) {
    let { user: l, status: c, onSelect: d } = e,
        u = (0, i.e7)([o.Z], () => o.Z.isMobileOnline(l.id));
    return (0, t.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: j.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('79695'), s.e('69220'), s.e('5073')]).then(s.bind(s, 881351));
                return (s) =>
                    (0, t.jsx)(e, {
                        ...s,
                        user: l
                    });
            });
        },
        children: [
            (0, t.jsx)(a.qEK, {
                src: l.getAvatarURL(void 0, h),
                'aria-label': l.username,
                size: a.EFr.SIZE_40,
                status: c,
                isMobile: u,
                className: j.listAvatar
            }),
            (0, t.jsx)(r.Z, {
                user: l,
                className: j.listName,
                discriminatorClass: j.listDiscriminator
            })
        ]
    });
}
function f(e) {
    let { user: l, onClose: s } = e,
        { mutualFriends: i, isFetching: n } = (0, u.Z)(l.id),
        { analyticsLocations: r } = (0, c.ZP)(),
        { context: o, trackUserProfileAction: h } = (0, d.KZ)(),
        f = (e) => {
            s(),
                (0, m.openUserProfileModal)({
                    ...o,
                    userId: e,
                    sourceAnalyticsLocations: r,
                    analyticsLocation: { section: x.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, t.jsx)(a.zJl, {
        className: j.listScroller,
        fade: !0,
        children:
            null == i && n
                ? (0, t.jsx)('div', {
                      className: j.empty,
                      children: (0, t.jsx)(a.$jN, {})
                  })
                : (null != i || n) && (null == i ? void 0 : i.length) !== 0
                  ? null == i
                      ? void 0
                      : i.map((e) => {
                            let { key: l, user: s, status: i } = e;
                            return (0, t.jsx)(
                                p,
                                {
                                    user: s,
                                    status: i,
                                    onSelect: () => {
                                        h({ action: 'PRESS_MUTUAL_FRIEND' }), f(s.id);
                                    }
                                },
                                l
                            );
                        })
                  : (0, t.jsxs)('div', {
                        className: j.empty,
                        children: [
                            (0, t.jsx)('div', { className: j.emptyIconFriends }),
                            (0, t.jsx)('div', {
                                className: j.emptyText,
                                children: v.intl.string(v.t['/5p4g4'])
                            })
                        ]
                    })
    });
}
