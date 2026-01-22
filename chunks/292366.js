n.d(t, {
    A: () => I,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(421380),
    l = n(397927),
    c = n(442433),
    u = n(565645),
    d = n(155718),
    f = n(30008),
    p = n(957565),
    _ = n(307600),
    h = n(207963),
    m = n(489414),
    g = n(985018),
    E = n(592392);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e) {
    switch (e) {
        case d.in.PRIMARY:
        case d.in.PREMIUM:
            return o.$n.Colors.BRAND;
        case d.in.SUCCESS:
            return o.$n.Colors.GREEN;
        case d.in.DESTRUCTIVE:
            return o.$n.Colors.RED;
        default:
            return o.$n.Colors.PRIMARY;
    }
}

function S(e) {
    let { url: t, onSelect: n } = e;
    return p.p5 && null != t
        ? (0, r.jsx)(l.W1t, {
              navId: "component-button",
              onClose: c.Z_,
              "aria-label": g.intl.string(g.t.tvTXy8),
              onSelect: n,
              children: (0, r.jsx)(l.rXV, {
                  children: (0, r.jsx)(l.Drp, {
                      id: "copy",
                      label: g.intl.string(g.t.uHhnfa),
                      action: () => (0, p.C)(t),
                  }),
              }),
          })
        : null;
}

function I(e) {
    let t,
        { label: n, style: i, disabled: p, emoji: g, url: b, skuId: O } = e,
        { executeStateUpdate: I, visualState: T, isDisabled: C } = (0, h.At)(e),
        N = (0, f.Q)(O),
        R = null != O && i === d.in.PREMIUM,
        w = R && (null == N ? void 0 : N.disabled),
        P = R ? (null == N ? void 0 : N.label) : n,
        D = null != g,
        x = null != P && P.length > 0,
        L = i === d.in.LINK && null != b && b.length > 0,
        j = T === m.BB.LOADING || (R && null == N);
    return (
        (t = L
            ? () => {
                  (0, _.h)({
                      href: null != b ? b : "",
                      shouldConfirm: !0,
                  });
              }
            : R
              ? null != N && !1 === N.disabled
                  ? N.onClick
                  : s.noop
              : () => I()),
        (0, r.jsxs)(o.$n, {
            "data-migration-pending": !0,
            color: v(i),
            size: o.$n.Sizes.SMALL,
            disabled: p || T === m.BB.DISABLED || C || w,
            onClick: t,
            onContextMenu: (e) => {
                L &&
                    (0, c.jA)(e, (e) =>
                        (0, r.jsx)(
                            S,
                            A(y({}, e), {
                                url: b,
                            }),
                        ),
                    );
            },
            role: L ? "link" : "button",
            children: [
                (0, r.jsxs)("div", {
                    className: a()(E.Qs, {
                        [E.R]: j,
                        [E.M2]: R,
                    }),
                    "aria-hidden": j,
                    children: [
                        R
                            ? (0, r.jsx)("div", {
                                  className: E.sV,
                                  children: (0, r.jsx)(l.U1X, {
                                      size: "xs",
                                      color: "white",
                                  }),
                              })
                            : null,
                        D
                            ? (0, r.jsx)(u.A, {
                                  className: a()({
                                      [E.MR]: x,
                                  }),
                                  src: g.src,
                                  emojiId: g.id,
                                  emojiName: g.name,
                                  animated: g.animated,
                              })
                            : null,
                        x
                            ? (0, r.jsx)("div", {
                                  className: E.Pf,
                                  children: P,
                              })
                            : null,
                        L
                            ? (0, r.jsx)(l.tfB, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: E.LE,
                              })
                            : null,
                    ],
                }),
                j
                    ? (0, r.jsx)("div", {
                          className: E.Lq,
                          children: (0, r.jsx)(l.nvX, {
                              dotRadius: 3.5,
                              themed: !0,
                          }),
                      })
                    : null,
            ],
        })
    );
}
