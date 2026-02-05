"use strict";
n.d(t, { D: () => i.DL, u: () => o });
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
    let m = r.useRef(l);
    r.useEffect(() => {
        m.current = l;
    }, [l]);
    let {
            refs: g,
            floatingStyles: E,
            context: A,
        } = (0, i.we)({
            open: _,
            onOpenChange: f,
            transform: d,
            middleware: [
                null == o ? (0, a.RK)() : void 0,
                (0, a.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        m.current &&
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
                (0, a.UU)(),
                (0, a.cY)(n),
                (0, a.BN)(),
            ],
            whileElementsMounted: s.ll,
            placement: o,
            strategy: "fixed",
        }),
        I = (0, i.s9)(A, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: T, getFloatingProps: y } = (0, i.bv)([I]);
    return {
        isOpen: _,
        setIsOpen: f,
        refs: g,
        floatingStyles: E,
        context: A,
        getReferenceProps: T,
        getFloatingProps: y,
    };
}
