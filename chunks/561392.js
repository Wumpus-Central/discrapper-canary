"use strict";
n.d(t, { u: () => o });
var i = n(64700),
    r = n(862019),
    s = n(879821),
    a = n(193439);
function o(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: o,
            matchReferenceWidth: l = !0,
            setHeight: u,
            setWidth: d,
            transform: c,
        } = e,
        [_, h] = i.useState(t ?? !1),
        f = i.useRef(u);
    i.useEffect(() => {
        f.current = u;
    }, [u]);
    let E = i.useRef(d);
    i.useEffect(() => {
        E.current = d;
    }, [d]);
    let p = i.useRef(l);
    i.useEffect(() => {
        p.current = l;
    }, [l]);
    let {
            refs: m,
            floatingStyles: g,
            context: A,
        } = (0, r.we)({
            open: _,
            onOpenChange: h,
            transform: c,
            middleware: [
                null == o ? (0, s.RK)() : void 0,
                (0, s.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        p.current &&
                            Object.assign(n.floating.style, {
                                minWidth: `${t.reference.width}px`,
                                width: `${t.reference.width}px`,
                            }),
                            null != E.current &&
                                Object.assign(n.floating.style, { width: `${E.current(t.reference)}px` }),
                            null != f.current &&
                                Object.assign(n.floating.style, { maxHeight: `${f.current(t.reference)}px` });
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
        isOpen: _,
        setIsOpen: h,
        refs: m,
        floatingStyles: g,
        context: A,
        getReferenceProps: T,
        getFloatingProps: S,
    };
}
