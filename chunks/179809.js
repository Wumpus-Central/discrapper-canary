(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(562075),
    s = n(405499),
    c = n(91192),
    u = n(866442),
    d = n(477690),
    h = n(481060),
    p = n(153867),
    f = n(591146),
    g = n(771845),
    m = n(624138),
    b = n(727258),
    _ = n(276952),
    O = n(199540),
    y = n(40153),
    v = n(252686),
    C = n(682662),
    j = n(662146),
    E = n(981631),
    S = n(388032),
    x = n(728492),
    I = n(335426);
let P = (0, m.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, s.animated)(h.Kqy),
    w = i.memo(function (e) {
        let { folderNode: t, setNodeRef: n, selected: l, expanded: s, mediaState: d, mentionCount: m = 0, isMentionLowImportance: w, unread: Z = !1, defaultFolderName: T, draggable: A = !1, sorting: R = !1, onDragStart: D, onDragEnd: L, onExpandCollapse: M, onContextMenu: k, renderChildNode: U, folderButtonSize: G, folderButtonContent: B, 'aria-setsize': F, 'aria-posinset': V } = e,
            { id: H, name: z, children: W } = t,
            [K, Y] = i.useState(!1),
            [q, X] = i.useState(!1),
            Q = K || q,
            J = (0, f.Ml)('FolderItem');
        i.useEffect(() => {
            R && Y(!1);
        }, [R]);
        let [{ dragging: $ }, ee] = (0, a.c)({
                type: b.eD.FOLDER,
                item: () => (
                    null == D || D(),
                    {
                        type: b.eD.FOLDER,
                        nodeId: t.id
                    }
                ),
                end() {
                    (null == L || L(), (0, p.V1)(g.ZP.getCompatibleGuildFolders()));
                },
                collect: (e) => ({ dragging: e.isDragging() })
            }),
            et = i.useCallback((e) => {
                X(e);
            }, []),
            en = i.useCallback(
                (e) => {
                    (('ArrowRight' === e.key && !s) || ('ArrowLeft' === e.key && s)) && M();
                },
                [M, s]
            ),
            er = null != z && '' !== z ? z : null != T && '' !== T ? T : S.intl.string(S.t.xV9hVl),
            ei = (0, c.Ie)(''.concat(H)),
            el = 'folder-items-'.concat(H),
            eo = (function (e) {
                let t = (0, h.dQu)(h.TVs.modules.guildbar.FOLDER_SIZE),
                    n = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE),
                    r = (0, h.dQu)(h.TVs.space.SPACE_XS);
                return e * (n + r) - r + (r - (t - n) / 2) + (0, h.dQu)(h.TVs.space.SPACE_4);
            })(W.length),
            ea = (0, h.Yzy)(!$ && s, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: P }
            }),
            es = i.useCallback((e) => (null == n ? void 0 : n(H, e)), [n, H]),
            ec = (0, r.jsxs)(C.H, {
                children: [
                    (0, r.jsx)(_.Z, {
                        disabled: $ || s,
                        hovered: K,
                        selected: l,
                        unread: Z,
                        className: I.pill
                    }),
                    (0, r.jsx)(j.Z, {
                        text: er,
                        disabled: R,
                        selected: l,
                        disableWrapper: !0,
                        children: (0, r.jsx)('div', {
                            ref: A
                                ? (e) => {
                                      ee(e);
                                  }
                                : void 0,
                            className: o()(x.folderHeader, {
                                [x.folderHeaderSmall]: 'icon' === G || J,
                                [I.wobble]: !$ && q && !s
                            }),
                            'data-dnd-name': er,
                            children: $
                                ? (0, r.jsx)(v.Z, { isFolder: !0 })
                                : (0, r.jsx)(O.Z, {
                                      folderNode: t,
                                      expanded: s,
                                      sorting: R,
                                      mediaState: d,
                                      mentionCount: m,
                                      isMentionLowImportance: w,
                                      tooltipName: er,
                                      folderGroupId: el,
                                      onClick: M,
                                      onContextMenu: k,
                                      onHoverChange: Y,
                                      onKeyDown: en,
                                      treeItemProps: ei,
                                      folderButtonContent: B,
                                      'aria-setsize': F,
                                      'aria-posinset': V
                                  })
                        })
                    }),
                    A
                        ? (0, r.jsx)(y.ZP, {
                              name: er,
                              targetNode: t,
                              onDragOverChanged: et
                          })
                        : null
                ]
            }),
            eu = null != t.color ? t.color : E.Wyy,
            ed = eu === E.Wyy ? void 0 : (0, u.Rf)(eu);
        return (0, r.jsxs)('div', {
            ref: es,
            className: o()(x.folderGroup, {
                [x.isExpanded]: s,
                [x.isHovering]: Q
            }),
            style: { '--custom-folder-color': null != ed ? ed : '' },
            'data-drop-hovering': q,
            children: [
                !$ && s && (0, r.jsx)('span', { className: x.folderGroupBackground }),
                ec,
                ea((e, n, i) => {
                    let { key: l } = i;
                    return (
                        n &&
                        (0, r.jsx)(
                            N,
                            {
                                id: el,
                                role: 'group',
                                as: 'ul',
                                gap: 'xs',
                                className: x.folderGuildsList,
                                style: { height: e.height.to((e) => e * eo) },
                                'aria-label': t.name,
                                children: W.map((t, n) => U(t, n, W.length, e.height))
                            },
                            l
                        )
                    );
                }),
                A && s
                    ? (0, r.jsx)(y.Zu, {
                          name: er,
                          targetNode: t
                      })
                    : null
            ]
        });
    });
