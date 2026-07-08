"use strict";
n.d(t, { u: () => l });
var i = n(64700),
    r = n(745113),
    a = n(879821),
    s = n(38339);
function l(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: l,
            matchReferenceWidth: o = !0,
            setHeight: d,
            setWidth: c,
            transform: u,
        } = e,
        [_, E] = i.useState(t ?? !1),
        A = i.useRef(d);
    i.useEffect(() => {
        A.current = d;
    }, [d]);
    let h = i.useRef(c);
    i.useEffect(() => {
        h.current = c;
    }, [c]);
    let I = i.useRef(o);
    i.useEffect(() => {
        I.current = o;
    }, [o]);
    let {
            refs: f,
            floatingStyles: p,
            context: T,
        } = (0, r.we)({
            open: _,
            onOpenChange: E,
            transform: u,
            middleware: [
                null == l ? (0, a.RK)() : void 0,
                (0, a.Ej)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        I.current &&
                            Object.assign(n.floating.style, {
                                minWidth: `${t.reference.width}px`,
                                width: `${t.reference.width}px`,
                            }),
                            null != h.current &&
                                Object.assign(n.floating.style, { width: `${h.current(t.reference)}px` }),
                            null != A.current &&
                                Object.assign(n.floating.style, { maxHeight: `${A.current(t.reference)}px` });
                    },
                }),
                (0, a.UU)(),
                (0, a.cY)(n),
                (0, a.BN)(),
            ],
            whileElementsMounted: s.ll,
            placement: l,
            strategy: "fixed",
        }),
        m = (0, r.s9)(T, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: g, getFloatingProps: S } = (0, r.bv)([m]);
    return {
        isOpen: _,
        setIsOpen: E,
        refs: f,
        floatingStyles: p,
        context: T,
        getReferenceProps: g,
        getFloatingProps: S,
    };
}
