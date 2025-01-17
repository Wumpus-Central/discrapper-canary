n.d(t, {
    m: function () {
        return C;
    }
}),
    n(47120);
var i = n(192379),
    l = n(707019),
    r = n.n(l),
    a = n(881052),
    s = n(726521),
    o = n(621853),
    c = n(484459),
    d = n(695346),
    u = n(626135),
    h = n(823162),
    p = n(268699),
    m = n(9389),
    f = n(687683),
    g = n(981631);
function C(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: C } = e,
        x = (0, m.Z)(),
        [v, _] = i.useState(!1),
        [I, E] = i.useState(!1),
        [b, Z] = i.useState(!1),
        [S, N] = i.useState(!1),
        [T, j] = i.useState(!1),
        A = v || I || b,
        y = i.useCallback(
            async (e) => {
                if (!A) {
                    _(!0);
                    try {
                        await (0, h.e4)(e), N(!0), null == n || n();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == C || C(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [A, n, C]
        ),
        P = i.useCallback(
            async (e) => {
                if (!A) {
                    E(!0);
                    try {
                        await (0, h.gN)(e), j(!0), null == l || l();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == C || C(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [A, l, C]
        ),
        M = i.useCallback(
            async (e) => {
                if (A) return;
                E(!0);
                let t = r()(e, f.t$);
                try {
                    for (let e of t) await (0, h.r_)(e);
                    j(!0), null == l || l();
                } catch (t) {
                    let e = new a.Hx(t);
                    null == C || C(e);
                } finally {
                    E(!1);
                }
            },
            [A, l, C]
        ),
        R = i.useCallback(
            async (e) => {
                if (A) return;
                if (null != t && null == o.Z.getMutualGuilds(t.id)) {
                    Z(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0
                        });
                    } catch (e) {
                    } finally {
                        Z(!1);
                    }
                }
                let n = async () => {
                    var n;
                    let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                    u.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: f.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != i ? i : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await y(e);
                };
                (0, p.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                        u.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: f.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != i ? i : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [y, A, t]
        ),
        L = i.useCallback(
            (e, t, n) => {
                let i = (i, l) => {
                        l && d.kJ.updateSetting(i),
                            i && null != t && (0, s.zd)(t),
                            y(e.id),
                            u.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                action: f.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: l,
                                non_spam_retraining_opt_in: i
                            }),
                            null != n && n();
                    },
                    l = d.kJ.getSetting();
                null == l
                    ? (0, p.V)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              u.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: f.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id
                              });
                          }
                      })
                    : i(l);
            },
            [y]
        );
    return {
        acceptMessageRequest: x ? R : y,
        rejectMessageRequest: P,
        rejectAll: M,
        markAsNotSpam: L,
        isAcceptLoading: v,
        isRejectLoading: I,
        isUserProfileLoading: b,
        isOptimisticAccepted: S,
        isOptimisticRejected: T
    };
}
