n.d(t, { A: () => _ });
var i = n(627968),
    l = n(732955),
    s = n(424151),
    r = n(79545),
    a = n(941775),
    o = n(561393),
    d = n(593587),
    c = n(220514),
    u = n(884392),
    m = n(985018);
let _ = function (e) {
    let {
            quest: t,
            surface: n,
            preClickCallback: _,
            analyticsCtxQuestContent: h,
            analyticsCtxSourceQuestContent: p,
            analyticsCtxQuestContentPosition: g,
            analyticsCtxQuestContentRowIndex: A,
            size: x = "md",
        } = e,
        f = (0, r.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: "sm", text: m.intl.string(m.t.P84bAD) });
    let C = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (f) {
        case r.UA.UNENROLLED:
            return (0, i.jsx)(u.A, {
                quest: t,
                taskType: C.type,
                size: x,
                preClickCallback: _,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case r.UA.ENROLLED:
            return (0, i.jsx)(o.A, {
                quest: t,
                taskType: C.type,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n,
            });
        case r.UA.INCOMPLETE:
            return (0, i.jsx)(c.A, {
                quest: t,
                taskType: C.type,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n,
            });
        case r.UA.EXPIRED_CLAIMABLE:
        case r.UA.COMPLETED:
            return (0, i.jsx)(a.A, {
                quest: t,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case r.UA.CLAIMED:
            return (0, i.jsx)(s.A, {
                quest: t,
                size: x,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case r.UA.EXPIRED:
            return (0, i.jsx)(d.A, { quest: t, size: x });
        default:
            return (0, i.jsx)(l.$nd, { variant: "primary", fullWidth: !0, size: x, text: m.intl.string(m.t.P84bAD) });
    }
};
