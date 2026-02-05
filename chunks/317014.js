i.d(e, { t: () => S });
var n = i(945276),
    l = i(639555),
    s = i(617641),
    r = i(546140),
    a = i(776038),
    u = i(419954),
    o = i(975571),
    d = i(780964),
    T = i(652215),
    A = i(985018);
let S = (0, u.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => A.intl.string(A.t.qFsx5q),
    useSubtitle: () => A.intl.format(A.t.lunaRv, { learnMoreLink: o.A.getArticleURL(T.MVz.SAFETY_ALERTS) }),
    useValue: r.L,
    setValue: a.a,
    usePredicate: function () {
        let t = (0, s.Lc)({ location: "DMSafetyAlertsSetting" }),
            e = (0, l.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, n.A)() ?? !0;
        return t && !i && !e;
    },
});
