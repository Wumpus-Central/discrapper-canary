i.d(e, {
    t: () => E,
});
var n = i(945276),
    l = i(639555),
    s = i(617641),
    r = i(546140),
    u = i(776038),
    a = i(419954),
    o = i(975571),
    T = i(780964),
    A = i(652215),
    S = i(985018);
let E = (0, a.zD)(T.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => S.intl.string(S.t.qFsx5q),
    useSubtitle: () =>
        S.intl.format(S.t.lunaRv, {
            learnMoreLink: o.A.getArticleURL(A.MVz.SAFETY_ALERTS),
        }),
    useValue: r.L,
    setValue: u.a,
    usePredicate: function () {
        var t;
        let e = (0, s.Lc)({
                location: "DMSafetyAlertsSetting",
            }),
            i = (0, l.Rv)({
                location: "DMSafetyAlertsSetting",
            }),
            r = null == (t = (0, n.A)()) || t;
        return e && !r && !i;
    },
});
