n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(891371),
    s = n(790519),
    c = n(91192),
    u = n(866442),
    d = n(477690),
    p = n(481060),
    h = n(153867),
    f = n(591146),
    g = n(771845),
    m = n(624138),
    b = n(727258),
    _ = n(276952),
    y = n(199540),
    O = n(40153),
    v = n(252686),
    j = n(682662),
    C = n(662146),
    x = n(981631),
    E = n(388032),
    S = n(106663),
    I = n(534175);
let P = (0, m.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, s.animated)(p.Kqy),
    Z = i.memo(function (e) {
        let {
                folderNode: t,
                setNodeRef: n,
                selected: l,
                expanded: s,
                mediaState: d,
                mentionCount: m = 0,
                isMentionLowImportance: Z,
                unread: w = !1,
                defaultFolderName: T,
                draggable: A = !1,
                sorting: R = !1,
                onDragStart: D,
                onDragEnd: L,
                onExpandCollapse: M,
                onContextMenu: k,
                renderChildNode: G,
                folderButtonSize: U,
                folderButtonContent: B,
                "aria-setsize": F,
                "aria-posinset": V,
            } = e,
            { id: H, name: z, children: W } = t,
            [K, Y] = i.useState(!1),
            [q, X] = i.useState(!1),
            Q = K || q,
            J = (0, f.Ml)("FolderItem");
        i.useEffect(() => {
            R && Y(!1);
        }, [R]);
        let [{ dragging: $ }, ee] = (0, a.c)({
                type: b.eD.FOLDER,
                item: () => (
                    null == D || D(),
                    {
                        type: b.eD.FOLDER,
                        nodeId: t.id,
                    }
                ),
                end() {
                    null == L || L(), (0, h.V1)(g.ZP.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            et = i.useCallback((e) => {
                X(e);
            }, []),
            en = i.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !s) || ("ArrowLeft" === e.key && s)) && M();
                },
                [M, s],
            ),
            er = null != z && "" !== z ? z : null != T && "" !== T ? T : E.intl.string(E.t.xV9hVh),
            ei = (0, c.Ie)("".concat(H)),
            el = "folder-items-".concat(H),
            eo = (function (e) {
                let t = (0, p.dQu)(p.TVs.modules.guildbar.FOLDER_SIZE),
                    n = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE),
                    r = (0, p.dQu)(p.TVs.space.SPACE_XS);
                return e * (n + r) - r + (r - (t - n) / 2) + (0, p.dQu)(p.TVs.space.SPACE_4);
            })(W.length),
            ea = (0, p.Yzy)(!$ && s, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: P },
            }),
            es = i.useCallback((e) => (null == n ? void 0 : n(H, e)), [n, H]),
            ec = (0, r.jsxs)(j.H, {
                children: [
                    (0, r.jsx)(_.Z, {
                        disabled: $ || s,
                        hovered: K,
                        selected: l,
                        unread: w,
                        className: I.pill,
                    }),
                    (0, r.jsx)(C.Z, {
                        text: er,
                        disabled: R,
                        selected: l,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: A
                                ? (e) => {
                                      ee(e);
                                  }
                                : void 0,
                            className: o()(S.folderHeader, {
                                [S.folderHeaderSmall]: "icon" === U || J,
                                [I.wobble]: !$ && q && !s,
                            }),
                            "data-dnd-name": er,
                            children: $
                                ? (0, r.jsx)(v.Z, { isFolder: !0 })
                                : (0, r.jsx)(y.Z, {
                                      folderNode: t,
                                      expanded: s,
                                      sorting: R,
                                      mediaState: d,
                                      mentionCount: m,
                                      isMentionLowImportance: Z,
                                      tooltipName: er,
                                      folderGroupId: el,
                                      onClick: M,
                                      onContextMenu: k,
                                      onHoverChange: Y,
                                      onKeyDown: en,
                                      treeItemProps: ei,
                                      folderButtonContent: B,
                                      "aria-setsize": F,
                                      "aria-posinset": V,
                                  }),
                        }),
                    }),
                    A
                        ? (0, r.jsx)(O.ZP, {
                              name: er,
                              targetNode: t,
                              onDragOverChanged: et,
                          })
                        : null,
                ],
            }),
            eu = null != t.color ? t.color : x.Wyy,
            ed = eu === x.Wyy ? void 0 : (0, u.Rf)(eu);
        return (0, r.jsxs)("div", {
            ref: es,
            className: o()(S.folderGroup, {
                [S.isExpanded]: s,
                [S.isHovering]: Q,
            }),
            style: { "--custom-folder-color": null != ed ? ed : "" },
            "data-drop-hovering": q,
            children: [
                !$ && s && (0, r.jsx)("span", { className: S.folderGroupBackground }),
                ec,
                ea((e, n, i) => {
                    let { key: l } = i;
                    return (
                        n &&
                        (0, r.jsx)(
                            N,
                            {
                                id: el,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: S.folderGuildsList,
                                style: { height: e.height.to((e) => e * eo) },
                                "aria-label": t.name,
                                children: W.map((t, n) => G(t, n, W.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                A && s
                    ? (0, r.jsx)(O.Zu, {
                          name: er,
                          targetNode: t,
                      })
                    : null,
            ],
        });
    });
