l.d(t, { A: () => w, V: () => y });
var n,
    a = l(627968);
l(64700);
var r = l(349288),
    i = l(683071),
    s = l(331322),
    o = l(885574),
    c = l(738188),
    d = l(834730),
    u = l(404778),
    h = l(975807),
    g = l(935649),
    x = l(847599),
    m = l(36149),
    f = l(975571),
    p = l(418208),
    v = l(652215),
    _ = l(985018);
function j() {
    return (0, m.yM)()
        ? _.intl.format(_.t.iWGjcg, {
              hook: (e) =>
                  (0, a.jsx)(r.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, h.A)(f.A.getArticleURL(v.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : _.intl.format(_.t.edpbxy, {
              hook: (e) =>
                  (0, a.jsx)(r.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              g.A.showAgeVerificationGetStartedModal({ entryPoint: x.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function A(e) {
    let { className: t } = e,
        l = (0, m.yM)();
    return (0, a.jsx)("div", {
        className: t,
        children: (0, a.jsx)(i.w, { type: l ? "info" : "warning", children: (0, a.jsx)(j, {}) }),
    });
}
function b(e) {
    let { className: t } = e,
        l = (0, m.yM)();
    return (0, a.jsx)("div", {
        className: t,
        children: (0, a.jsxs)(s.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                l
                    ? (0, a.jsx)(o.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, a.jsx)(c.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, a.jsx)(d.E, { color: "text-default", variant: "text-sm/medium", children: (0, a.jsx)(j, {}) }),
            ],
        }),
    });
}
var y = (((n = {})[(n.TOP = 0)] = "TOP"), (n[(n.BOTTOM = 1)] = "BOTTOM"), n);
function w(e) {
    let { className: t, noBackground: l, divider: n, channelId: r } = e;
    if (!(0, p.Vv)(r ?? void 0)) return null;
    let i = Array.isArray(n) ? n : null != n ? [n] : [];
    return (0, a.jsxs)(a.Fragment, {
        children: [
            i.includes(0) && (0, a.jsx)(u.c, { gap: 16 }),
            (0, a.jsx)("div", { className: t, children: l ? (0, a.jsx)(b, {}) : (0, a.jsx)(A, {}) }),
            i?.includes(1) && (0, a.jsx)(u.c, { gap: 16 }),
        ],
    });
}
