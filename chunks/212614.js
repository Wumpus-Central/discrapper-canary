n.d(t, { A: () => _ });
var i = n(627968),
    l = n(732955),
    r = n(79545),
    a = n(561393),
    s = n(884392),
    o = n(985018);
function d(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
}
function c(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
}
function u(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
}
let _ = function (e) {
    let {
            quest: t,
            surface: n,
            preClickCallback: _,
            analyticsCtxQuestContent: m,
            analyticsCtxSourceQuestContent: h,
            analyticsCtxQuestContentPosition: p,
            analyticsCtxQuestContentRowIndex: g,
            size: A = "md",
            variant: x = "primary",
        } = e,
        f = (0, r.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
    let C = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (f) {
        case r.UA.UNENROLLED:
            return (0, i.jsx)(s.A, {
                variant: x,
                quest: t,
                taskType: C.type,
                size: A,
                preClickCallback: _,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
            });
        case r.UA.ENROLLED:
            return (0, i.jsx)(a.A, {
                quest: t,
                taskType: C.type,
                size: A,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n,
            });
        case r.UA.INCOMPLETE:
            return (0, i.jsx)(d, { taskType: C.type });
        case r.UA.COMPLETED:
            return (0, i.jsx)(c, { taskType: C.type });
        case r.UA.CLAIMED:
            return (0, i.jsx)(u, { taskType: C.type });
        default:
            return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: A, text: o.intl.string(o.t.P84bAD) });
    }
};
