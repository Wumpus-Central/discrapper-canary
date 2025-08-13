n.d(t, { C: () => h });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(359110),
    o = n(6025),
    s = n(433355),
    c = n(26373),
    u = n(486622),
    d = n(376191),
    p = n(388032),
    f = n(395633);
function h(e) {
    let { active: t, user: n, channel: h } = e,
        g = (0, c.K)(),
        m = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.EDYbS0), l.ToastType.FAILURE));
        }, []),
        b = i.useCallback(() => {
            o.Z.closeChannelSidebar(s.uZ);
        }, []),
        _ = i.useCallback(() => {
            o.Z.closeChannelSidebar(s.uZ), g && (0, a.Kh)(h.id);
        }, [h.id, g]),
        {
            acceptMessageRequest: O,
            rejectMessageRequest: E,
            isAcceptLoading: y,
            isRejectLoading: v,
            isUserProfileLoading: I,
            isOptimisticAccepted: C,
            isOptimisticRejected: S,
        } = (0, u.m)({
            user: n,
            onAcceptSuccess: _,
            onRejectSuccess: b,
            onError: m,
        }),
        N = y || v || I || C || S;
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
                        children: (0, r.jsx)(l.zxk, {
                            variant: "secondary",
                            size: "sm",
                            text: p.intl.string(p.t.B2nygY),
                            onClick: (e) => {
                                e.stopPropagation(), E(h.id);
                            },
                            disabled: N,
                            loading: v || S,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: f.button,
                        children: (0, r.jsx)(l.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: p.intl.string(p.t.Kz8Pws),
                            onClick: (e) => {
                                e.stopPropagation(), O(h.id);
                            },
                            disabled: N,
                            loading: y || I || C,
                        }),
                    }),
                ],
            }),
        ],
    });
}
