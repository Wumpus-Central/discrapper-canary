"use strict";
n.d(t, { u: () => o });
var r = n(64700),
    i = n(862019),
    s = n(879821),
    a = n(193439);
function o(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: o,
            matchReferenceWidth: l = !0,
            setHeight: u,
            setWidth: c,
            transform: d,
        } = e,
        [_, f] = r.useState(t ?? !1),
        p = r.useRef(u);
    r.useEffect(() => {
        p.current = u;
    }, [u]);
    let h = r.useRef(c);
    r.useEffect(() => {
        h.current = c;
    }, [c]);
    let E = r.useRef(l);
    r.useEffect(() => {
        E.current = l;
    }, [l]);
    let {
            refs: m,
            floatingStyles: g,
            context: A,
        } = (0, i.we)({
            open: _,
            onOpenChange: f,
            transform: d,
            middleware: [
                null == o ? (0, s.RK)() : void 0,
                (0, s.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        E.current &&
                            Object.assign(n.floating.style, {
                                minWidth: `${t.reference.width}px`,
                                width: `${t.reference.width}px`,
                            }),
                            null != h.current &&
                                Object.assign(n.floating.style, { width: `${h.current(t.reference)}px` }),
                            null != p.current &&
                                Object.assign(n.floating.style, { maxHeight: `${p.current(t.reference)}px` });
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
        I = (0, i.s9)(A, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: T, getFloatingProps: S } = (0, i.bv)([I]);
    return {
        isOpen: _,
        setIsOpen: f,
        refs: m,
        floatingStyles: g,
        context: A,
        getReferenceProps: T,
        getFloatingProps: S,
    };
}
