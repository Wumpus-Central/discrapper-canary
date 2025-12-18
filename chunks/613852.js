n.d(e, { Q: () => E });
var i = n(442837),
    l = n(924628),
    s = n(915009),
    u = n(509613),
    r = n(480294),
    a = n(63063),
    o = n(313789),
    S = n(922628),
    T = n(981631),
    c = n(388032);
let E = (0, u.qs)(o.n.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => c.intl.string(c.t.XuADY2),
    useSubtitle: () =>
        c.intl.format(c.t["igTSG/"], { helpdeskArticle: a.Z.getArticleURL(T.BhN.DATA_PRIVACY_CONTROLS) }),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.hasConsented(T.pjP.USAGE_STATISTICS));
    },
    setValue: function (t) {
        t
            ? (0, l.g)([T.pjP.USAGE_STATISTICS], []).catch(S.S)
            : (0, S.V)({
                  header: c.intl.string(c.t.OdPCbN),
                  body: c.intl.string(c.t.MGWabA),
                  confirmText: c.intl.string(c.t["D3+rU4"]),
                  cancelText: c.intl.string(c.t.kYpG0u),
                  onConfirm: () => (0, l.g)([], [T.pjP.USAGE_STATISTICS]).catch(S.S),
              });
    },
    useSearchTerms: () => [c.intl.string(c.t.XuADY2)],
    useDisabled: s.LN,
});
