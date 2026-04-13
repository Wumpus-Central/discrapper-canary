"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(471296),
    a = n(97619),
    o = n(178090),
    l = n(602425),
    u = n(346640),
    c = n(75772),
    d = n(985018),
    _ = n(160483),
    f = n(805819),
    p = n(354298);
function h(e) {
    let { setScreen: t, handleSelect: n, selectedClass: h } = e,
        m = (0, i.useCallback)(() => {
            null != h && t(u.Q0.CRAFTING_CLASS_SELECTION);
        }, [h, t]),
        E = (0, i.useCallback)(() => {
            t(u.Q0.INTRO);
        }, [t]);
    return (0, r.jsxs)("div", {
        className: _.kL,
        children: [
            (0, r.jsx)("img", { src: p.A, alt: d.intl.string(c.default.UnXoXM), className: _.wm }),
            (0, r.jsxs)("div", {
                className: _.Qs,
                children: [
                    (0, r.jsx)(s.A, { children: d.intl.string(c.default["7Mb/pR"]) }),
                    (0, r.jsx)(a.A, { classType: u.$p.COMBAT, onSelect: (e) => n(e), selectedClass: h }),
                    (0, r.jsxs)("div", {
                        className: _.o1,
                        children: [
                            (0, r.jsx)(l.A, { text: d.intl.string(d.t["13/7kX"]), onClick: E }),
                            (0, r.jsx)(l.A, { text: d.intl.string(d.t.PDTjLN), onClick: m, disabled: null == h }),
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
