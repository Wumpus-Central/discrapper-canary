var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(984933),
    d = n(594174),
    u = n(981631);
let h = null;
function m() {
    let e = d.default.getCurrentUser();
    if (null == e || e.mfaEnabled === h) return !1;
    h = e.mfaEnabled;
}
class p extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(d.default, c.ZP), this.syncWith([d.default, c.ZP], m);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === u.BpS.ELEVATED && !1 === h && c.ZP.hasElevatedPermissions(e.id);
    }
}
(l = 'GuildMFAWarningStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(o.Z, {
        CONNECTION_OPEN: m,
        GUILD_UPDATE: function () {
            return !0;
        }
    }));
