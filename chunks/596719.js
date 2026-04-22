n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(900797),
    o = n(847374),
    d = n(939249),
    c = n(652215),
    u = n(445740);
let m = (e) => (0, i.jsx)("div", { className: e.className, children: e.children }),
    g = (e) => (0, i.jsx)("div", { className: e.className, children: e.children }),
    h = (e) => (0, i.jsx)("div", { className: e.className, children: e.children });
class x extends l.PureComponent {
    static SortDirection = c.tSW;
    static defaultProps = {
        initialSortDirection: c.tSW.ASCENDING,
        rowHeaderComponent: m,
        rowComponent: g,
        cellComponent: h,
        hasHeader: !0,
        sortData: !0,
        stickyHeader: !1,
    };
    isSortable(e) {
        return null != e.sort && !1 !== e.sort;
    }
    getDefaultSort(e) {
        return (t, n) => {
            let i = t[e],
                l = n[e];
            return null != i && null != l ? (i === l ? 0 : i < l ? -1 : 1) : 0;
        };
    }
    handleSort = (e) => {
        let { sortKey: t, sortDirection: n, onSort: i } = this.props;
        null != i && i(e, t === e && n === c.tSW.ASCENDING ? c.tSW.DESCENDING : c.tSW.ASCENDING);
    };
    renderHeader() {
        let {
                columns: e,
                data: t,
                sortDirection: n,
                sortKey: l,
                headerCellClassName: s,
                headerClassName: g,
                sortedHeaderCellClassName: h,
                stickyHeader: x,
            } = this.props,
            _ = e.map((e) => {
                let m = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                    g = n === c.tSW.ASCENDING ? a.t : o.a;
                return (0, i.jsx)(
                    d.D,
                    {
                        className: r()(u.e4, s, e.headerCellClassName, e.cellClassName, l === e.key && h, {
                            [u.vk]: this.isSortable(e),
                        }),
                        onClick: this.isSortable(e) ? () => this.handleSort(e.key) : void 0,
                        children: (0, i.jsxs)("div", {
                            className: u.PZ,
                            children: [
                                m,
                                this.isSortable(e) && l === e.key ? (0, i.jsx)(g, { className: u.GM }) : null,
                            ],
                        }),
                    },
                    e.key,
                );
            });
        return (0, i.jsx)(m, { className: r()(g, u.nM, { [u.ln]: x }), children: _ });
    }
    renderBody() {
        let {
                columns: e,
                data: t,
                sortData: n,
                sortKey: i,
                sortDirection: s,
                bodyCellClassName: a,
                rowClassName: o,
                cellProps: d,
                rowProps: m,
                rowComponent: g,
                cellComponent: h,
            } = this.props,
            x = t;
        if (n) {
            let n =
                    null != i
                        ? e.find((e) => {
                              let { key: t } = e;
                              return t === i;
                          })
                        : null,
                l = [...t],
                r = null != n && n.sort,
                a =
                    null != n && null != i && this.isSortable(n)
                        ? l.sort("function" == typeof r ? (e, t) => r(e, t, s) : this.getDefaultSort(i))
                        : l;
            x = null != n && s === c.tSW.DESCENDING ? a.reverse() : a;
        }
        return x.map((t, n) => {
            let i = e.map((e) =>
                (0, l.createElement)(
                    h,
                    { ...d, key: e.key, item: t, className: r()(a, e.bodyCellClassName, e.cellClassName) },
                    null != e.render ? e.render(t, d, n) : t[e.key],
                ),
            );
            return (0, l.createElement)(g, { ...m, key: t.key, item: t, className: r()(u.nM, o) }, i);
        });
    }
    render() {
        let { className: e, hasHeader: t } = this.props;
        return (0, i.jsxs)("div", { className: e, children: [t ? this.renderHeader() : null, this.renderBody()] });
    }
}
let _ = x;
