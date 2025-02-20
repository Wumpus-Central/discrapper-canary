n.d(t, { m: () => b }), n(47120);
var r = n(192379),
    i = n(707019),
    l = n.n(i),
    o = n(881052),
    a = n(726521),
    s = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    p = n(823162),
    h = n(268699),
    f = n(9389),
    m = n(687683),
    g = n(981631);
function b(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: i, onError: b } = e,
        _ = (0, f.Z)(),
        [C, v] = r.useState(!1),
        [y, x] = r.useState(!1),
        [j, O] = r.useState(!1),
        [N, E] = r.useState(!1),
        [P, I] = r.useState(!1),
        S = C || y || j,
        Z = r.useCallback(
            async (e) => {
                if (!S) {
                    v(!0);
                    try {
                        await (0, p.e4)(e), E(!0), null == n || n();
                    } catch (t) {
                        let e = new o.Hx(t);
                        null == b || b(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [S, n, b]
        ),
        T = r.useCallback(
            async (e) => {
                if (!S) {
                    x(!0);
                    try {
                        await (0, p.gN)(e), I(!0), null == i || i();
                    } catch (t) {
                        let e = new o.Hx(t);
                        null == b || b(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [S, i, b]
        ),
        A = r.useCallback(
            async (e) => {
                if (S) return;
                x(!0);
                let t = l()(e, m.t$);
                try {
                    for (let e of t) await (0, p.r_)(e);
                    I(!0), null == i || i();
                } catch (t) {
                    let e = new o.Hx(t);
                    null == b || b(e);
                } finally {
                    x(!1);
                }
            },
            [S, i, b]
        ),
        w = r.useCallback(
            async (e) => {
                if (S) return;
                if (null != t && null == s.Z.getMutualGuilds(t.id)) {
                    O(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0
                        });
                    } catch (e) {
                    } finally {
                        O(!1);
                    }
                }
                let n = async () => {
                    var n;
                    let r = null != t ? (null === (n = s.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != r ? r : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await Z(e);
                };
                (0, h.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let r = null != t ? (null === (n = s.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: m.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [Z, S, t]
        ),
        R = r.useCallback(
            (e, t, n) => {
                let r = (r, i) => {
                        i && u.kJ.updateSetting(r),
                            r && null != t && (0, a.zd)(t),
                            Z(e.id),
                            d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                action: m.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: i,
                                non_spam_retraining_opt_in: r
                            }),
                            null != n && n();
                    },
                    i = u.kJ.getSetting();
                null == i
                    ? (0, h.V)({
                          channel: e,
                          onConfirm: r,
                          onCancel: () => {
                              d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: m.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id
                              });
                          }
                      })
                    : r(i);
            },
            [Z]
        );
    return {
        acceptMessageRequest: _ ? w : Z,
        rejectMessageRequest: T,
        rejectAll: A,
        markAsNotSpam: R,
        isAcceptLoading: C,
        isRejectLoading: y,
        isUserProfileLoading: j,
        isOptimisticAccepted: N,
        isOptimisticRejected: P
    };
}
