"use strict";
n.d(t, { A: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(297413),
    _ = n(342296),
    E = n(402066);
function A(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            nick: A,
            className: h,
            textClassName: I,
            disablePopout: f,
            ignoreModalClicks: p,
            onClick: T,
            onContextMenu: m,
            onPopoutRequestOpen: g,
            onPopoutRequestClose: S,
        } = e,
        N = r.useRef(null);
    return (0, i.jsx)(_.A, {
        targetElementRef: N,
        user: t,
        guildId: n,
        channelId: a,
        position: "left",
        shouldShow: !f && void 0,
        onRequestOpen: g,
        onRequestClose: S,
        ignoreModalClicks: p,
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsxs)(l.D, {
                ...a,
                innerRef: N,
                className: s()(E.DV, h, { [E.YR]: f }),
                onContextMenu: m,
                onClick: (e) => {
                    r(e), T?.(e);
                },
                children: [
                    (0, i.jsx)(o.eu, {
                        src: t.getAvatarURL(n, (0, d.FT)(d._3.SIZE_24)),
                        className: E.my,
                        "aria-label": t.username,
                        size: d._3.SIZE_24,
                    }),
                    (0, i.jsx)(c.E, {
                        className: s()(E.Ft, I),
                        variant: "text-sm/normal",
                        children: (0, i.jsx)(u.A, { user: t, nick: A, usernameClass: E.Xh, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
