n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    l = n(286379),
    a = n(481060),
    o = n(797614),
    s = n(359110),
    c = n(6025),
    u = n(433355),
    d = n(26373),
    p = n(486622),
    f = n(376191),
    g = n(86203),
    h = n(388032),
    m = n(282850);
function b(e) {
    let { active: t, user: n, channel: b } = e,
        _ = (0, d.V)(),
        E = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(h.intl.string(h.t.pIQ3h4), a.ToastType.FAILURE)),
                o.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        O = i.useCallback(() => {
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
            onRejectSuccess: O,
            onError: E,
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
                        text: h.intl.string(h.t.vicfl6),
                        onClick: (e) => {
                            y(b.id), e.stopPropagation();
                        },
                        disabled: N,
                        loading: T,
                    }),
                    (0, r.jsx)(g.Z, { channel: b }),
                ],
            }),
        ],
    });
}
