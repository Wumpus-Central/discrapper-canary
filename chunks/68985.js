n.d(t, { Z: () => A }), n(388685);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
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
let _ = "daily_cap",
    m = 3,
    h = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDCDismissed: null,
        seenForGuildId: new Map(),
    };
function g() {
    h = p(d({}, h), {
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map(),
        seenForGuildId: new Map(),
    });
}
function E(e) {
    let { value: t } = e;
    h.dailyCapOverridden = t;
}
function b(e) {
    let { value: t } = e;
    h.newUserMinAgeRequiredOverridden = t;
}
function y(e, t) {
    let n = h.seenForGuildId.get(t);
    return null != n && n.has(e);
}
function O(e) {
    let { dismissibleContent: t, guildId: n } = e,
        r = new Date();
    if ((h.renderedAtTimestamps.set(t, r.getTime()), s.O.has(t) || h.dailyCapOverridden)) return;
    let i = (0, l.fn)(t) && null != n;
    if (!(!i && h.dismissibleContentSeenDuringSession.has(t))) {
        if (!(i && y(t, n))) {
            if (i) {
                var a;
                let e = null != (a = h.seenForGuildId.get(n)) ? a : new Set();
                e.add(t), h.seenForGuildId.set(n, e);
            } else h.dismissibleContentSeenDuringSession.add(t);
            if (null == h.dailyCapPeriodStart) {
                let e = new Date();
                e.setHours(0, 0, 0, 0), (h.dailyCapPeriodStart = e.getTime());
            }
            (h.numberOfDCsShownToday += 1),
                h.numberOfDCsShownToday > m &&
                    o.default.track(c.rMx.DCF_CAP_EXCEEDED, {
                        cap_type: _,
                        dismissible_content: t,
                        shown_dcs: h.numberOfDCsShownToday,
                    });
        }
    }
}
function v(e) {
    let { dismissibleContent: t } = e;
    (h.lastDCDismissed = t), h.renderedAtTimestamps.delete(t);
}
function S(e) {
    let { dismissibleContent: t } = e;
    h.lastDCDismissed = null != t ? t : null;
}
function I() {
    (h.dailyCapPeriodStart = null),
        (h.numberOfDCsShownToday = 0),
        (h.dismissibleContentSeenDuringSession = new Set()),
        (h.seenForGuildId = new Map()),
        (h.lastDCDismissed = null);
}
class T extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r;
            (h.numberOfDCsShownToday = null != (t = e.numberOfDCsShownToday) ? t : 0),
                (h.dailyCapPeriodStart = e.dailyCapPeriodStart),
                (h.dailyCapOverridden = null != (n = e.dailyCapOverridden) && n),
                (h.newUserMinAgeRequiredOverridden = null != (r = e.newUserMinAgeRequiredOverridden) && r);
        }
        (h.dismissibleContentSeenDuringSession = new Set()), (h.seenForGuildId = new Map()), (h.lastDCDismissed = null);
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
    hasUserHitDCCap(e, t) {
        if (null != e && (s.O.has(e) || h.dailyCapOverridden)) return !1;
        if (null != e) {
            let n = null != t && (0, l.fn)(e);
            if ((n && null != t && y(e, t)) || (!n && h.dismissibleContentSeenDuringSession.has(e))) return !1;
        }
        let n = new Date();
        return (
            n.setHours(0, 0, 0, 0),
            null != h.dailyCapPeriodStart &&
                h.dailyCapPeriodStart < n.getTime() &&
                ((h.numberOfDCsShownToday = 0), (h.dailyCapPeriodStart = null)),
            h.numberOfDCsShownToday >= m
        );
    }
}
u(T, "displayName", "DismissibleContentFrameworkStore"),
    u(T, "persistKey", "DismissibleContentFrameworkStore"),
    u(T, "migrations", [(e) => d({}, e)]);
let A = new T(a.Z, {
    LOGOUT: g,
    DCF_DAILY_CAP_OVERRIDE: E,
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: b,
    DCF_HANDLE_DC_SHOWN: O,
    DCF_HANDLE_DC_DISMISSED: v,
    DCF_OVERRIDE_LAST_DC_DISMISSED: S,
    DCF_RESET: I,
});
