n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(129861),
    l = n(184301),
    u = n(347475),
    c = n(475300);
function d(e) {
    let { user: t, guildId: n, channelId: r, nick: d, className: f, textClassName: _, disablePopout: p, ignoreModalClicks: h, onClick: m, onContextMenu: g, onPopoutRequestOpen: E, onPopoutRequestClose: v } = e;
    return (0, i.jsx)(s.yRy, {
        preload: () =>
            (0, l.Z)(t.id, t.getAvatarURL(n, (0, s.pxk)(s.EFr.SIZE_80)), {
                guildId: n,
                channelId: r
            }),
        renderPopout: (e) =>
            (0, i.jsx)(u.Z, {
                ...e,
                userId: t.id,
                guildId: n,
                channelId: r
            }),
        position: 'left',
        shouldShow: !p && void 0,
        onRequestOpen: E,
        onRequestClose: v,
        ignoreModalClicks: h,
        children: (e) => {
            let { onClick: r, ...l } = e;
            return (0, i.jsxs)(s.P3F, {
                ...l,
                className: a()(c.userListItem, f, { [c.popoutDisabled]: p }),
                onContextMenu: g,
                onClick: (e) => {
                    r(e), null == m || m(e);
                },
                children: [
                    (0, i.jsx)(s.qEK, {
                        src: t.getAvatarURL(n, (0, s.pxk)(s.EFr.SIZE_24)),
                        className: c.avatar,
                        'aria-label': t.username,
                        size: s.EFr.SIZE_24
                    }),
                    (0, i.jsx)(s.Text, {
                        className: a()(c.userListItemTag, _),
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(o.Z, {
                            user: t,
                            nick: d,
                            usernameClass: c.username,
                            hideDiscriminator: !0
                        })
                    })
                ]
            });
        }
    });
}
