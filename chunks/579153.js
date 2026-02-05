n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(592982),
    o = n(384059),
    d = n(480890),
    c = n(246356),
    u = n(709562),
    h = n(806931),
    A = n(985018);
let g = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: g } = (0, a.Ay)(),
        m = l.useRef(null);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(c.A, {
                children: (0, i.jsx)(r.A, {
                    onClose: l,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, d.s)("MoreSettingsMenu", g, { entrypoint: h.GK.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: s.YNO.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(u.l, {
                ref: m,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, o.X)(g, o.O.MORE), n(e);
                },
                label: A.intl.string(A.t.PdRCRg),
                iconComponent: s.jNK,
                color: "primaryDark",
                isActive: l,
            });
        },
    });
};
