n.d(t, {
    Tr: () => d,
    XZ: () => _,
    gW: () => o,
    kv: () => c,
    r0: () => l,
    uA: () => u,
    z0: () => f,
    zY: () => p,
}),
    n(896048),
    n(747238);
var r = n(253932),
    i = n(287809),
    a = n(67480),
    s = n(652215);
function o(e, t) {
    return "".concat(e, ":").concat(t);
}
function l(e) {
    let [t, n] = e.split(":");
    return {
        applicationId: t,
        branchId: n,
    };
}
function c(e, t) {
    if (!r.tz.getSetting() || r.jP.getSetting() === s.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(s.hM6.PRIVATE);
}
function u(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function d(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(s.hM6.PRIVATE))) && !t.isHidden();
}
function f(e) {
    return null == e
        ? null
        : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING
          ? e
          : null;
}
function p(e) {
    return e.reduce(
        (e, t) => {
            let n = f(t);
            return null == n || t.type === s.WTw.UP_TO_DATE
                ? e
                : {
                      total: e.total + Number(n.total),
                      progress: e.progress + Number(n.progress),
                  };
        },
        {
            total: 0,
            progress: 0,
        },
    );
}
function _(e) {
    return !!e.isDiscordApplication() && e.isEntitled(i.default.getCurrentUser(), a.A);
}
