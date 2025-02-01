n.d(t, { Z: () => Z });
var l,
    i,
    r,
    a,
    o,
    s,
    d = n(442837),
    u = n(570140),
    c = n(592125),
    h = n(896797),
    g = n(430824),
    f = n(944486),
    p = n(55589),
    C = n(981631);
let v = (null !== (o = null === (a = window) || void 0 === a ? void 0 : null === (r = a.location) || void 0 === r ? void 0 : r.pathname) && void 0 !== o ? o : '').startsWith(C.Z5c.ACTIVITIES) ? C.Z5c.ACTIVITIES : null;
function E(e) {
    let { link: t } = e;
    if (v === t) return !1;
    v = t;
}
class I extends (s = d.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z, f.Z, g.Z, c.Z);
    }
    getHomeLink() {
        return null != v ? v : h.Z.fallbackRoute;
    }
}
(i = 'AppViewStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = i);
let Z = new I(u.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = p.Z.getPrivateChannelIds(),
            t = f.Z.getChannelId(C.ME);
        (null != t || null != e[0]) && (v = C.Z5c.CHANNEL(C.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: E,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        E({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == v || !v.startsWith(C.Z5c.APPLICATION_STORE)) return !1;
        v = C.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = C.Z5c.CHANNEL(C.ME, n);
            if (e !== v) return (v = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != v && v === C.Z5c.CHANNEL(C.ME, t.id) && (v = null);
    }
});
