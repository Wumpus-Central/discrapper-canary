n.d(t, { Z: () => g });
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(322665),
    o = n(17845),
    s = n(374939),
    c = n(283293),
    d = n(493646),
    u = n(678694),
    p = n(292191),
    m = n(683544),
    h = n(34871);
let g = function (e) {
    var t;
    let { tabId: n, onSelectApplication: g, onScroll: f } = e,
        _ = a.useRef(null),
        b = a.useCallback(() => {
            var e;
            null == (e = _.current) || e.scrollTo({ to: 0 });
        }, []),
        x = (0, i.e7)([u.Z], () => u.Z.getCategories()),
        v = a.useMemo(() => x.find((e) => e.id === n), [x, n]),
        C = a.useMemo(() => (null != v ? (0, d.v)(v) : ''), [v]);
    return (0, r.jsxs)(c.Z, {
        onScroll: f,
        ref: _,
        children: [
            (0, r.jsx)(o.Z, {
                title: null != (t = null == v ? void 0 : v.name) ? t : '',
                description: C,
                children: (0, r.jsx)(l.Z, {})
            }),
            (0, r.jsx)(s.Z, {
                children:
                    null == v
                        ? (0, r.jsx)('div', {
                              className: h.errorContainer,
                              children: (0, r.jsx)(p.Z, { className: h.error })
                          })
                        : (0, r.jsx)(m.Z, {
                              categoryId: v.id,
                              onSelectApplication: g,
                              resetScroll: b
                          })
            })
        ]
    });
};
