n.d(t, {
    J: function () {
        return x;
    }
}),
    n(47120),
    n(913527);
var i,
    r,
    l,
    a = n(149765),
    o = n(442837);
n(433517);
var s = n(570140),
    c = n(491428),
    u = n(650774),
    d = n(430824),
    m = n(496675),
    h = n(914010),
    f = n(594174),
    p = n(981631);
function _(e, t, n) {
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
    E = g,
    C = {},
    I = null,
    x = 86400000;
((l = i || (i = {})).IS_OWNER = 'is_owner'), (l.IS_ADMIN = 'is_admin'), (l.IS_COMMUNITY = 'is_community'), (l.GUILD_SIZE = 'guild_size'), (l.IS_HUB = 'is_hub'), (l.IS_VIEWING = 'is_viewing'), (l.GUILD_PERMISSIONS = 'guild_permissions'), (l.GUILD_SIZE_ALL = 'guild_size_all');
let N = new Set(Object.values(i));
function v(e) {
    return (
        (function (e) {
            return !0;
        })(e) &&
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!N.has(e)) return !1;
            let r = t.includes('guild_size_all'),
                l = !0;
            for (let o of Object.values(d.Z.getGuilds())) {
                if (r || t.includes('guild_size')) {
                    let e = u.Z.getMemberCount(o.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        l = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !o.hasFeature(p.oNc.COMMUNITY)) || (t.includes('is_hub') && !o.hasFeature(p.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === i.length) continue;
                    let e = !1;
                    for (let t of i)
                        try {
                            let n = a.vB(t);
                            if (m.Z.can(n, o)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let s = f.default.getCurrentUser(),
                    c = (null == s ? void 0 : s.id) === o.ownerId,
                    d = m.Z.can(p.Plq.ADMINISTRATOR, o);
                if ((t.includes('is_owner') && !c) || (t.includes('is_admin') && !d)) continue;
                null == (C = null != C ? C : {})[e.key] && (C[e.key] = e);
                let _ = h.Z.getGuildId(),
                    g = null != _ && _ === o.id;
                if (!t.includes('is_viewing') || !!g) {
                    if (!r) return !0;
                }
            }
            return (!!r && !!l) || !1;
        })(e)
    );
}
function T(e) {
    let { survey: t } = e;
    if (((E.lastFetched = Date.now()), null == E.hiddenSurveys && (E.hiddenSurveys = {}), null != t && null == E.hiddenSurveys[t.key])) {
        if (!v(t)) return;
        I = t;
    }
}
function S() {
    if (null != I && (v(I) || ((I = null), 0))) return !1;
    !(function () {
        let e = Object.values((C = null != C ? C : {}))[0];
        if (null != e && v(e)) {
            T({
                type: 'SURVEY_FETCHED',
                survey: e
            });
            return;
        }
        if (null == I) return;
        I = null;
    })();
}
class A extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        (E = null != e ? e : g), this.syncWith([h.Z], S);
    }
    getState() {
        return E;
    }
    getCurrentSurvey() {
        return I;
    }
    getSurveyOverride() {
        return E.surveyOverride;
    }
    getLastSeenTimestamp() {
        return E.lastSeen;
    }
}
_(A, 'displayName', 'SurveyStore'),
    _(A, 'persistKey', 'SurveyStore'),
    _(A, 'migrations', [
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
    ]),
    (t.Z = new A(s.Z, {
        CONNECTION_OPEN: function () {
            var e;
            if (!(null != E.lastFetched && Date.now() - (null !== (e = E.lastFetched) && void 0 !== e ? e : 0) < x) || null != E.surveyOverride) (0, c.wk)(E.surveyOverride, !0);
        },
        SURVEY_FETCHED: T,
        SURVEY_HIDE: function (e) {
            let { key: t } = e;
            (E.hiddenSurveys[t] = !0), (I = null), (C = null != C ? C : {}), delete C[t];
        },
        SURVEY_OVERRIDE: function (e) {
            let { id: t } = e;
            (E.surveyOverride = t), null != t && delete E.hiddenSurveys[t], (0, c.wk)(E.surveyOverride, !0);
        },
        PUSH_NOTIFICATION_CLICK: function () {},
        DISPLAYED_INVITE_SHOW: function () {},
        LOGOUT: function () {
            E.hiddenSurveys = {};
        },
        SURVEY_SEEN: function () {
            E.lastSeen = Date.now();
        }
    }));
