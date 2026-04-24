n.d(t, { W: () => g });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(691540),
    r = n(857250),
    o = n(97483),
    c = n(192308),
    d = n(956793),
    u = n(734057),
    h = n(624458),
    m = n(513461),
    p = n(985018);
function g(e, t, g, A) {
    let [f, _] = l.useState(!1),
        E = (0, s.bG)([u.A], () => u.A.getChannel(A)),
        C = l.useCallback(() => {
            (0, a.P0)((0, r.o)(p.intl.string(p.t.R0RpRX), o.Ck.FAILURE));
        }, []),
        x = l.useCallback(async () => {
            if (!f && null != e && null != t && null != g) {
                if (null != E) return void d.default.selectPrivateChannel(E.id);
                _(!0);
                try {
                    await h.A.createOrEnterJoinRequestInterview(g);
                } catch {
                    C();
                } finally {
                    _(!1);
                }
            }
        }, [e, g, E, C, f, t]);
    return {
        approveRequest: async () => {
            if (!f && null != e && null != t && null != g) {
                _(!0);
                try {
                    await h.A.updateGuildJoinRequest(e, t, g, m.B5.APPROVED);
                } catch {
                    C();
                } finally {
                    _(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != g &&
                (0, c.openModalLazy)(async () => {
                    let { default: l } = await n.e("70685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, i.jsx)(l, { modalProps: n, guildId: e, userId: t, guildJoinRequestId: g, onError: C });
                });
        },
        submitting: f,
        handleOpenInterview: x,
    };
}
