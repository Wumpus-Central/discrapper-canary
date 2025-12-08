n.d(t, { Z: () => c });
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(481060),
    o = n(451429);
function c(e) {
    let { columns: t, data: n, className: r, rowClassName: c, onClickRow: d, selectedRowKey: u, rowHeight: m = 40 } = e,
        p = l.useMemo(
            () =>
                t.map((e) =>
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            renderHeader: () =>
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    children: e.key,
                                }),
                        },
                        e,
                    ),
                ),
            [t],
        ),
        h = 0 === n.length ? [1] : [n.length];
    return (0, a.jsx)("div", {
        className: o.tableContainer,
        children: (0, a.jsx)(s.Tvr, {
            className: r,
            innerClassName: o.table,
            sections: h,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = o.tableHeader;
                return (0, a.jsx)(
                    "div",
                    {
                        className: l,
                        children: p.map((e) => {
                            var l, r;
                            let i = e.cellClassName,
                                s = {
                                    width: "calc("
                                        .concat(null != (r = e.cellWidth) ? r : "1fr", " - ")
                                        .concat(16, "px)"),
                                };
                            return (0, a.jsx)(
                                "div",
                                {
                                    className: i,
                                    style: s,
                                    children: null == (l = e.renderHeader) ? void 0 : l.call(e, e, n),
                                },
                                "dev-tools-th-".concat(t, "-").concat(e.key),
                            );
                        }),
                    },
                    "dev-tools-header-".concat(t),
                );
            },
            rowHeight: m,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    l = n[t];
                if (null == l) return null;
                let r = l.key,
                    h = i()(o.tableRow, {
                        [o.selectedTableRow]: r === u,
                        rowClassName: c,
                    });
                return (0, a.jsx)(
                    s.P3F,
                    {
                        className: h,
                        onClick: () => (null == d ? void 0 : d(l)),
                        children: p.map((e) => {
                            var n, r;
                            let i = e.cellClassName,
                                s = {
                                    width: "calc("
                                        .concat(null != (r = e.cellWidth) ? r : "1fr", " - ")
                                        .concat(16, "px)"),
                                    height: "calc(".concat(m, "px - ").concat(16, "px)"),
                                };
                            return (0, a.jsx)(
                                "div",
                                {
                                    className: i,
                                    style: s,
                                    children: null == (n = e.render) ? void 0 : n.call(e, l, void 0, t),
                                },
                                "dev-tools-td-".concat(t, "-").concat(e.key),
                            );
                        }),
                    },
                    "dev-tools-tr-".concat(t),
                );
            },
        }),
    });
}
