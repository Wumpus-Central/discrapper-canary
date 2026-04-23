"use strict";
n.d(t, { V: () => E, X: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(827734),
    c = n(939249),
    u = n(834730),
    d = n(199966),
    _ = n(963935),
    f = n(894858),
    h = n(272053),
    p = n(189857),
    m = n(674085),
    g = n(215566),
    b = n(362205),
    v = n(585635);
let E = "refresh_sm";
function y(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: d, panelKey: _, listItemProps: f, children: h } = e,
        {
            icon: p,
            StronglyDiscouragedCustomComponent: b,
            usePersistentBadge: y,
            useTitle: A,
            variant: x = "default",
        } = l,
        S = A?.(),
        C = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        N = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        I = y?.(a),
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
                ...f,
                className: s()(v.AS, { [v.vu]: a, [v.RD]: "destructive" === x }),
                onClick: n,
                children: [
                    null != b
                        ? (0, r.jsx)(b, {})
                        : (0, r.jsxs)("div", {
                              className: v.Ly,
                              children: [
                                  (0, r.jsx)(p, { color: N, size: E, className: v.Kk }),
                                  (0, r.jsx)(u.E, { variant: "text-md/medium", color: C, children: S }),
                              ],
                          }),
                    T,
                ],
            }),
            h,
        ],
    });
}
function A(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: s = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        c = f.A.useField("currentPanelKey"),
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
        E =
            null != o
                ? () => {
                      let e = c === o.key && null != v ? v[0].key : o.key;
                      h.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        A = null != c,
        x = i.useMemo(
            () =>
                null != v && A
                    ? (0, r.jsx)(b.A, {
                          active: g,
                          isTopLevelPanelVisible: m,
                          visibleCategories: v,
                          visibleContent: n,
                          dismissibleBadges: a,
                      })
                    : null,
            [v, A, g, m, n, a],
        ),
        S = s ? "li" : "div",
        C = i.useMemo(() => (0, p.H)(t.key, n, a), [t.key, n, a]);
    return s
        ? (0, r.jsx)(y, { tag: S, panelKey: o?.key, onClick: E, active: g, node: t, dismissibleBadge: C, children: x })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(y, {
                      tag: S,
                      panelKey: o?.key,
                      onClick: E,
                      active: g,
                      node: t,
                      dismissibleBadge: C,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
