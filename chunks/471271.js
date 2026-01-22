n.d(t, {
    t: () => m,
}),
    n(896048);
var r = n(64700),
    l = n(424266),
    i = n.n(l),
    a = n(198982),
    s = n(928658),
    o = n(622543),
    c = n(576622),
    u = n(253932),
    d = n(954571),
    f = n(966107),
    p = n(570658),
    h = n(209079),
    b = n(687599),
    g = n(652215);

function m(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: m } = e,
        A = (0, h.A)(),
        [y, O] = r.useState(!1),
        [j, v] = r.useState(!1),
        [x, E] = r.useState(!1),
        [_, C] = r.useState(!1),
        [S, I] = r.useState(!1),
        N = y || j || x,
        T = r.useCallback(
            async (e) => {
                if (!N) {
                    O(!0);
                    try {
                        await (0, f.RK)(e), C(!0), null == n || n();
                    } catch (t) {
                        let e = new a.LG(t);
                        null == m || m(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [N, n, m],
        ),
        P = r.useCallback(
            async (e) => {
                if (!N) {
                    v(!0);
                    try {
                        await (0, f.UK)(e), I(!0), null == l || l();
                    } catch (t) {
                        let e = new a.LG(t);
                        null == m || m(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [N, l, m],
        ),
        w = r.useCallback(
            async (e) => {
                if (N) return;
                v(!0);
                let t = i()(e, 50);
                try {
                    for (let e of t) await (0, f.ST)(e);
                    I(!0), null == l || l();
                } catch (t) {
                    let e = new a.LG(t);
                    null == m || m(e);
                } finally {
                    v(!1);
                }
            },
            [N, l, m],
        ),
        R = r.useCallback(
            async (e) => {
                if (N) return;
                if (null != t && null == o.A.getMutualGuilds(t.id)) {
                    E(!0);
                    try {
                        await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0,
                        });
                    } catch (e) {
                    } finally {
                        E(!1);
                    }
                }
                let n = async () => {
                    var n;
                    let r =
                        null != t ? (null == (n = o.A.getMutualGuilds(t.id)) ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                        action: b.LD.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != r ? r : [],
                        other_user_id: null == t ? void 0 : t.id,
                    }),
                        await T(e);
                };
                (0, p.o)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let r =
                            null != t
                                ? null == (n = o.A.getMutualGuilds(t.id))
                                    ? void 0
                                    : n.map((e) => e.guild.id)
                                : [];
                        d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                            action: b.LD.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id,
                        });
                    },
                });
            },
            [T, N, t],
        ),
        D = r.useCallback(
            (e, t, n) => {
                let r = (r, l) => {
                        l && u.WY.updateSetting(r),
                            r && null != t && (0, s.tJ)(t),
                            T(e.id),
                            d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                                action: b.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: l,
                                non_spam_retraining_opt_in: r,
                            }),
                            null != n && n();
                    },
                    l = u.WY.getSetting();
                null == l
                    ? (0, p.v)({
                          channel: e,
                          onConfirm: r,
                          onCancel: () => {
                              d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                                  action: b.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : r(l);
            },
            [T],
        );
    return {
        acceptMessageRequest: A ? R : T,
        rejectMessageRequest: P,
        rejectAll: w,
        markAsNotSpam: D,
        isAcceptLoading: y,
        isRejectLoading: j,
        isUserProfileLoading: x,
        isOptimisticAccepted: _,
        isOptimisticRejected: S,
    };
}
