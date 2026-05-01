n.d(t, { Ay: () => T, D1: () => I, l0: () => u, rh: () => h });
var i = n(64700),
    a = n(440745),
    r = n.n(a),
    s = n(353640),
    l = n(121894),
    o = n(17928),
    d = n(775602),
    c = n(998304),
    _ = n(515718);
let E = (0, s.v)(() => ({ palette: {}, fetching: {} }));
async function u(e) {
    null == E.getState().palette[e] && (await A(e));
}
async function A(e) {
    if (!E.getState().fetching[e]) {
        (0, l.r)(() => E.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, _.S4)(e),
                n = (0, c.Q7)(t[0]);
            (0, l.r)(() => {
                E.setState((i) => ({
                    fetching: { ...i.fetching, [e]: !1 },
                    palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, l.r)(() => E.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function I(e) {
    return !E((t) => null != e && t.fetching[e]);
}
function T(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = h(e, t, n);
    return i;
}
function h(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = E((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, o.bG)([d.A], () => (n && d.A.desaturateUserColors ? d.A.saturation : 1));
    return (
        i.useEffect(() => {
            null != e && null == a && A(e);
        }, [e, a]),
        i.useMemo(
            () =>
                a?.map((e) => {
                    let [t, n, i] = e,
                        { h: a, s: l, l: o } = r()({ r: t, g: n, b: i }).toHsl();
                    return r()({ h: a, s: l * s, l: o }).toHexString();
                }),
            [a, s],
        ) ?? [t, t]
    );
}
