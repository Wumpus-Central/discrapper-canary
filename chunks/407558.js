n.d(t, {
    O: () => s,
    Y: () => i.Y_,
}),
    n(388685);
var r = n(473749),
    i = n(980824),
    a = n(998976),
    o = n(615673);
function s(e) {
    let {
            defaultOpen: t,
            offset: n = 4,
            placement: s,
            matchReferenceWidth: l = !0,
            setHeight: c,
            setWidth: u,
            transform: d,
        } = e,
        [f, _] = r.useState(null != t && t),
        p = r.useRef(c);
    r.useEffect(() => {
        p.current = c;
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
        } = (0, i.YF)({
            open: f,
            onOpenChange: _,
            transform: d,
            middleware: [
                null == s ? (0, a.X5)() : void 0,
                (0, a.dp)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        m.current &&
                            Object.assign(n.floating.style, {
                                minWidth: "".concat(t.reference.width, "px"),
                                width: "".concat(t.reference.width, "px"),
                            }),
                            null != h.current &&
                                Object.assign(n.floating.style, { width: "".concat(h.current(t.reference), "px") }),
                            null != p.current &&
                                Object.assign(n.floating.style, { maxHeight: "".concat(p.current(t.reference), "px") });
                    },
                }),
                (0, a.RR)(),
                (0, a.cv)(n),
                (0, a.uY)(),
            ],
            whileElementsMounted: o.Me,
            placement: s,
            strategy: "fixed",
        }),
        y = (0, i.bQ)(b, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: O, getFloatingProps: v } = (0, i.NI)([y]);
    return {
        isOpen: f,
        setIsOpen: _,
        refs: g,
        floatingStyles: E,
        context: b,
        getReferenceProps: O,
        getFloatingProps: v,
    };
}
