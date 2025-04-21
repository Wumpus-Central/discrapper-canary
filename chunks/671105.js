n.d(e, {
    OR: () => r,
    _c: () => u,
    bb: () => s,
    iD: () => o
});
var i = n(442837),
    l = n(581883),
    a = n(871465);
function r(t) {
    return d(
        t,
        void 0,
        (0, i.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.settings.guilds) ? void 0 : t.guilds;
        })
    );
}
function o(t) {
    var e, n;
    return d(t, void 0, null != (n = null == (e = l.Z.settings.guilds) ? void 0 : e.guilds) ? n : {});
}
function u(t, e) {
    let n = (0, i.e7)([l.Z], () => {
        var t;
        return null == (t = l.Z.settings.guilds) ? void 0 : t.guilds;
    });
    return null != e ? d(t, e, n) : void 0;
}
function s(t, e) {
    var n, i;
    let a = null != (i = null == (n = l.Z.settings.guilds) ? void 0 : n.guilds) ? i : {};
    return null != e ? d(t, e, a) : void 0;
}
function d(t, e, n) {
    var i, l, r;
    if (null == n) return;
    let o = null != e ? (null == (i = n[t]) ? void 0 : i.channels[e]) : n[t],
        u = null == o ? void 0 : o.customNotificationSoundConfig;
    return null != u && null != (r = null == u || null == (l = u.notificationSoundPackId) ? void 0 : l.value) ? Object.values(a.YC).find((t) => t === r) : void 0;
}
