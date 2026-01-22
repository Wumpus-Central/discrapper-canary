n.d(t, {
    Ay: () => O,
    D1: () => y,
    Ip: () => m,
    l0: () => E,
    rh: () => A,
}),
    n(896048);
var r = n(64700),
    i = n(440745),
    a = n.n(i),
    s = n(353640),
    o = n(121894),
    l = n(311907),
    c = n(775602),
    u = n(998304),
    d = n(515718);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = (0, s.v)(() => ({
    palette: {},
    fetching: {},
}));

function g(e) {
    return null != m.getState().palette[e];
}
async function E(e) {
    g(e) || (await b(e));
}
async function b(e) {
    if (!m.getState().fetching[e]) {
        (0, o.r)(() =>
            m.setState((t) => ({
                fetching: h(p({}, t.fetching), {
                    [e]: !0,
                }),
            })),
        );
        try {
            let t = await (0, d.S4)(e),
                n = (0, u.Q7)(t[0]);
            (0, o.r)(() => {
                m.setState((r) => ({
                    fetching: h(p({}, r.fetching), {
                        [e]: !1,
                    }),
                    palette: h(p({}, r.palette), {
                        [e]: [...t.slice(0, 2), ...n],
                    }),
                }));
            });
        } catch (t) {
            (0, o.r)(() =>
                m.setState((t) => ({
                    fetching: h(p({}, t.fetching), {
                        [e]: !1,
                    }),
                })),
            );
        }
    }
}

function y(e) {
    return !m((t) => null != e && t.fetching[e]);
}

function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = A(e, t, n);
    return r;
}

function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = m((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.bG)([c.A], () => (n && c.A.desaturateUserColors ? c.A.saturation : 1));
    r.useEffect(() => {
        null != e && null == i && b(e);
    }, [e, i]);
    let o = r.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => {
                      let [t, n, r] = e,
                          {
                              h: i,
                              s: o,
                              l,
                          } = a()({
                              r: t,
                              g: n,
                              b: r,
                          }).toHsl();
                      return a()({
                          h: i,
                          s: o * s,
                          l,
                      }).toHexString();
                  }),
        [i, s],
    );
    return null != o ? o : [t, t];
}
