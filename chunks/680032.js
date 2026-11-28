l(321073);
var n = l(951178),
    a = l(258576),
    i = l(792996);
function r(e) {
    if (null == e) return [];
    let t = [
        {
            key: "bots",
            text: i.intl.formatToPlainString(e.canRemoveBot ? a.default["cU/7df"] : a.default.PDLHwR, {
                server: e.guildName,
            }),
        },
    ];
    if (e.channelNames.length > 0) {
        let l = new Intl.ListFormat(i.intl.currentLocale, { type: "conjunction" }).format(
            e.channelNames.map((e) => `#${e}`),
        );
        t.push({ key: "channels", text: i.intl.formatToPlainString(a.default.DbZ8af, { channels: l }) });
    }
    return t;
}
l.d(
    t,
    {},
    {
        by: function (e, t, l) {
            let n = [
                { key: "server", text: i.intl.formatToPlainString(a.default.YFZDXO, { server: l }) },
                ...r(t),
                { key: "settings", text: i.intl.string(a.default.F058cu) },
            ];
            return (
                (e.collaborator_role_ids?.length ?? 0) > 0 &&
                    n.push({ key: "collaboration", text: i.intl.string(a.default.SDpkkt) }),
                n
            );
        },
        dv: function (e, t) {
            let l = [
                { key: "bots", text: i.intl.string(a.default.eSpjGV) },
                { key: "location", text: i.intl.formatToPlainString(a.default.c3xGbr, { server: t }) },
            ];
            (e?.preview_application_id != null && (0, n._7)(e)) ||
                e?.preview_app_chosen === !0 ||
                l.push({ key: "test_app", text: i.intl.string(a.default["+5f47F"]) });
            let r = [...(e?.supported_surfaces ?? []), ...(e?.preview_supported_surfaces ?? [])];
            return (
                r.includes(n.q7.PROFILE_WIDGET) &&
                    l.push({ key: "profile_widget", text: i.intl.string(a.default.u6ckHo) }),
                r.includes(n.q7.OVERLAY) && l.push({ key: "overlay", text: i.intl.string(a.default.UZHlmt) }),
                r.includes(n.q7.AUTOMOD) && l.push({ key: "automod", text: i.intl.string(a.default.IPtiUf) }),
                l.push({ key: "collaboration", text: i.intl.string(a.default["s3/5nF"]) }),
                l
            );
        },
        wJ: function (e, t) {
            let l = r(t);
            return (
                (0, n._7)(e) &&
                    !0 !== e.preview_app_chosen &&
                    l.push({ key: "test_app", text: i.intl.string(a.default.jKXaUH) }),
                e.supported_surfaces?.includes(n.q7.PROFILE_WIDGET) === !0 &&
                    l.push({ key: "profile_widget", text: i.intl.string(a.default.HHZxrL) }),
                e.supported_surfaces?.includes(n.q7.OVERLAY) === !0 &&
                    l.push({ key: "overlay", text: i.intl.string(a.default.rVTFDs) }),
                (0, n.pL)(e) && l.push({ key: "collaboration", text: i.intl.string(a.default["+a1lOS"]) }),
                l.push({ key: "only_you", text: i.intl.string(a.default.TrTx1Z) }),
                l.push({ key: "location", text: i.intl.string(a.default["GC/COK"]) }),
                l
            );
        },
    },
);
