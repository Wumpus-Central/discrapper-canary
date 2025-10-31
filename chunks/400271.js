n.d(t, { Z: () => g }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(135899),
    p = n(981631);
let f = "publicUpsellChannelNoticeGuilds",
    m = new Set();
class h extends (r = l.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(u.Z, c.Z, o.Z), this.syncWith([u.Z, c.Z, o.Z], p.dG4), (m = ((e = new Set(a.K.get(f))), e));
    }
    isVisible(e) {
        if (null == e) return;
        let t = o.Z.getMemberCount(e.id);
        return (
            !m.has(e.id) &&
            null != t &&
            t >= d.U3 &&
            u.Z.can(p.Plq.ADMINISTRATOR, e) &&
            !e.features.has(p.GuildFeatures.COMMUNITY)
        );
    }
}
(i = "displayName") in h
    ? Object.defineProperty(h, i, {
          value: "EnablePublicGuildUpsellNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[i] = "EnablePublicGuildUpsellNoticeStore");
let g = new h(s.Z, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!m.has(t)) return m.add(t), a.K.set(f, m), !0;
    },
});
