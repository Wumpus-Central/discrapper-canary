n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(602853),
    d = n(827734),
    c = n(695366),
    u = n(678708),
    h = n(187322),
    A = n(939249),
    _ = n(140735),
    m = n(862328),
    g = n(777666),
    p = n(263063),
    f = n(71393),
    E = n(65611),
    x = n(985018),
    I = n(273923);
function C(e) {
    let { guildId: t, animate: n } = e,
        l = (0, r.bG)([f.A], () => f.A.getGuild(t), [t]),
        s = (0, o.r)(d.A.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? (0, i.jsx)("div", { className: a()(I.VL, I.zU), children: (0, i.jsx)(c.E, { color: "currentColor" }) })
        : (0, i.jsx)(p.Ay, {
              guild: l,
              animate: n,
              size: p.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: I.VL,
              tabIndex: -1,
          });
}
function b(e) {
    let { folderNode: t, hovered: n, sorting: l } = e,
        { children: s } = t,
        r = n && l,
        o = (0, i.jsx)("div", {
            className: I.hJ,
            children: (0, i.jsx)("div", {
                className: I.Eh,
                children: (0, i.jsx)(u.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, i.jsx)("div", {
            className: I.qJ,
            children: (0, i.jsx)("div", {
                className: I.jg,
                children: s.slice(0, 4).map((e) => (0, i.jsx)(C, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", { "aria-hidden": !0, className: a()({ [I.NG]: r, [I.yd]: !r }), children: [!r && o, d] });
}
function N(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: s,
            mediaState: a,
            mentionCount: r = 0,
            isMentionLowImportance: o,
            tooltipName: c,
            folderGroupId: u,
            folderButtonContent: p,
            onClick: f,
            onContextMenu: C,
            onHoverChange: N,
            onKeyDown: S,
            treeItemProps: { onFocus: v, ...T },
            "aria-setsize": y,
            "aria-posinset": R,
        } = e,
        [j, L] = l.useState(!1),
        O = l.useCallback(() => {
            s || L(!0), N?.(!0);
        }, [s, N]),
        G = l.useCallback(() => {
            s || L(!1), N?.(!1);
        }, [s, N]),
        D = n || null == a ? null : (0, E.oi)(a),
        M =
            !n && r > 0
                ? (0, E.wN)(
                      r,
                      o ? d.A.colors.BACKGROUND_MOD_STRONG.css : d.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, i.jsx)(h.vN, {
        children: (0, i.jsxs)(A.D, {
            className: I.H3,
            onClick: f,
            onContextMenu: C,
            onMouseEnter: O,
            onMouseLeave: G,
            onKeyDown: S,
            onFocus: v,
            focusProps: { enabled: !1 },
            ...T,
            role: "treeitem",
            "aria-setsize": y,
            "aria-posinset": R,
            "aria-expanded": n,
            "aria-owns": u,
            children: [
                (0, i.jsx)(_.A, {
                    children: x.intl.formatToPlainString(x.t["90/DwM"], { folderName: c, mentions: r }),
                }),
                (0, i.jsx)(m.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: D,
                    lowerBadge: M,
                    lowerBadgeSize: { width: (0, g.o6)(r) },
                    children: (0, i.jsx)("div", {
                        className: I.vA,
                        children:
                            null != p
                                ? (0, i.jsx)("div", { className: I.hJ, children: p })
                                : (0, i.jsx)(b, { folderNode: t, hovered: j, sorting: s }),
                    }),
                }),
            ],
        }),
    });
}
