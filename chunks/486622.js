n.d(t, { m: () => b }), n(388685);
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
        [y, x] = r.useState(!1),
        [C, v] = r.useState(!1),
        [j, O] = r.useState(!1),
        [E, I] = r.useState(!1),
        [P, S] = r.useState(!1),
        Z = y || C || j,
        N = r.useCallback(
            async (e) => {
                if (!Z) {
                    x(!0);
                    try {
                        await (0, p.e4)(e), I(!0), null == n || n();
                    } catch (t) {
                        let e = new o.Hx(t);
                        null == b || b(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [Z, n, b]
        ),
        T = r.useCallback(
            async (e) => {
                if (!Z) {
                    v(!0);
                    try {
                        await (0, p.gN)(e), S(!0), null == i || i();
                    } catch (t) {
                        let e = new o.Hx(t);
                        null == b || b(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [Z, i, b]
        ),
        A = r.useCallback(
            async (e) => {
                if (Z) return;
                v(!0);
                let t = l()(e, m.t$);
                try {
                    for (let e of t) await (0, p.r_)(e);
                    S(!0), null == i || i();
                } catch (t) {
                    let e = new o.Hx(t);
                    null == b || b(e);
                } finally {
                    v(!1);
                }
            },
            [Z, i, b]
        ),
        w = r.useCallback(
            async (e) => {
                if (Z) return;
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
                    let r = null != t ? (null == (n = s.Z.getMutualGuilds(t.id)) ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != r ? r : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await N(e);
                };
                (0, h.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let r = null != t ? (null == (n = s.Z.getMutualGuilds(t.id)) ? void 0 : n.map((e) => e.guild.id)) : [];
                        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: m.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [N, Z, t]
        ),
        R = r.useCallback(
            (e, t, n) => {
                let r = (r, i) => {
                        i && u.kJ.updateSetting(r),
                            r && null != t && (0, a.zd)(t),
                            N(e.id),
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
            [N]
        );
    return {
        acceptMessageRequest: _ ? w : N,
        rejectMessageRequest: T,
        rejectAll: A,
        markAsNotSpam: R,
        isAcceptLoading: y,
        isRejectLoading: C,
        isUserProfileLoading: j,
        isOptimisticAccepted: E,
        isOptimisticRejected: P
    };
}
