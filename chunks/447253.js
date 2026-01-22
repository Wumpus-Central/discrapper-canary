n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(263063),
    u = n(71393),
    d = n(65611),
    f = n(985018),
    p = n(211170);

function h(e) {
    let { guildId: t, animate: n } = e,
        l = (0, s.bG)([u.A], () => u.A.getGuild(t), [t]),
        i = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? (0, r.jsx)("div", {
              className: a()(p.VL, p.zU),
              children: (0, r.jsx)(o.EpV, {
                  color: "currentColor",
              }),
          })
        : (0, r.jsx)(c.A, {
              guild: l,
              animate: n,
              size: c.A.Sizes.MINI,
              iconSize: i,
              lossless: !0,
              className: p.VL,
              tabIndex: -1,
          });
}

function b(e) {
    let { folderNode: t, hovered: n, sorting: l } = e,
        { children: i } = t,
        s = n && l,
        c = (0, r.jsx)("div", {
            className: p.hJ,
            children: (0, r.jsx)("div", {
                className: p.Eh,
                children: (0, r.jsx)(o.sjq, {
                    size: "sm",
                    color: "currentColor",
                }),
            }),
        }),
        u = (0, r.jsx)("div", {
            className: p.qJ,
            children: (0, r.jsx)("div", {
                className: p.jg,
                children: i.slice(0, 4).map((e) =>
                    (0, r.jsx)(
                        h,
                        {
                            guildId: e.id,
                            animate: n,
                        },
                        e.id,
                    ),
                ),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: a()({
            [p.NG]: s,
            [p.yd]: !s,
        }),
        children: [!s && c, u],
    });
}

function g(e) {
    var t, n;
    let {
            folderNode: i,
            expanded: a,
            sorting: s,
            mediaState: c,
            mentionCount: u = 0,
            isMentionLowImportance: h,
            tooltipName: g,
            folderGroupId: m,
            folderButtonContent: A,
            onClick: y,
            onContextMenu: O,
            onHoverChange: j,
            onKeyDown: v,
            treeItemProps: x,
        } = e,
        { onFocus: E } = x,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(x, ["onFocus"]),
        { "aria-setsize": C, "aria-posinset": S } = e,
        [I, N] = l.useState(!1),
        T = l.useCallback(() => {
            s || N(!0), null == j || j(!0);
        }, [s, j]),
        P = l.useCallback(() => {
            s || N(!1), null == j || j(!1);
        }, [s, j]),
        w = a || null == c ? null : (0, d.oi)(c),
        R =
            !a && u > 0
                ? (0, d.wN)(
                      u,
                      h ? o.LU0.colors.BACKGROUND_MOD_STRONG.css : o.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsxs)(
            o.DUT,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    className: p.H3,
                    onClick: y,
                    onContextMenu: O,
                    onMouseEnter: T,
                    onMouseLeave: P,
                    onKeyDown: v,
                    onFocus: E,
                    focusProps: {
                        enabled: !1,
                    },
                },
                _,
            )),
            (n = n =
                {
                    role: "treeitem",
                    "aria-setsize": C,
                    "aria-posinset": S,
                    "aria-expanded": a,
                    "aria-owns": m,
                    children: [
                        (0, r.jsx)(o.AC4, {
                            children: f.intl.formatToPlainString(f.t["90/DwM"], {
                                folderName: g,
                                mentions: u,
                            }),
                        }),
                        (0, r.jsx)(o.Qk9, {
                            "aria-hidden": !0,
                            isFolder: !0,
                            upperBadge: w,
                            lowerBadge: R,
                            lowerBadgeSize: {
                                width: (0, o.o6S)(u),
                            },
                            children: (0, r.jsx)("div", {
                                className: p.vA,
                                children:
                                    null != A
                                        ? (0, r.jsx)("div", {
                                              className: p.hJ,
                                              children: A,
                                          })
                                        : (0, r.jsx)(b, {
                                              folderNode: i,
                                              hovered: I,
                                              sorting: s,
                                          }),
                            }),
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
