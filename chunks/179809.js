n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(999153),
    a = n(200100),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(540059),
    f = n(771845),
    g = n(624138),
    m = n(727258),
    b = n(276952),
    y = n(199540),
    _ = n(40153),
    v = n(252686),
    O = n(682662),
    C = n(662146),
    S = n(388032),
    j = n(909698),
    E = n(815537);
let x = (0, g.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    I = (0, a.animated)(d.Kqy),
    N = i.memo(function (e) {
        let { folderNode: t, setNodeRef: n, selected: l, expanded: a, mediaState: u, mentionCount: g = 0, isMentionLowImportance: N, unread: P = !1, defaultFolderName: w, useCircleMask: Z = !1, draggable: T = !1, sorting: A = !1, onDragStart: R, onDragEnd: D, onExpandCollapse: L, onContextMenu: k, renderChildNode: M, folderIconContent: U, folderIconContentClassName: G, 'aria-setsize': B, 'aria-posinset': W } = e,
            { id: V, name: H, children: F } = t,
            [z, Y] = i.useState(!1),
            [K, q] = i.useState(!1),
            Q = z || K;
        i.useEffect(() => {
            A && Y(!1);
        }, [A]);
        let [{ dragging: X }, J] = (0, s.c)({
                type: m.eD.FOLDER,
                item: () => (
                    null == R || R(),
                    {
                        type: m.eD.FOLDER,
                        nodeId: t.id
                    }
                ),
                end() {
                    null == D || D(), (0, h.V1)(f.ZP.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() })
            }),
            $ = i.useCallback((e) => {
                q(e);
            }, []),
            ee = i.useCallback(
                (e) => {
                    (('ArrowRight' === e.key && !a) || ('ArrowLeft' === e.key && a)) && L();
                },
                [L, a]
            ),
            et = null != H && '' !== H ? H : null != w && '' !== w ? w : S.NW.string(S.t.xV9hVl),
            en = (0, c.Ie)(''.concat(V)),
            er = 'folder-items-'.concat(V),
            ei = (function (e) {
                let t = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE),
                    n = (0, p.Q3)('FolderItem.useHeight'),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XS),
                    i = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE),
                    l = (0, d.dQu)(d.TVs.modules.guildbar.FOLDER_SIZE),
                    o = n ? r : 8;
                return e * (t + o) + (n ? (l - i) / 2 - o : 0);
            })(F.length),
            el = (0, d.Yzy)(!X && a, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: x }
            }),
            eo = i.useCallback((e) => (null == n ? void 0 : n(V, e)), [n, V]),
            es = (0, r.jsxs)(O.H, {
                children: [
                    (0, r.jsx)(b.Z, {
                        disabled: X || a,
                        hovered: z,
                        selected: l,
                        unread: P,
                        className: E.pill
                    }),
                    (0, r.jsx)(C.Z, {
                        text: et,
                        disabled: A,
                        selected: l,
                        disableWrapper: !0,
                        children: (0, r.jsx)('div', {
                            ref: T
                                ? (e) => {
                                      J(e);
                                  }
                                : void 0,
                            className: o()(j.folderIcon, { [E.wobble]: !X && K && !a }),
                            'data-dnd-name': et,
                            children: X
                                ? (0, r.jsx)(v.Z, {})
                                : (0, r.jsx)(y.Z, {
                                      folderNode: t,
                                      expanded: a,
                                      forceCircular: Z,
                                      sorting: A,
                                      mediaState: u,
                                      mentionCount: g,
                                      isMentionLowImportance: N,
                                      tooltipName: et,
                                      folderGroupId: er,
                                      onClick: L,
                                      onContextMenu: k,
                                      onHoverChange: Y,
                                      onKeyDown: ee,
                                      treeItemProps: en,
                                      folderIconContentClassName: G,
                                      folderIconContent: U,
                                      'aria-setsize': B,
                                      'aria-posinset': W
                                  })
                        })
                    }),
                    T
                        ? (0, r.jsx)(_.ZP, {
                              name: et,
                              targetNode: t,
                              onDragOverChanged: $
                          })
                        : null
                ]
            });
        return (0, r.jsxs)('div', {
            ref: eo,
            className: o()(j.wrapper, a && j.isExpanded),
            'data-drop-hovering': K,
            children: [
                !X &&
                    a &&
                    (0, r.jsx)('span', {
                        className: o()(j.expandedFolderBackground, {
                            [j.collapsed]: !a,
                            [j.hover]: Q
                        })
                    }),
                es,
                el((e, n, i) => {
                    let { key: l } = i;
                    return (
                        n &&
                        (0, r.jsx)(
                            I,
                            {
                                as: 'ul',
                                gap: 'xs',
                                id: er,
                                style: {
                                    height: e.height.to((e) => e * ei),
                                    overflow: 'hidden'
                                },
                                role: 'group',
                                'aria-label': t.name,
                                children: F.map((t, n) => M(t, n, F.length, e.height))
                            },
                            l
                        )
                    );
                }),
                T && a
                    ? (0, r.jsx)(_.Zu, {
                          name: et,
                          targetNode: t
                      })
                    : null
            ]
        });
    });
