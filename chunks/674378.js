n.d(t, { Tr: () => _, XZ: () => A, gW: () => l, kv: () => d, r0: () => o, uA: () => c, z0: () => E, zY: () => u });
var i = n(253932),
    a = n(287809),
    r = n(67480),
    s = n(652215);
function l(e, t) {
    return `${e}:${t}`;
}
function o(e) {
    let [t, n] = e.split(":");
    return { applicationId: t, branchId: n };
}
function d(e, t) {
    if (!i.tz.getSetting() || i.jP.getSetting() === s.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(s.hM6.PRIVATE);
}
function c(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function _(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(s.hM6.PRIVATE))) && !t.isHidden();
}
function E(e) {
    return null == e
        ? null
        : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING
          ? e
          : null;
}
function u(e) {
    return e.reduce(
        (e, t) => {
            let n = E(t);
            return null == n || t.type === s.WTw.UP_TO_DATE
                ? e
                : { total: e.total + Number(n.total), progress: e.progress + Number(n.progress) };
        },
        { total: 0, progress: 0 },
    );
}
function A(e) {
    return !!e.isDiscordApplication() && e.isEntitled(a.default.getCurrentUser(), r.A);
}
