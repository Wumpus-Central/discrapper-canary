n.r(t),
    n.d(t, {
        closeAllModals: () => L,
        closeAllModalsInContext: () => y,
        closeModal: () => f,
        closeModalInAllContexts: () => p,
        doesTopModalAllowNavigation: () => M,
        getInteractingModalContext: () => _,
        getOpenModalKeys: () => S,
        hasAnyModalOpen: () => g,
        hasAnyModalOpenSelector: () => m,
        hasModalOpen: () => v,
        hasModalOpenSelector: () => D,
        hasModalOpenedSince: () => N,
        modalContextFromAppContext: () => E,
        openModal: () => I,
        openModalLazy: () => h,
        subscribeToModalChanges: () => C,
        updateModal: () => T,
        useHasAnyModalOpen: () => O,
        useHasModalOpen: () => b,
        useIsModalAtTop: () => R,
        useModalsStore: () => A,
    }),
    n(134528),
    n(947204);
var i = n(277057),
    r = n.n(i),
    a = n(196765),
    s = n(121894),
    l = n(267102),
    o = n(231723),
    d = n(652215);
let c = n(450507).A,
    u = [o.SY, o.KX];
function _() {
    let e = (0, l.zd)();
    return null != e ? E(e) : o.SY;
}
function E(e) {
    switch (e) {
        case d.BRT.POPOUT:
            return o.KX;
        case d.BRT.OVERLAY:
            if (__OVERLAY__) return o.SY;
            return o.KX;
        default:
            return o.SY;
    }
}
let A = (0, a.v)((e) => ({ [o.SY]: [], [o.KX]: [] }));
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = _(), ...i } = t,
        a = null != t.modalKey ? t.modalKey : r()(),
        s = !1,
        l = setTimeout(() => {
            (s = !0), I(c, { ...i, modalKey: a }, n);
        }, 300),
        o = await e();
    return (
        clearTimeout(l),
        s ? v(a, n) && T(a, o, i.onCloseRequest, i.onCloseCallback, n) : I(o, { ...i, modalKey: a }, n),
        a
    );
}
function I(e) {
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
function p(e) {
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
}
function T(e, t, n, i) {
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
function m(e) {
    for (let t of u) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function g() {
    return m(A.getState());
}
function S() {
    let e = A.getState(),
        t = new Set();
    for (let n of u) for (let i of e[n] ?? []) t.add(i.key);
    return t;
}
function N(e) {
    let t = A.getState();
    for (let n of u) for (let i of t[n] ?? []) if (!e.has(i.key)) return !0;
    return !1;
}
function C(e) {
    return A.subscribe(e);
}
function O() {
    return m(A());
}
function R(e) {
    let { default: t, popout: n } = A();
    return n.length > 0 ? n.at(-1)?.key === e : t.at(-1)?.key === e;
}
function L() {
    let e = A.getState();
    for (let t in e) for (let n of e[t]) f(n.key, t);
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _(),
        t = A.getState()[e];
    if (null != t) for (let n of t) f(n.key, e);
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.SY,
        i = e[n];
    return null != i && i.some((e) => e.key === t);
}
function v(e, t) {
    return D(A.getState(), e, t);
}
function b(e, t) {
    return D(A(), e, t);
}
function M() {
    let e = A.getState(),
        t = _();
    if (t !== o.SY && null != e[t] && e[t].length > 0) return !1;
    let n = e[o.SY];
    return null == n || !(n.length > 0) || (n.at(-1)?.allowsNavigation ?? !1);
}
