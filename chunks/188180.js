"use strict";
n.d(t, { V: () => y, X: () => x });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(272053),
    f = n(189857),
    m = n(674085),
    p = n(215566),
    _ = n(362205),
    v = n(710515);
let y = "refresh_sm";
function g(e) {
    let { tag: t, onClick: n, active: l, node: s, dismissibleBadge: u, panelKey: c, listItemProps: d, children: h } = e,
        {
            icon: f,
            StronglyDiscouragedCustomComponent: _,
            usePersistentBadge: g,
            useTitle: x,
            variant: E = "default",
        } = s,
        A = x?.(),
        S = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(E),
        b = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(E),
        N = g?.(l),
        C = i.useMemo(
            () =>
                null != u
                    ? l
                        ? null
                        : (0, r.jsx)(m.A, { badge: u })
                    : null != N
                      ? (0, r.jsx)(p.A, { badge: N })
                      : void 0,
            [l, u, N],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: v.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: a()(v.AS, { [v.vu]: l, [v.RD]: "destructive" === E }),
                onClick: n,
                children: [
                    null != _
                        ? (0, r.jsx)(_, {})
                        : (0, r.jsxs)("div", {
                              className: v.Ly,
                              children: [
                                  (0, r.jsx)(f, { color: b, size: y, className: v.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: S, children: A }),
                              ],
                          }),
                    C,
                ],
            }),
            h,
        ],
    });
}
function x(e) {
    let { node: t, visibleContent: n, dismissibleBadges: l, hoisted: a = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        m = d.A.useField("currentPanelKey"),
        { accessibleDirectory: p } = (0, u._)(),
        v = i.useMemo(() => {
            if (null == m) return !1;
            let e = p.entry(m);
            return e?.parentSidebarItemKey === t.key;
        }, [m, t.key, p]),
        y = i.useMemo(() => {
            if (null == o || !(0, c.Iu)(o.layout)) return null;
            let e = o.layout.filter(c.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        x =
            null != o
                ? () => {
                      let e = m === o.key && null != y ? y[0].key : o.key;
                      h.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        E = null != m,
        A = i.useMemo(
            () =>
                null != y && E
                    ? (0, r.jsx)(_.A, { active: v, categories: y, visibleContent: n, dismissibleBadges: l })
                    : null,
            [v, y, n, l, E],
        ),
        S = a ? "li" : "div",
        b = i.useMemo(() => (0, f.H)(t.key, n, l), [t.key, n, l]);
    return a
        ? (0, r.jsx)(g, { tag: S, panelKey: o?.key, onClick: x, active: v, node: t, dismissibleBadge: b, children: A })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(g, {
                      tag: S,
                      panelKey: o?.key,
                      onClick: x,
                      active: v,
                      node: t,
                      dismissibleBadge: b,
                      listItemProps: e,
                      children: A,
                  }),
          });
}
