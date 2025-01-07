n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(752877),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(540059),
    f = n(771845),
    m = n(624138),
    g = n(727258),
    v = n(276952),
    C = n(199540),
    x = n(40153),
    I = n(252686),
    _ = n(682662),
    Z = n(662146),
    b = n(388032),
    S = n(10448),
    N = n(284923);
let E = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    y = (0, s.animated)(d.Stack);
function j(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: s, mediaState: u, mentionCount: m = 0, isMentionLowImportance: j, unread: T = !1, defaultFolderName: P, useCircleMask: A = !1, draggable: w = !1, sorting: M = !1, onDragStart: L, onDragEnd: R, onExpandCollapse: D, onContextMenu: G, renderChildNode: B, folderIconContent: k } = e,
        { id: U, name: O, children: V } = t,
        H = (0, p.Q3)('FolderItem'),
        [F, W] = l.useState(!1),
        [z, q] = l.useState(!1),
        Y = F || z;
    l.useEffect(() => {
        M && W(!1);
    }, [M]);
    let [{ dragging: Q }, J] = (0, o.c)({
            type: g.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: g.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == R || R(), (0, h.V1)(f.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        K = l.useCallback((e) => {
            q(e);
        }, []),
        X = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !s) || ('ArrowLeft' === e.key && s)) && D();
            },
            [D, s]
        ),
        $ = null != O && '' !== O ? O : null != P && '' !== P ? P : b.intl.string(b.t.xV9hVl),
        ee = (0, c.Ie)(''.concat(U)),
        et = 'folder-items-'.concat(U),
        en = (function (e) {
            let t = (0, p.Q3)('FolderItem.useHeight'),
                { density: n } = (0, d.useThemeContext)();
            if (!t) return 56 * e;
            let i = e * (44 + ('cozy' === n ? 8 : 4));
            return 'cozy' === n ? i - 4 : i;
        })(V.length),
        ei = (0, d.useTransition)(!Q && s, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: E }
        }),
        el = l.useCallback((e) => (null == n ? void 0 : n(U, e)), [n, U]),
        er = (0, i.jsxs)(_.H, {
            children: [
                (0, i.jsx)(v.Z, {
                    disabled: Q || s,
                    hovered: F,
                    selected: r,
                    unread: T,
                    className: N.pill
                }),
                (0, i.jsx)(Z.Z, {
                    text: $,
                    disabled: M,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: w ? J : void 0,
                        className: a()(S.folderIcon, { [N.wobble]: !Q && z && !s }),
                        'data-dnd-name': $,
                        children: Q
                            ? (0, i.jsx)(I.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: t,
                                  expanded: s,
                                  forceCircular: A,
                                  sorting: M,
                                  mediaState: u,
                                  mentionCount: m,
                                  isMentionLowImportance: j,
                                  tooltipName: $,
                                  folderGroupId: et,
                                  onClick: D,
                                  onContextMenu: G,
                                  onHoverChange: W,
                                  onKeyDown: X,
                                  treeItemProps: ee,
                                  folderIconContent: k
                              })
                    })
                }),
                w
                    ? (0, i.jsx)(x.ZP, {
                          name: $,
                          targetNode: t,
                          onDragOverChanged: K
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: el,
        className: a()(S.wrapper, s && S.isExpanded),
        children: [
            !Q &&
                (0, i.jsx)('span', {
                    className: a()(S.expandedFolderBackground, {
                        [S.collapsed]: !s,
                        [S.hover]: Y
                    })
                }),
            er,
            ei((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        y,
                        {
                            as: 'ul',
                            gap: H ? 'xxs' : 0,
                            id: et,
                            style: { height: e.height.to((e) => e * en) },
                            role: 'group',
                            children: V.map(B)
                        },
                        l
                    )
                );
            }),
            w && s
                ? (0, i.jsx)(x.Zu, {
                      name: $,
                      targetNode: t
                  })
                : null
        ]
    });
}
