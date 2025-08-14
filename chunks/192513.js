n.d(t, { Z: () => f });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(984933),
    s = n(594174),
    c = n(981631);
let u = null;
function d() {
    let e = s.default.getCurrentUser();
    if (null == e || e.mfaEnabled === u) return !1;
    u = e.mfaEnabled;
}
class p extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.default, o.ZP), this.syncWith([s.default, o.ZP], d);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === c.BpS.ELEVATED && !1 === u && o.ZP.hasElevatedPermissions(e.id);
    }
}
(r = "displayName") in p
    ? Object.defineProperty(p, r, {
          value: "GuildMFAWarningStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[r] = "GuildMFAWarningStore");
let f = new p(a.Z, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
