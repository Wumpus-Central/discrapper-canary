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
        x = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        h = i.useMemo(() => x.find((e) => e.id === t), [x, t]),
        b = i.useMemo(() => (null != h ? (0, u.v)(h) : ''), [h]);
    return (0, a.jsxs)(d.Z, {
        onScroll: v,
        ref: f,
        children: [
            (0, a.jsx)(s.Z, {
                title: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : '',
                description: b,
                children: (0, a.jsx)(o.Z, {})
            }),
            (0, a.jsx)(c.Z, {
                children:
                    null == h
                        ? (0, a.jsx)('div', {
                              className: _.errorContainer,
                              children: (0, a.jsx)(m.Z, { className: _.error })
                          })
                        : (0, a.jsx)(p.Z, {
                              categoryId: h.id,
                              onSelectApplication: g,
                              resetScroll: C
                          })
            })
        ]
    });
};
