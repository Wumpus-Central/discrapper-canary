n.d(t, { A: () => m });
var i = n(627968),
    l = n(732955),
    a = n(79545),
    r = n(884392),
    s = n(985018);
function o(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: s.intl.string(s.t.P84bAD) });
}
function d(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(o, { taskType: t });
}
function c(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: s.intl.string(s.t.P84bAD) });
}
function u(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: s.intl.string(s.t.P84bAD) });
}
let m = function (e) {
    let {
            quest: t,
            preClickCallback: n,
            analyticsCtxQuestContent: m,
            analyticsCtxSourceQuestContent: _,
            analyticsCtxQuestContentPosition: h,
            size: p = "md",
        } = e,
        g = (0, a.P)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: s.intl.string(s.t.P84bAD) });
    let A = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (g) {
        case a.U.UNENROLLED:
            return (0, i.jsx)(r.A, {
                quest: t,
                taskType: A.type,
                size: p,
                preClickCallback: n,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: _,
                analyticsCtxQuestContentPosition: h,
            });
        case a.U.ENROLLED:
            return (0, i.jsx)(o, { taskType: A.type });
        case a.U.INCOMPLETE:
            return (0, i.jsx)(d, { taskType: A.type });
        case a.U.COMPLETED:
            return (0, i.jsx)(c, { taskType: A.type });
        case a.U.CLAIMED:
            return (0, i.jsx)(u, { taskType: A.type });
        default:
            return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: p, text: s.intl.string(s.t.P84bAD) });
    }
};
