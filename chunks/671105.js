i.d(n, {
    OR: function () {
        return a;
    },
    _c: function () {
        return r;
    },
    bb: function () {
        return s;
    },
    iD: function () {
        return u;
    }
});
var e = i(442837),
    l = i(581883),
    o = i(871465);
function a(t) {
    return d(
        t,
        void 0,
        (0, e.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
        })
    );
}
function u(t) {
    var n, i;
    return d(t, void 0, null !== (i = null === (n = l.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {});
}
function r(t, n) {
    let i = (0, e.e7)([l.Z], () => {
        var t;
        return null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds;
    });
    return null != n ? d(t, n, i) : void 0;
}
function s(t, n) {
    var i, e;
    let o = null !== (e = null === (i = l.Z.settings.guilds) || void 0 === i ? void 0 : i.guilds) && void 0 !== e ? e : {};
    return null != n ? d(t, n, o) : void 0;
}
function d(t, n, i) {
    var e, l;
    if (null == i) return;
    let a = null != n ? (null === (e = i[t]) || void 0 === e ? void 0 : e.channels[n]) : i[t],
        u = null == a ? void 0 : a.customNotificationSoundConfig;
    return null != u
        ? (function (t) {
              return null != t ? Object.values(o.YC).find((n) => n === t) : void 0;
          })(null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value)
        : void 0;
}
