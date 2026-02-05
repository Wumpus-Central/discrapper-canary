r.d(t, { A: () => I });
var i = r(627968),
    a = r(64700),
    s = r(503698),
    n = r.n(s),
    o = r(397927),
    l = r(652215),
    c = r(452803);
let _ = (e) => (0, i.jsx)("div", { className: e.className, children: e.children }),
    d = (e) => (0, i.jsx)("div", { className: e.className, children: e.children }),
    E = (e) => (0, i.jsx)("div", { className: e.className, children: e.children });
class h extends a.PureComponent {
    static SortDirection = l.tSW;
    static defaultProps = {
        initialSortDirection: l.tSW.ASCENDING,
        rowHeaderComponent: _,
        rowComponent: d,
        cellComponent: E,
        hasHeader: !0,
        sortData: !0,
        stickyHeader: !1,
    };
    isSortable(e) {
        return null != e.sort && !1 !== e.sort;
    }
    getDefaultSort(e) {
        return (t, r) => {
            let i = t[e],
                a = r[e];
            return null != i && null != a ? (i === a ? 0 : i < a ? -1 : 1) : 0;
        };
    }
    handleSort = (e) => {
        let { sortKey: t, sortDirection: r, onSort: i } = this.props;
        null != i && i(e, t === e && r === l.tSW.ASCENDING ? l.tSW.DESCENDING : l.tSW.ASCENDING);
    };
    renderHeader() {
        let {
                columns: e,
                data: t,
                sortDirection: r,
                sortKey: a,
                headerCellClassName: s,
                headerClassName: d,
                sortedHeaderCellClassName: E,
                stickyHeader: h,
            } = this.props,
            I = e.map((e) => {
                let _ = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                    d = r === l.tSW.ASCENDING ? o.tN5 : o.abt;
                return (0, i.jsx)(
                    o.DUT,
                    {
                        className: n()(c.e4, s, e.headerCellClassName, e.cellClassName, a === e.key && E, {
                            [c.vk]: this.isSortable(e),
                        }),
                        onClick: this.isSortable(e) ? () => this.handleSort(e.key) : void 0,
                        children: (0, i.jsxs)("div", {
                            className: c.PZ,
                            children: [
                                _,
                                this.isSortable(e) && a === e.key ? (0, i.jsx)(d, { className: c.GM }) : null,
                            ],
                        }),
                    },
                    e.key,
                );
            });
        return (0, i.jsx)(_, { className: n()(d, c.nM, { [c.ln]: h }), children: I });
    }
    renderBody() {
        let {
                columns: e,
                data: t,
                sortData: r,
                sortKey: i,
                sortDirection: s,
                bodyCellClassName: o,
                rowClassName: _,
                cellProps: d,
                rowProps: E,
                rowComponent: h,
                cellComponent: I,
            } = this.props,
            A = t;
        if (r) {
            let r =
                    null != i
                        ? e.find((e) => {
                              let { key: t } = e;
                              return t === i;
                          })
                        : null,
                a = [...t],
                n = null != r && r.sort,
                o =
                    null != r && null != i && this.isSortable(r)
                        ? a.sort("function" == typeof n ? (e, t) => n(e, t, s) : this.getDefaultSort(i))
                        : a;
            A = null != r && s === l.tSW.DESCENDING ? o.reverse() : o;
        }
        return A.map((t, r) => {
            let i = e.map((e) =>
                (0, a.createElement)(
                    I,
                    { ...d, key: e.key, item: t, className: n()(o, e.bodyCellClassName, e.cellClassName) },
                    null != e.render ? e.render(t, d, r) : t[e.key],
                ),
            );
            return (0, a.createElement)(h, { ...E, key: t.key, item: t, className: n()(c.nM, _) }, i);
        });
    }
    render() {
        let { className: e, hasHeader: t } = this.props;
        return (0, i.jsxs)("div", { className: e, children: [t ? this.renderHeader() : null, this.renderBody()] });
    }
}
let I = h;
