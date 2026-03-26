"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(297413),
    u = n(342296),
    c = n(960074);
function d(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            nick: d,
            className: _,
            textClassName: f,
            disablePopout: p,
            ignoreModalClicks: h,
            onClick: m,
            onContextMenu: E,
            onPopoutRequestOpen: g,
            onPopoutRequestClose: A,
        } = e,
        I = i.useRef(null);
    return (0, r.jsx)(u.A, {
        targetElementRef: I,
        user: t,
        guildId: n,
        channelId: s,
        position: "left",
        shouldShow: !p && void 0,
        onRequestOpen: g,
        onRequestClose: A,
        ignoreModalClicks: h,
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, r.jsxs)(o.DUT, {
                ...s,
                innerRef: I,
                className: a()(c.DV, _, { [c.YR]: p }),
                onContextMenu: E,
                onClick: (e) => {
                    i(e), m?.(e);
                },
                children: [
                    (0, r.jsx)(o.euF, {
                        src: t.getAvatarURL(n, (0, o.FT9)(o._3J.SIZE_24)),
                        className: c.my,
                        "aria-label": t.username,
                        size: o._3J.SIZE_24,
                    }),
                    (0, r.jsx)(o.Text, {
                        className: a()(c.Ft, f),
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(l.A, { user: t, nick: d, usernameClass: c.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
