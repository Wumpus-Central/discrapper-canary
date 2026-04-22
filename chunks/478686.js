n.d(t, {
    A: () =>
        function e(t, n, s) {
            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(t.key)) return null;
            if (!(0, i.nW)(t)) {
                let { usePredicate: e, ...n } = t;
                return (
                    s.register({
                        node: n,
                        parentSidebarItemKey: l.sidebarItem,
                        parentPanelKey: l.panel?.key,
                        parentTabKey: l.tab?.key,
                        parentCategoryKey: l.category?.key,
                        parentAccordionKey: l.accordion?.key,
                    }),
                    n
                );
            }
            let r = l;
            t.type === i.Z6.SIDEBAR_ITEM && (r = { sidebarItem: t.key, panel: t.layout[0] }),
                t.type === i.Z6.PANEL && (r = { sidebarItem: l.sidebarItem, panel: t }),
                t.type === i.Z6.NESTED_PANEL_NAVIGATOR && (r = { ...l, panel: t.layout[0] }),
                t.type === i.Z6.CATEGORY && (r = { ...l, category: t }),
                t.type === i.Z6.ACCORDION && (r = { ...l, accordion: t }),
                t.type === i.Z6.TAB_ITEM && (r = { ...l, tab: t });
            let a = t.layout.map((t) => e(t, n, s, r)).filter((e) => null != e);
            if (
                0 === a.length &&
                !1 !== t.collapseOnEmpty &&
                !("StronglyDiscouragedCustomComponent" in t || (t.type === i.Z6.SIDEBAR_ITEM && "onClick" in t))
            )
                return null;
            let { usePredicate: o, ...d } = t,
                c = { ...d, layout: a };
            return (
                s.register({
                    node: c,
                    parentSidebarItemKey: r.sidebarItem,
                    parentPanelKey: r.panel?.key,
                    parentTabKey: r.tab?.key,
                    parentCategoryKey: r.category?.key,
                    parentAccordionKey: r.accordion?.key,
                }),
                c
            );
        },
});
var i = n(963935);
