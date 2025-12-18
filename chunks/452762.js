n.d(t, { Z: () => p });
var r = n(473749),
    i = n(442837),
    a = n(846519),
    o = n(607070),
    s = n(745510);
let l = 4,
    c = 4,
    u = 2,
    d = 30,
    f = 1000;
function p(e) {
    let { enabled: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        p = r.useRef(null),
        _ = r.useRef(0),
        { createMultipleConfettiAt: m } = r.useContext(s.h),
        h = r.useMemo(
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
            null != t && m(t.left + t.width / 2, t.top + t.height / 2, h, d);
        }, [m, n, h]);
    return (
        r.useEffect(() => {
            if (!t || n) return;
            let e = new a.sW(f, g);
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
