i.d(e, {
    L: () => E,
});
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    u = i(153488),
    a = i(975571),
    o = i(780964),
    T = i(997913),
    A = i(652215),
    S = i(985018);
let E = (0, r.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => S.intl.string(S.t.XuADY2),
    useSubtitle: () =>
        S.intl.format(S.t["igTSG/"], {
            helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS),
        }),
    useValue: function () {
        return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.USAGE_STATISTICS));
    },
    setValue: function (t) {
        t
            ? (0, l.U)([A.YAq.USAGE_STATISTICS], []).catch(T.i)
            : (0, T.O)({
                  header: S.intl.string(S.t.OdPCbN),
                  body: S.intl.string(S.t.MGWabA),
                  confirmText: S.intl.string(S.t["D3+rU4"]),
                  cancelText: S.intl.string(S.t.kYpG0u),
                  onConfirm: () => (0, l.U)([], [A.YAq.USAGE_STATISTICS]).catch(T.i),
              });
    },
    useSearchTerms: () => [S.intl.string(S.t.XuADY2)],
    useDisabled: s.uM,
});
