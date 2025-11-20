n.d(t, {
    C1: () => A,
    Mo: () => C,
    QG: () => N,
    XQ: () => I,
    _U: () => D,
    dM: () => R,
    k$: () => T,
}),
    n(388685);
var r = n(392711),
    i = n(95015),
    a = n(524437),
    o = n(570140),
    s = n(87051),
    l = n(367907),
    c = n(962086),
    u = n(160404),
    d = n(149071),
    f = n(675478),
    _ = n(592125),
    p = n(9156),
    h = n(626135),
    m = n(621600),
    g = n(981631),
    E = n(526761);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) return void (0, c.zS)(e, n ? [t] : [], n ? [] : [t]);
    let a = p.ZP.getChannelIdFlags(e, t);
    n || (a = (0, i.mB)(a, E.ic.FAVORITED, !1));
    let s = (0, m.I)(e, t),
        f = { flags: (0, i.mB)(a, E.ic.OPT_IN_ENABLED, n) },
        b = { channel_overrides: { [t]: f } };
    d.Z.saveUserGuildSettingsBulk({ [e]: b }),
        o.Z.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: f,
        }),
        (0, m.jz)({
            guildId: e,
            channelId: t,
            change: f,
            previous: s,
            label: m.UE.optedIn(n),
            location: r,
        }),
        P(e),
        h.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            v(y({}, (0, l.hH)(e), (0, l.v_)(_.Z.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r,
            }),
        );
}
function T(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, c.zS)(e, n ? [t] : [], n ? [] : [t]), (0, c.aq)(e, { optInEnabled: !0 });
        return;
    }
    let a = p.ZP.getChannelIdFlags(e, t);
    n || (a = (0, i.mB)(a, E.ic.FAVORITED, !1));
    let s = (0, m.I)(e, t),
        f = { flags: (0, i.mB)(a, E.ic.OPT_IN_ENABLED, n) };
    if (!p.ZP.isOptInEnabled(e)) {
        let n = (0, i.mB)(p.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        d.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: f },
                flags: n,
            },
        });
    }
    o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: f,
    }),
        (0, m.jz)({
            guildId: e,
            channelId: t,
            change: f,
            previous: s,
            label: m.UE.optedIn(n),
            location: r,
        }),
        P(e),
        h.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            v(y({}, (0, l.hH)(e), (0, l.v_)(_.Z.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r,
            }),
        );
}
async function S(e, t) {
    if (null == e || u.Z.isFullServerPreview(e)) return;
    let n = { channel_overrides: t };
    await d.Z.saveUserGuildSettingsBulk({ [e]: n }),
        o.Z.dispatch({
            type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
            guildId: e,
            updates: t,
        });
}
let A = (0, r.debounce)((e, t) => S(e, t), 1000);
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, c.zS)(e, t, []), n && (0, c.aq)(e, { optInEnabled: !0 });
        return;
    }
    let a = {};
    if (
        (t.forEach((t) => {
            let n = p.ZP.getChannelIdFlags(e, t);
            a[t] = { flags: (0, i.mB)(n, E.ic.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, i.mB)(p.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        s.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: a,
            },
            m.ZB.OptedIn,
        ),
            h.default.track(
                g.rMx.CHANNEL_LIST_UPDATED,
                v(y({}, (0, l.hH)(e)), {
                    action_type: "add_many_and_enable_guild",
                    location: r,
                }),
            );
    } else
        s.Z.updateChannelOverrideSettingsBulk(e, a, m.ZB.OptedIn),
            h.default.track(
                g.rMx.CHANNEL_LIST_UPDATED,
                v(y({}, (0, l.hH)(e)), {
                    action_type: "add_many",
                    location: r,
                }),
            );
}
function N(e, t, n) {
    if (u.Z.isFullServerPreview(e)) return void (0, c.aq)(e, { optInEnabled: t });
    let r = p.ZP.getGuildFlags(e);
    s.Z.updateGuildNotificationSettings(e, { flags: (0, i.mB)(r, E.vc.OPT_IN_CHANNELS_ON, t) }, m.UE.optedIn(t)),
        h.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            v(y({}, (0, l.hH)(e)), {
                action_type: t ? "guild_enabled" : "guild_disabled",
                location: n,
            }),
        );
}
function R(e, t, n, r) {
    if (null == e || u.Z.isFullServerPreview(e)) return;
    let a = p.ZP.getChannelIdFlags(e, t);
    !(0, i.yE)(a, E.ic.OPT_IN_ENABLED) && n && (a = (0, i.mB)(a, E.ic.OPT_IN_ENABLED, !0)),
        s.Z.updateChannelOverrideSettings(e, t, { flags: (0, i.mB)(a, E.ic.FAVORITED, n) }, m.UE.favorited(n)),
        h.default.track(
            g.rMx.CHANNEL_LIST_UPDATED,
            v(y({}, (0, l.hH)(e)), {
                action_type: n ? "favorited" : "unfavorited",
                location: r,
            }),
        );
}
function P(e) {
    (0, f.PS)(
        e,
        (e) =>
            (!(0, i.yE)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_CLEARED) ||
                !!(0, i.yE)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, i.pj)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, i.mB)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_SHOWN, !1)),
            !0),
        f.fy.INFREQUENT_USER_ACTION,
    );
}
function D(e, t) {
    o.Z.dispatch({
        type: "DISMISS_FAVORITE_SUGGESTION",
        guildId: e,
        channelId: t,
    });
}
