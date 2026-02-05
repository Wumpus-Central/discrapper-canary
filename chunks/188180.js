n.d(t, { X: () => g });
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(837381),
    s = n(397927),
    c = n(963935),
    _ = n(894858),
    u = n(942596),
    d = n(362205),
    b = n(71862);
function m(e) {
    let { tag: t, onClick: n, active: a, node: o, visibleContent: l, panelKey: c, listItemProps: _, children: d } = e,
        { icon: m, StronglyDiscouragedCustomComponent: g, trailing: p, useTitle: f } = o,
        x = f?.();
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: b.DB,
        children: [
            (0, r.jsxs)(s.DUT, {
                ..._,
                className: i()(b.AS, { [b.vu]: a }),
                onClick: n,
                children: [
                    null != g
                        ? (0, r.jsx)(g, {})
                        : (0, r.jsxs)("div", {
                              className: b.Ly,
                              children: [
                                  (0, r.jsx)(m, { color: "currentColor", size: "refresh_sm", className: b.Kk }),
                                  (0, r.jsx)(s.Text, { variant: "text-md/medium", color: "currentColor", children: x }),
                              ],
                          }),
                    null != p &&
                        (0, r.jsx)("div", {
                            className: b.Ly,
                            children: (0, r.jsx)(u.Z, { trailing: p, visibleContent: l, isSelected: a }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function g(e) {
    let { node: t, visibleContent: n, hoisted: o = !1 } = e,
        i = a.useMemo(() => t.layout[0], [t]),
        s = _.A.useField("currentPanelKey"),
        u = null != s && s === i?.key,
        b = a.useMemo(() => {
            if (null == i || !(0, c.Iu)(i.layout)) return null;
            let e = i.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [i]),
        g =
            null != i
                ? () => {
                      let e = s === i.key && null != b ? b[0].key : i.key;
                      _.A.setState({ requestedTargetKey: e, showNavigationMobile: !1 });
                  }
                : t.onClick,
        p = a.useMemo(() => (u && null != b ? (0, r.jsx)(d.A, { categories: b }) : null), [u, b]),
        f = o ? "li" : "div";
    return o
        ? (0, r.jsx)(m, { tag: f, panelKey: i?.key, onClick: g, active: u, node: t, visibleContent: n, children: p })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(m, {
                      tag: f,
                      panelKey: i?.key,
                      onClick: g,
                      active: u,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: p,
                  }),
          });
}
