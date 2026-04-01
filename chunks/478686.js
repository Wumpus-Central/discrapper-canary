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
            let a = l;
            t.type === i.Z6.SIDEBAR_ITEM && (a = { sidebarItem: t.key, panel: t.layout[0] }),
                t.type === i.Z6.PANEL && (a = { sidebarItem: l.sidebarItem, panel: t }),
                t.type === i.Z6.NESTED_PANEL && (a = { ...l, panel: t.layout[0] }),
                t.type === i.Z6.CATEGORY && (a = { ...l, category: t }),
                t.type === i.Z6.ACCORDION && (a = { ...l, accordion: t }),
                t.type === i.Z6.TAB_ITEM && (a = { ...l, tab: t });
            let r = t.layout.map((t) => e(t, n, s, a)).filter((e) => null != e);
            if (
                0 === r.length &&
                !("StronglyDiscouragedCustomComponent" in t || (t.type === i.Z6.SIDEBAR_ITEM && "onClick" in t))
            )
                return null;
            let { usePredicate: o, ...d } = t,
                c = { ...d, layout: r };
            return (
                s.register({
                    node: c,
                    parentSidebarItemKey: a.sidebarItem,
                    parentPanelKey: a.panel?.key,
                    parentTabKey: a.tab?.key,
                    parentCategoryKey: a.category?.key,
                    parentAccordionKey: a.accordion?.key,
                }),
                c
            );
        },
});
var i = n(963935);
