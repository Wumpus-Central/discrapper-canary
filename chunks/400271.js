n.d(t, { Z: () => f }), n(47120);
var i,
    l,
    r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    h = n(135899),
    m = n(981631);
let p = 'publicUpsellChannelNoticeGuilds',
    g = new Set();
class _ extends (i = a.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(u.Z, d.Z, c.Z), this.syncWith([u.Z, d.Z, c.Z], m.dG4), (g = e = new Set(s.K.get(p)));
    }
    isVisible(e) {
        if (null == e) return;
        let t = c.Z.getMemberCount(e.id);
        return !g.has(e.id) && null != t && t >= h.U3 && u.Z.can(m.Plq.ADMINISTRATOR, e) && !e.hasFeature(m.oNc.COMMUNITY);
    }
}
(r = 'EnablePublicGuildUpsellNoticeStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = r);
let f = new _(o.Z, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!g.has(t)) return g.add(t), s.K.set(p, g), !0;
    }
});
