t.d(n, { j: () => S });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(311907),
    o = t(73939),
    c = t(871682),
    d = t(599319),
    u = t(187322),
    x = t(761508),
    j = t(823092),
    h = t(963935),
    m = t(894858),
    f = t(272053),
    p = t(397274),
    y = t(641324),
    g = t(46373),
    v = t(707182);
function A(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, j.L_)(),
        d = n?.stores;
    r.useEffect(() => {
        if (null != d) {
            let e = new a.ru(d, () => {
                s(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                s(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, s]);
    let u = r.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, l.jsx)(c.F, { className: v.lm, children: (0, l.jsx)(e, {}) });
    }, [n, i]);
    return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(o.F, { component: "div", children: u })] });
}
function N(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, l.jsx)("div", {
        className: s()(v.oK, { [v.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, l.jsx)(t, {}),
    });
}
function b(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = r.useRef(null),
        a = i?.();
    return null != a
        ? (0, l.jsx)(a, {})
        : (0, l.jsx)(A, {
              notice: n,
              children: (0, l.jsxs)(d.Gt, {
                  className: v.XG,
                  ref: (e) => {
                      p.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, l.jsx)("div", {
                          className: v.nd,
                          ref: s,
                          children: (0, l.jsx)(u.xp, { containerRef: s, children: t }),
                      }),
                      (0, l.jsx)("div", { className: v.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function k(e) {
    let { layout: n, decoration: t } = e;
    return (0, l.jsxs)("div", {
        className: v.LZ,
        children: [
            null != t && (0, l.jsx)(N, { decoration: t }),
            n.map((e, t) =>
                (0, l.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, l.jsx)(y.A, { node: e }),
                            t !== n.length - 1 && (0, l.jsx)(g.A, { className: v.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function E(e) {
    let { panelKey: n, layout: t, notice: i, decoration: s, useObscuredNotice: a } = e,
        o =
            m.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(n);
            }) ?? t[0].key;
    r.useEffect(() => {
        let e = m.A.getField("currentTabKeys");
        if (t.some((t) => t.key === e.get(n))) return;
        let l = new Map(e);
        l.set(n, t[0].key), m.A.setState({ currentTabKeys: l });
    }, [t, n]);
    let c = t.find((e) => e.key === o) ?? t[0];
    return (0, l.jsxs)(
        b,
        {
            notice: i,
            useObscuredNotice: a,
            children: [
                (0, l.jsx)(x.V, {
                    className: v.$H,
                    selectedItem: o,
                    onItemSelect: (e) => {
                        f.A.navigate(e, {
                            onTransitionStart: () => {
                                let n = t.find((n) => n.key === e);
                                n?.onItemSelect?.();
                            },
                        });
                    },
                    orientation: "horizontal",
                    type: "top",
                    look: "brand",
                    children: t.map((e) => {
                        let { key: n, getTitle: t } = e;
                        return (0, l.jsx)(x.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, l.jsx)(x.V.Panel, { id: o, children: (0, l.jsx)(k, { layout: c.layout, decoration: s }) }),
            ],
        },
        n,
    );
}
function T(e) {
    let { panelKey: n, notice: t, decoration: r, layout: i, useObscuredNotice: s } = e;
    return (0, l.jsx)(b, { notice: t, useObscuredNotice: s, children: (0, l.jsx)(k, { layout: i, decoration: r }) }, n);
}
function S(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, h.zY)(t))
        return (0, l.jsx)(E, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, h.Iu)(t))
        return (0, l.jsx)(T, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
