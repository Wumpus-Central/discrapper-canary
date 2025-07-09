n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(755721),
    o = n(481060),
    s = n(797614),
    c = n(359110),
    u = n(6025),
    d = n(433355),
    p = n(26373),
    h = n(486622),
    f = n(376191),
    g = n(86203),
    m = n(388032),
    b = n(972308);
function _(e) {
    let { active: t, user: n, channel: _ } = e,
        E = (0, p.V)(),
        O = i.useCallback(() => {
            ((0, o.showToast)((0, o.createToast)(m.intl.string(m.t.pIQ3h4), o.ToastType.FAILURE)), s.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        y = i.useCallback(() => {
            u.Z.closeChannelSidebar(d.uZ);
        }, []),
        I = i.useCallback(() => {
            (u.Z.closeChannelSidebar(d.uZ), E && (0, c.Kh)(_.id));
        }, [_.id, E]),
        {
            acceptMessageRequest: v,
            isAcceptLoading: C,
            isUserProfileLoading: S,
            isOptimisticAccepted: N
        } = (0, h.m)({
            user: n,
            onAcceptSuccess: I,
            onRejectSuccess: y,
            onError: O
        }),
        T = C || S,
        P = T || N;
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(f.Z, {
                otherUser: n,
                channel: _,
                active: t
            }),
            (0, r.jsxs)('div', {
                className: b.actions,
                children: [
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: b.button,
                        children: (0, r.jsx)(o.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: m.intl.string(m.t.vicfl5),
                            onClick: (e) => {
                                (v(_.id), e.stopPropagation());
                            },
                            disabled: P,
                            loading: T
                        })
                    }),
                    (0, r.jsx)(g.Z, {
                        className: b.button,
                        channel: _,
                        buttonSize: a.zx.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
