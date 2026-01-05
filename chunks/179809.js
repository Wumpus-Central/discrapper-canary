n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(17163),
    s = n(554916),
    c = n(91192),
    u = n(866442),
    d = n(477690),
    f = n(481060),
    h = n(153867),
    p = n(591146),
    g = n(771845),
    b = n(624138),
    m = n(727258),
    y = n(276952),
    O = n(199540),
    v = n(40153),
    j = n(252686),
    C = n(682662),
    x = n(662146),
    E = n(126134),
    S = n(388032),
    _ = n(829313),
    I = n(455802);
let P = (0, b.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, s.animated)(f.Kqy),
    Z = i.memo(function (e) {
        let {
                folderNode: t,
                setNodeRef: n,
                selected: l,
                expanded: s,
                mediaState: d,
                mentionCount: b = 0,
                isMentionLowImportance: Z,
                unread: w = !1,
                defaultFolderName: T,
                draggable: A = !1,
                sorting: R = !1,
                onDragStart: D,
                onDragEnd: M,
                onExpandCollapse: L,
                onContextMenu: k,
                renderChildNode: G,
                folderButtonSize: U,
                folderButtonContent: B,
                "aria-setsize": F,
                "aria-posinset": V,
            } = e,
            { id: H, name: W, children: z } = t,
            [K, Y] = i.useState(!1),
            [q, Q] = i.useState(!1),
            X = K || q,
            J = (0, p.Ml)("FolderItem");
        i.useEffect(() => {
            R && Y(!1);
        }, [R]);
        let [{ dragging: $ }, ee] = (0, o.c)({
                type: m.eD.FOLDER,
                item: () => (
                    null == D || D(),
                    {
                        type: m.eD.FOLDER,
                        nodeId: t.id,
                    }
                ),
                end() {
                    null == M || M(), (0, h.V1)(g.ZP.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            et = i.useCallback((e) => {
                Q(e);
            }, []),
            en = i.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !s) || ("ArrowLeft" === e.key && s)) && L();
                },
                [L, s],
            ),
            er = null != W && "" !== W ? W : null != T && "" !== T ? T : S.intl.string(S.t.xV9hVh),
            ei = (0, c.Ie)("".concat(H)),
            el = "folder-items-".concat(H),
            ea = (function (e) {
                let t = (0, f.dQu)(f.TVs.modules.guildbar.FOLDER_SIZE),
                    n = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
                    r = (0, f.dQu)(f.TVs.space.SPACE_XS);
                return e * (n + r) - r + (r - (t - n) / 2) + (0, f.dQu)(f.TVs.space.SPACE_4);
            })(z.length),
            eo = (0, f.Yzy)(!$ && s, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: P },
            }),
            es = i.useCallback((e) => (null == n ? void 0 : n(H, e)), [n, H]),
            ec = (0, r.jsxs)(C.H, {
                children: [
                    (0, r.jsx)(y.Z, {
                        disabled: $ || s,
                        hovered: K,
                        selected: l,
                        unread: w,
                        className: I.pill,
                    }),
                    (0, r.jsx)(x.Z, {
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
                            className: a()(_.folderHeader, {
                                [_.folderHeaderSmall]: "icon" === U || J,
                                [I.wobble]: !$ && q && !s,
                            }),
                            "data-dnd-name": er,
                            children: $
                                ? (0, r.jsx)(j.Z, { isFolder: !0 })
                                : (0, r.jsx)(O.Z, {
                                      folderNode: t,
                                      expanded: s,
                                      sorting: R,
                                      mediaState: d,
                                      mentionCount: b,
                                      isMentionLowImportance: Z,
                                      tooltipName: er,
                                      folderGroupId: el,
                                      onClick: L,
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
                        ? (0, r.jsx)(v.ZP, {
                              name: er,
                              targetNode: t,
                              onDragOverChanged: et,
                          })
                        : null,
                ],
            }),
            eu = null != t.color ? t.color : E.Wy,
            ed = eu === E.Wy ? void 0 : (0, u.Rf)(eu);
        return (0, r.jsxs)("div", {
            ref: es,
            className: a()(_.folderGroup, {
                [_.isExpanded]: s,
                [_.isHovering]: X,
            }),
            style: { "--custom-folder-color": null != ed ? ed : "" },
            "data-drop-hovering": q,
            children: [
                !$ && s && (0, r.jsx)("span", { className: _.folderGroupBackground }),
                ec,
                eo((e, n, i) => {
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
                                className: _.folderGuildsList,
                                style: { height: e.height.to((e) => e * ea) },
                                "aria-label": t.name,
                                children: z.map((t, n) => G(t, n, z.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                A && s
                    ? (0, r.jsx)(v.Zu, {
                          name: er,
                          targetNode: t,
                      })
                    : null,
            ],
        });
    });
