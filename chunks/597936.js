n.d(t, {
    BN: () => c,
    li: () => f,
});
var r = n(989349),
    i = n.n(r),
    a = n(335871),
    s = n(594061),
    o = n(617617),
    l = n(431162);
let c = (e) => {
        var t;
        if (!d(e)) return !1;
        let n = null == (t = o.A.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
            r = null != n ? a.D.toDate(n) : void 0,
            s = null != r ? i()().diff(r, "days") : null,
            c = null != s && s > 30;
        if (null != n && !c) return !1;
        let { isEligible: u } = l.O.getCurrentConfig({ location: "657a81_1" }, { autoTrackExposure: !0 });
        return u;
    },
    u = 2592000000,
    d = (e) => null != e && Date.now() - e.createdAt.getTime() > u,
    f = () => {
        let e = a.D.now();
        s.wc.updateAsync(
            "userContent",
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            s.Sb.INFREQUENT_USER_ACTION,
        );
    };
