"use strict";
n.d(t, { X: () => b });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(942596),
    m = n(362205),
    g = n(71862);
function p(e) {
    let { tag: t, onClick: n, active: r, node: i, visibleContent: l, panelKey: c, listItemProps: u, children: d } = e,
        { icon: m, StronglyDiscouragedCustomComponent: p, trailing: b, useTitle: f, variant: h = "default" } = i,
        x = f?.(),
        y = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(h),
        C = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(h);
    return (0, a.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: g.DB,
        children: [
            (0, a.jsxs)(o.DUT, {
                ...u,
                className: s()(g.AS, { [g.vu]: r, [g.RD]: "destructive" === h }),
                onClick: n,
                children: [
                    null != p
                        ? (0, a.jsx)(p, {})
                        : (0, a.jsxs)("div", {
                              className: g.Ly,
                              children: [
                                  (0, a.jsx)(m, { color: C, size: "refresh_sm", className: g.Kk }),
                                  (0, a.jsx)(o.Text, { variant: "text-md/medium", color: y, children: x }),
                              ],
                          }),
                    null != b &&
                        (0, a.jsx)("div", {
                            className: g.Ly,
                            children: (0, a.jsx)(_.Z, { trailing: b, visibleContent: l, isSelected: r }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function b(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        s = r.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: _ } = (0, c._)(),
        g = r.useMemo(() => {
            if (null == o) return !1;
            let e = _.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, _]),
        b = r.useMemo(() => {
            if (null == s || !(0, u.Iu)(s.layout)) return null;
            let e = s.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [s]),
        f =
            null != s
                ? () => {
                      let e = o === s.key && null != b ? b[0].key : s.key;
                      d.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        h = r.useMemo(() => (g && null != b ? (0, a.jsx)(m.A, { categories: b }) : null), [g, b]),
        x = i ? "li" : "div";
    return i
        ? (0, a.jsx)(p, { tag: x, panelKey: s?.key, onClick: f, active: g, node: t, visibleContent: n, children: h })
        : (0, a.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, a.jsx)(p, {
                      tag: x,
                      panelKey: s?.key,
                      onClick: f,
                      active: g,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: h,
                  }),
          });
}
