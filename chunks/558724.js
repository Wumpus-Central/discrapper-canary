n.d(t, {
    J: () => E,
    Z: () => T
}),
    n(388685),
    n(913527);
var r,
    i,
    l = n(149765),
    a = n(442837);
n(433517);
var o = n(570140),
    s = n(491428),
    c = n(650774),
    u = n(430824),
    d = n(496675),
    p = n(914010),
    m = n(594174),
    f = n(981631);
function h(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
let b = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    x = b,
    y = {},
    v = null,
    E = 86400000;
var O = (((i = O || {}).IS_OWNER = 'is_owner'), (i.IS_ADMIN = 'is_admin'), (i.IS_COMMUNITY = 'is_community'), (i.GUILD_SIZE = 'guild_size'), (i.IS_HUB = 'is_hub'), (i.IS_VIEWING = 'is_viewing'), (i.GUILD_PERMISSIONS = 'guild_permissions'), (i.GUILD_SIZE_ALL = 'guild_size_all'), i);
let j = new Set(Object.values(O));
function C(e) {
    var t;
    return (
        (t = 0),
        !0,
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!j.has(e)) return !1;
            let i = t.includes('guild_size_all'),
                a = !0;
            for (let o of Object.values(u.Z.getGuilds())) {
                if (i || t.includes('guild_size')) {
                    let e = c.Z.getMemberCount(o.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        a = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !o.hasFeature(f.oNc.COMMUNITY)) || (t.includes('is_hub') && !o.hasFeature(f.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === r.length) continue;
                    let e = !1;
                    for (let t of r)
                        try {
                            let n = l.vB(t);
                            if (d.Z.can(n, o)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let s = m.default.getCurrentUser(),
                    u = (null == s ? void 0 : s.id) === o.ownerId,
                    h = d.Z.can(f.Plq.ADMINISTRATOR, o);
                if ((t.includes('is_owner') && !u) || (t.includes('is_admin') && !h)) continue;
                null == (y = null != y ? y : {})[e.key] && (y[e.key] = e);
                let g = p.Z.getGuildId(),
                    _ = null != g && g === o.id;
                if ((!t.includes('is_viewing') || _) && !i) return !0;
            }
            return !!i && !!a;
        })(e)
    );
}
function S(e) {
    let { survey: t } = e;
    if (((x.lastFetched = Date.now()), null == x.hiddenSurveys && (x.hiddenSurveys = {}), null != t && null == x.hiddenSurveys[t.key])) {
        if (!C(t)) return;
        v = t;
    }
}
function I() {
    if (null != v && (C(v) || ((v = null), 0))) return !1;
    let e = Object.values((y = null != y ? y : {}))[0];
    null != e && C(e)
        ? S({
              type: 'SURVEY_FETCHED',
              survey: e
          })
        : null != v && (v = null);
}
class N extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        (x = null != e ? e : b), this.syncWith([p.Z], I);
    }
    getState() {
        return x;
    }
    getCurrentSurvey() {
        return v;
    }
    getSurveyOverride() {
        return x.surveyOverride;
    }
    getLastSeenTimestamp() {
        return x.lastSeen;
    }
}
h(N, 'displayName', 'SurveyStore'),
    h(N, 'persistKey', 'SurveyStore'),
    h(N, 'migrations', [
        (e) => {
            let t = g({}, e);
            return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t;
        },
        (e) => {
            var t;
            return _(g({}, e), { lastSeen: null != (t = e.lastSeen) ? t : null });
        },
        (e) => {
            var t;
            return _(g({}, e), { hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {} });
        }
    ]);
let T = new N(o.Z, {
    CONNECTION_OPEN: function () {
        var e;
        (null != x.lastFetched && Date.now() - (null != (e = x.lastFetched) ? e : 0) < E && null == x.surveyOverride) || (0, s.wk)(x.surveyOverride, !0);
    },
    SURVEY_FETCHED: S,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (x.hiddenSurveys[t] = !0), (v = null), (y = null != y ? y : {}), delete y[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        (x.surveyOverride = t), null != t && delete x.hiddenSurveys[t], (0, s.wk)(x.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        x.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        x.lastSeen = Date.now();
    }
});
