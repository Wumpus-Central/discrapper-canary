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
    y = n(362205),
    p = n(71862);
function _(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: c, panelKey: u, listItemProps: d, children: m } = e,
        {
            icon: f,
            StronglyDiscouragedCustomComponent: y,
            usePersistentBadge: _,
            useTitle: x,
            variant: b = "default",
        } = l,
        v = x?.(),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(b),
        j = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(b),
        S = _?.(a),
        N = i.useMemo(
            () =>
                null != c
                    ? a
                        ? null
                        : (0, r.jsx)(g.A, { badge: c })
                    : null != S
                      ? (0, r.jsx)(h.A, { badge: S })
                      : void 0,
            [a, c, S],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: p.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: s()(p.AS, { [p.vu]: a, [p.RD]: "destructive" === b }),
                onClick: n,
                children: [
                    null != y
                        ? (0, r.jsx)(y, {})
                        : (0, r.jsxs)("div", {
                              className: p.Ly,
                              children: [
                                  (0, r.jsx)(f, { color: j, size: "refresh_sm", className: p.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: A, children: v }),
                              ],
                          }),
                    N,
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
        p = i.useMemo(() => {
            if (null == g) return !1;
            let e = h.entry(g);
            return e?.parentSidebarItemKey === t.key;
        }, [g, t.key, h]),
        x = i.useMemo(() => {
            if (null == o || !(0, u.Iu)(o.layout)) return null;
            let e = o.layout.filter(u.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        b =
            null != o
                ? () => {
                      let e = g === o.key && null != x ? x[0].key : o.key;
                      m.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        v = i.useMemo(
            () => (p && null != x ? (0, r.jsx)(y.A, { categories: x, visibleContent: n, dismissibleBadges: a }) : null),
            [p, x, n, a],
        ),
        A = s ? "li" : "div",
        j = i.useMemo(() => (0, f.H)(t.key, n, a), [t.key, n, a]);
    return s
        ? (0, r.jsx)(_, { tag: A, panelKey: o?.key, onClick: b, active: p, node: t, dismissibleBadge: j, children: v })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(_, {
                      tag: A,
                      panelKey: o?.key,
                      onClick: b,
                      active: p,
                      node: t,
                      dismissibleBadge: j,
                      listItemProps: e,
                      children: v,
                  }),
          });
}
