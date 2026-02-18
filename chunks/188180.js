"use strict";
n.d(t, { X: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(942596),
    g = n(362205),
    m = n(71862);
function b(e) {
    let { tag: t, onClick: n, active: i, node: a, visibleContent: l, panelKey: c, listItemProps: u, children: d } = e,
        { icon: g, StronglyDiscouragedCustomComponent: b, trailing: f, useTitle: p, variant: h = "default" } = a,
        y = p?.(),
        x = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(h),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return o.LU0.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(h);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: m.DB,
        children: [
            (0, r.jsxs)(o.DUT, {
                ...u,
                className: s()(m.AS, { [m.vu]: i, [m.RD]: "destructive" === h }),
                onClick: n,
                children: [
                    null != b
                        ? (0, r.jsx)(b, {})
                        : (0, r.jsxs)("div", {
                              className: m.Ly,
                              children: [
                                  (0, r.jsx)(g, { color: A, size: "refresh_sm", className: m.Kk }),
                                  (0, r.jsx)(o.Text, { variant: "text-md/medium", color: x, children: y }),
                              ],
                          }),
                    null != f &&
                        (0, r.jsx)("div", {
                            className: m.Ly,
                            children: (0, r.jsx)(_.Z, { trailing: f, visibleContent: l, isSelected: i }),
                        }),
                ],
            }),
            d,
        ],
    });
}
function f(e) {
    let { node: t, visibleContent: n, hoisted: a = !1 } = e,
        s = i.useMemo(() => t.layout[0], [t]),
        o = d.A.useField("currentPanelKey"),
        { accessibleDirectory: _ } = (0, c._)(),
        m = i.useMemo(() => {
            if (null == o) return !1;
            let e = _.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, _]),
        f = i.useMemo(() => {
            if (null == s || !(0, u.Iu)(s.layout)) return null;
            let e = s.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? e : null;
        }, [s]),
        p =
            null != s
                ? () => {
                      let e = o === s.key && null != f ? f[0].key : s.key;
                      d.A.setState({
                          requestedTargetKey: e,
                          disableSidebarScrollAnimate: !1,
                          showNavigationMobile: !1,
                      });
                  }
                : t.onClick,
        h = i.useMemo(() => (m && null != f ? (0, r.jsx)(g.A, { categories: f }) : null), [m, f]),
        y = a ? "li" : "div";
    return a
        ? (0, r.jsx)(b, { tag: y, panelKey: s?.key, onClick: p, active: m, node: t, visibleContent: n, children: h })
        : (0, r.jsx)(l.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(b, {
                      tag: y,
                      panelKey: s?.key,
                      onClick: p,
                      active: m,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: h,
                  }),
          });
}
