n.d(t, { A: () => E });
var s = n(627968),
    i = n(821609),
    l = n(424151),
    r = n(79545),
    a = n(941775),
    o = n(48136),
    d = n(593587),
    u = n(220514),
    c = n(884392),
    h = n(985018);
let E = function (e) {
    let {
            quest: t,
            surface: n,
            preClickCallback: E,
            analyticsCtxQuestContent: p,
            analyticsCtxSourceQuestContent: A,
            analyticsCtxQuestContentPosition: m,
            analyticsCtxQuestContentRowIndex: C,
            size: g = "md",
        } = e,
        _ = (0, r.Pd)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: h.intl.string(h.t.P84bAD) });
    let I = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (_) {
        case r.UA.UNENROLLED:
            return (0, s.jsx)(c.A, {
                quest: t,
                taskType: I.type,
                size: g,
                preClickCallback: E,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: m,
                analyticsCtxQuestContentRowIndex: C,
            });
        case r.UA.ENROLLED:
            return (0, s.jsx)(o.A, {
                quest: t,
                taskType: I.type,
                size: g,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: m,
                analyticsCtxQuestContentRowIndex: C,
                surface: n,
            });
        case r.UA.INCOMPLETE:
            return (0, s.jsx)(u.A, {
                quest: t,
                taskType: I.type,
                size: g,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: m,
                analyticsCtxQuestContentRowIndex: C,
                surface: n,
            });
        case r.UA.EXPIRED_CLAIMABLE:
        case r.UA.COMPLETED:
            return (0, s.jsx)(a.A, {
                quest: t,
                size: g,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: m,
                analyticsCtxQuestContentRowIndex: C,
            });
        case r.UA.CLAIMED:
            return (0, s.jsx)(l.A, {
                quest: t,
                size: g,
                analyticsCtxQuestContent: p,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: m,
                analyticsCtxQuestContentRowIndex: C,
            });
        case r.UA.EXPIRED:
            return (0, s.jsx)(d.A, { quest: t, size: g });
        default:
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: g, text: h.intl.string(h.t.P84bAD) });
    }
};
