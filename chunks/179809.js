n.d(t, { Z: () => I }), n(388685);
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
    _ = n(199540),
    y = n(40153),
    v = n(252686),
    O = n(682662),
    C = n(662146),
    S = n(388032),
    j = n(728492),
    E = n(335426);
let x = (0, g.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, a.animated)(d.Kqy),
    I = i.memo(function (e) {
        let { folderNode: t, setNodeRef: n, selected: l, expanded: a, mediaState: u, mentionCount: g = 0, isMentionLowImportance: I, unread: P = !1, defaultFolderName: w, useCircleMask: Z = !1, draggable: T = !1, sorting: A = !1, onDragStart: R, onDragEnd: D, onExpandCollapse: L, onContextMenu: k, renderChildNode: M, folderIconContent: U, folderIconContentClassName: G } = e,
            { id: B, name: W, children: V } = t,
            H = (0, p.Q3)('FolderItem'),
            [F, z] = i.useState(!1),
            [Y, K] = i.useState(!1),
            q = F || Y;
        i.useEffect(() => {
            A && z(!1);
        }, [A]);
        let [{ dragging: Q }, X] = (0, s.c)({
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
            J = i.useCallback((e) => {
                K(e);
            }, []),
            $ = i.useCallback(
                (e) => {
                    (('ArrowRight' === e.key && !a) || ('ArrowLeft' === e.key && a)) && L();
                },
                [L, a]
            ),
            ee = null != W && '' !== W ? W : null != w && '' !== w ? w : S.NW.string(S.t.xV9hVl),
            et = (0, c.Ie)(''.concat(B)),
            en = 'folder-items-'.concat(B),
            er = (function (e) {
                let t = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE),
                    n = (0, p.Q3)('FolderItem.useHeight'),
                    r = (0, d.dQu)(d.TVs.space.SPACE_XS),
                    i = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE),
                    l = (0, d.dQu)(d.TVs.modules.guildbar.FOLDER_SIZE),
                    o = n ? r : 8;
                return e * (t + o) + (n ? (l - i) / 2 - o : 0);
            })(V.length),
            ei = (0, d.Yzy)(!Q && a, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: x }
            }),
            el = i.useCallback((e) => (null == n ? void 0 : n(B, e)), [n, B]),
            eo = (0, r.jsxs)(O.H, {
                children: [
                    (0, r.jsx)(b.Z, {
                        disabled: Q || a,
                        hovered: F,
                        selected: l,
                        unread: P,
                        className: E.pill
                    }),
                    (0, r.jsx)(C.Z, {
                        text: ee,
                        disabled: A,
                        selected: l,
                        disableWrapper: !0,
                        children: (0, r.jsx)('div', {
                            ref: T
                                ? (e) => {
                                      X(e);
                                  }
                                : void 0,
                            className: o()(j.folderIcon, { [E.wobble]: !Q && Y && !a }),
                            'data-dnd-name': ee,
                            children: Q
                                ? (0, r.jsx)(v.Z, {})
                                : (0, r.jsx)(_.Z, {
                                      folderNode: t,
                                      expanded: a,
                                      forceCircular: Z,
                                      sorting: A,
                                      mediaState: u,
                                      mentionCount: g,
                                      isMentionLowImportance: I,
                                      tooltipName: ee,
                                      folderGroupId: en,
                                      onClick: L,
                                      onContextMenu: k,
                                      onHoverChange: z,
                                      onKeyDown: $,
                                      treeItemProps: et,
                                      folderIconContentClassName: G,
                                      folderIconContent: U
                                  })
                        })
                    }),
                    T
                        ? (0, r.jsx)(y.ZP, {
                              name: ee,
                              targetNode: t,
                              onDragOverChanged: J
                          })
                        : null
                ]
            });
        return (0, r.jsxs)('div', {
            ref: el,
            className: o()(j.wrapper, a && j.isExpanded),
            'data-drop-hovering': Y,
            children: [
                !Q &&
                    a &&
                    (0, r.jsx)('span', {
                        className: o()(j.expandedFolderBackground, {
                            [j.collapsed]: !a,
                            [j.hover]: q
                        })
                    }),
                eo,
                ei((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            N,
                            {
                                as: 'ul',
                                gap: H ? 'xs' : 0,
                                id: en,
                                style: {
                                    height: e.height.to((e) => e * er),
                                    overflow: 'hidden'
                                },
                                role: 'group',
                                children: V.map((t) => M(t, e.height))
                            },
                            i
                        )
                    );
                }),
                T && a
                    ? (0, r.jsx)(y.Zu, {
                          name: ee,
                          targetNode: t
                      })
                    : null
            ]
        });
    });
