n.d(t, {
    A: () =>
        function e(t, n, s) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!n.has(t.key)) return null;
            if (!(0, i.nW)(t))
                return (
                    s.register({
                        node: t,
                        parentPanelKey: r.panel?.key,
                        parentTabKey: r.tab?.key,
                        parentCategoryKey: r.category?.key,
                        parentAccordionKey: r.accordion?.key,
                    }),
                    t
                );
            let a = r;
            t.type === i.Z6.SIDEBAR_ITEM && (a = { ...r, panel: t.layout[0] }),
                t.type === i.Z6.PANEL && (a = { ...r, panel: t }),
                t.type === i.Z6.CATEGORY && (a = { ...r, category: t }),
                t.type === i.Z6.ACCORDION && (a = { ...r, accordion: t }),
                t.type === i.Z6.TAB_ITEM && (a = { ...r, tab: t });
            let l = t.layout.map((t) => e(t, n, s, a)).filter((e) => null != e);
            if (
                0 === l.length &&
                !("StronglyDiscouragedCustomComponent" in t || (t.type === i.Z6.SIDEBAR_ITEM && "onClick" in t))
            )
                return null;
            let o = { ...t, layout: l };
            return (
                s.register({
                    node: o,
                    parentPanelKey: a.panel?.key,
                    parentTabKey: a.tab?.key,
                    parentCategoryKey: a.category?.key,
                    parentAccordionKey: a.accordion?.key,
                }),
                o
            );
        },
});
var i = n(963935);
