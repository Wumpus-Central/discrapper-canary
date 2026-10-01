u.d(n, { _: () => a });
var e = u(17928),
    r = u(290595),
    i = u(171316),
    o = u(419954),
    c = u(153488),
    A = u(975571),
    f = u(780964),
    l = u(972737),
    T = u(652215),
    s = u(375708);
let a = (0, o.zD)(f.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => s.intl.string(s.t.MNKzyg),
    useSubtitle: () =>
        s.intl.format(s.t["2SiYln"], { helpdeskArticle: A.A.getArticleURL(T.MVz.DATA_USED_FOR_RECOMMENDED) }),
    useValue: function () {
        return (0, e.bG)([c.A], () => c.A.hasConsented(T.YAq.PERSONALIZATION));
    },
    setValue: function (t) {
        t
            ? (0, r.U)([T.YAq.PERSONALIZATION], []).catch(l.i)
            : (0, l.O)({
                  header: s.intl.string(s.t["9SNpzv"]),
                  confirmText: s.intl.string(s.t["9g5UGw"]),
                  cancelText: s.intl.string(s.t["+ZLPw9"]),
                  onConfirm: () => {
                      (0, r.U)([], [T.YAq.PERSONALIZATION]).catch(l.i);
                  },
                  body: s.intl.string(s.t.gJvDDh),
              });
    },
    useDisabled: i.uM,
});
