n.d(t, { Z: () => f });
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(322665),
    s = n(17845),
    o = n(374939),
    c = n(283293),
    d = n(493646),
    u = n(678694),
    p = n(292191),
    m = n(683544),
    h = n(71470);
let f = function (e) {
    var t;
    let { tabId: n, onSelectApplication: f, onScroll: g } = e,
        b = r.useRef(null),
        x = r.useCallback(() => {
            var e;
            null == (e = b.current) || e.scrollTo({ to: 0 });
        }, []),
        v = (0, i.e7)([u.Z], () => u.Z.getCategories()),
        C = r.useMemo(() => v.find((e) => e.id === n), [v, n]),
        j = r.useMemo(() => (null != C ? (0, d.v)(C) : ""), [C]);
    return (0, a.jsxs)(c.Z, {
        onScroll: g,
        ref: b,
        children: [
            (0, a.jsx)(s.Z, {
                title: null != (t = null == C ? void 0 : C.name) ? t : "",
                description: j,
                children: (0, a.jsx)(l.Z, {}),
            }),
            (0, a.jsx)(o.Z, {
                children:
                    null == C
                        ? (0, a.jsx)("div", {
                              className: h.errorContainer,
                              children: (0, a.jsx)(p.Z, { className: h.error }),
                          })
                        : (0, a.jsx)(m.Z, {
                              categoryId: C.id,
                              onSelectApplication: f,
                              resetScroll: x,
                          }),
            }),
        ],
    });
};
