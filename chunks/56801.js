r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(806966),
    c = r(254494),
    d = r(895924),
    f = r(826298),
    p = r(613932);
let h = [16, 12, 8, 12],
    _ = 32,
    m = 4,
    g = 8;
function E(e) {
    let { className: n, channel: r, sections: o, activeCategoryIndex: E, filteredSectionId: v, onSectionClick: y, applicationCommandListRef: b } = e,
        I = a.useRef(null),
        T = a.useCallback(
            (e, n) => {
                var r;
                let i = 2 * m;
                return (null === (r = o[n + 1]) || void 0 === r ? void 0 : r.type) === d.Qi.BUILT_IN && (i += g), _ + i;
            },
            [o]
        ),
        S = a.useCallback(
            (e, n) => {
                var r;
                if (!n) return 0 === e ? 0 : 2 * m;
                return (null === (r = o[e + 1]) || void 0 === r ? void 0 : r.type) === d.Qi.BUILT_IN ? 0 : 2 * m;
            },
            [o]
        ),
        A = a.useCallback(
            (e, n) => {
                let a = o[n];
                if (null == a) return;
                let s = (0, f.ky)(a),
                    u = a.type === d.Qi.BUILT_IN ? m : 0,
                    c = _ - 2 * u,
                    h = (0, i.jsx)(s, {
                        channel: r,
                        section: a,
                        isSelected: null != v ? a.id === v : E === n,
                        padding: u,
                        width: c,
                        height: c,
                        selectable: !0
                    }),
                    g = a.type !== d.Qi.BUILT_IN && n < o.length - 1 && o[n + 1].type === d.Qi.BUILT_IN;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: p.section,
                        children: [
                            (0, i.jsx)(l.Tooltip, {
                                text: a.name,
                                position: 'right',
                                children: (e) => {
                                    let { onClick: n, ...r } = e;
                                    return (0, i.jsx)(l.Clickable, {
                                        'aria-label': a.name,
                                        onClick: () => {
                                            y(a), null == n || n();
                                        },
                                        ...r,
                                        children: h
                                    });
                                }
                            }),
                            g ? (0, i.jsx)('hr', { className: p.builtInSeparator }) : null
                        ]
                    },
                    a.id
                );
            },
            [E, r, y, o, v]
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)('div', {
              className: s()(n, p.wrapper),
              children: (0, i.jsx)(c.Z, {
                  categoryListRef: I,
                  expressionsListRef: b,
                  store: u.Xn,
                  categories: o,
                  className: p.list,
                  renderCategoryListItem: A,
                  rowCount: o.length,
                  categoryHeight: T,
                  listPadding: h,
                  getScrollOffsetForIndex: S
              })
          });
}
