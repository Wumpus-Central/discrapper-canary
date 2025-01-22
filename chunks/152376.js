r.d(n, {
    C1: function () {
        return S;
    },
    Mo: function () {
        return A;
    },
    QG: function () {
        return N;
    },
    XQ: function () {
        return b;
    },
    _U: function () {
        return D;
    },
    dM: function () {
        return R;
    },
    k$: function () {
        return I;
    }
});
var i = r(47120);
var a = r(392711);
var o = r(524437),
    s = r(570140),
    l = r(87051),
    u = r(367907),
    c = r(962086),
    d = r(160404),
    f = r(149071),
    p = r(675478),
    h = r(592125),
    _ = r(9156),
    m = r(626135),
    g = r(630388),
    E = r(621600),
    v = r(981631),
    y = r(526761);
function b(e, n, r, i) {
    if (null == e) return;
    if (d.Z.isFullServerPreview(e)) {
        (0, c.zS)(e, r ? [n] : [], r ? [] : [n]);
        return;
    }
    let a = _.ZP.getChannelIdFlags(e, n);
    !r && (a = (0, g.mB)(a, y.ic.FAVORITED, !1));
    let o = (0, E.I)(e, n),
        l = { flags: (0, g.mB)(a, y.ic.OPT_IN_ENABLED, r) },
        p = { channel_overrides: { [n]: l } };
    f.Z.saveUserGuildSettingsBulk({ [e]: p }),
        s.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
            guildId: e,
            channelId: n,
            settings: l
        }),
        (0, E.jz)(e, n, l, o, E.UE.optedIn(r), i),
        O(e),
        m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, u.hH)(e),
            ...(0, u.v_)(h.Z.getChannel(n)),
            action_type: r ? 'add' : 'remove',
            location: i
        });
}
function I(e, n, r, i) {
    if (null == e) return;
    if (d.Z.isFullServerPreview(e)) {
        (0, c.zS)(e, r ? [n] : [], r ? [] : [n]), (0, c.aq)(e, { optInEnabled: !0 });
        return;
    }
    let a = _.ZP.getChannelIdFlags(e, n);
    !r && (a = (0, g.mB)(a, y.ic.FAVORITED, !1));
    let o = (0, E.I)(e, n),
        l = { flags: (0, g.mB)(a, y.ic.OPT_IN_ENABLED, r) };
    if (!_.ZP.isOptInEnabled(e)) {
        let r = (0, g.mB)(_.ZP.getGuildFlags(e), y.vc.OPT_IN_CHANNELS_ON, !0);
        f.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [n]: l },
                flags: r
            }
        });
    }
    s.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
        guildId: e,
        channelId: n,
        settings: l
    }),
        (0, E.jz)(e, n, l, o, E.UE.optedIn(r), i),
        O(e),
        m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, u.hH)(e),
            ...(0, u.v_)(h.Z.getChannel(n)),
            action_type: r ? 'add' : 'remove',
            location: i
        });
}
async function T(e, n) {
    if (null == e || d.Z.isFullServerPreview(e)) return;
    let r = { channel_overrides: n };
    await f.Z.saveUserGuildSettingsBulk({ [e]: r }),
        s.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES',
            guildId: e,
            updates: n
        });
}
let S = (0, a.debounce)((e, n) => T(e, n), 1000);
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (d.Z.isFullServerPreview(e)) {
        (0, c.zS)(e, n, []), r && (0, c.aq)(e, { optInEnabled: !0 });
        return;
    }
    let a = {};
    if (
        (n.forEach((n) => {
            let r = _.ZP.getChannelIdFlags(e, n);
            a[n] = { flags: (0, g.mB)(r, y.ic.OPT_IN_ENABLED, !0) };
        }),
        r)
    ) {
        let n = (0, g.mB)(_.ZP.getGuildFlags(e), y.vc.OPT_IN_CHANNELS_ON, !0);
        l.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: n,
                channel_overrides: a
            },
            E.ZB.OptedIn
        ),
            m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, u.hH)(e),
                action_type: 'add_many_and_enable_guild',
                location: i
            });
    } else
        l.Z.updateChannelOverrideSettingsBulk(e, a, E.ZB.OptedIn),
            m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, u.hH)(e),
                action_type: 'add_many',
                location: i
            });
}
function C(e, n, r) {
    if (null == e) return;
    if (ImpersonateStore.isFullServerPreview(e)) {
        updateImpersonatedChannels(e, [], n);
        return;
    }
    let i = {};
    n.forEach((n) => {
        let r = UserGuildSettingsStore.getChannelIdFlags(e, n);
        i[n] = { flags: setFlag(r, ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !1) };
    }),
        NotificationSettingsModalActionCreators.updateChannelOverrideSettingsBulk(e, i, NotificationLabels.OptedOut),
        AnalyticsUtils.track(AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...collectGuildAnalyticsMetadata(e),
            action_type: 'remove_many',
            location: r
        });
}
function N(e, n, r) {
    if (d.Z.isFullServerPreview(e)) {
        (0, c.aq)(e, { optInEnabled: n });
        return;
    }
    let i = _.ZP.getGuildFlags(e);
    l.Z.updateGuildNotificationSettings(e, { flags: (0, g.mB)(i, y.vc.OPT_IN_CHANNELS_ON, n) }, E.UE.optedIn(n)),
        m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, u.hH)(e),
            action_type: n ? 'guild_enabled' : 'guild_disabled',
            location: r
        });
}
function R(e, n, r, i) {
    if (null == e || d.Z.isFullServerPreview(e)) return;
    let a = _.ZP.getChannelIdFlags(e, n);
    !(0, g.yE)(a, y.ic.OPT_IN_ENABLED) && r && (a = (0, g.mB)(a, y.ic.OPT_IN_ENABLED, !0)),
        l.Z.updateChannelOverrideSettings(e, n, { flags: (0, g.mB)(a, y.ic.FAVORITED, r) }, E.UE.favorited(r)),
        m.default.track(v.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, u.hH)(e),
            action_type: r ? 'favorited' : 'unfavorited',
            location: i
        });
}
function O(e) {
    (0, p.PS)(e, (e) => (!(0, g.yE)(e.guildOnboardingProgress, o.nI.GUILD_NOTICE_CLEARED) || !!(0, g.yE)(e.guildOnboardingProgress, o.nI.GUILD_NOTICE_SHOWN)) && ((e.guildOnboardingProgress = (0, g.pj)(e.guildOnboardingProgress, o.nI.GUILD_NOTICE_CLEARED)), (e.guildOnboardingProgress = (0, g.mB)(e.guildOnboardingProgress, o.nI.GUILD_NOTICE_SHOWN, !1)), !0), p.fy.INFREQUENT_USER_ACTION);
}
function D(e, n) {
    s.Z.dispatch({
        type: 'DISMISS_FAVORITE_SUGGESTION',
        guildId: e,
        channelId: n
    });
}
