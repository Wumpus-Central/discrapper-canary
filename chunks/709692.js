n.d(t, {
    Y0: () => u.Y0,
    hz: () => u.hz,
    mz: () => u.mz,
    u_: () => c,
    xB: () => u.xB
}),
    n(47120);
var i = n(192379),
    r = n(97613),
    a = n.n(r),
    s = n(493773),
    o = n(952265),
    l = n(307616),
    u = n(466377);
function c(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: r } = e,
        [u] = i.useState(() => a()()),
        c = (0, l.v)();
    (0, s.Ng)(
        () => (
            (0, o.h7)(
                t,
                {
                    modalKey: u,
                    onCloseRequest: n,
                    onCloseCallback: r
                },
                c
            ),
            () => {
                (0, o.Mr)(u, c);
            }
        )
    );
    let d = i.useRef(!0),
        f = {
            contextKey: c,
            modalKey: u,
            onCloseCallback: r
        },
        _ = i.useRef(f);
    return (
        i.useEffect(() => {
            _.current = f;
        }),
        i.useLayoutEffect(() => {
            let { contextKey: e, modalKey: i, onCloseCallback: r } = _.current;
            d.current || (0, o.o)(i, t, n, r, e), (d.current = !1);
        }, [t, n]),
        null
    );
}
