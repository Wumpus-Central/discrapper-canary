n.d(t, { Z: () => h });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(984933),
    c = n(594174),
    u = n(981631);
let d = null;
function p() {
    let e = c.default.getCurrentUser();
    if (null == e || e.mfaEnabled === d) return !1;
    d = e.mfaEnabled;
}
class f extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(c.default, s.ZP), this.syncWith([c.default, s.ZP], p);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === u.BpS.ELEVATED && !1 === d && s.ZP.hasElevatedPermissions(e.id);
    }
}
(i = "GuildMFAWarningStore"),
    (r = "displayName") in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (f[r] = i);
let h = new f(o.Z, {
    CONNECTION_OPEN: p,
    GUILD_UPDATE: function () {
        return !0;
    },
});
