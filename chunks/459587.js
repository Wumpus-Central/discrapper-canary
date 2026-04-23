n.d(t, { L: () => m });
var i = n(311907),
    s = n(290595),
    l = n(171316),
    a = n(419954),
    r = n(153488),
    o = n(975571),
    d = n(780964),
    u = n(137675),
    c = n(652215),
    g = n(985018);
let m = (0, a.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => g.intl.string(g.t.XuADY2),
    useSubtitle: () =>
        g.intl.format(g.t["igTSG/"], { helpdeskArticle: o.A.getArticleURL(c.MVz.DATA_PRIVACY_CONTROLS) }),
    useValue: function () {
        return (0, i.bG)([r.A], () => r.A.hasConsented(c.YAq.USAGE_STATISTICS));
    },
    setValue: function (e) {
        e
            ? (0, s.U)([c.YAq.USAGE_STATISTICS], []).catch(u.i)
            : (0, u.O)({
                  header: g.intl.string(g.t.OdPCbN),
                  body: g.intl.string(g.t.MGWabA),
                  confirmText: g.intl.string(g.t["D3+rU4"]),
                  cancelText: g.intl.string(g.t.kYpG0u),
                  onConfirm: () => (0, s.U)([], [c.YAq.USAGE_STATISTICS]).catch(u.i),
              });
    },
    useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
    useDisabled: l.uM,
});
