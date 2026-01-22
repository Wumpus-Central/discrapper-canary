n.d(t, {
    A: () => h,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(688810),
    s = n(592982),
    o = n(384059),
    c = n(480890),
    u = n(246356),
    d = n(709562),
    f = n(806931),
    p = n(985018);
let h = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: h } = (0, a.Ay)(),
        b = l.useRef(null);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: b,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(u.A, {
                children: (0, r.jsx)(s.A, {
                    onClose: l,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.s)("MoreSettingsMenu", h, {
                        entrypoint: f.GK.THREE_DOT,
                    }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: i.YNO.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(d.l, {
                ref: b,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, o.X)(h, o.O.MORE), n(e);
                },
                label: p.intl.string(p.t.PdRCRg),
                iconComponent: i.jNK,
                color: "primaryDark",
                isActive: l,
            });
        },
    });
};
