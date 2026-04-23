n.d(t, { lx: () => m, wY: () => c, xt: () => d, zC: () => p }), n(321073);
var i = n(110259),
    a = n(562465),
    l = n(98919),
    r = n(544028);
n(723702);
var s = n(499785),
    o = n(652215),
    u = n(985018);
async function d() {
    return (await a.Bo.get({ url: o.Rsh.BUG_REPORTS, rejectWithError: !1 })).body;
}
function c(e) {
    let t = e?.name ?? "",
        n = e?.squad ?? "";
    return "" === t && "" === n ? "" : t + "::" + n;
}
function m() {
    return [
        {
            title: u.intl.string(u.t.VwIij9),
            description: u.intl.format(u.t.DOP8yY, {}),
            emoji: "801497159479722084",
            value: 0,
        },
        {
            title: u.intl.string(u.t.rYfJop),
            description: u.intl.format(u.t["+LEfDL"], {}),
            emoji: "410336837563973632",
            value: 1,
        },
        {
            title: u.intl.string(u.t["9LSuy3"]),
            description: u.intl.format(u.t.nC7pvx, {}),
            emoji: "841420679643529296",
            value: 2,
        },
        {
            title: u.intl.string(u.t.Ia0ska),
            description: u.intl.format(u.t.D4rbgX, {}),
            emoji: "827645852352512021",
            value: 3,
        },
    ];
}
async function p(e, t, n) {
    let a = [
        { name: "name", value: e.name },
        { name: "priority", value: `${e.priority}` },
        { name: "override_platform_information", value: `${t.overridePlatformInformation}` },
        { name: "theme", value: r.A.theme },
    ];
    "" !== e.description && a.push({ name: "description", value: e.description }),
        "" !== e.url && a.push({ name: "external_url", value: e.url }),
        null != e.buildOverride && a.push({ name: "build_override", value: e.buildOverride }),
        null != e.experimentOverrides &&
            a.push({
                name: "experiment_overrides",
                value: e.experimentOverrides.map((e) => `${e.experimentId}:${e.variantId}`).join(", "),
            });
    let u = e.feature?.asana_inbox_id;
    null != u && "" !== u && a.push({ name: "asana_inbox_id", value: `${u}` });
    let d = e.feature?.name;
    null != d && "" !== d && a.push({ name: "feature_name", value: d }),
        t.overridePlatformInformation &&
            (a.push({ name: "device", value: t.device }),
            a.push({ name: "os", value: t.operatingSystem }),
            a.push({ name: "os_version", value: t.operatingSystemVersion }),
            a.push({ name: "client_version", value: t.clientVersion }),
            a.push({ name: "client_build_number", value: t.clientBuildNumber }),
            a.push({ name: "release_channel", value: window.GLOBAL_ENV.RELEASE_CHANNEL }),
            a.push({ name: "locale", value: t.locale })),
        (0, l.a)(o.Umv.WEB_APP);
    try {
        return await s.A.post({
            url: o.Rsh.BUG_REPORTS,
            attachments: n,
            fields: a,
            trackedActionData: {
                event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: { priority: e.priority, asana_inbox_id: u },
            },
            rejectWithError: !1,
        });
    } catch (e) {
        return e;
    }
}
