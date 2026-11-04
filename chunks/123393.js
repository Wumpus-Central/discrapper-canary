var n = l(477900),
    a = l(582128),
    u = l(855986),
    i = l(858899),
    r = l(192308),
    s = l(597798),
    c = l(734057),
    d = l(624458),
    o = l(513461),
    p = l(792996);
l.d(
    e,
    {},
    {
        W: function (t, e, f, h) {
            let [R, y] = a.useState(!1),
                b = (0, u.bG)([c.A], () => c.A.getChannel(h)),
                k = a.useCallback(() => {
                    (0, i.P0)({ text: p.intl.string(p.t.R0RpRX), variant: "critical" });
                }, []),
                v = a.useCallback(async () => {
                    if (!R && null != t && null != e && null != f) {
                        if (null != b) return void s.default.selectPrivateChannel(b.id);
                        y(!0);
                        try {
                            await d.A.createOrEnterJoinRequestInterview(f);
                        } catch {
                            k();
                        } finally {
                            y(!1);
                        }
                    }
                }, [t, f, b, k, R, e]);
            return {
                approveRequest: async function () {
                    if (!R && null != t && null != e && null != f) {
                        y(!0);
                        try {
                            await d.A.updateGuildJoinRequest(t, e, f, o.B5.APPROVED);
                        } catch {
                            k();
                        } finally {
                            y(!1);
                        }
                    }
                },
                rejectRequest: function () {
                    null != t &&
                        null != e &&
                        null != f &&
                        (0, r.mM)(async () => {
                            let { default: a } = await l.e(970685).then(l.bind(l, 867276));
                            return (l) =>
                                (0, n.jsx)(a, {
                                    modalProps: l,
                                    guildId: t,
                                    userId: e,
                                    guildJoinRequestId: f,
                                    onError: k,
                                });
                        });
                },
                submitting: R,
                handleOpenInterview: v,
            };
        },
    },
);
