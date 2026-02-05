n.d(t, { A: () => p });
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(397927),
    s = n(975807),
    c = n(212031),
    _ = n(975571),
    u = n(809465),
    d = n(652215),
    b = n(985018),
    m = n(535790);
function g(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(l.rXV, {
            children: [
                (0, r.jsx)(l.Drp, { id: "changelog", label: b.intl.string(b.t.LRmNAl), action: () => (0, c.j)(!0) }),
                (0, r.jsx)(l.Drp, {
                    id: "acknowledgements",
                    label: b.intl.string(b.t["0nUKy3"]),
                    action: () => (0, s.A)(d.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(l.Drp, { id: "support", label: b.intl.string(b.t["Yl/Riu"]), action: () => (0, s.A)(_.C) }),
            ],
        }),
    });
}
function p() {
    let e = a.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(u.A, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: m.yJ,
                children: [
                    (0, r.jsx)(l.MzZ, {
                        href: d.X7G.PRIVACY,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: b.intl.string(b.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: m.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(l.MzZ, {
                        href: d.X7G.TERMS,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: b.intl.string(b.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: m.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(l.YNO, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: l.YNO.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(g, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(l.MzZ, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: i()(m.Mj, { [m.vu]: n.isShown }),
                                children: (0, r.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: b.intl.string(b.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
