i.d(t, { KA: () => E, Ay: () => S, jL: () => h });
var n = i(582128),
    l = i(839214),
    s = i(419954),
    r = i(284009),
    a = i.n(r),
    o = i(963935);
class u {
    map = new Map();
    defaultPanel;
    register(e) {
        let {
            node: t,
            parentSidebarItemKey: i,
            parentPanelKey: n,
            parentTabKey: l,
            parentCategoryKey: s,
            parentAccordionKey: r,
        } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: i,
            parentPanelKey: n,
            parentTabKey: l,
            parentCategoryKey: s,
            parentAccordionKey: r,
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
        return a()(t?.type === o.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t;
    }
}
function d(e, t, i) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...l } = e;
        return (
            i.register({
                node: l,
                parentSidebarItemKey: n.sidebarItem,
                parentPanelKey: n.panel?.key,
                parentTabKey: n.tab?.key,
                parentCategoryKey: n.category?.key,
                parentAccordionKey: n.accordion?.key,
            }),
            l
        );
    }
    let l = n;
    e.type === o.Z6.SIDEBAR_ITEM && (l = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === o.Z6.PANEL && (l = { sidebarItem: n.sidebarItem, panel: e }),
        e.type === o.Z6.NESTED_PANEL_NAVIGATOR && (l = { ...n, panel: e.layout[0] }),
        e.type === o.Z6.CATEGORY && (l = { ...n, category: e }),
        e.type === o.Z6.ACCORDION && (l = { ...n, accordion: e }),
        e.type === o.Z6.TAB_ITEM && (l = { ...n, tab: e });
    let s = e.layout.map((e) => d(e, t, i, l)).filter((e) => null != e);
    if (
        0 === s.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: r, ...a } = e,
        u = { ...a, layout: s };
    return (
        i.register({
            node: u,
            parentSidebarItemKey: l.sidebarItem,
            parentPanelKey: l.panel?.key,
            parentTabKey: l.tab?.key,
            parentCategoryKey: l.category?.key,
            parentAccordionKey: l.accordion?.key,
        }),
        u
    );
}
var c = i(91871),
    g = i.n(c),
    m = i(614820);
let A = (0, l.D)(() => ({ enabled: !1 }));
function h(e) {
    A.setState({ enabled: e });
}
function E() {
    return A.useField("enabled");
}
function S(e, t) {
    let i = n.useMemo(() => (0, s.hl)(e), [e]),
        l = T(i, t ?? ""),
        r = T(i, "");
    return n.useMemo(() => {
        let e = new u(),
            t = new u();
        return d(i, r, t), { node: d(i, l, e) ?? { ...i, layout: [] }, visibleDirectory: e, accessibleDirectory: t };
    }, [l, r, i]);
}
function T(e, t) {
    let i = (function (e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = new Set(),
                l = function (e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = (e.usePredicate?.() === !1 && !i) || s,
                        u =
                            (function (e, t, i) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                if (e.type === o.Z6.TAB_ITEM) return !1;
                                let n = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    l = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (i || (null == n && null == l)) return !1;
                                if ("" === t) return !0;
                                let s = t.toLowerCase();
                                for (let e of l ?? []) if (g()(s, e.toLowerCase())) return !0;
                                let r = !1;
                                if (null != n) {
                                    let e = (0, m.O)(n)?.toLowerCase();
                                    null != e && (r = g()(s, e));
                                }
                                return r;
                            })(e, t, a) || r,
                        d = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) d = l(t, a, u) || d;
                    return !a && (u || d) && n.add(e.key), u || d;
                };
            return l(e), n;
        })(e, t, E()),
        [l, s] = n.useState(i),
        r = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let i of e) if (!t.has(i)) return !0;
            return !1;
        })(l, i);
    return (
        n.useEffect(() => {
            r && s(i);
        }, [r, i]),
        l
    );
}
