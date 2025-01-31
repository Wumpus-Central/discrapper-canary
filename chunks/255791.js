n.d(t, { Z: () => g }), n(47120);
var i,
    l,
    r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    h = n(981631);
let m = { MAX_MEMBER_COUNT: new Set() };
class p extends (i = a.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(u.Z, d.Z, c.Z), this.syncWith([u.Z, d.Z, c.Z], h.dG4), s.K.remove(h.vID.MAX_MEMBER_COUNT_100), s.K.remove(h.vID.MAX_MEMBER_COUNT_250), (e = new Set(s.K.get(h.vID.MAX_MEMBER_COUNT))), (m[h.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set());
    }
    isVisible(e) {
        var t;
        if (null == e) return !1;
        let n = null !== (t = c.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
            i = u.Z.can(h.Plq.ADMINISTRATOR, e);
        return !e.hasFeature(h.oNc.CLAN) && !m[h.vID.MAX_MEMBER_COUNT].has(e.id) && i && e.maxMembers > 0 && e.maxMembers - n <= 10000;
    }
}
(r = 'MaxMemberCountChannelNoticeStore'),
    (l = 'displayName') in p
        ? Object.defineProperty(p, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = r);
let g = new p(o.Z, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!m[h.vID.MAX_MEMBER_COUNT].has(t)) return m[h.vID.MAX_MEMBER_COUNT].add(t), s.K.set(h.vID.MAX_MEMBER_COUNT, m[h.vID.MAX_MEMBER_COUNT]), !0;
    }
});
