n.d(t, { X: () => y });
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(942596),
    m = n(362205),
    h = n(71862);
function x(e) {
    let { tag: t, onClick: n, active: a, node: l, visibleContent: s, panelKey: c, listItemProps: u, children: d } = e,
        { icon: m, StronglyDiscouragedCustomComponent: x, trailing: y, useTitle: g } = l,
        p = g?.();
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: h.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...u,
                className: i()(h.AS, { [h.vu]: a }),
                onClick: n,
                children: [
                    null != x
                        ? (0, r.jsx)(x, {})
                        : (0, r.jsxs)("div", {
                              className: h.Ly,
                              children: [
                                  (0, r.jsx)(m, { color: "currentColor", size: "refresh_sm", className: h.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: "currentColor", children: p }),
                              ],
                          }),
                    null != y &&
                        (0, r.jsx)("div", {
                            className: h.Ly,
                            children: (0, r.jsx)(_.Z, { trailing: y, visibleContent: s, isSelected: a }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function y(e) {
    let { node: t, visibleContent: n, hoisted: l = !1 } = e,
        i = a.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: _ } = (0, c._)(),
        h = a.useMemo(() => {
            if (null == o) return !1;
            let e = _.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, _]),
        y = a.useMemo(() => {
            if (null == i || !(0, u.Iu)(i.layout)) return null;
            let e = i.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [i]),
        g =
            null != i
                ? () => {
                      let e = o === i.key && null != y ? y[0].key : i.key;
                      d.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        p = a.useMemo(() => (h && null != y ? (0, r.jsx)(m.A, { categories: y }) : null), [h, y]),
        b = l ? "li" : "div";
    return l
        ? (0, r.jsx)(x, { tag: b, panelKey: i?.key, onClick: g, active: h, node: t, visibleContent: n, children: p })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(x, {
                      tag: b,
                      panelKey: i?.key,
                      onClick: g,
                      active: h,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: p,
                  }),
          });
}
