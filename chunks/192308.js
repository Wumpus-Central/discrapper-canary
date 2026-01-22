n.r(t),
    n.d(t, {
        closeAllModals: () => w,
        closeAllModalsInContext: () => P,
        closeModal: () => v,
        closeModalInAllContexts: () => S,
        doesTopModalAllowNavigation: () => j,
        getInteractingModalContext: () => E,
        hasAnyModalOpen: () => C,
        hasAnyModalOpenSelector: () => T,
        hasModalOpen: () => x,
        hasModalOpenSelector: () => D,
        modalContextFromAppContext: () => b,
        openModal: () => A,
        openModalLazy: () => O,
        updateModal: () => I,
        useHasAnyModalOpen: () => N,
        useHasModalOpen: () => L,
        useIsModalAtTop: () => R,
        useModalsStore: () => y,
    }),
    n(65821),
    n(134528),
    n(947204),
    n(896048);
var r = n(296489),
    i = n.n(r),
    a = n(353640),
    s = n(121894),
    o = n(267102),
    l = n(231723),
    c = n(652215);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = n(450507).A,
    g = [l.SY, l.KX];
function E() {
    let e = (0, o.zd)();
    return null != e ? b(e) : l.SY;
}
function b(e) {
    switch (e) {
        case c.BRT.POPOUT:
            return l.KX;
        case c.BRT.OVERLAY:
            if (__OVERLAY__) return l.SY;
            return l.KX;
        default:
            return l.SY;
    }
}
let y = (0, a.v)((e) => ({
    [l.SY]: [],
    [l.KX]: [],
}));
async function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = E() } = t,
        r = _(t, ["contextKey"]),
        a = null != t.modalKey ? t.modalKey : i()(),
        s = !1,
        o = setTimeout(() => {
            (s = !0), A(m, p(d({}, r), { modalKey: a }), n);
        }, 300),
        l = await e();
    return (
        clearTimeout(o),
        s ? x(a, n) && I(a, l, r.onCloseRequest, r.onCloseCallback, n) : A(l, p(d({}, r), { modalKey: a }), n),
        a
    );
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E(),
        {
            modalKey: r,
            dismissable: a,
            instant: o,
            Layer: l,
            onCloseRequest: c,
            onCloseCallback: u,
            backdropStyle: f,
            stackingBehavior: _,
            stackNextByDefault: h,
            allowsNavigation: m,
        } = t,
        g = null != r ? r : i()();
    return (
        (0, s.r)(() => {
            y.setState((t) => {
                let r = t[n];
                if (
                    void 0 !== r &&
                    r.some((e) => {
                        let { key: t } = e;
                        return t === g;
                    })
                )
                    return t;
                let i = _;
                if (null == i) {
                    var s;
                    i = (null == (s = r.at(-1)) ? void 0 : s.stackNextByDefault) === !0 ? "stack" : "replace";
                }
                return p(d({}, t), {
                    [n]: [
                        ...r,
                        {
                            key: g,
                            dismissable: a,
                            Layer: l,
                            render: e,
                            onCloseRequest: null != c ? c : () => v(g, n),
                            onCloseCallback: u,
                            instant: o,
                            backdropStyle: f,
                            stackingBehavior: i,
                            stackNextByDefault: h,
                            allowsNavigation: m,
                        },
                    ],
                });
            });
        }),
        g
    );
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E(),
        n = y.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    return (
        (0, s.r)(() => {
            y.setState((n) =>
                void 0 === n[t]
                    ? n
                    : p(d({}, n), {
                          [t]: n[t].filter((t) => {
                              let { key: n } = t;
                              return n !== e;
                          }),
                      }),
            );
        }),
        null != r && null != r.onCloseCallback && r.onCloseCallback(),
        null != r
    );
}
function S(e) {
    let t = y.getState(),
        n = g
            .map((e) => {
                var n;
                return null != (n = t[e]) ? n : [];
            })
            .map((t) => {
                var n;
                return null !=
                    (n = t.find((t) => {
                        let { key: n } = t;
                        return n === e;
                    }))
                    ? n
                    : null;
            });
    n.some((e) => null != e) &&
        ((0, s.r)(() => {
            y.setState((t) => {
                let n = d({}, t);
                return (
                    g.forEach((t) => {
                        var r;
                        n[t] =
                            null == (r = n[t])
                                ? void 0
                                : r.filter((t) => {
                                      let { key: n } = t;
                                      return n !== e;
                                  });
                    }),
                    n
                );
            });
        }),
        n.forEach((e) => {
            var t;
            null == e || null == (t = e.onCloseCallback) || t.call(e);
        }));
}
function I(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E();
    (0, s.r)(() => {
        y.setState((a) =>
            void 0 === a[i]
                ? a
                : p(d({}, a), {
                      [i]: a[i].map((a) =>
                          a.key === e
                              ? p(d({}, a), {
                                    render: t,
                                    onCloseRequest: null == n ? () => v(e, i) : n,
                                    onCloseCallback: r,
                                })
                              : a,
                      ),
                  }),
        );
    });
}
function T(e) {
    for (let t of g) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function C() {
    return T(y.getState());
}
function N() {
    return T(y());
}
function R(e) {
    var t, n;
    let { default: r, popout: i } = y();
    return i.length > 0
        ? (null == (t = i.at(-1)) ? void 0 : t.key) === e
        : (null == (n = r.at(-1)) ? void 0 : n.key) === e;
}
function w() {
    let e = y.getState();
    for (let t in e) for (let n of e[t]) v(n.key, t);
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E(),
        t = y.getState()[e];
    if (null != t) for (let n of t) v(n.key, e);
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.SY,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function x(e, t) {
    return D(y.getState(), e, t);
}
function L(e, t) {
    return D(y(), e, t);
}
function j() {
    let e = y.getState(),
        t = E();
    if (t !== l.SY && null != e[t] && e[t].length > 0) return !1;
    let n = e[l.SY];
    if (null != n && n.length > 0) {
        var r, i;
        return null != (r = null == (i = n.at(-1)) ? void 0 : i.allowsNavigation) && r;
    }
    return !0;
}
