var l,
    i,
    r,
    a,
    u,
    o,
    d,
    E = t(442837),
    _ = t(570140),
    c = t(592125),
    s = t(896797),
    C = t(430824),
    T = t(944486),
    I = t(55589),
    h = t(981631);
let A = (null !== (o = null === (u = window) || void 0 === u ? void 0 : null === (a = u.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== o ? o : '').startsWith(h.Z5c.ACTIVITIES) ? h.Z5c.ACTIVITIES : null;
function S(e) {
    let { link: n } = e;
    if (A === n) return !1;
    A = n;
}
class L extends (d = E.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, I.Z, T.Z, C.Z, c.Z);
    }
    getHomeLink() {
        return null != A ? A : s.Z.fallbackRoute;
    }
}
(r = 'AppViewStore'),
    (i = 'displayName') in (l = L)
        ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = r),
    (n.Z = new L(_.Z, {
        OVERLAY_INITIALIZE: function () {
            let e = I.Z.getPrivateChannelIds(),
                n = T.Z.getChannelId(h.ME);
            (null != n || null != e[0]) && (A = h.Z5c.CHANNEL(h.ME, null != n ? n : e[0]));
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
            if (null == A || !A.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
            A = h.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
                let e = h.Z5c.CHANNEL(h.ME, t);
                if (e !== A) return (A = e), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id && null != n.id && null != A && A === h.Z5c.CHANNEL(h.ME, n.id) && (A = null);
        }
    }));
