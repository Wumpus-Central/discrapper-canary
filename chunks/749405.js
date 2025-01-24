n.d(t, {
    C: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(359110),
    s = n(6025),
    o = n(433355),
    c = n(26373),
    d = n(486622),
    u = n(376191),
    h = n(388032),
    m = n(573475);
function p(e) {
    let { active: t, user: n, channel: p } = e,
        g = (0, c.K)(),
        f = r.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(h.intl.string(h.t.EDYbS0), l.ToastType.FAILURE));
        }, []),
        _ = r.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ);
        }, []),
        E = r.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ), g && (0, a.Kh)(p.id);
        }, [p.id, g]),
        {
            acceptMessageRequest: I,
            rejectMessageRequest: C,
            isAcceptLoading: v,
            isRejectLoading: N,
            isUserProfileLoading: S,
            isOptimisticAccepted: T,
            isOptimisticRejected: b
        } = (0, d.m)({
            user: n,
            onAcceptSuccess: E,
            onRejectSuccess: _,
            onError: f
        }),
        A = v || N || S || T || b;
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(u.Z, {
                channel: p,
                otherUser: n,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: m.actions,
                children: [
                    (0, i.jsx)(l.Button, {
                        className: m.button,
                        color: l.ButtonColors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), C(p.id);
                        },
                        disabled: A,
                        submitting: N || b,
                        children: h.intl.string(h.t.B2nygY)
                    }),
                    (0, i.jsx)(l.Button, {
                        className: m.button,
                        color: l.ButtonColors.BRAND,
                        size: l.Button.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), I(p.id);
                        },
                        disabled: A,
                        submitting: v || S || T,
                        children: h.intl.string(h.t.Kz8Pws)
                    })
                ]
            })
        ]
    });
}
