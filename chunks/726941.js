var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(894653),
    o = n(322665),
    s = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(493646),
    m = n(292191),
    p = n(683544),
    h = n(863375);
t.Z = function (e) {
    var t;
    let { tabId: n, onSelectApplication: g, onScroll: C } = e,
        x = a.useRef(null),
        v = a.useCallback(() => {
            var e;
            null === (e = x.current) || void 0 === e || e.scrollTo({ to: 0 });
        }, []),
        _ = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        f = a.useMemo(() => _.find((e) => e.id === n), [_, n]),
        b = a.useMemo(() => (null != f ? (0, u.v)(f) : ''), [f]);
    return (0, i.jsxs)(d.Z, {
        onScroll: C,
        ref: x,
        children: [
            (0, i.jsx)(s.Z, {
                title: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : '',
                description: b,
                children: (0, i.jsx)(o.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == f
                        ? (0, i.jsx)('div', {
                              className: h.errorContainer,
                              children: (0, i.jsx)(m.Z, { className: h.error })
                          })
                        : (0, i.jsx)(p.Z, {
                              categoryId: f.id,
                              onSelectApplication: g,
                              resetScroll: v
                          })
            })
        ]
    });
};
