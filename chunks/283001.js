n.d(t, { A: () => $ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(126600),
    o = n(837381),
    d = n(317097),
    c = n(319060),
    u = n(602853),
    _ = n(646514),
    E = n(331322),
    A = n(866323),
    h = n(817281),
    f = n(717117),
    I = n(534409),
    p = n(711014),
    m = n(240248),
    T = n(263715),
    g = n(941971),
    S = n(855986),
    N = n(695366),
    C = n(678708),
    O = n(559106),
    R = n(939249),
    L = n(140735),
    y = n(862328),
    D = n(812993),
    b = n(947832),
    v = n(682163),
    P = n(71393),
    M = n(771640),
    U = n(792996),
    w = n(327580);
function G(e) {
    let { guildId: t, animate: n } = e,
        r = (0, S.bG)([P.A], () => P.A.getGuild(t), [t]),
        a = (0, u.r)(_.A.modules.guildbar.AVATAR_SIZE);
    return null == r
        ? (0, i.jsx)("div", { className: s()(w.VL, w.zU), children: (0, i.jsx)(N.E, { color: "currentColor" }) })
        : (0, i.jsx)(v.Ay, {
              guild: r,
              animate: n,
              size: v.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: w.VL,
              tabIndex: -1,
          });
}
function x(e) {
    let { folderNode: t, hovered: n, sorting: r } = e,
        { children: a } = t,
        l = n && r,
        o = (0, i.jsx)("div", {
            className: w.hJ,
            children: (0, i.jsx)("div", {
                className: w.Eh,
                children: (0, i.jsx)(C.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, i.jsx)("div", {
            className: w.qJ,
            children: (0, i.jsx)("div", {
                className: w.jg,
                children: a.slice(0, 4).map((e) => (0, i.jsx)(G, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", { "aria-hidden": !0, className: s()({ [w.NG]: l, [w.yd]: !l }), children: [!l && o, d] });
}
function k(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: a,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            conjureOnlyMentions: d = !1,
            tooltipName: c,
            folderGroupId: u,
            folderButtonContent: E,
            onClick: A,
            onContextMenu: h,
            onHoverChange: f,
            onKeyDown: I,
            treeItemProps: { onFocus: p, ...m },
            "aria-setsize": T,
            "aria-posinset": g,
        } = e,
        [S, N] = r.useState(!1),
        C = r.useCallback(() => {
            (a || N(!0), f?.(!0));
        }, [a, f]),
        v = r.useCallback(() => {
            (a || N(!1), f?.(!1));
        }, [a, f]),
        P = n || null == s ? null : (0, M.oi)(s),
        G = null;
    return (
        !n &&
            l > 0 &&
            (G = d
                ? (0, i.jsx)(b.A, { count: l })
                : (0, M.wN)(
                      l,
                      o ? _.A.colors.BACKGROUND_MOD_STRONG.css : _.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )),
        (0, i.jsx)(O.vN, {
            children: (0, i.jsxs)(R.D, {
                className: w.H3,
                onClick: A,
                onContextMenu: h,
                onMouseEnter: C,
                onMouseLeave: v,
                onKeyDown: I,
                onFocus: p,
                focusProps: { enabled: !1 },
                ...m,
                role: "treeitem",
                "aria-setsize": T,
                "aria-posinset": g,
                "aria-expanded": n,
                "aria-owns": u,
                children: [
                    (0, i.jsx)(L.A, {
                        children: U.intl.formatToPlainString(U.t["90/DwM"], { folderName: c, mentions: l }),
                    }),
                    (0, i.jsx)(y.Q, {
                        "aria-hidden": !0,
                        isFolder: !0,
                        upperBadge: P,
                        lowerBadge: G,
                        lowerBadgeSize: { width: (0, D.o6)(l) },
                        children: (0, i.jsx)("div", {
                            className: w.vA,
                            children:
                                null != E
                                    ? (0, i.jsx)("div", { className: w.hJ, children: E })
                                    : (0, i.jsx)(x, { folderNode: t, hovered: S, sorting: a }),
                        }),
                    }),
                ],
            }),
        })
    );
}
var F = n(531053),
    B = n(107385),
    V = n(900848),
    H = n(550591),
    j = n(114329),
    W = n(937067);
let Y = (0, m.xI)(c.A.FOLDER_ITEM_ANIMATION_DURATION),
    K = (0, f.P)(E.B),
    $ = r.memo(function (e) {
        var t;
        let n,
            a,
            c,
            {
                folderNode: E,
                setNodeRef: f,
                selected: m,
                expanded: S,
                mediaState: N,
                mentionCount: C = 0,
                isMentionLowImportance: O,
                conjureOnlyMentions: R = !1,
                unread: L = !1,
                defaultFolderName: y,
                draggable: D = !1,
                sorting: b = !1,
                onDragStart: v,
                onDragEnd: P,
                onExpandCollapse: M,
                onHeaderClick: G,
                onContextMenu: x,
                renderChildNode: $,
                folderButtonSize: z,
                folderButtonContent: X,
                "aria-setsize": q,
                "aria-posinset": Z,
            } = e,
            { id: Q, name: J, children: ee } = E,
            [et, en] = r.useState(!1),
            [ei, er] = r.useState(!1),
            ea = et || ei,
            es = (0, I.qK)("FolderItem");
        r.useEffect(() => {
            b && en(!1);
        }, [b]);
        let [{ dragging: el }, eo] = (0, l.i)({
                type: T.PJ.FOLDER,
                item: () => (v?.(), { type: T.PJ.FOLDER, nodeId: E.id }),
                end() {
                    (P?.(), (0, h.um)(p.Ay.getCompatibleGuildFolders()));
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            ed = r.useCallback((e) => {
                er(e);
            }, []),
            ec = r.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !S) || ("ArrowLeft" === e.key && S)) && M();
                },
                [M, S],
            ),
            eu = null != J && "" !== J ? J : null != y && "" !== y ? y : U.intl.string(U.t.xV9hVh),
            e_ = (0, o.Vd)(`${Q}`),
            eE = `folder-items-${Q}`,
            eA =
                ((t = ee.length),
                (n = (0, u.r)(_.A.modules.guildbar.FOLDER_SIZE)),
                (a = (0, u.r)(_.A.modules.guildbar.AVATAR_SIZE)),
                t * (a + (c = (0, u.r)(_.A.space.SPACE_XS))) - c + (c - (n - a) / 2) + (0, u.r)(_.A.space.SPACE_4)),
            eh = (0, A.p)(!el && S, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: Y },
            }),
            ef = r.useCallback((e) => f?.(Q, e), [f, Q]),
            eI = (0, i.jsxs)(V.c, {
                children: [
                    (0, i.jsx)(g.A, {
                        overlay: !0,
                        disabled: el || (S && null == G),
                        hovered: et,
                        selected: m,
                        unread: L,
                    }),
                    (0, i.jsx)(H.A, {
                        text: eu,
                        disabled: b,
                        selected: m,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: D
                                ? (e) => {
                                      eo(e);
                                  }
                                : void 0,
                            className: s()(w.MJ, { [w.L0]: "icon" === z || es, [W.oR]: !el && ei && !S }),
                            "data-dnd-name": eu,
                            children: el
                                ? (0, i.jsx)(B.A, { isFolder: !0 })
                                : (0, i.jsx)(k, {
                                      folderNode: E,
                                      expanded: S,
                                      sorting: b,
                                      mediaState: N,
                                      mentionCount: C,
                                      isMentionLowImportance: O,
                                      conjureOnlyMentions: R,
                                      tooltipName: eu,
                                      folderGroupId: eE,
                                      onClick: G ?? M,
                                      onContextMenu: x,
                                      onHoverChange: en,
                                      onKeyDown: ec,
                                      treeItemProps: e_,
                                      folderButtonContent: X,
                                      "aria-setsize": q,
                                      "aria-posinset": Z,
                                  }),
                        }),
                    }),
                    D ? (0, i.jsx)(F.Ay, { name: eu, targetNode: E, onDragOverChanged: ed }) : null,
                ],
            }),
            ep = (0, j.rk)(E.color),
            em = null != ep ? (0, d.Hl)(ep) : void 0;
        return (0, i.jsxs)("div", {
            ref: ef,
            className: s()(w.qc, { [w.Av]: S, [w.Lg]: ea }),
            style: { "--custom-folder-color": em ?? "" },
            "data-drop-hovering": ei,
            children: [
                !el && S && (0, i.jsx)("span", { className: w.GO }),
                eI,
                eh((e, t, n) => {
                    let { key: r } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            K,
                            {
                                id: eE,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: w.TN,
                                style: { height: e.height.to((e) => e * eA) },
                                "aria-label": E.name,
                                children: ee.map((t, n) => $(t, n, ee.length, e.height)),
                            },
                            r,
                        )
                    );
                }),
                D && S ? (0, i.jsx)(F.qv, { name: eu, targetNode: E }) : null,
            ],
        });
    });
