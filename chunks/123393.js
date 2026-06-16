t.d(l, { W: () => f });
var n = t(627968),
    a = t(64700),
    u = t(17928),
    i = t(691540),
    r = t(857250),
    s = t(97483),
    d = t(192308),
    c = t(730852),
    o = t(734057),
    p = t(624458),
    h = t(513461),
    R = t(375708);
function f(e, l, f, y) {
    let [k, C] = a.useState(!1),
        b = (0, u.bG)([o.A], () => o.A.getChannel(y)),
        w = a.useCallback(() => {
            (0, i.P0)((0, r.o)(R.intl.string(R.t.R0RpRX), s.Ck.FAILURE));
        }, []),
        A = a.useCallback(async () => {
            if (!k && null != e && null != l && null != f) {
                if (null != b) return void c.default.selectPrivateChannel(b.id);
                C(!0);
                try {
                    await p.A.createOrEnterJoinRequestInterview(f);
                } catch {
                    w();
                } finally {
                    C(!1);
                }
            }
        }, [e, f, b, w, k, l]);
    return {
        approveRequest: async () => {
            if (!k && null != e && null != l && null != f) {
                C(!0);
                try {
                    await p.A.updateGuildJoinRequest(e, l, f, h.B5.APPROVED);
                } catch {
                    w();
                } finally {
                    C(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != l &&
                null != f &&
                (0, d.openModalLazy)(async () => {
                    let { default: a } = await t.e("70685").then(t.bind(t, 867276));
                    return (t) =>
                        (0, n.jsx)(a, { modalProps: t, guildId: e, userId: l, guildJoinRequestId: f, onError: w });
                });
        },
        submitting: k,
        handleOpenInterview: A,
    };
}
