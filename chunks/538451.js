var a = n(477900),
    i = n(582128),
    r = n(503698),
    l = n.n(r),
    t = n(939249),
    o = n(97808),
    c = n(778712),
    u = n(834730),
    d = n(297413),
    h = n(342296),
    m = n(475977);
n.d(
    s,
    {},
    {
        A: function (e) {
            let {
                    user: s,
                    guildId: n,
                    channelId: r,
                    nick: p,
                    className: k,
                    textClassName: C,
                    disablePopout: R,
                    ignoreModalClicks: x,
                    onClick: _,
                    onContextMenu: f,
                    onPopoutRequestOpen: j,
                    onPopoutRequestClose: b,
                } = e,
                g = i.useRef(null);
            return (0, a.jsx)(h.A, {
                targetElementRef: g,
                user: s,
                guildId: n,
                channelId: r,
                position: "left",
                shouldShow: !R && void 0,
                onRequestOpen: j,
                onRequestClose: b,
                ignoreModalClicks: x,
                children: (e) => {
                    let { onClick: i, ...r } = e;
                    return (0, a.jsxs)(t.D, {
                        ...r,
                        innerRef: g,
                        className: l()(m.DV, k, { [m.YR]: R }),
                        onContextMenu: f,
                        onClick: (e) => {
                            (i(e), _?.(e));
                        },
                        children: [
                            (0, a.jsx)(o.eu, {
                                src: s.getAvatarURL(n, (0, c.FT)(c._3.SIZE_24)),
                                className: m.my,
                                "aria-label": s.username,
                                size: c._3.SIZE_24,
                            }),
                            (0, a.jsx)(u.E, {
                                className: l()(m.Ft, C),
                                variant: "body-sm/normal",
                                children: (0, a.jsx)(d.A, {
                                    user: s,
                                    nick: p,
                                    usernameClass: m.Xh,
                                    hideDiscriminator: !0,
                                }),
                            }),
                        ],
                    });
                },
            });
        },
    },
);
