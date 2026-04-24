"use strict";
n.d(t, { W: () => f });
var s = n(627968),
    l = n(64700),
    i = n(17928),
    a = n(691540),
    r = n(857250),
    o = n(97483),
    c = n(192308),
    d = n(956793),
    u = n(734057),
    _ = n(624458),
    m = n(513461),
    x = n(985018);
function f(e, t, f, h) {
    let [g, b] = l.useState(!1),
        A = (0, i.bG)([u.A], () => u.A.getChannel(h)),
        j = l.useCallback(() => {
            (0, a.P0)((0, r.o)(x.intl.string(x.t.R0RpRX), o.Ck.FAILURE));
        }, []),
        p = l.useCallback(async () => {
            if (!g && null != e && null != t && null != f) {
                if (null != A) return void d.default.selectPrivateChannel(A.id);
                b(!0);
                try {
                    await _.A.createOrEnterJoinRequestInterview(f);
                } catch {
                    j();
                } finally {
                    b(!1);
                }
            }
        }, [e, f, A, j, g, t]);
    return {
        approveRequest: async () => {
            if (!g && null != e && null != t && null != f) {
                b(!0);
                try {
                    await _.A.updateGuildJoinRequest(e, t, f, m.B5.APPROVED);
                } catch {
                    j();
                } finally {
                    b(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != f &&
                (0, c.openModalLazy)(async () => {
                    let { default: l } = await n.e("70685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, s.jsx)(l, { modalProps: n, guildId: e, userId: t, guildJoinRequestId: f, onError: j });
                });
        },
        submitting: g,
        handleOpenInterview: p,
    };
}
