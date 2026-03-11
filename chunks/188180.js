"use strict";
n.d(t, { X: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    m = n(272053),
    f = n(189857),
    g = n(674085),
    h = n(215566),
    p = n(362205),
    y = n(825104);
function _(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: c, panelKey: u, listItemProps: d, children: m } = e,
        {
            icon: f,
            StronglyDiscouragedCustomComponent: p,
            usePersistentBadge: _,
            useTitle: x,
            variant: v = "default",
        } = l,
        b = x?.(),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(v),
        j = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(v),
        N = _?.(a),
        S = i.useMemo(
            () =>
                null != c
                    ? a
                        ? null
                        : (0, r.jsx)(g.A, { badge: c })
                    : null != N
                      ? (0, r.jsx)(h.A, { badge: N })
                      : void 0,
            [a, c, N],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: y.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: s()(y.AS, { [y.vu]: a, [y.RD]: "destructive" === v }),
                onClick: n,
                children: [
                    null != p
                        ? (0, r.jsx)(p, {})
                        : (0, r.jsxs)("div", {
                              className: y.Ly,
                              children: [
                                  (0, r.jsx)(f, { color: j, size: "refresh_sm", className: y.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: A, children: b }),
                              ],
                          }),
                    S,
                ],
            }),
            m,
        ],
    });
}
function x(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: s = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        g = d.A.useField("currentPanelKey"),
        { accessibleDirectory: h } = (0, c._)(),
        y = i.useMemo(() => {
            if (null == g) return !1;
            let e = h.entry(g);
            return e?.parentSidebarItemKey === t.key;
        }, [g, t.key, h]),
        x = i.useMemo(() => {
            if (null == o || !(0, u.Iu)(o.layout)) return null;
            let e = o.layout.filter(u.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        v =
            null != o
                ? () => {
                      let e = g === o.key && null != x ? x[0].key : o.key;
                      m.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        b = i.useMemo(
            () => (y && null != x ? (0, r.jsx)(p.A, { categories: x, visibleContent: n, dismissibleBadges: a }) : null),
            [y, x, n, a],
        ),
        A = s ? "li" : "div",
        j = i.useMemo(() => (0, f.H)(t.key, n, a), [t.key, n, a]);
    return s
        ? (0, r.jsx)(_, { tag: A, panelKey: o?.key, onClick: v, active: y, node: t, dismissibleBadge: j, children: b })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(_, {
                      tag: A,
                      panelKey: o?.key,
                      onClick: v,
                      active: y,
                      node: t,
                      dismissibleBadge: j,
                      listItemProps: e,
                      children: b,
                  }),
          });
}
