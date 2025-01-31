n.d(t, { Z: () => g });
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(894653),
    s = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(493646),
    m = n(292191),
    h = n(683544),
    p = n(863375);
let g = function (e) {
    var t;
    let { tabId: n, onSelectApplication: g, onScroll: _ } = e,
        x = a.useRef(null),
        C = a.useCallback(() => {
            var e;
            null === (e = x.current) || void 0 === e || e.scrollTo({ to: 0 });
        }, []),
        v = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        f = a.useMemo(() => v.find((e) => e.id === n), [v, n]),
        I = a.useMemo(() => (null != f ? (0, u.v)(f) : ''), [f]);
    return (0, i.jsxs)(d.Z, {
        onScroll: _,
        ref: x,
        children: [
            (0, i.jsx)(o.Z, {
                title: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : '',
                description: I,
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == f
                        ? (0, i.jsx)('div', {
                              className: p.errorContainer,
                              children: (0, i.jsx)(m.Z, { className: p.error })
                          })
                        : (0, i.jsx)(h.Z, {
                              categoryId: f.id,
                              onSelectApplication: g,
                              resetScroll: C
                          })
            })
        ]
    });
};
