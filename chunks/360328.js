n.d(t, { s: () => p }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(592125),
    c = n(693546),
    u = n(246364),
    d = n(388032);
function p(e, t, p, f) {
    let [h, m] = r.useState(!1),
        g = (0, l.e7)([s.Z], () => s.Z.getChannel(f)),
        b = r.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE));
        }, []),
        C = r.useCallback(async () => {
            if (!h && null != e && null != t && null != p) {
                if (null != g) return void o.default.selectPrivateChannel(g.id);
                if (!h) {
                    m(!0);
                    try {
                        await c.Z.createOrEnterJoinRequestInterview(p);
                    } catch (e) {
                        b();
                    } finally {
                        m(!1);
                    }
                }
            }
        }, [e, p, g, b, h, t]);
    return {
        approveRequest: async () => {
            if (!h && null != e && null != t && null != p) {
                m(!0);
                try {
                    await c.Z.updateGuildJoinRequest(e, t, p, u.wB.APPROVED);
                } catch (e) {
                    b();
                } finally {
                    m(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != p &&
                (0, a.ZDy)(async () => {
                    let { default: r } = await n.e("56496").then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(r, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: p,
                            onError: b,
                        });
                });
        },
        submitting: h,
        handleOpenInterview: C,
    };
}
