n.d(a, { A: () => h });
var e = n(627968),
    s = n(64700),
    i = n(834730),
    r = n(534514),
    l = n(534890),
    o = n(782603),
    c = n(439309),
    d = n(985018),
    m = n(414438);
function g(t) {
    let { user: a, tagId: n, title: s, messageCount: o, reactionCount: c, activeAgo: g, tags: x, attachment: u } = t,
        { name: h, avatarSrc: v } = a;
    return (0, e.jsxs)("div", {
        className: m.bE,
        children: [
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: m.mG,
                        children: [
                            (0, e.jsxs)(i.E, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: m.mG,
                                children: [
                                    (0, e.jsx)("img", {
                                        src: v,
                                        alt: d.intl.string(d.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    h,
                                ],
                            }),
                            null != n &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: m.xE, children: "•" }),
                                        (0, e.jsx)(i.E, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: m.qo,
                                            children: x[n],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, e.jsx)(r.D, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: m.W0,
                        children: s,
                    }),
                    (0, e.jsxs)("div", {
                        className: m.mG,
                        children: [
                            (0, e.jsxs)(i.E, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: m.Hu,
                                children: [(0, e.jsx)(l.o, { size: "xs", color: "currentColor", className: m.Kk }), o],
                            }),
                            c > 0 &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: m.xE, children: "•" }),
                                        (0, e.jsxs)(i.E, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: m.Hu,
                                            children: [
                                                (0, e.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": d.intl.string(d.t.gHp0C4),
                                                    className: m.Kk,
                                                    children: "❤️",
                                                }),
                                                c,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, e.jsx)("span", { className: m.xE, children: "•" }),
                            (0, e.jsx)(i.E, { color: "text-default", variant: "text-xs/medium", children: g }),
                        ],
                    }),
                ],
            }),
            null != u &&
                (0, e.jsx)("img", {
                    src: u,
                    alt: d.intl.formatToPlainString(d.t.MJHFt9, { name: s }),
                    className: m.oh,
                }),
        ],
    });
}
function x(t) {
    let { author: a, content: n } = t,
        { name: s, isOP: r, avatarSrc: l } = a;
    return (0, e.jsxs)("div", {
        className: m.iU,
        children: [
            (0, e.jsx)("img", { src: l, alt: d.intl.string(d.t.lqaIxI), width: 40, height: 40 }),
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: m.mG,
                        children: [
                            (0, e.jsx)(i.E, { color: "text-strong", variant: "text-sm/semibold", children: s }),
                            r && (0, e.jsx)("span", { className: m.aj, children: d.intl.string(d.t.fyE8sH) }),
                        ],
                    }),
                    (0, e.jsx)(i.E, { color: "text-default", variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function u(t) {
    let { title: a, messages: n, maxHeight: s } = t;
    return (0, e.jsx)("div", {
        className: m.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, e.jsxs)("div", {
            className: m.VH,
            children: [
                (0, e.jsx)(l.o, { size: "md", color: "currentColor", className: m.DD }),
                (0, e.jsx)(r.D, { color: "text-strong", variant: "heading-lg/semibold", className: m.wx, children: a }),
                (0, e.jsx)("div", {
                    className: m.zC,
                    children: n.map((t, a) =>
                        (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(x, { ...t }, a),
                                0 === a &&
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)("hr", { className: m.lL }),
                                            (0, e.jsxs)("div", {
                                                className: m.KY,
                                                children: [
                                                    (0, e.jsxs)(i.E, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: m.QJ,
                                                        children: [
                                                            (0, e.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": d.intl.string(d.t.gHp0C4),
                                                                className: m.Kk,
                                                                children: "❤️",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, e.jsxs)(i.E, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: m.CQ,
                                                        children: [
                                                            (0, e.jsx)(o.X, { size: "xs", color: "currentColor" }),
                                                            d.intl.string(d.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, e.jsx)("hr", { className: m.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, e.jsx)("div", {
                    className: m.RW,
                    children: (0, e.jsx)(i.E, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function h(t) {
    let { id: a } = t,
        [n, r] = s.useState(0),
        l = s.useRef(null),
        { tags: o, posts: d, postPreview: x, ariaLabel: h } = (0, c.A)(a);
    return (
        s.useEffect(() => {
            r(0);
        }, [a]),
        s.useEffect(() => {
            0 === n && l?.current?.clientHeight != null && r(l.current.clientHeight - 40);
        }, [n]),
        (0, e.jsxs)("div", {
            className: m.kL,
            role: "image",
            "aria-label": h,
            children: [
                (0, e.jsxs)("div", {
                    ref: l,
                    className: m.T,
                    "aria-hidden": !0,
                    children: [
                        (0, e.jsx)("div", {
                            className: m._A,
                            children: o.map((t, a) =>
                                (0, e.jsx)(
                                    i.E,
                                    { color: "text-strong", variant: "text-xs/medium", className: m.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, e.jsx)("div", {
                            className: m.Yl,
                            children: d.map((t, a) => (0, e.jsx)(g, { ...t, tags: o }, a)),
                        }),
                    ],
                }),
                (0, e.jsx)(u, { ...x, maxHeight: n }),
            ],
        })
    );
}
