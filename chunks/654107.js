n.d(t, { Ay: () => A, D1: () => T, l0: () => u, rh: () => S });
var i = n(64700),
    a = n(440745),
    r = n.n(a),
    _ = n(353640),
    s = n(121894),
    l = n(17928),
    o = n(775602),
    E = n(998304),
    d = n(515718);
let c = (0, _.v)(() => ({ palette: {}, fetching: {} }));
async function u(e) {
    null == c.getState().palette[e] && (await I(e));
}
async function I(e) {
    if (!c.getState().fetching[e]) {
        (0, s.r)(() => c.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, d.S4)(e),
                n = (0, E.Q7)(t[0]);
            (0, s.r)(() => {
                c.setState((i) => ({
                    fetching: { ...i.fetching, [e]: !1 },
                    palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, s.r)(() => c.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function T(e) {
    return !c((t) => null != e && t.fetching[e]);
}
function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = S(e, t, n);
    return i;
}
function S(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = c((t) => (null == e ? void 0 : t.palette[e])),
        _ = (0, l.bG)([o.A], () => (n && o.A.desaturateUserColors ? o.A.saturation : 1));
    return (
        i.useEffect(() => {
            null != e && null == a && I(e);
        }, [e, a]),
        i.useMemo(
            () =>
                a?.map((e) => {
                    let [t, n, i] = e,
                        { h: a, s, l } = r()({ r: t, g: n, b: i }).toHsl();
                    return r()({ h: a, s: s * _, l }).toHexString();
                }),
            [a, _],
        ) ?? [t, t]
    );
}
