t.d(n, { A: () => C });
var i = t(477900),
    l = t(582128),
    s = t(922016),
    a = t(365199),
    o = t(688810),
    r = t(592982),
    c = t(384059),
    u = t(480890),
    d = t(246356),
    A = t(204651),
    m = t(806931),
    h = t(375708);
let C = function (e) {
    let { channel: n, remoteMode: t = !1 } = e,
        { parentAnalyticsLocation: C } = (0, o.Ay)(),
        p = l.useRef(null);
    return (0, i.jsx)(s.Y, {
        targetElementRef: p,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(d.A, {
                children: (0, i.jsx)(r.A, {
                    onClose: l,
                    channel: n,
                    remoteMode: t,
                    onInteraction: (0, u.s)("MoreSettingsMenu", C, { entrypoint: m.GK.THREE_DOT }),
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
                ref: p,
                isTrayButton: !0,
                onClick: (e) => {
                    ((0, c.X)(C, c.O.MORE), t(e));
                },
                label: h.intl.string(h.t.PdRCRg),
                iconComponent: a.MoreHorizontalIcon,
                color: "primaryDark",
                isActive: l,
            });
        },
    });
};
