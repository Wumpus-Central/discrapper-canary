i.d(t, { $L: () => T, NI: () => k, kd: () => w, TG: () => A, P5: () => b, Ft: () => G, Yq: () => S });
var s = i(477900),
    r = i(582128),
    a = i(503698),
    o = i.n(a),
    l = i(628284),
    n = i(661531),
    d = i(834730),
    c = i(695366);
if (221552 == i.j) var x = i(104510);
if (221552 == i.j) var m = i(297264);
if (221552 == i.j) var u = i(890856);
if (221552 == i.j) var v = i(812993);
var j = i(37537),
    h = i(773669),
    f = i(939981),
    g = i(641641),
    N = i(375708),
    p = i(517826);
function A(e) {
    let { text: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterActive");
    return (0, s.jsxs)("div", {
        className: p.mG,
        children: [
            (0, s.jsx)(l.y, { size: "xs", color: n.A.colors.STATUS_POSITIVE }),
            (0, s.jsx)(d.E, {
                color: "text-feedback-positive",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: t,
            }),
        ],
    });
}
function b(e) {
    let { dateString: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterExpiring");
    return (0, s.jsxs)("div", {
        className: p.mG,
        children: [
            (0, s.jsx)(c.E, { size: "xs", color: n.A.colors.STATUS_WARNING }),
            (0, s.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: N.intl.formatToMarkdownString(g.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(h.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function S(e) {
    let { removingAt: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterRemoving");
    return (0, s.jsxs)("div", {
        className: p.wL,
        children: [
            (0, s.jsx)(c.E, { size: "xs", color: n.A.colors.STATUS_WARNING }),
            (0, s.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: N.intl.formatToPlainString(g.default["6e2ry1"], { dateString: (0, f.A)(t) }),
            }),
        ],
    });
}
function T(e) {
    let { cost: t, costDecorator: i, status: r, className: a } = e,
        l = void 0 !== t ? p._A : p.$3;
    return (0, s.jsxs)("div", {
        className: o()(l, a),
        children: [
            void 0 !== t &&
                (0, s.jsxs)("div", {
                    className: o()(p.mG, p.pT),
                    children: [
                        (0, s.jsx)(x._, { size: "sm", color: n.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, s.jsx)(d.E, {
                            className: p.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: N.intl.formatToPlainString(N.t.t2Wbo1, { required: t, decorator: i ?? "" }),
                        }),
                    ],
                }),
            r?.type === "expiring" && (0, s.jsx)(b, { dateString: r.expiringAt }),
            r?.type === "removing" && (0, s.jsx)(S, { removingAt: r.removingAt }),
            r?.type === "active" && (0, s.jsx)(A, { text: r.statusText }),
        ],
    });
}
function w(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: p.UD, children: t });
}
function G(e) {
    let { title: t, textColor: i, children: r, footer: a } = e;
    return (0, s.jsxs)("div", {
        className: p.hQ,
        children: [
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)("div", {
                        className: p.N1,
                        children: (0, s.jsx)(m.D, { color: i, variant: "heading-md/bold", children: t }),
                    }),
                    r,
                ],
            }),
            a,
        ],
    });
}
let k =
    221552 == i.j
        ? r.forwardRef(function (e, t) {
              let {
                  className: i,
                  label: r,
                  isActive: a,
                  isWarning: l,
                  badge: d,
                  canRollback: c,
                  onClick: x,
                  onMouseOver: m,
                  onMouseLeave: j,
                  children: h,
              } = e;
              return (0, s.jsx)("div", {
                  className: o()(p.gp, { [p.Wq]: c && !a }),
                  ref: t,
                  children: (0, s.jsxs)(u.s, {
                      "aria-label": r,
                      onClick: x,
                      onMouseOver: m,
                      onMouseLeave: j,
                      className: o()(p.kL, { [p.vu]: a, [p.$e]: l || (c && a) }, i),
                      children: [
                          h,
                          "new" === d && (0, s.jsx)(v.Lp, { className: p.Hl, text: N.intl.string(N.t.y2b7CA) }),
                          "beta" === d &&
                              (0, s.jsx)(v.Lp, {
                                  className: p.Hl,
                                  text: N.intl.string(N.t.oW0eUd),
                                  color: n.A.colors.BACKGROUND_BRAND.css,
                              }),
                      ],
                  }),
              });
          })
        : null;
