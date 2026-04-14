"use strict";
n.d(t, { V: () => y, X: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(272053),
    p = n(189857),
    _ = n(674085),
    m = n(215566),
    f = n(362205),
    g = n(710515);
let y = "refresh_sm";
function v(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: u, panelKey: c, listItemProps: d, children: h } = e,
        {
            icon: p,
            StronglyDiscouragedCustomComponent: f,
            usePersistentBadge: v,
            useTitle: S,
            variant: E = "default",
        } = l,
        x = S?.(),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(E),
        N = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(E),
        b = v?.(a),
        C = i.useMemo(
            () =>
                null != u
                    ? a
                        ? null
                        : (0, r.jsx)(_.A, { badge: u })
                    : null != b
                      ? (0, r.jsx)(m.A, { badge: b })
                      : void 0,
            [a, u, b],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: g.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: s()(g.AS, { [g.vu]: a, [g.RD]: "destructive" === E }),
                onClick: n,
                children: [
                    null != f
                        ? (0, r.jsx)(f, {})
                        : (0, r.jsxs)("div", {
                              className: g.Ly,
                              children: [
                                  (0, r.jsx)(p, { color: N, size: y, className: g.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: A, children: x }),
                              ],
                          }),
                    C,
                ],
            }),
            h,
        ],
    });
}
function S(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: s = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        _ = d.A.useField("currentPanelKey"),
        { accessibleDirectory: m } = (0, u._)(),
        g = i.useMemo(() => {
            if (null == _) return !1;
            let e = m.entry(_);
            return e?.parentSidebarItemKey === t.key;
        }, [_, t.key, m]),
        y = i.useMemo(() => {
            if (null == o || !(0, c.Iu)(o.layout)) return null;
            let e = o.layout.filter(c.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        S =
            null != o
                ? () => {
                      let e = _ === o.key && null != y ? y[0].key : o.key;
                      h.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        E = null != _,
        x = i.useMemo(
            () =>
                null != y && E
                    ? (0, r.jsx)(f.A, { active: g, visibleCategories: y, visibleContent: n, dismissibleBadges: a })
                    : null,
            [g, y, n, a, E],
        ),
        A = s ? "li" : "div",
        N = i.useMemo(() => (0, p.H)(t.key, n, a), [t.key, n, a]);
    return s
        ? (0, r.jsx)(v, { tag: A, panelKey: o?.key, onClick: S, active: g, node: t, dismissibleBadge: N, children: x })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(v, {
                      tag: A,
                      panelKey: o?.key,
                      onClick: S,
                      active: g,
                      node: t,
                      dismissibleBadge: N,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
