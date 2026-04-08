n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(964486),
    r = n(933297),
    o = n(206625);
function d(e) {
    let { button: t } = e,
        [n, a] = s.useState(!1),
        r = t.useText(),
        o = async () => {
            a(!0);
            try {
                await t.onClick();
            } finally {
                a(!1);
            }
        };
    return (0, i.jsx)(l.$nd, { variant: "secondary", text: r, onClick: o, loading: n, disabled: n });
}
function c(e) {
    let { notice: t } = e,
        { noticeType: n, useTitle: s, useText: r, button: o } = t,
        c = s?.(),
        u = r();
    (0, a.Ay)(() => {
        t.trackView?.();
    });
    let m = (0, i.jsxs)(l.BJc, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != c && (0, i.jsx)(l.DZT, { variant: "heading-md/medium", children: c }),
            (0, i.jsx)("span", { children: u }),
        ],
    });
    return (0, i.jsx)(l.wx6, {
        type: n,
        children: (0, i.jsxs)(l.BJc, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [m, null != o && (0, i.jsx)(d, { button: o })],
        }),
    });
}
function u(e) {
    let { notice: t } = e,
        { notice: n } = t;
    return (0, i.jsx)(n, {});
}
function m(e) {
    let { notice: t } = e;
    switch (t.type) {
        case r.lT.INLINE_NOTICE:
            return (0, i.jsx)(c, { notice: t });
        case r.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(u, { notice: t });
    }
}
function g(e) {
    let { notice: t } = e;
    return (0, i.jsx)("div", { className: o.l, children: (0, i.jsx)(m, { notice: t }) });
}
