var i = n(582128),
    r = n(207803),
    u = n(485745);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = (0, u.A)(),
                l = i.useRef(e);
            return (
                i.useLayoutEffect(() => {
                    l.current = e;
                }),
                i.useCallback(
                    function () {
                        for (var e = arguments.length, i = Array(e), u = 0; u < e; u++) i[u] = arguments[u];
                        t && n ? (0, r.VQ)() : l.current(...i);
                    },
                    [t, n],
                )
            );
        },
    },
);
