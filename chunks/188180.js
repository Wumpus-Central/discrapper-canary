n.d(t, { X: () => f });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(837381),
    s = n(397927),
    c = n(199966),
    d = n(963935),
    u = n(894858),
    _ = n(942596),
    g = n(362205),
    m = n(825104);
function b(e) {
    let { tag: t, onClick: n, active: r, node: i, visibleContent: l, panelKey: c, listItemProps: d, children: u } = e,
        { icon: g, StronglyDiscouragedCustomComponent: b, trailing: f, useTitle: p, variant: x = "default" } = i,
        h = p?.(),
        y = (function (e) {
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
                    return s.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x);
    return (0, a.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: m.DB,
        children: [
            (0, a.jsxs)(s.DUT, {
                ...d,
                className: o()(m.AS, { [m.vu]: r, [m.RD]: "destructive" === x }),
                onClick: n,
                children: [
                    null != b
                        ? (0, a.jsx)(b, {})
                        : (0, a.jsxs)("div", {
                              className: m.Ly,
                              children: [
                                  (0, a.jsx)(g, { color: A, size: "refresh_sm", className: m.Kk }),
                                  (0, a.jsx)(s.Text, { variant: "text-md/medium", color: y, children: h }),
                              ],
                          }),
                    null != f &&
                        (0, a.jsx)("div", {
                            className: m.Ly,
                            children: (0, a.jsx)(_.Z, { trailing: f, visibleContent: l, isSelected: r }),
                        }),
                ],
            }),
            u,
        ],
    });
}
function f(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        o = r.useMemo(() => t.layout[0], [t]),
        s = u.A.useField("currentPanelKey"),
        { accessibleDirectory: _ } = (0, c._)(),
        m = r.useMemo(() => {
            if (null == s) return !1;
            let e = _.entry(s);
            return e?.parentSidebarItemKey === t.key;
        }, [s, t.key, _]),
        f = r.useMemo(() => {
            if (null == o || !(0, d.Iu)(o.layout)) return null;
            let e = o.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [o]),
        p =
            null != o
                ? () => {
                      let e = s === o.key && null != f ? f[0].key : o.key;
                      u.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        x = r.useMemo(() => (m && null != f ? (0, a.jsx)(g.A, { categories: f }) : null), [m, f]),
        h = i ? "li" : "div";
    return i
        ? (0, a.jsx)(b, { tag: h, panelKey: o?.key, onClick: p, active: m, node: t, visibleContent: n, children: x })
        : (0, a.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, a.jsx)(b, {
                      tag: h,
                      panelKey: o?.key,
                      onClick: p,
                      active: m,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
