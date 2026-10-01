n.d(s, { A: () => p });
var a = n(477900),
    i = n(582128),
    r = n(503698),
    t = n.n(r),
    l = n(939249),
    c = n(97808),
    o = n(778712),
    u = n(834730),
    d = n(297413),
    h = n(342296),
    m = n(475977);
function p(e) {
    let {
            user: s,
            guildId: n,
            channelId: r,
            nick: p,
            className: k,
            textClassName: C,
            disablePopout: x,
            ignoreModalClicks: R,
            onClick: _,
            onContextMenu: f,
            onPopoutRequestOpen: j,
            onPopoutRequestClose: g,
        } = e,
        v = i.useRef(null);
    return (0, a.jsx)(h.A, {
        targetElementRef: v,
        user: s,
        guildId: n,
        channelId: r,
        position: "left",
        shouldShow: !x && void 0,
        onRequestOpen: j,
        onRequestClose: g,
        ignoreModalClicks: R,
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, a.jsxs)(l.D, {
                ...r,
                innerRef: v,
                className: t()(m.DV, k, { [m.YR]: x }),
                onContextMenu: f,
                onClick: (e) => {
                    (i(e), _?.(e));
                },
                children: [
                    (0, a.jsx)(c.eu, {
                        src: s.getAvatarURL(n, (0, o.FT)(o._3.SIZE_24)),
                        className: m.my,
                        "aria-label": s.username,
                        size: o._3.SIZE_24,
                    }),
                    (0, a.jsx)(u.E, {
                        className: t()(m.Ft, C),
                        variant: "text-sm/normal",
                        children: (0, a.jsx)(d.A, { user: s, nick: p, usernameClass: m.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
