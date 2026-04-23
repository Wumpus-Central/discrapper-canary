n.d(t, { A: () => A });
var i = n(311907),
    r = n(506774),
    a = n(73153),
    l = n(498642),
    s = n(71393),
    o = n(576705),
    d = n(652215);
let u = { MAX_MEMBER_COUNT: new Set() };
class c extends i.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(o.A, s.A, l.A),
            this.syncWith([o.A, s.A, l.A], d.tEg),
            r.w.remove(d.n5X.MAX_MEMBER_COUNT_100),
            r.w.remove(d.n5X.MAX_MEMBER_COUNT_250),
            (u[d.n5X.MAX_MEMBER_COUNT] = new Set(r.w.get(d.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = l.A.getMemberCount(e.id) ?? 0,
            n = o.A.can(d.xBc.ADMINISTRATOR, e);
        return !u[d.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let A = new c(a.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!u[d.n5X.MAX_MEMBER_COUNT].has(t))
            return u[d.n5X.MAX_MEMBER_COUNT].add(t), r.w.set(d.n5X.MAX_MEMBER_COUNT, u[d.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
