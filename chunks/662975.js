n.d(t, { g: () => l });
var r = n(442837),
    i = n(592125),
    a = n(944486),
    o = n(803038);
function s() {
    try {
        return CSS.supports("selector(:has(*))");
    } catch (e) {
        return !1;
    }
}
function l() {
    let e = o.Mc.useExperiment({ location: "useCanShowCustomThemeCoachmark" }).enabled,
        t = (0, r.e7)([i.Z, a.Z], () => i.Z.getChannel(a.Z.getChannelId()));
    return !!e && null != t && !!s();
}
