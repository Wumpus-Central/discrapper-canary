"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    s = n(954571),
    a = n(787925),
    o = n(256787),
    l = n(652215);
let u = "daily_cap",
    c = 3,
    d = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDismissed: null,
        seenForGuildId: new Map(),
    };
function _() {
    d = {
        ...d,
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map(),
        seenForGuildId: new Map(),
    };
}
function f(e) {
    let { value: t } = e;
    d.dailyCapOverridden = t;
}
function p(e) {
    let { value: t } = e;
    d.newUserMinAgeRequiredOverridden = t;
}
function h(e, t) {
    let n = d.seenForGuildId.get(t);
    return null != n && n.has(e);
}
function m(e) {
    let { dismissibleContent: t, guildId: n } = e,
        r = new Date();
    if ((d.renderedAtTimestamps.set(t, r.getTime()), a.C.has(t) || d.dailyCapOverridden)) return;
    let i = (0, o.vf)(t) && null != n;
    if (!(!i && d.dismissibleContentSeenDuringSession.has(t))) {
        if (!(i && h(t, n))) {
            if (i) {
                let e = d.seenForGuildId.get(n) ?? new Set();
                e.add(t), d.seenForGuildId.set(n, e);
            } else d.dismissibleContentSeenDuringSession.add(t);
            if (null == d.dailyCapPeriodStart) {
                let e = new Date();
                e.setHours(0, 0, 0, 0), (d.dailyCapPeriodStart = e.getTime());
            }
            (d.numberOfDCsShownToday += 1),
                d.numberOfDCsShownToday > c &&
                    s.default.track(l.HAw.DCF_CAP_EXCEEDED, {
                        cap_type: u,
                        dismissible_content: t,
                        shown_dcs: d.numberOfDCsShownToday,
                    });
        }
    }
}
function E(e) {
    let { dismissibleContent: t, guildId: n } = e;
    (d.lastDismissed = { content: t, guildId: n }), d.renderedAtTimestamps.delete(t);
}
function g(e) {
    let { dismissibleContent: t, guildId: n } = e;
    d.lastDismissed = null != t ? { content: t, guildId: n } : null;
}
function A() {
    (d.dailyCapPeriodStart = null),
        (d.numberOfDCsShownToday = 0),
        (d.dismissibleContentSeenDuringSession = new Set()),
        (d.seenForGuildId = new Map()),
        (d.lastDismissed = null);
}
class I extends r.Ay.PersistedStore {
    static displayName = "DismissibleContentFrameworkStore";
    static persistKey = "DismissibleContentFrameworkStore";
    static migrations = [(e) => ({ ...e })];
    initialize(e) {
        null != e &&
            ((d.numberOfDCsShownToday = e.numberOfDCsShownToday ?? 0),
            (d.dailyCapPeriodStart = e.dailyCapPeriodStart),
            (d.dailyCapOverridden = e.dailyCapOverridden ?? !1),
            (d.newUserMinAgeRequiredOverridden = e.newUserMinAgeRequiredOverridden ?? !1)),
            (d.dismissibleContentSeenDuringSession = new Set()),
            (d.seenForGuildId = new Map()),
            (d.lastDismissed = null);
    }
    getState() {
        return d;
    }
    get dailyCapOverridden() {
        return d.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return d.newUserMinAgeRequiredOverridden;
    }
    get lastDismissed() {
        return d.lastDismissed;
    }
    getRenderedAtTimestamp(e) {
        return d.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e, t) {
        if (null != e && (a.C.has(e) || d.dailyCapOverridden)) return !1;
        if (null != e) {
            let n = null != t && (0, o.vf)(e);
            if ((n && null != t && h(e, t)) || (!n && d.dismissibleContentSeenDuringSession.has(e))) return !1;
        }
        let n = new Date();
        return (
            n.setHours(0, 0, 0, 0),
            null != d.dailyCapPeriodStart &&
                d.dailyCapPeriodStart < n.getTime() &&
                ((d.numberOfDCsShownToday = 0), (d.dailyCapPeriodStart = null)),
            d.numberOfDCsShownToday >= c
        );
    }
}
let T = new I(i.h, {
    LOGOUT: _,
    DCF_DAILY_CAP_OVERRIDE: f,
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: p,
    DCF_HANDLE_DC_SHOWN: m,
    DCF_HANDLE_DC_DISMISSED: E,
    DCF_OVERRIDE_LAST_DC_DISMISSED: g,
    DCF_RESET: A,
});
