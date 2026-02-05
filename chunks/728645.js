a.d(e, { A: () => g });
var n = a(627968),
    s = a(64700),
    i = a(397927),
    r = a(439309),
    l = a(985018),
    o = a(256209);
function c(t) {
    let { user: e, tagId: a, title: s, messageCount: r, reactionCount: c, activeAgo: d, tags: m, attachment: g } = t,
        { name: x, avatarSrc: u } = e;
    return (0, n.jsxs)("div", {
        className: o.bE,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: o.mG,
                        children: [
                            (0, n.jsxs)(i.Text, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: o.mG,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: u,
                                        alt: l.intl.string(l.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    x,
                                ],
                            }),
                            null != a &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: o.xE, children: "•" }),
                                        (0, n.jsx)(i.Text, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: o.qo,
                                            children: m[a],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, n.jsx)(i.Heading, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: o.W0,
                        children: s,
                    }),
                    (0, n.jsxs)("div", {
                        className: o.mG,
                        children: [
                            (0, n.jsxs)(i.Text, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: o.Hu,
                                children: [
                                    (0, n.jsx)(i.oyn, { size: "xs", color: "currentColor", className: o.Kk }),
                                    r,
                                ],
                            }),
                            c > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: o.xE, children: "•" }),
                                        (0, n.jsxs)(i.Text, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: o.Hu,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": l.intl.string(l.t.gHp0C4),
                                                    className: o.Kk,
                                                    children: "❤️",
                                                }),
                                                c,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("span", { className: o.xE, children: "•" }),
                            (0, n.jsx)(i.Text, { color: "text-default", variant: "text-xs/medium", children: d }),
                        ],
                    }),
                ],
            }),
            null != g &&
                (0, n.jsx)("img", {
                    src: g,
                    alt: l.intl.formatToPlainString(l.t.MJHFt9, { name: s }),
                    className: o.oh,
                }),
        ],
    });
}
function d(t) {
    let { author: e, content: a } = t,
        { name: s, isOP: r, avatarSrc: c } = e;
    return (0, n.jsxs)("div", {
        className: o.iU,
        children: [
            (0, n.jsx)("img", { src: c, alt: l.intl.string(l.t.lqaIxI), width: 40, height: 40 }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: o.mG,
                        children: [
                            (0, n.jsx)(i.Text, { color: "text-strong", variant: "text-sm/semibold", children: s }),
                            r && (0, n.jsx)("span", { className: o.aj, children: l.intl.string(l.t.fyE8sH) }),
                        ],
                    }),
                    (0, n.jsx)(i.Text, { color: "text-default", variant: "text-sm/normal", children: a }),
                ],
            }),
        ],
    });
}
function m(t) {
    let { title: e, messages: a, maxHeight: s } = t;
    return (0, n.jsx)("div", {
        className: o.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: o.VH,
            children: [
                (0, n.jsx)(i.oyn, { size: "md", color: "currentColor", className: o.DD }),
                (0, n.jsx)(i.Heading, {
                    color: "text-strong",
                    variant: "heading-lg/semibold",
                    className: o.wx,
                    children: e,
                }),
                (0, n.jsx)("div", {
                    className: o.zC,
                    children: a.map((t, e) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d, { ...t }, e),
                                0 === e &&
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)("hr", { className: o.lL }),
                                            (0, n.jsxs)("div", {
                                                className: o.KY,
                                                children: [
                                                    (0, n.jsxs)(i.Text, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: o.QJ,
                                                        children: [
                                                            (0, n.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": l.intl.string(l.t.gHp0C4),
                                                                className: o.Kk,
                                                                children: "❤️",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, n.jsxs)(i.Text, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: o.CQ,
                                                        children: [
                                                            (0, n.jsx)(i.XFE, { size: "xs", color: "currentColor" }),
                                                            l.intl.string(l.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)("hr", { className: o.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: o.RW,
                    children: (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: l.intl.string(l.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function g(t) {
    let { id: e } = t,
        [a, l] = s.useState(0),
        d = s.useRef(null),
        { tags: g, posts: x, postPreview: u, ariaLabel: h } = (0, r.A)(e);
    return (
        s.useEffect(() => {
            l(0);
        }, [e]),
        s.useEffect(() => {
            0 === a && d?.current?.clientHeight != null && l(d.current.clientHeight - 40);
        }, [a]),
        (0, n.jsxs)("div", {
            className: o.kL,
            role: "image",
            "aria-label": h,
            children: [
                (0, n.jsxs)("div", {
                    ref: d,
                    className: o.T,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)("div", {
                            className: o._A,
                            children: g.map((t, e) =>
                                (0, n.jsx)(
                                    i.Text,
                                    { color: "text-strong", variant: "text-xs/medium", className: o.Tc, children: t },
                                    e,
                                ),
                            ),
                        }),
                        (0, n.jsx)("div", {
                            className: o.Yl,
                            children: x.map((t, e) => (0, n.jsx)(c, { ...t, tags: g }, e)),
                        }),
                    ],
                }),
                (0, n.jsx)(m, { ...u, maxHeight: a }),
            ],
        })
    );
}
