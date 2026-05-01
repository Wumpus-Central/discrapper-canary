n.d(e, { A: () => d });
var s = n(627968),
    i = n(821609),
    o = n(424151),
    a = n(79545),
    u = n(941775),
    l = n(48136),
    r = n(593587),
    C = n(220514),
    E = n(884392),
    c = n(985018);
let d = function (t) {
    let {
            quest: e,
            surface: n,
            preClickCallback: d,
            analyticsCtxQuestContent: L,
            analyticsCtxSourceQuestContent: A,
            analyticsCtxQuestContentPosition: D,
            analyticsCtxQuestContentRowIndex: U,
            size: q = "md",
        } = t,
        O = (0, a.Pd)(e);
    if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
        return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: c.intl.string(c.t.P84bAD) });
    let x = Object.values(e.config.taskConfigV2.tasks)[0];
    switch (O) {
        case a.UA.UNENROLLED:
            return (0, s.jsx)(E.A, {
                quest: e,
                taskType: x.type,
                size: q,
                preClickCallback: d,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: D,
                analyticsCtxQuestContentRowIndex: U,
            });
        case a.UA.ENROLLED:
            return (0, s.jsx)(l.A, {
                quest: e,
                taskType: x.type,
                size: q,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: D,
                analyticsCtxQuestContentRowIndex: U,
                surface: n,
            });
        case a.UA.INCOMPLETE:
            return (0, s.jsx)(C.A, {
                quest: e,
                taskType: x.type,
                size: q,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: D,
                analyticsCtxQuestContentRowIndex: U,
                surface: n,
            });
        case a.UA.EXPIRED_CLAIMABLE:
        case a.UA.COMPLETED:
            return (0, s.jsx)(u.A, {
                quest: e,
                size: q,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: D,
                analyticsCtxQuestContentRowIndex: U,
            });
        case a.UA.CLAIMED:
            return (0, s.jsx)(o.A, {
                quest: e,
                size: q,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: D,
                analyticsCtxQuestContentRowIndex: U,
            });
        case a.UA.EXPIRED:
            return (0, s.jsx)(r.A, { quest: e, size: q });
        default:
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: q, text: c.intl.string(c.t.P84bAD) });
    }
};
