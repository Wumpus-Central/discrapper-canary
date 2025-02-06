n.d(e, {
    OR: () => o,
    _c: () => r,
    bb: () => d,
    iD: () => u
});
var i = n(442837),
    l = n(581883),
    a = n(871465);
function o(t) {
    return s(
        t,
        void 0,
        (0, i.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
        })
    );
}
function u(t) {
    var e, n;
    return s(t, void 0, null !== (n = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {});
}
function r(t, e) {
    let n = (0, i.e7)([l.Z], () => {
        var t;
        return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
    });
    return null != e ? s(t, e, n) : void 0;
}
function d(t, e) {
    var n, i;
    let a = null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
    return null != e ? s(t, e, a) : void 0;
}
function s(t, e, n) {
    var i, l, o;
    if (null == n) return;
    let u = null != e ? (null === (i = n[t]) || void 0 === i ? void 0 : i.channels[e]) : n[t],
        r = null == u ? void 0 : u.customNotificationSoundConfig;
    return null != r && null != (o = null == r ? void 0 : null === (l = r.notificationSoundPackId) || void 0 === l ? void 0 : l.value) ? Object.values(a.YC).find((t) => t === o) : void 0;
}
