var i = n(253932),
    r = n(287809),
    a = n(67480),
    s = n(652215);
function l(e) {
    return null == e
        ? null
        : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING
          ? e
          : null;
}
n.d(
    t,
    {},
    {
        Tr: function (e, t, n) {
            return !(null == t || (n.enabled && t.hasFlag(s.hM6.PRIVATE))) && !t.isHidden();
        },
        XZ: function (e) {
            return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), a.A);
        },
        gW: function (e, t) {
            return `${e}:${t}`;
        },
        kv: function (e, t) {
            if (!i.tz.getSetting() || i.jP.getSetting() === s.clD.INVISIBLE) return !1;
            let n = t.getActiveLibraryApplication(e);
            return null == n || !n.hasFlag(s.hM6.PRIVATE);
        },
        r0: function (e) {
            let [t, n] = e.split(":");
            return { applicationId: t, branchId: n };
        },
        uA: function (e, t) {
            return 0 === t ? 100 : (e / t) * 100;
        },
        z0: l,
        zY: function (e) {
            return e.reduce(
                (e, t) => {
                    let n = l(t);
                    return null == n || t.type === s.WTw.UP_TO_DATE
                        ? e
                        : { total: e.total + Number(n.total), progress: e.progress + Number(n.progress) };
                },
                { total: 0, progress: 0 },
            );
        },
    },
);
