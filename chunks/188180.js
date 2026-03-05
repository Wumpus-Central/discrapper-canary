"use strict";
n.d(t, { X: () => y });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(942596),
    g = n(362205),
    f = n(825104);
function m(e) {
    let { tag: t, onClick: n, active: a, node: i, visibleContent: s, panelKey: u, listItemProps: c, children: d } = e,
        { icon: g, StronglyDiscouragedCustomComponent: m, trailing: y, useTitle: p, variant: v = "default" } = i,
        x = p?.(),
        b = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(v),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(v);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: f.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...c,
                className: l()(f.AS, { [f.vu]: a, [f.RD]: "destructive" === v }),
                onClick: n,
                children: [
                    null != m
                        ? (0, r.jsx)(m, {})
                        : (0, r.jsxs)("div", {
                              className: f.Ly,
                              children: [
                                  (0, r.jsx)(g, { color: A, size: "refresh_sm", className: f.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: b, children: x }),
                              ],
                          }),
                    null != y &&
                        (0, r.jsx)("div", {
                            className: f.Ly,
                            children: (0, r.jsx)(h.Z, { trailing: y, visibleContent: s, isSelected: a }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function y(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        l = a.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: h } = (0, u._)(),
        f = a.useMemo(() => {
            if (null == o) return !1;
            let e = h.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, h]),
        y = a.useMemo(() => {
            if (null == l || !(0, c.Iu)(l.layout)) return null;
            let e = l.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [l]),
        p =
            null != l
                ? () => {
                      let e = o === l.key && null != y ? y[0].key : l.key;
                      d.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        v = a.useMemo(() => (f && null != y ? (0, r.jsx)(g.A, { categories: y }) : null), [f, y]),
        x = i ? "li" : "div";
    return i
        ? (0, r.jsx)(m, { tag: x, panelKey: l?.key, onClick: p, active: f, node: t, visibleContent: n, children: v })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(m, {
                      tag: x,
                      panelKey: l?.key,
                      onClick: p,
                      active: f,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: v,
                  }),
          });
}
