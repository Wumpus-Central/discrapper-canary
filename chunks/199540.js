n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(565138),
    u = n(430824),
    d = n(674552),
    f = n(388032),
    p = n(106663);
function h(e) {
    let { guildId: t, animate: n } = e,
        i = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        l = (0, s.dQu)(s.TVs.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", {
              className: o()(p.folderPreviewGuildIcon, p.folderPreviewGuildIconError),
              children: (0, r.jsx)(s.Mgn, { color: "currentColor" }),
          })
        : (0, r.jsx)(c.Z, {
              guild: i,
              animate: n,
              size: c.Z.Sizes.MINI,
              iconSize: l,
              lossless: !0,
              className: p.folderPreviewGuildIcon,
              tabIndex: -1,
          });
}
function g(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: l } = t,
        a = n && i,
        c = (0, r.jsx)("div", {
            className: p.folderIconWrapper,
            children: (0, r.jsx)("div", {
                className: p.folderIcon,
                children: (0, r.jsx)(s.ROc, {
                    size: "sm",
                    color: "currentColor",
                }),
            }),
        }),
        u = (0, r.jsx)("div", {
            className: p.folderPreviewWrapper,
            children: (0, r.jsx)("div", {
                className: p.folderPreview,
                children: l.slice(0, 4).map((e) =>
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
        className: o()({
            [p.folderDragPreview]: a,
            [p.folderButtonContent]: !a,
        }),
        children: [!a && c, u],
    });
}
function m(e) {
    var t, n;
    let {
            folderNode: l,
            expanded: o,
            sorting: a,
            mediaState: c,
            mentionCount: u = 0,
            isMentionLowImportance: h,
            tooltipName: m,
            folderGroupId: b,
            folderButtonContent: _,
            onClick: y,
            onContextMenu: O,
            onHoverChange: v,
            onKeyDown: j,
            treeItemProps: { onFocus: x },
            "aria-setsize": C,
            "aria-posinset": E,
        } = e,
        S = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e.treeItemProps, ["onFocus"]),
        [I, P] = i.useState(!1),
        N = i.useCallback(() => {
            a || P(!0), null == v || v(!0);
        }, [a, v]),
        Z = i.useCallback(() => {
            a || P(!1), null == v || v(!1);
        }, [a, v]),
        w = o || null == c ? null : (0, d.Or)(c),
        T = !o && u > 0 ? (0, d.Ne)(u, h ? s.TVs.colors.BACKGROUND_ACCENT.css : s.TVs.colors.STATUS_DANGER.css) : null;
    return (0, r.jsx)(s.tEY, {
        children: (0, r.jsxs)(
            s.P3F,
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
                    className: p.folderButton,
                    onClick: y,
                    onContextMenu: O,
                    onMouseEnter: N,
                    onMouseLeave: Z,
                    onKeyDown: j,
                    onFocus: x,
                    focusProps: { enabled: !1 },
                },
                S,
            )),
            (n = n =
                {
                    role: "treeitem",
                    "aria-setsize": C,
                    "aria-posinset": E,
                    "aria-expanded": o,
                    "aria-owns": b,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: f.intl.formatToPlainString(f.t["90/DwM"], {
                                folderName: m,
                                mentions: u,
                            }),
                        }),
                        (0, r.jsx)(s.aRk, {
                            "aria-hidden": !0,
                            isFolder: !0,
                            upperBadge: w,
                            lowerBadge: T,
                            lowerBadgeSize: { width: (0, s.OVM)(u) },
                            children: (0, r.jsx)("div", {
                                className: p.folderButtonInner,
                                children:
                                    null != _
                                        ? (0, r.jsx)("div", {
                                              className: p.folderIconWrapper,
                                              children: _,
                                          })
                                        : (0, r.jsx)(g, {
                                              folderNode: l,
                                              hovered: I,
                                              sorting: a,
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
