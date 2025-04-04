n.d(t, { Z: () => I }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(626135),
    s = n(261376),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 'daily_cap',
    p = 3,
    h = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDCDismissed: null
    };
function m() {
    h = f(u({}, h), {
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map()
    });
}
function g(e) {
    let { value: t } = e;
    h.dailyCapOverridden = t;
}
function E(e) {
    let { value: t } = e;
    h.newUserMinAgeRequiredOverridden = t;
}
function b(e) {
    let { dismissibleContent: t } = e,
        n = new Date();
    if ((h.renderedAtTimestamps.set(t, n.getTime()), !s.O.has(t) && !h.dailyCapOverridden) && !h.dismissibleContentSeenDuringSession.has(t)) {
        if ((h.dismissibleContentSeenDuringSession.add(t), null == h.dailyCapPeriodStart)) {
            let e = new Date();
            e.setHours(0, 0, 0, 0), (h.dailyCapPeriodStart = e.getTime());
        }
        (h.numberOfDCsShownToday += 1),
            h.numberOfDCsShownToday > p &&
                a.default.track(l.rMx.DCF_CAP_EXCEEDED, {
                    cap_type: _,
                    dismissible_content: t,
                    shown_dcs: h.numberOfDCsShownToday
                });
    }
}
function y(e) {
    let { dismissibleContent: t } = e;
    (h.lastDCDismissed = t), h.renderedAtTimestamps.delete(t);
}
function v() {
    (h.dailyCapPeriodStart = null), (h.numberOfDCsShownToday = 0), (h.dismissibleContentSeenDuringSession = new Set()), (h.lastDCDismissed = null);
}
class O extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r;
            (h.numberOfDCsShownToday = null != (t = e.numberOfDCsShownToday) ? t : 0), (h.dailyCapPeriodStart = e.dailyCapPeriodStart), (h.dailyCapOverridden = null != (n = e.dailyCapOverridden) && n), (h.newUserMinAgeRequiredOverridden = null != (r = e.newUserMinAgeRequiredOverridden) && r);
        }
        (h.dismissibleContentSeenDuringSession = new Set()), (h.lastDCDismissed = null);
    }
    getState() {
        return h;
    }
    get dailyCapOverridden() {
        return h.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return h.newUserMinAgeRequiredOverridden;
    }
    get lastDCDismissed() {
        return h.lastDCDismissed;
    }
    getRenderedAtTimestamp(e) {
        return h.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e) {
        if ((null != e && (s.O.has(e) || h.dailyCapOverridden)) || (null != e && h.dismissibleContentSeenDuringSession.has(e))) return !1;
        let t = new Date();
        return t.setHours(0, 0, 0, 0), null != h.dailyCapPeriodStart && h.dailyCapPeriodStart < t.getTime() && ((h.numberOfDCsShownToday = 0), (h.dailyCapPeriodStart = null)), h.numberOfDCsShownToday >= p;
    }
}
c(O, 'displayName', 'DismissibleContentFrameworkStore'), c(O, 'persistKey', 'DismissibleContentFrameworkStore'), c(O, 'migrations', [(e) => u({}, e)]);
let I = new O(o.Z, {
    LOGOUT: m,
    DCF_DAILY_CAP_OVERRIDE: g,
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: E,
    DCF_HANDLE_DC_SHOWN: b,
    DCF_HANDLE_DC_DISMISSED: y,
    DCF_RESET: v
});
