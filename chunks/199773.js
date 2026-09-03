n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    a = n(626584),
    s = n(174459),
    l = n(787925),
    o = n(256787),
    d = n(652215);
let c = new a.A("DCF"),
    u = !1,
    _ = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        newUserMinAgeRequiredOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDismissed: null,
        seenForGuildId: new Map(),
    };
function E(e, t) {
    let n = _.seenForGuildId.get(t);
    return null != n && n.has(e);
}
class A extends i.Ay.PersistedStore {
    static displayName = "DismissibleContentFrameworkStore";
    static persistKey = "DismissibleContentFrameworkStore";
    static migrations = [(e) => ({ ...e })];
    initialize(e) {
        null != e &&
            ((_.numberOfDCsShownToday = e.numberOfDCsShownToday ?? 0),
            (_.dailyCapPeriodStart = e.dailyCapPeriodStart),
            (_.dailyCapOverridden = e.dailyCapOverridden ?? !1),
            (_.newUserMinAgeRequiredOverridden = e.newUserMinAgeRequiredOverridden ?? !1)),
            (_.dismissibleContentSeenDuringSession = new Set()),
            (_.seenForGuildId = new Map()),
            (_.lastDismissed = null);
    }
    getState() {
        return _;
    }
    get dailyCapOverridden() {
        return _.dailyCapOverridden;
    }
    get newUserMinAgeRequiredOverridden() {
        return _.newUserMinAgeRequiredOverridden;
    }
    get lastDismissed() {
        return _.lastDismissed;
    }
    getRenderedAtTimestamp(e) {
        return _.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e, t) {
        if (null != e && (l.C.has(e) || _.dailyCapOverridden)) return !1;
        if (null != e) {
            let n = null != t && (0, o.vf)(e);
            if ((n && null != t && E(e, t)) || (!n && _.dismissibleContentSeenDuringSession.has(e))) return !1;
        }
        let n = new Date();
        n.setHours(0, 0, 0, 0),
            null != _.dailyCapPeriodStart &&
                _.dailyCapPeriodStart < n.getTime() &&
                ((_.numberOfDCsShownToday = 0), (_.dailyCapPeriodStart = null), (u = !1));
        let i = _.numberOfDCsShownToday >= 3;
        return (
            i &&
                !u &&
                ((u = !0),
                c.info("Daily cap in effect, suppressing fatigable content until tomorrow", {
                    shown_dcs: _.numberOfDCsShownToday,
                })),
            i
        );
    }
}
let h = new A(r.h, {
    LOGOUT: function () {
        (u = !1),
            (_ = {
                ..._,
                dismissibleContentSeenDuringSession: new Set(),
                renderedAtTimestamps: new Map(),
                seenForGuildId: new Map(),
            });
    },
    DCF_DAILY_CAP_OVERRIDE: function (e) {
        let { value: t } = e;
        _.dailyCapOverridden = t;
    },
    DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function (e) {
        let { value: t } = e;
        _.newUserMinAgeRequiredOverridden = t;
    },
    DCF_HANDLE_DC_SHOWN: function (e) {
        let { dismissibleContent: t, guildId: n } = e,
            i = new Date();
        if ((_.renderedAtTimestamps.set(t, i.getTime()), l.C.has(t) || _.dailyCapOverridden)) return;
        let r = (0, o.vf)(t) && null != n;
        if (!(!r && _.dismissibleContentSeenDuringSession.has(t))) {
            if (!(r && E(t, n))) {
                if (r) {
                    let e = _.seenForGuildId.get(n) ?? new Set();
                    e.add(t), _.seenForGuildId.set(n, e);
                } else _.dismissibleContentSeenDuringSession.add(t);
                if (null == _.dailyCapPeriodStart) {
                    let e = new Date();
                    e.setHours(0, 0, 0, 0), (_.dailyCapPeriodStart = e.getTime());
                }
                (_.numberOfDCsShownToday += 1),
                    3 === _.numberOfDCsShownToday &&
                        c.info("Daily cap reached", { dismissible_content: t, shown_dcs: _.numberOfDCsShownToday }),
                    _.numberOfDCsShownToday > 3 &&
                        s.default.track(d.HAw.DCF_CAP_EXCEEDED, {
                            cap_type: "daily_cap",
                            dismissible_content: t,
                            shown_dcs: _.numberOfDCsShownToday,
                        });
            }
        }
    },
    DCF_HANDLE_DC_DISMISSED: function (e) {
        let { dismissibleContent: t, guildId: n } = e;
        (_.lastDismissed = { content: t, guildId: n }), _.renderedAtTimestamps.delete(t);
    },
    DCF_OVERRIDE_LAST_DC_DISMISSED: function (e) {
        let { dismissibleContent: t, guildId: n } = e;
        _.lastDismissed = null != t ? { content: t, guildId: n } : null;
    },
    DCF_RESET: function () {
        (u = !1),
            (_.dailyCapPeriodStart = null),
            (_.numberOfDCsShownToday = 0),
            (_.dismissibleContentSeenDuringSession = new Set()),
            (_.seenForGuildId = new Map()),
            (_.lastDismissed = null);
    },
});
