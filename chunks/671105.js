n.d(t, {
    OR: () => o,
    _c: () => u,
    bb: () => d,
    iD: () => r
});
var i = n(442837),
    l = n(581883),
    a = n(871465);
function o(e) {
    return s(
        e,
        void 0,
        (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
        })
    );
}
function r(e) {
    var t, n;
    return s(e, void 0, null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}
function u(e, t) {
    let n = (0, i.e7)([l.Z], () => {
        var e;
        return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
    });
    return null != t ? s(e, t, n) : void 0;
}
function d(e, t) {
    var n, i;
    let a = null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
    return null != t ? s(e, t, a) : void 0;
}
function s(e, t, n) {
    var i, l, o;
    if (null == n) return;
    let r = null != t ? (null === (i = n[e]) || void 0 === i ? void 0 : i.channels[t]) : n[e],
        u = null == r ? void 0 : r.customNotificationSoundConfig;
    return null != u && null != (o = null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value) ? Object.values(a.YC).find((e) => e === o) : void 0;
}
