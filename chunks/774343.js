var l,
    i,
    u,
    a,
    r,
    E,
    o,
    d = t(442837),
    _ = t(570140),
    c = t(592125),
    C = t(896797),
    I = t(430824),
    s = t(944486),
    T = t(55589),
    A = t(981631);
let h = (null !== (E = null === (r = window) || void 0 === r ? void 0 : null === (a = r.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== E ? E : '').startsWith(A.Z5c.ACTIVITIES) ? A.Z5c.ACTIVITIES : null;
function S(e) {
    let { link: n } = e;
    if (h === n) return !1;
    h = n;
}
class L extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, T.Z, s.Z, I.Z, c.Z);
    }
    getHomeLink() {
        return null != h ? h : C.Z.fallbackRoute;
    }
}
(u = 'AppViewStore'),
    (i = 'displayName') in (l = L)
        ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = u),
    (n.Z = new L(_.Z, {
        OVERLAY_INITIALIZE: function () {
            let e = T.Z.getPrivateChannelIds(),
                n = s.Z.getChannelId(A.ME);
            (null != n || null != e[0]) && (h = A.Z5c.CHANNEL(A.ME, null != n ? n : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: S,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            S({
                link: n.pathname,
                type: 'APP_VIEW_SET_HOME_LINK'
            });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == h || !h.startsWith(A.Z5c.APPLICATION_STORE)) return !1;
            h = A.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
                let e = A.Z5c.CHANNEL(A.ME, t);
                if (e !== h) return (h = e), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id && null != n.id && null != h && h === A.Z5c.CHANNEL(A.ME, n.id) && (h = null);
        }
    }));
