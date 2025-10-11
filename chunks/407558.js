n.d(t, { O: () => s }), n(388685);
var r = n(647438),
    i = n(9787),
    a = n(863785),
    o = n(615673);
function s(e) {
    let { defaultOpen: t, offset: n = 4, placement: s, matchReferenceWidth: l = !0, setHeight: c, setWidth: u } = e,
        [d, f] = r.useState(null != t && t),
        _ = r.useRef(c);
    r.useEffect(() => {
        _.current = c;
    }, [c]);
    let p = r.useRef(u);
    r.useEffect(() => {
        p.current = u;
    }, [u]);
    let h = r.useRef(l);
    r.useEffect(() => {
        h.current = l;
    }, [l]);
    let {
            refs: m,
            floatingStyles: g,
            context: E,
        } = (0, i.YF)({
            open: d,
            onOpenChange: f,
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
                            null != p.current &&
                                Object.assign(n.floating.style, { width: "".concat(p.current(t.reference), "px") }),
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
        b = (0, i.bQ)(E, { bubbles: { escapeKey: !1 } }),
        { getReferenceProps: y, getFloatingProps: O } = (0, i.NI)([b]);
    return {
        isOpen: d,
        setIsOpen: f,
        refs: m,
        floatingStyles: g,
        context: E,
        getReferenceProps: y,
        getFloatingProps: O,
    };
}
