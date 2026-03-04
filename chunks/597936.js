n.d(t, { BN: () => c, li: () => E });
var i = n(989349),
    l = n.n(i),
    r = n(335871),
    a = n(594061),
    s = n(617617),
    o = n(431162);
let c = (e) => {
        if (!_(e)) return !1;
        let t = s.A.settings.userContent?.safetyUserSentimentNoticeDismissedAt,
            n = null != t ? r.D.toDate(t) : void 0,
            i = null != n ? l()().diff(n, "days") : null;
        if (null != t && !(null != i && i > 30)) return !1;
        let { isEligible: a } = o.O.getCurrentConfig({ location: "657a81_1" }, { autoTrackExposure: !0 });
        return a;
    },
    _ = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
    E = () => {
        let e = r.D.now();
        a.wc.updateAsync(
            "userContent",
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            a.Sb.INFREQUENT_USER_ACTION,
        );
    };
