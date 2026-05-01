"use strict";
n.d(t, { Ay: () => E, D1: () => p, l0: () => f, rh: () => m });
var i = n(64700),
    r = n(440745),
    s = n.n(r),
    a = n(353640),
    o = n(121894),
    l = n(17928),
    u = n(775602),
    c = n(998304),
    d = n(515718);
let _ = (0, a.v)(() => ({ palette: {}, fetching: {} }));
async function f(e) {
    null == _.getState().palette[e] && (await h(e));
}
async function h(e) {
    if (!_.getState().fetching[e]) {
        (0, o.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, d.S4)(e),
                n = (0, c.Q7)(t[0]);
            (0, o.r)(() => {
                _.setState((i) => ({
                    fetching: { ...i.fetching, [e]: !1 },
                    palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, o.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function p(e) {
    return !_((t) => null != e && t.fetching[e]);
}
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = m(e, t, n);
    return i;
}
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = _((t) => (null == e ? void 0 : t.palette[e])),
        a = (0, l.bG)([u.A], () => (n && u.A.desaturateUserColors ? u.A.saturation : 1));
    return (
        i.useEffect(() => {
            null != e && null == r && h(e);
        }, [e, r]),
        i.useMemo(
            () =>
                r?.map((e) => {
                    let [t, n, i] = e,
                        { h: r, s: o, l } = s()({ r: t, g: n, b: i }).toHsl();
                    return s()({ h: r, s: o * a, l }).toHexString();
                }),
            [r, a],
        ) ?? [t, t]
    );
}
