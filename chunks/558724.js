(n.d(t, {
    J: () => j,
    Z: () => D
}),
    n(388685));
var r,
    i,
    l = n(913527),
    a = n.n(l),
    o = n(149765),
    s = n(442837),
    c = n(433517),
    u = n(570140),
    d = n(491428),
    p = n(650774),
    m = n(430824),
    f = n(496675),
    _ = n(914010),
    g = n(594174),
    h = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    y = O,
    v = {},
    x = null,
    I = !1,
    j = 86400000;
var S = (((i = S || {}).IS_OWNER = 'is_owner'), (i.IS_ADMIN = 'is_admin'), (i.IS_COMMUNITY = 'is_community'), (i.GUILD_SIZE = 'guild_size'), (i.IS_HUB = 'is_hub'), (i.IS_VIEWING = 'is_viewing'), (i.GUILD_PERMISSIONS = 'guild_permissions'), (i.GUILD_SIZE_ALL = 'guild_size_all'), i);
let T = new Set(Object.values(S));
function N() {
    return null == y.lastFetched || Date.now() - y.lastFetched >= j;
}
function P() {
    !I && (N() || null != y.surveyOverride) && ((I = !0), (0, d.wk)(y.surveyOverride, !0));
}
function A(e) {
    var t;
    return (
        (t = 0),
        !0,
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!T.has(e)) return !1;
            let i = t.includes('guild_size_all'),
                l = !0;
            for (let a of m.Z.getGuildsArray()) {
                if (i || t.includes('guild_size')) {
                    let e = p.Z.getMemberCount(a.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        l = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !a.features.has(h.oNc.COMMUNITY)) || (t.includes('is_hub') && !a.features.has(h.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === r.length) continue;
                    let e = !1;
                    for (let t of r)
                        try {
                            let n = o.vB(t);
                            if (f.Z.can(n, a)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let s = g.default.getCurrentUser(),
                    c = (null == s ? void 0 : s.id) === a.ownerId,
                    u = f.Z.can(h.Plq.ADMINISTRATOR, a);
                if ((t.includes('is_owner') && !c) || (t.includes('is_admin') && !u)) continue;
                null == (v = null != v ? v : {})[e.key] && (v[e.key] = e);
                let d = _.Z.getGuildId(),
                    m = null != d && d === a.id;
                if ((!t.includes('is_viewing') || m) && !i) return !0;
            }
            return !!i && !!l;
        })(e)
    );
}
function w(e) {
    let { survey: t } = e;
    ((I = !1), (y.lastFetched = Date.now()), null == y.hiddenSurveys && (y.hiddenSurveys = {}));
    let n = null != t,
        r = n && null == y.hiddenSurveys[t.key],
        i = n && A(t);
    var l = 0;
    let o = c.K.get(h.z7k);
    (null == o || a()().diff(o, 'day'), (x = r && i && 1 ? t : null));
}
function Z() {
    if (null != x && (A(x) || ((x = null), 0))) return !1;
    let e = Object.values((v = null != v ? v : {}))[0];
    null != e && A(e)
        ? w({
              type: 'SURVEY_FETCHED',
              survey: e
          })
        : null != x && (x = null);
}
class R extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        ((y = null != e ? e : O), this.syncWith([_.Z], Z));
    }
    getState() {
        return y;
    }
    getCurrentSurvey() {
        return N() ? null : x;
    }
    getSurveyOverride() {
        return y.surveyOverride;
    }
    getLastSeenTimestamp() {
        return y.lastSeen;
    }
}
(b(R, 'displayName', 'SurveyStore'),
    b(R, 'persistKey', 'SurveyStore'),
    b(R, 'migrations', [
        (e) => {
            let t = E({}, e);
            return (delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t);
        },
        (e) => {
            var t;
            return C(E({}, e), { lastSeen: null != (t = e.lastSeen) ? t : null });
        },
        (e) => {
            var t;
            return C(E({}, e), { hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {} });
        }
    ]));
let D = new R(u.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_RESUMED: P,
    SURVEY_FETCHED: w,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        ((y.hiddenSurveys[t] = !0), (x = null), (v = null != v ? v : {}), delete v[t]);
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        ((y.surveyOverride = t), null != t && delete y.hiddenSurveys[t], (0, d.wk)(y.surveyOverride, !0));
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        y.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        y.lastSeen = Date.now();
    }
});
