n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(377171),
    u = n(565138),
    d = n(430824),
    h = n(674552),
    p = n(388032),
    f = n(728492);
function g(e) {
    let { guildId: t, animate: n } = e,
        i = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        l = (0, a.dQu)(a.TVs.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)('div', {
              className: o()(f.folderPreviewGuildIcon, f.folderPreviewGuildIconError),
              children: (0, r.jsx)(a.P4T, { color: 'currentColor' })
          })
        : (0, r.jsx)(u.Z, {
              guild: i,
              animate: n,
              size: u.Z.Sizes.MINI,
              iconSize: l,
              lossless: !0,
              className: f.folderPreviewGuildIcon,
              tabIndex: -1
          });
}
function m(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: l } = t,
        s = n && i,
        c = (0, r.jsx)('div', {
            className: f.folderIconWrapper,
            children: (0, r.jsx)('div', {
                className: f.folderIcon,
                children: (0, r.jsx)(a.ROc, {
                    size: 'sm',
                    color: 'currentColor'
                })
            })
        }),
        u = (0, r.jsx)('div', {
            className: f.folderPreviewWrapper,
            children: (0, r.jsx)('div', {
                className: f.folderPreview,
                children: l.slice(0, 4).map((e) =>
                    (0, r.jsx)(
                        g,
                        {
                            guildId: e.id,
                            animate: n
                        },
                        e.id
                    )
                )
            })
        });
    return (0, r.jsxs)('div', {
        'aria-hidden': !0,
        className: o()({
            [f.folderDragPreview]: s,
            [f.folderButtonContent]: !s
        }),
        children: [!s && c, u]
    });
}
function b(e) {
    var t, n;
    let {
            folderNode: l,
            expanded: o,
            sorting: s,
            mediaState: u,
            mentionCount: d = 0,
            isMentionLowImportance: g,
            tooltipName: b,
            folderGroupId: _,
            folderButtonContent: y,
            onClick: O,
            onContextMenu: v,
            onHoverChange: C,
            onKeyDown: S,
            treeItemProps: { onFocus: j },
            'aria-setsize': E,
            'aria-posinset': x
        } = e,
        P = (function (e, t) {
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
        [I, w] = i.useState(!1),
        N = i.useCallback(() => {
            s || w(!0), null == C || C(!0);
        }, [s, C]),
        Z = i.useCallback(() => {
            s || w(!1), null == C || C(!1);
        }, [s, C]),
        T = o || null == u ? null : (0, h.Or)(u),
        A = !o && d > 0 ? (0, h.Ne)(d, g ? c.Z.BACKGROUND_ACCENT : c.Z.STATUS_DANGER) : null;
    return (0, r.jsx)(a.tEY, {
        children: (0, r.jsx)(
            a.P3F,
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
                    className: f.folderButton,
                    onClick: O,
                    onContextMenu: v,
                    onMouseEnter: N,
                    onMouseLeave: Z,
                    onKeyDown: S,
                    onFocus: j,
                    focusProps: { enabled: !1 }
                },
                P
            )),
            (n = n =
                {
                    role: 'treeitem',
                    'aria-setsize': E,
                    'aria-posinset': x,
                    'aria-expanded': o,
                    'aria-owns': _,
                    children: (0, r.jsxs)(a.aRk, {
                        isFolder: !0,
                        upperBadge: T,
                        lowerBadge: A,
                        lowerBadgeSize: { width: (0, a.OVM)(d) },
                        children: [
                            (0, r.jsx)(a.nn4, {
                                children: p.intl.formatToPlainString(p.t['90/DwM'], {
                                    folderName: b,
                                    mentions: d
                                })
                            }),
                            null != y
                                ? (0, r.jsx)('div', {
                                      className: f.folderIconWrapper,
                                      children: y
                                  })
                                : (0, r.jsx)(m, {
                                      folderNode: l,
                                      hovered: I,
                                      sorting: s
                                  })
                        ]
                    })
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
