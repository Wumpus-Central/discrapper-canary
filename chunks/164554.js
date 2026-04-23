a.d(l, { A: () => p });
var t = a(627968),
    s = a(64700),
    i = a(362599),
    n = a(265486),
    c = a(403581),
    h = a(976860),
    r = a(235365),
    o = a(652215),
    d = a(49999),
    v = a(490285),
    g = a(985018);
function p(e) {
    let { targetElementRef: l, dismissPopover: a, children: p } = e,
        m = s.useCallback(() => {
            a(d.i.TAKE_ACTION), (0, h.pX)(`${o.BVt.NITRO_HOME}?section=${r.L}`);
        }, [a]),
        f = (0, t.jsx)(n.A, {
            targetElementRef: l,
            onRequestClose: () => a(d.i.USER_DISMISS),
            graphic: { type: "rive", rive: i.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: g.intl.string(v.default.UPOlxO),
            body: g.intl.string(v.default.e6r8OX),
            actions: [{ text: g.intl.string(g.t.RzWDqY), icon: c.t, onClick: m }],
            gradientColor: "nitro-pink",
        });
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { children: p }), f] });
}
