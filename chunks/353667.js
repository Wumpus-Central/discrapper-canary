n.d(t, { j: () => j });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(73939),
    c = n(397927),
    d = n(974544),
    u = n(826673),
    _ = n(351906),
    m = n(823092),
    A = n(963935),
    g = n(894858),
    h = n(641324),
    x = n(46373),
    p = n(49999),
    E = n(639485);
function C(e) {
    let { notice: t, children: n } = e,
        { showNotice: a, handleStoreUpdate: l } = (0, m.L_)(),
        d = t?.stores;
    s.useEffect(() => {
        if (null != d) {
            let e = new r.ru(d, () => {
                l(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                l(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, l]);
    let u = s.useMemo(() => {
        if (null == t || !a) return null;
        let { element: e } = t;
        return (0, i.jsx)(c.FQk, { className: E.lm, children: (0, i.jsx)(e, {}) });
    }, [t, a]);
    return (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(o.F, { component: "div", children: u })] });
}
function T(e) {
    let { decoration: t } = e,
        n = t.component;
    return (0, i.jsx)("div", {
        className: l()(E.oK, { [E.qf]: t.sticky }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {}),
    });
}
function S(e) {
    let { scrollerRef: t, panelKey: n, notice: a, children: l } = e,
        r = s.useRef(null);
    return (
        s.useEffect(
            () =>
                g.A.subscribe(
                    (e) => {
                        let { navTransition: t } = e;
                        return t?.targetKey;
                    },
                    (e) => {
                        n === e && g.A.setState({ navTransition: void 0, disableSidebarCategoryAutoSelect: !1 });
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                ),
            [n],
        ),
        (0, i.jsx)(C, {
            notice: a,
            children: (0, i.jsx)(
                c.ArX,
                {
                    "data-settings-panel-scroller": !0,
                    className: E.XG,
                    ref: t,
                    children: (0, i.jsx)("div", {
                        className: E.nd,
                        ref: r,
                        children: (0, i.jsx)(c.xpW, { containerRef: r, children: l }),
                    }),
                },
                n,
            ),
        })
    );
}
function I(e) {
    let { layout: t, decoration: n } = e;
    return (0, i.jsxs)("div", {
        className: E.LZ,
        children: [
            null != n && (0, i.jsx)(T, { decoration: n }),
            t.map((e, n) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(h.A, { node: e }),
                            n !== t.length - 1 && (0, i.jsx)(x.A, { className: E.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function f(e) {
    let { panelKey: t, layout: n, notice: a, decoration: l } = e,
        r =
            g.A.useState((e) => {
                let { currentTabKeys: n } = e;
                return n.get(t);
            }) ?? n[0].key,
        { navigateWithValidation: o } = (0, m.L_)();
    s.useEffect(() => {
        let e = g.A.getField("currentTabKeys");
        if (n.some((n) => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), g.A.setState({ currentTabKeys: i });
    }, [n, t]);
    let d = n.find((e) => e.key === r) ?? n[0];
    return (0, i.jsxs)(S, {
        panelKey: t,
        notice: a,
        children: [
            (0, i.jsx)(c.VQ0, {
                className: E.$H,
                selectedItem: r,
                onItemSelect: (e) => {
                    o(() => {
                        if (e === r) return;
                        let i = new Map(g.A.getField("currentTabKeys"));
                        i.set(t, e), g.A.setState({ currentTabKeys: i });
                        let s = n.find((t) => t.key === e);
                        s?.onItemSelect?.();
                    });
                },
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: n.map((e) => {
                    let { key: t, getTitle: n } = e;
                    return (0, i.jsx)(c.VQ0.Item, { id: t, children: n() }, t);
                }),
            }),
            (0, i.jsx)(c.VQ0.Panel, {
                id: r,
                children:
                    null != d.StronglyDiscouragedCustomComponent
                        ? (0, i.jsx)(d.StronglyDiscouragedCustomComponent, {})
                        : (0, i.jsx)(I, { layout: d.layout, decoration: l }),
            }),
        ],
    });
}
function N(e) {
    let { panelKey: t, notice: n, decoration: s, layout: a } = e;
    return (0, i.jsx)(S, { panelKey: t, notice: n, children: (0, i.jsx)(I, { layout: a, decoration: s }) });
}
function b(e) {
    let { component: t, panelKey: n, notice: s } = e;
    return (0, i.jsx)(S, { panelKey: n, notice: s, children: (0, i.jsx)(t, {}) });
}
function j(e) {
    let { node: t } = e,
        { layout: n } = t,
        a = (0, r.bG)([_.A], () => _.A.hidePersonalInformation);
    if (
        (s.useEffect(() => {
            if (t.parent?.type !== A.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: e } = t.parent,
                n = "getDismissibleContentTypes" in e ? e.getDismissibleContentTypes?.() : null;
            null != n &&
                n.forEach((e) => {
                    (0, u.Dr)(e, { dismissAction: p.i.AUTO, forceTrack: !0 });
                });
        }, [t]),
        a && t.hideInStreamerMode)
    )
        return (0, i.jsx)(d.A, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, i.jsx)(b, { component: t.StronglyDiscouragedCustomComponent, panelKey: t.key, notice: t.notice });
    if ((0, A.zY)(n)) return (0, i.jsx)(f, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    if ((0, A.Iu)(n)) return (0, i.jsx)(N, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    throw Error("Panels must have a list of categories or a list of tabs");
}
