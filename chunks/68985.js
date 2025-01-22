var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(626135),
    u = r(261376),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 'daily_cap',
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
function _() {
    h = {
        ...h,
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map()
    };
}
function m(e) {
    let { value: n } = e;
    h.dailyCapOverridden = n;
}
function g(e) {
    let { value: n } = e;
    h.newUserMinAgeRequiredOverridden = n;
}
function E(e) {
    let { dismissibleContent: n } = e,
        r = new Date();
    if ((h.renderedAtTimestamps.set(n, r.getTime()), !(u.O.has(n) || h.dailyCapOverridden || h.dismissibleContentSeenDuringSession.has(n)))) {
        if ((h.dismissibleContentSeenDuringSession.add(n), null == h.dailyCapPeriodStart)) {
            let e = new Date();
            e.setHours(0, 0, 0, 0), (h.dailyCapPeriodStart = e.getTime());
        }
        (h.numberOfDCsShownToday += 1),
            h.numberOfDCsShownToday > p &&
                l.default.track(c.rMx.DCF_CAP_EXCEEDED, {
                    cap_type: f,
                    dismissible_content: n,
                    shown_dcs: h.numberOfDCsShownToday
                });
    }
}
function v(e) {
    let { dismissibleContent: n } = e;
    (h.lastDCDismissed = n), h.renderedAtTimestamps.delete(n);
}
function y() {
    (h.dailyCapPeriodStart = null), (h.numberOfDCsShownToday = 0), (h.dismissibleContentSeenDuringSession = new Set()), (h.lastDCDismissed = null);
}
class b extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, r, i;
            (h.numberOfDCsShownToday = null !== (n = e.numberOfDCsShownToday) && void 0 !== n ? n : 0), (h.dailyCapPeriodStart = e.dailyCapPeriodStart), (h.dailyCapOverridden = null !== (r = e.dailyCapOverridden) && void 0 !== r && r), (h.newUserMinAgeRequiredOverridden = null !== (i = e.newUserMinAgeRequiredOverridden) && void 0 !== i && i);
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
        if ((null != e && (u.O.has(e) || h.dailyCapOverridden)) || (null != e && h.dismissibleContentSeenDuringSession.has(e))) return !1;
        let n = new Date();
        return n.setHours(0, 0, 0, 0), null != h.dailyCapPeriodStart && h.dailyCapPeriodStart < n.getTime() && ((h.numberOfDCsShownToday = 0), (h.dailyCapPeriodStart = null)), h.numberOfDCsShownToday >= p;
    }
}
d(b, 'displayName', 'DismissibleContentFrameworkStore'),
    d(b, 'persistKey', 'DismissibleContentFrameworkStore'),
    d(b, 'migrations', [(e) => ({ ...e })]),
    (n.Z = new b(s.Z, {
        LOGOUT: _,
        DCF_DAILY_CAP_OVERRIDE: m,
        DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: g,
        DCF_HANDLE_DC_SHOWN: E,
        DCF_HANDLE_DC_DISMISSED: v,
        DCF_RESET: y
    }));
