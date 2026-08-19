n.d(t, { A: () => u });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(939249),
    E = n(97808),
    o = n(778712),
    c = n(834730),
    d = n(297413),
    _ = n(342296),
    S = n(402066);
function u(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            nick: u,
            className: A,
            textClassName: I,
            disablePopout: h,
            ignoreModalClicks: T,
            onClick: R,
            onContextMenu: N,
            onPopoutRequestOpen: m,
            onPopoutRequestClose: C,
        } = e,
        P = s.useRef(null);
    return (0, i.jsx)(_.A, {
        targetElementRef: P,
        user: t,
        guildId: n,
        channelId: a,
        position: "left",
        shouldShow: !h && void 0,
        onRequestOpen: m,
        onRequestClose: C,
        ignoreModalClicks: T,
        children: (e) => {
            let { onClick: s, ...a } = e;
            return (0, i.jsxs)(r.D, {
                ...a,
                innerRef: P,
                className: l()(S.DV, A, { [S.YR]: h }),
                onContextMenu: N,
                onClick: (e) => {
                    s(e), R?.(e);
                },
                children: [
                    (0, i.jsx)(E.eu, {
                        src: t.getAvatarURL(n, (0, o.FT)(o._3.SIZE_24)),
                        className: S.my,
                        "aria-label": t.username,
                        size: o._3.SIZE_24,
                    }),
                    (0, i.jsx)(c.E, {
                        className: l()(S.Ft, I),
                        variant: "text-sm/normal",
                        children: (0, i.jsx)(d.A, { user: t, nick: u, usernameClass: S.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
