n.d(t, {
    Fd: function () {
        return h;
    },
    GN: function () {
        return g;
    },
    rM: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(481060),
    d = n(755930),
    u = n(708952);
function m(e, t) {
    let { expandableToggleColumnKey: n } = t,
        r = (0, d.Yn)(
            e.map((e) => ({
                ...e,
                sort: !1,
                renderHeader() {
                    var t;
                    return null === (t = e.renderHeader) || void 0 === t ? void 0 : t.call(e, e, []);
                },
                render(t, n, i) {
                    var r, l;
                    if (t.isExpandedItem) return 'renderExpandedContent' in e ? e.renderExpandedContent(t.item, n) : null;
                    return null !== (l = null === (r = e.render) || void 0 === r ? void 0 : r.call(e, t.item, n, i)) && void 0 !== l ? l : null;
                }
            }))
        );
    return [
        (function (e) {
            let { key: t } = e;
            return {
                key: t,
                cellClassName: u.toggleExpandColumn,
                renderHeader: () => null,
                render(e, t) {
                    if ((o()(null != t, 'Cell props missing; did you use the hook?'), e.isExpandedItem)) return null;
                    let { expandedRows: n, onToggleExpandRow: r } = t,
                        l = n.has(e.key);
                    return (0, i.jsx)(c.Clickable, {
                        className: u.toggleExpandCell,
                        onClick: () => r(e.key),
                        children: (0, i.jsx)(d.bL, {
                            children: (0, i.jsx)(c.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(u.caretIcon, { [u.caretDownIcon]: l })
                            })
                        })
                    });
                }
            };
        })({ key: n }),
        ...r
    ];
}
function h(e) {
    let { renderExpandedContent: t, ...n } = e;
    return {
        ...(0, d.wy)(n),
        renderExpandedContent: t
    };
}
function g(e, t) {
    let { generateExpandedRows: n } = t,
        i = (function () {
            let [e, t] = r.useState(new Set());
            return {
                expandedRows: e,
                onToggleExpandRow: r.useCallback(
                    (e) => {
                        t((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    [t]
                )
            };
        })();
    return {
        data: r.useMemo(() => {
            let t = [];
            for (let r of e)
                if (
                    (t.push({
                        isExpandedItem: !1,
                        key: r.key,
                        item: r
                    }),
                    i.expandedRows.has(r.key))
                )
                    for (let e of n(r))
                        t.push({
                            isExpandedItem: !0,
                            key: e.key,
                            item: e
                        });
            return t;
        }, [i.expandedRows, e, n]),
        cellProps: i
    };
}
