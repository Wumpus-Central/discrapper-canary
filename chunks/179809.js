n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(642128),
    c = n(91192),
    d = n(477690),
    u = n(481060),
    h = n(153867),
    p = n(540059),
    g = n(771845),
    m = n(624138),
    f = n(727258),
    _ = n(276952),
    v = n(199540),
    C = n(40153),
    x = n(252686),
    Z = n(682662),
    I = n(662146),
    b = n(388032),
    S = n(10448),
    N = n(284923);
let E = (0, m.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    j = (0, s.animated)(u.Kqy);
function y(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: s, mediaState: d, mentionCount: m = 0, isMentionLowImportance: y, unread: A = !1, defaultFolderName: P, useCircleMask: T = !1, draggable: w = !1, sorting: R = !1, onDragStart: L, onDragEnd: M, onExpandCollapse: D, onContextMenu: G, renderChildNode: k, folderIconContent: B, folderIconContentClassName: O } = e,
        { id: U, name: V, children: F } = t,
        H = (0, p.Q3)('FolderItem'),
        [z, W] = l.useState(!1),
        [q, Y] = l.useState(!1),
        Q = z || q;
    l.useEffect(() => {
        R && W(!1);
    }, [R]);
    let [{ dragging: J }, K] = (0, o.c)({
            type: f.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: f.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == M || M(), (0, h.V1)(g.ZP.getCompatibleGuildFolders());
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
        ea = (0, i.jsxs)(Z.H, {
            children: [
                (0, i.jsx)(_.Z, {
                    disabled: J || s,
                    hovered: z,
                    selected: r,
                    unread: A,
                    className: N.pill
                }),
                (0, i.jsx)(I.Z, {
                    text: ee,
                    disabled: R,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: w ? K : void 0,
                        className: a()(S.folderIcon, { [N.wobble]: !J && q && !s }),
                        'data-dnd-name': ee,
                        children: J
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(v.Z, {
                                  folderNode: t,
                                  expanded: s,
                                  forceCircular: T,
                                  sorting: R,
                                  mediaState: d,
                                  mentionCount: m,
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
                w
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
            w && s
                ? (0, i.jsx)(C.Zu, {
                      name: ee,
                      targetNode: t
                  })
                : null
        ]
    });
}
