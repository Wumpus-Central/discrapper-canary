n.d(t, { Z: () => c });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(616257);
function c(e) {
    let { columns: t, data: n, className: l, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: m = 40 } = e,
        x = r.useMemo(
            () =>
                t.map((e) =>
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            renderHeader: () =>
                                (0, a.jsx)(o.Text, {
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
    return (0, a.jsx)('div', {
        className: s.tableContainer,
        children: (0, a.jsx)(o.Tvr, {
            className: l,
            innerClassName: s.table,
            sections: h,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    r = s.tableHeader;
                return (0, a.jsx)(
                    'div',
                    {
                        className: r,
                        children: x.map((e) => {
                            var r, l;
                            let i = e.cellClassName,
                                o = { width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)') };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: o,
                                    children: null == (r = e.renderHeader) ? void 0 : r.call(e, e, n)
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
                    r = n[t],
                    l = r.key,
                    h = i()(s.tableRow, {
                        [s.selectedTableRow]: l === u,
                        rowClassName: c
                    });
                return (0, a.jsx)(
                    o.P3F,
                    {
                        className: h,
                        onClick: () => (null == d ? void 0 : d(r)),
                        children: x.map((e) => {
                            var n, l;
                            let i = e.cellClassName,
                                o = {
                                    width: 'calc('.concat(null != (l = e.cellWidth) ? l : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(m, 'px - ').concat(16, 'px)')
                                };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: i,
                                    style: o,
                                    children: null == (n = e.render) ? void 0 : n.call(e, r, void 0, t)
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
