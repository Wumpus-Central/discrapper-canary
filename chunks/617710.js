"use strict";
n.d(t, { A: () => te });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(730852),
    u = n(626584),
    c = n(652896),
    d = n(796774),
    _ = n(617617),
    h = n(495544),
    f = n(470710),
    p = n(734057),
    E = n(394459),
    m = n(763827),
    g = n(873985),
    A = n(309010),
    I = n(461213),
    T = n(116956),
    S = n(723702),
    y = n(175306),
    C = n(77729),
    N = n(183636),
    v = n(174459),
    R = n(209489),
    O = n(364711),
    b = n(812729),
    D = n.n(b);
class L {
    alwaysUpdateState;
    dirty = !1;
    state = this.getInitialState();
    constructor(e = !0) {
        this.alwaysUpdateState = e;
    }
    shouldCommit() {
        return !0;
    }
    setState(e) {
        this.state = { ...this.state, ...e };
    }
    getState() {
        return this.state;
    }
    reset() {
        (this.dirty = !1), (this.state = this.getInitialState());
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({ ...this.state, ...e });
        if (t) this.dirty = !D()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !D()(this.state[e], n[e]);
        let i = this.dirty && this.shouldCommit();
        return (
            (i || this.alwaysUpdateState) && (this.state = n),
            !!i && ((this.dirty = !1), this.didCommit(this.state), !0)
        );
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
}
n(321073);
class w extends L {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return I.A.getLocalPresence();
    }
    getNextState() {
        return I.A.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit = (function (e) {
        let t,
            n = [],
            i = function () {
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                let o = Date.now();
                for (null != t && (clearTimeout(t), (t = null)); n.length > 0 && n[0] <= o; ) n.shift();
                n.length < 5 ? (n.push(o + 2e4), e(...s)) : (t = setTimeout(() => i(...s), n[0] - o));
            };
        return i;
    })(this.emitPresenceUpdate.bind(this));
    emitPresenceUpdate(e) {
        let { status: t, since: n, activities: i, afk: r } = e;
        this.socket.presenceUpdate(t, n, i, r);
    }
    handleConnectionOpen() {
        let e = !this.switchingAccounts;
        this.update({}, e), (this.switchingAccounts = !1);
    }
    handleAccountSwitch() {
        (this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState());
    }
}
n(938796);
var M = n(665260),
    P = n(572164),
    x = n(952818),
    k = n(885386),
    U = n(616356),
    G = n(652215),
    F = n(469177);
let V = new u.A("ConnectionStore"),
    B = new O.A(),
    j = new w(B),
    H = new (class extends L {
        socket;
        constructor(e) {
            super(), (this.socket = e);
        }
        get guildId() {
            return this.getState().guildId;
        }
        get channelId() {
            return this.getState().channelId;
        }
        computeVoiceFlags() {
            let e = 0,
                t = k.Q$.getSetting();
            e = (0, M.lA)(e, G.Ajs.ALLOW_VOICE_RECORDING, t);
            let n =
                    (0, P.TD)() &&
                    (U.A.getCurrentUserActiveStream()?.state === G.XYD.ACTIVE ||
                        U.A.getCurrentUserActiveStream()?.state === G.XYD.PAUSED),
                i = (0, P.Ao)() && x.Ay.getVisibleGame()?.windowHandle != null;
            return (0, M.lA)(e, G.Ajs.CLIPS_ENABLED, n || i);
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: E.Ay.isSelfMute(),
                selfDeaf: E.Ay.isSelfDeaf(),
                selfVideo: E.Ay.isVideoEnabled(),
                preferredRegion: null,
                preferredRegions: null,
                videoStreamParameters: null,
                flags: 0,
            };
        }
        getNextState(e) {
            let { guildId: t, channelId: n } = e;
            return {
                guildId: t,
                channelId: n,
                selfMute: E.Ay.isSelfMute(),
                selfDeaf: E.Ay.isSelfDeaf(),
                selfVideo: E.Ay.isVideoEnabled(),
                preferredRegion: g.A.getPreferredRegion(),
                preferredRegions: g.A.getPreferredRegions(),
                videoStreamParameters: E.Ay.getVideoStreamParameters(),
                flags: this.computeVoiceFlags(),
            };
        }
        shouldCommit() {
            return this.socket.isSessionEstablished();
        }
        didCommit(e) {
            let {
                guildId: t,
                channelId: n,
                selfMute: i,
                selfDeaf: r,
                selfVideo: s,
                preferredRegion: a,
                preferredRegions: o,
                videoStreamParameters: l,
                flags: u = 0,
            } = e;
            s && p.A.getChannel(n)?.type === G.rbe.GUILD_STAGE_VOICE
                ? this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      videoStreamParameters: l,
                      flags: u,
                  })
                : this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      flags: u,
                  });
        }
    })(B);
