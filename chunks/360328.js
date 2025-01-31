n.d(t, { s: () => h }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(287734),
    o = n(592125),
    c = n(693546),
    d = n(246364),
    u = n(388032);
function h(e, t, h, p) {
    let [m, f] = l.useState(!1),
        g = (0, a.e7)([o.Z], () => o.Z.getChannel(p)),
        _ = l.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(u.intl.string(u.t.R0RpRU), r.ToastType.FAILURE));
        }, []),
        C = l.useCallback(async () => {
            if (!m && null != e && null != t && null != h) {
                if (null != g) {
                    s.default.selectPrivateChannel(g.id);
                    return;
                }
                if (!m) {
                    f(!0);
                    try {
                        await c.Z.createOrEnterJoinRequestInterview(h);
                    } catch {
                        _();
                    } finally {
                        f(!1);
                    }
                }
            }
        }, [e, h, g, _, m, t]);
    return {
        approveRequest: async () => {
            if (!m && null != e && null != t && null != h) {
                f(!0);
                try {
                    await c.Z.updateGuildJoinRequest(e, t, h, d.wB.APPROVED);
                } catch {
                    _();
                } finally {
                    f(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != h &&
                (0, r.ZDy)(async () => {
                    let { default: l } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(l, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: h,
                            onError: _
                        });
                });
        },
        submitting: m,
        handleOpenInterview: C
    };
}
