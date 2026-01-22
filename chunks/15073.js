n.d(t, {
    TZ: () => c,
    zi: () => o,
});
var r = n(311907),
    i = n(600975),
    l = n(576705),
    a = n(652215);
let s = (0, i.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    return s.useExperiment(
        {
            guildId: e,
            location: "dd4beb_1",
        },
        { autoTrackExposure: !0 },
    );
}
function c(e) {
    var t;
    let n = (0, r.bG)([l.A], () => l.A.can(a.xBc.MANAGE_GUILD, e)),
        { enabled: i } = s.useExperiment(
            {
                guildId: null != (t = null == e ? void 0 : e.id) ? t : a.dJq,
                location: "dd4beb_3",
            },
            { autoTrackExposure: !0 },
        );
    if (null == e) return !1;
    let o = e.features.has(a.GuildFeatures.COMMUNITY);
    return n && o && i;
}
