n.d(t, { C: () => f });
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
    h = n(23704);
function f(e) {
    let { active: t, user: n, channel: f } = e,
        g = (0, c.K)(),
        m = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.EDYbS0), l.ToastType.FAILURE));
        }, []),
        b = i.useCallback(() => {
            o.Z.closeChannelSidebar(s.uZ);
        }, []),
        _ = i.useCallback(() => {
            o.Z.closeChannelSidebar(s.uZ), g && (0, a.Kh)(f.id);
        }, [f.id, g]),
        {
            acceptMessageRequest: E,
            rejectMessageRequest: O,
            isAcceptLoading: y,
            isRejectLoading: I,
            isUserProfileLoading: v,
            isOptimisticAccepted: C,
            isOptimisticRejected: S
        } = (0, u.m)({
            user: n,
            onAcceptSuccess: _,
            onRejectSuccess: b,
            onError: m
        }),
        N = y || I || v || C || S;
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(d.Z, {
                channel: f,
                otherUser: n,
                active: t
            }),
            (0, r.jsxs)('div', {
                className: h.actions,
                children: [
                    (0, r.jsx)(l.zxk, {
                        className: h.button,
                        color: l.Ttl.PRIMARY,
                        size: l.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), O(f.id);
                        },
                        disabled: N,
                        submitting: I || S,
                        children: p.intl.string(p.t.B2nygY)
                    }),
                    (0, r.jsx)(l.zxk, {
                        className: h.button,
                        color: l.Ttl.BRAND,
                        size: l.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), E(f.id);
                        },
                        disabled: N,
                        submitting: y || v || C,
                        children: p.intl.string(p.t.Kz8Pws)
                    })
                ]
            })
        ]
    });
}
