"use strict";
n.d(t, { Ay: () => g, D1: () => m, Ip: () => _, l0: () => p, rh: () => E });
var r = n(64700),
    i = n(440745),
    a = n.n(i),
    s = n(353640),
    o = n(121894),
    l = n(311907),
    u = n(775602),
    c = n(998304),
    d = n(515718);
let _ = (0, s.v)(() => ({ palette: {}, fetching: {} }));
function f(e) {
    return null != _.getState().palette[e];
}
async function p(e) {
    f(e) || (await h(e));
}
async function h(e) {
    if (!_.getState().fetching[e]) {
        (0, o.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, d.S4)(e),
                n = (0, c.Q7)(t[0]);
            (0, o.r)(() => {
                _.setState((r) => ({
                    fetching: { ...r.fetching, [e]: !1 },
                    palette: { ...r.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, o.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function m(e) {
    return !_((t) => null != e && t.fetching[e]);
}
function g(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = E(e, t, n);
    return r;
}
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = _((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.bG)([u.A], () => (n && u.A.desaturateUserColors ? u.A.saturation : 1));
    return (
        r.useEffect(() => {
            null != e && null == i && h(e);
        }, [e, i]),
        r.useMemo(
            () =>
                i?.map((e) => {
                    let [t, n, r] = e,
                        { h: i, s: o, l } = a()({ r: t, g: n, b: r }).toHsl();
                    return a()({ h: i, s: o * s, l }).toHexString();
                }),
            [i, s],
        ) ?? [t, t]
    );
}
