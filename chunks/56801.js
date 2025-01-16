r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(806966),
    c = r(254494),
    d = r(895924),
    f = r(826298),
    _ = r(613932);
let h = [16, 12, 8, 12],
    p = 32,
    m = 4,
    g = 8;
function E(e) {
    let { className: n, channel: r, sections: s, activeCategoryIndex: E, filteredSectionId: v, onSectionClick: I, applicationCommandListRef: T } = e,
        b = a.useRef(null),
        y = a.useCallback(
            (e, n) => {
                var r;
                let i = 2 * m;
                return (null === (r = s[n + 1]) || void 0 === r ? void 0 : r.type) === d.Qi.BUILT_IN && (i += g), p + i;
            },
            [s]
        ),
        S = a.useCallback(
            (e, n) => {
                var r;
                if (!n) return 0 === e ? 0 : 2 * m;
                return (null === (r = s[e + 1]) || void 0 === r ? void 0 : r.type) === d.Qi.BUILT_IN ? 0 : 2 * m;
            },
            [s]
        ),
        A = a.useCallback(
            (e, n) => {
                let a = s[n];
                if (null == a) return;
                let o = (0, f.ky)(a),
                    u = a.type === d.Qi.BUILT_IN ? m : 0,
                    c = p - 2 * u,
                    h = (0, i.jsx)(o, {
                        channel: r,
                        section: a,
                        isSelected: null != v ? a.id === v : E === n,
                        padding: u,
                        width: c,
                        height: c,
                        selectable: !0
                    }),
                    g = a.type !== d.Qi.BUILT_IN && n < s.length - 1 && s[n + 1].type === d.Qi.BUILT_IN;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: _.section,
                        children: [
                            (0, i.jsx)(l.Tooltip, {
                                text: a.name,
                                position: 'right',
                                children: (e) => {
                                    let { onClick: n, ...r } = e;
                                    return (0, i.jsx)(l.Clickable, {
                                        'aria-label': a.name,
                                        onClick: () => {
                                            I(a), null == n || n();
                                        },
                                        ...r,
                                        children: h
                                    });
                                }
                            }),
                            g ? (0, i.jsx)('hr', { className: _.builtInSeparator }) : null
                        ]
                    },
                    a.id
                );
            },
            [E, r, I, s, v]
        );
    return 0 === s.length
        ? null
        : (0, i.jsx)('div', {
              className: o()(n, _.wrapper),
              children: (0, i.jsx)(c.Z, {
                  categoryListRef: b,
                  expressionsListRef: T,
                  store: u.Xn,
                  categories: s,
                  className: _.list,
                  renderCategoryListItem: A,
                  rowCount: s.length,
                  categoryHeight: y,
                  listPadding: h,
                  getScrollOffsetForIndex: S
              })
          });
}
