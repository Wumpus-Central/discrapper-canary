i.d(t, { $L: () => w, NI: () => _, kd: () => k, TG: () => A, P5: () => S, Ft: () => G, Yq: () => T });
var r = i(477900),
    s = i(582128),
    a = i(503698),
    n = i.n(a),
    l = i(628284),
    o = i(661531),
    d = i(834730),
    c = i(695366);
if (221552 == i.j) var x = i(104510);
if (221552 == i.j) var m = i(297264);
if (221552 == i.j) var v = i(890856);
if (221552 == i.j) var u = i(812993);
if (221552 == i.j) var j = i(508770);
var h = i(37537),
    f = i(773669),
    g = i(939981),
    p = i(25525),
    N = i(375708),
    b = i(517826);
function A(e) {
    let { text: t } = e,
        i = (0, h.c)("GuildPowerupCardFooterActive");
    return (0, r.jsxs)("div", {
        className: b.mG,
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
function S(e) {
    let { dateString: t } = e,
        i = (0, h.c)("GuildPowerupCardFooterExpiring");
    return (0, r.jsxs)("div", {
        className: b.mG,
        children: [
            (0, r.jsx)(c.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: N.intl.formatToMarkdownString(p.default["ol/ao/"], {
                    dateString: new Date(t).toLocaleDateString(f.default.locale, { month: "2-digit", day: "2-digit" }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { removingAt: t } = e,
        i = (0, h.c)("GuildPowerupCardFooterRemoving");
    return (0, r.jsxs)("div", {
        className: b.wL,
        children: [
            (0, r.jsx)(c.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "text-feedback-warning",
                variant: i ? "text-sm/semibold" : "text-sm/bold",
                children: N.intl.formatToPlainString(p.default["6e2ry1"], { dateString: (0, g.A)(t) }),
            }),
        ],
    });
}
function w(e) {
    let { cost: t, costDecorator: i, status: s, className: a } = e,
        l = void 0 !== t ? b._A : b.$3;
    return (0, r.jsxs)("div", {
        className: n()(l, a),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: n()(b.mG, b.pT),
                    children: [
                        (0, r.jsx)(x._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(d.E, {
                            className: b.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: N.intl.formatToPlainString(N.t.t2Wbo1, { required: t, decorator: i ?? "" }),
                        }),
                    ],
                }),
            s?.type === "expiring" && (0, r.jsx)(S, { dateString: s.expiringAt }),
            s?.type === "removing" && (0, r.jsx)(T, { removingAt: s.removingAt }),
            s?.type === "active" && (0, r.jsx)(A, { text: s.statusText }),
        ],
    });
}
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: b.UD, children: t });
}
function G(e) {
    let { title: t, textColor: i, children: s, footer: a } = e;
    return (0, r.jsxs)("div", {
        className: b.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: b.N1,
                        children: (0, r.jsx)(m.D, { color: i, variant: "heading-md/bold", children: t }),
                    }),
                    s,
                ],
            }),
            a,
        ],
    });
}
let _ =
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
                  onMouseLeave: m,
                  children: h,
              } = e;
              return (0, r.jsx)("div", {
                  className: n()(b.gp, { [b.Wq]: d && !a }),
                  ref: t,
                  children: (0, r.jsxs)(v.s, {
                      "aria-label": s,
                      onClick: c,
                      onMouseOver: x,
                      onMouseLeave: m,
                      className: n()(b.kL, { [b.vu]: a, [b.$e]: l || (d && a) }, i),
                      children: [
                          h,
                          "new" === o && (0, r.jsx)(u.Lp, { className: b.Hl, text: N.intl.string(N.t.y2b7CA) }),
                          "beta" === o &&
                              (0, r.jsx)("div", {
                                  className: b.Mx,
                                  children: (0, r.jsx)(j.E, { type: "beta", variant: "brand" }),
                              }),
                      ],
                  }),
              });
          })
        : null;
