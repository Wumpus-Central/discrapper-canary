n.d(t, {
    Cf: () => O,
    Dq: () => y,
    SR: () => m,
    ZP: () => v,
    vM: () => E
}),
    n(47120);
var r = n(192379),
    i = n(979590),
    o = n.n(i),
    a = n(230383),
    s = n(731965),
    l = n(442837),
    c = n(607070),
    u = n(302221),
    d = n(956664);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (0, a.U)(() => ({
    palette: {},
    fetching: {}
}));
function g(e) {
    return null != m.getState().palette[e];
}
async function E(e) {
    g(e) || (await b(e));
}
async function b(e) {
    if (!m.getState().fetching[e]) {
        (0, s.j)(() => m.setState((t) => ({ fetching: h(_({}, t.fetching), { [e]: !0 }) })));
        try {
            let t = await (0, d.OF)(e),
                n = (0, u.WY)(t[0]);
            (0, s.j)(() => {
                m.setState((r) => ({
                    fetching: h(_({}, r.fetching), { [e]: !1 }),
                    palette: h(_({}, r.palette), {
                        [e]: [...t.slice(0, 2), ...n]
                    })
                }));
            });
        } catch (t) {
            (0, s.j)(() => m.setState((t) => ({ fetching: h(_({}, t.fetching), { [e]: !1 }) })));
        }
    }
}
function y(e) {
    return !m((t) => null != e && t.fetching[e]);
}
function v(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = O(e, t, n);
    return r;
}
function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = m((t) => (null == e ? void 0 : t.palette[e])),
        a = (0, l.e7)([c.Z], () => (n && c.Z.desaturateUserColors ? c.Z.saturation : 1));
    r.useEffect(() => {
        null != e && null == i && b(e);
    }, [e, i]);
    let s = r.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => {
                      let [t, n, r] = e,
                          {
                              h: i,
                              s,
                              l
                          } = o()({
                              r: t,
                              g: n,
                              b: r
                          }).toHsl();
                      return o()({
                          h: i,
                          s: s * a,
                          l
                      }).toHexString();
                  }),
        [i, a]
    );
    return null != s ? s : [t, t];
}
