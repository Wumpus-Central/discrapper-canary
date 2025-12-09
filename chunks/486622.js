n.d(t, { m: () => b }), n(388685);
var i = n(473749),
    r = n(707019),
    l = n.n(r),
    a = n(881052),
    o = n(726521),
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
    let { user: t, onAcceptSuccess: n, onRejectSuccess: r, onError: b } = e,
        C = (0, f.Z)(),
        [y, _] = i.useState(!1),
        [v, O] = i.useState(!1),
        [x, E] = i.useState(!1),
        [j, S] = i.useState(!1),
        [P, I] = i.useState(!1),
        Z = y || v || x,
        T = i.useCallback(
            async (e) => {
                if (!Z) {
                    _(!0);
                    try {
                        await (0, p.e4)(e), S(!0), null == n || n();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == b || b(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [Z, n, b],
        ),
        N = i.useCallback(
            async (e) => {
                if (!Z) {
                    O(!0);
                    try {
                        await (0, p.gN)(e), I(!0), null == r || r();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == b || b(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [Z, r, b],
        ),
        A = i.useCallback(
            async (e) => {
                if (Z) return;
                O(!0);
                let t = l()(e, m.t$);
                try {
                    for (let e of t) await (0, p.r_)(e);
                    I(!0), null == r || r();
                } catch (t) {
                    let e = new a.Hx(t);
                    null == b || b(e);
                } finally {
                    O(!1);
                }
            },
            [Z, r, b],
        ),
        w = i.useCallback(
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
                    let i =
                        null != t ? (null == (n = s.Z.getMutualGuilds(t.id)) ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                        action: m.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != i ? i : [],
                        other_user_id: null == t ? void 0 : t.id,
                    }),
                        await T(e);
                };
                (0, h.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let i =
                            null != t
                                ? null == (n = s.Z.getMutualGuilds(t.id))
                                    ? void 0
                                    : n.map((e) => e.guild.id)
                                : [];
                        d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                            action: m.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != i ? i : [],
                            other_user_id: null == t ? void 0 : t.id,
                        });
                    },
                });
            },
            [T, Z, t],
        ),
        M = i.useCallback(
            (e, t, n) => {
                let i = (i, r) => {
                        r && u.kJ.updateSetting(i),
                            i && null != t && (0, o.zd)(t),
                            T(e.id),
                            d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                action: m.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: r,
                                non_spam_retraining_opt_in: i,
                            }),
                            null != n && n();
                    },
                    r = u.kJ.getSetting();
                null == r
                    ? (0, h.V)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              d.default.track(g.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: m.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : i(r);
            },
            [T],
        );
    return {
        acceptMessageRequest: C ? w : T,
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
