n.d(t, { A: () => p });
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(775602),
    o = n(21161);
let l = 4,
    c = 4,
    u = 2,
    d = 30,
    f = 1000;
function p(e) {
    let { enabled: t } = e,
        n = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        p = r.useRef(null),
        _ = r.useRef(0),
        { createMultipleConfettiAt: h } = r.useContext(o.x),
        m = r.useMemo(
            () => ({
                size: {
                    type: "static-random",
                    minValue: c - u,
                    maxValue: c + u,
                },
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: -10,
                        y: -25,
                    },
                    maxValue: {
                        x: 10,
                        y: -5,
                    },
                },
                dragCoefficient: {
                    type: "static",
                    value: 0.001,
                },
            }),
            [],
        ),
        g = r.useCallback(() => {
            var e;
            if (n) return;
            let t = null == (e = p.current) ? void 0 : e.getBoundingClientRect();
            null != t && h(t.left + t.width / 2, t.top + t.height / 2, m, d);
        }, [h, n, m]);
    return (
        r.useEffect(() => {
            if (!t || n) return;
            let e = new a.J_(f, g);
            return e.delay(), () => e.cancel();
        }, [t, n, g]),
        {
            giftButtonRef: p,
            handleMouseEnter: r.useCallback(() => {
                t && ((_.current += 1), _.current % l == 0 && g());
            }, [t, g]),
        }
    );
}
