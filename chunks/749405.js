n.d(t, { C: () => h });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(359110),
    s = n(6025),
    o = n(433355),
    c = n(26373),
    u = n(486622),
    d = n(376191),
    p = n(388032),
    f = n(336549);
function h(e) {
    let { active: t, user: n, channel: h } = e,
        g = (0, c.K)(),
        m = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE));
        }, []),
        _ = i.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ);
        }, []),
        b = i.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ), g && (0, a.Kh)(h.id);
        }, [h.id, g]),
        {
            acceptMessageRequest: E,
            rejectMessageRequest: O,
            isAcceptLoading: y,
            isRejectLoading: v,
            isUserProfileLoading: I,
            isOptimisticAccepted: C,
            isOptimisticRejected: S,
        } = (0, u.m)({
            user: n,
            onAcceptSuccess: b,
            onRejectSuccess: _,
            onError: m,
        }),
        T = y || v || I || C || S;
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)(d.Z, {
                channel: h,
                otherUser: n,
                active: t,
            }),
            (0, r.jsxs)("div", {
                className: f.actions,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: f.button,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: p.intl.string(p.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), O(h.id);
                            },
                            disabled: T,
                            loading: v || S,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: f.button,
                        children: (0, r.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: p.intl.string(p.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), E(h.id);
                            },
                            disabled: T,
                            loading: y || I || C,
                        }),
                    }),
                ],
            }),
        ],
    });
}
