n.d(t, { A: () => T, V: () => A });
var l,
    i = n(627968);
n(64700);
var a = n(397927),
    r = n(975807),
    s = n(935649),
    c = n(847599),
    d = n(36149),
    o = n(975571),
    u = n(418208),
    h = n(652215),
    g = n(985018);
function x() {
    return (0, d.yM)()
        ? g.intl.format(g.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(a.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, r.A)(o.A.getArticleURL(h.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : g.intl.format(g.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(a.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              s.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function _(e) {
    let { className: t } = e,
        n = (0, d.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(a.wx6, { type: n ? "info" : "warning", children: (0, i.jsx)(x, {}) }),
    });
}
function m(e) {
    let { className: t } = e,
        n = (0, d.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)(a.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, i.jsx)(a.mir, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(a.id, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(a.Text, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(x, {}) }),
            ],
        }),
    });
}
var A = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);
function T(e) {
    let { className: t, noBackground: n, divider: l, channelId: r } = e;
    if (!(0, u.Vv)(r ?? void 0)) return null;
    let s = Array.isArray(l) ? l : null != l ? [l] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.includes(0) && (0, i.jsx)(a.cGx, { gap: 16 }),
            (0, i.jsx)("div", { className: t, children: n ? (0, i.jsx)(m, {}) : (0, i.jsx)(_, {}) }),
            s?.includes(1) && (0, i.jsx)(a.cGx, { gap: 16 }),
        ],
    });
}
