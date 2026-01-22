n.d(t, {
    W: () => f,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(956793),
    o = n(734057),
    c = n(624458),
    u = n(513461),
    d = n(985018);

function f(e, t, f, p) {
    let [h, b] = l.useState(!1),
        g = (0, i.bG)([o.A], () => o.A.getChannel(p)),
        m = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE));
        }, []),
        A = l.useCallback(async () => {
            if (!h && null != e && null != t && null != f) {
                if (null != g) return void s.default.selectPrivateChannel(g.id);
                if (!h) {
                    b(!0);
                    try {
                        await c.A.createOrEnterJoinRequestInterview(f);
                    } catch (e) {
                        m();
                    } finally {
                        b(!1);
                    }
                }
            }
        }, [e, f, g, m, h, t]);
    return {
        approveRequest: async () => {
            if (!h && null != e && null != t && null != f) {
                b(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, f, u.B5.APPROVED);
                } catch (e) {
                    m();
                } finally {
                    b(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != f &&
                (0, a.mMO)(async () => {
                    let { default: l } = await n.e("70685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, r.jsx)(l, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: f,
                            onError: m,
                        });
                });
        },
        submitting: h,
        handleOpenInterview: A,
    };
}
