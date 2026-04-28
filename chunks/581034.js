n.d(t, { l: () => I });
var i = n(627968);
n(64700);
var l = n(989349),
    s = n.n(l),
    a = n(661531),
    r = n(192308),
    o = n(349288),
    d = n(778492),
    c = n(738188),
    u = n(939249),
    m = n(834730),
    h = n(393033),
    g = n(239093),
    A = n(985018),
    p = n(903009);
function x(e) {
    let { classificationId: t } = e;
    return (0, i.jsx)(o.Anchor, {
        onClick: () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("57352"),
                    n.e("13554"),
                    n.e("61137"),
                    n.e("92030"),
                    n.e("51194"),
                    n.e("29211"),
                ]).then(n.bind(n, 385430));
                return (n) =>
                    (0, i.jsx)(e, {
                        classificationId: t,
                        source: g.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: p.zh,
        children: A.intl.string(A.t.QsqdXC),
    });
}
function f(e) {
    let { learnMoreLink: t } = e;
    return (0, i.jsx)(o.Anchor, { className: p.zh, href: t, children: A.intl.string(A.t["8/GdRB"]) });
}
function C(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: l } = e;
    switch (t) {
        case g.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, i.jsx)(x, { classificationId: n });
        case g.xw.LEARN_MORE_LINK:
            if (null == l) return null;
            return (0, i.jsx)(f, { learnMoreLink: l });
        default:
            return null;
    }
}
function E(e) {
    let { iconType: t } = e,
        n = {
            default: (0, i.jsx)(d.k, { size: "xs", color: a.A.colors.TEXT_LINK.css }),
            danger: (0, i.jsx)(c.i, { color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, i.jsx)("div", { className: p.Kk, children: n[t] }) : null;
}
function v(e) {
    let { children: t, theme: n } = e,
        l = { default: p._y, danger: p.yk };
    return (0, i.jsx)("div", { className: l[n ?? "default"], children: t });
}
function I(e) {
    let t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, h.f4)(e.embed);
    return null == n
        ? null
        : (0, i.jsxs)(u.D, {
              className: p.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: p.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: p.U1,
                              children: [
                                  (0, i.jsx)(E, { iconType: n.icon }),
                                  (0, i.jsx)(m.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: p.VU,
                              children: (0, i.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  children: A.intl.format(A.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), s()().diff(s().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: p.vv,
                              children: (0, i.jsx)(m.E, {
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
                              C,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
