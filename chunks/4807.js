a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(554146),
    r = a(573613),
    o = a(821609),
    d = a(367727),
    c = a(594061),
    u = a(845886);
function m() {
    return (0, n.jsx)(r.Ip, { className: u.kL, children: (0, n.jsx)(h, {}) });
}
function h() {
    let e = l.useCallback(() => {
            (0, c._N)(s.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, d.FZ)(s.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.D, { className: u.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, n.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, n.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, n.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, n.jsx)("div", {
                className: u.PW,
                children: (0, n.jsx)(o.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
