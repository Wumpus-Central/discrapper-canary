"use strict";
n.d(t, { MV: () => h, lG: () => E, zR: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(765178),
    a = n(312138),
    o = n(315710),
    l = n(187322),
    u = n(707554),
    c = n(140735),
    d = n(460890);
function _() {
    let e = r.useId(),
        t = r.useRef(null);
    return (
        r.useEffect(
            () => (
                s.O.moveTo?.(e, t.current),
                () => {
                    s.O.remove?.(e);
                }
            ),
            [e],
        ),
        (0, i.jsx)(c.A, { ref: t, id: e })
    );
}
let h = r.createContext({ firstFocusableItemProps: void 0 });
function f(e) {
    let { children: t, ref: n, role: r = "dialog", ...s } = e;
    return (0, i.jsx)(h.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, i.jsxs)("div", {
            ...s,
            ref: n,
            "data-dialog": "modal",
            role: r,
            "aria-modal": !0,
            tabIndex: -1,
            children: [
                (0, i.jsx)(_, {}),
                (0, i.jsx)(u.F, { forceLevel: 1, children: (0, i.jsx)(l.xp, { containerRef: n, children: t }) }),
            ],
        }),
    });
}
function p(e) {
    let { children: t, role: n = "dialog", ...r } = e;
    return (0, i.jsx)(a.sk, {
        children: (e) =>
            (0, i.jsx)(h.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, i.jsxs)("div", {
                    ...r,
                    "data-dialog": "non-modal",
                    role: n,
                    children: [(0, i.jsx)(_, {}), t],
                }),
            }),
    });
}
function E(e) {
    let {
            ref: t,
            returnRef: n,
            modal: s = !0,
            setDialogRef: a,
            trackingProps: l,
            trackingComponentName: u = "Dialog",
            ...c
        } = e,
        _ = r.useRef(null);
    r.useImperativeHandle(t, () => _.current),
        r.useEffect(
            () => (
                a?.(_.current),
                () => {
                    a?.(null);
                }
            ),
            [],
        );
    let { trackImpression: h } = (0, d.G9)();
    return (
        r.useEffect(() => {
            null != h && null != l && h({ componentName: u, payload: l });
        }, [h, u, l]),
        (0, o.t)(_, { returnRef: n, disable: !s }),
        (0, i.jsx)(s ? f : p, { ...c, ref: _ })
    );
}
