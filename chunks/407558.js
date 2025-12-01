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
        [f, p] = r.useState(null != t && t),
        _ = r.useRef(c);
    r.useEffect(() => {
        _.current = c;
    }, [c]);
    let m = r.useRef(u);
    r.useEffect(() => {
        m.current = u;
    }, [u]);
    let h = r.useRef(l);
    r.useEffect(() => {
        h.current = l;
    }, [l]);
    let {
            refs: g,
            floatingStyles: E,
            context: b,
        } = (0, i.YF)({
            open: f,
            onOpenChange: p,
            transform: d,
            middleware: [
                null == s ? (0, a.X5)() : void 0,
                (0, a.dp)({
                    apply(e) {
                        let { rects: t, elements: n } = e;
                        h.current &&
                            Object.assign(n.floating.style, {
                                minWidth: "".concat(t.reference.width, "px"),
                                width: "".concat(t.reference.width, "px"),
                            }),
                            null != m.current &&
                                Object.assign(n.floating.style, { width: "".concat(m.current(t.reference), "px") }),
                            null != _.current &&
                                Object.assign(n.floating.style, { maxHeight: "".concat(_.current(t.reference), "px") });
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
        setIsOpen: p,
        refs: g,
        floatingStyles: E,
        context: b,
        getReferenceProps: O,
        getFloatingProps: v,
    };
}
