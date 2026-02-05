"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(297413),
    u = n(342296),
    c = n(89839);
function d(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            nick: d,
            className: _,
            textClassName: f,
            disablePopout: p,
            ignoreModalClicks: h,
            onClick: m,
            onContextMenu: g,
            onPopoutRequestOpen: E,
            onPopoutRequestClose: A,
        } = e,
        I = i.useRef(null);
    return (0, r.jsx)(u.A, {
        targetElementRef: I,
        user: t,
        guildId: n,
        channelId: a,
        position: "left",
        shouldShow: !p && void 0,
        onRequestOpen: E,
        onRequestClose: A,
        ignoreModalClicks: h,
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, r.jsxs)(o.DUT, {
                ...a,
                innerRef: I,
                className: s()(c.DV, _, { [c.YR]: p }),
                onContextMenu: g,
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
                        className: s()(c.Ft, f),
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(l.A, { user: t, nick: d, usernameClass: c.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
