n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(777666),
    a = n(31009);
function r(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, i.jsx)("div", {
        className: a.R,
        "aria-hidden": !0,
        children: (0, i.jsx)(s.hV, {
            count: t,
            color: n ? l.A.colors.BACKGROUND_MOD_STRONG.css : l.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
