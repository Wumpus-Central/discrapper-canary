var n = l(477900),
    i = l(582128),
    s = l(206692);
let a = { threshold: 0.25 },
    r = i.createContext(null);
l.d(
    t,
    {},
    {
        K: function () {
            return i.useContext(r);
        },
        m: function (e) {
            let { guildId: t, widget: l, loadId: d, column: o, order: c, elementRef: u, children: m } = e,
                x = (function (e, t) {
                    let [l, n] = i.useState(!1);
                    return (
                        i.useEffect(() => {
                            let l = e.current;
                            if (!t || null == l) return;
                            let i = (0, s.e)(a);
                            return (
                                (0, s.wB)(i, l, (e) => n(e.intersectionRatio >= 0.25)),
                                () => {
                                    ((0, s.$v)(i, l), n(!1));
                                }
                            );
                        }, [e, t]),
                        l
                    );
                })(u, null != d),
                h = i.useMemo(
                    () => ({ guildId: t, widget: l, loadId: d, column: o, order: c, isVisible: x }),
                    [t, l, d, o, c, x],
                );
            return (0, n.jsx)(r.Provider, { value: h, children: m });
        },
    },
);
