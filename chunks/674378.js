"use strict";
n.d(t, { Tr: () => d, XZ: () => h, gW: () => o, kv: () => u, r0: () => l, uA: () => c, z0: () => _, zY: () => f });
var i = n(885386),
    r = n(287809),
    s = n(67480),
    a = n(652215);
function o(e, t) {
    return `${e}:${t}`;
}
function l(e) {
    let [t, n] = e.split(":");
    return { applicationId: t, branchId: n };
}
function u(e, t) {
    if (!i.tz.getSetting() || i.jP.getSetting() === a.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(a.hM6.PRIVATE);
}
function c(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function d(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(a.hM6.PRIVATE))) && !t.isHidden();
}
function _(e) {
    return null == e
        ? null
        : e.type === a.WTw.INSTALLING || e.type === a.WTw.UPDATING || e.type === a.WTw.UNINSTALLING
          ? e
          : null;
}
function f(e) {
    return e.reduce(
        (e, t) => {
            let n = _(t);
            return null == n || t.type === a.WTw.UP_TO_DATE
                ? e
                : { total: e.total + Number(n.total), progress: e.progress + Number(n.progress) };
        },
        { total: 0, progress: 0 },
    );
}
function h(e) {
    return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), s.A);
}
