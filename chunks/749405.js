n.d(t, { C: () => f });
var r = n(200651),
    i = n(192379),
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
            (0, l.showToast)((0, l.createToast)(p.NW.string(p.t.EDYbS0), l.ToastType.FAILURE));
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
            isAcceptLoading: N,
            isRejectLoading: y,
            isUserProfileLoading: I,
            isOptimisticAccepted: v,
            isOptimisticRejected: C
        } = (0, u.m)({
            user: n,
            onAcceptSuccess: _,
            onRejectSuccess: b,
            onError: m
        }),
        S = N || y || I || v || C;
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
                        disabled: S,
                        submitting: y || C,
                        children: p.NW.string(p.t.B2nygY)
                    }),
                    (0, r.jsx)(l.zxk, {
                        className: h.button,
                        color: l.Ttl.BRAND,
                        size: l.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            e.stopPropagation(), E(f.id);
                        },
                        disabled: S,
                        submitting: N || I || v,
                        children: p.NW.string(p.t.Kz8Pws)
                    })
                ]
            })
        ]
    });
}
