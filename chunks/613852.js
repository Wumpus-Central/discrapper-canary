n.d(e, { Q: () => E });
var i = n(442837),
    l = n(924628),
    s = n(915009),
    u = n(509613),
    r = n(480294),
    a = n(63063),
    o = n(313789),
    T = n(922628),
    S = n(981631),
    c = n(388032);
let E = (0, u.qs)(o.n.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => c.intl.string(c.t.XuADY2),
    useSubtitle: () =>
        c.intl.format(c.t["igTSG/"], { helpdeskArticle: a.Z.getArticleURL(S.BhN.DATA_PRIVACY_CONTROLS) }),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.hasConsented(S.pjP.USAGE_STATISTICS));
    },
    setValue: function (t) {
        t
            ? (0, l.g)([S.pjP.USAGE_STATISTICS], []).catch(T.S)
            : (0, T.V)({
                  header: c.intl.string(c.t.OdPCbN),
                  body: c.intl.string(c.t.MGWabA),
                  confirmText: c.intl.string(c.t["D3+rU4"]),
                  cancelText: c.intl.string(c.t.kYpG0u),
                  onConfirm: () => (0, l.g)([], [S.pjP.USAGE_STATISTICS]).catch(T.S),
              });
    },
    useSearchTerms: () => [c.intl.string(c.t.XuADY2)],
    useDisabled: s.LN,
});
