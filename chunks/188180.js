"use strict";
n.d(t, { V: () => g, X: () => v });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(272053),
    h = n(189857),
    f = n(674085),
    p = n(215566),
    m = n(362205),
    b = n(710515);
let g = "refresh_sm";
function y(e) {
    let { tag: t, onClick: n, active: i, node: s, dismissibleBadge: c, panelKey: u, listItemProps: d, children: _ } = e,
        {
            icon: h,
            StronglyDiscouragedCustomComponent: m,
            usePersistentBadge: y,
            useTitle: v,
            variant: x = "default",
        } = s,
        E = v?.(),
        S = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        N = y?.(i),
        C = a.useMemo(
            () =>
                null != c
                    ? i
                        ? null
                        : (0, r.jsx)(f.A, { badge: c })
                    : null != N
                      ? (0, r.jsx)(p.A, { badge: N })
                      : void 0,
            [i, c, N],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: b.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: l()(b.AS, { [b.vu]: i, [b.RD]: "destructive" === x }),
                onClick: n,
                children: [
                    null != m
                        ? (0, r.jsx)(m, {})
                        : (0, r.jsxs)("div", {
                              className: b.Ly,
                              children: [
                                  (0, r.jsx)(h, { color: A, size: g, className: b.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: S, children: E }),
                              ],
                          }),
                    C,
                ],
            }),
            _,
        ],
    });
}
function v(e) {
    let { node: t, visibleContent: n, dismissibleBadges: i, hoisted: l = !1 } = e,
        o = a.useMemo(() => t.layout[0], [t]),
        f = d.A.useField("currentPanelKey"),
        { accessibleDirectory: p } = (0, c._)(),
        b = a.useMemo(() => {
            if (null == f) return !1;
            let e = p.entry(f);
            return e?.parentSidebarItemKey === t.key;
        }, [f, t.key, p]),
        g = a.useMemo(() => {
            if (null == o || !(0, u.Iu)(o.layout)) return null;
            let e = o.layout.filter(u.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        v =
            null != o
                ? () => {
                      let e = f === o.key && null != g ? g[0].key : o.key;
                      _.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        x = a.useMemo(
            () => (b && null != g ? (0, r.jsx)(m.A, { categories: g, visibleContent: n, dismissibleBadges: i }) : null),
            [b, g, n, i],
        ),
        E = l ? "li" : "div",
        S = a.useMemo(() => (0, h.H)(t.key, n, i), [t.key, n, i]);
    return l
        ? (0, r.jsx)(y, { tag: E, panelKey: o?.key, onClick: v, active: b, node: t, dismissibleBadge: S, children: x })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(y, {
                      tag: E,
                      panelKey: o?.key,
                      onClick: v,
                      active: b,
                      node: t,
                      dismissibleBadge: S,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
