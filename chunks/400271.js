n.d(t, { Z: () => b }), n(47120);
var r,
    i,
    l,
    o = n(442837),
    a = n(433517),
    s = n(570140),
    c = n(650774),
    u = n(430824),
    d = n(496675),
    p = n(135899),
    h = n(981631);
let g = 'publicUpsellChannelNoticeGuilds',
    f = new Set();
class m extends (r = o.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(d.Z, u.Z, c.Z), this.syncWith([d.Z, u.Z, c.Z], h.dG4), (f = e = new Set(a.K.get(g)));
    }
    isVisible(e) {
        if (null == e) return;
        let t = c.Z.getMemberCount(e.id);
        return !f.has(e.id) && null != t && t >= p.U3 && d.Z.can(h.Plq.ADMINISTRATOR, e) && !e.hasFeature(h.oNc.COMMUNITY);
    }
}
(l = 'EnablePublicGuildUpsellNoticeStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = l);
let b = new m(s.Z, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!f.has(t)) return f.add(t), a.K.set(g, f), !0;
    }
});
