n.d(t, { m: () => b }), n(388685);
var r = n(647438),
    i = n(707019),
    l = n.n(i),
    a = n(881052),
    o = n(726521),
    s = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    p = n(823162),
    f = n(268699),
    h = n(9389),
    m = n(687683),
    g = n(981631);
function b(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: i, onError: b } = e,
        _ = (0, h.Z)(),
        [y, C] = r.useState(!1),
        [v, O] = r.useState(!1),
        [x, E] = r.useState(!1),
        [j, S] = r.useState(!1),
        [P, I] = r.useState(!1),
        Z = y || v || x,
        T = r.useCallback(
            async (e) => {
                if (!Z) {
                    C(!0);
                    try {
                        await (0, p.e4)(e), S(!0), null == n || n();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == b || b(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [Z, n, b],
        ),
        N = r.useCallback(
            async (e) => {
                if (!Z) {
                    O(!0);
                    try {
                        await (0, p.gN)(e), I(!0), null == i || i();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == b || b(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [Z, i, b],
        ),
        A = r.useCallback(
            async (e) => {
                if (Z) return;
                O(!0);
                let t = l()(e, m.t$);
                try {
                    for (let e of t) await (0, p.r_)(e);
                    I(!0), null == i || i();
                } catch (t) {
                    let e = new a.Hx(t);
                    null == b || b(e);
                } finally {
                    O(!1);
                }
            },
            [Z, i, b],
        ),
        w = r.useCallback(
            async (e) => {
                if (Z) return;
                if (null != t && null == s.Z.getMutualGuilds(t.id)) {
                    E(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
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
                        null != t ? (null == (n = s.Z.getMutualGuilds(t.id)) ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != r ? r : [],
                        other_user_id: null == t ? void 0 : t.id,
                    }),
                        await T(e);
                };
                (0, f.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let r =
                            null != t
                                ? null == (n = s.Z.getMutualGuilds(t.id))
                                    ? void 0
                                    : n.map((e) => e.guild.id)
                                : [];
                        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: m.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id,
                        });
                    },
                });
            },
            [T, Z, t],
        ),
        M = r.useCallback(
            (e, t, n) => {
                let r = (r, i) => {
                        i && u.kJ.updateSetting(r),
                            r && null != t && (0, o.zd)(t),
                            T(e.id),
                            d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                action: m.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: i,
                                non_spam_retraining_opt_in: r,
                            }),
                            null != n && n();
                    },
                    i = u.kJ.getSetting();
                null == i
                    ? (0, f.V)({
                          channel: e,
                          onConfirm: r,
                          onCancel: () => {
                              d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: m.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : r(i);
            },
            [T],
        );
    return {
        acceptMessageRequest: _ ? w : T,
        rejectMessageRequest: N,
        rejectAll: A,
        markAsNotSpam: M,
        isAcceptLoading: y,
        isRejectLoading: v,
        isUserProfileLoading: x,
        isOptimisticAccepted: j,
        isOptimisticRejected: P,
    };
}
