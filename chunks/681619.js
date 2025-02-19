n.d(t, { Z: () => c });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(841699);
function c(e) {
    let { columns: t, data: n, className: i, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: h = 40 } = e,
        m = a.useMemo(
            () =>
                t.map((e) =>
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            renderHeader: () =>
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: e.key
                                })
                        },
                        e
                    )
                ),
            [t]
        ),
        x = [n.length];
    return (0, r.jsx)('div', {
        className: s.tableContainer,
        children: (0, r.jsx)(o.Tvr, {
            className: l()(i),
            innerClassName: s.table,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    a = l()(s.tableHeader);
                return (0, r.jsx)(
                    'div',
                    {
                        className: a,
                        children: m.map((e) => {
                            var a, i;
                            let o = l()(e.cellClassName),
                                s = { width: 'calc('.concat(null !== (i = e.cellWidth) && void 0 !== i ? i : '1fr', ' - ').concat(16, 'px)') };
                            return (0, r.jsx)(
                                'div',
                                {
                                    className: o,
                                    style: s,
                                    children: null === (a = e.renderHeader) || void 0 === a ? void 0 : a.call(e, e, n)
                                },
                                'dev-tools-th-'.concat(t, '-').concat(e.key)
                            );
                        })
                    },
                    'dev-tools-header-'.concat(t)
                );
            },
            rowHeight: h,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    a = n[t],
                    i = a.key,
                    x = l()(s.tableRow, {
                        [s.selectedTableRow]: i === u,
                        rowClassName: c
                    });
                return (0, r.jsx)(
                    o.P3F,
                    {
                        className: x,
                        onClick: () => (null == d ? void 0 : d(a)),
                        children: m.map((e) => {
                            var n, i;
                            let o = l()(e.cellClassName),
                                s = {
                                    width: 'calc('.concat(null !== (i = e.cellWidth) && void 0 !== i ? i : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(h, 'px - ').concat(16, 'px)')
                                };
                            return (0, r.jsx)(
                                'div',
                                {
                                    className: o,
                                    style: s,
                                    children: null === (n = e.render) || void 0 === n ? void 0 : n.call(e, a, void 0, t)
                                },
                                'dev-tools-td-'.concat(t, '-').concat(e.key)
                            );
                        })
                    },
                    'dev-tools-tr-'.concat(t)
                );
            }
        })
    });
}
