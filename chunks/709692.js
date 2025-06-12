n.d(t, {
    Y0: () => c.Y0,
    hz: () => c.hz,
    mz: () => c.mz,
    u_: () => u,
    xB: () => c.xB
}),
    n(388685);
var r = n(73800),
    i = n(97613),
    a = n.n(i),
    o = n(493773),
    s = n(952265),
    l = n(307616),
    c = n(466377);
function u(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: i } = e,
        [c] = r.useState(() => a()()),
        u = (0, l.v)();
    (0, o.Ng)(
        () => (
            (0, s.h7)(
                t,
                {
                    modalKey: c,
                    onCloseRequest: n,
                    onCloseCallback: i
                },
                u
            ),
            () => {
                (0, s.Mr)(c, u);
            }
        )
    );
    let d = r.useRef(!0),
        _ = {
            contextKey: u,
            modalKey: c,
            onCloseCallback: i
        },
        f = r.useRef(_);
    return (
        r.useEffect(() => {
            f.current = _;
        }),
        r.useLayoutEffect(() => {
            let { contextKey: e, modalKey: r, onCloseCallback: i } = f.current;
            d.current || (0, s.o)(r, t, n, i, e), (d.current = !1);
        }, [t, n]),
        null
    );
}
