var i = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(939249),
    o = l(97808),
    d = l(778712),
    u = l(834730),
    c = l(297413),
    m = l(342296),
    p = l(475977);
l.d(
    s,
    {},
    {
        A: function (e) {
            let {
                    user: s,
                    guildId: l,
                    channelId: a,
                    nick: y,
                    className: h,
                    textClassName: v,
                    disablePopout: x,
                    ignoreModalClicks: N,
                    onClick: f,
                    onContextMenu: j,
                    onPopoutRequestOpen: A,
                    onPopoutRequestClose: g,
                } = e,
                S = n.useRef(null);
            return (0, i.jsx)(m.A, {
                targetElementRef: S,
                user: s,
                guildId: l,
                channelId: a,
                position: "left",
                shouldShow: !x && void 0,
                onRequestOpen: A,
                onRequestClose: g,
                ignoreModalClicks: N,
                children: (e) => {
                    let { onClick: n, ...a } = e;
                    return (0, i.jsxs)(t.D, {
                        ...a,
                        innerRef: S,
                        className: r()(p.DV, h, { [p.YR]: x }),
                        onContextMenu: j,
                        onClick: (e) => {
                            (n(e), f?.(e));
                        },
                        children: [
                            (0, i.jsx)(o.eu, {
                                src: s.getAvatarURL(l, (0, d.FT)(d._3.SIZE_24)),
                                className: p.my,
                                "aria-label": s.username,
                                size: d._3.SIZE_24,
                            }),
                            (0, i.jsx)(u.E, {
                                className: r()(p.Ft, v),
                                variant: "body-sm/normal",
                                children: (0, i.jsx)(c.A, {
                                    user: s,
                                    nick: y,
                                    usernameClass: p.Xh,
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
