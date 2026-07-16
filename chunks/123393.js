n.d(l, { W: () => R });
var t = n(627968),
    u = n(64700),
    a = n(17928),
    i = n(691540),
    r = n(857250),
    s = n(97483),
    c = n(192308),
    d = n(730852),
    o = n(734057),
    p = n(624458),
    f = n(513461),
    h = n(375708);
function R(e, l, R, y) {
    let [k, C] = u.useState(!1),
        b = (0, a.bG)([o.A], () => o.A.getChannel(y)),
        w = u.useCallback(() => {
            (0, i.P0)((0, r.o)(h.intl.string(h.t.R0RpRX), s.Ck.FAILURE));
        }, []),
        A = u.useCallback(async () => {
            if (!k && null != e && null != l && null != R) {
                if (null != b) return void d.default.selectPrivateChannel(b.id);
                C(!0);
                try {
                    await p.A.createOrEnterJoinRequestInterview(R);
                } catch {
                    w();
                } finally {
                    C(!1);
                }
            }
        }, [e, R, b, w, k, l]);
    return {
        approveRequest: async function n() {
            if (!k && null != e && null != l && null != R) {
                C(!0);
                try {
                    await p.A.updateGuildJoinRequest(e, l, R, f.B5.APPROVED);
                } catch {
                    w();
                } finally {
                    C(!1);
                }
            }
        },
        rejectRequest: function () {
            null != e &&
                null != l &&
                null != R &&
                (0, c.openModalLazy)(async () => {
                    let { default: u } = await n.e("70685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, t.jsx)(u, { modalProps: n, guildId: e, userId: l, guildJoinRequestId: R, onError: w });
                });
        },
        submitting: k,
        handleOpenInterview: A,
    };
}
