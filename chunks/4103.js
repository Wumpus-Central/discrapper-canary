n.d(t, { A: () => s });
var a = n(64700),
    r = n(311907),
    l = n(451988),
    i = n(775602),
    o = n(21161);
function s(e) {
    let { enabled: t } = e,
        n = (0, r.bG)([i.A], () => i.A.useReducedMotion),
        s = a.useRef(null),
        c = a.useRef(0),
        { createMultipleConfettiAt: u } = a.useContext(o.x),
        d = a.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                dragCoefficient: { type: "static", value: 0.001 },
            }),
            [],
        ),
        f = a.useCallback(() => {
            if (n) return;
            let e = s.current?.getBoundingClientRect();
            null != e && u(e.left + e.width / 2, e.top + e.height / 2, d, 30);
        }, [u, n, d]);
    return (
        a.useEffect(() => {
            if (!t || n) return;
            let e = new l.J_(1e3, f);
            return e.delay(), () => e.cancel();
        }, [t, n, f]),
        {
            giftButtonRef: s,
            handleMouseEnter: a.useCallback(() => {
                t && ((c.current += 1), c.current % 4 == 0 && f());
            }, [t, f]),
        }
    );
}
