(n(134528), n(947204));
var i = n(277057),
    r = n.n(i),
    a = n(196765),
    s = n(121894),
    l = n(267102),
    o = n(231723),
    d = n(652215);
let c = n(450507).A,
    u = [o.SY, "popout"];
function _() {
    let e = (0, l.zd)();
    return null != e ? E(e) : o.SY;
}
function E(e) {
    switch (e) {
        case d.BRT.POPOUT:
            return "popout";
        case d.BRT.OVERLAY:
            if (__OVERLAY__) return o.SY;
            return "popout";
        default:
            return o.SY;
    }
}
let A = (0, a.v)((e) => ({ [o.SY]: [], popout: [] }));
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _(),
        {
            modalKey: i,
            dismissable: a,
            instant: l,
            Layer: o,
            onCloseRequest: d,
            onCloseCallback: c,
            backdropStyle: u,
            stackingBehavior: E,
            stackNextByDefault: h,
            allowsNavigation: I,
        } = t,
        p = null != i ? i : r()();
    return (
        (0, s.r)(() => {
            A.setState((t) => {
                let i = t[n];
                if (
                    void 0 !== i &&
                    i.some((e) => {
                        let { key: t } = e;
                        return t === p;
                    })
                )
                    return t;
                let r = E;
                return (
                    null == r && (r = i.at(-1)?.stackNextByDefault === !0 ? "stack" : "replace"),
                    {
                        ...t,
                        [n]: [
                            ...i,
                            {
                                key: p,
                                dismissable: a,
                                Layer: o,
                                render: e,
                                onCloseRequest: d ?? (() => f(p, n)),
                                onCloseCallback: c,
                                instant: l,
                                backdropStyle: u,
                                stackingBehavior: r,
                                stackNextByDefault: h,
                                allowsNavigation: I,
                            },
                        ],
                    }
                );
            });
        }),
        p
    );
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
        n = A.getState()[t],
        i =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    return (
        (0, s.r)(() => {
            A.setState((n) =>
                void 0 === n[t]
                    ? n
                    : {
                          ...n,
                          [t]: n[t].filter((t) => {
                              let { key: n } = t;
                              return n !== e;
                          }),
                      },
            );
        }),
        null != i && null != i.onCloseCallback && i.onCloseCallback(),
        null != i
    );
}
function I(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _();
    (0, s.r)(() => {
        A.setState((a) =>
            void 0 === a[r]
                ? a
                : {
                      ...a,
                      [r]: a[r].map((a) =>
                          a.key === e
                              ? { ...a, render: t, onCloseRequest: null == n ? () => f(e, r) : n, onCloseCallback: i }
                              : a,
                      ),
                  },
        );
    });
}
function p(e) {
    for (let t of u) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.SY,
        i = e[n];
    return null != i && i.some((e) => e.key === t);
}
function g(e, t) {
    return m(A.getState(), e, t);
}
n.d(
    t,
    {},
    {
        CT: function (e) {
            let t = A.getState(),
                n = u
                    .map((e) => t[e] ?? [])
                    .map(
                        (t) =>
                            t.find((t) => {
                                let { key: n } = t;
                                return n === e;
                            }) ?? null,
                    );
            n.some((e) => null != e) &&
                ((0, s.r)(() => {
                    A.setState((t) => {
                        let n = { ...t };
                        return (
                            u.forEach((t) => {
                                n[t] = n[t]?.filter((t) => {
                                    let { key: n } = t;
                                    return n !== e;
                                });
                            }),
                            n
                        );
                    });
                }),
                n.forEach((e) => {
                    e?.onCloseCallback?.();
                }));
        },
        DX: p,
        K3: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _(),
                t = A.getState()[e];
            if (null != t) for (let n of t) f(n.key, e);
        },
        Kg: function () {
            let e = A.getState(),
                t = new Set();
            for (let n of u) for (let i of e[n] ?? []) t.add(i.key);
            return t;
        },
        LA: function (e) {
            let { default: t, popout: n } = A();
            return n.length > 0 ? n.at(-1)?.key === e : t.at(-1)?.key === e;
        },
        Oo: f,
        PD: function (e) {
            let t = A.getState();
            for (let n of u) for (let i of t[n] ?? []) if (!e.has(i.key)) return !0;
            return !1;
        },
        Rv: function () {
            return p(A());
        },
        Ry: function (e, t) {
            return m(A(), e, t);
        },
        TI: E,
        doesTopModalAllowNavigation: function () {
            let e = A.getState(),
                t = _();
            if (t !== o.SY && null != e[t] && e[t].length > 0) return !1;
            let n = e[o.SY];
            return null == n || !(n.length > 0) || (n.at(-1)?.allowsNavigation ?? !1);
        },
        fD: m,
        kB: g,
        lx: _,
        mM: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { contextKey: n = _(), ...i } = t,
                a = null != t.modalKey ? t.modalKey : r()(),
                s = !1,
                l = setTimeout(() => {
                    ((s = !0), h(c, { ...i, modalKey: a }, n));
                }, 300),
                o = await e();
            return (
                clearTimeout(l),
                s ? g(a, n) && I(a, o, i.onCloseRequest, i.onCloseCallback, n) : h(o, { ...i, modalKey: a }, n),
                a
            );
        },
        mc: function (e) {
            return A.subscribe(e);
        },
        qf: h,
        re: A,
        s7: function () {
            let e = A.getState();
            for (let t in e) for (let n of e[t]) f(n.key, t);
        },
        ue: function () {
            return p(A.getState());
        },
        zb: I,
    },
);
