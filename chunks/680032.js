l(321073);
var n = l(951178),
    a = l(191850),
    r = l(792996);
function i(e) {
    if (null == e) return [];
    let t = [
        {
            key: "bots",
            text: r.intl.formatToPlainString(e.canRemoveBot ? a.default["cU/7df"] : a.default.PDLHwR, {
                server: e.guildName,
            }),
        },
    ];
    if (e.channelNames.length > 0) {
        let l = new Intl.ListFormat(r.intl.currentLocale, { type: "conjunction" }).format(
            e.channelNames.map((e) => `#${e}`),
        );
        t.push({ key: "channels", text: r.intl.formatToPlainString(a.default.DbZ8af, { channels: l }) });
    }
    return t;
}
l.d(
    t,
    {},
    {
        by: function (e, t, l) {
            let n = [
                { key: "server", text: r.intl.formatToPlainString(a.default.YFZDXO, { server: l }) },
                ...i(t),
                { key: "settings", text: r.intl.string(a.default.F058cu) },
            ];
            return (
                (e.collaborator_role_ids?.length ?? 0) > 0 &&
                    n.push({ key: "collaboration", text: r.intl.string(a.default.SDpkkt) }),
                n
            );
        },
        dv: function (e, t) {
            let l = [
                { key: "bots", text: r.intl.string(a.default.eSpjGV) },
                { key: "location", text: r.intl.formatToPlainString(a.default.c3xGbr, { server: t }) },
            ];
            (e?.preview_application_id != null && (0, n._7)(e)) ||
                e?.preview_app_chosen === !0 ||
                l.push({ key: "test_app", text: r.intl.string(a.default["+5f47F"]) });
            let i = [...(e?.supported_surfaces ?? []), ...(e?.preview_supported_surfaces ?? [])];
            return (
                i.includes(n.q7.PROFILE_WIDGET) &&
                    l.push({ key: "profile_widget", text: r.intl.string(a.default.u6ckHo) }),
                i.includes(n.q7.OVERLAY) && l.push({ key: "overlay", text: r.intl.string(a.default.UZHlmt) }),
                i.includes(n.q7.AUTOMOD) && l.push({ key: "automod", text: r.intl.string(a.default.IPtiUf) }),
                l.push({ key: "collaboration", text: r.intl.string(a.default["s3/5nF"]) }),
                l
            );
        },
        wJ: function (e, t) {
            let l = i(t);
            return (
                (0, n._7)(e) &&
                    !0 !== e.preview_app_chosen &&
                    l.push({ key: "test_app", text: r.intl.string(a.default.jKXaUH) }),
                e.supported_surfaces?.includes(n.q7.PROFILE_WIDGET) === !0 &&
                    l.push({ key: "profile_widget", text: r.intl.string(a.default.HHZxrL) }),
                e.supported_surfaces?.includes(n.q7.OVERLAY) === !0 &&
                    l.push({ key: "overlay", text: r.intl.string(a.default.rVTFDs) }),
                (0, n.pL)(e) && l.push({ key: "collaboration", text: r.intl.string(a.default["+a1lOS"]) }),
                l.push({ key: "only_you", text: r.intl.string(a.default.TrTx1Z) }),
                l.push({ key: "location", text: r.intl.string(a.default["GC/COK"]) }),
                l
            );
        },
    },
);
