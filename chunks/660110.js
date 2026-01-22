n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(975807),
    c = n(935649),
    r = n(847599),
    s = n(36149),
    d = n(975571),
    u = n(418208),
    o = n(652215),
    f = n(985018);
function b() {
    return (0, s.yM)()
        ? f.intl.format(f.t.iWGjcg, {
              hook: (e) =>
                  (0, l.jsx)(a.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, i.A)(d.A.getArticleURL(o.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : f.intl.format(f.t.edpbxy, {
              hook: (e) =>
                  (0, l.jsx)(a.MzZ, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              c.A.showAgeVerificationGetStartedModal({ entryPoint: r.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function h(e) {
    let { className: t } = e,
        n = (0, s.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(a.wx6, {
            type: n ? "info" : "warning",
            children: (0, l.jsx)(b, {}),
        }),
    });
}
function _(e) {
    let { className: t } = e,
        n = (0, s.yM)();
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)(a.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, l.jsx)(a.mir, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      })
                    : (0, l.jsx)(a.id, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      }),
                (0, l.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: (0, l.jsx)(b, {}),
                }),
            ],
        }),
    });
}
function m(e) {
    let { className: t, noBackground: n, divider: i } = e;
    return (0, u.Vv)()
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: t,
                      children: n ? (0, l.jsx)(_, {}) : (0, l.jsx)(h, {}),
                  }),
                  i && (0, l.jsx)(a.cGx, { gap: 16 }),
              ],
          })
        : null;
}
