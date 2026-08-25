"use strict";
n.d(t, { u: () => o });
var i = n(582128),
    r = n(499957),
    a = n(458265),
    s = n(38339),
    l = n(737992);
function o(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: o,
            matchReferenceWidth: d = !0,
            setHeight: c,
            setWidth: u,
            transform: _,
        } = e,
        [E, A] = i.useState(t ?? !1),
        h = i.useContext(l.W),
        I = i.useRef(c);
    i.useEffect(() => {
        I.current = c;
    }, [c]);
    let f = i.useRef(u);
    i.useEffect(() => {
        f.current = u;
    }, [u]);
    let p = i.useRef(d);
    function T() {
        return { boundary: h?.ref.current ?? "clippingAncestors", padding: h?.padding };
    }
    i.useEffect(() => {
        p.current = d;
    }, [d]);
    let {
            refs: m,
            floatingStyles: g,
            context: S,
        } = (0, r.we)({
            open: E,
            onOpenChange: A,
            transform: _,
            middleware: [
                null == o ? (0, a.RK)(T) : void 0,
                (0, a.Ej)(() => ({
                    ...T(),
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        p.current &&
                            Object.assign(n.floating.style, {
                                minWidth: `${t.reference.width}px`,
                                width: `${t.reference.width}px`,
                            }),
                            null != f.current &&
                                Object.assign(n.floating.style, { width: `${f.current(t.reference)}px` }),
                            null != I.current &&
                                Object.assign(n.floating.style, { maxHeight: `${I.current(t.reference)}px` });
                    },
                })),
                (0, a.UU)(T),
                (0, a.cY)(n),
                (0, a.BN)(T),
            ],
            whileElementsMounted: s.ll,
            placement: o,
            strategy: "fixed",
        }),
        N = (0, r.s9)(S, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: C, getFloatingProps: O } = (0, r.bv)([N]);
    return {
        isOpen: E,
        setIsOpen: A,
        refs: m,
        floatingStyles: g,
        context: S,
        getReferenceProps: C,
        getFloatingProps: O,
    };
}
