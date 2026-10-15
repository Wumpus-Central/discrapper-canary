r.d(n, { A: () => k, V: () => _ });
var t,
    i = r(477900);
r(582128);
var s = r(28863),
    a = r(683071),
    l = r(331322),
    o = r(885574),
    c = r(738188),
    d = r(834730),
    u = r(404778),
    h = r(975807),
    x = r(379257),
    f = r(306537),
    j = r(36149),
    p = r(975571),
    A = r(418208),
    g = r(652215),
    m = r(105292);
function v(e) {
    return e
        ? m.intl.format(m.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(s.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              (0, h.A)(p.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE)));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : m.intl.format(m.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(s.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              x.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.START_STAGE_PROMPT }));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function T(e) {
    let { className: n } = e,
        r = (0, j.yM)(),
        t = v(r);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(a.w, { type: r ? "info" : "warning", message: t, role: "none" }),
    });
}
function y(e) {
    let { className: n } = e,
        r = (0, j.yM)(),
        t = v(r);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsxs)(l.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                r
                    ? (0, i.jsx)(o.CircleInformationIcon, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(c.WarningIcon, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(d.E, { color: "text-default", variant: "text-sm/medium", children: t }),
            ],
        }),
    });
}
var _ = (((t = {})[(t.TOP = 0)] = "TOP"), (t[(t.BOTTOM = 1)] = "BOTTOM"), t);
function k(e) {
    let { className: n, noBackground: r, divider: t, channelId: s } = e;
    if (!(0, A.Vv)(s ?? void 0)) return null;
    let a = Array.isArray(t) ? t : null != t ? [t] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.includes(0) && (0, i.jsx)(u.c, { gap: 16 }),
            (0, i.jsx)("div", { className: n, children: r ? (0, i.jsx)(y, {}) : (0, i.jsx)(T, {}) }),
            a?.includes(1) && (0, i.jsx)(u.c, { gap: 16 }),
        ],
    });
}
