"use strict";
n.d(t, { MV: () => E, lG: () => I, zR: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(765178),
    s = n(312138),
    l = n(315710),
    o = n(259678),
    d = n(707554),
    c = n(140735),
    u = n(460890);
function _() {
    let e = r.useId(),
        t = r.useRef(null);
    return (
        r.useEffect(
            () => (
                a.O.moveTo?.(e, t.current),
                () => {
                    a.O.remove?.(e);
                }
            ),
            [e],
        ),
        (0, i.jsx)(c.A, { ref: t, id: e })
    );
}
let E = r.createContext({ firstFocusableItemProps: void 0 });
function A(e) {
    let { children: t, ref: n, role: r = "dialog", ...a } = e;
    return (0, i.jsx)(E.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, i.jsxs)("div", {
            ...a,
            ref: n,
            "data-dialog": "modal",
            role: r,
            "aria-modal": !0,
            tabIndex: -1,
            children: [
                (0, i.jsx)(_, {}),
                (0, i.jsx)(d.F, { forceLevel: 1, children: (0, i.jsx)(o.xp, { containerRef: n, children: t }) }),
            ],
        }),
    });
}
function h(e) {
    let { children: t, role: n = "dialog", ...r } = e;
    return (0, i.jsx)(s.sk, {
        children: (e) =>
            (0, i.jsx)(E.Provider, {
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
function I(e) {
    let {
            ref: t,
            returnRef: n,
            modal: a = !0,
            setDialogRef: s,
            trackingProps: o,
            trackingComponentName: d = "Dialog",
            ...c
        } = e,
        _ = r.useRef(null);
    r.useImperativeHandle(t, () => _.current),
        r.useEffect(
            () => (
                s?.(_.current),
                () => {
                    s?.(null);
                }
            ),
            [],
        );
    let { trackImpression: E } = (0, u.G9)();
    return (
        r.useEffect(() => {
            null != E && null != o && E({ componentName: d, payload: o });
        }, [E, d, o]),
        (0, l.tj)(_, { returnRef: n, disable: !a }),
        (0, i.jsx)(a ? A : h, { ...c, ref: _ })
    );
}
