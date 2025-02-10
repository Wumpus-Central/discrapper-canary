n.d(t, { C: () => p });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(359110),
    s = n(6025),
    o = n(433355),
    c = n(26373),
    d = n(486622),
    u = n(376191),
    h = n(388032),
    m = n(855677);
function p(e) {
    let { active: t, user: n, channel: p } = e,
        g = (0, c.K)(),
        _ = l.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(h.intl.string(h.t.EDYbS0), r.ToastType.FAILURE));
        }, []),
        f = l.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ);
        }, []),
        E = l.useCallback(() => {
            s.Z.closeChannelSidebar(o.uZ), g && (0, a.Kh)(p.id);
        }, [p.id, g]),
        {
            acceptMessageRequest: I,
            rejectMessageRequest: C,
            isAcceptLoading: N,
            isRejectLoading: v,
            isUserProfileLoading: T,
            isOptimisticAccepted: S,
            isOptimisticRejected: Z
        } = (0, d.m)({
            user: n,
            onAcceptSuccess: E,
            onRejectSuccess: f,
            onError: _
        }),
        A = N || v || T || S || Z;
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
                    (0, i.jsx)(r.zxk, {
                        className: m.button,
                        color: r.Ttl.PRIMARY,
                        size: r.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), C(p.id);
                        },
                        disabled: A,
                        submitting: v || Z,
                        children: h.intl.string(h.t.B2nygY)
                    }),
                    (0, i.jsx)(r.zxk, {
                        className: m.button,
                        color: r.Ttl.BRAND,
                        size: r.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), I(p.id);
                        },
                        disabled: A,
                        submitting: N || T || S,
                        children: h.intl.string(h.t.Kz8Pws)
                    })
                ]
            })
        ]
    });
}
