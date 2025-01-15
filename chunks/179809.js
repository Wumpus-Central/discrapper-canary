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
    s = n(476183),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(540059),
    m = n(771845),
    f = n(624138),
    g = n(727258),
    v = n(276952),
    C = n(199540),
    x = n(40153),
    I = n(252686),
    _ = n(682662),
    Z = n(662146),
    b = n(388032),
    S = n(330588),
    N = n(792640);
let E = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    y = (0, s.animated)(d.Stack);
function j(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: s, mediaState: u, mentionCount: f = 0, isMentionLowImportance: j, unread: T = !1, defaultFolderName: P, useCircleMask: A = !1, draggable: w = !1, sorting: M = !1, onDragStart: L, onDragEnd: R, onExpandCollapse: D, onContextMenu: G, renderChildNode: B, folderIconContent: k, folderIconContentClassName: U } = e,
        { id: O, name: V, children: H } = t,
        F = (0, p.Q3)('FolderItem'),
        [W, z] = l.useState(!1),
        [q, Y] = l.useState(!1),
        Q = W || q;
    l.useEffect(() => {
        M && z(!1);
    }, [M]);
    let [{ dragging: J }, K] = (0, o.c)({
            type: g.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: g.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == R || R(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        X = l.useCallback((e) => {
            Y(e);
        }, []),
        $ = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !s) || ('ArrowLeft' === e.key && s)) && D();
            },
            [D, s]
        ),
        ee = null != V && '' !== V ? V : null != P && '' !== P ? P : b.intl.string(b.t.xV9hVl),
        et = (0, c.Ie)(''.concat(O)),
        en = 'folder-items-'.concat(O),
        ei = (function (e) {
            let t = (0, p.Q3)('FolderItem.useHeight'),
                { density: n } = (0, d.useThemeContext)();
            if (!t) return 56 * e;
            let i = e * (44 + ('cozy' === n ? 8 : 4));
            return 'cozy' === n ? i - 4 : i;
        })(H.length),
        el = (0, d.useTransition)(!J && s, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: E }
        }),
        er = l.useCallback((e) => (null == n ? void 0 : n(O, e)), [n, O]),
        ea = (0, i.jsxs)(_.H, {
            children: [
                (0, i.jsx)(v.Z, {
                    disabled: J || s,
                    hovered: W,
                    selected: r,
                    unread: T,
                    className: N.pill
                }),
                (0, i.jsx)(Z.Z, {
                    text: ee,
                    disabled: M,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: w ? K : void 0,
                        className: a()(S.folderIcon, { [N.wobble]: !J && q && !s }),
                        'data-dnd-name': ee,
                        children: J
                            ? (0, i.jsx)(I.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: t,
                                  expanded: s,
                                  forceCircular: A,
                                  sorting: M,
                                  mediaState: u,
                                  mentionCount: f,
                                  isMentionLowImportance: j,
                                  tooltipName: ee,
                                  folderGroupId: en,
                                  onClick: D,
                                  onContextMenu: G,
                                  onHoverChange: z,
                                  onKeyDown: $,
                                  treeItemProps: et,
                                  folderIconContentClassName: U,
                                  folderIconContent: k
                              })
                    })
                }),
                w
                    ? (0, i.jsx)(x.ZP, {
                          name: ee,
                          targetNode: t,
                          onDragOverChanged: X
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: er,
        className: a()(S.wrapper, s && S.isExpanded),
        children: [
            !J &&
                s &&
                (0, i.jsx)('span', {
                    className: a()(S.expandedFolderBackground, {
                        [S.collapsed]: !s,
                        [S.hover]: Q
                    })
                }),
            ea,
            el((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        y,
                        {
                            as: 'ul',
                            gap: F ? 'xxs' : 0,
                            id: en,
                            style: {
                                height: e.height.to((e) => e * ei),
                                overflow: 'hidden'
                            },
                            role: 'group',
                            children: H.map((t) => B(t, e.height))
                        },
                        l
                    )
                );
            }),
            w && s
                ? (0, i.jsx)(x.Zu, {
                      name: ee,
                      targetNode: t
                  })
                : null
        ]
    });
}
