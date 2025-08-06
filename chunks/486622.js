n.d(t, { m: () => g }), n(388685);
var r = n(73800),
    i = n(707019),
    o = n.n(i),
    a = n(881052),
    s = n(726521),
    l = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    f = n(823162),
    _ = n(268699),
    p = n(9389),
    h = n(687683),
    m = n(981631);
function g(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: i, onError: g } = e,
        E = (0, p.Z)(),
        [b, y] = r.useState(!1),
        [O, v] = r.useState(!1),
        [I, T] = r.useState(!1),
        [S, A] = r.useState(!1),
        [N, C] = r.useState(!1),
        R = b || O || I,
        P = r.useCallback(
            async (e) => {
                if (!R) {
                    y(!0);
                    try {
                        await (0, f.e4)(e), A(!0), null == n || n();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == g || g(e);
                    } finally {
                        y(!1);
                    }
                }
            },
            [R, n, g],
        ),
        w = r.useCallback(
            async (e) => {
                if (!R) {
                    v(!0);
                    try {
                        await (0, f.gN)(e), C(!0), null == i || i();
                    } catch (t) {
                        let e = new a.Hx(t);
                        null == g || g(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [R, i, g],
        ),
        D = r.useCallback(
            async (e) => {
                if (R) return;
                v(!0);
                let t = o()(e, h.t$);
                try {
                    for (let e of t) await (0, f.r_)(e);
                    C(!0), null == i || i();
                } catch (t) {
                    let e = new a.Hx(t);
                    null == g || g(e);
                } finally {
                    v(!1);
                }
            },
            [R, i, g],
        ),
        L = r.useCallback(
            async (e) => {
                if (R) return;
                if (null != t && null == l.Z.getMutualGuilds(t.id)) {
                    T(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0,
                        });
                    } catch (e) {
                    } finally {
                        T(!1);
                    }
                }
                let n = () => {
                        var n;
                        let r =
                            null != t
                                ? null == (n = l.Z.getMutualGuilds(t.id))
                                    ? void 0
                                    : n.map((e) => e.guild.id)
                                : [];
                        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
                            action: h.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id,
                        });
                    },
                    r = async () => {
                        var n;
                        let r =
                            null != t
                                ? null == (n = l.Z.getMutualGuilds(t.id))
                                    ? void 0
                                    : n.map((e) => e.guild.id)
                                : [];
                        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
                            action: h.cl.ACCEPT_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != r ? r : [],
                            other_user_id: null == t ? void 0 : t.id,
                        }),
                            await P(e);
                    };
                (0, _.H)({
                    channelId: e,
                    onConfirm: r,
                    onCancel: n,
                });
            },
            [P, R, t],
        ),
        x = r.useCallback(
            (e, t, n) => {
                let r = (r, i) => {
                        i && u.kJ.updateSetting(r),
                            r && null != t && (0, s.zd)(t),
                            P(e.id),
                            d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
                                action: h.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: i,
                                non_spam_retraining_opt_in: r,
                            }),
                            null != n && n();
                    },
                    i = () => {
                        d.default.track(m.rMx.MESSAGE_REQUEST_ACTION, {
                            action: h.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                            channel_id: e.id,
                        });
                    },
                    o = u.kJ.getSetting();
                null == o
                    ? (0, _.V)({
                          channel: e,
                          onConfirm: r,
                          onCancel: i,
                      })
                    : r(o);
            },
            [P],
        );
    return {
        acceptMessageRequest: E ? L : P,
        rejectMessageRequest: w,
        rejectAll: D,
        markAsNotSpam: x,
        isAcceptLoading: b,
        isRejectLoading: O,
        isUserProfileLoading: I,
        isOptimisticAccepted: S,
        isOptimisticRejected: N,
    };
}
