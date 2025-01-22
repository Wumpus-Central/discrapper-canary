r.d(n, {
    F6: function () {
        return G;
    },
    _Y: function () {
        return J;
    },
    cG: function () {
        return Z;
    },
    ly: function () {
        return F;
    },
    oL: function () {
        return X;
    },
    vo: function () {
        return H;
    }
});
var i = r(47120);
var a = r(789020);
var o = r(724458);
var s = r(411104);
var l = r(192379),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(433517),
    p = r(570140),
    h = r(668781),
    _ = r(87051),
    m = r(181945),
    g = r(149071),
    E = r(516373),
    v = r(480294),
    y = r(650774),
    b = r(888369),
    I = r(430824),
    T = r(771845),
    S = r(9156),
    A = r(626135),
    C = r(630388),
    N = r(823379),
    R = r(960048),
    O = r(709054),
    D = r(223683),
    L = r(630114),
    x = r(506712),
    w = r(468788),
    P = r(789662),
    M = r(981631),
    k = r(490897),
    U = r(526761),
    B = r(388032);
function G(e, n) {
    let [r, i] = l.useState(P.nf),
        [a, o] = l.useState({});
    (0, E.D)();
    let s = (0, d.Wu)([I.Z], () => Object.values(I.Z.getGuilds())),
        u = l.useCallback(() => {
            let i = {};
            for (let o of s) i[o.id] = V(o, r, e, n, a[o.id]);
            return i;
        }, [s, r, e, n, a]),
        [c, f] = l.useState(() => u());
    return (
        l.useEffect(() => f(u()), [u]),
        {
            guildPlans: c,
            overrideGuild: l.useCallback((e, n) => {
                o((r) => ({
                    ...r,
                    [e]: n
                }));
            }, []),
            setThresholds: i,
            getDebug: () => j(Object.values(c), n)
        }
    );
}
function Z(e, n) {
    return Object.values(I.Z.getGuilds()).some((r) => {
        let [i] = v.Z.hasConsented(M.pjP.PERSONALIZATION) ? (0, x.q)(r, P.nf, e, n, !1) : (0, x.A)(r, e);
        return i === P.AR.UseGreyDot;
    });
}
function F() {
    let e = Object.values(I.Z.getGuilds()),
        n = {};
    for (let a of e) {
        var r, i;
        let e = null !== (i = (null !== (r = S.ZP.getAllSettings().userGuildSettings[a.id]) && void 0 !== r ? r : {}).flags) && void 0 !== i ? i : 0;
        (e = (0, C.mB)(e, U.vc.UNREADS_ALL_MESSAGES, !0)), (e = (0, C.mB)(e, U.vc.UNREADS_ONLY_MENTIONS, !1)), (n[a.id] = { flags: e });
    }
    K(n),
        A.default.track(M.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter((e) => b.default.hasUnread(e.id)).length
        });
}
function V(e, n, r, i, a) {
    var o;
    let [s, l, u] = v.Z.hasConsented(M.pjP.PERSONALIZATION) ? (0, x.q)(e, n, r, i, !0) : (0, x.A)(e, r),
        c = null !== (o = r.filter((n) => n.guild_id === e.id)[0]) && void 0 !== o ? o : {},
        d = (0, L.Z)(e, null != a ? a : s, c, i, n);
    return {
        guildId: e.id,
        mode: s,
        debugReason: u,
        actions: d,
        overrideMode: a,
        messagePain: c.messages === P.XR.High,
        visitsALot: l,
        muted: S.ZP.isMuted(e.id) && !S.ZP.isTemporarilyMuted(e.id)
    };
}
function j(e, n) {
    let r = n.reduce((e, n) => {
            var r;
            return e + Number(null !== (r = n.num_year_opens) && void 0 !== r ? r : 0);
        }, 0),
        i = n.reduce((e, n) => {
            var r;
            return e + Number(null !== (r = n.num_month_opens) && void 0 !== r ? r : 0);
        }, 0),
        a = T.ZP.getFlattenedGuildIds(),
        o = c().sortBy(Object.values(e), (e) => {
            let n = a.indexOf(e.guildId);
            return -1 === n ? a.length : n;
        }),
        s = [
            ['Use Grey Dot', new Set([P.AR.UseGreyDot])],
            ['Keep As Is', new Set([P.AR.KeepAsIs])]
        ].map((e) => {
            let [n, r] = e,
                i = o
                    .filter((e) => {
                        var n;
                        return r.has(null !== (n = e.overrideMode) && void 0 !== n ? n : e.mode);
                    })
                    .map((e) => {
                        let n = I.Z.getGuild(e.guildId),
                            r = e.actions
                                .map((e) => {
                                    var n;
                                    return '- '.concat(e.label).concat(null !== (n = e.debug) && void 0 !== n ? n : '');
                                })
                                .join('\n');
                        return '### '.concat(n.name, '\n**Reasoning**: ').concat(e.debugReason, '**ActionPlan**:\n').concat(r);
                    });
            return '# '.concat(n, '\n\n').concat(i.join('\n\n'));
        });
    return '\n# Basic Stats\n- Total channel visits (yr): '.concat(r, '\n- Total channel visits (month): ').concat(i, '\n\n').concat(s.join('\n\n'));
}
function H(e) {
    let [n, r] = l.useState(!1),
        [i, a] = l.useState(!1),
        o = l.useCallback(
            async (n) => {
                if (i) throw Error('Already submitted notifications migration');
                r(!0);
                try {
                    await Y(n, e), a(!0);
                } finally {
                    r(!1);
                }
            },
            [i, e]
        );
    return {
        submitting: n,
        submitted: i,
        saveSettings: o
    };
}
async function Y(e, n) {
    if (S.ZP.useNewNotifications) {
        h.Z.show({
            title: 'Info',
            body: 'It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!'
        });
        return;
    }
    let r = W(e);
    try {
        let n = {};
        for (let r of Object.values(e)) {
            var i, a;
            let e = null !== (i = S.ZP.getAllSettings().userGuildSettings[r.guildId]) && void 0 !== i ? i : {},
                o = {};
            for (let n of r.actions) null === (a = n.apply) || void 0 === a || a.call(n, o, e);
            n[r.guildId] = o;
        }
        await K(n);
        let o = Object.values(e)
            .filter((e) => e.actions.some((e) => e.needsMarkedAsRead))
            .map((e) => e.guildId);
        if (o.length > 0) {
            let e = setTimeout(r, 5000);
            (0, m.Z)(o, void 0, () => {
                p.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' }), clearTimeout(e), r();
            });
        } else r();
    } catch (e) {
        R.Z.captureException(e),
            h.Z.show({
                title: B.intl.string(B.t.j2d6Ki),
                body: B.intl.string(B.t.mCjLAQ),
                onConfirm: n
            });
    }
}
function W(e) {
    let n = Object.values(e)
            .filter((e) => {
                var n;
                return (null !== (n = e.overrideMode) && void 0 !== n ? n : e.mode) === P.AR.UseGreyDot;
            })
            .map((e) => {
                var n;
                return {
                    plan: e,
                    memberCount: null !== (n = y.Z.getMemberCount(e.guildId)) && void 0 !== n ? n : 0
                };
            }),
        r = {
            num_unread_guilds_before: O.default.keys(e).filter((e) => b.default.hasUnread(e)).length,
            unmuted_server_ids: n.filter((e) => S.ZP.isMuted(e.plan.guildId)).map((e) => e.plan.guildId)
        };
    return () => {
        A.default.track(M.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            ...r,
            auto_migrated: !0,
            pre_selected_server_ids: Object.values(e)
                .filter((e) => e.mode === P.AR.UseGreyDot)
                .map((e) => e.guildId),
            final_selected_server_ids: n.map((e) => e.plan.guildId),
            num_unread_guids_after: O.default.keys(e).filter((e) => b.default.hasUnread(e)).length,
            num_tiny_servers_selected: n.filter((e) => e.memberCount <= 20).length,
            num_small_servers_selected: n.filter((e) => e.memberCount > 20 && e.memberCount <= 200).length,
            num_medium_servers_selected: n.filter((e) => e.memberCount > 200 && e.memberCount <= 1000).length,
            num_large_servers_selected: n.filter((e) => e.memberCount > 1000).length,
            num_quiet_servers_selected: n.filter((e) => !e.plan.messagePain).length,
            num_busy_servers_selected: n.filter((e) => e.plan.messagePain).length,
            num_frequent_visited_servers_selected: n.filter((e) => e.plan.visitsALot).length,
            num_infrequent_visited_servers_selected: n.filter((e) => !e.plan.visitsALot).length
        });
    };
}
async function K(e) {
    await z(() => q()), await z(() => _.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, !0));
    let n = await z(() => g.Z.saveUserGuildSettingsBulk(e));
    p.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
        userGuildSettings: n
    }),
        p.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' });
}
async function z(e) {
    for (let n = 0; n < 3; n++)
        try {
            return await e();
        } catch (e) {
            await new Promise((e) => setTimeout(e, 1000 * (n + 1)));
        }
    return await e();
}
async function q() {
    let e = await (0, D.Tn)();
    e.length > 0 ? (await Q()) && (0, D.dt)(e) : (0, D.$U)('Backup from '.concat(new Date().toLocaleDateString()));
}
function Q() {
    return new Promise((e) => {
        h.Z.show({
            title: 'Create new Backup?',
            body: 'It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?',
            confirmText: 'Take New Backup',
            cancelText: 'Skip Backup',
            onConfirm: () => e(!0),
            onCancel: () => e(!1)
        });
    });
}
async function X() {
    f.K.set('turnedOffNewNotifications', !0), A.default.track(M.rMx.NOTIFICATION_MIGRATION_OPTOUT, { num_guilds_with_new_setting: Object.values(I.Z.getGuilds()).filter((e) => S.ZP.resolveGuildUnreadSetting(e) === k.i.ONLY_MENTIONS).length });
    let e = await (0, D.Tn)(),
        n = c().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    if (n.length > 0) {
        let e = n[n.length - 1];
        await new Promise((n) =>
            h.Z.show({
                title: 'Please Confirm',
                body: 'This will turn off the new notification system and restore your ' + 'notification settings to a backup created on '.concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: n,
                cancelText: 'Cancel',
                onCancel: () => {}
            })
        ),
            await (0, D.xx)(e.id),
            await _.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, !1);
    } else await _.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, !1);
}
function J(e) {
    var n, r, i;
    if (null == e) return [];
    let a = c().keyBy(null !== (n = e.voice_joins) && void 0 !== n ? n : [], 'channel_id'),
        o = c().keyBy(null !== (r = e.message_sends) && void 0 !== r ? r : [], 'channel_id');
    return (null !== (i = e.channel_opens) && void 0 !== i ? i : [])
        .map((e) => {
            var n, r, i, s, l, u, c, d, f, p, h;
            let _ = null !== (n = a[e.channel_id]) && void 0 !== n ? n : {},
                m = null !== (r = o[e.channel_id]) && void 0 !== r ? r : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
                num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
                num_three_month_opens: Number(null !== (l = e.three_month_opens) && void 0 !== l ? l : 0),
                num_six_month_opens: Number(null !== (u = e.six_month_opens) && void 0 !== u ? u : 0),
                num_messages: Number(null !== (c = null == m ? void 0 : m.num_messages) && void 0 !== c ? c : 0),
                num_year_voice_joins: Number(null !== (d = null == _ ? void 0 : _.year_opens) && void 0 !== d ? d : 0),
                num_month_voice_joins: Number(null !== (f = null == _ ? void 0 : _.one_month_opens) && void 0 !== f ? f : 0),
                num_three_month_voice_joins: Number(null !== (p = null == _ ? void 0 : _.three_month_opens) && void 0 !== p ? p : 0),
                num_six_month_voice_joins: Number(null !== (h = null == _ ? void 0 : _.six_month_opens) && void 0 !== h ? h : 0)
            };
        })
        .filter(N.lm);
}
