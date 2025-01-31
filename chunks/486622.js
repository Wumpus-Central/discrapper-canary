n.d(t, { m: () => _ }), n(47120);
var i = n(192379),
    l = n(707019),
    a = n.n(l),
    r = n(881052),
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
function _(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: l, onError: _ } = e,
        C = (0, m.Z)(),
        [x, v] = i.useState(!1),
        [E, I] = i.useState(!1),
        [b, Z] = i.useState(!1),
        [N, T] = i.useState(!1),
        [S, j] = i.useState(!1),
        A = x || E || b,
        y = i.useCallback(
            async (e) => {
                if (!A) {
                    v(!0);
                    try {
                        await (0, h.e4)(e), T(!0), null == n || n();
                    } catch (t) {
                        let e = new r.Hx(t);
                        null == _ || _(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [A, n, _]
        ),
        P = i.useCallback(
            async (e) => {
                if (!A) {
                    I(!0);
                    try {
                        await (0, h.gN)(e), j(!0), null == l || l();
                    } catch (t) {
                        let e = new r.Hx(t);
                        null == _ || _(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [A, l, _]
        ),
        R = i.useCallback(
            async (e) => {
                if (A) return;
                I(!0);
                let t = a()(e, f.t$);
                try {
                    for (let e of t) await (0, h.r_)(e);
                    j(!0), null == l || l();
                } catch (t) {
                    let e = new r.Hx(t);
                    null == _ || _(e);
                } finally {
                    I(!1);
                }
            },
            [A, l, _]
        ),
        M = i.useCallback(
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
        acceptMessageRequest: C ? M : y,
        rejectMessageRequest: P,
        rejectAll: R,
        markAsNotSpam: L,
        isAcceptLoading: x,
        isRejectLoading: E,
        isUserProfileLoading: b,
        isOptimisticAccepted: N,
        isOptimisticRejected: S
    };
}
