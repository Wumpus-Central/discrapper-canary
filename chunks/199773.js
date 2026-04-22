"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(954571),
    a = n(787925),
    o = n(256787),
    l = n(652215);
let u = {
    numberOfDCsShownToday: 0,
    dailyCapPeriodStart: null,
    dismissibleContentSeenDuringSession: new Set(),
    dailyCapOverridden: !1,
    newUserMinAgeRequiredOverridden: !1,
    renderedAtTimestamps: new Map(),
    lastDismissed: null,
    seenForGuildId: new Map(),
};
function d(e, t) {
    let n = u.seenForGuildId.get(t);
    return null != n && n.has(e);
}
class c extends r.Ay.PersistedStore {
    static displayName = "DismissibleContentFrameworkStore";
    static persistKey = "DismissibleContentFrameworkStore";
    static migrations = [(e) => ({ ...e })];
    initialize(e) {
        null != e &&
            ((u.numberOfDCsShownToday = e.numberOfDCsShownToday ?? 0),
            (u.dailyCapPeriodStart = e.dailyCapPeriodStart),
            (u.dailyCapOverridden = e.dailyCapOverridden ?? !1),
            (u.newUserMinAgeRequiredOverridden = e.newUserMinAgeRequiredOverridden ?? !1)),
            (u.dismissibleContentSeenDuringSession = new Set()),
            (u.seenForGuildId = new Map()),
            (u.lastDismissed = null);
    }
    getState() {
        return u;
    }
    get dailyCapOverridden() {
        return u.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return u.newUserMinAgeRequiredOverridden;
    }
    get lastDismissed() {
        return u.lastDismissed;
    }
    getRenderedAtTimestamp(e) {
        return u.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e, t) {
        if (null != e && (a.C.has(e) || u.dailyCapOverridden)) return !1;
        if (null != e) {
            let n = null != t && (0, o.vf)(e);
            if ((n && null != t && d(e, t)) || (!n && u.dismissibleContentSeenDuringSession.has(e))) return !1;
        }
        let n = new Date();
        return (
            n.setHours(0, 0, 0, 0),
            null != u.dailyCapPeriodStart &&
                u.dailyCapPeriodStart < n.getTime() &&
                ((u.numberOfDCsShownToday = 0), (u.dailyCapPeriodStart = null)),
            u.numberOfDCsShownToday >= 3
        );
    }
}
let _ = new c(i.h, {
    LOGOUT: function () {
        u = {
            ...u,
            dismissibleContentSeenDuringSession: new Set(),
            renderedAtTimestamps: new Map(),
            seenForGuildId: new Map(),
        };
    },
    DCF_DAILY_CAP_OVERRIDE: function (e) {
        let { value: t } = e;
        u.dailyCapOverridden = t;
    },
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function (e) {
        let { value: t } = e;
        u.newUserMinAgeRequiredOverridden = t;
    },
    DCF_HANDLE_DC_SHOWN: function (e) {
        let { dismissibleContent: t, guildId: n } = e,
            r = new Date();
        if ((u.renderedAtTimestamps.set(t, r.getTime()), a.C.has(t) || u.dailyCapOverridden)) return;
        let i = (0, o.vf)(t) && null != n;
        if (!(!i && u.dismissibleContentSeenDuringSession.has(t))) {
            if (!(i && d(t, n))) {
                if (i) {
                    let e = u.seenForGuildId.get(n) ?? new Set();
                    e.add(t), u.seenForGuildId.set(n, e);
                } else u.dismissibleContentSeenDuringSession.add(t);
                if (null == u.dailyCapPeriodStart) {
                    let e = new Date();
                    e.setHours(0, 0, 0, 0), (u.dailyCapPeriodStart = e.getTime());
                }
                (u.numberOfDCsShownToday += 1),
                    u.numberOfDCsShownToday > 3 &&
                        s.default.track(l.HAw.DCF_CAP_EXCEEDED, {
                            cap_type: "daily_cap",
                            dismissible_content: t,
                            shown_dcs: u.numberOfDCsShownToday,
                        });
            }
        }
    },
    DCF_HANDLE_DC_DISMISSED: function (e) {
        let { dismissibleContent: t, guildId: n } = e;
        (u.lastDismissed = { content: t, guildId: n }), u.renderedAtTimestamps.delete(t);
    },
    DCF_OVERRIDE_LAST_DC_DISMISSED: function (e) {
        let { dismissibleContent: t, guildId: n } = e;
        u.lastDismissed = null != t ? { content: t, guildId: n } : null;
    },
    DCF_RESET: function () {
        (u.dailyCapPeriodStart = null),
            (u.numberOfDCsShownToday = 0),
            (u.dismissibleContentSeenDuringSession = new Set()),
            (u.seenForGuildId = new Map()),
            (u.lastDismissed = null);
    },
});
