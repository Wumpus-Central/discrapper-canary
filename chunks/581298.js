n.d(t, { KA: () => h, Ay: () => S, jL: () => E });
var i = n(582128),
    l = n(839214),
    s = n(419954),
    r = n(284009),
    a = n.n(r),
    o = n(963935);
class u {
    map = new Map();
    defaultPanel;
    register(e) {
        let { node: t, parentSidebarItemKey: n, parentPanelKey: i, parentCategoryKey: l, parentAccordionKey: s } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentCategoryKey: l,
            parentAccordionKey: s,
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
function d(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...l } = e;
        return (
            n.register({
                node: l,
                parentSidebarItemKey: i.sidebarItem,
                parentPanelKey: i.panel?.key,
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
        e.type === o.Z6.ACCORDION && (l = { ...i, accordion: e });
    let s = e.layout.map((e) => d(e, t, n, l)).filter((e) => null != e);
    if (
        0 === s.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: r, ...a } = e,
        u = { ...a, layout: s };
    return (
        n.register({
            node: u,
            parentSidebarItemKey: l.sidebarItem,
            parentPanelKey: l.panel?.key,
            parentCategoryKey: l.category?.key,
            parentAccordionKey: l.accordion?.key,
        }),
        u
    );
}
var c = n(91871),
    g = n.n(c),
    m = n(84571);
let A = (0, l.D)(() => ({ enabled: !1 }));
function E(e) {
    A.setState({ enabled: e });
}
function h() {
    return A.useField("enabled");
}
function S(e, t) {
    let n = i.useMemo(() => (0, s.hl)(e), [e]),
        l = T(n, t ?? ""),
        r = T(n, "");
    return i.useMemo(() => {
        let e = new u(),
            t = new u();
        return d(n, r, t), { node: d(n, l, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t };
    }, [l, r, n]);
}
function T(e, t) {
    let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = new Set(),
                l = function (e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = (e.usePredicate?.() === !1 && !n) || s,
                        u =
                            (function (e, t, n) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                let i = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    l = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (n || (null == i && null == l)) return !1;
                                if ("" === t) return !0;
                                let s = t.toLowerCase();
                                for (let e of l ?? []) if (g()(s, e.toLowerCase())) return !0;
                                let r = !1;
                                if (null != i) {
                                    let e = (0, m.O)(i)?.toLowerCase();
                                    null != e && (r = g()(s, e));
                                }
                                return r;
                            })(e, t, a) || r,
                        d = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) d = l(t, a, u) || d;
                    return !a && (u || d) && i.add(e.key), u || d;
                };
            return l(e), i;
        })(e, t, h()),
        [l, s] = i.useState(n),
        r = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(l, n);
    return (
        i.useEffect(() => {
            r && s(n);
        }, [r, n]),
        l
    );
}
