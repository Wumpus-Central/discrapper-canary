n.d(t, { Z: () => E }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(272573),
    a = n(866442),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(377171),
    p = n(540059),
    f = n(565138),
    g = n(430824),
    m = n(624138),
    b = n(674552),
    y = n(981631),
    _ = n(388032),
    O = n(728492);
let v = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    C = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    j = ['13px 4px 4px 4px', '4px 13px 4px 4px', '4px 4px 4px 13px', '4px 4px 13px 4px'];
function x(e) {
    let { guildId: t, animate: n, index: i } = e,
        l = (0, c.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        o = (0, p.Q3)('GuildIcon'),
        s = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? (0, r.jsx)('div', {
              className: O.guildIconUnavailable,
              children: '!'
          })
        : (0, r.jsx)(f.Z, {
              guild: l,
              animate: n,
              size: o ? f.Z.Sizes.MINI : f.Z.Sizes.SMOL,
              iconSize: o ? s : void 0,
              lossless: o,
              className: O.guildIcon,
              tabIndex: -1,
              style: o ? { borderRadius: j[i] } : void 0
          });
}
function S(e) {
    let t,
        n,
        { folderNode: l, hovered: o, expanded: c } = e,
        u = (0, p.Q3)('FolderIconContent'),
        { color: h, children: f } = l,
        g = null != h ? h : y.Wyy,
        m = g === y.Wyy,
        b = f.map((e) => e.id),
        [_, j] = i.useState(!1),
        [S, E] = i.useState(c),
        P = u ? (c ? 22 : -11) : c ? 0 : -C,
        I = (0, d.q_F)(
            {
                transform: 'translate3d(0, '.concat(P, 'px, 0)'),
                config: { duration: v },
                onStart() {
                    j(!0), E(c);
                },
                onRest() {
                    j(!1), E(c);
                }
            },
            'animate-always'
        ),
        w = _ ? I : void 0;
    (_ || S) &&
        (t = (0, r.jsx)(s.animated.div, {
            style: w,
            className: O.expandedFolderIconWrapper,
            children: (0, r.jsx)(d.ROc, {
                size: u ? 'sm' : 'md',
                color: 'currentColor',
                style: { color: (0, a.Rf)(g) }
            })
        })),
        (_ || !S) &&
            (n = (0, r.jsx)(s.animated.div, {
                style: w,
                className: O.closedFolderIconWrapper,
                children: b.slice(0, 4).map((e, t) =>
                    (0, r.jsx)(
                        x,
                        {
                            index: t,
                            guildId: e,
                            animate: o
                        },
                        e
                    )
                )
            }));
    let N = { backgroundColor: u && m ? d.TVs.colors.BG_MOD_SUBTLE.css : (0, a.br)(g, 0.4) };
    return (0, r.jsxs)('div', {
        'aria-hidden': !0,
        style: c ? void 0 : N,
        className: O.folderIconWrapper,
        children: [t, n]
    });
}
function E(e) {
    var t, n;
    let {
            folderNode: l,
            forceCircular: s,
            expanded: a,
            sorting: c,
            mediaState: u,
            mentionCount: f = 0,
            isMentionLowImportance: g,
            tooltipName: m,
            folderGroupId: y,
            folderIconContentClassName: v,
            folderIconContent: C,
            onClick: j,
            onContextMenu: x,
            onHoverChange: E,
            onKeyDown: P,
            treeItemProps: { onFocus: I },
            'aria-setsize': w,
            'aria-posinset': N
        } = e,
        Z = (function (e, t) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e.treeItemProps, ['onFocus']),
        [T, A] = i.useState(!1),
        R = i.useCallback(() => {
            c || A(!0), null == E || E(!0);
        }, [c, E]),
        D = i.useCallback(() => {
            c || A(!1), null == E || E(!1);
        }, [c, E]),
        L = (0, p.Q3)('FolderHeader'),
        k = a || null == u ? null : (0, b.Or)(u),
        M = !a && f > 0 ? (0, b.Ne)(f, g ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER) : null,
        U = (0, d.dQu)(d.TVs.modules.guildbar.FOLDER_SIZE);
    return (0, r.jsx)(d.aRk, {
        isFolder: !0,
        style: L
            ? {
                  width: U,
                  height: U
              }
            : void 0,
        selected: !!L || !s,
        upperBadge: k,
        lowerBadge: M,
        lowerBadgeSize: { width: (0, d.OVM)(f) },
        children: (0, r.jsxs)(
            d.P3F,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    className: o()(O.folder, { [O.hover]: T }),
                    onClick: j,
                    onContextMenu: x,
                    onMouseEnter: R,
                    onMouseLeave: D,
                    onKeyDown: P,
                    onFocus: I,
                    'aria-expanded': a,
                    'aria-owns': y,
                    focusProps: { enabled: !1 }
                },
                Z
            )),
            (n = n =
                {
                    role: 'treeitem',
                    'aria-setsize': w,
                    'aria-posinset': N,
                    children: [
                        (0, r.jsx)(d.nn4, {
                            children: _.intl.formatToPlainString(_.t['90/DwM'], {
                                folderName: m,
                                mentions: f
                            })
                        }),
                        null != C
                            ? (0, r.jsx)('div', {
                                  className: o()(O.expandedFolderIconWrapper, v),
                                  children: C
                              })
                            : (0, r.jsx)(S, {
                                  folderNode: l,
                                  hovered: T,
                                  expanded: a
                              })
                    ]
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
            t)
        )
    });
}
