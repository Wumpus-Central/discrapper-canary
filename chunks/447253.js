n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(263063),
    c = n(71393),
    u = n(65611),
    h = n(985018),
    A = n(211170);
function g(e) {
    let { guildId: t, animate: n } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t), [t]),
        s = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? (0, i.jsx)("div", { className: a()(A.VL, A.zU), children: (0, i.jsx)(o.EpV, { color: "currentColor" }) })
        : (0, i.jsx)(d.A, {
              guild: l,
              animate: n,
              size: d.A.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: A.VL,
              tabIndex: -1,
          });
}
function m(e) {
    let { folderNode: t, hovered: n, sorting: l } = e,
        { children: s } = t,
        r = n && l,
        d = (0, i.jsx)("div", {
            className: A.hJ,
            children: (0, i.jsx)("div", {
                className: A.Eh,
                children: (0, i.jsx)(o.sjq, { size: "sm", color: "currentColor" }),
            }),
        }),
        c = (0, i.jsx)("div", {
            className: A.qJ,
            children: (0, i.jsx)("div", {
                className: A.jg,
                children: s.slice(0, 4).map((e) => (0, i.jsx)(g, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", { "aria-hidden": !0, className: a()({ [A.NG]: r, [A.yd]: !r }), children: [!r && d, c] });
}
function p(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: s,
            mediaState: a,
            mentionCount: r = 0,
            isMentionLowImportance: d,
            tooltipName: c,
            folderGroupId: g,
            folderButtonContent: p,
            onClick: _,
            onContextMenu: x,
            onHoverChange: f,
            onKeyDown: E,
            treeItemProps: { onFocus: C, ...I },
            "aria-setsize": S,
            "aria-posinset": b,
        } = e,
        [N, T] = l.useState(!1),
        j = l.useCallback(() => {
            s || T(!0), f?.(!0);
        }, [s, f]),
        v = l.useCallback(() => {
            s || T(!1), f?.(!1);
        }, [s, f]),
        y = n || null == a ? null : (0, u.oi)(a),
        R =
            !n && r > 0
                ? (0, u.wN)(
                      r,
                      d ? o.LU0.colors.BACKGROUND_MOD_STRONG.css : o.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, i.jsx)(o.vN3, {
        children: (0, i.jsxs)(o.DUT, {
            className: A.H3,
            onClick: _,
            onContextMenu: x,
            onMouseEnter: j,
            onMouseLeave: v,
            onKeyDown: E,
            onFocus: C,
            focusProps: { enabled: !1 },
            ...I,
            role: "treeitem",
            "aria-setsize": S,
            "aria-posinset": b,
            "aria-expanded": n,
            "aria-owns": g,
            children: [
                (0, i.jsx)(o.AC4, {
                    children: h.intl.formatToPlainString(h.t["90/DwM"], { folderName: c, mentions: r }),
                }),
                (0, i.jsx)(o.Qk9, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: y,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, o.o6S)(r) },
                    children: (0, i.jsx)("div", {
                        className: A.vA,
                        children:
                            null != p
                                ? (0, i.jsx)("div", { className: A.hJ, children: p })
                                : (0, i.jsx)(m, { folderNode: t, hovered: N, sorting: s }),
                    }),
                }),
            ],
        }),
    });
}
