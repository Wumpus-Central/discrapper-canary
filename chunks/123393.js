n.d(t, { W: () => h });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(956793),
    o = n(734057),
    c = n(624458),
    d = n(513461),
    u = n(985018);
function h(e, t, h, m) {
    let [A, g] = l.useState(!1),
        p = (0, s.bG)([o.A], () => o.A.getChannel(m)),
        f = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.R0RpRX), a.ToastType.FAILURE));
        }, []),
        _ = l.useCallback(async () => {
            if (!A && null != e && null != t && null != h) {
                if (null != p) return void r.default.selectPrivateChannel(p.id);
                g(!0);
                try {
                    await c.A.createOrEnterJoinRequestInterview(h);
                } catch {
                    f();
                } finally {
                    g(!1);
                }
            }
        }, [e, h, p, f, A, t]);
    return {
        approveRequest: async () => {
            if (!A && null != e && null != t && null != h) {
                g(!0);
                try {
                    await c.A.updateGuildJoinRequest(e, t, h, d.B5.APPROVED);
                } catch {
                    f();
                } finally {
                    g(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != h &&
                (0, a.mMO)(async () => {
                    let { default: l } = await n.e("70685").then(n.bind(n, 867276));
                    return (n) =>
                        (0, i.jsx)(l, { modalProps: n, guildId: e, userId: t, guildJoinRequestId: h, onError: f });
                });
        },
        submitting: A,
        handleOpenInterview: _,
    };
}
