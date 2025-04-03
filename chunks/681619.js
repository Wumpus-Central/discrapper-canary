n.d(t, { Z: () => c });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(616257);
function c(e) {
    let { columns: t, data: n, className: l, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: m = 40 } = e,
        x = a.useMemo(
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
        h = [n.length];
    return (0, r.jsx)('div', {
        className: s.tableContainer,
        children: (0, r.jsx)(o.Tvr, {
            className: l,
            innerClassName: s.table,
            sections: h,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    a = s.tableHeader;
                return (0, r.jsx)(
                    'div',
                    {
                        className: a,
                        children: x.map((e) => {
                            var a, l;
                            let i = e.cellClassName,
                                o = { width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)') };
                            return (0, r.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: o,
                                    children: null == (a = e.renderHeader) ? void 0 : a.call(e, e, n)
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
                    a = n[t],
                    l = a.key,
                    h = i()(s.tableRow, {
                        [s.selectedTableRow]: l === u,
                        rowClassName: c
                    });
                return (0, r.jsx)(
                    o.P3F,
                    {
                        className: h,
                        onClick: () => (null == d ? void 0 : d(a)),
                        children: x.map((e) => {
                            var n, l;
                            let i = e.cellClassName,
                                o = {
                                    width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(m, 'px - ').concat(16, 'px)')
                                };
                            return (0, r.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: o,
                                    children: null == (n = e.render) ? void 0 : n.call(e, a, void 0, t)
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
