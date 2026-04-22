"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(289873),
    r = n(268218),
    a = n(750506),
    o = n(60809),
    c = n(985018),
    u = n(131552);
let d = { width: 500, height: o.$V },
    h = (0, r.Fe)({
        createPromise: () =>
            Promise.all([n.e("93103"), n.e("97278"), n.e("35313"), n.e("71561"), n.e("35621")]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: u.R4, style: d, children: (0, i.jsx)(s.y, {}) }),
    }),
    m = { height: o.$V },
    p = l.memo(function (e) {
        let { positionTargetRef: t, align: n, ...l } = e;
        return (0, i.jsx)("span", {
            style: o.sK,
            children: (0, i.jsx)(a.nE, {
                className: u.T8,
                targetRef: t,
                position: "top",
                align: n ?? "right",
                spacing: 24,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, i.jsx)("section", {
                        className: u.V6,
                        role: "dialog",
                        style: m,
                        "aria-label": c.intl.string(c.t["3CNGLK"]),
                        children: t && (0, i.jsx)(h, { ...l }),
                    });
                },
            }),
        });
    });
