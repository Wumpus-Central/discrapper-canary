n.d(e, { I: () => E });
var i = n(880257),
    l = n(667172),
    s = n(237292),
    u = n(604849),
    r = n(278828),
    a = n(509613),
    o = n(63063),
    T = n(313789),
    S = n(981631),
    c = n(388032);
let E = (0, a.qs)(T.n.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => c.intl.string(c.t.qFsx5q),
    useSubtitle: () => c.intl.format(c.t.lunaRv, { learnMoreLink: o.Z.getArticleURL(S.BhN.SAFETY_ALERTS) }),
    useValue: u.c,
    setValue: r.Q,
    usePredicate: function () {
        var t;
        let e = (0, s.y0)({ location: "DMSafetyAlertsSetting" }),
            n = (0, l.v4)({ location: "DMSafetyAlertsSetting" }),
            u = null == (t = (0, i.Z)()) || t;
        return e && !u && !n;
    },
});
