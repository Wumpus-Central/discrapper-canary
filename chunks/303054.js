n.d(t, { A: () => d });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(661251);
function d(e) {
    let { columns: t, data: n, className: i, rowClassName: d, onClickRow: c, selectedRowKey: u, rowHeight: m = 40 } = e,
        h = s.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, a.jsx)(r.Text, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        x = 0 === n.length ? [1] : [n.length];
    return (0, a.jsx)("div", {
        className: o.CZ,
        children: (0, a.jsx)(r.OZj, {
            className: i,
            innerClassName: o.tp,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    s = o.ZR;
                return (0, a.jsx)(
                    "div",
                    {
                        className: s,
                        children: h.map((e) => {
                            let s = e.cellClassName,
                                i = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, a.jsx)(
                                "div",
                                { className: s, style: i, children: e.renderHeader?.(e, n) },
                                `dev-tools-th-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-header-${t}`,
                );
            },
            rowHeight: m,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    s = n[t];
                if (null == s) return null;
                let i = s.key,
                    x = l()(o.jD, { [o.wD]: i === u, rowClassName: d });
                return (0, a.jsx)(
                    r.DUT,
                    {
                        className: x,
                        onClick: () => c?.(s),
                        children: h.map((e) => {
                            let n = e.cellClassName,
                                i = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${m}px - 16px)` };
                            return (0, a.jsx)(
                                "div",
                                { className: n, style: i, children: e.render?.(s, void 0, t) },
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
