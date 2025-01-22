r.d(n, {
    Y0: function () {
        return d.Y0;
    },
    hz: function () {
        return d.hz;
    },
    mz: function () {
        return d.mz;
    },
    u_: function () {
        return f;
    },
    xB: function () {
        return d.xB;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(97613),
    s = r.n(o),
    l = r(493773),
    u = r(952265),
    c = r(307616),
    d = r(466377);
function f(e) {
    let { renderModal: n, onCloseRequest: r, onCloseCallback: i } = e,
        [o] = a.useState(() => s()()),
        d = (0, c.v)();
    (0, l.N)(
        () => (
            (0, u.h7)(
                n,
                {
                    modalKey: o,
                    onCloseRequest: r,
                    onCloseCallback: i
                },
                d
            ),
            () => {
                (0, u.Mr)(o, d);
            }
        )
    );
    let f = a.useRef(!0),
        p = {
            contextKey: d,
            modalKey: o,
            onCloseCallback: i
        },
        h = a.useRef(p);
    return (
        a.useEffect(() => {
            h.current = p;
        }),
        a.useLayoutEffect(() => {
            let { contextKey: e, modalKey: i, onCloseCallback: a } = h.current;
            !f.current && (0, u.o)(i, n, r, a, e), (f.current = !1);
        }, [n, r]),
        null
    );
}
