n.d(t, { Z: () => m }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(981631);
let p = { MAX_MEMBER_COUNT: new Set() };
class f extends (r = l.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(u.Z, c.Z, o.Z),
            this.syncWith([u.Z, c.Z, o.Z], d.dG4),
            a.K.remove(d.vID.MAX_MEMBER_COUNT_100),
            a.K.remove(d.vID.MAX_MEMBER_COUNT_250),
            (e = new Set(a.K.get(d.vID.MAX_MEMBER_COUNT))),
            (p[d.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set());
    }
    isVisible(e) {
        var t;
        if (null == e) return !1;
        let n = null != (t = o.Z.getMemberCount(e.id)) ? t : 0,
            r = u.Z.can(d.Plq.ADMINISTRATOR, e);
        return !p[d.vID.MAX_MEMBER_COUNT].has(e.id) && r && e.maxMembers > 0 && e.maxMembers - n <= 10000;
    }
}
(i = "displayName") in f
    ? Object.defineProperty(f, i, {
          value: "MaxMemberCountChannelNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[i] = "MaxMemberCountChannelNoticeStore");
let m = new f(s.Z, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!p[d.vID.MAX_MEMBER_COUNT].has(t))
            return p[d.vID.MAX_MEMBER_COUNT].add(t), a.K.set(d.vID.MAX_MEMBER_COUNT, p[d.vID.MAX_MEMBER_COUNT]), !0;
    },
});
