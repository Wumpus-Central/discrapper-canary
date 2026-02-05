n.d(t, { j: () => f });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(73939),
    l = n(397927),
    o = n(974544),
    c = n(826673),
    d = n(351906),
    u = n(823092),
    _ = n(963935),
    m = n(894858),
    A = n(641324),
    g = n(46373),
    E = n(49999),
    h = n(872175);
function p(e) {
    let { notice: t, children: n } = e,
        { showNotice: o, handleStoreUpdate: c } = (0, u.L_)(),
        d = t?.stores;
    s.useEffect(() => {
        if (null != d) {
            let e = new r.ru(d, () => {
                c(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                c(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, c]);
    let _ = s.useMemo(() => {
        if (null == t || !o) return null;
        let { element: e } = t;
        return (0, i.jsx)(l.FQk, { className: h.lm, children: (0, i.jsx)(e, {}) });
    }, [t, o]);
    return (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(a.F, { component: "div", children: _ })] });
}
function C(e) {
    let { scrollerRef: t, panelKey: n, notice: r, children: a } = e,
        o = s.useRef(null);
    return (
        s.useEffect(
            () =>
                m.A.subscribe(
                    (e) => {
                        let { navTransition: t } = e;
                        return t?.targetKey;
                    },
                    (e) => {
                        n === e && m.A.setState({ navTransition: void 0, disableSidebarCategoryAutoSelect: !1 });
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                ),
            [n],
        ),
        (0, i.jsx)(p, {
            notice: r,
            children: (0, i.jsx)(
                l.ArX,
                {
                    "data-settings-panel-scroller": !0,
                    className: h.XG,
                    ref: t,
                    children: (0, i.jsx)("div", {
                        className: h.nd,
                        ref: o,
                        children: (0, i.jsx)(l.xpW, { containerRef: o, children: a }),
                    }),
                },
                n,
            ),
        })
    );
}
function x(e) {
    let { layout: t } = e;
    return (0, i.jsx)("div", {
        className: h.LZ,
        children: t.map((e, n) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)(A.A, { node: e }),
                        n !== t.length - 1 && (0, i.jsx)(g.A, { className: h.yF }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function T(e) {
    let { panelKey: t, layout: n, notice: r } = e,
        a =
            m.A.useState((e) => {
                let { currentTabKeys: n } = e;
                return n.get(t);
            }) ?? n[0].key,
        { navigateWithValidation: o } = (0, u.L_)();
    s.useEffect(() => {
        let e = m.A.getField("currentTabKeys");
        if (n.some((n) => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), m.A.setState({ currentTabKeys: i });
    }, [n, t]);
    let c = n.find((e) => e.key === a) ?? n[0];
    return (0, i.jsxs)(C, {
        panelKey: t,
        notice: r,
        children: [
            (0, i.jsx)(l.VQ0, {
                className: h.$H,
                selectedItem: a,
                onItemSelect: (e) => {
                    o(() => {
                        if (e === a) return;
                        let i = new Map(m.A.getField("currentTabKeys"));
                        i.set(t, e), m.A.setState({ currentTabKeys: i });
                        let s = n.find((t) => t.key === e);
                        s?.onItemSelect?.();
                    });
                },
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: n.map((e) => {
                    let { key: t, getTitle: n } = e;
                    return (0, i.jsx)(l.VQ0.Item, { id: t, children: n() }, t);
                }),
            }),
            (0, i.jsx)(l.VQ0.Panel, {
                id: a,
                children:
                    null != c.StronglyDiscouragedCustomComponent
                        ? (0, i.jsx)(c.StronglyDiscouragedCustomComponent, {})
                        : (0, i.jsx)(x, { layout: c.layout }),
            }),
        ],
    });
}
function I(e) {
    let { panelKey: t, notice: n, layout: s } = e;
    return (0, i.jsx)(C, { panelKey: t, notice: n, children: (0, i.jsx)(x, { layout: s }) });
}
function S(e) {
    let { component: t, panelKey: n, notice: s } = e;
    return (0, i.jsx)(C, { panelKey: n, notice: s, children: (0, i.jsx)(t, {}) });
}
function f(e) {
    let { node: t } = e,
        { layout: n } = t,
        a = (0, r.bG)([d.A], () => d.A.hidePersonalInformation);
    if (
        (s.useEffect(() => {
            if (t.parent?.type !== _.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: e } = t.parent,
                n = "getDismissibleContentTypes" in e ? e.getDismissibleContentTypes?.() : null;
            null != n &&
                n.forEach((e) => {
                    (0, c.Dr)(e, { dismissAction: E.i.AUTO, forceTrack: !0 });
                });
        }, [t]),
        a && t.hideInStreamerMode)
    )
        return (0, i.jsx)(o.A, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, i.jsx)(S, { component: t.StronglyDiscouragedCustomComponent, panelKey: t.key, notice: t.notice });
    if ((0, _.zY)(n)) return (0, i.jsx)(T, { panelKey: t.key, notice: t.notice, layout: n });
    if ((0, _.Iu)(n)) return (0, i.jsx)(I, { panelKey: t.key, notice: t.notice, layout: n });
    throw Error("Panels must have a list of categories or a list of tabs");
}
