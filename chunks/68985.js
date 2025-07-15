(n.d(t, { Z: () => A }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(626135),
    s = n(261376),
    l = n(428967),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 'daily_cap',
    h = 3,
    m = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDCDismissed: null,
        seenForGuildId: new Map()
    };
function g() {
    m = _(d({}, m), {
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map(),
        seenForGuildId: new Map()
    });
}
function E(e) {
    let { value: t } = e;
    m.dailyCapOverridden = t;
}
function b(e) {
    let { value: t } = e;
    m.newUserMinAgeRequiredOverridden = t;
}
function y(e, t) {
    let n = m.seenForGuildId.get(t);
    return null != n && n.has(e);
}
function O(e) {
    let { dismissibleContent: t, guildId: n } = e,
        r = new Date();
    if ((m.renderedAtTimestamps.set(t, r.getTime()), s.O.has(t) || m.dailyCapOverridden)) return;
    let i = (0, l.Vc)(t) && null != n;
    if (!(!i && m.dismissibleContentSeenDuringSession.has(t))) {
        if (!(i && y(t, n))) {
            if (i) {
                var a;
                let e = null != (a = m.seenForGuildId.get(n)) ? a : new Set();
                (e.add(t), m.seenForGuildId.set(n, e));
            } else m.dismissibleContentSeenDuringSession.add(t);
            if (null == m.dailyCapPeriodStart) {
                let e = new Date();
                (e.setHours(0, 0, 0, 0), (m.dailyCapPeriodStart = e.getTime()));
            }
            ((m.numberOfDCsShownToday += 1),
                m.numberOfDCsShownToday > h &&
                    o.default.track(c.rMx.DCF_CAP_EXCEEDED, {
                        cap_type: p,
                        dismissible_content: t,
                        shown_dcs: m.numberOfDCsShownToday
                    }));
        }
    }
}
function v(e) {
    let { dismissibleContent: t } = e;
    ((m.lastDCDismissed = t), m.renderedAtTimestamps.delete(t));
}
function I(e) {
    let { dismissibleContent: t } = e;
    m.lastDCDismissed = null != t ? t : null;
}
function T() {
    ((m.dailyCapPeriodStart = null), (m.numberOfDCsShownToday = 0), (m.dismissibleContentSeenDuringSession = new Set()), (m.seenForGuildId = new Map()), (m.lastDCDismissed = null));
}
class S extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r;
            ((m.numberOfDCsShownToday = null != (t = e.numberOfDCsShownToday) ? t : 0), (m.dailyCapPeriodStart = e.dailyCapPeriodStart), (m.dailyCapOverridden = null != (n = e.dailyCapOverridden) && n), (m.newUserMinAgeRequiredOverridden = null != (r = e.newUserMinAgeRequiredOverridden) && r));
        }
        ((m.dismissibleContentSeenDuringSession = new Set()), (m.seenForGuildId = new Map()), (m.lastDCDismissed = null));
    }
    getState() {
        return m;
    }
    get dailyCapOverridden() {
        return m.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return m.newUserMinAgeRequiredOverridden;
    }
    get lastDCDismissed() {
        return m.lastDCDismissed;
    }
    getRenderedAtTimestamp(e) {
        return m.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e, t) {
        if (null != e && (s.O.has(e) || m.dailyCapOverridden)) return !1;
        if (null != e) {
            let n = null != t && (0, l.Vc)(e);
            if ((n && null != t && y(e, t)) || (!n && m.dismissibleContentSeenDuringSession.has(e))) return !1;
        }
        let n = new Date();
        return (n.setHours(0, 0, 0, 0), null != m.dailyCapPeriodStart && m.dailyCapPeriodStart < n.getTime() && ((m.numberOfDCsShownToday = 0), (m.dailyCapPeriodStart = null)), m.numberOfDCsShownToday >= h);
    }
}
(u(S, 'displayName', 'DismissibleContentFrameworkStore'), u(S, 'persistKey', 'DismissibleContentFrameworkStore'), u(S, 'migrations', [(e) => d({}, e)]));
let A = new S(a.Z, {
    LOGOUT: g,
    DCF_DAILY_CAP_OVERRIDE: E,
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: b,
    DCF_HANDLE_DC_SHOWN: O,
    DCF_HANDLE_DC_DISMISSED: v,
    DCF_OVERRIDE_LAST_DC_DISMISSED: I,
    DCF_RESET: T
});
