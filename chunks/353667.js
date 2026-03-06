n.d(t, { j: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(974544),
    u = n(826673),
    _ = n(351906),
    g = n(823092),
    m = n(963935),
    A = n(894858),
    h = n(272053),
    p = n(641324),
    x = n(46373),
    E = n(49999),
    T = n(639485);
function S(e) {
    let { notice: t, children: n } = e,
        { showNotice: l, handleStoreUpdate: a } = (0, g.L_)(),
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
        return (0, i.jsx)(d.FQk, { className: T.lm, children: (0, i.jsx)(e, {}) });
    }, [t, l]);
    return (0, i.jsxs)(i.Fragment, { children: [n, (0, i.jsx)(o.F, { component: "div", children: u })] });
}
function C(e) {
    let { decoration: t } = e,
        n = t.component;
    return (0, i.jsx)("div", {
        className: a()(T.oK, { [T.qf]: t.sticky }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {}),
    });
}
function f(e) {
    let { scrollerRef: t, panelKey: n, notice: l, children: a } = e,
        r = s.useRef(null);
    return (0, i.jsx)(S, {
        notice: l,
        children: (0, i.jsx)(
            d.ArX,
            {
                "data-settings-panel-scroller": !0,
                className: T.XG,
                ref: t,
                children: (0, i.jsx)("div", {
                    className: T.nd,
                    ref: r,
                    children: (0, i.jsx)(d.xpW, { containerRef: r, children: a }),
                }),
            },
            n,
        ),
    });
}
function I(e) {
    let { layout: t, decoration: n } = e;
    return (0, i.jsxs)("div", {
        className: T.LZ,
        children: [
            null != n && (0, i.jsx)(C, { decoration: n }),
            t.map((e, n) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(p.A, { node: e }),
                            n !== t.length - 1 && (0, i.jsx)(x.A, { className: T.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function b(e) {
    let { panelKey: t, layout: n, notice: l, decoration: a } = e,
        r =
            A.A.useState((e) => {
                let { currentTabKeys: n } = e;
                return n.get(t);
            }) ?? n[0].key;
    s.useEffect(() => {
        let e = A.A.getField("currentTabKeys");
        if (n.some((n) => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), A.A.setState({ currentTabKeys: i });
    }, [n, t]);
    let o = n.find((e) => e.key === r) ?? n[0];
    return (0, i.jsxs)(f, {
        panelKey: t,
        notice: l,
        children: [
            (0, i.jsx)(d.VQ0, {
                className: T.$H,
                selectedItem: r,
                onItemSelect: (e) => {
                    h.A.navigate(e, {
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
                        : (0, i.jsx)(I, { layout: o.layout, decoration: a }),
            }),
        ],
    });
}
function N(e) {
    let { panelKey: t, notice: n, decoration: s, layout: l } = e;
    return (0, i.jsx)(f, { panelKey: t, notice: n, children: (0, i.jsx)(I, { layout: l, decoration: s }) });
}
function v(e) {
    let { component: t, panelKey: n, notice: s } = e;
    return (0, i.jsx)(f, { panelKey: n, notice: s, children: (0, i.jsx)(t, {}) });
}
function j(e) {
    let { node: t } = e,
        { layout: n } = t,
        l = (0, r.bG)([_.A], () => _.A.hidePersonalInformation);
    if (
        (s.useEffect(() => {
            if (t.parent?.type !== m.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: e } = t.parent,
                n = "getDismissibleContentTypes" in e ? e.getDismissibleContentTypes?.() : null;
            null != n &&
                n.forEach((e) => {
                    (0, u.Dr)(e, { dismissAction: E.i.AUTO, forceTrack: !0 });
                });
        }, [t]),
        l && t.hideInStreamerMode)
    )
        return (0, i.jsx)(c.A, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, i.jsx)(v, { component: t.StronglyDiscouragedCustomComponent, panelKey: t.key, notice: t.notice });
    if ((0, m.zY)(n)) return (0, i.jsx)(b, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    if ((0, m.Iu)(n)) return (0, i.jsx)(N, { panelKey: t.key, notice: t.notice, decoration: t.decoration, layout: n });
    throw Error("Panels must have a list of categories or a list of tabs");
}
