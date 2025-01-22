n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(286379),
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
    f = n(48829);
function _(e) {
    let { active: t, user: n, channel: _ } = e,
        E = (0, u.V)(),
        I = r.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.pIQ3h4), a.ToastType.FAILURE)), s.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        C = r.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []),
        N = r.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), E && (0, o.Kh)(_.id);
        }, [_.id, E]),
        {
            acceptMessageRequest: v,
            isAcceptLoading: S,
            isUserProfileLoading: T,
            isOptimisticAccepted: b
        } = (0, h.m)({
            user: n,
            onAcceptSuccess: N,
            onRejectSuccess: C,
            onError: I
        }),
        A = S || T,
        Z = A || b;
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(m.Z, {
                otherUser: n,
                channel: _,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: f.actions,
                children: [
                    (0, i.jsx)(a.Button, {
                        className: f.button,
                        color: a.ButtonColors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: (e) => {
                            v(_.id), e.stopPropagation();
                        },
                        disabled: Z,
                        submitting: A,
                        children: g.intl.string(g.t.vicfl5)
                    }),
                    (0, i.jsx)(p.Z, {
                        className: f.button,
                        channel: _,
                        buttonSize: a.Button.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
