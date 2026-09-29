n.d(t, { _: () => O });
var r = n(17928),
    i = n(290595),
    u = n(171316),
    o = n(419954),
    l = n(153488),
    a = n(975571),
    s = n(780964),
    c = n(972737),
    T = n(652215),
    d = n(375708);
let O = (0, o.zD)(s.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => d.intl.string(d.t.MNKzyg),
    useSubtitle: () =>
        d.intl.format(d.t["2SiYln"], { helpdeskArticle: a.A.getArticleURL(T.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, r.bG)([l.A], () => l.A.hasConsented(T.YAq.PERSONALIZATION));
    },
    setValue: function (e) {
        e
            ? (0, i.U)([T.YAq.PERSONALIZATION], []).catch(c.i)
            : (0, c.O)({
                  header: d.intl.string(d.t["9SNpzv"]),
                  confirmText: d.intl.string(d.t["9g5UGw"]),
                  cancelText: d.intl.string(d.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, i.U)([], [T.YAq.PERSONALIZATION]).catch(c.i);
                  },
                  body: d.intl.string(d.t.gJvDDh),
              });
    },
    useDisabled: u.uM,
});
