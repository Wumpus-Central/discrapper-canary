n.d(t, { Z: () => x });
var r,
    i,
    s,
    a,
    l,
    o,
    c = n(442837),
    d = n(570140),
    u = n(592125),
    m = n(896797),
    g = n(430824),
    p = n(944486),
    h = n(55589),
    f = n(981631);
let b = (null != (l = null == (a = window) || null == (s = a.location) ? void 0 : s.pathname) ? l : '').startsWith(f.Z5c.ACTIVITIES) ? f.Z5c.ACTIVITIES : null;
function _(e) {
    let { link: t } = e;
    if (b === t) return !1;
    b = t;
}
class N extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, h.Z, p.Z, g.Z, u.Z);
    }
    getHomeLink() {
        return null != b ? b : m.Z.fallbackRoute;
    }
}
(i = 'AppViewStore'),
    (r = 'displayName') in N
        ? Object.defineProperty(N, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[r] = i);
let x = new N(d.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = h.Z.getPrivateChannelIds(),
            t = p.Z.getChannelId(f.ME);
        (null != t || null != e[0]) && (b = f.Z5c.CHANNEL(f.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: _,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        _({
            link: t.pathname,
            type: 'APP_VIEW_SET_HOME_LINK'
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == b || !b.startsWith(f.Z5c.APPLICATION_STORE)) return !1;
        b = f.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = f.Z5c.CHANNEL(f.ME, n);
            if (e !== b) return (b = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != b && b === f.Z5c.CHANNEL(f.ME, t.id) && (b = null);
    }
});
