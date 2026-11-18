l(321073);
var e = l(951178),
    i = l(191850),
    a = l(792996);
function u(t) {
    if (null == t) return [];
    let n = [
        {
            key: "bots",
            text: a.intl.formatToPlainString(t.canRemoveBot ? i.default["cU/7df"] : i.default.PDLHwR, {
                server: t.guildName,
            }),
        },
    ];
    if (t.channelNames.length > 0) {
        let l = new Intl.ListFormat(a.intl.currentLocale, { type: "conjunction" }).format(
            t.channelNames.map((t) => `#${t}`),
        );
        n.push({ key: "channels", text: a.intl.formatToPlainString(i.default.DbZ8af, { channels: l }) });
    }
    return n;
}
l.d(
    n,
    {},
    {
        _i: function (t) {
            let n = [{ key: "bots", text: a.intl.string(i.default.eSpjGV) }];
            return (
                t?.supported_surfaces?.includes(e.q7.APP_CHANNEL) === !0 &&
                    n.push({ key: "channels", text: a.intl.string(i.default["D8IMa/"]) }),
                t?.supported_surfaces?.includes(e.q7.AUTOMOD) === !0 &&
                    n.push({ key: "automod", text: a.intl.string(i.default.IPtiUf) }),
                n
            );
        },
        by: function (t, n, l) {
            let e = [
                { key: "server", text: a.intl.formatToPlainString(i.default.YFZDXO, { server: l }) },
                ...u(n),
                { key: "settings", text: a.intl.string(i.default.F058cu) },
            ];
            return (
                (t.collaborator_role_ids?.length ?? 0) > 0 &&
                    e.push({ key: "collaboration", text: a.intl.string(i.default.SDpkkt) }),
                e
            );
        },
        dv: function (t) {
            let n = [{ key: "bots", text: a.intl.string(i.default.eSpjGV) }];
            (t?.preview_application_id != null && (0, e._7)(t)) ||
                t?.preview_app_chosen === !0 ||
                n.push({ key: "test_app", text: a.intl.string(i.default["+5f47F"]) });
            let l = [...(t?.supported_surfaces ?? []), ...(t?.preview_supported_surfaces ?? [])];
            return (
                l.includes(e.q7.PROFILE_WIDGET) &&
                    n.push({ key: "profile_widget", text: a.intl.string(i.default.u6ckHo) }),
                l.includes(e.q7.OVERLAY) && n.push({ key: "overlay", text: a.intl.string(i.default.UZHlmt) }),
                l.includes(e.q7.AUTOMOD) && n.push({ key: "automod", text: a.intl.string(i.default.IPtiUf) }),
                n.push({ key: "collaboration", text: a.intl.string(i.default["s3/5nF"]) }),
                n
            );
        },
        wJ: function (t, n) {
            let l = u(n);
            return (
                (0, e._7)(t) &&
                    !0 !== t.preview_app_chosen &&
                    l.push({ key: "test_app", text: a.intl.string(i.default.jKXaUH) }),
                t.supported_surfaces?.includes(e.q7.PROFILE_WIDGET) === !0 &&
                    l.push({ key: "profile_widget", text: a.intl.string(i.default.HHZxrL) }),
                t.supported_surfaces?.includes(e.q7.OVERLAY) === !0 &&
                    l.push({ key: "overlay", text: a.intl.string(i.default.rVTFDs) }),
                (0, e.pL)(t) && l.push({ key: "collaboration", text: a.intl.string(i.default["+a1lOS"]) }),
                l.push({ key: "only_you", text: a.intl.string(i.default.TrTx1Z) }),
                l
            );
        },
    },
);
