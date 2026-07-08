t.d(n, { A: () => A });
var l = t(627968),
    i = t(64700),
    s = t(849516),
    a = t(922016),
    r = t(495095),
    o = t(204651),
    c = t(376086),
    u = t(375708),
    d = t(662731);
function A(e) {
    let { channel: n, themeable: t, whichPopoutIsOpen: A, setWhichPopoutIsOpen: h } = e,
        m = (0, i.useRef)(null),
        C = () => {
            A === c.P.GUILD_ROOM_NOTE ? h?.(void 0) : h?.(c.P.GUILD_ROOM_NOTE);
        },
        E = () => {
            h?.(void 0);
        };
    return (0, l.jsx)(a.Y, {
        targetElementRef: m,
        position: "top",
        align: "center",
        spacing: 16,
        shouldShow: A === c.P.GUILD_ROOM_NOTE,
        renderPopout: () => (0, l.jsx)(r.A, { channel: n, onClose: E }),
        children: () =>
            (0, l.jsx)(o.l, {
                ref: m,
                isTrayButton: !0,
                themeable: t,
                label: u.intl.string(d.default["lL1Y+d"]),
                iconComponent: s.u,
                onClick: C,
            }),
    });
}
