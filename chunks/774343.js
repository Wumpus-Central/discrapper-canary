n.d(t, { Z: () => T });
var l,
    r,
    i,
    a,
    o,
    s,
    c = n(442837),
    u = n(570140),
    d = n(592125),
    E = n(896797),
    h = n(430824),
    f = n(944486),
    p = n(55589),
    C = n(981631);
let _ = (null !== (o = null === (a = window) || void 0 === a ? void 0 : null === (i = a.location) || void 0 === i ? void 0 : i.pathname) && void 0 !== o ? o : '').startsWith(C.Z5c.ACTIVITIES) ? C.Z5c.ACTIVITIES : null;
function g(e) {
    let { link: t } = e;
    if (_ === t) return !1;
    _ = t;
}
class I extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, p.Z, f.Z, h.Z, d.Z);
    }
    getHomeLink() {
        return null != _ ? _ : E.Z.fallbackRoute;
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
let T = new I(u.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = p.Z.getPrivateChannelIds(),
            t = f.Z.getChannelId(C.ME);
        (null != t || null != e[0]) && (_ = C.Z5c.CHANNEL(C.ME, null != t ? t : e[0]));
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
        if (null == _ || !_.startsWith(C.Z5c.APPLICATION_STORE)) return !1;
        _ = C.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = C.Z5c.CHANNEL(C.ME, n);
            if (e !== _) return (_ = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != _ && _ === C.Z5c.CHANNEL(C.ME, t.id) && (_ = null);
    }
});
