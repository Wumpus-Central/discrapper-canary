n.d(t, { j: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(974544),
    u = n(351906),
    m = n(823092),
    _ = n(963935),
    g = n(894858),
    x = n(272053),
    A = n(397274),
    h = n(641324),
    p = n(46373),
    f = n(326029);
function T(e) {
    let { notice: t, children: n } = e,
        { showNotice: l, handleStoreUpdate: a } = (0, m.L_)(),
        c = t?.stores;
    s.useEffect(() => {
        if (null != c) {
            let e = new r.ru(c, () => {
                a(c);
            });
            return (
                e.attach("SettingPanelNotice"),
                a(c),
                () => {
                    e.detach();
                }
            );
        }
    }, [c, a]);
    let u = s.useMemo(() => {
        if (null == t || !l) return null;
        let { element: e } = t;
        return (0, i.jsx)(d.FQk, { className: f.lm, children: (0, i.jsx)(e, {}) });
    }, [t, l]);
    return (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(o.F, { component: "div", children: u })] });
}
function S(e) {
    let { decoration: t } = e,
        n = t.component;
    return (0, i.jsx)("div", {
        className: a()(f.oK, { [f.qf]: t.sticky }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {}),
    });
}
function E(e) {
    let { panelKey: t, notice: n, children: l } = e,
        a = s.useRef(null);
    return (0, i.jsx)(T, {
        notice: n,
        children: (0, i.jsx)(
            d.GtU,
            {
                className: f.XG,
                ref: (e) => {
                    A.A.setPanelScrollerRef(e);
                },
                children: (0, i.jsx)("div", {
                    className: f.nd,
                    ref: a,
                    children: (0, i.jsx)(d.xpW, { containerRef: a, children: l }),
                }),
            },
            t,
        ),
    });
}
function b(e) {
    let { layout: t, decoration: n } = e;
    return (0, i.jsxs)("div", {
        className: f.LZ,
        children: [
            null != n && (0, i.jsx)(S, { decoration: n }),
            t.map((e, n) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(h.A, { node: e }),
                            n !== t.length - 1 && (0, i.jsx)(p.A, { className: f.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function C(e) {
    let { panelKey: t, layout: n, notice: l, decoration: a } = e,
        r =
            g.A.useState((e) => {
                let { currentTabKeys: n } = e;
                return n.get(t);
            }) ?? n[0].key;
    s.useEffect(() => {
        let e = g.A.getField("currentTabKeys");
        if (n.some((n) => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), g.A.setState({ currentTabKeys: i });
    }, [n, t]);
    let o = n.find((e) => e.key === r) ?? n[0];
    return (0, i.jsxs)(E, {
        panelKey: t,
        notice: l,
        children: [
            (0, i.jsx)(d.VQ0, {
                className: f.$H,
                selectedItem: r,
                onItemSelect: (e) => {
                    x.A.navigate(e, {
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
            (0, i.jsx)(d.VQ0.Panel, {
                id: r,
                children:
                    null != o.StronglyDiscouragedCustomComponent
                        ? (0, i.jsx)(o.StronglyDiscouragedCustomComponent, {})
                        : (0, i.jsx)(b, { layout: o.layout, decoration: a }),
            }),
        ],
    });
}
function v(e) {
    let { panelKey: t, notice: n, decoration: s, layout: l } = e;
    return (0, i.jsx)(E, { panelKey: t, notice: n, children: (0, i.jsx)(b, { layout: l, decoration: s }) });
}
function N(e) {
    let { node: t } = e,
        { layout: n } = t;
    if ((0, r.bG)([u.A], () => u.A.hidePersonalInformation) && t.hideInStreamerMode) return (0, i.jsx)(c.A, {});
    if ((0, _.zY)(n)) return (0, i.jsx)(C, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    if ((0, _.Iu)(n)) return (0, i.jsx)(v, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    throw Error("Panels must have a list of categories or a list of tabs");
}
