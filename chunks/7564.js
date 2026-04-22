"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(861672),
    o = n(477782),
    c = n(349288),
    u = n(834730),
    d = n(265872),
    _ = n(975807),
    h = n(212031),
    p = n(975571),
    f = n(228093),
    m = n(652215),
    g = n(985018),
    E = n(180131);
function v(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(o.rX, {
            children: [
                (0, r.jsx)(o.Dr, { id: "changelog", label: g.intl.string(g.t.LRmNAl), action: () => (0, h.j)(!0) }),
                (0, r.jsx)(o.Dr, {
                    id: "acknowledgements",
                    label: g.intl.string(g.t["0nUKy3"]),
                    action: () => (0, _.A)(m.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(o.Dr, { id: "support", label: g.intl.string(g.t["Yl/Riu"]), action: () => (0, _.A)(p.C) }),
            ],
        }),
    });
}
function y() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.A, {}),
            (0, r.jsxs)("div", {
                className: E.yJ,
                children: [
                    (0, r.jsx)(c.Anchor, {
                        href: m.X7G.PRIVACY,
                        children: (0, r.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: g.intl.string(g.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: E.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(c.Anchor, {
                        href: m.X7G.TERMS,
                        children: (0, r.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: g.intl.string(g.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: E.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(d.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: d.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(v, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(c.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: l()(E.Mj, { [E.vu]: n.isShown }),
                                children: (0, r.jsx)(u.E, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: g.intl.string(g.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
