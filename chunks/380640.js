n.d(e, { M: () => T });
var i = n(915009),
    l = n(509613),
    s = n(63063),
    u = n(695346),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, l.qs)(r.n.DATA_USAGE_QUESTS_SETTING, {
    useTitle: () => o.intl.string(o.t.sJYh5t),
    useSubtitle: () => o.intl.format(o.t.cf9mvV, { helpdeskArticle: s.Z.getArticleURL(a.BhN.QUESTS_PRIVACY_CONTROLS) }),
    useValue: function () {
        return !u.bh.useSetting();
    },
    setValue: function (t) {
        u.bh.updateSetting(!t);
    },
    useSearchTerms: () => [o.intl.string(o.t.VkS7Yd)],
    useDisabled: i.LN,
});
