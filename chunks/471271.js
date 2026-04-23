n.d(t, { t: () => p });
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
    g = n(687599),
    _ = n(652215);
function p(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: p } = e,
        f = (0, A.A)(),
        [E, C] = i.useState(!1),
        [x, S] = i.useState(!1),
        [I, v] = i.useState(!1),
        [N, T] = i.useState(!1),
        [y, b] = i.useState(!1),
        j = E || x || I,
        R = i.useCallback(
            async (e) => {
                if (!j) {
                    C(!0);
                    try {
                        await (0, h.RK)(e), T(!0), n?.();
                    } catch (t) {
                        let e = new s.LG(t);
                        p?.(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [j, n, p],
        ),
        M = i.useCallback(
            async (e) => {
                if (!j) {
                    S(!0);
                    try {
                        await (0, h.UK)(e), b(!0), l?.();
                    } catch (t) {
                        let e = new s.LG(t);
                        p?.(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [j, l, p],
        ),
        L = i.useCallback(
            async (e) => {
                if (j) return;
                S(!0);
                let t = a()(e, 50);
                try {
                    for (let e of t) await (0, h.ST)(e);
                    b(!0), l?.();
                } catch (t) {
                    let e = new s.LG(t);
                    p?.(e);
                } finally {
                    S(!1);
                }
            },
            [j, l, p],
        ),
        D = i.useCallback(
            async (e) => {
                if (j) return;
                if (null != t && null == o.A.getMutualGuilds(t.id)) {
                    v(!0);
                    try {
                        await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0,
                        });
                    } catch (e) {
                    } finally {
                        v(!1);
                    }
                }
                let n = async () => {
                    let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                    u.default.track(_.HAw.MESSAGE_REQUEST_ACTION, {
                        action: g.LD.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: n ?? [],
                        other_user_id: t?.id,
                    }),
                        await R(e);
                };
                (0, m.o)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                        u.default.track(_.HAw.MESSAGE_REQUEST_ACTION, {
                            action: g.LD.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: n ?? [],
                            other_user_id: t?.id,
                        });
                    },
                });
            },
            [R, j, t],
        ),
        P = i.useCallback(
            (e, t, n) => {
                let i = (i, l) => {
                        l && d.WY.updateSetting(i),
                            i && null != t && (0, r.tJ)(t),
                            R(e.id),
                            u.default.track(_.HAw.MESSAGE_REQUEST_ACTION, {
                                action: g.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
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
                              u.default.track(_.HAw.MESSAGE_REQUEST_ACTION, {
                                  action: g.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : i(l);
            },
            [R],
        );
    return {
        acceptMessageRequest: f ? D : R,
        rejectMessageRequest: M,
        rejectAll: L,
        markAsNotSpam: P,
        isAcceptLoading: E,
        isRejectLoading: x,
        isUserProfileLoading: I,
        isOptimisticAccepted: N,
        isOptimisticRejected: y,
    };
}
