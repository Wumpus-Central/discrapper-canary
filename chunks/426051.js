n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(286379),
    a = n(481060),
    o = n(797614),
    s = n(359110),
    c = n(6025),
    u = n(433355),
    d = n(26373),
    p = n(486622),
    f = n(376191),
    h = n(86203),
    g = n(388032),
    m = n(539410);
function b(e) {
    let { active: t, user: n, channel: b } = e,
        _ = (0, d.V)(),
        O = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.pIQ3h4), a.ToastType.FAILURE)),
                o.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        E = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ);
        }, []),
        v = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ), _ && (0, s.Kh)(b.id);
        }, [b.id, _]),
        {
            acceptMessageRequest: y,
            isAcceptLoading: I,
            isUserProfileLoading: C,
            isOptimisticAccepted: S,
        } = (0, p.m)({
            user: n,
            onAcceptSuccess: v,
            onRejectSuccess: E,
            onError: O,
        }),
        T = I || C,
        N = T || S;
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(f.Z, {
                otherUser: n,
                channel: b,
                active: t,
            }),
            (0, r.jsxs)("div", {
                className: m.actions,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.vicfl5),
                        onClick: (e) => {
                            y(b.id), e.stopPropagation();
                        },
                        disabled: N,
                        loading: T,
                    }),
                    (0, r.jsx)(h.Z, { channel: b }),
                ],
            }),
        ],
    });
}
