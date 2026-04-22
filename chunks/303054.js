a.d(t, { A: () => u });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(834730),
    o = a(939249),
    d = a(475825),
    c = a(505206);
function u(e) {
    let { columns: t, data: a, className: i, rowClassName: u, onClickRow: m, selectedRowKey: h, rowHeight: p = 40 } = e,
        x = l.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, n.jsx)(r.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        g = 0 === a.length ? [1] : [a.length];
    return (0, n.jsx)("div", {
        className: c.CZ,
        children: (0, n.jsx)(d.OZ, {
            className: i,
            innerClassName: c.tp,
            sections: g,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = c.ZR;
                return (0, n.jsx)(
                    "div",
                    {
                        className: l,
                        children: x.map((e) => {
                            let l = e.cellClassName,
                                i = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, n.jsx)(
                                "div",
                                { className: l, style: i, children: e.renderHeader?.(e, a) },
                                `dev-tools-th-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-header-${t}`,
                );
            },
            rowHeight: p,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    l = a[t];
                if (null == l) return null;
                let i = l.key,
                    r = s()(c.jD, { [c.wD]: i === h, rowClassName: u });
                return (0, n.jsx)(
                    o.D,
                    {
                        className: r,
                        onClick: () => m?.(l),
                        children: x.map((e) => {
                            let a = e.cellClassName,
                                i = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${p}px - 16px)` };
                            return (0, n.jsx)(
                                "div",
                                { className: a, style: i, children: e.render?.(l, void 0, t) },
                                `dev-tools-td-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-tr-${t}`,
                );
            },
        }),
    });
}
