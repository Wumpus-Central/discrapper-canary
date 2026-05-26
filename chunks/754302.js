"use strict";
n.d(t, { B: () => d, q: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(947641),
    o = n(534514),
    l = n(834730),
    u = n(430345);
function c(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: u.MD, children: (0, i.jsx)("div", { className: u.Qs, children: t }) });
}
function d(e) {
    let {
        icon: t,
        title: n,
        description: r,
        iconClassName: c,
        color: d,
        listType: _ = "icon",
        completed: f = !1,
        index: h,
    } = e;
    return (0, i.jsxs)("div", {
        className: u.Hn,
        children: [
            (() => {
                if ("numbered" === _ && null != h)
                    if (f)
                        return (0, i.jsx)("div", {
                            className: u.ai,
                            children: (0, i.jsx)(a.r, { color: "green", className: s()(u.Kk, c) }),
                        });
                    else
                        return (0, i.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: u.ai,
                            children: h + 1,
                        });
                if (null != t)
                    return (0, i.jsx)("div", {
                        className: u.zc,
                        children: (0, i.jsx)(t, { color: d ?? "currentColor", className: s()(u.Kk, c) }),
                    });
            })(),
            (0, i.jsxs)("div", {
                className: u.FS,
                children: [
                    (0, i.jsx)(l.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: s()({ [u.VA]: f }),
                        children: n,
                    }),
                    null != r &&
                        (0, i.jsx)(l.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: s()({ [u.VA]: f }),
                            children: r,
                        }),
                ],
            }),
        ],
    });
}
