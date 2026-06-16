r.d(t, { A: () => _, V: () => M });
var n,
    i = r(627968);
r(64700);
var s = r(349288),
    l = r(683071),
    a = r(331322),
    o = r(885574),
    c = r(738188),
    d = r(834730),
    u = r(404778),
    h = r(975807),
    x = r(139716),
    j = r(847599),
    f = r(36149),
    p = r(975571),
    A = r(418208),
    v = r(652215),
    T = r(375708);
function m() {
    return (0, f.yM)()
        ? T.intl.format(T.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(s.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, h.A)(p.A.getArticleURL(v.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : T.intl.format(T.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(s.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              x.A.showAgeVerificationGetStartedModal({ entryPoint: j.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function g(e) {
    let { className: t } = e,
        r = (0, f.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(l.w, { type: r ? "info" : "warning", children: (0, i.jsx)(m, {}) }),
    });
}
function y(e) {
    let { className: t } = e,
        r = (0, f.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)(a.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                r
                    ? (0, i.jsx)(o.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(c.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(d.E, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(m, {}) }),
            ],
        }),
    });
}
var M = (((n = {})[(n.TOP = 0)] = "TOP"), (n[(n.BOTTOM = 1)] = "BOTTOM"), n);
function _(e) {
    let { className: t, noBackground: r, divider: n, channelId: s } = e;
    if (!(0, A.Vv)(s ?? void 0)) return null;
    let l = Array.isArray(n) ? n : null != n ? [n] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l.includes(0) && (0, i.jsx)(u.c, { gap: 16 }),
            (0, i.jsx)("div", { className: t, children: r ? (0, i.jsx)(y, {}) : (0, i.jsx)(g, {}) }),
            l?.includes(1) && (0, i.jsx)(u.c, { gap: 16 }),
        ],
    });
}
