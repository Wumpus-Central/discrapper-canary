n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(642128),
    s = n(866442),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    h = n(377171),
    p = n(540059),
    g = n(565138),
    m = n(430824),
    f = n(624138),
    _ = n(674552),
    v = n(981631),
    C = n(388032),
    x = n(10448);
let Z = (0, f.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    I = (0, f.Mg)(d.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    b = ['13px 4px 4px 4px', '4px 13px 4px 4px', '4px 4px 4px 13px', '4px 4px 13px 4px'];
function S(e) {
    let { guildId: t, animate: n, index: l } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        a = (0, p.Q3)('GuildIcon'),
        o = (0, u.dQu)(u.TVs.modules.guildbar.AVATAR_SIZE);
    return null == r
        ? (0, i.jsx)('div', {
              className: x.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(g.Z, {
              guild: r,
              animate: n,
              size: a ? g.Z.Sizes.MINI : g.Z.Sizes.SMOL,
              iconSize: a ? o : void 0,
              lossless: a,
              className: x.guildIcon,
              tabIndex: -1,
              style: a ? { borderRadius: b[l] } : void 0
          });
}
function N(e) {
    let t,
        n,
        { folderNode: r, hovered: a, expanded: c } = e,
        d = (0, p.Q3)('FolderIconContent'),
        { color: h, children: g } = r,
        m = null != h ? h : v.Wyy,
        f = m === v.Wyy,
        _ = g.map((e) => e.id),
        [C, b] = l.useState(!1),
        [N, E] = l.useState(c),
        j = d ? (c ? 22 : -11) : c ? 0 : -I,
        y = (0, u.q_F)(
            {
                transform: 'translate3d(0, '.concat(j, 'px, 0)'),
                config: { duration: Z },
                onStart() {
                    b(!0), E(c);
                },
                onRest() {
                    b(!1), E(c);
                }
            },
            'animate-always'
        ),
        A = C ? y : void 0;
    (C || N) &&
        (t = (0, i.jsx)(o.animated.div, {
            style: A,
            className: x.expandedFolderIconWrapper,
            children: (0, i.jsx)(u.ROc, {
                size: d ? 'sm' : 'md',
                color: 'currentColor',
                style: { color: (0, s.Rf)(m) }
            })
        })),
        (C || !N) &&
            (n = (0, i.jsx)(o.animated.div, {
                style: A,
                className: x.closedFolderIconWrapper,
                children: _.slice(0, 4).map((e, t) =>
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
    let P = { backgroundColor: d && f ? u.TVs.colors.BACKGROUND_PRIMARY.css : (0, s.br)(m, 0.4) };
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        style: c ? void 0 : P,
        className: x.folderIconWrapper,
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
            isMentionLowImportance: d,
            tooltipName: g,
            folderGroupId: m,
            folderIconContentClassName: f,
            folderIconContent: v,
            onClick: Z,
            onContextMenu: I,
            onHoverChange: b,
            onKeyDown: S,
            treeItemProps: { onFocus: E, ...j }
        } = e,
        [y, A] = l.useState(!1),
        P = l.useCallback(() => {
            o || A(!0), null == b || b(!0);
        }, [o, b]),
        T = l.useCallback(() => {
            o || A(!1), null == b || b(!1);
        }, [o, b]),
        w = (0, p.Q3)('FolderHeader'),
        R = r || null == s ? null : (0, _.Or)(s),
        L = !r && c > 0 ? (0, _.Ne)(c, d ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER) : null,
        M = (0, u.dQu)(u.TVs.modules.guildbar.FOLDER_SIZE);
    return (0, i.jsx)(u.aRk, {
        isFolder: !0,
        style: w
            ? {
                  width: M,
                  height: M
              }
            : void 0,
        selected: !!w || !n,
        upperBadge: R,
        lowerBadge: L,
        lowerBadgeSize: { width: (0, u.OVM)(c) },
        children: (0, i.jsx)(u.P3F, {
            className: a()(x.folder, { [x.hover]: y }),
            onClick: Z,
            onContextMenu: I,
            onMouseEnter: P,
            onMouseLeave: T,
            onKeyDown: S,
            onFocus: E,
            'aria-label': C.intl.formatToPlainString(C.t['90/DwM'], {
                folderName: g,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': m,
            focusProps: { enabled: !1 },
            ...j,
            role: 'treeitem',
            children:
                null != v
                    ? (0, i.jsx)('div', {
                          className: a()(x.expandedFolderIconWrapper, f),
                          children: v
                      })
                    : (0, i.jsx)(N, {
                          folderNode: t,
                          hovered: y,
                          expanded: r
                      })
        })
    });
}
