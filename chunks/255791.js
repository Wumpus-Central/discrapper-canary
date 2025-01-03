n(47120);
var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(433517),
    c = n(570140),
    d = n(650774),
    u = n(430824),
    h = n(496675),
    m = n(981631);
let p = { MAX_MEMBER_COUNT: new Set() };
class g extends (i = s.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(h.Z, u.Z, d.Z), this.syncWith([h.Z, u.Z, d.Z], m.dG4), o.K.remove(m.vID.MAX_MEMBER_COUNT_100), o.K.remove(m.vID.MAX_MEMBER_COUNT_250), (e = new Set(o.K.get(m.vID.MAX_MEMBER_COUNT))), (p[m.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set());
    }
    isVisible(e) {
        var t;
        if (null == e) return !1;
        let n = null !== (t = d.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
            i = h.Z.can(m.Plq.ADMINISTRATOR, e);
        return !e.hasFeature(m.oNc.CLAN) && !p[m.vID.MAX_MEMBER_COUNT].has(e.id) && i && e.maxMembers > 0 && e.maxMembers - n <= 10000;
    }
}
(a = 'MaxMemberCountChannelNoticeStore'),
    (l = 'displayName') in (r = g)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new g(c.Z, {
        MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
            let t = e.guildId;
            if (!p[m.vID.MAX_MEMBER_COUNT].has(t)) return p[m.vID.MAX_MEMBER_COUNT].add(t), o.K.set(m.vID.MAX_MEMBER_COUNT, p[m.vID.MAX_MEMBER_COUNT]), !0;
        }
    }));
