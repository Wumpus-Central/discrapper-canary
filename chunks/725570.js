"use strict";
n.d(t, { aF: () => u });
var r = n(64700),
    i = n(296489),
    s = n.n(i),
    a = n(964486),
    o = n(192308),
    l = n(638495);
function u(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: i } = e,
        [u] = r.useState(() => s()()),
        d = (0, l.k)();
    (0, a.u5)(
        () => (
            (0, o.openModal)(t, { modalKey: u, onCloseRequest: n, onCloseCallback: i }, d),
            () => {
                (0, o.closeModal)(u, d);
            }
        ),
    );
    let c = r.useRef(!0),
        _ = { contextKey: d, modalKey: u, onCloseCallback: i },
        f = r.useRef(_);
    return (
        r.useEffect(() => {
            f.current = _;
        }),
        r.useLayoutEffect(() => {
            let { contextKey: e, modalKey: r, onCloseCallback: i } = f.current;
            c.current || (0, o.updateModal)(r, t, n, i, e), (c.current = !1);
        }, [t, n]),
        null
    );
}
