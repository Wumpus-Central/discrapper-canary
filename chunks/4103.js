"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(775602),
    o = n(21161);
let l = 4,
    u = 4,
    c = 2,
    d = 30,
    _ = 1e3;
function f(e) {
    let { enabled: t } = e,
        n = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        f = r.useRef(null),
        p = r.useRef(0),
        { createMultipleConfettiAt: h } = r.useContext(o.x),
        m = r.useMemo(
            () => ({
                size: { type: "static-random", minValue: u - c, maxValue: u + c },
                velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                dragCoefficient: { type: "static", value: 0.001 },
            }),
            [],
        ),
        g = r.useCallback(() => {
            if (n) return;
            let e = f.current?.getBoundingClientRect();
            null != e && h(e.left + e.width / 2, e.top + e.height / 2, m, d);
        }, [h, n, m]);
    return (
        r.useEffect(() => {
            if (!t || n) return;
            let e = new a.J_(_, g);
            return e.delay(), () => e.cancel();
        }, [t, n, g]),
        {
            giftButtonRef: f,
            handleMouseEnter: r.useCallback(() => {
                t && ((p.current += 1), p.current % l == 0 && g());
            }, [t, g]),
        }
    );
}
