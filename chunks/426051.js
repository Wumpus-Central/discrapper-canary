n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(481060),
    a = n(797614),
    s = n(359110),
    c = n(6025),
    u = n(433355),
    d = n(26373),
    p = n(486622),
    h = n(376191),
    f = n(86203),
    g = n(388032),
    m = n(108402);
function b(e) {
    let { active: t, user: n, channel: b } = e,
        _ = (0, d.V)(),
        E = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(g.NW.string(g.t.pIQ3h4), o.ToastType.FAILURE)), a.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        O = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ);
        }, []),
        N = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ), _ && (0, s.Kh)(b.id);
        }, [b.id, _]),
        {
            acceptMessageRequest: v,
            isAcceptLoading: y,
            isUserProfileLoading: I,
            isOptimisticAccepted: C
        } = (0, p.m)({
            user: n,
            onAcceptSuccess: N,
            onRejectSuccess: O,
            onError: E
        }),
        S = y || I,
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
                    (0, r.jsx)(o.zxk, {
                        className: m.button,
                        color: o.Ttl.PRIMARY,
                        size: o.zxk.Sizes.SMALL,
                        onClick: (e) => {
                            v(b.id), e.stopPropagation();
                        },
                        disabled: T,
                        submitting: S,
                        children: g.NW.string(g.t.vicfl5)
                    }),
                    (0, r.jsx)(f.Z, {
                        className: m.button,
                        channel: b,
                        buttonSize: o.zxk.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
