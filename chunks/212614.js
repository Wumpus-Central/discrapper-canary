n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(732955),
    a = n(79545),
    s = n(884392),
    o = n(985018);

function l(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: o.intl.string(o.t.P84bAD),
    });
}

function c(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(l, {
        taskType: t,
    });
}

function u(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: o.intl.string(o.t.P84bAD),
    });
}

function d(e) {
    let { taskType: t } = e;
    return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        size: "sm",
        text: o.intl.string(o.t.P84bAD),
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
        m = (0, a.P)(t);
    if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
        return (0, r.jsx)(i.$nd, {
            variant: "primary",
            fullWidth: !0,
            size: "sm",
            text: o.intl.string(o.t.P84bAD),
        });
    let g = Object.values(t.config.taskConfigV2.tasks)[0];
    switch (m) {
        case a.U.UNENROLLED:
            return (0, r.jsx)(s.A, {
                quest: t,
                taskType: g.type,
                size: h,
                preClickCallback: n,
                analyticsCtxQuestContent: f,
                analyticsCtxSourceQuestContent: p,
                analyticsCtxQuestContentPosition: _,
            });
        case a.U.ENROLLED:
            return (0, r.jsx)(l, {
                taskType: g.type,
            });
        case a.U.INCOMPLETE:
            return (0, r.jsx)(c, {
                taskType: g.type,
            });
        case a.U.COMPLETED:
            return (0, r.jsx)(u, {
                taskType: g.type,
            });
        case a.U.CLAIMED:
            return (0, r.jsx)(d, {
                taskType: g.type,
            });
        default:
            return (0, r.jsx)(i.$nd, {
                variant: "primary",
                fullWidth: !0,
                size: h,
                text: o.intl.string(o.t.P84bAD),
            });
    }
};
