n.d(t, {
    l: () => E,
});
var r = n(627968);
n(64700);
var i = n(989349),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(393033),
    c = n(239093),
    u = n(985018),
    d = n(617184);
let f = (e) => a()().diff(a().unix(e), "days");

function p(e) {
    let { classificationId: t } = e,
        i = () => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("9407").then(n.bind(n, 956450));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        };
    return (0, r.jsx)(o.MzZ, {
        onClick: i,
        className: d.zh,
        children: u.intl.string(u.t.QsqdXC),
    });
}

function _(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(o.MzZ, {
        className: d.zh,
        href: t,
        children: u.intl.string(u.t["8/GdRB"]),
    });
}

function h(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case c.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(p, {
                classificationId: n,
            });
        case c.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(_, {
                learnMoreLink: i,
            });
        default:
            return null;
    }
}

function m(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(o.koX, {
                size: "xs",
                color: s.A.colors.TEXT_LINK.css,
            }),
            danger: (0, r.jsx)(o.id, {
                color: s.A.colors.ICON_FEEDBACK_CRITICAL,
            }),
        };
    return null != t && t in n
        ? (0, r.jsx)("div", {
              className: d.Kk,
              children: n[t],
          })
        : null;
}

function g(e) {
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

function E(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let i = (0, l.f4)(e.embed);
    return null == i
        ? null
        : (0, r.jsxs)(o.DUT, {
              className: d.o3,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.qZ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.U1,
                              children: [
                                  (0, r.jsx)(m, {
                                      iconType: i.icon,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      children: i.header,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: d.VU,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  children: u.intl.format(u.t.eevFb6, {
                                      daysAgo: f(null != (t = i.timestamp) ? t : 0),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: d.vv,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: i.body,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(g, {
                      theme: i.theme,
                      children:
                          null == (n = i.ctas)
                              ? void 0
                              : n.map((e) =>
                                    (0, r.jsx)(
                                        h,
                                        {
                                            ctaType: e,
                                            classificationId: i.classification_id,
                                            learnMoreLink: i.learn_more_link,
                                        },
                                        e,
                                    ),
                                ),
                  }),
              ],
          });
}
