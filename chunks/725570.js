n.d(t, {
    $m: () => c.$m,
    EO: () => c.EO,
    aF: () => u,
    jl: () => c.jl,
    rQ: () => c.rQ,
}),
    n(896048);
var r = n(64700),
    i = n(296489),
    a = n.n(i),
    s = n(964486),
    o = n(192308),
    l = n(638495),
    c = n(935462);

function u(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: i } = e,
        [c] = r.useState(() => a()()),
        u = (0, l.k)();
    (0, s.u5)(
        () => (
            (0, o.openModal)(
                t,
                {
                    modalKey: c,
                    onCloseRequest: n,
                    onCloseCallback: i,
                },
                u,
            ),
            () => {
                (0, o.closeModal)(c, u);
            }
        ),
    );
    let d = r.useRef(!0),
        f = {
            contextKey: u,
            modalKey: c,
            onCloseCallback: i,
        },
        p = r.useRef(f);
    return (
        r.useEffect(() => {
            p.current = f;
        }),
        r.useLayoutEffect(() => {
            let { contextKey: e, modalKey: r, onCloseCallback: i } = p.current;
            d.current || (0, o.updateModal)(r, t, n, i, e), (d.current = !1);
        }, [t, n]),
        null
    );
}
