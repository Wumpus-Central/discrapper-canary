n.d(t, { j: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(823092),
    u = n(963935),
    m = n(894858),
    g = n(272053),
    _ = n(397274),
    x = n(641324),
    A = n(46373),
    h = n(326029);
function p(e) {
    let { notice: t, children: n } = e,
        { showNotice: l, handleStoreUpdate: a } = (0, c.L_)(),
        u = t?.stores;
    s.useEffect(() => {
        if (null != u) {
            let e = new r.ru(u, () => {
                a(u);
            });
            return (
                e.attach("SettingPanelNotice"),
                a(u),
                () => {
                    e.detach();
                }
            );
        }
    }, [u, a]);
    let m = s.useMemo(() => {
        if (null == t || !l) return null;
        let { element: e } = t;
        return (0, i.jsx)(d.FQk, { className: h.lm, children: (0, i.jsx)(e, {}) });
    }, [t, l]);
    return (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(o.F, { component: "div", children: m })] });
}
function T(e) {
    let { decoration: t } = e,
        n = t.component;
    return (0, i.jsx)("div", {
        className: a()(h.oK, { [h.qf]: t.sticky }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {}),
    });
}
function f(e) {
    let { notice: t, children: n, useObscuredNotice: l } = e,
        a = s.useRef(null),
        r = l?.();
    return null != r
        ? (0, i.jsx)(r, {})
        : (0, i.jsx)(p, {
              notice: t,
              children: (0, i.jsxs)(d.GtU, {
                  className: h.XG,
                  ref: (e) => {
                      _.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, i.jsx)("div", {
                          className: h.nd,
                          ref: a,
                          children: (0, i.jsx)(d.xpW, { containerRef: a, children: n }),
                      }),
                      (0, i.jsx)("div", { className: h.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function S(e) {
    let { layout: t, decoration: n } = e;
    return (0, i.jsxs)("div", {
        className: h.LZ,
        children: [
            null != n && (0, i.jsx)(T, { decoration: n }),
            t.map((e, n) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(x.A, { node: e }),
                            n !== t.length - 1 && (0, i.jsx)(A.A, { className: h.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function b(e) {
    let { panelKey: t, layout: n, notice: l, decoration: a, useObscuredNotice: r } = e,
        o =
            m.A.useState((e) => {
                let { currentTabKeys: n } = e;
                return n.get(t);
            }) ?? n[0].key;
    s.useEffect(() => {
        let e = m.A.getField("currentTabKeys");
        if (n.some((n) => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), m.A.setState({ currentTabKeys: i });
    }, [n, t]);
    let c = n.find((e) => e.key === o) ?? n[0];
    return (0, i.jsxs)(
        f,
        {
            notice: l,
            useObscuredNotice: r,
            children: [
                (0, i.jsx)(d.VQ0, {
                    className: h.$H,
                    selectedItem: o,
                    onItemSelect: (e) => {
                        g.A.navigate(e, {
                            onTransitionStart: () => {
                                let t = n.find((t) => t.key === e);
                                t?.onItemSelect?.();
                            },
                        });
                    },
                    orientation: "horizontal",
                    type: "top",
                    look: "brand",
                    children: n.map((e) => {
                        let { key: t, getTitle: n } = e;
                        return (0, i.jsx)(d.VQ0.Item, { id: t, children: n() }, t);
                    }),
                }),
                (0, i.jsx)(d.VQ0.Panel, { id: o, children: (0, i.jsx)(S, { layout: c.layout, decoration: a }) }),
            ],
        },
        t,
    );
}
function E(e) {
    let { panelKey: t, notice: n, decoration: s, layout: l, useObscuredNotice: a } = e;
    return (0, i.jsx)(f, { notice: n, useObscuredNotice: a, children: (0, i.jsx)(S, { layout: l, decoration: s }) }, t);
}
function C(e) {
    let { node: t } = e,
        { layout: n } = t;
    if ((0, u.zY)(n))
        return (0, i.jsx)(b, {
            panelKey: t.key,
            notice: t.notice,
            decoration: t.decoration,
            useObscuredNotice: t.useObscuredNotice,
            layout: n,
        });
    if ((0, u.Iu)(n))
        return (0, i.jsx)(E, {
            panelKey: t.key,
            notice: t.notice,
            decoration: t.decoration,
            useObscuredNotice: t.useObscuredNotice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
