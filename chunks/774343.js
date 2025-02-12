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
    C = n(430824),
    h = n(944486),
    _ = n(55589),
    I = n(981631);
let g = (null !== (s = null === (r = window) || void 0 === r ? void 0 : null === (a = r.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== s ? s : '').startsWith(I.Z5c.ACTIVITIES) ? I.Z5c.ACTIVITIES : null;
function T(e) {
    let { link: t } = e;
    if (g === t) return !1;
    g = t;
}
class S extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, _.Z, h.Z, C.Z, c.Z);
    }
    getHomeLink() {
        return null != g ? g : E.Z.fallbackRoute;
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
        let e = _.Z.getPrivateChannelIds(),
            t = h.Z.getChannelId(I.ME);
        (null != t || null != e[0]) && (g = I.Z5c.CHANNEL(I.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: T,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        T({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == g || !g.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
        g = I.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = I.Z5c.CHANNEL(I.ME, n);
            if (e !== g) return (g = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != g && g === I.Z5c.CHANNEL(I.ME, t.id) && (g = null);
    }
});
