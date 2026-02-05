"use strict";
n.r(t),
    n.d(t, {
        closeAllModals: () => v,
        closeAllModalsInContext: () => C,
        closeModal: () => g,
        closeModalInAllContexts: () => E,
        doesTopModalAllowNavigation: () => O,
        getInteractingModalContext: () => _,
        hasAnyModalOpen: () => T,
        hasAnyModalOpenSelector: () => I,
        hasModalOpen: () => N,
        hasModalOpenSelector: () => b,
        modalContextFromAppContext: () => f,
        openModal: () => m,
        openModalLazy: () => h,
        updateModal: () => A,
        useHasAnyModalOpen: () => y,
        useHasModalOpen: () => R,
        useIsModalAtTop: () => S,
        useModalsStore: () => p,
    }),
    n(134528),
    n(947204);
var r = n(296489),
    i = n.n(r),
    a = n(353640),
    s = n(121894),
    o = n(267102),
    l = n(231723),
    u = n(652215);
let c = n(450507).A,
    d = [l.SY, l.KX];
function _() {
    let e = (0, o.zd)();
    return null != e ? f(e) : l.SY;
}
function f(e) {
    switch (e) {
        case u.BRT.POPOUT:
            return l.KX;
        case u.BRT.OVERLAY:
            if (__OVERLAY__) return l.SY;
            return l.KX;
        default:
            return l.SY;
    }
}
let p = (0, a.v)((e) => ({ [l.SY]: [], [l.KX]: [] }));
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = _(), ...r } = t,
        a = null != t.modalKey ? t.modalKey : i()(),
        s = !1,
        o = setTimeout(() => {
            (s = !0), m(c, { ...r, modalKey: a }, n);
        }, 300),
        l = await e();
    return (
        clearTimeout(o),
        s ? N(a, n) && A(a, l, r.onCloseRequest, r.onCloseCallback, n) : m(l, { ...r, modalKey: a }, n),
        a
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _(),
        {
            modalKey: r,
            dismissable: a,
            instant: o,
            Layer: l,
            onCloseRequest: u,
            onCloseCallback: c,
            backdropStyle: d,
            stackingBehavior: f,
            stackNextByDefault: h,
            allowsNavigation: m,
        } = t,
        E = null != r ? r : i()();
    return (
        (0, s.r)(() => {
            p.setState((t) => {
                let r = t[n];
                if (
                    void 0 !== r &&
                    r.some((e) => {
                        let { key: t } = e;
                        return t === E;
                    })
                )
                    return t;
                let i = f;
                return (
                    null == i && (i = r.at(-1)?.stackNextByDefault === !0 ? "stack" : "replace"),
                    {
                        ...t,
                        [n]: [
                            ...r,
                            {
                                key: E,
                                dismissable: a,
                                Layer: l,
                                render: e,
                                onCloseRequest: u ?? (() => g(E, n)),
                                onCloseCallback: c,
                                instant: o,
                                backdropStyle: d,
                                stackingBehavior: i,
                                stackNextByDefault: h,
                                allowsNavigation: m,
                            },
                        ],
                    }
                );
            });
        }),
        E
    );
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
        n = p.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    return (
        (0, s.r)(() => {
            p.setState((n) =>
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
        null != r && null != r.onCloseCallback && r.onCloseCallback(),
        null != r
    );
}
function E(e) {
    let t = p.getState(),
        n = d
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
            p.setState((t) => {
                let n = { ...t };
                return (
                    d.forEach((t) => {
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
function A(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _();
    (0, s.r)(() => {
        p.setState((a) =>
            void 0 === a[i]
                ? a
                : {
                      ...a,
                      [i]: a[i].map((a) =>
                          a.key === e
                              ? { ...a, render: t, onCloseRequest: null == n ? () => g(e, i) : n, onCloseCallback: r }
                              : a,
                      ),
                  },
        );
    });
}
function I(e) {
    for (let t of d) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function T() {
    return I(p.getState());
}
function y() {
    return I(p());
}
function S(e) {
    let { default: t, popout: n } = p();
    return n.length > 0 ? n.at(-1)?.key === e : t.at(-1)?.key === e;
}
function v() {
    let e = p.getState();
    for (let t in e) for (let n of e[t]) g(n.key, t);
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _(),
        t = p.getState()[e];
    if (null != t) for (let n of t) g(n.key, e);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.SY,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function N(e, t) {
    return b(p.getState(), e, t);
}
function R(e, t) {
    return b(p(), e, t);
}
function O() {
    let e = p.getState(),
        t = _();
    if (t !== l.SY && null != e[t] && e[t].length > 0) return !1;
    let n = e[l.SY];
    return null == n || !(n.length > 0) || (n.at(-1)?.allowsNavigation ?? !1);
}
