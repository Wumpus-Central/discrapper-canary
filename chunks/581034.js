n.d(t, { l: () => I });
var i = n(627968);
n(64700);
var l = n(989349),
    a = n.n(l),
    r = n(661531),
    s = n(192308),
    o = n(349288),
    c = n(778492),
    d = n(738188),
    u = n(939249),
    _ = n(834730),
    m = n(393033),
    h = n(239093),
    p = n(985018),
    g = n(903009);
function f(e) {
    let { classificationId: t } = e;
    return (0, i.jsx)(o.Anchor, {
        onClick: () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("83518"), n.e("29211"), n.e("93992")]).then(
                    n.bind(n, 385430),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        classificationId: t,
                        source: h.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: g.zh,
        children: p.intl.string(p.t.QsqdXC),
    });
}
function x(e) {
    let { learnMoreLink: t } = e;
    return (0, i.jsx)(o.Anchor, { className: g.zh, href: t, children: p.intl.string(p.t["8/GdRB"]) });
}
function A(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: l } = e;
    switch (t) {
        case h.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, i.jsx)(f, { classificationId: n });
        case h.xw.LEARN_MORE_LINK:
            if (null == l) return null;
            return (0, i.jsx)(x, { learnMoreLink: l });
        default:
            return null;
    }
}
function C(e) {
    let { iconType: t } = e,
        n = {
            default: (0, i.jsx)(c.k, { size: "xs", color: r.A.colors.TEXT_LINK.css }),
            danger: (0, i.jsx)(d.i, { color: r.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, i.jsx)("div", { className: g.Kk, children: n[t] }) : null;
}
function v(e) {
    let { children: t, theme: n } = e,
        l = { default: g._y, danger: g.yk };
    return (0, i.jsx)("div", { className: l[n ?? "default"], children: t });
}
function I(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, m.f4)(e.embed);
    return null == n
        ? null
        : (0, i.jsxs)(u.D, {
              className: g.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: g.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: g.U1,
                              children: [
                                  (0, i.jsx)(C, { iconType: n.icon }),
                                  (0, i.jsx)(_.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: g.VU,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-xs/medium",
                                  children: p.intl.format(p.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), a()().diff(a().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: g.vv,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(v, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, i.jsx)(
                              A,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
