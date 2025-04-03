n.d(t, { s: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(287734),
    s = n(592125),
    c = n(693546),
    u = n(246364),
    d = n(388032);
function p(e, t, p, h) {
    let [f, m] = i.useState(!1),
        g = (0, l.e7)([s.Z], () => s.Z.getChannel(h)),
        b = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(d.NW.string(d.t.R0RpRU), o.ToastType.FAILURE));
        }, []),
        _ = i.useCallback(async () => {
            if (!f && null != e && null != t && null != p) {
                if (null != g) return void a.default.selectPrivateChannel(g.id);
                if (!f) {
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
        }, [e, p, g, b, f, t]);
    return {
        approveRequest: async () => {
            if (!f && null != e && null != t && null != p) {
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
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, r.jsx)(i, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: p,
                            onError: b
                        });
                });
        },
        submitting: f,
        handleOpenInterview: _
    };
}
