var i = n(582128),
    r = n(286615),
    a = n(458265),
    s = n(149110),
    l = n(737992);
n.d(
    t,
    {},
    {
        u: function (e) {
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
                f = i.useContext(l.W),
                h = i.useRef(c);
            i.useEffect(() => {
                h.current = c;
            }, [c]);
            let I = i.useRef(u);
            i.useEffect(() => {
                I.current = u;
            }, [u]);
            let p = i.useRef(d);
            function m() {
                return { boundary: f?.ref.current ?? "clippingAncestors", padding: f?.padding };
            }
            i.useEffect(() => {
                p.current = d;
            }, [d]);
            let {
                    refs: T,
                    floatingStyles: g,
                    context: S,
                } = (0, r.we)({
                    open: E,
                    onOpenChange: A,
                    transform: _,
                    middleware: [
                        null == o ? (0, a.RK)(m) : void 0,
                        (0, a.Ej)(() => ({
                            ...m(),
                            apply(e) {
                                let { rects: t, elements: n } = e;
                                (p.current &&
                                    Object.assign(n.floating.style, {
                                        minWidth: `${t.reference.width}px`,
                                        width: `${t.reference.width}px`,
                                    }),
                                    null != I.current &&
                                        Object.assign(n.floating.style, { width: `${I.current(t.reference)}px` }),
                                    null != h.current &&
                                        Object.assign(n.floating.style, { maxHeight: `${h.current(t.reference)}px` }));
                            },
                        })),
                        (0, a.UU)(m),
                        (0, a.cY)(n),
                        (0, a.BN)(m),
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
                refs: T,
                floatingStyles: g,
                context: S,
                getReferenceProps: C,
                getFloatingProps: O,
            };
        },
    },
);
