n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(17163),
    s = n(81239),
    c = n(91192),
    u = n(866442),
    d = n(477690),
    p = n(481060),
    f = n(153867),
    h = n(591146),
    g = n(771845),
    m = n(624138),
    b = n(727258),
    y = n(276952),
    v = n(199540),
    O = n(40153),
    j = n(252686),
    x = n(682662),
    C = n(662146),
    E = n(126134),
    S = n(388032),
    _ = n(829313),
    I = n(455802);
let P = (0, m.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    Z = (0, s.animated)(p.Kqy),
    N = i.memo(function (e) {
        let {
                folderNode: t,
                setNodeRef: n,
                selected: l,
                expanded: s,
                mediaState: d,
                mentionCount: m = 0,
                isMentionLowImportance: N,
                unread: T = !1,
                defaultFolderName: A,
                draggable: w = !1,
                sorting: R = !1,
                onDragStart: D,
                onDragEnd: M,
                onExpandCollapse: k,
                onContextMenu: L,
                renderChildNode: U,
                folderButtonSize: G,
                folderButtonContent: B,
                "aria-setsize": F,
                "aria-posinset": H,
            } = e,
            { id: V, name: z, children: W } = t,
            [K, Y] = i.useState(!1),
            [q, X] = i.useState(!1),
            Q = K || q,
            J = (0, h.Ml)("FolderItem");
        i.useEffect(() => {
            R && Y(!1);
        }, [R]);
        let [{ dragging: $ }, ee] = (0, o.c)({
                type: b.eD.FOLDER,
                item: () => (
                    null == D || D(),
                    {
                        type: b.eD.FOLDER,
                        nodeId: t.id,
                    }
                ),
                end() {
                    null == M || M(), (0, f.V1)(g.ZP.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            et = i.useCallback((e) => {
                X(e);
            }, []),
            en = i.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !s) || ("ArrowLeft" === e.key && s)) && k();
                },
                [k, s],
            ),
            er = null != z && "" !== z ? z : null != A && "" !== A ? A : S.intl.string(S.t.xV9hVh),
            ei = (0, c.Ie)("".concat(V)),
            el = "folder-items-".concat(V),
            ea = (function (e) {
                let t = (0, p.dQu)(p.TVs.modules.guildbar.FOLDER_SIZE),
                    n = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE),
                    r = (0, p.dQu)(p.TVs.space.SPACE_XS);
                return e * (n + r) - r + (r - (t - n) / 2) + (0, p.dQu)(p.TVs.space.SPACE_4);
            })(W.length),
            eo = (0, p.Yzy)(!$ && s, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: P },
            }),
            es = i.useCallback((e) => (null == n ? void 0 : n(V, e)), [n, V]),
            ec = (0, r.jsxs)(x.H, {
                children: [
                    (0, r.jsx)(y.Z, {
                        disabled: $ || s,
                        hovered: K,
                        selected: l,
                        unread: T,
                        className: I.pill,
                    }),
                    (0, r.jsx)(C.Z, {
                        text: er,
                        disabled: R,
                        selected: l,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: w
                                ? (e) => {
                                      ee(e);
                                  }
                                : void 0,
                            className: a()(_.folderHeader, {
                                [_.folderHeaderSmall]: "icon" === G || J,
                                [I.wobble]: !$ && q && !s,
                            }),
                            "data-dnd-name": er,
                            children: $
                                ? (0, r.jsx)(j.Z, { isFolder: !0 })
                                : (0, r.jsx)(v.Z, {
                                      folderNode: t,
                                      expanded: s,
                                      sorting: R,
                                      mediaState: d,
                                      mentionCount: m,
                                      isMentionLowImportance: N,
                                      tooltipName: er,
                                      folderGroupId: el,
                                      onClick: k,
                                      onContextMenu: L,
                                      onHoverChange: Y,
                                      onKeyDown: en,
                                      treeItemProps: ei,
                                      folderButtonContent: B,
                                      "aria-setsize": F,
                                      "aria-posinset": H,
                                  }),
                        }),
                    }),
                    w
                        ? (0, r.jsx)(O.ZP, {
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
                [_.isHovering]: Q,
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
                            Z,
                            {
                                id: el,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: _.folderGuildsList,
                                style: { height: e.height.to((e) => e * ea) },
                                "aria-label": t.name,
                                children: W.map((t, n) => U(t, n, W.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                w && s
                    ? (0, r.jsx)(O.Zu, {
                          name: er,
                          targetNode: t,
                      })
                    : null,
            ],
        });
    });
