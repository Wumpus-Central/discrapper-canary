"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(97808),
    u = n(778712),
    d = n(834730),
    c = n(297413),
    _ = n(342296),
    f = n(193370);
function E(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            nick: E,
            className: h,
            textClassName: p,
            disablePopout: m,
            ignoreModalClicks: g,
            onClick: A,
            onContextMenu: I,
            onPopoutRequestOpen: T,
            onPopoutRequestClose: S,
        } = e,
        y = i.useRef(null);
    return (0, r.jsx)(_.A, {
        targetElementRef: y,
        user: t,
        guildId: n,
        channelId: s,
        position: "left",
        shouldShow: !m && void 0,
        onRequestOpen: T,
        onRequestClose: S,
        ignoreModalClicks: g,
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, r.jsxs)(o.D, {
                ...s,
                innerRef: y,
                className: a()(f.DV, h, { [f.YR]: m }),
                onContextMenu: I,
                onClick: (e) => {
                    i(e), A?.(e);
                },
                children: [
                    (0, r.jsx)(l.eu, {
                        src: t.getAvatarURL(n, (0, u.FT)(u._3.SIZE_24)),
                        className: f.my,
                        "aria-label": t.username,
                        size: u._3.SIZE_24,
                    }),
                    (0, r.jsx)(d.E, {
                        className: a()(f.Ft, p),
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(c.A, { user: t, nick: E, usernameClass: f.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
