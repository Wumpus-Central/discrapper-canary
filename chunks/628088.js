n.d(t, { A: () => f });
var l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    i = n(43990),
    o = n(834730),
    u = n(133825),
    c = n(291749),
    d = n(557637),
    m = n(963713),
    p = n(241762),
    x = n(652215),
    h = n(14424);
function f() {
    let e = (0, m.o5)(),
        { productIcon: t } = e,
        { isExpanded: n } = (0, p.H)(),
        r = s.useRef(null);
    return (
        s.useEffect(() => {
            n && r.current?.pause();
        }, [n]),
        (0, l.jsx)(i.N, {
            theme: x.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (s) =>
                (0, l.jsxs)("div", {
                    className: a()(s, h.rf),
                    children: [
                        null != t &&
                            (0, l.jsx)(d._M, {
                                id: "QuestBarBounty_productIcon",
                                children: (e) =>
                                    (0, l.jsx)("img", {
                                        ref: e,
                                        src: (0, c.lR)({ assetUrl: t, width: 32, height: 32 }),
                                        alt: "",
                                        width: 32,
                                        height: 32,
                                        className: h.Z2,
                                    }),
                            }),
                        (0, l.jsx)(o.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            lineClamp: 2,
                            className: h.tZ,
                            children: e.productName ?? "",
                        }),
                        (0, l.jsx)(u.a, {
                            ref: r,
                            autoplay: !n,
                            stateMachine: "State Machine 1",
                            fit: "contain",
                            className: h.bm,
                        }),
                    ],
                }),
        })
    );
}
