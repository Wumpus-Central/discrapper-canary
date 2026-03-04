"use strict";
n.d(t, { BN: () => E, li: () => _ });
var i = n(989349),
    r = n.n(i),
    l = n(335871),
    s = n(594061),
    a = n(617617),
    o = n(431162);
let E = (e) => {
        if (!c(e)) return !1;
        let t = a.A.settings.userContent?.safetyUserSentimentNoticeDismissedAt,
            n = null != t ? l.D.toDate(t) : void 0,
            i = null != n ? r()().diff(n, "days") : null;
        if (null != t && !(null != i && i > 30)) return !1;
        let { isEligible: s } = o.O.getCurrentConfig({ location: "657a81_1" }, { autoTrackExposure: !0 });
        return s;
    },
    c = (e) => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
    _ = () => {
        let e = l.D.now();
        s.wc.updateAsync(
            "userContent",
            (t) => {
                t.safetyUserSentimentNoticeDismissedAt = e;
            },
            s.Sb.INFREQUENT_USER_ACTION,
        );
    };
