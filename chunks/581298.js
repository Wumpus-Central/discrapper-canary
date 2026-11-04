n.d(t, { KA: () => S, Ay: () => y, jL: () => N });
var r = n(582128),
    i = n(839214),
    a = n(419954),
    s = n(284009),
    l = n.n(s),
    o = n(963935);
class u {
    map = new Map();
    defaultPanel;
    register(e) {
        let { node: t, parentSidebarItemKey: n, parentPanelKey: r, parentCategoryKey: i, parentAccordionKey: a } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: r,
            parentCategoryKey: i,
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
        return (l()(t?.type === o.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t);
    }
}
function c(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...i } = e;
        return (
            n.register({
                node: i,
                parentSidebarItemKey: r.sidebarItem,
                parentPanelKey: r.panel?.key,
                parentCategoryKey: r.category?.key,
                parentAccordionKey: r.accordion?.key,
            }),
            i
        );
    }
    let i = r;
    (e.type === o.Z6.SIDEBAR_ITEM && (i = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === o.Z6.PANEL && (i = { sidebarItem: r.sidebarItem, panel: e }),
        e.type === o.Z6.NESTED_PANEL_NAVIGATOR && (i = { ...r, panel: e.layout[0] }),
        e.type === o.Z6.CATEGORY && (i = { ...r, category: e }),
        e.type === o.Z6.ACCORDION && (i = { ...r, accordion: e }));
    let a = e.layout.map((e) => c(e, t, n, i)).filter((e) => null != e);
    if (
        0 === a.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: s, ...l } = e,
        u = { ...l, layout: a };
    return (
        n.register({
            node: u,
            parentSidebarItemKey: i.sidebarItem,
            parentPanelKey: i.panel?.key,
            parentCategoryKey: i.category?.key,
            parentAccordionKey: i.accordion?.key,
        }),
        u
    );
}
var d = n(91871),
    C = n.n(d),
    O = n(84571);
let T = (0, i.D)(() => ({ enabled: !1 }));
function N(e) {
    T.setState({ enabled: e });
}
function S() {
    return T.useField("enabled");
}
function y(e, t) {
    let n = r.useMemo(() => (0, a.hl)(e), [e]),
        i = E(n, t ?? ""),
        s = E(n, "");
    return r.useMemo(() => {
        let e = new u(),
            t = new u();
        return (c(n, s, t), { node: c(n, i, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t });
    }, [i, s, n]);
}
function E(e, t) {
    let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = new Set(),
                i = function (e) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = (e.usePredicate?.() === !1 && !n) || a,
                        u =
                            (function (e, t, n) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                let r = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    i = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (n || (null == r && null == i)) return !1;
                                if ("" === t) return !0;
                                let a = t.toLowerCase();
                                for (let e of i ?? []) if (C()(a, e.toLowerCase())) return !0;
                                let s = !1;
                                if (null != r) {
                                    let e = (0, O.O)(r)?.toLowerCase();
                                    null != e && (s = C()(a, e));
                                }
                                return s;
                            })(e, t, l) || s,
                        c = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) c = i(t, l, u) || c;
                    return (!l && (u || c) && r.add(e.key), u || c);
                };
            return (i(e), r);
        })(e, t, S()),
        [i, a] = r.useState(n),
        s = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(i, n);
    return (
        r.useEffect(() => {
            s && a(n);
        }, [s, n]),
        i
    );
}
