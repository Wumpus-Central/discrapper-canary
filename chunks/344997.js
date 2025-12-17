n.d(t, { g: () => E });
var r = n(54381);
n(473749);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(788080),
    c = n(800530),
    u = n(388032),
    d = n(943131);
let f = (e) => a()().diff(a().unix(e), "days");
function p(e) {
    let { classificationId: t } = e,
        i = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e("18831").then(n.bind(n, 41164));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        };
    return (0, r.jsx)(s.Anchor, {
        onClick: i,
        className: d.detailsButton,
        children: u.intl.string(u.t.QsqdXC),
    });
}
function _(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(s.Anchor, {
        className: d.detailsButton,
        href: t,
        children: u.intl.string(u.t["8/GdRB"]),
    });
}
function m(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case c.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(p, { classificationId: n });
        case c.wo.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(_, { learnMoreLink: i });
        default:
            return null;
    }
}
function h(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(s.MqZ, {
                size: "xs",
                color: o.Z.colors.TEXT_LINK.css,
            }),
            danger: (0, r.jsx)(s.aNP, { color: o.Z.colors.STATUS_DANGER }),
        };
    return null != t && t in n
        ? (0, r.jsx)("div", {
              className: d.icon,
              children: n[t],
          })
        : null;
}
function g(e) {
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
function E(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let i = (0, l.fr)(e.embed);
    return null == i
        ? null
        : (0, r.jsxs)(s.P3F, {
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.noticeContent,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.headerRow,
                              children: [
                                  (0, r.jsx)(h, { iconType: i.icon }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-md/semibold",
                                      children: i.header,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: u.intl.format(u.t.eevFb6, {
                                      daysAgo: f(null != (n = i.timestamp) ? n : 0),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: d.noticeBody,
                              children: (0, r.jsx)(s.Text, {
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
                          null == (t = i.ctas)
                              ? void 0
                              : t.map((e) =>
                                    (0, r.jsx)(
                                        m,
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
