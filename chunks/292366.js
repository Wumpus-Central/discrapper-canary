n.d(t, { A: () => I });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(735438),
    i = n(421380),
    o = n(397927),
    c = n(442433),
    d = n(565645),
    u = n(155718),
    m = n(30008),
    p = n(957565),
    A = n(307600),
    h = n(207963),
    C = n(489414),
    E = n(985018),
    x = n(592392);
function N(e) {
    let { url: t, onSelect: n } = e;
    return p.p5 && null != t
        ? (0, l.jsx)(o.W1t, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: c.Z_,
              "aria-label": E.intl.string(E.t.tvTXy8),
              onSelect: n,
              children: (0, l.jsx)(o.rXV, {
                  children: (0, l.jsx)(o.Drp, {
                      id: "copy",
                      label: E.intl.string(E.t.uHhnfa),
                      action: () => (0, p.C)(t),
                  }),
              }),
          })
        : null;
}
function I(e) {
    let t,
        { label: n, style: a, disabled: p, emoji: E, url: I, skuId: _ } = e,
        { executeStateUpdate: f, visualState: g, isDisabled: T } = (0, h.At)(e),
        v = (0, m.Q)(_),
        j = null != _ && a === u.in.PREMIUM,
        S = j && v?.disabled,
        O = j ? v?.label : n,
        R = null != E,
        y = null != O && O.length > 0,
        b = a === u.in.LINK && null != I && I.length > 0,
        P = g === C.BB.LOADING || (j && null == v);
    return (
        (t = b
            ? () => {
                  (0, A.h)({ href: I ?? "", shouldConfirm: !0 });
              }
            : j
              ? null != v && !1 === v.disabled
                  ? v.onClick
                  : s.noop
              : () => f()),
        (0, l.jsxs)(i.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case u.in.PRIMARY:
                    case u.in.PREMIUM:
                        return i.$n.Colors.BRAND;
                    case u.in.SUCCESS:
                        return i.$n.Colors.GREEN;
                    case u.in.DESTRUCTIVE:
                        return i.$n.Colors.RED;
                    default:
                        return i.$n.Colors.PRIMARY;
                }
            })(a),
            size: i.$n.Sizes.SMALL,
            disabled: p || g === C.BB.DISABLED || T || S,
            onClick: t,
            onContextMenu: (e) => {
                b && (0, c.jA)(e, (e) => (0, l.jsx)(N, { ...e, url: I }));
            },
            role: b ? "link" : "button",
            children: [
                (0, l.jsxs)("div", {
                    className: r()(x.Qs, { [x.R]: P, [x.M2]: j }),
                    "aria-hidden": P,
                    children: [
                        j
                            ? (0, l.jsx)("div", {
                                  className: x.sV,
                                  children: (0, l.jsx)(o.U1X, { size: "xs", color: "white" }),
                              })
                            : null,
                        R
                            ? (0, l.jsx)(d.A, {
                                  className: r()({ [x.MR]: y }),
                                  src: E.src,
                                  emojiId: E.id,
                                  emojiName: E.name,
                                  animated: E.animated,
                              })
                            : null,
                        y ? (0, l.jsx)("div", { className: x.Pf, children: O }) : null,
                        b ? (0, l.jsx)(o.tfB, { size: "xs", color: "currentColor", className: x.LE }) : null,
                    ],
                }),
                P
                    ? (0, l.jsx)("div", {
                          className: x.Lq,
                          children: (0, l.jsx)(o.nvX, { dotRadius: 3.5, themed: !0 }),
                      })
                    : null,
            ],
        })
    );
}
