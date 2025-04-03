n.d(t, {
    F6: () => U,
    _Y: () => X,
    cG: () => G,
    ly: () => B,
    oL: () => Q,
    vo: () => Z
}),
    n(47120),
    n(789020),
    n(411104);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(668781),
    u = n(87051),
    d = n(181945),
    f = n(149071),
    _ = n(516373),
    p = n(480294),
    h = n(650774),
    m = n(888369),
    g = n(430824),
    E = n(771845),
    b = n(9156),
    y = n(626135),
    v = n(630388),
    O = n(823379),
    I = n(960048),
    S = n(709054),
    T = n(223683),
    N = n(630114),
    A = n(506712),
    C = n(468788),
    R = n(789662),
    P = n(981631),
    w = n(490897),
    D = n(526761),
    L = n(388032);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    let [n, i] = r.useState(R.nf),
        [o, s] = r.useState({});
    (0, _.D)();
    let l = (0, a.Wu)([g.Z], () => Object.values(g.Z.getGuilds())),
        c = r.useCallback(() => {
            let r = {};
            for (let i of l) r[i.id] = F(i, n, e, t, o[i.id]);
            return r;
        }, [l, n, e, t, o]),
        [u, d] = r.useState(() => c());
    return (
        r.useEffect(() => d(c()), [c]),
        {
            guildPlans: u,
            overrideGuild: r.useCallback((e, t) => {
                s((n) => j(M({}, n), { [e]: t }));
            }, []),
            setThresholds: i,
            getDebug: () => V(Object.values(u), t)
        }
    );
}
function G(e, t) {
    return Object.values(g.Z.getGuilds()).some((n) => {
        let [r] = p.Z.hasConsented(P.pjP.PERSONALIZATION) ? (0, A.q)(n, R.nf, e, t, !1) : (0, A.A)(n, e);
        return r === R.AR.UseGreyDot;
    });
}
function B() {
    let e = Object.values(g.Z.getGuilds()),
        t = {};
    for (let i of e) {
        var n, r;
        let e = null != (r = (null != (n = b.ZP.getAllSettings().userGuildSettings[i.id]) ? n : {}).flags) ? r : 0;
        (e = (0, v.mB)(e, D.vc.UNREADS_ALL_MESSAGES, !0)), (e = (0, v.mB)(e, D.vc.UNREADS_ONLY_MENTIONS, !1)), (t[i.id] = { flags: e });
    }
    Y(t),
        y.default.track(P.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter((e) => m.default.hasUnread(e.id)).length
        });
}
function F(e, t, n, r, i) {
    var o;
    let [a, s, l] = p.Z.hasConsented(P.pjP.PERSONALIZATION) ? (0, A.q)(e, t, n, r, !0) : (0, A.A)(e, n),
        c = null != (o = n.filter((t) => t.guild_id === e.id)[0]) ? o : {},
        u = (0, N.Z)(e, null != i ? i : a, c, r, t);
    return {
        guildId: e.id,
        mode: a,
        debugReason: l,
        actions: u,
        overrideMode: i,
        messagePain: c.messages === R.XR.High,
        visitsALot: s,
        muted: b.ZP.isMuted(e.id) && !b.ZP.isTemporarilyMuted(e.id)
    };
}
function V(e, t) {
    let n = t.reduce((e, t) => {
            var n;
            return e + Number(null != (n = t.num_year_opens) ? n : 0);
        }, 0),
        r = t.reduce((e, t) => {
            var n;
            return e + Number(null != (n = t.num_month_opens) ? n : 0);
        }, 0),
        i = E.ZP.getFlattenedGuildIds(),
        a = o().sortBy(Object.values(e), (e) => {
            let t = i.indexOf(e.guildId);
            return -1 === t ? i.length : t;
        }),
        s = [
            ['Use Grey Dot', new Set([R.AR.UseGreyDot])],
            ['Keep As Is', new Set([R.AR.KeepAsIs])]
        ].map((e) => {
            let [t, n] = e,
                r = a
                    .filter((e) => {
                        var t;
                        return n.has(null != (t = e.overrideMode) ? t : e.mode);
                    })
                    .map((e) => {
                        let t = g.Z.getGuild(e.guildId),
                            n = e.actions
                                .map((e) => {
                                    var t;
                                    return '- '.concat(e.label).concat(null != (t = e.debug) ? t : '');
                                })
                                .join('\n');
                        return '### '.concat(t.name, '\n**Reasoning**: ').concat(e.debugReason, '**ActionPlan**:\n').concat(n);
                    });
            return '# '.concat(t, '\n\n').concat(r.join('\n\n'));
        });
    return '\n# Basic Stats\n- Total channel visits (yr): '.concat(n, '\n- Total channel visits (month): ').concat(r, '\n\n').concat(s.join('\n\n'));
}
function Z(e) {
    let [t, n] = r.useState(!1),
        [i, o] = r.useState(!1),
        a = r.useCallback(
            async (t) => {
                if (i) throw Error('Already submitted notifications migration');
                n(!0);
                try {
                    await H(t, e), o(!0);
                } finally {
                    n(!1);
                }
            },
            [i, e]
        );
    return {
        submitting: t,
        submitted: i,
        saveSettings: a
    };
}
async function H(e, t) {
    if (b.ZP.useNewNotifications)
        return void c.Z.show({
            title: 'Info',
            body: 'It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!'
        });
    let n = W(e);
    try {
        let t = {};
        for (let n of Object.values(e)) {
            var r, i;
            let e = null != (r = b.ZP.getAllSettings().userGuildSettings[n.guildId]) ? r : {},
                o = {};
            for (let t of n.actions) null == (i = t.apply) || i.call(t, o, e);
            t[n.guildId] = o;
        }
        await Y(t);
        let o = Object.values(e)
            .filter((e) => e.actions.some((e) => e.needsMarkedAsRead))
            .map((e) => e.guildId);
        if (o.length > 0) {
            let e = setTimeout(n, 5000);
            (0, d.Z)(o, void 0, () => {
                l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' }), clearTimeout(e), n();
            });
        } else n();
    } catch (e) {
        I.Z.captureException(e),
            c.Z.show({
                title: L.NW.string(L.t.j2d6Ki),
                body: L.NW.string(L.t.mCjLAQ),
                onConfirm: t
            });
    }
}
function W(e) {
    let t = Object.values(e)
            .filter((e) => {
                var t;
                return (null != (t = e.overrideMode) ? t : e.mode) === R.AR.UseGreyDot;
            })
            .map((e) => {
                var t;
                return {
                    plan: e,
                    memberCount: null != (t = h.Z.getMemberCount(e.guildId)) ? t : 0
                };
            }),
        n = {
            num_unread_guilds_before: S.default.keys(e).filter((e) => m.default.hasUnread(e)).length,
            unmuted_server_ids: t.filter((e) => b.ZP.isMuted(e.plan.guildId)).map((e) => e.plan.guildId)
        };
    return () => {
        y.default.track(
            P.rMx.NOTIFICATION_MIGRATION_COMPLETED,
            j(M({}, n), {
                auto_migrated: !0,
                pre_selected_server_ids: Object.values(e)
                    .filter((e) => e.mode === R.AR.UseGreyDot)
                    .map((e) => e.guildId),
                final_selected_server_ids: t.map((e) => e.plan.guildId),
                num_unread_guids_after: S.default.keys(e).filter((e) => m.default.hasUnread(e)).length,
                num_tiny_servers_selected: t.filter((e) => e.memberCount <= 20).length,
                num_small_servers_selected: t.filter((e) => e.memberCount > 20 && e.memberCount <= 200).length,
                num_medium_servers_selected: t.filter((e) => e.memberCount > 200 && e.memberCount <= 1000).length,
                num_large_servers_selected: t.filter((e) => e.memberCount > 1000).length,
                num_quiet_servers_selected: t.filter((e) => !e.plan.messagePain).length,
                num_busy_servers_selected: t.filter((e) => e.plan.messagePain).length,
                num_frequent_visited_servers_selected: t.filter((e) => e.plan.visitsALot).length,
                num_infrequent_visited_servers_selected: t.filter((e) => !e.plan.visitsALot).length
            })
        );
    };
}
async function Y(e) {
    await K(() => z()), await K(() => u.Z.setAccountFlag(C.c.USE_NEW_NOTIFICATIONS, !0));
    let t = await K(() => f.Z.saveUserGuildSettingsBulk(e));
    l.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
        userGuildSettings: t
    }),
        l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' });
}
async function K(e) {
    for (let t = 0; t < 3; t++)
        try {
            return await e();
        } catch (e) {
            await new Promise((e) => setTimeout(e, 1000 * (t + 1)));
        }
    return await e();
}
async function z() {
    let e = await (0, T.Tn)();
    e.length > 0 ? (await q()) && (0, T.dt)(e) : (0, T.$U)('Backup from '.concat(new Date().toLocaleDateString()));
}
function q() {
    return new Promise((e) => {
        c.Z.show({
            title: 'Create new Backup?',
            body: 'It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?',
            confirmText: 'Take New Backup',
            cancelText: 'Skip Backup',
            onConfirm: () => e(!0),
            onCancel: () => e(!1)
        });
    });
}
async function Q() {
    s.K.set('turnedOffNewNotifications', !0), y.default.track(P.rMx.NOTIFICATION_MIGRATION_OPTOUT, { num_guilds_with_new_setting: Object.values(g.Z.getGuilds()).filter((e) => b.ZP.resolveGuildUnreadSetting(e) === w.i.ONLY_MENTIONS).length });
    let e = await (0, T.Tn)(),
        t = o().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    if (t.length > 0) {
        let e = t[t.length - 1];
        await new Promise((t) =>
            c.Z.show({
                title: 'Please Confirm',
                body: 'This will turn off the new notification system and restore your ' + 'notification settings to a backup created on '.concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: 'Cancel',
                onCancel: () => {}
            })
        ),
            await (0, T.xx)(e.id),
            await u.Z.setAccountFlag(C.c.USE_NEW_NOTIFICATIONS, !1);
    } else await u.Z.setAccountFlag(C.c.USE_NEW_NOTIFICATIONS, !1);
}
function X(e) {
    var t, n, r;
    if (null == e) return [];
    let i = o().keyBy(null != (t = e.voice_joins) ? t : [], 'channel_id'),
        a = o().keyBy(null != (n = e.message_sends) ? n : [], 'channel_id');
    return (null != (r = e.channel_opens) ? r : [])
        .map((e) => {
            var t, n, r, o, s, l, c, u, d, f, _;
            let p = null != (t = i[e.channel_id]) ? t : {},
                h = null != (n = a[e.channel_id]) ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null != (r = e.year_opens) ? r : 0),
                num_month_opens: Number(null != (o = e.one_month_opens) ? o : 0),
                num_three_month_opens: Number(null != (s = e.three_month_opens) ? s : 0),
                num_six_month_opens: Number(null != (l = e.six_month_opens) ? l : 0),
                num_messages: Number(null != (c = null == h ? void 0 : h.num_messages) ? c : 0),
                num_year_voice_joins: Number(null != (u = null == p ? void 0 : p.year_opens) ? u : 0),
                num_month_voice_joins: Number(null != (d = null == p ? void 0 : p.one_month_opens) ? d : 0),
                num_three_month_voice_joins: Number(null != (f = null == p ? void 0 : p.three_month_opens) ? f : 0),
                num_six_month_voice_joins: Number(null != (_ = null == p ? void 0 : p.six_month_opens) ? _ : 0)
            };
        })
        .filter(O.lm);
}
