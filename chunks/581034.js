n.d(t, { l: () => A });
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(827734),
    s = n(397927),
    o = n(393033),
    d = n(239093),
    c = n(985018),
    u = n(617184);
function _(e) {
    let { classificationId: t } = e;
    return (0, i.jsx)(s.MzZ, {
        onClick: () => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("83518"), n.e("9407"), n.e("1708")]).then(
                    n.bind(n, 956450),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        classificationId: t,
                        source: d.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: u.zh,
        children: c.intl.string(c.t.QsqdXC),
    });
}
function m(e) {
    let { learnMoreLink: t } = e;
    return (0, i.jsx)(s.MzZ, { className: u.zh, href: t, children: c.intl.string(c.t["8/GdRB"]) });
}
function h(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: r } = e;
    switch (t) {
        case d.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, i.jsx)(_, { classificationId: n });
        case d.xw.LEARN_MORE_LINK:
            if (null == r) return null;
            return (0, i.jsx)(m, { learnMoreLink: r });
        default:
            return null;
    }
}
function p(e) {
    let { iconType: t } = e,
        n = {
            default: (0, i.jsx)(s.koX, { size: "xs", color: a.A.colors.TEXT_LINK.css }),
            danger: (0, i.jsx)(s.id, { color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, i.jsx)("div", { className: u.Kk, children: n[t] }) : null;
}
function g(e) {
    let { children: t, theme: n } = e,
        r = { default: u._y, danger: u.yk };
    return (0, i.jsx)("div", { className: r[n ?? "default"], children: t });
}
function A(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, o.f4)(e.embed);
    return null == n
        ? null
        : (0, i.jsxs)(s.DUT, {
              className: u.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: u.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: u.U1,
                              children: [
                                  (0, i.jsx)(p, { iconType: n.icon }),
                                  (0, i.jsx)(s.Text, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: u.VU,
                              children: (0, i.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: c.intl.format(c.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), l()().diff(l().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: u.vv,
                              children: (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(g, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, i.jsx)(
                              h,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
