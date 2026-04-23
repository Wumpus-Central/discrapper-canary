n.d(t, { Tr: () => d, XZ: () => I, gW: () => _, kv: () => o, r0: () => l, uA: () => E, z0: () => c, zY: () => u });
var i = n(253932),
    r = n(287809),
    a = n(67480),
    s = n(652215);
function _(e, t) {
    return `${e}:${t}`;
}
function l(e) {
    let [t, n] = e.split(":");
    return { applicationId: t, branchId: n };
}
function o(e, t) {
    if (!i.tz.getSetting() || i.jP.getSetting() === s.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(s.hM6.PRIVATE);
}
function E(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function d(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(s.hM6.PRIVATE))) && !t.isHidden();
}
function c(e) {
    return null == e
        ? null
        : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING
          ? e
          : null;
}
function u(e) {
    return e.reduce(
        (e, t) => {
            let n = c(t);
            return null == n || t.type === s.WTw.UP_TO_DATE
                ? e
                : { total: e.total + Number(n.total), progress: e.progress + Number(n.progress) };
        },
        { total: 0, progress: 0 },
    );
}
function I(e) {
    return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), a.A);
}
