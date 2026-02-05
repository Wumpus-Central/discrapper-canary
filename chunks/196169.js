"use strict";
n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(582754),
    l = n(397927),
    r = n(736653),
    a = n(2242),
    o = n(985018),
    d = n(200313),
    c = n(159670),
    u = n(245062),
    m = n(107844),
    g = n(359013),
    x = n(397914),
    h = n(480975),
    _ = n(507910),
    A = n(763859),
    p = n(394854);
function f(e) {
    return (0, s.Mw)(e) ? d.c8 : d.kK;
}
function j() {
    let e = (0, r.Ay)(),
        t = { backgroundColor: (0, s.Mw)(e) ? "#2e3638" : "var(--background-base-low)" };
    return (0, i.jsxs)("div", {
        className: d.fr,
        style: t,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: o.intl.string(o.t.TXPK7B),
                    }),
                    (0, i.jsx)(l.hKd, { size: 8 }),
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        className: f(e),
                        children: o.intl.string(o.t.LdjJG5),
                    }),
                ],
            }),
            (0, i.jsx)("img", { className: d.qj, src: h, alt: o.intl.string(o.t.NgjpTL) }),
        ],
    });
}
function N() {
    let e = (0, r.Ay)();
    function t(e) {
        let { length: t, horizontal: n } = e;
        return (0, i.jsx)("div", {
            className: n ? d.iI : d.a7,
            style: { ...(n ? { width: t } : { height: t }), border: "1px solid #49494933" },
        });
    }
    return (0, i.jsxs)("div", {
        className: d.ZL,
        "aria-label": o.intl.string(o.t["P2B/0W"]),
        children: [
            (0, i.jsxs)("div", {
                className: d.g0,
                children: [
                    (0, i.jsx)(t, { length: 24 }),
                    (0, i.jsx)("img", { className: d.qj, src: (0, s.Mw)(e) ? c : u, alt: "" }),
                    (0, i.jsx)(t, { horizontal: !0, length: 12 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: d.g0,
                children: [(0, i.jsx)(t, { length: 24 }), (0, i.jsx)("img", { className: d.qj, src: m, alt: "" })],
            }),
            (0, i.jsxs)("div", {
                className: d.g0,
                children: [
                    (0, i.jsx)(t, { length: 12 }),
                    (0, i.jsx)("img", { className: d.qj, src: g, alt: "" }),
                    (0, i.jsx)(t, { horizontal: !0, length: 12 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: d.g0,
                children: [(0, i.jsx)(t, { length: 12 }), (0, i.jsx)("img", { className: d.qj, src: x, alt: "" })],
            }),
        ],
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: d.w2,
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: o.intl.string(o.t["9CdmS8"]),
            }),
            (0, i.jsx)(l.hKd, { size: 32 }),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsx)(N, {}),
        ],
    });
}
function b() {
    return (0, i.jsxs)("div", {
        className: d.Og,
        children: [
            (0, i.jsx)(l.Text, {
                className: d.Zc,
                variant: "text-md/normal",
                color: "text-default",
                children: o.intl.string(o.t.qsKRUQ),
            }),
            (0, i.jsx)("img", { className: d.Zf, src: p, alt: o.intl.string(o.t.yTPprb) }),
            (0, i.jsx)("img", { className: d.tj, src: A, alt: o.intl.string(o.t["+gd9QQ"]) }),
        ],
    });
}
function T() {
    let e = (0, r.Ay)();
    return (0, i.jsxs)("div", {
        className: d.FN,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(l.Heading, {
                        className: f(e),
                        style: { fontSize: "50px", lineHeight: "52px" },
                        variant: "heading-xxl/extrabold",
                        children: [a.Xn, "%"],
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: o.intl.string(o.t.AewsXD),
                    }),
                ],
            }),
            (0, i.jsx)("img", { className: d.U2, src: _, alt: o.intl.string(o.t.fD9Wv1) }),
        ],
    });
}
function C() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: o.intl.string(o.t["1QHJaW"]),
            }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: d._$,
                children: [(0, i.jsx)(E, {}), (0, i.jsx)(b, {}), (0, i.jsx)(T, {})],
            }),
        ],
    });
}
