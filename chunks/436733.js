e.d(n, { G: () => F });
var r = e(582128),
    l = e(858899),
    u = e(765178),
    a = e(39418),
    i = e(828596),
    o = e(815996),
    c = e(674658),
    s = e(652215),
    d = e(105292);
function F(t, n) {
    let [e, F] = r.useState(!1),
        [p, f] = r.useState(0),
        h = r.useRef(0),
        g = t?.id,
        w = t?.rewardConfig?.action?.skuIds[0] ?? null,
        [A, S] = r.useState(null),
        { product: y } = (0, c.q)(w ?? A, !0);
    return (
        r.useEffect(() => {
            p !== h.current && null != y && ((h.current = p), n?.(y));
        }, [p, y, n]),
        {
            onClaim: r.useCallback(async () => {
                if (null != g) {
                    (F(!0), S(w));
                    try {
                        await (0, i.cF)(g, s.FYj);
                    } catch (t) {
                        ((0, a.o)(t),
                            (0, l.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" }),
                            u.O.announce(d.intl.string(d.t.F8FvUy)),
                            F(!1));
                        return;
                    }
                    f((t) => t + 1);
                    try {
                        await (0, o.gB)();
                    } catch (t) {
                        (0, a.o)(t);
                    } finally {
                        F(!1);
                    }
                }
            }, [g, w]),
            isClaiming: e,
            rewardProduct: y,
        }
    );
}
