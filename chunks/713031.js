n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(290595),
    o = n(171316),
    l = n(153488),
    c = n(975571),
    u = n(871930),
    d = n(578746),
    f = n(997913),
    p = n(531525),
    _ = n(652215),
    h = n(985018),
    m = n(842130);

function g() {
    let e = (0, a.cf)([l.A], () => l.A.hasConsented(_.YAq.PERSONALIZATION)),
        [t, n] = i.useState(e),
        g = (0, o.uM)(),
        E = (e) => {
            e
                ? (0, s.U)([_.YAq.PERSONALIZATION], [])
                      .catch(f.i)
                      .then(() => n(!0))
                : (0, f.O)({
                      header: h.intl.string(h.t["9SNpzv"]),
                      confirmText: h.intl.string(h.t["9g5UGw"]),
                      cancelText: h.intl.string(h.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, s.U)([], [_.YAq.PERSONALIZATION])
                              .catch(f.i)
                              .then(() => n(!1));
                      },
                      body: h.intl.string(h.t.gJvDDh),
                  });
        };
    return (0, r.jsx)(u.h, {
        setting: p.H.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, r.jsx)(d.Ay, {
            title: h.intl.string(h.t.MNKzyg),
            note: h.intl.format(h.t["eQL/Mr"], {
                helpdeskArticle: c.A.getArticleURL(_.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: t,
            onChange: E,
            disabled: g,
            tooltipText: g ? h.intl.string(m.default["6Af/cw"]) : void 0,
        }),
    });
}
