"use strict";
n.d(t, { M: () => d, l: () => f });
var r = n(627968),
    i = n(64700),
    s = n(312138),
    a = n(315710),
    o = n(187322),
    l = n(707554),
    u = n(460890);
let d = i.createContext({ firstFocusableItemProps: void 0 });
function c(e) {
    let { children: t, ref: n, ...i } = e;
    return (0, r.jsx)(d.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, r.jsx)("div", {
            ...i,
            ref: n,
            "data-dialog": "modal",
            role: "dialog",
            "aria-modal": !0,
            children: (0, r.jsx)(l.F, { forceLevel: 1, children: (0, r.jsx)(o.xp, { containerRef: n, children: t }) }),
        }),
    });
}
function _(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(s.sk, {
        children: (e) =>
            (0, r.jsx)(d.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)("div", { ...n, "data-dialog": "non-modal", role: "dialog", children: t }),
            }),
    });
}
function f(e) {
    let { ref: t, returnRef: n, modal: s = !0, setDialogRef: o, trackingProps: l, ...d } = e,
        f = i.useRef(null);
    i.useImperativeHandle(t, () => f.current),
        i.useEffect(
            () => (
                o?.(f.current),
                () => {
                    o?.(null);
                }
            ),
            [],
        );
    let { trackImpression: E } = (0, u.G9)();
    return (
        i.useEffect(() => {
            null != E &&
                null != l &&
                E(
                    {
                        type: l.impressionType,
                        name: l.impression?.impressionName,
                        properties: l.impression?.impressionProperties,
                    },
                    { disableTrack: l.disableTrack },
                );
        }, [E, l]),
        (0, a.t)(f, { returnRef: n, disable: !s }),
        (0, r.jsx)(s ? c : _, { ...d, ref: f })
    );
}
