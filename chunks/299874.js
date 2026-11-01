n.d(t, { A: () => K });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(739822),
    o = n(837381),
    d = n(317097),
    c = n(319060),
    u = n(602853),
    _ = n(661531),
    E = n(331322),
    A = n(866323),
    h = n(817281),
    f = n(717117),
    I = n(534409),
    p = n(711014),
    T = n(240248),
    m = n(263715),
    g = n(941971),
    S = n(17928),
    N = n(695366),
    C = n(678708),
    O = n(559106),
    R = n(939249),
    L = n(140735),
    y = n(862328),
    D = n(812993),
    v = n(548118),
    b = n(71393),
    P = n(771640),
    M = n(105292),
    U = n(327580);
function w(e) {
    let { guildId: t, animate: n } = e,
        r = (0, S.bG)([b.A], () => b.A.getGuild(t), [t]),
        a = (0, u.r)(_.A.modules.guildbar.AVATAR_SIZE);
    return null == r
        ? (0, i.jsx)("div", { className: s()(U.VL, U.zU), children: (0, i.jsx)(N.E, { color: "currentColor" }) })
        : (0, i.jsx)(v.Ay, {
              guild: r,
              animate: n,
              size: v.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: U.VL,
              tabIndex: -1,
          });
}
function G(e) {
    let { folderNode: t, hovered: n, sorting: r } = e,
        { children: a } = t,
        l = n && r,
        o = (0, i.jsx)("div", {
            className: U.hJ,
            children: (0, i.jsx)("div", {
                className: U.Eh,
                children: (0, i.jsx)(C.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, i.jsx)("div", {
            className: U.qJ,
            children: (0, i.jsx)("div", {
                className: U.jg,
                children: a.slice(0, 4).map((e) => (0, i.jsx)(w, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", { "aria-hidden": !0, className: s()({ [U.NG]: l, [U.yd]: !l }), children: [!l && o, d] });
}
function x(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: a,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: E,
            onContextMenu: A,
            onHoverChange: h,
            onKeyDown: f,
            treeItemProps: { onFocus: I, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = r.useState(!1),
        N = r.useCallback(() => {
            (a || S(!0), h?.(!0));
        }, [a, h]),
        C = r.useCallback(() => {
            (a || S(!1), h?.(!1));
        }, [a, h]),
        v = n || null == s ? null : (0, P.oi)(s),
        b =
            !n && l > 0
                ? (0, P.wN)(
                      l,
                      o ? _.A.colors.BACKGROUND_MOD_STRONG.css : _.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, i.jsx)(O.vN, {
        children: (0, i.jsxs)(R.D, {
            className: U.H3,
            onClick: E,
            onContextMenu: A,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: f,
            onFocus: I,
            focusProps: { enabled: !1 },
            ...p,
            role: "treeitem",
            "aria-setsize": T,
            "aria-posinset": m,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, i.jsx)(L.A, {
                    children: M.intl.formatToPlainString(M.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, i.jsx)(y.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: v,
                    lowerBadge: b,
                    lowerBadgeSize: { width: (0, D.o6)(l) },
                    children: (0, i.jsx)("div", {
                        className: U.vA,
                        children:
                            null != u
                                ? (0, i.jsx)("div", { className: U.hJ, children: u })
                                : (0, i.jsx)(G, { folderNode: t, hovered: g, sorting: a }),
                    }),
                }),
            ],
        }),
    });
}
var k = n(531053),
    F = n(107385),
    B = n(900848),
    V = n(550591),
    H = n(114329),
    j = n(937067);
let W = (0, T.xI)(c.A.FOLDER_ITEM_ANIMATION_DURATION),
    Y = (0, f.P)(E.B),
    K = r.memo(function (e) {
        var t;
        let n,
            a,
            c,
            {
                folderNode: E,
                setNodeRef: f,
                selected: T,
                expanded: S,
                mediaState: N,
                mentionCount: C = 0,
                isMentionLowImportance: O,
                unread: R = !1,
                defaultFolderName: L,
                draggable: y = !1,
                sorting: D = !1,
                onDragStart: v,
                onDragEnd: b,
                onExpandCollapse: P,
                onHeaderClick: w,
                onContextMenu: G,
                renderChildNode: K,
                folderButtonSize: $,
                folderButtonContent: z,
                "aria-setsize": X,
                "aria-posinset": q,
            } = e,
            { id: Z, name: Q, children: J } = E,
            [ee, et] = r.useState(!1),
            [en, ei] = r.useState(!1),
            er = ee || en,
            ea = (0, I.qK)("FolderItem");
        r.useEffect(() => {
            D && et(!1);
        }, [D]);
        let [{ dragging: es }, el] = (0, l.i)({
                type: m.PJ.FOLDER,
                item: () => (v?.(), { type: m.PJ.FOLDER, nodeId: E.id }),
                end() {
                    (b?.(), (0, h.um)(p.Ay.getCompatibleGuildFolders()));
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            eo = r.useCallback((e) => {
                ei(e);
            }, []),
            ed = r.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !S) || ("ArrowLeft" === e.key && S)) && P();
                },
                [P, S],
            ),
            ec = null != Q && "" !== Q ? Q : null != L && "" !== L ? L : M.intl.string(M.t.xV9hVh),
            eu = (0, o.Vd)(`${Z}`),
            e_ = `folder-items-${Z}`,
            eE =
                ((t = J.length),
                (n = (0, u.r)(_.A.modules.guildbar.FOLDER_SIZE)),
                (a = (0, u.r)(_.A.modules.guildbar.AVATAR_SIZE)),
                t * (a + (c = (0, u.r)(_.A.space.SPACE_XS))) - c + (c - (n - a) / 2) + (0, u.r)(_.A.space.SPACE_4)),
            eA = (0, A.p)(!es && S, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: W },
            }),
            eh = r.useCallback((e) => f?.(Z, e), [f, Z]),
            ef = (0, i.jsxs)(B.c, {
                children: [
                    (0, i.jsx)(g.A, {
                        overlay: !0,
                        disabled: es || (S && null == w),
                        hovered: ee,
                        selected: T,
                        unread: R,
                    }),
                    (0, i.jsx)(V.A, {
                        text: ec,
                        disabled: D,
                        selected: T,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: y
                                ? (e) => {
                                      el(e);
                                  }
                                : void 0,
                            className: s()(U.MJ, { [U.L0]: "icon" === $ || ea, [j.oR]: !es && en && !S }),
                            "data-dnd-name": ec,
                            children: es
                                ? (0, i.jsx)(F.A, { isFolder: !0 })
                                : (0, i.jsx)(x, {
                                      folderNode: E,
                                      expanded: S,
                                      sorting: D,
                                      mediaState: N,
                                      mentionCount: C,
                                      isMentionLowImportance: O,
                                      tooltipName: ec,
                                      folderGroupId: e_,
                                      onClick: w ?? P,
                                      onContextMenu: G,
                                      onHoverChange: et,
                                      onKeyDown: ed,
                                      treeItemProps: eu,
                                      folderButtonContent: z,
                                      "aria-setsize": X,
                                      "aria-posinset": q,
                                  }),
                        }),
                    }),
                    y ? (0, i.jsx)(k.Ay, { name: ec, targetNode: E, onDragOverChanged: eo }) : null,
                ],
            }),
            eI = (0, H.rk)(E.color),
            ep = null != eI ? (0, d.Hl)(eI) : void 0;
        return (0, i.jsxs)("div", {
            ref: eh,
            className: s()(U.qc, { [U.Av]: S, [U.Lg]: er }),
            style: { "--custom-folder-color": ep ?? "" },
            "data-drop-hovering": en,
            children: [
                !es && S && (0, i.jsx)("span", { className: U.GO }),
                ef,
                eA((e, t, n) => {
                    let { key: r } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            Y,
                            {
                                id: e_,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: U.TN,
                                style: { height: e.height.to((e) => e * eE) },
                                "aria-label": E.name,
                                children: J.map((t, n) => K(t, n, J.length, e.height)),
                            },
                            r,
                        )
                    );
                }),
                y && S ? (0, i.jsx)(k.qv, { name: ec, targetNode: E }) : null,
            ],
        });
    });
