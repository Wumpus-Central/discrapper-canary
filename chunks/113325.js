"use strict";
n.d(t, { M: () => c, l: () => f });
var r = n(627968),
    i = n(64700),
    a = n(312138),
    s = n(315710),
    o = n(426333),
    l = n(707554),
    u = n(460890);
let c = i.createContext({ firstFocusableItemProps: void 0 });
function d(e) {
    let { children: t, ref: n, ...i } = e;
    return (0, r.jsx)(c.Provider, {
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
    return (0, r.jsx)(a.sk, {
        children: (e) =>
            (0, r.jsx)(c.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)("div", { ...n, "data-dialog": "non-modal", role: "dialog", children: t }),
            }),
    });
}
function f(e) {
    let { ref: t, returnRef: n, modal: a = !0, setDialogRef: o, trackingProps: l, ...c } = e,
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
    let { trackImpression: p } = (0, u.G9)();
    i.useEffect(() => {
        null != p &&
            null != l &&
            p(
                {
                    type: l.impressionType,
                    name: l.impression?.impressionName,
                    properties: l.impression?.impressionProperties,
                },
                { disableTrack: l.disableTrack },
            );
    }, [p, l]),
        (0, s.t)(f, { returnRef: n, disable: !a });
    let h = a ? d : _;
    return (0, r.jsx)(h, { ...c, ref: f });
}
