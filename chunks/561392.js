"use strict";
n.d(t, { u: () => o });
var i = n(64700),
    r = n(716263),
    s = n(879821),
    a = n(38339);
function o(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: o,
            matchReferenceWidth: l = !0,
            setHeight: d,
            setWidth: _,
            transform: u,
        } = e,
        [c, E] = i.useState(t ?? !1),
        h = i.useRef(d);
    i.useEffect(() => {
        h.current = d;
    }, [d]);
    let m = i.useRef(_);
    i.useEffect(() => {
        m.current = _;
    }, [_]);
    let f = i.useRef(l);
    i.useEffect(() => {
        f.current = l;
    }, [l]);
    let {
            refs: g,
            floatingStyles: p,
            context: A,
        } = (0, r.we)({
            open: c,
            onOpenChange: E,
            transform: u,
            middleware: [
                null == o ? (0, s.RK)() : void 0,
                (0, s.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        f.current &&
                            Object.assign(n.floating.style, {
                                minWidth: `${t.reference.width}px`,
                                width: `${t.reference.width}px`,
                            }),
                            null != m.current &&
                                Object.assign(n.floating.style, { width: `${m.current(t.reference)}px` }),
                            null != h.current &&
                                Object.assign(n.floating.style, { maxHeight: `${h.current(t.reference)}px` });
                    },
                }),
                (0, s.UU)(),
                (0, s.cY)(n),
                (0, s.BN)(),
            ],
            whileElementsMounted: a.ll,
            placement: o,
            strategy: "fixed",
        }),
        I = (0, r.s9)(A, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: T, getFloatingProps: S } = (0, r.bv)([I]);
    return {
        isOpen: c,
        setIsOpen: E,
        refs: g,
        floatingStyles: p,
        context: A,
        getReferenceProps: T,
        getFloatingProps: S,
    };
}
