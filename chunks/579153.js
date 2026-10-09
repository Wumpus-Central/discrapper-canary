t.d(n, { A: () => g });
var i = t(477900),
    l = t(582128),
    s = t(922016),
    a = t(365199),
    r = t(688810),
    o = t(592982),
    c = t(384059),
    u = t(480890),
    d = t(246356),
    A = t(204651),
    h = t(806931),
    m = t(660183);
let g = function (e) {
    let { channel: n, remoteMode: t = !1 } = e,
        { parentAnalyticsLocation: g } = (0, r.Ay)(),
        x = l.useRef(null);
    return (0, i.jsx)(s.Y, {
        targetElementRef: x,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(d.A, {
                children: (0, i.jsx)(o.A, {
                    onClose: l,
                    channel: n,
                    remoteMode: t,
                    onInteraction: (0, u.s)("MoreSettingsMenu", g, { entrypoint: h.GK.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: s.Y.Animation.FADE,
        spacing: 16,
        children: (e, n) => {
            let { onClick: t } = e,
                { isShown: l } = n;
            return (0, i.jsx)(A.l, {
                ref: x,
                isTrayButton: !0,
                onClick: (e) => {
                    ((0, c.X)(g, c.O.MORE), t(e));
                },
                label: m.intl.string(m.t.PdRCRg),
                iconComponent: a.MoreHorizontalIcon,
                color: "primaryDark",
                isActive: l,
            });
        },
    });
};
