n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    a = n(210975),
    s = n(158776),
    o = n(699516),
    c = n(594174),
    d = n(51144),
    u = n(984370),
    h = n(388032),
    p = n(247627);
function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, l.e7)([c.default], () => c.default.getUser(t)),
        f = (0, l.e7)([s.Z], () => s.Z.getStatus(t)),
        g = (0, l.e7)([s.Z], () => s.Z.isMobileOnline(t)),
        C = (0, l.e7)([o.Z], () => o.Z.getNickname(t)),
        x = d.ZP.useUserTag(m),
        v = (0, a.m$)({
            channelId: e.channel.id,
            location: 'HeaderBarDirectMessageV2'
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: h.intl.string(h.t.EJRzg4) }),
            null != m &&
                !n &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(r.Avatar, {
                        status: f,
                        isMobile: g,
                        className: p.avatar,
                        size: r.AvatarSizes.SIZE_24,
                        'aria-label': d.ZP.getName(m),
                        src: m.getAvatarURL(void 0, 24)
                    })
                }),
            (0, i.jsx)(u.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? p.cursorPointer : null,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.TooltipContainer, {
                            text: x,
                            position: 'bottom',
                            children: null != C ? C : d.ZP.getName(m)
                        }),
                        v &&
                            (0, i.jsx)(r.Tooltip, {
                                text: h.intl.string(h.t.QyZ4TU),
                                children: (e) =>
                                    (0, i.jsx)(r.ShieldLockIcon, {
                                        ...e,
                                        size: 'xs',
                                        'aria-label': h.intl.string(h.t.VHXh8f),
                                        color: r.tokens.colors.INTERACTIVE_NORMAL,
                                        className: p.secureFramesIcon
                                    })
                            })
                    ]
                })
            })
        ]
    });
}
