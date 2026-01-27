n.d(t, {
    BN: () => c,
    li: () => E,
});
var r = n(989349),
    i = n.n(r),
    l = n(335871),
    o = n(594061),
    a = n(617617),
    s = n(431162);
let c = (e) => {
        var t;
        if (!u(e)) return !1;
        let n = null == (t = a.A.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            r = null != n ? l.D.toDate(n) : void 0,
            o = null != r ? i()().diff(r, "days") : null;
        if (null != n && !(null != o && o > 30)) return !1;
        let { isEligible: c } = s.O.getCurrentConfig(
            {
                location: "657a81_1",
            },
            {
                autoTrackExposure: !0,
            },
        );
        return c;
    },
    u = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
    E = () => {
        let e = l.D.now();
        o.wc.updateAsync(
            "userContent",
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            o.Sb.INFREQUENT_USER_ACTION,
        );
    };
