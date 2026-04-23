n.d(t, { Ay: () => T, D1: () => A, l0: () => u, rh: () => S });
var i = n(64700),
    r = n(440745),
    a = n.n(r),
    s = n(353640),
    _ = n(121894),
    l = n(17928),
    o = n(775602),
    E = n(998304),
    d = n(515718);
let c = (0, s.v)(() => ({ palette: {}, fetching: {} }));
async function u(e) {
    null == c.getState().palette[e] && (await I(e));
}
async function I(e) {
    if (!c.getState().fetching[e]) {
        (0, _.r)(() => c.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, d.S4)(e),
                n = (0, E.Q7)(t[0]);
            (0, _.r)(() => {
                c.setState((i) => ({
                    fetching: { ...i.fetching, [e]: !1 },
                    palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, _.r)(() => c.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function A(e) {
    return !c((t) => null != e && t.fetching[e]);
}
function T(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = S(e, t, n);
    return i;
}
function S(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = c((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.bG)([o.A], () => (n && o.A.desaturateUserColors ? o.A.saturation : 1));
    return (
        i.useEffect(() => {
            null != e && null == r && I(e);
        }, [e, r]),
        i.useMemo(
            () =>
                r?.map((e) => {
                    let [t, n, i] = e,
                        { h: r, s: _, l } = a()({ r: t, g: n, b: i }).toHsl();
                    return a()({ h: r, s: _ * s, l }).toHexString();
                }),
            [r, s],
        ) ?? [t, t]
    );
}
