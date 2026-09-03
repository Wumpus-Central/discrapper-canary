n.d(t, { DD: () => o, Qs: () => l, g$: () => s });
var i = n(600975),
    r = n(772788),
    a = n(652215);
let s = (0, i.C)({
    kind: "guild",
    id: "2026-04_server_theme",
    label: "Server Theme",
    defaultConfig: { enabled: !1, inExperiment: !1, gatesApex: !1 },
    treatments: [
        { id: 0, label: "Control", config: { enabled: !1, inExperiment: !0, gatesApex: !1 } },
        { id: 1, label: "Enable Server Theme", config: { enabled: !0, inExperiment: !0, gatesApex: !1 } },
    ],
});
function l(e, t) {
    let { enabled: n, inExperiment: i } = s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        { enabled: a, gatesApex: l } =
            null != e ? r.K.getConfig({ guildId: e, location: t }) : { enabled: !1, gatesApex: !1 };
    return i ? n : !!l && a;
}
function o(e, t) {
    let { enabled: n, inExperiment: i } = s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }),
        { enabled: l, gatesApex: o } = r.K.useConfig({ guildId: e ?? a.dJq, location: t });
    return i ? n : null != e && !!o && l;
}
