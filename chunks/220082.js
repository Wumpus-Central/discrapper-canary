r.d(n, {
    Cf: function () {
        return y;
    },
    Dq: function () {
        return E;
    },
    SR: function () {
        return h;
    },
    ZP: function () {
        return v;
    },
    vM: function () {
        return m;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(979590),
    s = r.n(o),
    l = r(15729),
    u = r(731965),
    c = r(442837),
    d = r(607070),
    f = r(302221),
    p = r(956664);
let h = (0, l.U)(() => ({
    palette: {},
    fetching: {}
}));
function _(e) {
    return null != h.getState().palette[e];
}
async function m(e) {
    !_(e) && (await g(e));
}
async function g(e) {
    if (!h.getState().fetching[e]) {
        (0, u.j)(() =>
            h.setState((n) => ({
                fetching: {
                    ...n.fetching,
                    [e]: !0
                }
            }))
        );
        try {
            let n = await (0, p.OF)(e),
                r = (0, f.WY)(n[0]);
            (0, u.j)(() => {
                h.setState((i) => ({
                    fetching: {
                        ...i.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...i.palette,
                        [e]: [...n.slice(0, 2), ...r]
                    }
                }));
            });
        } catch (n) {
            (0, u.j)(() =>
                h.setState((n) => ({
                    fetching: {
                        ...n.fetching,
                        [e]: !1
                    }
                }))
            );
        }
    }
}
function E(e) {
    return !h((n) => null != e && n.fetching[e]);
}
function v(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i] = y(e, n, r);
    return i;
}
function y(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = h((n) => (null == e ? void 0 : n.palette[e])),
        o = (0, c.e7)([d.Z], () => (r && d.Z.desaturateUserColors ? d.Z.saturation : 1));
    a.useEffect(() => {
        if (null != e && null == i) g(e);
    }, [e, i]);
    let l = a.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => {
                      let [n, r, i] = e,
                          {
                              h: a,
                              s: l,
                              l: u
                          } = s()({
                              r: n,
                              g: r,
                              b: i
                          }).toHsl();
                      return s()({
                          h: a,
                          s: l * o,
                          l: u
                      }).toHexString();
                  }),
        [i, o]
    );
    return null != l ? l : [n, n];
}
