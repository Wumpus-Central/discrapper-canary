(n.d(t, { s: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(287734),
    l = n(592125),
    c = n(693546),
    u = n(246364),
    d = n(388032);
function f(e, t, f, _) {
    let [p, h] = i.useState(!1),
        m = (0, a.e7)([l.Z], () => l.Z.getChannel(_)),
        g = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(d.intl.string(d.t.R0RpRU), o.ToastType.FAILURE));
        }, []),
        E = i.useCallback(async () => {
            if (!p && null != e && null != t && null != f) {
                if (null != m) return void s.default.selectPrivateChannel(m.id);
                if (!p) {
                    h(!0);
                    try {
                        await c.Z.createOrEnterJoinRequestInterview(f);
                    } catch (e) {
                        g();
                    } finally {
                        h(!1);
                    }
                }
            }
        }, [e, f, m, g, p, t]);
    return {
        approveRequest: async () => {
            if (!p && null != e && null != t && null != f) {
                h(!0);
                try {
                    await c.Z.updateGuildJoinRequest(e, t, f, u.wB.APPROVED);
                } catch (e) {
                    g();
                } finally {
                    h(!1);
                }
            }
        },
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != f &&
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, r.jsx)(i, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: f,
                            onError: g
                        });
                });
        },
        submitting: p,
        handleOpenInterview: E
    };
}
