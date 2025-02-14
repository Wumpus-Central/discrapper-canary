n.d(t, { Z: () => f });
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
    h = n(944486),
    C = n(55589),
    T = n(981631);
let I = (null !== (s = null === (r = window) || void 0 === r ? void 0 : null === (a = r.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== s ? s : '').startsWith(T.Z5c.ACTIVITIES) ? T.Z5c.ACTIVITIES : null;
function g(e) {
    let { link: t } = e;
    if (I === t) return !1;
    I = t;
}
class S extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, C.Z, h.Z, _.Z, c.Z);
    }
    getHomeLink() {
        return null != I ? I : E.Z.fallbackRoute;
    }
}
(i = 'AppViewStore'),
    (l = 'displayName') in S
        ? Object.defineProperty(S, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[l] = i);
let f = new S(d.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = C.Z.getPrivateChannelIds(),
            t = h.Z.getChannelId(T.ME);
        (null != t || null != e[0]) && (I = T.Z5c.CHANNEL(T.ME, null != t ? t : e[0]));
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
