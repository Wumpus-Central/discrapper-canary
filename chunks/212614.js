n.d(t, { A: () => _ });
var i = n(627968),
    l = n(821609),
    a = n(424151),
    s = n(79545),
    r = n(941775),
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
            size: f = "md",
        } = e,
        x = (0, s.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, i.jsx)(l.$, { variant: "primary", fullWidth: !0, size: "sm", text: m.intl.string(m.t.P84bAD) });
    let C = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (x) {
        case s.UA.UNENROLLED:
            return (0, i.jsx)(u.A, {
                quest: t,
                taskType: C.type,
                size: f,
                preClickCallback: _,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case s.UA.ENROLLED:
            return (0, i.jsx)(o.A, {
                quest: t,
                taskType: C.type,
                size: f,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n,
            });
        case s.UA.INCOMPLETE:
            return (0, i.jsx)(c.A, {
                quest: t,
                taskType: C.type,
                size: f,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
                surface: n,
            });
        case s.UA.EXPIRED_CLAIMABLE:
        case s.UA.COMPLETED:
            return (0, i.jsx)(r.A, {
                quest: t,
                size: f,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case s.UA.CLAIMED:
            return (0, i.jsx)(a.A, {
                quest: t,
                size: f,
                analyticsCtxQuestContent: h,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: A,
            });
        case s.UA.EXPIRED:
            return (0, i.jsx)(d.A, { quest: t, size: f });
        default:
            return (0, i.jsx)(l.$, { variant: "primary", fullWidth: !0, size: f, text: m.intl.string(m.t.P84bAD) });
    }
};
