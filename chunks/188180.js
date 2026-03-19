"use strict";
n.d(t, { X: () => y });
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
    h = n(674085),
    p = n(215566),
    g = n(362205),
    x = n(825104);
function _(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: c, panelKey: u, listItemProps: d, children: m } = e,
        {
            icon: f,
            StronglyDiscouragedCustomComponent: g,
            usePersistentBadge: _,
            useTitle: y,
            variant: b = "default",
        } = l,
        v = y?.(),
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
        N = _?.(a),
        S = i.useMemo(
            () =>
                null != c
                    ? a
                        ? null
                        : (0, r.jsx)(h.A, { badge: c })
                    : null != N
                      ? (0, r.jsx)(p.A, { badge: N })
                      : void 0,
            [a, c, N],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: x.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...d,
                className: s()(x.AS, { [x.vu]: a, [x.RD]: "destructive" === b }),
                onClick: n,
                children: [
                    null != g
                        ? (0, r.jsx)(g, {})
                        : (0, r.jsxs)("div", {
                              className: x.Ly,
                              children: [
                                  (0, r.jsx)(f, { color: j, size: "refresh_sm", className: x.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: A, children: v }),
                              ],
                          }),
                    S,
                ],
            }),
            m,
        ],
    });
}
function y(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: s = !1 } = e,
        o = i.useMemo(() => t.layout[0], [t]),
        h = d.A.useField("currentPanelKey"),
        { accessibleDirectory: p } = (0, c._)(),
        x = i.useMemo(() => {
            if (null == h) return !1;
            let e = p.entry(h);
            return e?.parentSidebarItemKey === t.key;
        }, [h, t.key, p]),
        y = i.useMemo(() => {
            if (null == o || !(0, u.Iu)(o.layout)) return null;
            let e = o.layout.filter(u.bJ);
            return e.length > 1 ? e : null;
        }, [o]),
        b =
            null != o
                ? () => {
                      let e = h === o.key && null != y ? y[0].key : o.key;
                      m.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        v = i.useMemo(
            () => (x && null != y ? (0, r.jsx)(g.A, { categories: y, visibleContent: n, dismissibleBadges: a }) : null),
            [x, y, n, a],
        ),
        A = s ? "li" : "div",
        j = i.useMemo(() => (0, f.H)(t.key, n, a), [t.key, n, a]);
    return s
        ? (0, r.jsx)(_, { tag: A, panelKey: o?.key, onClick: b, active: x, node: t, dismissibleBadge: j, children: v })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(_, {
                      tag: A,
                      panelKey: o?.key,
                      onClick: b,
                      active: x,
                      node: t,
                      dismissibleBadge: j,
                      listItemProps: e,
                      children: v,
                  }),
          });
}
