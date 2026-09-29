n.d(t, { KA: () => N, Ay: () => E, jL: () => C });
var r = n(582128),
    i = n(839214),
    u = n(419954),
    o = n(284009),
    l = n.n(o),
    a = n(963935);
class s {
    map = new Map();
    defaultPanel;
    register(e) {
        let { node: t, parentSidebarItemKey: n, parentPanelKey: r, parentCategoryKey: i, parentAccordionKey: u } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: r,
            parentCategoryKey: i,
            parentAccordionKey: u,
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
        return (l()(t?.type === a.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t);
    }
}
function c(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, a.nW)(e)) {
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
    (e.type === a.Z6.SIDEBAR_ITEM && (i = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === a.Z6.PANEL && (i = { sidebarItem: r.sidebarItem, panel: e }),
        e.type === a.Z6.NESTED_PANEL_NAVIGATOR && (i = { ...r, panel: e.layout[0] }),
        e.type === a.Z6.CATEGORY && (i = { ...r, category: e }),
        e.type === a.Z6.ACCORDION && (i = { ...r, accordion: e }));
    let u = e.layout.map((e) => c(e, t, n, i)).filter((e) => null != e);
    if (
        0 === u.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === a.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: o, ...l } = e,
        s = { ...l, layout: u };
    return (
        n.register({
            node: s,
            parentSidebarItemKey: i.sidebarItem,
            parentPanelKey: i.panel?.key,
            parentCategoryKey: i.category?.key,
            parentAccordionKey: i.accordion?.key,
        }),
        s
    );
}
var T = n(91871),
    d = n.n(T),
    O = n(84571);
let f = (0, i.D)(() => ({ enabled: !1 }));
function C(e) {
    f.setState({ enabled: e });
}
function N() {
    return f.useField("enabled");
}
function E(e, t) {
    let n = r.useMemo(() => (0, u.hl)(e), [e]),
        i = S(n, t ?? ""),
        o = S(n, "");
    return r.useMemo(() => {
        let e = new s(),
            t = new s();
        return (c(n, o, t), { node: c(n, i, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t });
    }, [i, o, n]);
}
function S(e, t) {
    let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = new Set(),
                i = function (e) {
                    let u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = (e.usePredicate?.() === !1 && !n) || u,
                        s =
                            (function (e, t, n) {
                                if (e.type === a.Z6.SECTION && e.hoisted) return !0;
                                let r = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    i = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (n || (null == r && null == i)) return !1;
                                if ("" === t) return !0;
                                let u = t.toLowerCase();
                                for (let e of i ?? []) if (d()(u, e.toLowerCase())) return !0;
                                let o = !1;
                                if (null != r) {
                                    let e = (0, O.O)(r)?.toLowerCase();
                                    null != e && (o = d()(u, e));
                                }
                                return o;
                            })(e, t, l) || o,
                        c = !1;
                    if ((0, a.nW)(e)) for (let t of e.layout) c = i(t, l, s) || c;
                    return (!l && (s || c) && r.add(e.key), s || c);
                };
            return (i(e), r);
        })(e, t, N()),
        [i, u] = r.useState(n),
        o = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(i, n);
    return (
        r.useEffect(() => {
            o && u(n);
        }, [o, n]),
        i
    );
}
