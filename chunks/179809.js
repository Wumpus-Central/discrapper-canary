n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(562075),
    a = n(524979),
    c = n(91192),
    u = n(866442),
    d = n(477690),
    h = n(481060),
    p = n(153867),
    f = n(591146),
    g = n(771845),
    m = n(624138),
    b = n(727258),
    O = n(276952),
    y = n(199540),
    _ = n(40153),
    v = n(252686),
    C = n(682662),
    j = n(662146),
    S = n(981631),
    x = n(388032),
    E = n(728492),
    P = n(335426);
let I = (0, m.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, a.animated)(h.Kqy),
    w = i.memo(function (e) {
        let { folderNode: t, setNodeRef: n, selected: l, expanded: a, mediaState: d, mentionCount: m = 0, isMentionLowImportance: w, unread: Z = !1, defaultFolderName: T, draggable: A = !1, sorting: R = !1, onDragStart: D, onDragEnd: L, onExpandCollapse: M, onContextMenu: k, renderChildNode: U, folderButtonSize: G, folderButtonContent: B, 'aria-setsize': V, 'aria-posinset': H } = e,
            { id: F, name: z, children: W } = t,
            [K, Y] = i.useState(!1),
            [q, Q] = i.useState(!1),
            X = K || q,
            J = (0, f.Ml)('FolderItem');
        i.useEffect(() => {
            R && Y(!1);
        }, [R]);
        let [{ dragging: $ }, ee] = (0, s.c)({
                type: b.eD.FOLDER,
                item: () => (
                    null == D || D(),
                    {
                        type: b.eD.FOLDER,
                        nodeId: t.id
                    }
                ),
                end() {
                    null == L || L(), (0, p.V1)(g.ZP.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() })
            }),
            et = i.useCallback((e) => {
                Q(e);
            }, []),
            en = i.useCallback(
                (e) => {
                    (('ArrowRight' === e.key && !a) || ('ArrowLeft' === e.key && a)) && M();
                },
                [M, a]
            ),
            er = null != z && '' !== z ? z : null != T && '' !== T ? T : x.intl.string(x.t.xV9hVl),
            ei = (0, c.Ie)(''.concat(F)),
            el = 'folder-items-'.concat(F),
            eo = (function (e) {
                let t = (0, h.dQu)(h.TVs.modules.guildbar.FOLDER_SIZE),
                    n = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE),
                    r = (0, h.dQu)(h.TVs.space.SPACE_XS);
                return e * (n + r) - r + (r - (t - n) / 2) + (0, h.dQu)(h.TVs.space.SPACE_4);
            })(W.length),
            es = (0, h.Yzy)(!$ && a, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: I }
            }),
            ea = i.useCallback((e) => (null == n ? void 0 : n(F, e)), [n, F]),
            ec = (0, r.jsxs)(C.H, {
                children: [
                    (0, r.jsx)(O.Z, {
                        disabled: $ || a,
                        hovered: K,
                        selected: l,
                        unread: Z,
                        className: P.pill
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
                            className: o()(E.folderHeader, {
                                [E.folderHeaderSmall]: 'icon' === G || J,
                                [P.wobble]: !$ && q && !a
                            }),
                            'data-dnd-name': er,
                            children: $
                                ? (0, r.jsx)(v.Z, { isFolder: !0 })
                                : (0, r.jsx)(y.Z, {
                                      folderNode: t,
                                      expanded: a,
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
                                      'aria-setsize': V,
                                      'aria-posinset': H
                                  })
                        })
                    }),
                    A
                        ? (0, r.jsx)(_.ZP, {
                              name: er,
                              targetNode: t,
                              onDragOverChanged: et
                          })
                        : null
                ]
            }),
            eu = null != t.color ? t.color : S.Wyy,
            ed = eu === S.Wyy ? void 0 : (0, u.Rf)(eu);
        return (0, r.jsxs)('div', {
            ref: ea,
            className: o()(E.folderGroup, {
                [E.isExpanded]: a,
                [E.isHovering]: X
            }),
            style: { '--custom-folder-color': null != ed ? ed : '' },
            'data-drop-hovering': q,
            children: [
                !$ && a && (0, r.jsx)('span', { className: E.folderGroupBackground }),
                ec,
                es((e, n, i) => {
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
                                className: E.folderGuildsList,
                                style: { height: e.height.to((e) => e * eo) },
                                'aria-label': t.name,
                                children: W.map((t, n) => U(t, n, W.length, e.height))
                            },
                            l
                        )
                    );
                }),
                A && a
                    ? (0, r.jsx)(_.Zu, {
                          name: er,
                          targetNode: t
                      })
                    : null
            ]
        });
    });
