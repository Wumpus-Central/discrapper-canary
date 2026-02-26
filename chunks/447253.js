"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(263063),
    d = n(71393),
    u = n(65611),
    h = n(985018),
    A = n(584352);
function p(e) {
    let { guildId: t, animate: n } = e,
        s = (0, a.bG)([d.A], () => d.A.getGuild(t), [t]),
        l = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return null == s
        ? (0, i.jsx)("div", { className: r()(A.VL, A.zU), children: (0, i.jsx)(o.EpV, { color: "currentColor" }) })
        : (0, i.jsx)(c.Ay, {
              guild: s,
              animate: n,
              size: c.Ay.Sizes.MINI,
              iconSize: l,
              lossless: !0,
              className: A.VL,
              tabIndex: -1,
          });
}
function g(e) {
    let { folderNode: t, hovered: n, sorting: s } = e,
        { children: l } = t,
        a = n && s,
        c = (0, i.jsx)("div", {
            className: A.hJ,
            children: (0, i.jsx)("div", {
                className: A.Eh,
                children: (0, i.jsx)(o.sjq, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, i.jsx)("div", {
            className: A.qJ,
            children: (0, i.jsx)("div", {
                className: A.jg,
                children: l.slice(0, 4).map((e) => (0, i.jsx)(p, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", { "aria-hidden": !0, className: r()({ [A.NG]: a, [A.yd]: !a }), children: [!a && c, d] });
}
function m(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: l,
            mediaState: r,
            mentionCount: a = 0,
            isMentionLowImportance: c,
            tooltipName: d,
            folderGroupId: p,
            folderButtonContent: m,
            onClick: _,
            onContextMenu: f,
            onHoverChange: x,
            onKeyDown: C,
            treeItemProps: { onFocus: E, ...I },
            "aria-setsize": N,
            "aria-posinset": b,
        } = e,
        [S, T] = s.useState(!1),
        y = s.useCallback(() => {
            l || T(!0), x?.(!0);
        }, [l, x]),
        v = s.useCallback(() => {
            l || T(!1), x?.(!1);
        }, [l, x]),
        j = n || null == r ? null : (0, u.oi)(r),
        R =
            !n && a > 0
                ? (0, u.wN)(
                      a,
                      c ? o.LU0.colors.BACKGROUND_MOD_STRONG.css : o.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, i.jsx)(o.vN3, {
        children: (0, i.jsxs)(o.DUT, {
            className: A.H3,
            onClick: _,
            onContextMenu: f,
            onMouseEnter: y,
            onMouseLeave: v,
            onKeyDown: C,
            onFocus: E,
            focusProps: { enabled: !1 },
            ...I,
            role: "treeitem",
            "aria-setsize": N,
            "aria-posinset": b,
            "aria-expanded": n,
            "aria-owns": p,
            children: [
                (0, i.jsx)(o.AC4, {
                    children: h.intl.formatToPlainString(h.t["90/DwM"], { folderName: d, mentions: a }),
                }),
                (0, i.jsx)(o.Qk9, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: j,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, o.o6S)(a) },
                    children: (0, i.jsx)("div", {
                        className: A.vA,
                        children:
                            null != m
                                ? (0, i.jsx)("div", { className: A.hJ, children: m })
                                : (0, i.jsx)(g, { folderNode: t, hovered: S, sorting: l }),
                    }),
                }),
            ],
        }),
    });
}
