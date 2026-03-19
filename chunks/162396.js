"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(397927),
    o = n(975807),
    c = n(212031),
    u = n(975571),
    d = n(809465),
    m = n(652215),
    f = n(985018),
    h = n(535790);
function p(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(l.rXV, {
            children: [
                (0, r.jsx)(l.Drp, { id: "changelog", label: f.intl.string(f.t.LRmNAl), action: () => (0, c.j)(!0) }),
                (0, r.jsx)(l.Drp, {
                    id: "acknowledgements",
                    label: f.intl.string(f.t["0nUKy3"]),
                    action: () => (0, o.A)(m.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(l.Drp, { id: "support", label: f.intl.string(f.t["Yl/Riu"]), action: () => (0, o.A)(u.C) }),
            ],
        }),
    });
}
function g() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.A, {}),
            (0, r.jsxs)("div", {
                className: h.yJ,
                children: [
                    (0, r.jsx)(l.MzZ, {
                        href: m.X7G.PRIVACY,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: f.intl.string(f.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: h.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(l.MzZ, {
                        href: m.X7G.TERMS,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: f.intl.string(f.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: h.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(l.YNO, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: l.YNO.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(p, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(l.MzZ, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: s()(h.Mj, { [h.vu]: n.isShown }),
                                children: (0, r.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: f.intl.string(f.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
