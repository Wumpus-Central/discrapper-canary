"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(397927),
    a = n(461140);
function r(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, i.jsx)("div", {
        className: a.R,
        "aria-hidden": !0,
        children: (0, i.jsx)(l.hVq, {
            count: t,
            color: n ? s.A.colors.BACKGROUND_MOD_STRONG.css : s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
