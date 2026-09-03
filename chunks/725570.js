n.d(t, { aF: () => d });
var i = n(582128),
    r = n(277057),
    a = n.n(r),
    s = n(964486),
    l = n(192308),
    o = n(638495);
function d(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: r } = e,
        [d] = i.useState(() => a()()),
        c = (0, o.k)();
    (0, s.u5)(
        () => (
            (0, l.openModal)(t, { modalKey: d, onCloseRequest: n, onCloseCallback: r }, c),
            () => {
                (0, l.closeModal)(d, c);
            }
        ),
    );
    let u = i.useRef(!0),
        _ = { contextKey: c, modalKey: d, onCloseCallback: r },
        E = i.useRef(_);
    return (
        i.useEffect(() => {
            E.current = _;
        }),
        i.useLayoutEffect(() => {
            let { contextKey: e, modalKey: i, onCloseCallback: r } = E.current;
            u.current || (0, l.updateModal)(i, t, n, r, e), (u.current = !1);
        }, [t, n]),
        null
    );
}
