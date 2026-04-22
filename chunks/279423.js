t.d(n, { A: () => f });
var l = t(627968),
    r = t(64700),
    i = t(821609),
    s = t(331322),
    a = t(534514),
    o = t(683071),
    c = t(964486),
    d = t(933297),
    u = t(562248);
function x(e) {
    let { button: n } = e,
        [t, s] = r.useState(!1),
        a = n.useText(),
        o = async () => {
            s(!0);
            try {
                await n.onClick();
            } finally {
                s(!1);
            }
        };
    return (0, l.jsx)(i.$, { variant: "secondary", text: a, onClick: o, loading: t, disabled: t });
}
function j(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: r, useText: i, button: d } = n,
        u = r?.(),
        j = i();
    (0, c.Ay)(() => {
        n.trackView?.();
    });
    let h = (0, l.jsxs)(s.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != u && (0, l.jsx)(a.D, { variant: "heading-md/medium", children: u }),
            (0, l.jsx)("span", { children: j }),
        ],
    });
    return (0, l.jsx)(o.w, {
        type: t,
        children: (0, l.jsxs)(s.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [h, null != d && (0, l.jsx)(x, { button: d })],
        }),
    });
}
function h(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, l.jsx)(t, {});
}
function m(e) {
    let { notice: n } = e;
    switch (n.type) {
        case d.lT.INLINE_NOTICE:
            return (0, l.jsx)(j, { notice: n });
        case d.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(h, { notice: n });
    }
}
function f(e) {
    let { notice: n } = e;
    return (0, l.jsx)("div", { className: u.l, children: (0, l.jsx)(m, { notice: n }) });
}
