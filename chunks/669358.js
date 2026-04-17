n.d(t, { S: () => m }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(526162),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(601229),
    c = n(646234),
    u = n(985018);
let m = (0, r.zZ)(o.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
    useTitle: () => u.intl.string(u.t.RPh2ou),
    useSubtitle: () => u.intl.string(u.t.IgENJo),
    useHeaderDecoration: function () {
        let e = (0, s.bG)([l.A], () => l.A.isUpsellPreview);
        return i.useMemo(() => {
            let t = [];
            return (
                t.push({
                    id: "preview-icon-button",
                    type: a.UV.BUTTON,
                    text: u.intl.string(u.t["6acvnZ"]),
                    onClick: d.U6,
                }),
                e && t.push({ id: "upsell-button", type: a.UV.STRONGLY_DISCOURAGED_CUSTOM, button: d.kp }),
                { type: a.WX.BUTTON_GROUP, buttons: t }
            );
        }, [e]);
    },
    buildLayout: () => [c.C],
});
