n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(290595),
    a = n(171316),
    o = n(153488),
    c = n(975571),
    d = n(871930),
    u = n(578746),
    _ = n(997913),
    p = n(531525),
    m = n(652215),
    g = n(985018),
    A = n(842130);

function f() {
    let e = (0, l.cf)([o.A], () => o.A.hasConsented(m.YAq.PERSONALIZATION)),
        [t, n] = i.useState(e),
        f = (0, a.uM)();
    return (0, r.jsx)(d.h, {
        setting: p.H.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(u.Ay, {
            title: g.intl.string(g.t.MNKzyg),
            note: g.intl.format(g.t["eQL/Mr"], {
                helpdeskArticle: c.A.getArticleURL(m.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: t,
            onChange: (e) => {
                e
                    ? (0, s.U)([m.YAq.PERSONALIZATION], [])
                          .catch(_.i)
                          .then(() => n(!0))
                    : (0, _.O)({
                          header: g.intl.string(g.t["9SNpzv"]),
                          confirmText: g.intl.string(g.t["9g5UGw"]),
                          cancelText: g.intl.string(g.t["+ZLPw9"]),
                          onConfirm: () => {
                              (0, s.U)([], [m.YAq.PERSONALIZATION])
                                  .catch(_.i)
                                  .then(() => n(!1));
                          },
                          body: g.intl.string(g.t.gJvDDh),
                      });
            },
            disabled: f,
            tooltipText: f ? g.intl.string(A.default["6Af/cw"]) : void 0,
        }),
    });
}
