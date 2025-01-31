n.d(t, { Z: () => c });
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(481060),
    s = n(941469);
function c(e) {
    let { columns: t, data: n, className: r, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: m = 40 } = e,
        h = l.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () =>
                        (0, a.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: e.key
                        }),
                    ...e
                })),
            [t]
        ),
        x = [n.length];
    return (0, a.jsx)('div', {
        className: s.tableContainer,
        children: (0, a.jsx)(o.Tvr, {
            className: i()(r),
            innerClassName: s.table,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = i()(s.tableHeader);
                return (0, a.jsx)(
                    'div',
                    {
                        className: l,
                        children: h.map((e) => {
                            var l, r;
                            let o = i()(e.cellClassName),
                                s = { width: 'calc('.concat(null !== (r = e.cellWidth) && void 0 !== r ? r : '1fr', ' - ').concat(16, 'px)') };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: o,
                                    style: s,
                                    children: null === (l = e.renderHeader) || void 0 === l ? void 0 : l.call(e, e, n)
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
                    l = n[t],
                    r = l.key,
                    x = i()(s.tableRow, {
                        [s.selectedTableRow]: r === u,
                        rowClassName: c
                    });
                return (0, a.jsx)(
                    o.P3F,
                    {
                        className: x,
                        onClick: () => (null == d ? void 0 : d(l)),
                        children: h.map((e) => {
                            var n, r;
                            let o = i()(e.cellClassName),
                                s = {
                                    width: 'calc('.concat(null !== (r = e.cellWidth) && void 0 !== r ? r : '1fr', ' - ').concat(16, 'px)'),
                                    height: 'calc('.concat(m, 'px - ').concat(16, 'px)')
                                };
                            return (0, a.jsx)(
                                'div',
                                {
                                    className: o,
                                    style: s,
                                    children: null === (n = e.render) || void 0 === n ? void 0 : n.call(e, l, void 0, t)
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
