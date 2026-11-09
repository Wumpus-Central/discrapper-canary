n.d(t, { t: () => C });
var l = n(582128),
    i = n(800754),
    s = n.n(i),
    a = n(627784),
    r = n(928658),
    o = n(851767),
    c = n(917445),
    d = n(253932),
    u = n(129230),
    h = n(966107),
    m = n(477900),
    g = n(192308),
    p = n(687599),
    A = n(652215),
    f = n(467840);
function C(e) {
    let { user: t, onAcceptSuccess: i, onRejectSuccess: C, onError: E } = e,
        x = (0, f.A)(),
        [I, S] = l.useState(!1),
        [y, b] = l.useState(!1),
        [_, j] = l.useState(!1),
        [v, N] = l.useState(!1),
        [T, M] = l.useState(!1),
        R = I || y || _,
        D = l.useCallback(
            async (e) => {
                if (!R) {
                    S(!0);
                    try {
                        (await (0, h.RK)(e), N(!0), i?.());
                    } catch (t) {
                        let e = new a.LG(t);
                        E?.(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [R, i, E],
        ),
        k = l.useCallback(
            async (e) => {
                if (!R) {
                    b(!0);
                    try {
                        (await (0, h.UK)(e), M(!0), C?.());
                    } catch (t) {
                        let e = new a.LG(t);
                        E?.(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [R, C, E],
        ),
        L = l.useCallback(
            async (e) => {
                if (R) return;
                b(!0);
                let t = s()(e, 50);
                try {
                    for (let e of t) await (0, h.ST)(e);
                    (M(!0), C?.());
                } catch (t) {
                    let e = new a.LG(t);
                    E?.(e);
                } finally {
                    b(!1);
                }
            },
            [R, C, E],
        ),
        P = l.useCallback(
            async (e) => {
                if (!R) {
                    if (null != t && null == o.A.getMutualGuilds(t.id)) {
                        j(!0);
                        try {
                            await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                                withMutualGuilds: !0,
                                withMutualFriendsCount: !0,
                            });
                        } catch (e) {
                        } finally {
                            j(!1);
                        }
                    }
                    !(function (e) {
                        let { channelId: t, onConfirm: l, onCancel: i } = e;
                        (u.default.track(A.HAw.OPEN_MODAL, { type: p.PY, channel_id: t }),
                            (0, g.mM)(async () => {
                                let { default: e } = await n.e(661841).then(n.bind(n, 987176));
                                return (t) => (0, m.jsx)(e, { onConfirm: l, onDismiss: i, ...t });
                            }));
                    })({
                        channelId: e,
                        onConfirm: async function () {
                            let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                            (u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                                action: p.LD.ACCEPT_CONFIRMATION_PROMPT,
                                channel_id: e,
                                mutual_guild_ids: n ?? [],
                                other_user_id: t?.id,
                            }),
                                await D(e));
                        },
                        onCancel: function () {
                            let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                            u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                                action: p.LD.DISMISS_CONFIRMATION_PROMPT,
                                channel_id: e,
                                mutual_guild_ids: n ?? [],
                                other_user_id: t?.id,
                            });
                        },
                    });
                }
            },
            [D, R, t],
        ),
        O = l.useCallback(
            (e, t, l) => {
                function i(n, i) {
                    (i && d.WY.updateSetting(n),
                        n && null != t && (0, r.tJ)(t),
                        D(e.id),
                        u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                            action: p.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                            channel_id: e.id,
                            is_dont_show_again_checked: i,
                            non_spam_retraining_opt_in: n,
                        }),
                        null != l && l());
                }
                let s = d.WY.getSetting();
                null == s
                    ? (function (e) {
                          let { onConfirm: t, onCancel: l } = e;
                          (0, g.mM)(async () => {
                              let { default: e } = await n.e(19729).then(n.bind(n, 693864));
                              return (n) => (0, m.jsx)(e, { onConfirm: t, onDismiss: l, ...n });
                          });
                      })({
                          channel: e,
                          onConfirm: i,
                          onCancel: function () {
                              u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                                  action: p.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : i(s);
            },
            [D],
        );
    return {
        acceptMessageRequest: x ? P : D,
        rejectMessageRequest: k,
        rejectAll: L,
        markAsNotSpam: O,
        isAcceptLoading: I,
        isRejectLoading: y,
        isUserProfileLoading: _,
        isOptimisticAccepted: v,
        isOptimisticRejected: T,
    };
}
