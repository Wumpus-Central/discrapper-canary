n.d(e, {
    A: () => p,
    V: () => x,
});
var l,
    i = n(627968);
n(64700);
var r = n(397927),
    s = n(975807),
    a = n(935649),
    u = n(847599),
    c = n(36149),
    o = n(975571),
    d = n(418208),
    h = n(652215),
    v = n(985018);

function m() {
    return (0, c.yM)()
        ? v.intl.format(v.t.iWGjcg, {
              hook: (t) =>
                  (0, i.jsx)(r.MzZ, {
                      onClick: (t) => {
                          t.preventDefault(),
                              t.stopPropagation(),
                              (0, s.A)(o.A.getArticleURL(h.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: t.join(""),
                  }),
          })
        : v.intl.format(v.t.edpbxy, {
              hook: (t) =>
                  (0, i.jsx)(r.MzZ, {
                      onClick: (t) => {
                          t.preventDefault(),
                              t.stopPropagation(),
                              a.A.showAgeVerificationGetStartedModal({
                                  entryPoint: u.q1.START_STAGE_PROMPT,
                              });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: t.join(""),
                  }),
          });
}

function g(t) {
    let { className: e } = t,
        n = (0, c.yM)();
    return (0, i.jsx)("div", {
        className: e,
        children: (0, i.jsx)(r.wx6, {
            type: n ? "info" : "warning",
            children: (0, i.jsx)(m, {}),
        }),
    });
}

function f(t) {
    let { className: e } = t,
        n = (0, c.yM)();
    return (0, i.jsx)("div", {
        className: e,
        children: (0, i.jsxs)(r.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, i.jsx)(r.mir, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      })
                    : (0, i.jsx)(r.id, {
                          size: "refresh_sm",
                          color: "var(--text-default)",
                      }),
                (0, i.jsx)(r.Text, {
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: (0, i.jsx)(m, {}),
                }),
            ],
        }),
    });
}
var x = (((l = {})[(l.TOP = 0)] = "TOP"), (l[(l.BOTTOM = 1)] = "BOTTOM"), l);

function p(t) {
    let { className: e, noBackground: n, divider: l, channelId: s } = t;
    if (!(0, d.Vv)(null != s ? s : void 0)) return null;
    let a = Array.isArray(l) ? l : null != l ? [l] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.includes(0) &&
                (0, i.jsx)(r.cGx, {
                    gap: 16,
                }),
            (0, i.jsx)("div", {
                className: e,
                children: n ? (0, i.jsx)(f, {}) : (0, i.jsx)(g, {}),
            }),
            (null == a ? void 0 : a.includes(1)) &&
                (0, i.jsx)(r.cGx, {
                    gap: 16,
                }),
        ],
    });
}
