n.d(t, { Z: () => Z });
var l,
    i,
    a,
    o,
    r,
    s,
    d = n(442837),
    u = n(570140),
    c = n(592125),
    h = n(896797),
    g = n(430824),
    f = n(944486),
    p = n(55589),
    C = n(981631);
let E = (null !== (r = null === (o = window) || void 0 === o ? void 0 : null === (a = o.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== r ? r : '').startsWith(C.Z5c.ACTIVITIES) ? C.Z5c.ACTIVITIES : null;
function v(e) {
    let { link: t } = e;
    if (E === t) return !1;
    E = t;
}
class I extends (s = d.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z, f.Z, g.Z, c.Z);
    }
    getHomeLink() {
        return null != E ? E : h.Z.fallbackRoute;
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
        (null != t || null != e[0]) && (E = C.Z5c.CHANNEL(C.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: v,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        v({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == E || !E.startsWith(C.Z5c.APPLICATION_STORE)) return !1;
        E = C.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = C.Z5c.CHANNEL(C.ME, n);
            if (e !== E) return (E = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != E && E === C.Z5c.CHANNEL(C.ME, t.id) && (E = null);
    }
});
