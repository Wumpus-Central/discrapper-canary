l.d(t, { I: () => d });
var n = l(477900),
    i = l(582128),
    a = l(834730),
    s = l(650583),
    r = l(684343);
function d(e) {
    let { label: t, tabs: l, selectedId: d, panelId: c, getTabId: o, onSelect: u } = e,
        m = i.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                a = i.indexOf(l);
            if (-1 !== a && 0 !== i.length) {
                switch (e.key) {
                    case s.dh.ARROW_RIGHT:
                    case s.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case s.dh.ARROW_LEFT:
                    case s.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case s.dh.HOME:
                        t = 0;
                        break;
                    case s.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, n.jsx)("div", {
        className: r.vR,
        role: "tablist",
        "aria-label": t,
        children: l.map((e) => {
            let t = e.id === d;
            return (0, n.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: o(e.id),
                    className: r.Mf,
                    "aria-selected": t,
                    "aria-controls": c,
                    tabIndex: t ? 0 : -1,
                    onClick: () => u(e.id),
                    onKeyDown: m,
                    children: (0, n.jsx)(a.E, {
                        className: r.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
