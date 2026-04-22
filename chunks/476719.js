n.d(t, { N7: () => h, gE: () => g, vL: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(939249),
    c = n(320448),
    u = n(242564),
    m = n(518476);
function g(e, t) {
    let { expandableToggleColumnKey: n } = t,
        l = (0, u.IE)(
            e.map((e) => ({
                ...e,
                sort: !1,
                renderHeader: () => e.renderHeader?.(e, []),
                render: (t, n, i) =>
                    t.isExpandedItem
                        ? "renderExpandedContent" in e
                            ? e.renderExpandedContent(t.item, n)
                            : null
                        : (e.render?.(t.item, n, i) ?? null),
            })),
        );
    return [
        (function (e) {
            let { key: t } = e;
            return {
                key: t,
                cellClassName: m.pR,
                renderHeader: () => null,
                render(e, t) {
                    if ((o()(null != t, "Cell props missing; did you use the hook?"), e.isExpandedItem)) return null;
                    let { expandedRows: n, onToggleExpandRow: l } = t,
                        s = n.has(e.key);
                    return (0, i.jsx)(d.D, {
                        className: m.nn,
                        onClick: () => l(e.key),
                        children: (0, i.jsx)(u.fh, {
                            children: (0, i.jsx)(c._, {
                                size: "md",
                                color: "currentColor",
                                className: r()(m.Rq, { [m.jH]: s }),
                            }),
                        }),
                    });
                },
            };
        })({ key: n }),
        ...l,
    ];
}
function h(e) {
    let { renderExpandedContent: t, ...n } = e;
    return { ...(0, u.HA)(n), renderExpandedContent: t };
}
function x(e, t) {
    let { generateExpandedRows: n } = t,
        i = (function () {
            let [e, t] = l.useState(new Set());
            return {
                expandedRows: e,
                onToggleExpandRow: l.useCallback(
                    (e) => {
                        t((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    [t],
                ),
            };
        })();
    return {
        data: l.useMemo(() => {
            let t = [];
            for (let l of e)
                if ((t.push({ isExpandedItem: !1, key: l.key, item: l }), i.expandedRows.has(l.key)))
                    for (let e of n(l)) t.push({ isExpandedItem: !0, key: e.key, item: e });
            return t;
        }, [i.expandedRows, e, n]),
        cellProps: i,
    };
}
