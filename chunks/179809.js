n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(999153),
    s = n(642128),
    c = n(91192),
    d = n(477690),
    u = n(481060),
    h = n(153867),
    p = n(540059),
    m = n(771845),
    g = n(624138),
    f = n(727258),
    _ = n(276952),
    v = n(199540),
    C = n(40153),
    x = n(252686),
    I = n(682662),
    Z = n(662146),
    b = n(388032),
    S = n(895134),
    N = n(856577);
let E = (0, g.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    j = (0, s.animated)(u.Kqy);
function y(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: s, mediaState: d, mentionCount: g = 0, isMentionLowImportance: y, unread: T = !1, defaultFolderName: A, useCircleMask: P = !1, draggable: R = !1, sorting: w = !1, onDragStart: L, onDragEnd: M, onExpandCollapse: D, onContextMenu: G, renderChildNode: k, folderIconContent: B, folderIconContentClassName: O } = e,
        { id: U, name: V, children: F } = t,
        H = (0, p.Q3)('FolderItem'),
        [z, W] = l.useState(!1),
        [q, Y] = l.useState(!1),
        Q = z || q;
    l.useEffect(() => {
        w && W(!1);
    }, [w]);
    let [{ dragging: J }, K] = (0, a.c)({
            type: f.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: f.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == M || M(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
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
        ee = null != V && '' !== V ? V : null != A && '' !== A ? A : b.intl.string(b.t.xV9hVl),
        et = (0, c.Ie)(''.concat(U)),
        en = 'folder-items-'.concat(U),
        ei = (function (e) {
            let t = (0, u.dQu)(u.TVs.modules.guildbar.AVATAR_SIZE),
                n = (0, p.Q3)('FolderItem.useHeight'),
                { density: i } = (0, u.TCT)();
            if (!n) return e * (t + 8);
            let l = e * (t + ('cozy' === i ? 8 : 4));
            return 'cozy' === i ? l - 4 : l;
        })(F.length),
        el = (0, u.Yzy)(!J && s, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: E }
        }),
        er = l.useCallback((e) => (null == n ? void 0 : n(U, e)), [n, U]),
        eo = (0, i.jsxs)(I.H, {
            children: [
                (0, i.jsx)(_.Z, {
                    disabled: J || s,
                    hovered: z,
                    selected: r,
                    unread: T,
                    className: N.pill
                }),
                (0, i.jsx)(Z.Z, {
                    text: ee,
                    disabled: w,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: R ? K : void 0,
                        className: o()(S.folderIcon, { [N.wobble]: !J && q && !s }),
                        'data-dnd-name': ee,
                        children: J
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(v.Z, {
                                  folderNode: t,
                                  expanded: s,
                                  forceCircular: P,
                                  sorting: w,
                                  mediaState: d,
                                  mentionCount: g,
                                  isMentionLowImportance: y,
                                  tooltipName: ee,
                                  folderGroupId: en,
                                  onClick: D,
                                  onContextMenu: G,
                                  onHoverChange: W,
                                  onKeyDown: $,
                                  treeItemProps: et,
                                  folderIconContentClassName: O,
                                  folderIconContent: B
                              })
                    })
                }),
                R
                    ? (0, i.jsx)(C.ZP, {
                          name: ee,
                          targetNode: t,
                          onDragOverChanged: X
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: er,
        className: o()(S.wrapper, s && S.isExpanded),
        'data-drop-hovering': q,
        children: [
            !J &&
                s &&
                (0, i.jsx)('span', {
                    className: o()(S.expandedFolderBackground, {
                        [S.collapsed]: !s,
                        [S.hover]: Q
                    })
                }),
            eo,
            el((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        j,
                        {
                            as: 'ul',
                            gap: H ? 'xxs' : 0,
                            id: en,
                            style: {
                                height: e.height.to((e) => e * ei),
                                overflow: 'hidden'
                            },
                            role: 'group',
                            children: F.map((t) => k(t, e.height))
                        },
                        l
                    )
                );
            }),
            R && s
                ? (0, i.jsx)(C.Zu, {
                      name: ee,
                      targetNode: t
                  })
                : null
        ]
    });
}
