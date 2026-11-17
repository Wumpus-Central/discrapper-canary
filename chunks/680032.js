n(321073);
var l = n(951178),
    r = n(191850),
    i = n(792996);
n.d(
    e,
    {},
    {
        _i: function (t) {
            let e = [{ key: "bots", text: i.intl.string(r.default.eSpjGV) }];
            return (
                t?.supported_surfaces?.includes(l.q7.APP_CHANNEL) === !0 &&
                    e.push({ key: "channels", text: i.intl.string(r.default["D8IMa/"]) }),
                t?.supported_surfaces?.includes(l.q7.AUTOMOD) === !0 &&
                    e.push({ key: "automod", text: i.intl.string(r.default.IPtiUf) }),
                e
            );
        },
        dv: function (t) {
            let e = [{ key: "bots", text: i.intl.string(r.default.eSpjGV) }];
            (t?.preview_application_id != null && (0, l._7)(t)) ||
                t?.preview_app_chosen === !0 ||
                e.push({ key: "test_app", text: i.intl.string(r.default["+5f47F"]) });
            let n = [...(t?.supported_surfaces ?? []), ...(t?.preview_supported_surfaces ?? [])];
            return (
                n.includes(l.q7.PROFILE_WIDGET) &&
                    e.push({ key: "profile_widget", text: i.intl.string(r.default.u6ckHo) }),
                n.includes(l.q7.OVERLAY) && e.push({ key: "overlay", text: i.intl.string(r.default.UZHlmt) }),
                n.includes(l.q7.AUTOMOD) && e.push({ key: "automod", text: i.intl.string(r.default.IPtiUf) }),
                e.push({ key: "collaboration", text: i.intl.string(r.default["s3/5nF"]) }),
                e
            );
        },
        wJ: function (t, e) {
            let n = [];
            if (
                null != e &&
                (n.push({
                    key: "bots",
                    text: i.intl.formatToPlainString(e.canRemoveBot ? r.default["cU/7df"] : r.default.PDLHwR, {
                        server: e.guildName,
                    }),
                }),
                e.channelNames.length > 0)
            ) {
                let t = new Intl.ListFormat(i.intl.currentLocale, { type: "conjunction" }).format(
                    e.channelNames.map((t) => `#${t}`),
                );
                n.push({ key: "channels", text: i.intl.formatToPlainString(r.default.DbZ8af, { channels: t }) });
            }
            return (
                (0, l._7)(t) &&
                    !0 !== t.preview_app_chosen &&
                    n.push({ key: "test_app", text: i.intl.string(r.default.jKXaUH) }),
                t.supported_surfaces?.includes(l.q7.PROFILE_WIDGET) === !0 &&
                    n.push({ key: "profile_widget", text: i.intl.string(r.default.HHZxrL) }),
                t.supported_surfaces?.includes(l.q7.OVERLAY) === !0 &&
                    n.push({ key: "overlay", text: i.intl.string(r.default.rVTFDs) }),
                (0, l.pL)(t) && n.push({ key: "collaboration", text: i.intl.string(r.default["+a1lOS"]) }),
                n.push({ key: "only_you", text: i.intl.string(r.default.TrTx1Z) }),
                n
            );
        },
    },
);
