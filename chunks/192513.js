n.d(t, { Z: () => p });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(984933),
    c = n(594174),
    d = n(981631);
let u = null;
function h() {
    let e = c.default.getCurrentUser();
    if (null == e || e.mfaEnabled === u) return !1;
    u = e.mfaEnabled;
}
class m extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.default, o.ZP), this.syncWith([c.default, o.ZP], h);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === d.BpS.ELEVATED && !1 === u && o.ZP.hasElevatedPermissions(e.id);
    }
}
(l = 'GuildMFAWarningStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = l);
let p = new m(s.Z, {
    CONNECTION_OPEN: h,
    GUILD_UPDATE: function () {
        return !0;
    }
});
