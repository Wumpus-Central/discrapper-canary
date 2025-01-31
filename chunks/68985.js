n.d(t, { Z: () => y }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(626135),
    o = n(261376),
    l = n(981631);
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
let c = 'daily_cap',
    d = 3,
    f = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDCDismissed: null
    };
function _() {
    f = {
        ...f,
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map()
    };
}
function p(e) {
    let { value: t } = e;
    f.dailyCapOverridden = t;
}
function h(e) {
    let { value: t } = e;
    f.newUserMinAgeRequiredOverridden = t;
}
function m(e) {
    let { dismissibleContent: t } = e,
        n = new Date();
    if ((f.renderedAtTimestamps.set(t, n.getTime()), !(o.O.has(t) || f.dailyCapOverridden || f.dismissibleContentSeenDuringSession.has(t)))) {
        if ((f.dismissibleContentSeenDuringSession.add(t), null == f.dailyCapPeriodStart)) {
            let e = new Date();
            e.setHours(0, 0, 0, 0), (f.dailyCapPeriodStart = e.getTime());
        }
        (f.numberOfDCsShownToday += 1),
            f.numberOfDCsShownToday > d &&
                s.default.track(l.rMx.DCF_CAP_EXCEEDED, {
                    cap_type: c,
                    dismissible_content: t,
                    shown_dcs: f.numberOfDCsShownToday
                });
    }
}
function g(e) {
    let { dismissibleContent: t } = e;
    (f.lastDCDismissed = t), f.renderedAtTimestamps.delete(t);
}
function E() {
    (f.dailyCapPeriodStart = null), (f.numberOfDCsShownToday = 0), (f.dismissibleContentSeenDuringSession = new Set()), (f.lastDCDismissed = null);
}
class v extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, i;
            (f.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0), (f.dailyCapPeriodStart = e.dailyCapPeriodStart), (f.dailyCapOverridden = null !== (n = e.dailyCapOverridden) && void 0 !== n && n), (f.newUserMinAgeRequiredOverridden = null !== (i = e.newUserMinAgeRequiredOverridden) && void 0 !== i && i);
        }
        (f.dismissibleContentSeenDuringSession = new Set()), (f.lastDCDismissed = null);
    }
    getState() {
        return f;
    }
    get dailyCapOverridden() {
        return f.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return f.newUserMinAgeRequiredOverridden;
    }
    get lastDCDismissed() {
        return f.lastDCDismissed;
    }
    getRenderedAtTimestamp(e) {
        return f.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e) {
        if ((null != e && (o.O.has(e) || f.dailyCapOverridden)) || (null != e && f.dismissibleContentSeenDuringSession.has(e))) return !1;
        let t = new Date();
        return t.setHours(0, 0, 0, 0), null != f.dailyCapPeriodStart && f.dailyCapPeriodStart < t.getTime() && ((f.numberOfDCsShownToday = 0), (f.dailyCapPeriodStart = null)), f.numberOfDCsShownToday >= d;
    }
}
u(v, 'displayName', 'DismissibleContentFrameworkStore'), u(v, 'persistKey', 'DismissibleContentFrameworkStore'), u(v, 'migrations', [(e) => ({ ...e })]);
let y = new v(a.Z, {
    LOGOUT: _,
    DCF_DAILY_CAP_OVERRIDE: p,
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: h,
    DCF_HANDLE_DC_SHOWN: m,
    DCF_HANDLE_DC_DISMISSED: g,
    DCF_RESET: E
});
