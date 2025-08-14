n.d(t, { Z: () => m }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(135899),
    p = n(981631);
let f = "publicUpsellChannelNoticeGuilds",
    h = new Set();
class g extends (r = l.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(u.Z, c.Z, s.Z), this.syncWith([u.Z, c.Z, s.Z], p.dG4), (h = ((e = new Set(a.K.get(f))), e));
    }
    isVisible(e) {
        if (null == e) return;
        let t = s.Z.getMemberCount(e.id);
        return (
            !h.has(e.id) &&
            null != t &&
            t >= d.U3 &&
            u.Z.can(p.Plq.ADMINISTRATOR, e) &&
            !e.features.has(p.oNc.COMMUNITY)
        );
    }
}
(i = "displayName") in g
    ? Object.defineProperty(g, i, {
          value: "EnablePublicGuildUpsellNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[i] = "EnablePublicGuildUpsellNoticeStore");
let m = new g(o.Z, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!h.has(t)) return h.add(t), a.K.set(f, h), !0;
    },
});
