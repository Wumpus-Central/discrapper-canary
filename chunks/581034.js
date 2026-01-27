n.d(t, {
    l: () => _,
});
var r = n(627968);
n(64700);
var i = n(989349),
    l = n.n(i),
    a = n(827734),
    s = n(397927),
    o = n(393033),
    c = n(239093),
    u = n(985018),
    d = n(617184);

function p(e) {
    let { classificationId: t } = e;
    return (0, r.jsx)(s.MzZ, {
        onClick: () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("22726"), n.e("83518"), n.e("9407"), n.e("1708")]).then(
                    n.bind(n, 956450),
                );
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: d.zh,
        children: u.intl.string(u.t.QsqdXC),
    });
}

function m(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(s.MzZ, {
        className: d.zh,
        href: t,
        children: u.intl.string(u.t["8/GdRB"]),
    });
}

function f(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case c.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(p, {
                classificationId: n,
            });
        case c.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(m, {
                learnMoreLink: i,
            });
        default:
            return null;
    }
}

function g(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(s.koX, {
                size: "xs",
                color: a.A.colors.TEXT_LINK.css,
            }),
            danger: (0, r.jsx)(s.id, {
                color: a.A.colors.ICON_FEEDBACK_CRITICAL,
            }),
        };
    return null != t && t in n
        ? (0, r.jsx)("div", {
              className: d.Kk,
              children: n[t],
          })
        : null;
}

function h(e) {
    let { children: t, theme: n } = e,
        i = {
            default: d._y,
            danger: d.yk,
        };
    return (0, r.jsx)("div", {
        className: i[null != n ? n : "default"],
        children: t,
    });
}

function _(e) {
    var t, n;
    let i;
    if (null == e.embed || null == e.embed.fields) return null;
    let a = (0, o.f4)(e.embed);
    return null == a
        ? null
        : (0, r.jsxs)(s.DUT, {
              className: d.o3,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.qZ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.U1,
                              children: [
                                  (0, r.jsx)(g, {
                                      iconType: a.icon,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-md/semibold",
                                      children: a.header,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: d.VU,
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: u.intl.format(u.t.eevFb6, {
                                      daysAgo:
                                          ((i = null != (t = a.timestamp) ? t : 0), l()().diff(l().unix(i), "days")),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: d.vv,
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: a.body,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(h, {
                      theme: a.theme,
                      children:
                          null == (n = a.ctas)
                              ? void 0
                              : n.map((e) =>
                                    (0, r.jsx)(
                                        f,
                                        {
                                            ctaType: e,
                                            classificationId: a.classification_id,
                                            learnMoreLink: a.learn_more_link,
                                        },
                                        e,
                                    ),
                                ),
                  }),
              ],
          });
}
