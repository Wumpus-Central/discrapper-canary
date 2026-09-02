l.d(s, { A: () => y });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(939249),
    o = l(97808),
    d = l(778712),
    u = l(834730),
    c = l(297413),
    m = l(342296),
    p = l(475977);
function y(e) {
    let {
            user: s,
            guildId: l,
            channelId: a,
            nick: y,
            className: f,
            textClassName: h,
            disablePopout: v,
            ignoreModalClicks: j,
            onClick: x,
            onContextMenu: N,
            onPopoutRequestOpen: g,
            onPopoutRequestClose: A,
        } = e,
        T = i.useRef(null);
    return (0, n.jsx)(m.A, {
        targetElementRef: T,
        user: s,
        guildId: l,
        channelId: a,
        position: "left",
        shouldShow: !v && void 0,
        onRequestOpen: g,
        onRequestClose: A,
        ignoreModalClicks: j,
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, n.jsxs)(t.D, {
                ...a,
                innerRef: T,
                className: r()(p.DV, f, { [p.YR]: v }),
                onContextMenu: N,
                onClick: (e) => {
                    i(e), x?.(e);
                },
                children: [
                    (0, n.jsx)(o.eu, {
                        src: s.getAvatarURL(l, (0, d.FT)(d._3.SIZE_24)),
                        className: p.my,
                        "aria-label": s.username,
                        size: d._3.SIZE_24,
                    }),
                    (0, n.jsx)(u.E, {
                        className: r()(p.Ft, h),
                        variant: "text-sm/normal",
                        children: (0, n.jsx)(c.A, { user: s, nick: y, usernameClass: p.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
