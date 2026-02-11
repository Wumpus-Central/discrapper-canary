n.d(t, { X: () => x });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(942596),
    g = n(362205),
    m = n(71862);
function h(e) {
    let { tag: t, onClick: n, active: a, node: i, visibleContent: s, panelKey: c, listItemProps: u, children: d } = e,
        { icon: g, StronglyDiscouragedCustomComponent: h, trailing: x, useTitle: y, variant: b = "default" } = i,
        f = y?.(),
        p = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(b),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(b);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: m.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...u,
                className: l()(m.AS, { [m.vu]: a, [m.RD]: "destructive" === b }),
                onClick: n,
                children: [
                    null != h
                        ? (0, r.jsx)(h, {})
                        : (0, r.jsxs)("div", {
                              className: m.Ly,
                              children: [
                                  (0, r.jsx)(g, { color: A, size: "refresh_sm", className: m.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: p, children: f }),
                              ],
                          }),
                    null != x &&
                        (0, r.jsx)("div", {
                            className: m.Ly,
                            children: (0, r.jsx)(_.Z, { trailing: x, visibleContent: s, isSelected: a }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function x(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        l = a.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: _ } = (0, c._)(),
        m = a.useMemo(() => {
            if (null == o) return !1;
            let e = _.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, _]),
        x = a.useMemo(() => {
            if (null == l || !(0, u.Iu)(l.layout)) return null;
            let e = l.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [l]),
        y =
            null != l
                ? () => {
                      let e = o === l.key && null != x ? x[0].key : l.key;
                      d.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        b = a.useMemo(() => (m && null != x ? (0, r.jsx)(g.A, { categories: x }) : null), [m, x]),
        f = i ? "li" : "div";
    return i
        ? (0, r.jsx)(h, { tag: f, panelKey: l?.key, onClick: y, active: m, node: t, visibleContent: n, children: b })
        : (0, r.jsx)(s.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(h, {
                      tag: f,
                      panelKey: l?.key,
                      onClick: y,
                      active: m,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: b,
                  }),
          });
}
