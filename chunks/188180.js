"use strict";
n.d(t, { V: () => g, X: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    h = n(272053),
    _ = n(189857),
    f = n(674085),
    m = n(215566),
    p = n(362205),
    b = n(825104);
let g = "refresh_sm";
function y(e) {
    let { tag: t, onClick: n, active: a, node: s, dismissibleBadge: c, panelKey: u, listItemProps: d, children: h } = e,
        {
            icon: _,
            StronglyDiscouragedCustomComponent: p,
            usePersistentBadge: y,
            useTitle: v,
            variant: x = "default",
        } = s,
        E = v?.(),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        S = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        N = y?.(a),
        C = i.useMemo(
            () =>
                null != c
                    ? a
                        ? null
                        : (0, r.jsx)(f.A, { badge: c })
                    : null != N
                      ? (0, r.jsx)(m.A, { badge: N })
                      : void 0,
            [a, c, N],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: b.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: l()(b.AS, { [b.vu]: a, [b.RD]: "destructive" === x }),
                onClick: n,
                children: [
                    null != p
                        ? (0, r.jsx)(p, {})
                        : (0, r.jsxs)("div", {
                              className: b.Ly,
                              children: [
                                  (0, r.jsx)(_, { color: S, size: g, className: b.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: A, children: E }),
                              ],
                          }),
                    C,
                ],
            }),
            h,
        ],
    });
}
function v(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: l = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        f = d.A.useField("currentPanelKey"),
        { accessibleDirectory: m } = (0, c._)(),
        b = i.useMemo(() => {
            if (null == f) return !1;
            let e = m.entry(f);
            return e?.parentSidebarItemKey === t.key;
        }, [f, t.key, m]),
        g = i.useMemo(() => {
            if (null == o || !(0, u.Iu)(o.layout)) return null;
            let e = o.layout.filter(u.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        v =
            null != o
                ? () => {
                      let e = f === o.key && null != g ? g[0].key : o.key;
                      h.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        x = i.useMemo(
            () => (b && null != g ? (0, r.jsx)(p.A, { categories: g, visibleContent: n, dismissibleBadges: a }) : null),
            [b, g, n, a],
        ),
        E = l ? "li" : "div",
        A = i.useMemo(() => (0, _.H)(t.key, n, a), [t.key, n, a]);
    return l
        ? (0, r.jsx)(y, { tag: E, panelKey: o?.key, onClick: v, active: b, node: t, dismissibleBadge: A, children: x })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(y, {
                      tag: E,
                      panelKey: o?.key,
                      onClick: v,
                      active: b,
                      node: t,
                      dismissibleBadge: A,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
