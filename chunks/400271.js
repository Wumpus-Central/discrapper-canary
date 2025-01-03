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
    m = n(135899),
    p = n(981631);
let g = 'publicUpsellChannelNoticeGuilds',
    f = new Set();
class _ extends (i = s.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(h.Z, u.Z, d.Z), this.syncWith([h.Z, u.Z, d.Z], p.dG4), (f = ((e = new Set(o.K.get(g))), e));
    }
    isVisible(e) {
        if (null == e) return;
        let t = d.Z.getMemberCount(e.id);
        return !f.has(e.id) && null != t && t >= m.U3 && h.Z.can(p.Plq.ADMINISTRATOR, e) && !e.hasFeature(p.oNc.COMMUNITY);
    }
}
(a = 'EnablePublicGuildUpsellNoticeStore'),
    (l = 'displayName') in (r = _)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new _(c.Z, {
        PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
            let t = e.guildId;
            if (!f.has(t)) return f.add(t), o.K.set(g, f), !0;
        }
    }));
