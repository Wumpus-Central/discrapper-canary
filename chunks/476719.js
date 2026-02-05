"use strict";
n.d(t, { N7: () => g, gE: () => m, vL: () => x }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(397927),
    c = n(242564),
    u = n(974911);
function m(e, t) {
    let { expandableToggleColumnKey: n } = t,
        s = (0, c.IE)(
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
                cellClassName: u.pR,
                renderHeader: () => null,
                render(e, t) {
                    if ((o()(null != t, "Cell props missing; did you use the hook?"), e.isExpandedItem)) return null;
                    let { expandedRows: n, onToggleExpandRow: s } = t,
                        l = n.has(e.key);
                    return (0, i.jsx)(d.DUT, {
                        className: u.nn,
                        onClick: () => s(e.key),
                        children: (0, i.jsx)(c.fh, {
                            children: (0, i.jsx)(d._BQ, {
                                size: "md",
                                color: "currentColor",
                                className: r()(u.Rq, { [u.jH]: l }),
                            }),
                        }),
                    });
                },
            };
        })({ key: n }),
        ...s,
    ];
}
function g(e) {
    let { renderExpandedContent: t, ...n } = e;
    return { ...(0, c.HA)(n), renderExpandedContent: t };
}
function x(e, t) {
    let { generateExpandedRows: n } = t,
        i = (function () {
            let [e, t] = s.useState(new Set());
            return {
                expandedRows: e,
                onToggleExpandRow: s.useCallback(
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
        data: s.useMemo(() => {
            let t = [];
            for (let s of e)
                if ((t.push({ isExpandedItem: !1, key: s.key, item: s }), i.expandedRows.has(s.key)))
                    for (let e of n(s)) t.push({ isExpandedItem: !0, key: e.key, item: e });
            return t;
        }, [i.expandedRows, e, n]),
        cellProps: i,
    };
}
