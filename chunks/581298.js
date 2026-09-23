n.d(t, { KA: () => h, Ay: () => S, jL: () => E });
var i = n(582128),
    s = n(839214),
    l = n(419954),
    r = n(284009),
    a = n.n(r),
    o = n(963935);
class u {
    map = new Map();
    defaultPanel;
    register(e) {
        let { node: t, parentSidebarItemKey: n, parentPanelKey: i, parentCategoryKey: s, parentAccordionKey: l } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentCategoryKey: s,
            parentAccordionKey: l,
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
        return (a()(t?.type === o.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t);
    }
}
function d(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, o.nW)(e)) {
        let { usePredicate: t, ...s } = e;
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
    let s = i;
    (e.type === o.Z6.SIDEBAR_ITEM && (s = { sidebarItem: e.key, panel: e.layout[0] }),
        e.type === o.Z6.PANEL && (s = { sidebarItem: i.sidebarItem, panel: e }),
        e.type === o.Z6.NESTED_PANEL_NAVIGATOR && (s = { ...i, panel: e.layout[0] }),
        e.type === o.Z6.CATEGORY && (s = { ...i, category: e }),
        e.type === o.Z6.ACCORDION && (s = { ...i, accordion: e }));
    let l = e.layout.map((e) => d(e, t, n, s)).filter((e) => null != e);
    if (
        0 === l.length &&
        !1 !== e.collapseOnEmpty &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === o.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let { usePredicate: r, ...a } = e,
        u = { ...a, layout: l };
    return (
        n.register({
            node: u,
            parentSidebarItemKey: s.sidebarItem,
            parentPanelKey: s.panel?.key,
            parentCategoryKey: s.category?.key,
            parentAccordionKey: s.accordion?.key,
        }),
        u
    );
}
var c = n(91871),
    g = n.n(c),
    m = n(84571);
let A = (0, s.D)(() => ({ enabled: !1 }));
function E(e) {
    A.setState({ enabled: e });
}
function h() {
    return A.useField("enabled");
}
function S(e, t) {
    let n = i.useMemo(() => (0, l.hl)(e), [e]),
        s = x(n, t ?? ""),
        r = x(n, "");
    return i.useMemo(() => {
        let e = new u(),
            t = new u();
        return (d(n, r, t), { node: d(n, s, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t });
    }, [s, r, n]);
}
function x(e, t) {
    let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = new Set(),
                s = function (e) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = (e.usePredicate?.() === !1 && !n) || l,
                        u =
                            (function (e, t, n) {
                                if (e.type === o.Z6.SECTION && e.hoisted) return !0;
                                let i = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                                    s = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                                if (n || (null == i && null == s)) return !1;
                                if ("" === t) return !0;
                                let l = t.toLowerCase();
                                for (let e of s ?? []) if (g()(l, e.toLowerCase())) return !0;
                                let r = !1;
                                if (null != i) {
                                    let e = (0, m.O)(i)?.toLowerCase();
                                    null != e && (r = g()(l, e));
                                }
                                return r;
                            })(e, t, a) || r,
                        d = !1;
                    if ((0, o.nW)(e)) for (let t of e.layout) d = s(t, a, u) || d;
                    return (!a && (u || d) && i.add(e.key), u || d);
                };
            return (s(e), i);
        })(e, t, h()),
        [s, l] = i.useState(n),
        r = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(s, n);
    return (
        i.useEffect(() => {
            r && l(n);
        }, [r, n]),
        s
    );
}
