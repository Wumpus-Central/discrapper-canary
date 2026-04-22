t.d(n, { A: () => m });
var l = t(627968),
    i = t(64700),
    a = t(265872),
    s = t(365199),
    r = t(688810),
    o = t(592982),
    c = t(384059),
    u = t(480890),
    d = t(246356),
    A = t(709562),
    h = t(806931),
    p = t(985018);
let m = (e) => {
    let { channel: n, remoteMode: t = !1 } = e,
        { parentAnalyticsLocation: m } = (0, r.Ay)(),
        g = i.useRef(null);
    return (0, l.jsx)(a.Y, {
        targetElementRef: g,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(d.A, {
                children: (0, l.jsx)(o.A, {
                    onClose: i,
                    channel: n,
                    remoteMode: t,
                    onInteraction: (0, u.s)("MoreSettingsMenu", m, { entrypoint: h.GK.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: a.Y.Animation.FADE,
        spacing: 16,
        children: (e, n) => {
            let { onClick: t } = e,
                { isShown: i } = n;
            return (0, l.jsx)(A.l, {
                ref: g,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, c.X)(m, c.O.MORE), t(e);
                },
                label: p.intl.string(p.t.PdRCRg),
                iconComponent: s.j,
                color: "primaryDark",
                isActive: i,
            });
        },
    });
};
