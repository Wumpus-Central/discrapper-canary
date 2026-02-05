n.d(t, { X: () => g });
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(837381),
    s = n(397927),
    c = n(199966),
    _ = n(963935),
    u = n(894858),
    d = n(942596),
    b = n(362205),
    m = n(71862);
function p(e) {
    let { tag: t, onClick: n, active: a, node: o, visibleContent: l, panelKey: c, listItemProps: _, children: u } = e,
        { icon: b, StronglyDiscouragedCustomComponent: p, trailing: g, useTitle: f } = o,
        x = f?.();
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: m.DB,
        children: [
            (0, r.jsxs)(s.DUT, {
                ..._,
                className: i()(m.AS, { [m.vu]: a }),
                onClick: n,
                children: [
                    null != p
                        ? (0, r.jsx)(p, {})
                        : (0, r.jsxs)("div", {
                              className: m.Ly,
                              children: [
                                  (0, r.jsx)(b, { color: "currentColor", size: "refresh_sm", className: m.Kk }),
                                  (0, r.jsx)(s.Text, { variant: "text-md/medium", color: "currentColor", children: x }),
                              ],
                          }),
                    null != g &&
                        (0, r.jsx)("div", {
                            className: m.Ly,
                            children: (0, r.jsx)(d.Z, { trailing: g, visibleContent: l, isSelected: a }),
                        }),
                ],
            }),
            u,
        ],
    });
}
function g(e) {
    let { node: t, visibleContent: n, hoisted: o = !1 } = e,
        i = a.useMemo(() => t.layout[0], [t]),
        s = u.A.useField("currentPanelKey"),
        { accessibleDirectory: d } = (0, c._)(),
        m = a.useMemo(() => {
            if (null == s) return !1;
            let e = d.entry(s);
            return e?.parentSidebarItemKey === t.key;
        }, [s, t.key, d]),
        g = a.useMemo(() => {
            if (null == i || !(0, _.Iu)(i.layout)) return null;
            let e = i.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [i]),
        f =
            null != i
                ? () => {
                      let e = s === i.key && null != g ? g[0].key : i.key;
                      u.A.setState({ requestedTargetKey: e, showNavigationMobile: !1 });
                  }
                : t.onClick,
        x = a.useMemo(() => (m && null != g ? (0, r.jsx)(b.A, { categories: g }) : null), [m, g]),
        h = o ? "li" : "div";
    return o
        ? (0, r.jsx)(p, { tag: h, panelKey: i?.key, onClick: f, active: m, node: t, visibleContent: n, children: x })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(p, {
                      tag: h,
                      panelKey: i?.key,
                      onClick: f,
                      active: m,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
