r.d(t, { KA: () => S, Ay: () => h, jL: () => N });
var n = r(582128),
    i = r(839214),
    a = r(419954),
    s = r(284009),
    l = r.n(s),
    o = r(963935);
class u {
    map = new Map();
    defaultPanel;
    register(e) {
        let { node: t, parentSidebarItemKey: r, parentPanelKey: n, parentCategoryKey: i, parentAccordionKey: a } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: r,
            parentPanelKey: n,
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
function c(e, t, r) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...i } = e;
        return (
            r.register({
                node: i,
                parentSidebarItemKey: n.sidebarItem,
                parentPanelKey: n.panel?.key,
                parentCategoryKey: n.category?.key,
                parentAccordionKey: n.accordion?.key,
            }),
            i
        );
    }
    let i = n;
    (e.type === o.Z6.SIDEBAR_ITEM && (i = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === o.Z6.PANEL && (i = { sidebarItem: n.sidebarItem, panel: e }),
        e.type === o.Z6.NESTED_PANEL_NAVIGATOR && (i = { ...n, panel: e.layout[0] }),
        e.type === o.Z6.CATEGORY && (i = { ...n, category: e }),
        e.type === o.Z6.ACCORDION && (i = { ...n, accordion: e }));
    let a = e.layout.map((e) => c(e, t, r, i)).filter((e) => null != e);
    if (
        0 === a.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: s, ...l } = e,
        u = { ...l, layout: a };
    return (
        r.register({
            node: u,
            parentSidebarItemKey: i.sidebarItem,
            parentPanelKey: i.panel?.key,
            parentCategoryKey: i.category?.key,
            parentAccordionKey: i.accordion?.key,
        }),
        u
    );
}
var d = r(91871),
    C = r.n(d),
    O = r(84571);
let T = (0, i.D)(() => ({ enabled: !1 }));
function N(e) {
    T.setState({ enabled: e });
}
function S() {
    return T.useField("enabled");
}
function h(e, t) {
    let r = n.useMemo(() => (0, a.hl)(e), [e]),
        i = E(r, t ?? ""),
        s = E(r, "");
    return n.useMemo(() => {
        let e = new u(),
            t = new u();
        return (c(r, s, t), { node: c(r, i, e) ?? { ...r, layout: [] }, visibleDirectory: e, accessibleDirectory: t });
    }, [i, s, r]);
}
function E(e, t) {
    let r = (function (e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = new Set(),
                i = function (e) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = (e.usePredicate?.() === !1 && !r) || a,
                        u =
                            (function (e, t, r) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                let n = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    i = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (r || (null == n && null == i)) return !1;
                                if ("" === t) return !0;
                                let a = t.toLowerCase();
                                for (let e of i ?? []) if (C()(a, e.toLowerCase())) return !0;
                                let s = !1;
                                if (null != n) {
                                    let e = (0, O.O)(n)?.toLowerCase();
                                    null != e && (s = C()(a, e));
                                }
                                return s;
                            })(e, t, l) || s,
                        c = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) c = i(t, l, u) || c;
                    return (!l && (u || c) && n.add(e.key), u || c);
                };
            return (i(e), n);
        })(e, t, S()),
        [i, a] = n.useState(r),
        s = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let r of e) if (!t.has(r)) return !0;
            return !1;
        })(i, r);
    return (
        n.useEffect(() => {
            s && a(r);
        }, [s, r]),
        i
    );
}
