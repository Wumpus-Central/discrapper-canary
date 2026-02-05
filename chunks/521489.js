"use strict";
n.d(t, { N: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(110259),
    u = n(158954),
    c = n(397927),
    d = n(97469),
    _ = n(538029),
    f = n(22789);
function p(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            returnRef: a,
            "aria-label": p,
            onClose: h,
            trackingProps: m,
            children: g,
        } = e,
        E = i.useId(),
        A = i.useMemo(() => ({ id: E, headingId: `heading-${E}`, onClose: h, dismissable: !0 }), [E, h]),
        I = (0, d.NC)(),
        { theme: T } = (0, c.wRf)(),
        y = (0, u.kSI)(t, n);
    return (0, r.jsx)(u.Vs9.Provider, {
        value: A,
        children: (0, r.jsx)(c.lGe, {
            id: E,
            role: "dialog",
            "aria-label": p,
            "aria-labelledby": null != p ? void 0 : A.headingId,
            returnRef: a,
            ...m,
            impressionType: m?.impressionType ?? l.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: _.nw,
                    children: (0, r.jsx)(c.NPJ, {
                        theme: I,
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: s()(f.container, _.yl, e),
                                style: y,
                                children: (0, r.jsx)("div", {
                                    className: _.jE,
                                    children: (0, r.jsx)(c.NPJ, {
                                        theme: T,
                                        children: (e) => (0, r.jsx)("div", { className: s()(e, _.h_), children: g }),
                                    }),
                                }),
                            }),
                    }),
                }),
            }),
        }),
    });
}
