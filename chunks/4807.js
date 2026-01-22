n.d(t, { A: () => u });
var a = n(627968),
    l = n(64700),
    i = n(158954),
    r = n(554146),
    s = n(397927),
    o = n(367727),
    c = n(594061),
    d = n(795695);
function u() {
    return (0, a.jsx)(s.HOs, {
        className: d.kL,
        children: (0, a.jsx)(m, {}),
    });
}
function m() {
    let e = l.useCallback(() => {
            (0, c._N)(r.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, o.FZ)(r.M.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.DZT, {
                className: d.wx,
                variant: "heading-lg/semibold",
                children: "Tenure Badges",
            }),
            (0, a.jsxs)("p", {
                children: [
                    "Level Up DC:\xA0",
                    null != n &&
                        (0, a.jsxs)("b", {
                            children: ["Dismissed (", n.toLocaleDateString(), ")"],
                        }),
                    null == n && (0, a.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, a.jsx)("div", {
                className: d.PW,
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    text: "Reset Level Up DC",
                    onClick: e,
                }),
            }),
        ],
    });
}
