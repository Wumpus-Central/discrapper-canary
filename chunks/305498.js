n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    r = n(362599),
    l = n(342494),
    s = n(732955),
    o = n(976860),
    d = n(235365),
    c = n(652215),
    u = n(49999),
    A = n(49370),
    _ = n(985018);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, lastGrantedRewardAmount: h, children: m } = e,
        g = a.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, o.pX)(`${c.BVt.NITRO_HOME}?section=${d.L}`);
        }, [n]),
        p = (0, i.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
            graphic: { type: "rive", rive: r.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: _.intl.string(A.default["78+gLr"]),
            body: _.intl.formatToPlainString(A.default.Ry1TXC, { orbsCount: h }),
            actions: [{ text: _.intl.string(_.t.RzWDqY), icon: s.tvc, onClick: g }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: m }), p] });
}
