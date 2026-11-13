n(321073);
var l = n(951178),
    r = n(191850),
    i = n(792996);
n.d(
    t,
    {},
    {
        _i: function (e) {
            let t = [{ key: "bots", text: i.intl.string(r.default.eSpjGV) }];
            return (
                e?.supported_surfaces?.includes(l.q7.APP_CHANNEL) === !0 &&
                    t.push({ key: "channels", text: i.intl.string(r.default["D8IMa/"]) }),
                t
            );
        },
        dv: function (e) {
            let t = [{ key: "bots", text: i.intl.string(r.default.eSpjGV) }];
            (e?.preview_application_id != null && (0, l._7)(e)) ||
                e?.preview_app_chosen === !0 ||
                t.push({ key: "test_app", text: i.intl.string(r.default["+5f47F"]) });
            let n = [...(e?.supported_surfaces ?? []), ...(e?.preview_supported_surfaces ?? [])];
            return (
                n.includes(l.q7.PROFILE_WIDGET) &&
                    t.push({ key: "profile_widget", text: i.intl.string(r.default.u6ckHo) }),
                n.includes(l.q7.OVERLAY) && t.push({ key: "overlay", text: i.intl.string(r.default.UZHlmt) }),
                t.push({ key: "collaboration", text: i.intl.string(r.default["s3/5nF"]) }),
                t
            );
        },
        wJ: function (e, t) {
            let n = [];
            if (
                null != t &&
                (n.push({
                    key: "bots",
                    text: i.intl.formatToPlainString(t.canRemoveBot ? r.default["cU/7df"] : r.default.PDLHwR, {
                        server: t.guildName,
                    }),
                }),
                t.channelNames.length > 0)
            ) {
                let e = new Intl.ListFormat(i.intl.currentLocale, { type: "conjunction" }).format(
                    t.channelNames.map((e) => `#${e}`),
                );
                n.push({ key: "channels", text: i.intl.formatToPlainString(r.default.DbZ8af, { channels: e }) });
            }
            return (
                (0, l._7)(e) &&
                    !0 !== e.preview_app_chosen &&
                    n.push({ key: "test_app", text: i.intl.string(r.default.jKXaUH) }),
                e.supported_surfaces?.includes(l.q7.PROFILE_WIDGET) === !0 &&
                    n.push({ key: "profile_widget", text: i.intl.string(r.default.HHZxrL) }),
                e.supported_surfaces?.includes(l.q7.OVERLAY) === !0 &&
                    n.push({ key: "overlay", text: i.intl.string(r.default.rVTFDs) }),
                (0, l.pL)(e) && n.push({ key: "collaboration", text: i.intl.string(r.default["+a1lOS"]) }),
                n.push({ key: "only_you", text: i.intl.string(r.default.TrTx1Z) }),
                n
            );
        },
    },
);
