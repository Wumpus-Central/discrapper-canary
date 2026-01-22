n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    i,
    l = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(498642),
    c = n(71393),
    u = n(576705),
    d = n(652215);
let p = {
    MAX_MEMBER_COUNT: new Set(),
};
class f extends (r = l.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(u.A, c.A, o.A),
            this.syncWith([u.A, c.A, o.A], d.tEg),
            a.w.remove(d.n5X.MAX_MEMBER_COUNT_100),
            a.w.remove(d.n5X.MAX_MEMBER_COUNT_250),
            (e = new Set(a.w.get(d.n5X.MAX_MEMBER_COUNT))),
            (p[d.n5X.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set());
    }
    isVisible(e) {
        var t;
        if (null == e) return !1;
        let n = null != (t = o.A.getMemberCount(e.id)) ? t : 0,
            r = u.A.can(d.xBc.ADMINISTRATOR, e);
        return !p[d.n5X.MAX_MEMBER_COUNT].has(e.id) && r && e.maxMembers > 0 && e.maxMembers - n <= 1e4;
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
let h = new f(s.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!p[d.n5X.MAX_MEMBER_COUNT].has(t))
            return p[d.n5X.MAX_MEMBER_COUNT].add(t), a.w.set(d.n5X.MAX_MEMBER_COUNT, p[d.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
