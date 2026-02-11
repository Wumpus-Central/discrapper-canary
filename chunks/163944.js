i.d(t, { S: () => T }), i(321073);
var n = i(64700),
    l = i(311907),
    s = i(526162),
    r = i(419954),
    a = i(933297),
    u = i(780964),
    o = i(961154),
    d = i(685896),
    _ = i(985018);
let T = (0, r.zZ)(u.X.DISPLAY_IN_APP_ICON_CATEGORY, {
    useTitle: () => _.intl.string(_.t.RPh2ou),
    useSubtitle: () => _.intl.string(_.t.IgENJo),
    useHeaderDecoration: function () {
        let e = (0, l.bG)([s.A], () => s.A.isUpsellPreview);
        return n.useMemo(() => {
            let t = [];
            return (
                t.push({
                    id: "preview-icon-button",
                    type: a.UV.BUTTON,
                    useText: () => _.intl.string(_.t["6acvnZ"]),
                    onClick: o.U6,
                }),
                e && t.push({ id: "upsell-button", type: a.UV.STRONGLY_DISCOURAGED_CUSTOM, button: o.kp }),
                { type: a.WX.BUTTON_GROUP, buttons: t }
            );
        }, [e]);
    },
    buildLayout: () => [d.C],
});
