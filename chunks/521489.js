"use strict";
n.d(t, { N: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(110259),
    u = n(158954),
    c = n(397927),
    d = n(97469),
    _ = n(538029),
    f = n(22789);
function h(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            returnRef: a,
            "aria-label": h,
            onClose: p,
            trackingProps: g,
            children: E,
        } = e,
        A = i.useId(),
        I = i.useMemo(() => ({ id: A, headingId: `heading-${A}`, onClose: p, dismissable: !0 }), [A, p]),
        T = (0, d.NC)(),
        { theme: y } = (0, c.wRf)(),
        S = (0, u.kSI)(t, n);
    return (0, r.jsx)(u.Vs9.Provider, {
        value: I,
        children: (0, r.jsx)(c.lGe, {
            id: A,
            role: "dialog",
            "aria-label": h,
            "aria-labelledby": null != h ? void 0 : I.headingId,
            returnRef: a,
            ...g,
            impressionType: g?.impressionType ?? l.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: _.nw,
                    children: (0, r.jsx)(c.NPJ, {
                        theme: T,
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: s()(f.container, _.yl, e),
                                style: S,
                                children: (0, r.jsx)("div", {
                                    className: _.jE,
                                    children: (0, r.jsx)(c.NPJ, {
                                        theme: y,
                                        children: (e) => (0, r.jsx)("div", { className: s()(e, _.h_), children: E }),
                                    }),
                                }),
                            }),
                    }),
                }),
            }),
        }),
    });
}
