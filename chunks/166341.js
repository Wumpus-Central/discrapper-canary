"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(471296),
    a = n(97619),
    o = n(178090),
    l = n(602425),
    u = n(346640),
    c = n(429311),
    d = n(985018),
    _ = n(160483),
    f = n(805819),
    p = n(354298);
function h(e) {
    let { setScreen: t, handleSelect: n, selectedClass: h, isDisabled: m } = e,
        E = (0, i.useCallback)(() => {
            null != h && t(u.Q0.MAIN);
        }, [h, t]),
        g = (0, i.useCallback)(() => {
            t(u.Q0.COMBAT_CLASS_SELECTION);
        }, [t]);
    return (0, r.jsxs)("div", {
        className: _.kL,
        children: [
            (0, r.jsx)("img", { src: p.A, alt: d.intl.string(c.default.UnXoXM), className: _.wm }),
            (0, r.jsxs)("div", {
                className: _.Qs,
                children: [
                    (0, r.jsx)(s.A, { children: d.intl.string(c.default.WLUtyb) }),
                    (0, r.jsx)(a.A, {
                        classType: u.$p.CRAFTING,
                        onSelect: (e) => n(e),
                        selectedClass: h,
                        isDisabled: m,
                    }),
                    (0, r.jsxs)("div", {
                        className: _.o1,
                        children: [
                            (0, r.jsx)(l.A, { text: d.intl.string(d.t["13/7kX"]), onClick: g }),
                            (0, r.jsx)(l.A, { text: d.intl.string(d.t.I0v0Qv), onClick: E, disabled: null == h }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: _.g5,
                children: [
                    (0, r.jsx)("img", { src: f.A, alt: "", className: _.Yv }),
                    (0, r.jsx)(o.A, { variant: "heading-xl/normal", children: d.intl.string(c.default.tcwn03) }),
                    (0, r.jsx)("img", { src: f.A, alt: "", className: _.Yv }),
                ],
            }),
        ],
    });
}
