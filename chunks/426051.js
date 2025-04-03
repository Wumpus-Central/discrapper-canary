n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(286379),
    a = n(481060),
    o = n(797614),
    s = n(359110),
    c = n(6025),
    u = n(433355),
    d = n(26373),
    p = n(486622),
    h = n(376191),
    f = n(86203),
    g = n(388032),
    m = n(972308);
function b(e) {
    let { active: t, user: n, channel: b } = e,
        _ = (0, d.V)(),
        E = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(g.NW.string(g.t.pIQ3h4), a.ToastType.FAILURE)), o.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        O = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ);
        }, []),
        N = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ), _ && (0, s.Kh)(b.id);
        }, [b.id, _]),
        {
            acceptMessageRequest: y,
            isAcceptLoading: I,
            isUserProfileLoading: v,
            isOptimisticAccepted: C
        } = (0, p.m)({
            user: n,
            onAcceptSuccess: N,
            onRejectSuccess: O,
            onError: E
        }),
        S = I || v,
        T = S || C;
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(h.Z, {
                otherUser: n,
                channel: b,
                active: t
            }),
            (0, r.jsxs)('div', {
                className: m.actions,
                children: [
                    (0, r.jsx)(a.zxk, {
                        className: m.button,
                        color: a.Ttl.PRIMARY,
                        size: a.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            y(b.id), e.stopPropagation();
                        },
                        disabled: T,
                        submitting: S,
                        children: g.NW.string(g.t.vicfl5)
                    }),
                    (0, r.jsx)(f.Z, {
                        className: m.button,
                        channel: b,
                        buttonSize: a.zxk.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
