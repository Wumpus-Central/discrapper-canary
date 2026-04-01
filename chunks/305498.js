n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(362599),
    r = n(342494),
    s = n(732955),
    o = n(976860),
    d = n(235365),
    c = n(652215),
    u = n(49999),
    A = n(49370),
    h = n(985018);
function _(e) {
    let { targetElementRef: t, dismissPopover: n, lastGrantedRewardAmount: _, children: m } = e,
        p = l.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, o.pX)(`${c.BVt.NITRO_HOME}?section=${d.L}`);
        }, [n]),
        g = (0, i.jsx)(r.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
            graphic: { type: "rive", rive: a.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: h.intl.string(A.default["78+gLr"]),
            body: h.intl.formatToPlainString(A.default.Ry1TXC, { orbsCount: _ }),
            actions: [{ text: h.intl.string(h.t.RzWDqY), icon: s.tvc, onClick: p }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: m }), g] });
}
