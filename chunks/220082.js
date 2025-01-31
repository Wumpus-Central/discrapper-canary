n.d(t, {
    Cf: () => E,
    Dq: () => m,
    SR: () => f,
    ZP: () => g,
    vM: () => p
}),
    n(47120);
var i = n(192379),
    r = n(979590),
    a = n.n(r),
    s = n(15729),
    o = n(731965),
    l = n(442837),
    u = n(607070),
    c = n(302221),
    d = n(956664);
let f = (0, s.U)(() => ({
    palette: {},
    fetching: {}
}));
function _(e) {
    return null != f.getState().palette[e];
}
async function p(e) {
    _(e) || (await h(e));
}
async function h(e) {
    if (!f.getState().fetching[e]) {
        (0, o.j)(() =>
            f.setState((t) => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }))
        );
        try {
            let t = await (0, d.OF)(e),
                n = (0, c.WY)(t[0]);
            (0, o.j)(() => {
                f.setState((i) => ({
                    fetching: {
                        ...i.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...i.palette,
                        [e]: [...t.slice(0, 2), ...n]
                    }
                }));
            });
        } catch (t) {
            (0, o.j)(() =>
                f.setState((t) => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            );
        }
    }
}
function m(e) {
    return !f((t) => null != e && t.fetching[e]);
}
function g(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = E(e, t, n);
    return i;
}
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = f((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.e7)([u.Z], () => (n && u.Z.desaturateUserColors ? u.Z.saturation : 1));
    i.useEffect(() => {
        null != e && null == r && h(e);
    }, [e, r]);
    let o = i.useMemo(
        () =>
            null == r
                ? void 0
                : r.map((e) => {
                      let [t, n, i] = e,
                          {
                              h: r,
                              s: o,
                              l
                          } = a()({
                              r: t,
                              g: n,
                              b: i
                          }).toHsl();
                      return a()({
                          h: r,
                          s: o * s,
                          l
                      }).toHexString();
                  }),
        [r, s]
    );
    return null != o ? o : [t, t];
}
