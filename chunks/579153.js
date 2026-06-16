t.d(n, { A: () => C });
var l = t(627968),
    i = t(64700),
    s = t(922016),
    a = t(365199),
    r = t(688810),
    o = t(592982),
    c = t(384059),
    u = t(480890),
    d = t(246356),
    A = t(204651),
    h = t(806931),
    m = t(375708);
let C = (e) => {
    let { channel: n, remoteMode: t = !1 } = e,
        { parentAnalyticsLocation: C } = (0, r.Ay)(),
        E = i.useRef(null);
    return (0, l.jsx)(s.Y, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(d.A, {
                children: (0, l.jsx)(o.A, {
                    onClose: i,
                    channel: n,
                    remoteMode: t,
                    onInteraction: (0, u.s)("MoreSettingsMenu", C, { entrypoint: h.GK.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: s.Y.Animation.FADE,
        spacing: 16,
        children: (e, n) => {
            let { onClick: t } = e,
                { isShown: i } = n;
            return (0, l.jsx)(A.l, {
                ref: E,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, c.X)(C, c.O.MORE), t(e);
                },
                label: m.intl.string(m.t.PdRCRg),
                iconComponent: a.j,
                color: "primaryDark",
                isActive: i,
            });
        },
    });
};
