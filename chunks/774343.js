n.d(t, { Z: () => O });
var l,
    r,
    i,
    o,
    a,
    s,
    u = n(442837),
    c = n(570140),
    d = n(592125),
    E = n(896797),
    f = n(430824),
    C = n(944486),
    _ = n(55589),
    p = n(981631);
let h = (null != (a = null == (o = window) || null == (i = o.location) ? void 0 : i.pathname) ? a : '').startsWith(p.Z5c.ACTIVITIES) ? p.Z5c.ACTIVITIES : null;
function g(e) {
    let { link: t } = e;
    if (h === t) return !1;
    h = t;
}
class I extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, _.Z, C.Z, f.Z, d.Z);
    }
    getHomeLink() {
        return null != h ? h : E.Z.fallbackRoute;
    }
}
(r = 'AppViewStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = r);
let O = new I(c.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = _.Z.getPrivateChannelIds(),
            t = C.Z.getChannelId(p.ME);
        (null != t || null != e[0]) && (h = p.Z5c.CHANNEL(p.ME, null != t ? t : e[0]));
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
        if (null == h || !h.startsWith(p.Z5c.APPLICATION_STORE)) return !1;
        h = p.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = p.Z5c.CHANNEL(p.ME, n);
            if (e !== h) return (h = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != h && h === p.Z5c.CHANNEL(p.ME, t.id) && (h = null);
    }
});
