n.d(t, { KA: () => A, Ay: () => p, jL: () => h });
var i = n(64700),
    l = n(839214),
    s = n(419954),
    a = n(284009),
    r = n.n(a),
    o = n(963935);
class d {
    map = new Map();
    defaultPanel;
    register(e) {
        let {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: l,
            parentCategoryKey: s,
            parentAccordionKey: a,
        } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: l,
            parentCategoryKey: s,
            parentAccordionKey: a,
        });
    }
    entry(e) {
        return this.map.get(e);
    }
    get(e) {
        return this.entry(e)?.node;
    }
    setDefaultPanel(e) {
        this.defaultPanel = e;
    }
    getDefaultPanel() {
        return this.defaultPanel;
    }
    getPanelOrThrow(e) {
        let t = this.get(e);
        return r()(t?.type === o.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t;
    }
}
function u(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...l } = e;
        return (
            n.register({
                node: l,
                parentSidebarItemKey: i.sidebarItem,
                parentPanelKey: i.panel?.key,
                parentTabKey: i.tab?.key,
                parentCategoryKey: i.category?.key,
                parentAccordionKey: i.accordion?.key,
            }),
            l
        );
    }
    let l = i;
    e.type === o.Z6.SIDEBAR_ITEM && (l = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === o.Z6.PANEL && (l = { sidebarItem: i.sidebarItem, panel: e }),
        e.type === o.Z6.NESTED_PANEL_NAVIGATOR && (l = { ...i, panel: e.layout[0] }),
        e.type === o.Z6.CATEGORY && (l = { ...i, category: e }),
        e.type === o.Z6.ACCORDION && (l = { ...i, accordion: e }),
        e.type === o.Z6.TAB_ITEM && (l = { ...i, tab: e });
    let s = e.layout.map((e) => u(e, t, n, l)).filter((e) => null != e);
    if (
        0 === s.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: a, ...r } = e,
        d = { ...r, layout: s };
    return (
        n.register({
            node: d,
            parentSidebarItemKey: l.sidebarItem,
            parentPanelKey: l.panel?.key,
            parentTabKey: l.tab?.key,
            parentCategoryKey: l.category?.key,
            parentAccordionKey: l.accordion?.key,
        }),
        d
    );
}
var c = n(91871),
    g = n.n(c),
    _ = n(614820);
let m = (0, l.D)(() => ({ enabled: !1 }));
function h(e) {
    m.setState({ enabled: e });
}
function A() {
    return m.useField("enabled");
}
function p(e, t) {
    let n = i.useMemo(() => (0, s.hl)(e), [e]),
        l = E(n, t ?? ""),
        a = E(n, "");
    return i.useMemo(() => {
        let e = new d(),
            t = new d();
        return u(n, a, t), { node: u(n, l, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t };
    }, [l, a, n]);
}
function E(e, t) {
    let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = new Set(),
                l = function (e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = (e.usePredicate?.() === !1 && !n) || s,
                        d =
                            (function (e, t, n) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                if (e.type === o.Z6.TAB_ITEM) return !1;
                                let i = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    l = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (n || (null == i && null == l)) return !1;
                                if ("" === t) return !0;
                                if (e.type === o.Z6.STATIC) return !1;
                                let s = t.toLowerCase();
                                for (let e of l ?? []) if (g()(s, e.toLowerCase())) return !0;
                                let a = !1;
                                if (null != i) {
                                    let e = (0, _.O)(i)?.toLowerCase();
                                    null != e && (a = g()(s, e));
                                }
                                return a;
                            })(e, t, r) || a,
                        u = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) u = l(t, r, d) || u;
                    return !r && (d || u) && i.add(e.key), d || u;
                };
            return l(e), i;
        })(e, t, A()),
        [l, s] = i.useState(n),
        a = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(l, n);
    return (
        i.useEffect(() => {
            a && s(n);
        }, [a, n]),
        l
    );
}
