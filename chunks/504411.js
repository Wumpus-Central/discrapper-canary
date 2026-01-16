n.d(t, { Z: () => f });
var r = n(54381),
    i = n(159691),
    a = n(854989),
    o = n(898978),
    s = n(388032);
function l(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.zxk, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD),
    });
}
function c(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(l, { taskType: t });
}
function u(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.zxk, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD),
    });
}
function d(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.zxk, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: s.intl.string(s.t.P84bAD),
    });
}
let f = function (e) {
    let {
            quest: t,
            preClickCallback: n,
            analyticsCtxQuestContent: f,
            analyticsCtxSourceQuestContent: p,
            analyticsCtxQuestContentPosition: _,
            size: h = "md",
        } = e,
        m = (0, a.B)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            fullWidth: !0,
            size: "sm",
            text: s.intl.string(s.t.P84bAD),
        });
    let g = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (m) {
        case a.w.UNENROLLED:
            return (0, r.jsx)(o.Z, {
                quest: t,
                taskType: g.type,
                size: h,
                preClickCallback: n,
                analyticsCtxQuestContent: f,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: _,
            });
        case a.w.ENROLLED:
            return (0, r.jsx)(l, { taskType: g.type });
        case a.w.INCOMPLETE:
            return (0, r.jsx)(c, { taskType: g.type });
        case a.w.COMPLETED:
            return (0, r.jsx)(u, { taskType: g.type });
        case a.w.CLAIMED:
            return (0, r.jsx)(d, { taskType: g.type });
        default:
            return (0, r.jsx)(i.zxk, {
                variant: "primary",
                fullWidth: !0,
                size: h,
                text: s.intl.string(s.t.P84bAD),
            });
    }
};
