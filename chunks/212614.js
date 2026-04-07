n.d(t, { A: () => _ });
var i = n(627968),
    l = n(732955),
    s = n(79545),
    a = n(941775),
    r = n(561393),
    o = n(220514),
    d = n(884392),
    c = n(985018);
function u(e) {
    let { taskType: t } = e;
    return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: c.intl.string(c.t.P84bAD) });
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
        } = e,
        x = (0, s.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: c.intl.string(c.t.P84bAD) });
    let f = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (x) {
        case s.UA.UNENROLLED:
            return (0, i.jsx)(d.A, {
                quest: t,
                taskType: f.type,
                size: A,
                preClickCallback: _,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
            });
        case s.UA.ENROLLED:
            return (0, i.jsx)(r.A, {
                quest: t,
                taskType: f.type,
                size: A,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n,
            });
        case s.UA.INCOMPLETE:
            return (0, i.jsx)(o.A, {
                quest: t,
                taskType: f.type,
                size: A,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
                surface: n,
            });
        case s.UA.COMPLETED:
            return (0, i.jsx)(a.A, {
                quest: t,
                size: A,
                analyticsCtxQuestContent: m,
                analyticsCtxSourceQuestContent: h,
                analyticsCtxQuestContentPosition: p,
                analyticsCtxQuestContentRowIndex: g,
            });
        case s.UA.CLAIMED:
            return (0, i.jsx)(u, { taskType: f.type });
        default:
            return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: A, text: c.intl.string(c.t.P84bAD) });
    }
};
