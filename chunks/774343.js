n.d(t, { Z: () => S });
var l,
    r,
    i,
    o,
    a,
    s,
    c = n(442837),
    u = n(570140),
    d = n(592125),
    E = n(896797),
    f = n(430824),
    C = n(944486),
    p = n(55589),
    h = n(981631);
let _ = (null != (a = null == (o = window) || null == (i = o.location) ? void 0 : i.pathname) ? a : '').startsWith(h.Z5c.ACTIVITIES) ? h.Z5c.ACTIVITIES : null;
function g(e) {
    let { link: t } = e;
    if (_ === t) return !1;
    _ = t;
}
class O extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, p.Z, C.Z, f.Z, d.Z);
    }
    getHomeLink() {
        return null != _ ? _ : E.Z.fallbackRoute;
    }
}
(r = 'AppViewStore'),
    (l = 'displayName') in O
        ? Object.defineProperty(O, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[l] = r);
let S = new O(u.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = p.Z.getPrivateChannelIds(),
            t = C.Z.getChannelId(h.ME);
        (null != t || null != e[0]) && (_ = h.Z5c.CHANNEL(h.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: g,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        g({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == _ || !_.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
        _ = h.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = h.Z5c.CHANNEL(h.ME, n);
            if (e !== _) return (_ = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != _ && _ === h.Z5c.CHANNEL(h.ME, t.id) && (_ = null);
    }
});
