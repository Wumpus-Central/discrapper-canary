t.d(n, { A: () => m });
var l = t(627968),
    i = t(64700),
    s = t(849516),
    a = t(17928),
    r = t(922016),
    o = t(558076),
    c = t(495095),
    u = t(204651),
    d = t(376086),
    A = t(375708),
    h = t(189090);
function m(e) {
    let { channel: n, themeable: t, whichPopoutIsOpen: m, setWhichPopoutIsOpen: C } = e,
        E = (0, i.useRef)(null),
        p = (0, a.bG)([o.A], () => null != o.A.getPendingNote(n.id)),
        x = () => {
            m === d.P.GUILD_ROOM_NOTE ? C?.(void 0) : C?.(d.P.GUILD_ROOM_NOTE);
        },
        g = () => {
            C?.(void 0);
        };
    return (0, l.jsx)(r.Y, {
        targetElementRef: E,
        position: "top",
        align: "center",
        spacing: 16,
        shouldShow: m === d.P.GUILD_ROOM_NOTE,
        renderPopout: () => (0, l.jsx)(c.A, { channel: n, onClose: g }),
        children: () =>
            (0, l.jsx)(u.l, {
                ref: E,
                isTrayButton: !0,
                themeable: t,
                label: A.intl.string(h.default["lL1Y+d"]),
                iconComponent: s.u,
                onClick: x,
                disabled: p,
            }),
    });
}
