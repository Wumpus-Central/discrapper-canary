n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(666912),
    s = n(866442),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(377171),
    p = n(540059),
    f = n(565138),
    m = n(430824),
    g = n(624138),
    v = n(674552),
    C = n(981631),
    x = n(388032),
    I = n(10448);
let _ = (0, g.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    Z = (0, g.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    b = ['13px 4px 4px 4px', '4px 13px 4px 4px', '4px 4px 4px 13px', '4px 4px 13px 4px'];
function S(e) {
    let { guildId: t, animate: n, index: l } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        a = (0, p.Q3)('GuildIcon');
    return null == r
        ? (0, i.jsx)('div', {
              className: I.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(f.Z, {
              guild: r,
              animate: n,
              size: a ? f.Z.Sizes.MINI : f.Z.Sizes.SMOL,
              className: I.guildIcon,
              tabIndex: -1,
              style: a ? { borderRadius: b[l] } : void 0
          });
}
function N(e) {
    let t,
        n,
        { folderNode: r, hovered: a, expanded: c } = e,
        u = (0, p.Q3)('FolderIconContent'),
        { color: h, children: f } = r,
        m = null != h ? h : C.Wyy,
        g = m === C.Wyy,
        v = f.map((e) => e.id),
        [x, b] = l.useState(!1),
        [N, E] = l.useState(c),
        y = c ? 0 : -Z,
        j = (0, d.useSpring)(
            {
                transform: 'translate3d(0, '.concat(y, 'px, 0)'),
                config: { duration: _ },
                onStart() {
                    b(!0), E(c);
                },
                onRest() {
                    b(!1), E(c);
                }
            },
            'animate-always'
        ),
        T = x ? j : void 0;
    (x || N) &&
        (t = (0, i.jsx)(o.animated.div, {
            style: T,
            className: I.expandedFolderIconWrapper,
            children: (0, i.jsx)(d.FolderIcon, {
                size: u ? 'sm' : 'md',
                color: 'currentColor',
                style: { color: (0, s.Rf)(m) }
            })
        })),
        (x || !N) &&
            (n = (0, i.jsx)(o.animated.div, {
                style: T,
                className: I.closedFolderIconWrapper,
                children: v.slice(0, 4).map((e, t) =>
                    (0, i.jsx)(
                        S,
                        {
                            index: t,
                            guildId: e,
                            animate: a
                        },
                        e
                    )
                )
            }));
    let P = { backgroundColor: u && g ? d.tokens.colors.BACKGROUND_PRIMARY.css : (0, s.br)(m, 0.4) };
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        style: c ? void 0 : P,
        className: I.folderIconWrapper,
        children: [t, n]
    });
}
function E(e) {
    let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: o,
            mediaState: s,
            mentionCount: c = 0,
            isMentionLowImportance: u,
            tooltipName: f,
            folderGroupId: m,
            folderIconContent: g,
            onClick: C,
            onContextMenu: _,
            onHoverChange: Z,
            onKeyDown: b,
            treeItemProps: { onFocus: S, ...E }
        } = e,
        [y, j] = l.useState(!1),
        T = l.useCallback(() => {
            o || j(!0), null == Z || Z(!0);
        }, [o, Z]),
        P = l.useCallback(() => {
            o || j(!1), null == Z || Z(!1);
        }, [o, Z]),
        A = (0, p.Q3)('FolderHeader'),
        w = r || null == s ? null : (0, v.Or)(s),
        M = !r && c > 0 ? (0, v.Ne)(c, u ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER) : null;
    return (0, i.jsx)(d.BlobMask, {
        isFolder: !0,
        style: A
            ? {
                  width: 52,
                  height: 52
              }
            : void 0,
        selected: !!A || !n,
        upperBadge: w,
        lowerBadge: M,
        lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
        children: (0, i.jsx)(d.Clickable, {
            className: a()(I.folder, { [I.hover]: y }),
            onClick: C,
            onContextMenu: _,
            onMouseEnter: T,
            onMouseLeave: P,
            onKeyDown: b,
            onFocus: S,
            'aria-label': x.intl.formatToPlainString(x.t['90/DwM'], {
                folderName: f,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': m,
            focusProps: { enabled: !1 },
            ...E,
            role: 'treeitem',
            children:
                null != g
                    ? (0, i.jsx)('div', {
                          className: I.expandedFolderIconWrapper,
                          children: g
                      })
                    : (0, i.jsx)(N, {
                          folderNode: t,
                          hovered: y,
                          expanded: r
                      })
        })
    });
}
