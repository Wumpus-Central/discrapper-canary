var r = e(477900),
    a = e(582128),
    s = e(189213),
    n = e(683071),
    l = e(964486),
    d = e(129230),
    u = e(427262),
    o = e(470147),
    c = e(88001),
    _ = e(652215),
    m = e(107198),
    M = e(792996);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { subscriptionId: i, member: e, onClose: p, ...E } = t,
                [f, b] = (0, a.useState)(!1),
                [k, C] = (0, a.useState)(!1);
            return (
                (0, l.Ay)(() => {
                    d.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
                        subscription_id: i,
                        member_user_id: e.id,
                    });
                }),
                (0, r.jsx)(s.a, {
                    size: "md",
                    title: M.intl.string(m.default.MJIHXY),
                    subtitle: M.intl.formatToPlainString(m.default.gMyQrH, {
                        memberName: (0, u.$3)(e),
                        premiumGroupProductName: (0, c.DP)(),
                        cooldownMonths: 12,
                    }),
                    onClose: p,
                    actions: [
                        {
                            text: M.intl.string(m.default.dlr8CX),
                            variant: "critical-primary",
                            onClick: async function () {
                                (d.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, {
                                    subscription_id: i,
                                    member_user_id: e.id,
                                }),
                                    b(!0));
                                let t = await (0, o.oO)(i, e.id);
                                (b(!1), t.ok ? p() : C(!0));
                            },
                            loading: f,
                        },
                    ],
                    ...E,
                    children:
                        k &&
                        (0, r.jsx)(n.w, { type: "critical", message: M.intl.string(M.t["rTU7/z"]), role: "alert" }),
                })
            );
        },
    },
);
