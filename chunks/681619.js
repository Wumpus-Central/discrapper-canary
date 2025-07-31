a.d(t, { Z: () => c });
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(481060),
    o = a(616257);
function c(e) {
    let { columns: t, data: a, className: l, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: m = 40 } = e,
        p = r.useMemo(
            () =>
                t.map((e) =>
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })(
                        {
                            renderHeader: () =>
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    children: e.key
                                })
                        },
                        e
                    )
                ),
            [t]
        ),
        x = [a.length];
    return (0, n.jsx)('div', {
        className: o.tableContainer,
        children: (0, n.jsx)(s.Tvr, {
            className: l,
            innerClassName: o.table,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    r = o.tableHeader;
                return (0, n.jsx)(
                    'div',
                    {
                        className: r,
                        children: p.map((e) => {
                            var r, l;
                            let i = e.cellClassName,
                                s = { width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)') };
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: s,
                                    children: null == (r = e.renderHeader) ? void 0 : r.call(e, e, a)
                                },
                                'dev-tools-th-'.concat(t, '-').concat(e.key)
                            );
                        })
                    },
                    'dev-tools-header-'.concat(t)
                );
            },
            rowHeight: m,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    r = a[t],
                    l = r.key,
                    x = i()(o.tableRow, {
                        [o.selectedTableRow]: l === u,
                        rowClassName: c
                    });
                return (0, n.jsx)(
                    s.P3F,
                    {
                        className: x,
                        onClick: () => (null == d ? void 0 : d(r)),
                        children: p.map((e) => {
                            var a, l;
                            let i = e.cellClassName,
                                s = {
                                    width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(m, 'px - ').concat(16, 'px)')
                                };
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: s,
                                    children: null == (a = e.render) ? void 0 : a.call(e, r, void 0, t)
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
