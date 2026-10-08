n.d(l, { W: () => f });
var t = n(477900),
    u = n(582128),
    a = n(17928),
    i = n(376357),
    r = n(192308),
    s = n(730852),
    c = n(734057),
    d = n(624458),
    o = n(513461),
    p = n(660183);
function f(e, l, f, h) {
    let [R, y] = u.useState(!1),
        k = (0, a.bG)([c.A], () => c.A.getChannel(h)),
        C = u.useCallback(() => {
            (0, i.P0)((0, i.ox)(p.intl.string(p.t.R0RpRX), i.Ck.FAILURE));
        }, []),
        b = u.useCallback(async () => {
            if (!R && null != e && null != l && null != f) {
                if (null != k) return void s.default.selectPrivateChannel(k.id);
                y(!0);
                try {
                    await d.A.createOrEnterJoinRequestInterview(f);
                } catch {
                    C();
                } finally {
                    y(!1);
                }
            }
        }, [e, f, k, C, R, l]);
    return {
        approveRequest: async function n() {
            if (!R && null != e && null != l && null != f) {
                y(!0);
                try {
                    await d.A.updateGuildJoinRequest(e, l, f, o.B5.APPROVED);
                } catch {
                    C();
                } finally {
                    y(!1);
                }
            }
        },
        rejectRequest: function () {
            null != e &&
                null != l &&
                null != f &&
                (0, r.openModalLazy)(async () => {
                    let { default: u } = await n.e("970685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, t.jsx)(u, { modalProps: n, guildId: e, userId: l, guildJoinRequestId: f, onError: C });
                });
        },
        submitting: R,
        handleOpenInterview: b,
    };
}
