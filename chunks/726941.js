var a = t(200651),
    i = t(192379),
    r = t(442837),
    l = t(894653),
    o = t(322665),
    s = t(17845),
    c = t(374939),
    d = t(283293),
    u = t(493646),
    m = t(292191),
    p = t(683544),
    _ = t(863375);
n.Z = function (e) {
    var n;
    let { tabId: t, onSelectApplication: g, onScroll: v } = e,
        f = i.useRef(null),
        C = i.useCallback(() => {
            var e;
            null === (e = f.current) || void 0 === e || e.scrollTo({ to: 0 });
        }, []),
        h = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        x = i.useMemo(() => h.find((e) => e.id === t), [h, t]),
        b = i.useMemo(() => (null != x ? (0, u.v)(x) : ''), [x]);
    return (0, a.jsxs)(d.Z, {
        onScroll: v,
        ref: f,
        children: [
            (0, a.jsx)(s.Z, {
                title: null !== (n = null == x ? void 0 : x.name) && void 0 !== n ? n : '',
                description: b,
                children: (0, a.jsx)(o.Z, {})
            }),
            (0, a.jsx)(c.Z, {
                children:
                    null == x
                        ? (0, a.jsx)('div', {
                              className: _.errorContainer,
                              children: (0, a.jsx)(m.Z, { className: _.error })
                          })
                        : (0, a.jsx)(p.Z, {
                              categoryId: x.id,
                              onSelectApplication: g,
                              resetScroll: C
                          })
            })
        ]
    });
};
