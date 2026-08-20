s.d(t, { $L: () => S, NI: () => _, kd: () => T, TG: () => A, P5: () => p, Ft: () => k, Yq: () => b });
var i = s(477900),
    r = s(582128),
    a = s(503698),
    n = s.n(a),
    l = s(628284),
    o = s(661531),
    c = s(834730),
    d = s(695366);
if (221552 == s.j) var x = s(104510);
if (221552 == s.j) var v = s(297264);
if (221552 == s.j) var j = s(890856);
if (221552 == s.j) var m = s(812993);
var u = s(773669),
    h = s(939981),
    f = s(641641),
    N = s(375708),
    g = s(517826);
function A(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: g.mG,
        children: [
            (0, i.jsx)(l.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, i.jsx)(c.E, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function p(e) {
    let { dateString: t } = e;
    return (0, i.jsxs)("div", {
        className: g.mG,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "text-feedback-warning",
                variant: "text-sm/bold",
                children: N.intl.formatToMarkdownString(f.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(u.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function b(e) {
    let { removingAt: t } = e;
    return (0, i.jsxs)("div", {
        className: g.wL,
        children: [
            (0, i.jsx)(d.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, i.jsx)(c.E, {
                color: "text-feedback-warning",
                variant: "text-sm/bold",
                children: N.intl.formatToPlainString(f.default["6e2ry1"], { dateString: (0, h.A)(t) }),
            }),
        ],
    });
}
function S(e) {
    let { cost: t, costDecorator: s, status: r, className: a } = e,
        l = void 0 !== t ? g._A : g.$3;
    return (0, i.jsxs)("div", {
        className: n()(l, a),
        children: [
            void 0 !== t &&
                (0, i.jsxs)("div", {
                    className: n()(g.mG, g.pT),
                    children: [
                        (0, i.jsx)(x._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, i.jsx)(c.E, {
                            className: g.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: N.intl.formatToPlainString(N.t.t2Wbo1, { required: t, decorator: s ?? "" }),
                        }),
                    ],
                }),
            r?.type === "expiring" && (0, i.jsx)(p, { dateString: r.expiringAt }),
            r?.type === "removing" && (0, i.jsx)(b, { removingAt: r.removingAt }),
            r?.type === "active" && (0, i.jsx)(A, { text: r.statusText }),
        ],
    });
}
function T(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: g.UD, children: t });
}
function k(e) {
    let { title: t, textColor: s, children: r, footer: a } = e;
    return (0, i.jsxs)("div", {
        className: g.hQ,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)("div", {
                        className: g.N1,
                        children: (0, i.jsx)(v.D, { color: s, variant: "heading-md/bold", children: t }),
                    }),
                    r,
                ],
            }),
            a,
        ],
    });
}
let _ =
    221552 == s.j
        ? r.forwardRef(function (e, t) {
              let {
                  className: s,
                  label: r,
                  isActive: a,
                  isWarning: l,
                  badge: c,
                  canRollback: d,
                  onClick: x,
                  onMouseOver: v,
                  onMouseLeave: u,
                  children: h,
              } = e;
              return (0, i.jsx)("div", {
                  className: n()(g.gp, { [g.Wq]: d && !a }),
                  ref: t,
                  children: (0, i.jsxs)(j.s, {
                      "aria-label": r,
                      onClick: x,
                      onMouseOver: v,
                      onMouseLeave: u,
                      className: n()(g.kL, { [g.vu]: a, [g.$e]: l || (d && a) }, s),
                      children: [
                          h,
                          "new" === c && (0, i.jsx)(m.Lp, { className: g.Hl, text: N.intl.string(N.t.y2b7CA) }),
                          "beta" === c &&
                              (0, i.jsx)(m.Lp, {
                                  className: g.Hl,
                                  text: N.intl.string(N.t.oW0eUd),
                                  color: o.A.colors.BACKGROUND_BRAND.css,
                              }),
                      ],
                  }),
              });
          })
        : null;
