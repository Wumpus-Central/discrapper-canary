n.d(t, { g: () => h });
var r = n(951288);
n(647438);
var i = n(913527),
    l = n.n(i),
    o = n(692547),
    a = n(481060),
    s = n(788080),
    c = n(800530),
    u = n(388032),
    d = n(304451);
function p(e) {
    let { classificationId: t } = e;
    return (0, r.jsx)(a.eee, {
        onClick: () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("33587")]).then(
                    n.bind(n, 41164),
                );
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: d.detailsButton,
        children: u.intl.string(u.t.QsqdXF),
    });
}
function m(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(a.eee, {
        className: d.detailsButton,
        href: t,
        children: u.intl.string(u.t["8/GdRE"]),
    });
}
function f(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case c.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(p, { classificationId: n });
        case c.wo.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(m, { learnMoreLink: i });
        default:
            return null;
    }
}
function g(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(a.MqZ, {
                size: "xs",
                color: o.Z.colors.TEXT_LINK.css,
            }),
            danger: (0, r.jsx)(a.aNP, { color: o.Z.colors.STATUS_DANGER }),
        };
    return null != t && t in n
        ? (0, r.jsx)("div", {
              className: d.icon,
              children: n[t],
          })
        : null;
}
function _(e) {
    let { children: t, theme: n } = e,
        i = {
            default: d.defaultFooterContainer,
            danger: d.dangerFooterContainer,
        };
    return (0, r.jsx)("div", {
        className: i[null != n ? n : "default"],
        children: t,
    });
}
function h(e) {
    var t, n;
    let i;
    if (null == e.embed || null == e.embed.fields) return null;
    let o = (0, s.fr)(e.embed);
    return null == o
        ? null
        : (0, r.jsxs)(a.P3F, {
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.noticeContent,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.headerRow,
                              children: [
                                  (0, r.jsx)(g, { iconType: o.icon }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/semibold",
                                      children: o.header,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(a.Text, {
                                  variant: "text-xs/medium",
                                  children: u.intl.format(u.t.eevFb2, {
                                      daysAgo:
                                          ((i = null != (n = o.timestamp) ? n : 0), l()().diff(l().unix(i), "days")),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: d.noticeBody,
                              children: (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: o.body,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(_, {
                      theme: o.theme,
                      children:
                          null == (t = o.ctas)
                              ? void 0
                              : t.map((e) =>
                                    (0, r.jsx)(
                                        f,
                                        {
                                            ctaType: e,
                                            classificationId: o.classification_id,
                                            learnMoreLink: o.learn_more_link,
                                        },
                                        e,
                                    ),
                                ),
                  }),
              ],
          });
}
