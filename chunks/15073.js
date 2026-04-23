n.d(t, { TZ: () => d, zi: () => o });
var i = n(17928),
    r = n(600975),
    a = n(576705),
    l = n(652215);
let s = (0, r.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
function o(e) {
    return s.useExperiment({ guildId: e, location: "dd4beb_1" }, { autoTrackExposure: !0 });
}
function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.can(l.xBc.MANAGE_GUILD, e)),
        { enabled: n } = s.useExperiment({ guildId: e?.id ?? l.dJq, location: "dd4beb_3" }, { autoTrackExposure: !0 });
    if (null == e) return !1;
    let r = e.features.has(l.GuildFeatures.COMMUNITY);
    return t && r && n;
}
