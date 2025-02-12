n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(481060),
    s = n(797614),
    o = n(359110),
    c = n(6025),
    d = n(433355),
    u = n(26373),
    h = n(486622),
    m = n(376191),
    p = n(86203),
    g = n(388032),
    _ = n(724776);
function f(e) {
    let { active: t, user: n, channel: f } = e,
        E = (0, u.V)(),
        I = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.pIQ3h4), a.ToastType.FAILURE)), s.Z.increment({ name: r.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        C = l.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []),
        N = l.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), E && (0, o.Kh)(f.id);
        }, [f.id, E]),
        {
            acceptMessageRequest: v,
            isAcceptLoading: T,
            isUserProfileLoading: S,
            isOptimisticAccepted: A
        } = (0, h.m)({
            user: n,
            onAcceptSuccess: N,
            onRejectSuccess: C,
            onError: I
        }),
        b = T || S,
        Z = b || A;
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(m.Z, {
                otherUser: n,
                channel: f,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: _.actions,
                children: [
                    (0, i.jsx)(a.zxk, {
                        className: _.button,
                        color: a.Ttl.PRIMARY,
                        size: a.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            v(f.id), e.stopPropagation();
                        },
                        disabled: Z,
                        submitting: b,
                        children: g.intl.string(g.t.vicfl5)
                    }),
                    (0, i.jsx)(p.Z, {
                        className: _.button,
                        channel: f,
                        buttonSize: a.zxk.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
