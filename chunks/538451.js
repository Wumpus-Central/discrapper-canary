i.d(t, { A: () => x });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    l = i.n(r),
    a = i(939249),
    c = i(97808),
    o = i(778712),
    d = i(834730),
    u = i(297413),
    h = i(342296),
    j = i(475977);
function x(e) {
    let {
            user: t,
            guildId: i,
            channelId: r,
            nick: x,
            className: v,
            textClassName: m,
            disablePopout: f,
            ignoreModalClicks: N,
            onClick: A,
            onContextMenu: g,
            onPopoutRequestOpen: p,
            onPopoutRequestClose: C,
        } = e,
        S = n.useRef(null);
    return (0, s.jsx)(h.A, {
        targetElementRef: S,
        user: t,
        guildId: i,
        channelId: r,
        position: "left",
        shouldShow: !f && void 0,
        onRequestOpen: p,
        onRequestClose: C,
        ignoreModalClicks: N,
        children: (e) => {
            let { onClick: n, ...r } = e;
            return (0, s.jsxs)(a.D, {
                ...r,
                innerRef: S,
                className: l()(j.DV, v, { [j.YR]: f }),
                onContextMenu: g,
                onClick: (e) => {
                    n(e), A?.(e);
                },
                children: [
                    (0, s.jsx)(c.eu, {
                        src: t.getAvatarURL(i, (0, o.FT)(o._3.SIZE_24)),
                        className: j.my,
                        "aria-label": t.username,
                        size: o._3.SIZE_24,
                    }),
                    (0, s.jsx)(d.E, {
                        className: l()(j.Ft, m),
                        variant: "text-sm/normal",
                        children: (0, s.jsx)(u.A, { user: t, nick: x, usernameClass: j.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
