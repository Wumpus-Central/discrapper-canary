"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(451988),
    a = n(775602),
    o = n(21161);
function l(e) {
    let { enabled: t } = e,
        n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        l = r.useRef(null),
        u = r.useRef(0),
        { createMultipleConfettiAt: c } = r.useContext(o.x),
        d = r.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                dragCoefficient: { type: "static", value: 0.001 },
            }),
            [],
        ),
        _ = r.useCallback(() => {
            if (n) return;
            let e = l.current?.getBoundingClientRect();
            null != e && c(e.left + e.width / 2, e.top + e.height / 2, d, 30);
        }, [c, n, d]);
    return (
        r.useEffect(() => {
            if (!t || n) return;
            let e = new s.J_(1e3, _);
            return e.delay(), () => e.cancel();
        }, [t, n, _]),
        {
            giftButtonRef: l,
            handleMouseEnter: r.useCallback(() => {
                t && ((u.current += 1), u.current % 4 == 0 && _());
            }, [t, _]),
        }
    );
}
