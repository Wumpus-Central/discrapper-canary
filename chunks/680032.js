n(321073);
var r = n(951178),
    l = n(191850),
    i = n(792996);
n.d(
    e,
    {},
    {
        d: function (t) {
            let e = [{ key: "bots", text: i.intl.string(l.default.eSpjGV) }];
            (t?.preview_application_id != null && (0, r._7)(t)) ||
                t?.preview_app_chosen === !0 ||
                e.push({ key: "test_app", text: i.intl.string(l.default["+5f47F"]) });
            let n = [...(t?.supported_surfaces ?? []), ...(t?.preview_supported_surfaces ?? [])];
            return (
                n.includes(r.q7.PROFILE_WIDGET) &&
                    e.push({ key: "profile_widget", text: i.intl.string(l.default.u6ckHo) }),
                n.includes(r.q7.OVERLAY) && e.push({ key: "overlay", text: i.intl.string(l.default.UZHlmt) }),
                e.push({ key: "collaboration", text: i.intl.string(l.default["s3/5nF"]) }),
                e
            );
        },
        w: function (t, e) {
            let n = [];
            if (
                null != e &&
                (n.push({
                    key: "bots",
                    text: i.intl.formatToPlainString(e.canRemoveBot ? l.default["cU/7df"] : l.default.PDLHwR, {
                        server: e.guildName,
                    }),
                }),
                e.channelNames.length > 0)
            ) {
                let t = new Intl.ListFormat(i.intl.currentLocale, { type: "conjunction" }).format(
                    e.channelNames.map((t) => `#${t}`),
                );
                n.push({ key: "channels", text: i.intl.formatToPlainString(l.default.DbZ8af, { channels: t }) });
            }
            return (
                (0, r._7)(t) &&
                    !0 !== t.preview_app_chosen &&
                    n.push({ key: "test_app", text: i.intl.string(l.default.jKXaUH) }),
                t.supported_surfaces?.includes(r.q7.PROFILE_WIDGET) === !0 &&
                    n.push({ key: "profile_widget", text: i.intl.string(l.default.HHZxrL) }),
                t.supported_surfaces?.includes(r.q7.OVERLAY) === !0 &&
                    n.push({ key: "overlay", text: i.intl.string(l.default.rVTFDs) }),
                (0, r.pL)(t) && n.push({ key: "collaboration", text: i.intl.string(l.default["+a1lOS"]) }),
                n.push({ key: "only_you", text: i.intl.string(l.default.TrTx1Z) }),
                n
            );
        },
    },
);
