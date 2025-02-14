n.d(t, {
    J: () => E,
    Z: () => A
}),
    n(47120),
    n(913527);
var i,
    l,
    a = n(149765),
    r = n(442837);
n(433517);
var s = n(570140),
    o = n(491428),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    m = n(914010),
    _ = n(594174),
    h = n(981631);
function p(e, t, n) {
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
let g = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    f = g,
    x = {},
    C = null,
    E = 86400000;
var v = (((l = v || {}).IS_OWNER = 'is_owner'), (l.IS_ADMIN = 'is_admin'), (l.IS_COMMUNITY = 'is_community'), (l.GUILD_SIZE = 'guild_size'), (l.IS_HUB = 'is_hub'), (l.IS_VIEWING = 'is_viewing'), (l.GUILD_PERMISSIONS = 'guild_permissions'), (l.GUILD_SIZE_ALL = 'guild_size_all'), l);
let I = new Set(Object.values(v));
function N(e) {
    var t;
    return (
        (t = 0),
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!I.has(e)) return !1;
            let l = t.includes('guild_size_all'),
                r = !0;
            for (let s of Object.values(d.Z.getGuilds())) {
                if (l || t.includes('guild_size')) {
                    let e = c.Z.getMemberCount(s.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        r = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !s.hasFeature(h.oNc.COMMUNITY)) || (t.includes('is_hub') && !s.hasFeature(h.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === i.length) continue;
                    let e = !1;
                    for (let t of i)
                        try {
                            let n = a.vB(t);
                            if (u.Z.can(n, s)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let o = _.default.getCurrentUser(),
                    d = (null == o ? void 0 : o.id) === s.ownerId,
                    p = u.Z.can(h.Plq.ADMINISTRATOR, s);
                if ((t.includes('is_owner') && !d) || (t.includes('is_admin') && !p)) continue;
                null == (x = null != x ? x : {})[e.key] && (x[e.key] = e);
                let g = m.Z.getGuildId(),
                    f = null != g && g === s.id;
                if ((!t.includes('is_viewing') || f) && !l) return !0;
            }
            return !!l && !!r;
        })(e)
    );
}
function S(e) {
    let { survey: t } = e;
    if (((f.lastFetched = Date.now()), null == f.hiddenSurveys && (f.hiddenSurveys = {}), null != t && null == f.hiddenSurveys[t.key])) {
        if (!N(t)) return;
        C = t;
    }
}
function T() {
    if (null != C && (N(C) || ((C = null), 0))) return !1;
    !(function () {
        let e = Object.values((x = null != x ? x : {}))[0];
        if (null != e && N(e)) {
            S({
                type: 'SURVEY_FETCHED',
                survey: e
            });
            return;
        }
        if (null != C) C = null;
    })();
}
class b extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        (f = null != e ? e : g), this.syncWith([m.Z], T);
    }
    getState() {
        return f;
    }
    getCurrentSurvey() {
        return C;
    }
    getSurveyOverride() {
        return f.surveyOverride;
    }
    getLastSeenTimestamp() {
        return f.lastSeen;
    }
}
p(b, 'displayName', 'SurveyStore'),
    p(b, 'persistKey', 'SurveyStore'),
    p(b, 'migrations', [
        (e) => {
            let t = { ...e };
            return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t;
        },
        (e) => {
            var t;
            return {
                ...e,
                lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
            };
        }
    ]);
let A = new b(s.Z, {
    CONNECTION_OPEN: function () {
        var e;
        (!(null != f.lastFetched && Date.now() - (null !== (e = f.lastFetched) && void 0 !== e ? e : 0) < E) || null != f.surveyOverride) && (0, o.wk)(f.surveyOverride, !0);
    },
    SURVEY_FETCHED: S,
    SURVEY_HIDE: function (e) {
        let { key: t } = e;
        (f.hiddenSurveys[t] = !0), (C = null), (x = null != x ? x : {}), delete x[t];
    },
    SURVEY_OVERRIDE: function (e) {
        let { id: t } = e;
        (f.surveyOverride = t), null != t && delete f.hiddenSurveys[t], (0, o.wk)(f.surveyOverride, !0);
    },
    PUSH_NOTIFICATION_CLICK: function () {},
    DISPLAYED_INVITE_SHOW: function () {},
    LOGOUT: function () {
        f.hiddenSurveys = {};
    },
    SURVEY_SEEN: function () {
        f.lastSeen = Date.now();
    }
});
