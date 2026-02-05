"use strict";
n.d(t, { $m: () => u.$m, EO: () => u.EO, aF: () => c, jl: () => u.jl, rQ: () => u.rQ });
var r = n(64700),
    i = n(296489),
    a = n.n(i),
    s = n(964486),
    o = n(192308),
    l = n(638495),
    u = n(935462);
function c(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: i } = e,
        [u] = r.useState(() => a()()),
        c = (0, l.k)();
    (0, s.u5)(
        () => (
            (0, o.openModal)(t, { modalKey: u, onCloseRequest: n, onCloseCallback: i }, c),
            () => {
                (0, o.closeModal)(u, c);
            }
        ),
    );
    let d = r.useRef(!0),
        _ = { contextKey: c, modalKey: u, onCloseCallback: i },
        f = r.useRef(_);
    return (
        r.useEffect(() => {
            f.current = _;
        }),
        r.useLayoutEffect(() => {
            let { contextKey: e, modalKey: r, onCloseCallback: i } = f.current;
            d.current || (0, o.updateModal)(r, t, n, i, e), (d.current = !1);
        }, [t, n]),
        null
    );
}
