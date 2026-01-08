n.d(t, { $: () => o });
var r = n(722733),
    i = n(751823);
let a = (0, r.ZP)({
    kind: "user",
    name: "2025-10-surface-unwatched-streams",
    defaultConfig: { showInCallGrid: !1 },
    variations: { 1: { showInCallGrid: !0 } },
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? a.definition.defaultConfig : a.getConfig({ location: t });
}
