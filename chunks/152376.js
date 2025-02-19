n.d(t, {
    C1: () => N,
    Mo: () => A,
    QG: () => C,
    XQ: () => S,
    _U: () => w,
    dM: () => R,
    k$: () => I
}),
    n(47120);
var r = n(392711),
    i = n(524437),
    o = n(570140),
    a = n(87051),
    s = n(367907),
    l = n(962086),
    c = n(160404),
    u = n(149071),
    d = n(675478),
    f = n(592125),
    p = n(9156),
    _ = n(626135),
    h = n(630388),
    m = n(621600),
    g = n(981631),
    E = n(526761);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t, n, r) {
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]);
        return;
    }
    let i = p.ZP.getChannelIdFlags(e, t);
    n || (i = (0, h.mB)(i, E.ic.FAVORITED, !1));
    let a = (0, m.I)(e, t),
        d = { flags: (0, h.mB)(i, E.ic.OPT_IN_ENABLED, n) },
        v = { channel_overrides: { [t]: d } };
    u.Z.saveUserGuildSettingsBulk({ [e]: v }),
        o.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
            guildId: e,
            channelId: t,
            settings: d
        }),
        (0, m.jz)(e, t, d, a, m.UE.optedIn(n), r),
        P(e),
        _.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            O(b({}, (0, s.hH)(e), (0, s.v_)(f.Z.getChannel(t))), {
                action_type: n ? 'add' : 'remove',
                location: r
            })
        );
}
function I(e, t, n, r) {
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]), (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = p.ZP.getChannelIdFlags(e, t);
    n || (i = (0, h.mB)(i, E.ic.FAVORITED, !1));
    let a = (0, m.I)(e, t),
        d = { flags: (0, h.mB)(i, E.ic.OPT_IN_ENABLED, n) };
    if (!p.ZP.isOptInEnabled(e)) {
        let n = (0, h.mB)(p.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        u.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: d },
                flags: n
            }
        });
    }
    o.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
        guildId: e,
        channelId: t,
        settings: d
    }),
        (0, m.jz)(e, t, d, a, m.UE.optedIn(n), r),
        P(e),
        _.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            O(b({}, (0, s.hH)(e), (0, s.v_)(f.Z.getChannel(t))), {
                action_type: n ? 'add' : 'remove',
                location: r
            })
        );
}
async function T(e, t) {
    if (null == e || c.Z.isFullServerPreview(e)) return;
    let n = { channel_overrides: t };
    await u.Z.saveUserGuildSettingsBulk({ [e]: n }),
        o.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES',
            guildId: e,
            updates: t
        });
}
let N = (0, r.debounce)((e, t) => T(e, t), 1000);
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, t, []), n && (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = {};
    if (
        (t.forEach((t) => {
            let n = p.ZP.getChannelIdFlags(e, t);
            i[t] = { flags: (0, h.mB)(n, E.ic.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, h.mB)(p.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        a.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: i
            },
            m.ZB.OptedIn
        ),
            _.default.track(
                g.rMx.CHANNEL_LIST_UPDATED,
                O(b({}, (0, s.hH)(e)), {
                    action_type: 'add_many_and_enable_guild',
                    location: r
                })
            );
    } else
        a.Z.updateChannelOverrideSettingsBulk(e, i, m.ZB.OptedIn),
            _.default.track(
                g.rMx.CHANNEL_LIST_UPDATED,
                O(b({}, (0, s.hH)(e)), {
                    action_type: 'add_many',
                    location: r
                })
            );
}
function C(e, t, n) {
    if (c.Z.isFullServerPreview(e)) {
        (0, l.aq)(e, { optInEnabled: t });
        return;
    }
    let r = p.ZP.getGuildFlags(e);
    a.Z.updateGuildNotificationSettings(e, { flags: (0, h.mB)(r, E.vc.OPT_IN_CHANNELS_ON, t) }, m.UE.optedIn(t)),
        _.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            O(b({}, (0, s.hH)(e)), {
                action_type: t ? 'guild_enabled' : 'guild_disabled',
                location: n
            })
        );
}
function R(e, t, n, r) {
    if (null == e || c.Z.isFullServerPreview(e)) return;
    let i = p.ZP.getChannelIdFlags(e, t);
    !(0, h.yE)(i, E.ic.OPT_IN_ENABLED) && n && (i = (0, h.mB)(i, E.ic.OPT_IN_ENABLED, !0)),
        a.Z.updateChannelOverrideSettings(e, t, { flags: (0, h.mB)(i, E.ic.FAVORITED, n) }, m.UE.favorited(n)),
        _.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            O(b({}, (0, s.hH)(e)), {
                action_type: n ? 'favorited' : 'unfavorited',
                location: r
            })
        );
}
function P(e) {
    (0, d.PS)(e, (e) => (!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED) || !!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN)) && ((e.guildOnboardingProgress = (0, h.pj)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED)), (e.guildOnboardingProgress = (0, h.mB)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN, !1)), !0), d.fy.INFREQUENT_USER_ACTION);
}
function w(e, t) {
    o.Z.dispatch({
        type: 'DISMISS_FAVORITE_SUGGESTION',
        guildId: e,
        channelId: t
    });
}
