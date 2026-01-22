n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(397927),
    a = n(461140);

function s(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: a.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(i.hVq, {
            count: t,
            color: n ? l.A.colors.BACKGROUND_MOD_STRONG.css : l.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
