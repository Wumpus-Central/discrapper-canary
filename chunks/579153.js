n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(592982),
    o = n(384059),
    c = n(480890),
    d = n(246356),
    u = n(709562),
    h = n(806931),
    A = n(985018);
let _ = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: _ } = (0, a.Ay)(),
        m = l.useRef(null);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(d.A, {
                children: (0, i.jsx)(r.A, {
                    onClose: l,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.s)("MoreSettingsMenu", _, { entrypoint: h.GK.THREE_DOT }),
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
                    (0, o.X)(_, o.O.MORE), n(e);
                },
                label: A.intl.string(A.t.PdRCRg),
                iconComponent: s.jNK,
                color: "primaryDark",
                isActive: l,
            });
        },
    });
};
