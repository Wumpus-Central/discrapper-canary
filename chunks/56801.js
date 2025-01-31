n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(806966),
    u = n(254494),
    c = n(895924),
    d = n(826298),
    f = n(613932);
let _ = [16, 8, 8, 8],
    p = 32,
    h = 4,
    m = 8;
function g(e) {
    let { className: t, channel: n, sections: a, activeCategoryIndex: g, filteredSectionId: E, onSectionClick: v, applicationCommandListRef: y } = e,
        I = r.useRef(null),
        b = r.useCallback(
            (e, t) => {
                var n;
                let i = 2 * h;
                return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN && (i += m), p + i;
            },
            [a]
        ),
        T = r.useCallback(
            (e, t) => {
                var n;
                return t ? ((null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN ? 0 : 2 * h) : 0 === e ? 0 : 2 * h;
            },
            [a]
        ),
        S = r.useCallback(
            (e, t) => {
                let r = a[t];
                if (null == r) return;
                let s = (0, d.ky)(r),
                    l = r.type === c.Qi.BUILT_IN ? h : 0,
                    u = p - 2 * l,
                    _ = (0, i.jsx)(s, {
                        channel: n,
                        section: r,
                        isSelected: null != E ? r.id === E : g === t,
                        padding: l,
                        width: u,
                        height: u,
                        selectable: !0
                    }),
                    m = r.type !== c.Qi.BUILT_IN && t < a.length - 1 && a[t + 1].type === c.Qi.BUILT_IN;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: f.section,
                        children: [
                            (0, i.jsx)(o.ua7, {
                                text: r.name,
                                position: 'right',
                                children: (e) => {
                                    let { onClick: t, ...n } = e;
                                    return (0, i.jsx)(o.P3F, {
                                        'aria-label': r.name,
                                        onClick: () => {
                                            v(r), null == t || t();
                                        },
                                        ...n,
                                        children: _
                                    });
                                }
                            }),
                            m ? (0, i.jsx)('hr', { className: f.builtInSeparator }) : null
                        ]
                    },
                    r.id
                );
            },
            [g, n, v, a, E]
        );
    return 0 === a.length
        ? null
        : (0, i.jsx)('div', {
              className: s()(t, f.wrapper),
              children: (0, i.jsx)(u.Z, {
                  categoryListRef: I,
                  expressionsListRef: y,
                  store: l.Xn,
                  categories: a,
                  className: f.list,
                  renderCategoryListItem: S,
                  rowCount: a.length,
                  categoryHeight: b,
                  listPadding: _,
                  getScrollOffsetForIndex: T
              })
          });
}
