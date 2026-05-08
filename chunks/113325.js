"use strict";
n.d(t, { M: () => c, l: () => f });
var i = n(627968),
    r = n(64700),
    s = n(312138),
    a = n(315710),
    o = n(187322),
    l = n(707554),
    u = n(460890);
let c = r.createContext({ firstFocusableItemProps: void 0 });
function d(e) {
    let { children: t, ref: n, role: r = "dialog", ...s } = e;
    return (0, i.jsx)(c.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, i.jsx)("div", {
            ...s,
            ref: n,
            "data-dialog": "modal",
            role: r,
            "aria-modal": !0,
            tabIndex: -1,
            children: (0, i.jsx)(l.F, { forceLevel: 1, children: (0, i.jsx)(o.xp, { containerRef: n, children: t }) }),
        }),
    });
}
function _(e) {
    let { children: t, role: n = "dialog", ...r } = e;
    return (0, i.jsx)(s.sk, {
        children: (e) =>
            (0, i.jsx)(c.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, i.jsx)("div", { ...r, "data-dialog": "non-modal", role: n, children: t }),
            }),
    });
}
function f(e) {
    let { ref: t, returnRef: n, modal: s = !0, setDialogRef: o, trackingProps: l, ...c } = e,
        f = r.useRef(null);
    r.useImperativeHandle(t, () => f.current),
        r.useEffect(
            () => (
                o?.(f.current),
                () => {
                    o?.(null);
                }
            ),
            [],
        );
    let { trackImpression: h } = (0, u.G9)();
    return (
        r.useEffect(() => {
            null != h &&
                null != l &&
                h(
                    {
                        type: l.impressionType,
                        name: l.impression?.impressionName,
                        properties: l.impression?.impressionProperties,
                    },
                    { disableTrack: l.disableTrack },
                );
        }, [h, l]),
        (0, a.t)(f, { returnRef: n, disable: !s }),
        (0, i.jsx)(s ? d : _, { ...c, ref: f })
    );
}
