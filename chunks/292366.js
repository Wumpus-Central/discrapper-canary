n.d(t, { A: () => v });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(735438),
    s = n(862482),
    o = n(861672),
    d = n(477782),
    c = n(34188),
    u = n(811893),
    m = n(863610),
    _ = n(442433),
    p = n(565645),
    h = n(155718),
    A = n(30008),
    C = n(957565),
    x = n(307600),
    f = n(207963),
    E = n(489414),
    I = n(985018),
    N = n(808199);
function g(e) {
    let { url: t, onSelect: n } = e;
    return C.p5 && null != t
        ? (0, a.jsx)(o.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: _.Z_,
              "aria-label": I.intl.string(I.t.tvTXy8),
              onSelect: n,
              children: (0, a.jsx)(d.rX, {
                  children: (0, a.jsx)(d.Dr, {
                      id: "copy",
                      label: I.intl.string(I.t.uHhnfa),
                      action: () => (0, C.C)(t),
                  }),
              }),
          })
        : null;
}
function v(e) {
    let t,
        { label: n, style: l, disabled: o, emoji: d, url: C, skuId: I } = e,
        { executeStateUpdate: v, visualState: T, isDisabled: b } = (0, f.At)(e),
        S = (0, A.Q)(I),
        j = null != I && l === h.in.PREMIUM,
        O = j && S?.disabled,
        y = j ? S?.label : n,
        R = null != d,
        P = null != y && y.length > 0,
        L = l === h.in.LINK && null != C && C.length > 0,
        D = T === E.BB.LOADING || (j && null == S);
    return (
        (t = L
            ? () => {
                  (0, x.h)({ href: C ?? "", shouldConfirm: !0 });
              }
            : j
              ? null != S && !1 === S.disabled
                  ? S.onClick
                  : i.noop
              : () => v()),
        (0, a.jsxs)(s.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case h.in.PRIMARY:
                    case h.in.PREMIUM:
                        return s.$n.Colors.BRAND;
                    case h.in.SUCCESS:
                        return s.$n.Colors.GREEN;
                    case h.in.DESTRUCTIVE:
                        return s.$n.Colors.RED;
                    default:
                        return s.$n.Colors.PRIMARY;
                }
            })(l),
            size: s.$n.Sizes.SMALL,
            disabled: o || T === E.BB.DISABLED || b || O,
            onClick: t,
            onContextMenu: (e) => {
                L && (0, _.jA)(e, (e) => (0, a.jsx)(g, { ...e, url: C }));
            },
            role: L ? "link" : "button",
            children: [
                (0, a.jsxs)("div", {
                    className: r()(N.Qs, { [N.R]: D, [N.M2]: j }),
                    "aria-hidden": D,
                    children: [
                        j
                            ? (0, a.jsx)("div", {
                                  className: N.sV,
                                  children: (0, a.jsx)(c.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        R
                            ? (0, a.jsx)(p.A, {
                                  className: r()({ [N.MR]: P }),
                                  src: d.src,
                                  emojiId: d.id,
                                  emojiName: d.name,
                                  animated: d.animated,
                              })
                            : null,
                        P ? (0, a.jsx)("div", { className: N.Pf, children: y }) : null,
                        L ? (0, a.jsx)(u.t, { size: "xs", color: "currentColor", className: N.LE }) : null,
                    ],
                }),
                D
                    ? (0, a.jsx)("div", { className: N.Lq, children: (0, a.jsx)(m.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
