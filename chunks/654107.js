"use strict";
n.d(t, { Ay: () => I, D1: () => h, l0: () => E, rh: () => f });
var i = n(64700),
    r = n(440745),
    a = n.n(r),
    s = n(353640),
    l = n(121894),
    o = n(17928),
    d = n(775602),
    c = n(998304),
    u = n(515718);
let _ = (0, s.v)(() => ({ palette: {}, fetching: {} }));
async function E(e) {
    null == _.getState().palette[e] && (await A(e));
}
async function A(e) {
    if (!_.getState().fetching[e]) {
        (0, l.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !0 } })));
        try {
            let t = await (0, u.S4)(e),
                n = (0, c.Q7)(t[0]);
            (0, l.r)(() => {
                _.setState((i) => ({
                    fetching: { ...i.fetching, [e]: !1 },
                    palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
                }));
            });
        } catch (t) {
            (0, l.r)(() => _.setState((t) => ({ fetching: { ...t.fetching, [e]: !1 } })));
        }
    }
}
function h(e) {
    return !_((t) => null != e && t.fetching[e]);
}
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = f(e, t, n);
    return i;
}
function f(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = _((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, o.bG)([d.Ay], () => (n && d.Ay.desaturateUserColors ? d.Ay.saturation : 1));
    return (
        i.useEffect(() => {
            null != e && null == r && A(e);
        }, [e, r]),
        i.useMemo(
            () =>
                r?.map((e) => {
                    let [t, n, i] = e,
                        { h: r, s: l, l: o } = a()({ r: t, g: n, b: i }).toHsl();
                    return a()({ h: r, s: l * s, l: o }).toHexString();
                }),
            [r, s],
        ) ?? [t, t]
    );
}
