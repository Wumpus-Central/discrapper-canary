n.d(t, {
    D: () => i.DL,
    u: () => o,
}),
    n(896048);
var r = n(64700),
    i = n(862019),
    a = n(879821),
    s = n(193439);

function o(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: o,
            matchReferenceWidth: l = !0,
            setHeight: c,
            setWidth: u,
            transform: d,
        } = e,
        [f, p] = r.useState(null != t && t),
        _ = r.useRef(c);
    r.useEffect(() => {
        _.current = c;
    }, [c]);
    let h = r.useRef(u);
    r.useEffect(() => {
        h.current = u;
    }, [u]);
    let m = r.useRef(l);
    r.useEffect(() => {
        m.current = l;
    }, [l]);
    let {
            refs: g,
            floatingStyles: E,
            context: b,
        } = (0, i.we)({
            open: f,
            onOpenChange: p,
            transform: d,
            middleware: [
                null == o ? (0, a.RK)() : void 0,
                (0, a.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        m.current &&
                            Object.assign(n.floating.style, {
                                minWidth: "".concat(t.reference.width, "px"),
                                width: "".concat(t.reference.width, "px"),
                            }),
                            null != h.current &&
                                Object.assign(n.floating.style, {
                                    width: "".concat(h.current(t.reference), "px"),
                                }),
                            null != _.current &&
                                Object.assign(n.floating.style, {
                                    maxHeight: "".concat(_.current(t.reference), "px"),
                                });
                    },
                }),
                (0, a.UU)(),
                (0, a.cY)(n),
                (0, a.BN)(),
            ],
            whileElementsMounted: s.ll,
            placement: o,
            strategy: "fixed",
        }),
        y = (0, i.s9)(b, {
            bubbles: {
                escapeKey: !1,
            },
        }),
        { getReferenceProps: O, getFloatingProps: A } = (0, i.bv)([y]);
    return {
        isOpen: f,
        setIsOpen: p,
        refs: g,
        floatingStyles: E,
        context: b,
        getReferenceProps: O,
        getFloatingProps: A,
    };
}
