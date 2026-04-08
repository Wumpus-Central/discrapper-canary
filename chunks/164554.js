n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(362599),
    l = n(342494),
    s = n(732955),
    o = n(976860),
    d = n(235365),
    c = n(652215),
    u = n(49999),
    A = n(723468),
    h = n(985018);
function _(e) {
    let { targetElementRef: t, dismissPopover: n, children: _ } = e,
        m = r.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, o.pX)(`${c.BVt.NITRO_HOME}?section=${d.L}`);
        }, [n]),
        p = (0, i.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
            graphic: { type: "rive", rive: a.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: h.intl.string(A.default.UPOlxO),
            body: h.intl.string(A.default.e6r8OX),
            actions: [{ text: h.intl.string(h.t.RzWDqY), icon: s.tvc, onClick: m }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: _ }), p] });
}
