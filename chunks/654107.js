"use strict";
n.d(t, { Ay: () => p, D1: () => h, l0: () => f, rh: () => m });
var r = n(64700),
    i = n(440745),
    s = n.n(i),
    a = n(353640),
    o = n(121894),
    l = n(311907),
    u = n(775602),
    d = n(998304),
    c = n(515718);
let _ = (0, a.v)(() => ({ palette: {}, fetching: {} }));
async function f(e) {
    null == _.getState().palette[e] && (await E(e));
}
async function E(e) {
    if (!_.getState().fetching[e]) {
        (0, o.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, c.S4)(e),
                n = (0, d.Q7)(t[0]);
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
function h(e) {
    return !_((t) => null != e && t.fetching[e]);
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = m(e, t, n);
    return r;
}
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = _((t) => (null == e ? void 0 : t.palette[e])),
        a = (0, l.bG)([u.A], () => (n && u.A.desaturateUserColors ? u.A.saturation : 1));
    return (
        r.useEffect(() => {
            null != e && null == i && E(e);
        }, [e, i]),
        r.useMemo(
            () =>
                i?.map((e) => {
                    let [t, n, r] = e,
                        { h: i, s: o, l } = s()({ r: t, g: n, b: r }).toHsl();
                    return s()({ h: i, s: o * a, l }).toHexString();
                }),
            [i, a],
        ) ?? [t, t]
    );
}
