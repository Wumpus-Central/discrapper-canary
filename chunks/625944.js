n.d(e, { W: () => S });
var i = n(915009),
    l = n(509613),
    s = n(63063),
    u = n(695346),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let S = (0, l.qs)(r.n.DATA_USAGE_QUESTS_3P_SETTING, {
    useTitle: () => o.intl.string(o.t.CyLYKZ),
    useSubtitle: () =>
        o.intl.format(o.t["2QFDU/"], { helpdeskArticle: s.Z.getArticleURL(a.BhN.QUESTS_PRIVACY_CONTROLS) }),
    useValue: function () {
        return !u.JT.useSetting();
    },
    setValue: function (t) {
        u.JT.updateSetting(!t);
    },
    useDisabled: function () {
        let t = u.bh.useSetting(),
            e = (0, i.LN)();
        return t || e;
    },
    useDisabledMessage: function () {
        if (u.bh.useSetting()) {
            let t = o.intl.string(o.t.sJYh5t);
            return o.intl.format(o.t.W2Vg7a, { settingTitle: t });
        }
    },
    useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)],
});
