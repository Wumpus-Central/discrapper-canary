n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(286379),
    a = n(481060),
    s = n(797614),
    o = n(359110),
    c = n(6025),
    u = n(433355),
    d = n(26373),
    p = n(486622),
    f = n(376191),
    m = n(86203),
    h = n(388032),
    g = n(539410);
function _(e) {
    let { active: t, user: n, channel: _ } = e,
        b = (0, d.V)(),
        E = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(h.intl.string(h.t.pIQ3h4), a.ToastType.FAILURE)),
                s.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        O = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ);
        }, []),
        I = i.useCallback(() => {
            c.Z.closeChannelSidebar(u.uZ), b && (0, o.Kh)(_.id);
        }, [_.id, b]),
        {
            acceptMessageRequest: y,
            isAcceptLoading: v,
            isUserProfileLoading: C,
            isOptimisticAccepted: S,
        } = (0, p.m)({
            user: n,
            onAcceptSuccess: I,
            onRejectSuccess: O,
            onError: E,
        }),
        T = v || C,
        N = T || S;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(f.Z, {
                otherUser: n,
                channel: _,
                active: t,
            }),
            (0, r.jsxs)("div", {
                className: g.actions,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(h.t.vicfl6),
                        onClick: (e) => {
                            y(_.id), e.stopPropagation();
                        },
                        disabled: N,
                        loading: T,
                    }),
                    (0, r.jsx)(m.Z, { channel: _ }),
                ],
            }),
        ],
    });
}
