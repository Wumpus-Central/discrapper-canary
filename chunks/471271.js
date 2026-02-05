n.d(t, { t: () => f });
var i = n(64700),
    l = n(424266),
    a = n.n(l),
    s = n(198982),
    r = n(928658),
    o = n(622543),
    c = n(576622),
    d = n(253932),
    u = n(954571),
    h = n(966107),
    m = n(570658),
    A = n(209079),
    p = n(687599),
    g = n(652215);
function f(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: f } = e,
        _ = (0, A.A)(),
        [E, C] = i.useState(!1),
        [x, S] = i.useState(!1),
        [T, I] = i.useState(!1),
        [N, v] = i.useState(!1),
        [y, b] = i.useState(!1),
        R = E || x || T,
        j = i.useCallback(
            async (e) => {
                if (!R) {
                    C(!0);
                    try {
                        await (0, h.RK)(e), v(!0), n?.();
                    } catch (t) {
                        let e = new s.LG(t);
                        f?.(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [R, n, f],
        ),
        M = i.useCallback(
            async (e) => {
                if (!R) {
                    S(!0);
                    try {
                        await (0, h.UK)(e), b(!0), l?.();
                    } catch (t) {
                        let e = new s.LG(t);
                        f?.(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [R, l, f],
        ),
        D = i.useCallback(
            async (e) => {
                if (R) return;
                S(!0);
                let t = a()(e, 50);
                try {
                    for (let e of t) await (0, h.ST)(e);
                    b(!0), l?.();
                } catch (t) {
                    let e = new s.LG(t);
                    f?.(e);
                } finally {
                    S(!1);
                }
            },
            [R, l, f],
        ),
        O = i.useCallback(
            async (e) => {
                if (R) return;
                if (null != t && null == o.A.getMutualGuilds(t.id)) {
                    I(!0);
                    try {
                        await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0,
                        });
                    } catch (e) {
                    } finally {
                        I(!1);
                    }
                }
                let n = async () => {
                    let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                    u.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                        action: p.LD.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: n ?? [],
                        other_user_id: t?.id,
                    }),
                        await j(e);
                };
                (0, m.o)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                        u.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                            action: p.LD.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: n ?? [],
                            other_user_id: t?.id,
                        });
                    },
                });
            },
            [j, R, t],
        ),
        L = i.useCallback(
            (e, t, n) => {
                let i = (i, l) => {
                        l && d.WY.updateSetting(i),
                            i && null != t && (0, r.tJ)(t),
                            j(e.id),
                            u.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                                action: p.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: l,
                                non_spam_retraining_opt_in: i,
                            }),
                            null != n && n();
                    },
                    l = d.WY.getSetting();
                null == l
                    ? (0, m.v)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              u.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                                  action: p.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : i(l);
            },
            [j],
        );
    return {
        acceptMessageRequest: _ ? O : j,
        rejectMessageRequest: M,
        rejectAll: D,
        markAsNotSpam: L,
        isAcceptLoading: E,
        isRejectLoading: x,
        isUserProfileLoading: T,
        isOptimisticAccepted: N,
        isOptimisticRejected: y,
    };
}
