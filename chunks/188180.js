"use strict";
n.d(t, { V: () => y, X: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(827734),
    c = n(939249),
    u = n(834730),
    d = n(199966),
    _ = n(963935),
    h = n(894858),
    p = n(272053),
    f = n(189857),
    m = n(674085),
    g = n(215566),
    E = n(362205),
    v = n(585635);
let y = "refresh_sm";
function A(e) {
    let { tag: t, onClick: n, active: a, node: s, dismissibleBadge: d, panelKey: _, listItemProps: h, children: p } = e,
        {
            icon: f,
            StronglyDiscouragedCustomComponent: E,
            usePersistentBadge: A,
            useTitle: S,
            variant: b = "default",
        } = s,
        x = S?.(),
        N = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(b),
        C = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(b),
        I = A?.(a),
        T = i.useMemo(
            () =>
                null != d
                    ? a
                        ? null
                        : (0, r.jsx)(m.A, { badge: d })
                    : null != I
                      ? (0, r.jsx)(g.A, { badge: I })
                      : void 0,
            [a, d, I],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": _,
        className: v.DB,
        children: [
            (0, r.jsxs)(c.D, {
                ...h,
                className: l()(v.AS, { [v.vu]: a, [v.RD]: "destructive" === b }),
                onClick: n,
                children: [
                    null != E
                        ? (0, r.jsx)(E, {})
                        : (0, r.jsxs)("div", {
                              className: v.Ly,
                              children: [
                                  (0, r.jsx)(f, { color: C, size: y, className: v.Kk }),
                                  (0, r.jsx)(u.E, { variant: "text-md/medium", color: N, children: x }),
                              ],
                          }),
                    T,
                ],
            }),
            p,
        ],
    });
}
function S(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: l = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        c = h.A.useField("currentPanelKey"),
        { accessibleDirectory: u } = (0, d._)(),
        m = o?.key === c,
        g = i.useMemo(() => {
            if (null == c) return !1;
            let e = u.entry(c);
            return e?.parentSidebarItemKey === t.key;
        }, [c, t.key, u]),
        v = i.useMemo(() => {
            if (null == o || !(0, _.Iu)(o.layout)) return null;
            let e = o.layout.filter(_.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        y =
            null != o
                ? () => {
                      let e = c === o.key && null != v ? v[0].key : o.key;
                      p.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        S = null != c,
        b = i.useMemo(
            () =>
                null != v && S
                    ? (0, r.jsx)(E.A, {
                          active: g,
                          isTopLevelPanelVisible: m,
                          visibleCategories: v,
                          visibleContent: n,
                          dismissibleBadges: a,
                      })
                    : null,
            [v, S, g, m, n, a],
        ),
        x = l ? "li" : "div",
        N = i.useMemo(() => (0, f.H)(t.key, n, a), [t.key, n, a]);
    return l
        ? (0, r.jsx)(A, { tag: x, panelKey: o?.key, onClick: y, active: g, node: t, dismissibleBadge: N, children: b })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(A, {
                      tag: x,
                      panelKey: o?.key,
                      onClick: y,
                      active: g,
                      node: t,
                      dismissibleBadge: N,
                      listItemProps: e,
                      children: b,
                  }),
          });
}
