n.d(t, { _: () => g });
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
let g = (0, a.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => m.intl.string(m.t.MNKzyg),
    useSubtitle: () =>
        m.intl.format(m.t["eQL/Mr"], { helpdeskArticle: o.A.getArticleURL(u.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, i.bG)([r.A], () => r.A.hasConsented(u.YAq.PERSONALIZATION));
    },
    setValue: function (e) {
        e
            ? (0, s.U)([u.YAq.PERSONALIZATION], []).catch(c.i)
            : (0, c.O)({
                  header: m.intl.string(m.t["9SNpzv"]),
                  confirmText: m.intl.string(m.t["9g5UGw"]),
                  cancelText: m.intl.string(m.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, s.U)([], [u.YAq.PERSONALIZATION]).catch(c.i);
                  },
                  body: m.intl.string(m.t.gJvDDh),
              });
    },
    useDisabled: l.uM,
});
