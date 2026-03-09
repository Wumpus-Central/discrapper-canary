"use strict";
n.d(t, { X: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(272053),
    f = n(942596),
    m = n(362205),
    g = n(71862);
function v(e) {
    let { tag: t, onClick: n, active: i, node: a, visibleContent: s, panelKey: u, listItemProps: c, children: d } = e,
        { icon: h, StronglyDiscouragedCustomComponent: m, trailing: v, useTitle: p, variant: y = "default" } = a,
        x = p?.(),
        _ = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(y),
        b = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(y);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: g.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...c,
                className: l()(g.AS, { [g.vu]: i, [g.RD]: "destructive" === y }),
                onClick: n,
                children: [
                    null != m
                        ? (0, r.jsx)(m, {})
                        : (0, r.jsxs)("div", {
                              className: g.Ly,
                              children: [
                                  (0, r.jsx)(h, { color: b, size: "refresh_sm", className: g.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: _, children: x }),
                              ],
                          }),
                    null != v &&
                        (0, r.jsx)("div", {
                            className: g.Ly,
                            children: (0, r.jsx)(f.Z, { trailing: v, visibleContent: s, isSelected: i }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function p(e) {
    let { node: t, visibleContent: n, hoisted: a = !1 } = e,
        l = i.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: f } = (0, u._)(),
        g = i.useMemo(() => {
            if (null == o) return !1;
            let e = f.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, f]),
        p = i.useMemo(() => {
            if (null == l || !(0, c.Iu)(l.layout)) return null;
            let e = l.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [l]),
        y =
            null != l
                ? () => {
                      let e = o === l.key && null != p ? p[0].key : l.key;
                      h.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        x = i.useMemo(() => (g && null != p ? (0, r.jsx)(m.A, { categories: p }) : null), [g, p]),
        _ = a ? "li" : "div";
    return a
        ? (0, r.jsx)(v, { tag: _, panelKey: l?.key, onClick: y, active: g, node: t, visibleContent: n, children: x })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(v, {
                      tag: _,
                      panelKey: l?.key,
                      onClick: y,
                      active: g,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