(B.handleIdentify = () => {
    let e = h.default.getToken();
    if ((V.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = N.A.getState(),
        n = h.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...v.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: F.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: j.getInitialState(),
    };
}),
    (0, S.isDesktop)() &&
        C.A.powerMonitor.on("resume", () => {
            B.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    R.A.addOfflineCallback(() => {
        B.networkStateChange(15e3, "network detected offline.", !1);
    }),
    R.A.addOnlineCallback(() => {
        B.networkStateChange(5e3, "network detected online.");
    }),
    B.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        o.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    B.on("close", (e) => {
        let { code: t, reason: n } = e;
        o.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    });
var Y = n(33282);
n(237751);
var W = n(73825),
    K = n(803306),
    $ = n(821956),
    z = n(628856),
    q = n(945096),
    Z = n(996512),
    X = n(692744),
    Q = n(814890),
    J = n(505527),
    ee = n(853811),
    et = n(381438);
let en = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ei = n(756377),
    er = n(736130),
    es = n(464578),
    ea = n(761821),
    eo = n(843010),
    el = n(95701),
    eu = n(545934),
    ec = n(889227),
    ed = n(696451),
    e_ = n(287809),
    eh = n(977997),
    ef = n(97352),
    ep = n(166403),
    eE = n(107351),
    em = n(284009),
    eg = n.n(em),
    eA = n(723176),
    eI = n(766034),
    eT = n(314732),
    eS = n(531743),
    ey = n(45773),
    eC = n(937724);
let eN = null,
    ev = {};
function eR(e, t, n) {
    return null == eN || eN.identifyTime !== e || (null != t && t.some((e) => e.id === eN.guild.id))
        ? null
        : n(eN.guild);
}
function eO(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (eg()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function eb(e) {
    return "partial" !== e.data_mode
        ? {
              id: e.id,
              dataMode: e.data_mode,
              emojis: { op: "full_sync", items: e.emojis },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties,
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              stickers: { op: "full_sync", items: e.stickers },
              threads: e.threads?.map((t) => (0, el.UE)(t, e.id)) ?? [],
              threadMessages: eL(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, el.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, el.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, el.UE)(t, e.id)) ?? [],
              threadMessages: eL(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eD(e) {
    return "partial" !== e.data_mode
        ? {
              id: e.id,
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties,
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              threads: e.threads?.map((t) => (0, el.UE)(t, e.id)) ?? [],
              threadMessages: eL(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, el.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, el.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              activity_instances: e.activity_instances,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              presences: e.presences,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, el.UE)(t, e.id)) ?? [],
              threadMessages: eL(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eL(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var ew = n(877166);
let eM = new u.A("ConnectionStore");
function eP(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== G.$pd.LISTENING } }
            : e;
    });
}
let ex = new ew.A(
        B,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, el.UE)(t),
                i = p.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    ek = new ew.A(
        B,
        (e, t) => (
            (e = null == e ? { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] } : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: t.guild_id,
                })),
            }),
            e
        ),
        (e) => "SOUNDBOARD_SOUNDS" !== e,
    ),
    eU = new ew.A(
        B,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eG = new ew.A(
        B,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eF = {};
function eV(e, t) {
    for (let n of e) eF[n] = { preload: () => null, dispatch: t };
}
function eB(e, t, n) {
    for (let i of e) eF[i] = { preload: t, dispatch: n };
}
function ej(e) {
    let t = [];
    for (let n of e)
        null != n.member && eY(n.guild_id, n.member.user, n.member),
            t.push({
                userId: n.user_id,
                guildId: n.guild_id,
                sessionId: n.session_id,
                channelId: n.channel_id,
                mute: n.mute,
                deaf: n.deaf,
                selfMute: n.self_mute,
                selfDeaf: n.self_deaf,
                selfVideo: n.self_video || !1,
                suppress: n.suppress,
                selfStream: n.self_stream || !1,
                requestToSpeakTimestamp: n.request_to_speak_timestamp ?? null,
                discoverable: n.discoverable ?? !0,
                oldChannelId: eh.A.getUserVoiceChannelId(n.guild_id, n.user_id),
                connectedAt: n.connected_at,
            });
    eH({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function eH(e) {
    o.h.dispatch(e).catch((t) => {
        eM.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            B.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function eY(e, t, n) {
    let {
            roles: i,
            nick: s,
            avatar: a,
            avatar_decoration_data: o,
            flags: l,
            premium_since: u,
            pending: c,
            joined_at: d,
            communication_disabled_until: _,
            unusual_dm_activity_until: h,
            collectibles: f,
            display_name_styles: p,
        } = n,
        E = ed.Ay.getMember(e, t.id),
        m = (0, z.t)(f),
        g = (0, q.mT)(p);
    (null != E &&
        E.nick === s &&
        E.avatar === a &&
        r().isEqual(E.roles, i) &&
        (0, $.kn)(E.avatarDecoration ?? null, o ?? null) &&
        E.premiumSince === u &&
        E.isPending === c &&
        E.joinedAt === d &&
        E.communicationDisabledUntil === _ &&
        E.flags === l &&
        (E.unusualDMActivityUntil ?? null) === (h ?? null) &&
        r().isEqual(E.collectibles ?? null, m ?? null) &&
        r().isEqual(E.displayNameStyles ?? null, g ?? null)) ||
        eH({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: s,
            avatar: a,
            avatarDecoration: o,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: h,
            flags: l,
            collectibles: m,
            displayNameStyles: g,
        });
}
function eW(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && eY(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, eY(r, e, t);
                }
            });
}
function eK(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: eP(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function e$(e, t) {
    return e.map((e) => ez(e, t));
}
function ez(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = en.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e)
            (
                t.content_classification?.loaded
                    ? null == t.content_classification.data
                        ? 0
                        : (0, ee.U1)({ type: ee.fS.MINIMAL, data: t.content_classification.data }) !== et.Y.EVERYONE
                    : 1
            )
                ? r.push(t)
                : i.push(t);
        return 0 === r.length
            ? { activities: e, hiddenActivities: t }
            : { activities: i, hiddenActivities: [...t, ...r] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eP(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function eq(e) {
    eG.add(e);
}
eB(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : p.D.loadGuildIds([e.id])),
    (e) => {
        es.A.initialGuild.measure(() => {
            s.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = B.identifyStartTime), (n = eD(e)), (eN = { guild: e, identifyTime: t }), n);
                null != e_.default.getCurrentUser() &&
                    (eH({ type: "GUILD_CREATE", guild: i }),
                    eH({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: i.voice_states.map((e) => ({
                            userId: e.user_id,
                            guildId: i.id,
                            sessionId: e.session_id,
                            channelId: e.channel_id,
                            mute: e.mute,
                            deaf: e.deaf,
                            selfMute: e.self_mute,
                            selfDeaf: e.self_deaf,
                            selfVideo: e.self_video || !1,
                            suppress: e.suppress,
                            selfStream: e.self_stream || !1,
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                            connectedAt: e.connected_at,
                        })),
                    }),
                    eM.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    eV(["READY_SUPPLEMENTAL"], (e) => {
        es.A.readySupplemental.measure(() => {
            s.Ay.Emitter.batched(() => {
                let t = (e = es.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...s } = e,
                            a = eO(ev, r?.friends),
                            o =
                                n?.map((e, t) => {
                                    let n = eO(ev, r?.guilds[t]),
                                        s = eO(ev, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: s };
                                }) ?? [],
                            l = eR(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != l && o.push(l), (ev = {}), { ...s, presences: a, guilds: o };
                    })(e, B.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = e$(e.presences || [], e.id);
                });
                let n = e$(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, el.UE)(e));
                es.A.dispatchReadySupplemental.measure(() => {
                    eH({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
                });
                let r = [];
                t.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        r.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: t.request_to_speak_timestamp ?? null,
                            discoverable: t.discoverable ?? !0,
                            connectedAt: t.connected_at,
                        });
                    });
                }),
                    eH({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    H.update();
            });
        }),
            setTimeout(() => eH({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    eB(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = eA.A.database()),
                    (n = (0, eC.O)() ? eI.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eC.O)() ? eS.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? eT.A.okAsync(t) : Promise.resolve(!1),
                    ]).then((e) => {
                        let [t, n, i] = e;
                        return { guildVersions: t, guildChannels: n, databaseOk: i };
                    })),
                r = e.guilds
                    .filter(
                        (e) =>
                            !e.unavailable &&
                            "partial" === e.data_mode &&
                            ((e.partial_updates.channels ?? []).length > 0 ||
                                (e.partial_updates.deleted_channel_ids ?? []).length > 0 ||
                                void 0),
                    )
                    .map((e) => e.id);
            return Promise.all([i, p.D.loadGuildIds(r) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? eH({ type: "LOGOUT" })
                : es.A.ready.measure(() => {
                      s.Ay.Emitter.batched(() => {
                          let t = (e = es.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: s, merged_members: a, guilds: o, ...l } = e;
                                      null != eA.A.database() &&
                                          !1 === n.databaseOk &&
                                          ey.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (ev = r().keyBy(i, (e) => e.id)),
                                          s?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          eg()(
                                                              null != ev[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          ev[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let u =
                                              o?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eO(ev, a?.[t])), eb(e)),
                                              ) ?? [],
                                          c = eR(t, o, (e) => eb(e));
                                      return (
                                          null != c && u.push(c),
                                          { ...l, users: i, presences: [], guilds: u, private_channels: s ?? [] }
                                      );
                                  })(e, B.identifyStartTime, n),
                              )).private_channels.map((e) => (0, el.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              s = e.guilds.filter((e) => !0 !== e.unavailable),
                              a = e.guilds.filter((e) => !0 === e.geo_restricted),
                              o = null == e.user_settings_proto ? void 0 : (0, ea.Gd)(e.user_settings_proto);
                          es.A.dispatchReady.measure(() => {
                              eH({
                                  type: "CONNECTION_OPEN",
                                  sessionId: e.session_id,
                                  authSessionIdHash: e.auth_session_id_hash,
                                  staticAuthSessionId: e.static_client_session_id,
                                  user: e.user,
                                  users: e.users,
                                  guilds: s,
                                  initialPrivateChannels: t,
                                  unavailableGuilds: i,
                                  readState: e.read_state,
                                  userGuildSettings: e.user_guild_settings,
                                  tutorial: e.tutorial,
                                  relationships: e.relationships ?? [],
                                  gameRelationships: e.game_relationships,
                                  friendSuggestionCount: e.friend_suggestion_count,
                                  analyticsToken: e.analytics_token,
                                  experiments: e.experiments,
                                  connectedAccounts: e.connected_accounts,
                                  guildExperiments: e.guild_experiments,
                                  apexExperiments: e.apex_experiments ?? void 0,
                                  requiredAction: e.required_action,
                                  consents: e.consents,
                                  sessions: eK(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
                                  userSettingsProto: o,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: { flags: e.notification_settings.flags },
                                  geoRestrictedGuilds: a,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  eH({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  eH({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              j.update(),
                              H.update();
                      });
                  });
        },
    ),
    eV(["STATE_UPDATE"], (e) => {
        eH({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    eV(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        o.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    eV(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        o.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    eV(["RESUMED"], () => {
        j.forceUpdate(), H.forceUpdate(), eH({ type: "CONNECTION_RESUMED" });
    }),
    eV(["TYPING_START"], (e) => {
        null != e.member && eY(e.guild_id, e.member.user, e.member),
            eH({ type: "TYPING_START", guildId: e.guild_id, channelId: e.channel_id, userId: e.user_id });
    }),
    eV(["GUILD_RING_START"], (e) => {
        eH({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eV(["GUILD_RING_STOP"], (e) => {
        eH({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eV(["ACTIVITY_START"], (e) => {
        eH({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    eV(["ACTIVITY_USER_ACTION"], (e) => {
        eH({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    eB(
        ["MESSAGE_CREATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eW(e),
                null != e.author &&
                    eH({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    eB(
        ["MESSAGE_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eW(e), eH({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    eB(
        ["MESSAGE_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    eB(
        ["MESSAGE_DELETE_BULK"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    eB(
        ["MESSAGE_ACK"],
        (e) => p.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            eH({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    eV(["GUILD_FEATURE_ACK"], (e) => {
        eH({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eV(["USER_NON_CHANNEL_ACK"], (e) => {
        eH({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eB(
        ["CHANNEL_PINS_ACK"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    eB(
        ["CHANNEL_PINS_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    eB(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eH({ type: t, channel: (0, el.UE)(e) });
        },
    ),
    eV(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        eH({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    eV(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        eH({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    eV(["CHANNEL_INFO"], (e, t) => {
        eH({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    eV(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    eB(
        ["CHANNEL_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ex.add(e);
        },
    ),
    eB(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            eH({ type: t, isNewlyCreated: n, channel: (0, el.UE)(i) });
        },
    ),
    eB(
        ["THREAD_LIST_SYNC"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = p.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, el.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, er.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    eV(["THREAD_MEMBER_UPDATE"], (e) => {
        eH({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp,
        });
    }),
    eV(["THREAD_MEMBERS_UPDATE"], (e) => {
        eH({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers: e.added_members?.map((t) => ({
                id: t.id,
                guildId: e.guild_id,
                userId: t.user_id,
                flags: t.flags,
                joinTimestamp: t.join_timestamp,
            })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview,
        });
    }),
    eV(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            eH({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    eV(["SOUNDBOARD_SOUNDS"], (e) => {
        ek.add(e);
    }),
    eV(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = p.A.getBasicChannel(e.channel_id);
        eH({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    eB(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : p.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) eH({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = eD(e);
                eH({ type: "GUILD_CREATE", guild: t }),
                    eH({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => ({
                            userId: e.user_id,
                            guildId: t.id,
                            sessionId: e.session_id,
                            channelId: e.channel_id,
                            mute: e.mute,
                            deaf: e.deaf,
                            selfMute: e.self_mute,
                            selfDeaf: e.self_deaf,
                            selfVideo: e.self_video || !1,
                            suppress: e.suppress,
                            selfStream: e.self_stream || !1,
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                            connectedAt: e.connected_at,
                        })),
                    });
            }
        },
    ),
    eV(["GUILD_UPDATE"], (e) => {
        eH({ type: "GUILD_UPDATE", guild: e }), e.unavailable && eH({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eV(["GUILD_PRUNE_UPDATE"], (e) => {
        eH({
            type: "GUILD_PRUNE_UPDATE",
            guildId: e.guild_id,
            prune: {
                isPreview: e.prune.is_preview,
                isFinished: e.prune.is_finished,
                days: e.prune.days,
                pruneCount: e.prune.prune_count,
                includeRoles: e.prune.include_roles,
            },
        });
    }),
    eV(["GUILD_BULK_BAN_UPDATE"], (e) => {
        eH({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    eV(["GUILD_DELETE"], (e) => {
        eH({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? eH({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && eH({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eV(["GUILD_MEMBERS_CHUNK"], (e) => {
        s.Ay.Emitter.batched(() => {
            eU.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && e$(e.presences, e.guild_id).forEach(eq),
                ew.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    eV(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            eH({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && e$(e.presences, e.guild_id).forEach(eq),
                ew.A.flush();
        });
    }),
    eV(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            eH({
                type: t,
                guildId: e.guild_id,
                user: e.user,
                avatar: e.avatar,
                avatarDecoration: e.avatar_decoration_data,
                roles: e.roles,
                nick: e.nick,
                premiumSince: e.premium_since,
                isPending: e.pending,
                joinedAt: e.joined_at,
                communicationDisabledUntil: e.communication_disabled_until,
                unusualDMActivityUntil: e.unusual_dm_activity_until,
                flags: e.flags,
                collectibles: (0, z.t)(e.collectibles),
                displayNameStyles: (0, q.mT)(e.display_name_styles),
            });
        },
    ),
    eB(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eH({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    eB(
        ["GUILD_ROLE_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    eV(["GUILD_EMOJIS_UPDATE"], (e) => {
        eH({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    eV(["GUILD_STICKERS_UPDATE"], (e) => {
        eH({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    eV(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        eH({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    eV(["INTEGRATION_CREATE"], (e) => {
        eH({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    eV(["INTEGRATION_DELETE"], (e) => {
        eH({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    eV(["USER_UPDATE"], (e) => {
        eH({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    eV(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, ea.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            eH({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    eV(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        eH({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    eV(["USER_CONNECTIONS_UPDATE"], () => {
        eH({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    eV(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        eH({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    eV(["USER_NOTE_UPDATE"], (e) => {
        eH({ type: "USER_NOTE_UPDATE", ...e });
    }),
    eV(["RELATIONSHIP_ADD"], (e) => {
        eH({
            type: "RELATIONSHIP_ADD",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
                note: e.note,
            },
            shouldNotify: !0 === e.should_notify,
        });
    }),
    eV(["RELATIONSHIP_REMOVE"], (e) => {
        eH({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    eV(["RELATIONSHIP_UPDATE"], (e) => {
        eH({
            type: "RELATIONSHIP_UPDATE",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
                note: e.note,
            },
        });
    }),
    eV(["GAME_RELATIONSHIP_ADD"], (e) => {
        eH({
            type: "GAME_RELATIONSHIP_ADD",
            gameRelationship: {
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
                user: e.user,
            },
        });
    }),
    eV(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        eH({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    eV(["PRESENCE_UPDATE"], (e) => {
        eq(ez(e, e.guild_id));
    }),
    eV(["PRESENCES_REPLACE"], (e) => {
        eH({ type: "PRESENCES_REPLACE", presences: e$(e, void 0) });
    }),
    eV(["SESSIONS_REPLACE"], (e) => {
        eH({ type: "SESSIONS_REPLACE", sessions: eK(e) });
    }),
    eV(["VOICE_STATE_UPDATE"], (e) => {
        ej([e]);
    }),
    eV(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        ej(e.voice_states);
    }),
    eV(["VOICE_SERVER_UPDATE"], (e) => {
        eH({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    eV(["CALL_CREATE"], (e) => {
        eH({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            eH({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.map((e) => ({
                    userId: e.user_id,
                    guildId: null,
                    sessionId: e.session_id,
                    channelId: e.channel_id,
                    mute: e.mute,
                    deaf: e.deaf,
                    selfMute: e.self_mute,
                    selfDeaf: e.self_deaf,
                    selfVideo: e.self_video || !1,
                    suppress: e.suppress,
                    selfStream: e.self_stream || !1,
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    discoverable: e.discoverable ?? !0,
                    connectedAt: e.connected_at,
                })),
            });
    }),
    eV(["CALL_UPDATE"], (e) => {
        eH({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    eV(["CALL_DELETE"], (e) => {
        eH({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    eV(["OAUTH2_TOKEN_CREATE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    eV(["OAUTH2_TOKEN_DELETE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    eV(["OAUTH2_TOKEN_REVOKE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    eV(["RECENT_MENTION_DELETE"], (e) => {
        eH({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    eV(["SAVED_MESSAGE_CREATE"], (e) => {
        eH({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, ei.iz)(e) });
    }),
    eV(["SAVED_MESSAGE_DELETE"], (e) => {
        eH({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, ei.x6)(e) });
    }),
    eV(["FRIEND_SUGGESTION_CREATE"], (e) => {
        eH({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    eV(["FRIEND_SUGGESTION_DELETE"], (e) => {
        eH({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    eV(["WEBHOOKS_UPDATE"], (e) => {
        eH({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    eV(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        eH({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id,
        });
    }),
    eV(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        eH({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: J.v.VOTE,
        });
    }),
    eV(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        eH({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: J.v.VOTE })),
        });
    }),
    eV(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        eH({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    eV(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        eH({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    eV(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        eH({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    eV(["PAYMENT_UPDATE"], (e) => {
        eH({ type: "PAYMENT_UPDATE", payment: e });
    }),
    eV(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        eH({ type: t, entitlement: e });
    }),
    eV(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, eo.f)() && (n(753390).$o(), W.jv(ef.A.getFetchedSKUIDs()));
    }),
    eV(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        K.rQ(), (0, eo.f)() && n(753390).hP();
    }),
    eV(["WISHLIST_ITEM_PURCHASED"], (e) => {
        eH({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    eV(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o(e.badge_id);
    }),
    eV(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        eH({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: eu.A.createFromServer(e, ep.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eV(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        eH({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: eu.A.createFromServer(e, ep.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eV(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        eH({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    eV(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        eH({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    eV(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eE.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && eH({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    eV(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eY(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                eq(ez(i, e.guild_id));
            };
            e.ops.forEach((e) => {
                let { op: n, items: i, item: r } = e;
                switch (n) {
                    case "SYNC":
                        i.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(r);
                }
            }),
                ew.A.flush(),
                eH({
                    type: "GUILD_MEMBER_LIST_UPDATE",
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count,
                });
        });
    }),
    eV(["GIFT_CODE_UPDATE"], (e) => {
        eH({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    eV(["GIFT_CODE_CREATE"], (e) => {
        eH({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    eV(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        eH({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    eV(["STREAM_CREATE"], (e) => {
        eH({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    eV(["STREAM_SERVER_UPDATE"], (e) => {
        eH({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    eV(["STREAM_UPDATE"], (e) => {
        eH({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    eV(["STREAM_DELETE"], (e) => {
        eH({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    eV(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        eH({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    eV(["REACTION_NOTIFICATION_SENT"], (e) => {
        eH({
            type: "REACTION_NOTIFICATION_SENT",
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id,
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
        });
    }),
    eV(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    eV(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    eV(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    eV(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    eV(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        eH({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    eV(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        eH({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    eV(["QUEST_PREVIEW_UPDATE"], (e) => {
        eH({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    eV(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id });
    }),
    eV(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        eH({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    eV(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eV(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eV(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    eV(["INTERACTION_CREATE"], (e) => {
        eH({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    eV(["INTERACTION_SUCCESS"], (e) => {
        eH({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    eV(["INTERACTION_FAILURE"], (e) => {
        eH({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    eV(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        eH({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    eV(["INTERACTION_MODAL_CREATE"], (e) => {
        eH({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, Q.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    eV(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        eH({
            type: "INTERACTION_IFRAME_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce,
        });
    }),
    eV(["STAGE_INSTANCE_CREATE"], (e) => {
        eH({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    eV(["STAGE_INSTANCE_UPDATE"], (e) => {
        eH({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    eV(["STAGE_INSTANCE_DELETE"], (e) => {
        eH({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    eV(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        eH({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eV(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        eH({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    eV(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        eH({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    eV(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        eH({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
        });
    }),
    eV(["CLIPS_REMOTE_TRIGGER"], (e) => {
        eH({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    eV(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        eH({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new ec.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eV(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        eH({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new ec.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eV(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        eH({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    eV(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        eH({
            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id,
            })),
        });
    }),
    eB(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    eV(["AUTH_SESSION_CHANGE"], (e) => {
        eH({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    eV(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        eH({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    eV(["USER_CONNECTIONS_CALLBACK"], (e) => {
        eH({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    eV(["DELETED_ENTITY_IDS"], (e) => {
        eH({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    eB(
        ["CHANNEL_SYNC"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.integrity_check ||
                e.channels.forEach((e) => {
                    ex.add(e);
                }),
                eH({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    eV(["CONSOLE_COMMAND_UPDATE"], (e) => {
        eH({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    eB(
        ["PASSIVE_UPDATE_V2"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({
                type: "PASSIVE_UPDATE_V2",
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp,
                })),
                voiceStates: e.updated_voice_states.map((e) => ({
                    channelId: e.channel_id,
                    deaf: e.deaf || !1,
                    mute: e.mute || !1,
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    selfDeaf: e.self_deaf || !1,
                    selfMute: e.self_mute || !1,
                    selfStream: e.self_stream || !1,
                    selfVideo: e.self_video || !1,
                    sessionId: e.session_id,
                    suppress: e.suppress,
                    userId: e.user_id,
                    discoverable: e.discoverable ?? !0,
                    connectedAt: e.connected_at,
                })),
                removedVoiceStateUsers: e.removed_voice_states,
            });
        },
    ),
    eV(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        eH({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    eV(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        eH({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    eV(["LAST_MESSAGES"], (e) => {
        eH({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    eV(["AUTHENTICATOR_UPDATE"], (e) => {
        eH({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    eV(["AUTHENTICATOR_CREATE"], (e) => {
        eH({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    eV(["AUTHENTICATOR_DELETE"], (e) => {
        eH({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    eV(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        eH({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    eV(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        eH({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    eV(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        eH({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    eV(["USER_APPLICATION_UPDATE"], (e) => {
        eH({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    eV(["USER_APPLICATION_REMOVE"], (e) => {
        eH({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    eV(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        eH({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    eV(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        eH({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    eV(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        eH({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    eV(["WALLET_BALANCE_UPDATE"], (e) => {
        eH({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    eV(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    eV(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    eV(["GAME_SERVER_DELETE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    eV(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id });
    }),
    eV(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        eH({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    eV(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        eH({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    eV(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        eH({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    eV(["GUILD_ROOM_CONNECT"], (e, t) => {
        eH({ type: t, room: (0, Z.S)(e) });
    }),
    eV(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        eH({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eV(["GUILD_ROOM_UPDATE"], (e, t) => {
        eH({ type: t, room: (0, Z.S)(e) });
    }),
    eV(["HAVEN_CONNECT"], (e, t) => {
        eH({ type: t, room: (0, X.xf)(e) });
    }),
    eV(["HAVEN_DISCONNECT"], (e, t) => {
        eH({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eV(["HAVEN_UPDATE"], (e, t) => {
        eH({ type: t, room: (0, X.xf)(e) });
    }),
    eV(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        eH({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
var eZ = n(355097);
let eX = window.DiscordNative;
B.dispatcher.getDispatchHandler = function (e) {
    return eF[e];
};
let eQ = new u.A("ConnectionStore"),
    eJ = 0,
    e0 = null,
    e1 = !0,
    e2 = null,
    e3 = null;
async function e6(e) {
    (eJ = Date.now()), (e0 = e.sessionId), j.handleConnectionOpen();
    let t = {},
        n = A.A.getVoiceChannelId();
    if (null != n) {
        let e = a.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (a.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await eX?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !e1)
        ) {
            let e = p.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, d.CX)(n));
        } else m.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    }
    H.update(t, !0), (e1 = !1), (e3 = null);
}
function e4() {
    H.update();
}
function e5() {
    return H.update(), !1;
}
function e7() {
    return j.update(), !1;
}
function e8(e) {
    B.isSessionEstablished() && B.streamDelete(e);
}
class e9 extends s.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(h.default, f.A, p.A, E.Ay, m.A, g.A, A.A, I.A, T.A, _.A),
            this.syncWith([E.Ay], e5),
            this.syncWith([I.A], e7);
    }
    getSocket() {
        return B;
    }
    isTryingToConnect() {
        return !B.isClosed();
    }
    isConnected() {
        return B.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return B.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return eJ;
    }
}
let te = new e9(o.h, {
    START_SESSION: function () {
        return B.isClosed()
            ? (eQ.verbose("Socket is reconnecting because of starting new session"), B.connect())
            : (eQ.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            eQ.verbose("session refresh dispatched", { isEstablished: B.isSessionEstablished() }),
            !!B.isSessionEstablished() && (B.close(), B.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && j.handleAccountSwitch(), eQ.verbose("Closing socket because of logout"), B.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (B.close(), B.dispatcher.clear(), B.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        e6(e);
    },
    CONNECTION_RESUMED: function () {
        e3 = null;
    },
    CONNECTION_CLOSED: function () {
        eQ.verbose("connection closed dispatched"), (eJ = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== G.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? B.streamPing(e.streamKey) : B.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            H.update({ guildId: e.guildId, channelId: e.channelId }),
            (e3 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                e2 === G.g6G.BACKGROUND &&
                (null == e.channelId ? B.close(!0) : B.isClosed() && (Y.V(!1), B.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (h.default.getId() !== t.userId) return e;
            if (t.sessionId === e0) {
                if (null != e3)
                    return eQ.verbose("Ignoring voice state for own session due to VSU lock on channel:", e3), e;
                H.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== H.guildId) return e;
                H.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === H.guildId && H.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === H.channelId && H.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === H.channelId) {
            if (e3 === t) return !1;
            H.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, S.isIOS)()
                ? (h.default.isAuthenticated() &&
                      (e2 === G.g6G.INACTIVE && e.state === G.g6G.BACKGROUND && null == H.channelId
                          ? B.close(!0)
                          : e2 === G.g6G.BACKGROUND &&
                            e.state === G.g6G.ACTIVE &&
                            B.isClosed() &&
                            (Y.V(!1), B.connect())),
                  (e2 = e.state))
                : e.state === G.g6G.ACTIVE &&
                  (Y.V(!1), h.default.isAuthenticated() && B.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            B.isSessionEstablished() &&
                ("userIds" in e
                    ? r()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              B.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : B.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        B.isSessionEstablished() && B.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return B.isSessionEstablished() && B.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return B.isSessionEstablished() && B.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            B.isSessionEstablished() &&
                t.forEach((e) => {
                    B.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: e4,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (B.isSessionEstablished()) {
            let e = null != n ? p.A.getChannel(i)?.rtcRegion : f.A.getCall(i)?.region;
            B.streamCreate(t, n, i, e ?? g.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (B.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = T.A.getAllActiveStreamKeys().find((e) => (0, c.Iy)(e).ownerId === h.default.getId())),
                    T.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => e8(e));
            }
            B.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return e8(t), e4(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        B.isSessionEstablished() && B.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return B.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        B.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        B.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return B.isSessionEstablished() && B.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        B.connectionState !== y.A.WILL_RECONNECT && B.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: e4,
    RUNNING_GAMES_CHANGE: e4,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === eZ.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e4();
    },
});
