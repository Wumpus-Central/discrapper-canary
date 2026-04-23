n.d(t, { X: () => u });
var i = n(171316),
    s = n(419954),
    l = n(975571),
    a = n(253932),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, s.zD)(r.X.DATA_USAGE_QUESTS_SETTING, {
    useTitle: () => d.intl.string(d.t.sJYh5t),
    useSubtitle: () => d.intl.format(d.t.cf9mvV, { helpdeskArticle: l.A.getArticleURL(o.MVz.QUESTS_PRIVACY_CONTROLS) }),
    useValue: function () {
        return !a.H1.useSetting();
    },
    setValue: function (e) {
        a.H1.updateSetting(!e);
    },
    useSearchTerms: () => [d.intl.string(d.t.VkS7Yd)],
    useDisabled: i.uM,
});
