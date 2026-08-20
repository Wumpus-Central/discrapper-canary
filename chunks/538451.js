i.d(t, { A: () => I });
var E = i(477900),
    s = i(582128),
    n = i(503698),
    r = i.n(n),
    l = i(939249),
    a = i(97808),
    _ = i(778712),
    S = i(834730),
    A = i(297413),
    c = i(342296),
    o = i(475977);
function I(e) {
    let {
            user: t,
            guildId: i,
            channelId: n,
            nick: I,
            className: T,
            textClassName: d,
            disablePopout: R,
            ignoreModalClicks: N,
            onClick: u,
            onContextMenu: P,
            onPopoutRequestOpen: h,
            onPopoutRequestClose: O,
        } = e,
        C = s.useRef(null);
    return (0, E.jsx)(c.A, {
        targetElementRef: C,
        user: t,
        guildId: i,
        channelId: n,
        position: "left",
        shouldShow: !R && void 0,
        onRequestOpen: h,
        onRequestClose: O,
        ignoreModalClicks: N,
        children: (e) => {
            let { onClick: s, ...n } = e;
            return (0, E.jsxs)(l.D, {
                ...n,
                innerRef: C,
                className: r()(o.DV, T, { [o.YR]: R }),
                onContextMenu: P,
                onClick: (e) => {
                    s(e), u?.(e);
                },
                children: [
                    (0, E.jsx)(a.eu, {
                        src: t.getAvatarURL(i, (0, _.FT)(_._3.SIZE_24)),
                        className: o.my,
                        "aria-label": t.username,
                        size: _._3.SIZE_24,
                    }),
                    (0, E.jsx)(S.E, {
                        className: r()(o.Ft, d),
                        variant: "text-sm/normal",
                        children: (0, E.jsx)(A.A, { user: t, nick: I, usernameClass: o.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
