n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(362599),
    l = n(342494),
    s = n(732955),
    o = n(976860),
    d = n(652215),
    c = n(49999),
    u = n(49370),
    A = n(985018);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        _ = r.useCallback(() => {
            n(c.i.TAKE_ACTION), (0, o.pX)(`${d.BVt.NITRO_HOME}?section=orbs`);
        }, [n]),
        m = (0, i.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(c.i.USER_DISMISS),
            graphic: { type: "rive", rive: a.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: A.intl.string(u.default.UPOlxO),
            body: A.intl.string(u.default.e6r8OX),
            actions: [{ text: A.intl.string(A.t.RzWDqY), icon: s.tvc, onClick: _ }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: h }), m] });
}
