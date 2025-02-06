n.d(t, { Z: () => A });
var l,
    i,
    a,
    r,
    s,
    o,
    u = n(442837),
    d = n(570140),
    c = n(592125),
    E = n(896797),
    _ = n(430824),
    C = n(944486),
    h = n(55589),
    T = n(981631);
let I = (null !== (s = null === (r = window) || void 0 === r ? void 0 : null === (a = r.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== s ? s : '').startsWith(T.Z5c.ACTIVITIES) ? T.Z5c.ACTIVITIES : null;
function S(e) {
    let { link: t } = e;
    if (I === t) return !1;
    I = t;
}
class g extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, h.Z, C.Z, _.Z, c.Z);
    }
    getHomeLink() {
        return null != I ? I : E.Z.fallbackRoute;
    }
}
(i = 'AppViewStore'),
    (l = 'displayName') in g
        ? Object.defineProperty(g, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[l] = i);
let A = new g(d.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = h.Z.getPrivateChannelIds(),
            t = C.Z.getChannelId(T.ME);
        (null != t || null != e[0]) && (I = T.Z5c.CHANNEL(T.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: S,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        S({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == I || !I.startsWith(T.Z5c.APPLICATION_STORE)) return !1;
        I = T.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = T.Z5c.CHANNEL(T.ME, n);
            if (e !== I) return (I = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != I && I === T.Z5c.CHANNEL(T.ME, t.id) && (I = null);
    }
});
