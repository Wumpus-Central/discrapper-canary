n.d(t, { L: () => g });
var i = n(311907),
    s = n(290595),
    l = n(171316),
    a = n(419954),
    r = n(153488),
    o = n(975571),
    d = n(780964),
    c = n(137675),
    u = n(652215),
    m = n(985018);
let g = (0, a.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => m.intl.string(m.t.XuADY2),
    useSubtitle: () =>
        m.intl.format(m.t["igTSG/"], { helpdeskArticle: o.A.getArticleURL(u.MVz.DATA_PRIVACY_CONTROLS) }),
    useValue: function () {
        return (0, i.bG)([r.A], () => r.A.hasConsented(u.YAq.USAGE_STATISTICS));
    },
    setValue: function (e) {
        e
            ? (0, s.U)([u.YAq.USAGE_STATISTICS], []).catch(c.i)
            : (0, c.O)({
                  header: m.intl.string(m.t.OdPCbN),
                  body: m.intl.string(m.t.MGWabA),
                  confirmText: m.intl.string(m.t["D3+rU4"]),
                  cancelText: m.intl.string(m.t.kYpG0u),
                  onConfirm: () => (0, s.U)([], [u.YAq.USAGE_STATISTICS]).catch(c.i),
              });
    },
    useSearchTerms: () => [m.intl.string(m.t.XuADY2)],
    useDisabled: l.uM,
});
