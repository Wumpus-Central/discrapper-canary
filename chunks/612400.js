i.d(t, { $L: () => w, NI: () => G, kd: () => T, TG: () => b, P5: () => A, Ft: () => k, Yq: () => S });
var r = i(477900),
    s = i(582128),
    a = i(503698),
    n = i.n(a),
    l = i(628284),
    o = i(661531),
    d = i(834730),
    c = i(695366);
if (221552 == i.j) var x = i(104510);
if (221552 == i.j) var v = i(297264);
if (221552 == i.j) var m = i(890856);
if (221552 == i.j) var u = i(508770);
var j = i(37537),
    h = i(773669),
    f = i(939981),
    g = i(25525),
    p = i(375708),
    N = i(517826);
function b(e) {
    let { text: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterActive");
    return (0, r.jsxs)("div", {
        className: N.mG,
        children: [
            (0, r.jsx)(l.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, r.jsx)(d.E, {
                color: "text-feedback-positive",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: t,
            }),
        ],
    });
}
function A(e) {
    let { dateString: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterExpiring");
    return (0, r.jsxs)("div", {
        className: N.mG,
        children: [
            (0, r.jsx)(c.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: p.intl.formatToMarkdownString(g.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(h.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function S(e) {
    let { removingAt: t } = e,
        i = (0, j.c)("GuildPowerupCardFooterRemoving");
    return (0, r.jsxs)("div", {
        className: N.wL,
        children: [
            (0, r.jsx)(c.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: p.intl.formatToPlainString(g.default["6e2ry1"], { dateString: (0, f.A)(t) }),
            }),
        ],
    });
}
function w(e) {
    let { cost: t, costDecorator: i, status: s, className: a } = e,
        l = void 0 !== t ? N._A : N.$3;
    return (0, r.jsxs)("div", {
        className: n()(l, a),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: n()(N.mG, N.pT),
                    children: [
                        (0, r.jsx)(x._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(d.E, {
                            className: N.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: p.intl.formatToPlainString(p.t.t2Wbo1, { required: t, decorator: i ?? "" }),
                        }),
                    ],
                }),
            s?.type === "expiring" && (0, r.jsx)(A, { dateString: s.expiringAt }),
            s?.type === "removing" && (0, r.jsx)(S, { removingAt: s.removingAt }),
            s?.type === "active" && (0, r.jsx)(b, { text: s.statusText }),
        ],
    });
}
function T(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: N.UD, children: t });
}
function k(e) {
    let { title: t, textColor: i, children: s, footer: a } = e;
    return (0, r.jsxs)("div", {
        className: N.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: N.N1,
                        children: (0, r.jsx)(v.D, { color: i, variant: "heading-md/bold", children: t }),
                    }),
                    s,
                ],
            }),
            a,
        ],
    });
}
let G =
    221552 == i.j
        ? s.forwardRef(function (e, t) {
              let {
                  className: i,
                  label: s,
                  isActive: a,
                  isWarning: l,
                  badge: o,
                  canRollback: d,
                  onClick: c,
                  onMouseOver: x,
                  onMouseLeave: v,
                  children: j,
              } = e;
              return (0, r.jsx)("div", {
                  className: n()(N.gp, { [N.Wq]: d && !a }),
                  ref: t,
                  children: (0, r.jsxs)(m.s, {
                      "aria-label": s,
                      onClick: c,
                      onMouseOver: x,
                      onMouseLeave: v,
                      className: n()(N.kL, { [N.vu]: a, [N.$e]: l || (d && a) }, i),
                      children: [
                          j,
                          "new" === o &&
                              (0, r.jsx)("div", {
                                  className: N.Oj,
                                  children: (0, r.jsx)(u.E, { type: "new", variant: "brand" }),
                              }),
                          "beta" === o &&
                              (0, r.jsx)("div", {
                                  className: N.Oj,
                                  children: (0, r.jsx)(u.E, { type: "beta", variant: "brand" }),
                              }),
                      ],
                  }),
              });
          })
        : null;
