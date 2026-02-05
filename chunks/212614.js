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
            surface: n,
            preClickCallback: m,
            analyticsCtxQuestContent: _,
            analyticsCtxSourceQuestContent: h,
            analyticsCtxQuestContentPosition: p,
            size: g = "md",
        } = e,
        A = (0, a.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: s.intl.string(s.t.P84bAD) });
    let f = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (A) {
        case a.UA.UNENROLLED:
            return (0, i.jsx)(r.A, {
                quest: t,
                taskType: f.type,
                size: g,
                preClickCallback: m,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
            });
        case a.UA.ENROLLED:
            return (0, i.jsx)(o, { taskType: f.type });
        case a.UA.INCOMPLETE:
            return (0, i.jsx)(d, { taskType: f.type });
        case a.UA.COMPLETED:
            return (0, i.jsx)(c, { taskType: f.type });
        case a.UA.CLAIMED:
            return (0, i.jsx)(u, { taskType: f.type });
        default:
            return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: g, text: s.intl.string(s.t.P84bAD) });
    }
};
