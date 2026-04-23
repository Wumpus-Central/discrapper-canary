n.d(t, { _: () => m });
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
let m = (0, a.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => g.intl.string(g.t.MNKzyg),
    useSubtitle: () =>
        g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: o.A.getArticleURL(c.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, i.bG)([r.A], () => r.A.hasConsented(c.YAq.PERSONALIZATION));
    },
    setValue: function (e) {
        e
            ? (0, s.U)([c.YAq.PERSONALIZATION], []).catch(u.i)
            : (0, u.O)({
                  header: g.intl.string(g.t["9SNpzv"]),
                  confirmText: g.intl.string(g.t["9g5UGw"]),
                  cancelText: g.intl.string(g.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, s.U)([], [c.YAq.PERSONALIZATION]).catch(u.i);
                  },
                  body: g.intl.string(g.t.gJvDDh),
              });
    },
    useDisabled: l.uM,
});
