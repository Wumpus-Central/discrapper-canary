n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(941469);
function c(e) {
    let { columns: t, data: n, className: l, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: h = 40 } = e,
        m = a.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () =>
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: e.key
                        }),
                    ...e
                })),
            [t]
        ),
        x = [n.length];
    return (0, r.jsx)('div', {
        className: s.tableContainer,
        children: (0, r.jsx)(o.ListThin, {
            className: i()(l),
            innerClassName: s.table,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    a = i()(s.tableHeader);
                return (0, r.jsx)(
                    'div',
                    {
                        className: a,
                        children: m.map((e) => {
                            var a, l;
                            let o = i()(e.cellClassName),
                                s = { width: 'calc('.concat(null !== (l = e.cellWidth) && void 0 !== l ? l : '1fr', ' - ').concat(16, 'px)') };
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
                    l = a.key,
                    x = i()(s.tableRow, {
                        [s.selectedTableRow]: l === u,
                        rowClassName: c
                    });
                return (0, r.jsx)(
                    o.Clickable,
                    {
                        className: x,
                        onClick: () => (null == d ? void 0 : d(a)),
                        children: m.map((e) => {
                            var n, l;
                            let o = i()(e.cellClassName),
                                s = {
                                    width: 'calc('.concat(null !== (l = e.cellWidth) && void 0 !== l ? l : '1fr', ' - ').concat(16, 'px)'),
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
