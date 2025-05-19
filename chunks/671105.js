n.d(t, {
    OR: () => r,
    _c: () => o,
    bb: () => s,
    iD: () => u
});
var i = n(442837),
    l = n(581883),
    a = n(871465);
function r(e) {
    return d(
        e,
        void 0,
        (0, i.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.settings.guilds) ? void 0 : e.guilds;
        })
    );
}
function u(e) {
    var t, n;
    return d(e, void 0, null != (n = null == (t = l.Z.settings.guilds) ? void 0 : t.guilds) ? n : {});
}
function o(e, t) {
    let n = (0, i.e7)([l.Z], () => {
        var e;
        return null == (e = l.Z.settings.guilds) ? void 0 : e.guilds;
    });
    return null != t ? d(e, t, n) : void 0;
}
function s(e, t) {
    var n, i;
    let a = null != (i = null == (n = l.Z.settings.guilds) ? void 0 : n.guilds) ? i : {};
    return null != t ? d(e, t, a) : void 0;
}
function d(e, t, n) {
    var i, l, r;
    if (null == n) return;
    let u = null != t ? (null == (i = n[e]) ? void 0 : i.channels[t]) : n[e],
        o = null == u ? void 0 : u.customNotificationSoundConfig;
    return null != o && null != (r = null == o || null == (l = o.notificationSoundPackId) ? void 0 : l.value) ? Object.values(a.YC).find((e) => e === r) : void 0;
}
