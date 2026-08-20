"use strict";
n.d(t, { A: () => e8 });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(730852),
    d = n(626584),
    c = n(652896),
    u = n(796774),
    _ = n(617617),
    E = n(280450),
    A = n(470710),
    h = n(734057),
    I = n(453028),
    f = n(763827),
    p = n(873985),
    T = n(309010),
    m = n(461213),
    g = n(116956),
    S = n(723702),
    N = n(175306),
    C = n(77729),
    O = n(183636),
    R = n(174459),
    L = n(209489),
    y = n(655404),
    D = n(812729),
    v = n.n(D);
class b {
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
        if (t) this.dirty = !v()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !v()(this.state[e], n[e]);
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
class M extends b {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return m.A.getLocalPresence();
    }
    getNextState() {
        return m.A.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit = (function (e) {
        let t,
            n = [];
        return function i() {
            for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            let l = Date.now();
            for (null != t && (clearTimeout(t), (t = null)); n.length > 0 && n[0] <= l; ) n.shift();
            n.length < 5 ? (n.push(l + 2e4), e(...a)) : (t = setTimeout(() => i(...a), n[0] - l));
        };
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
var P = n(665260),
    U = n(572164),
    w = n(952818),
    G = n(885386),
    x = n(616356),
    k = n(652215),
    F = n(469177);
let V = new d.A("ConnectionStore"),
    B = new y.A(),
    H = new M(B),
    j = new (class extends b {
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
                t = G.Q$.getSetting();
            e = (0, P.lA)(e, k.Ajs.ALLOW_VOICE_RECORDING, t);
            let n =
                    (0, U.TD)() &&
                    (x.A.getCurrentUserActiveStream()?.state === k.XYD.ACTIVE ||
                        x.A.getCurrentUserActiveStream()?.state === k.XYD.PAUSED),
                i = (0, U.Ao)() && w.Ay.getVisibleGame()?.windowHandle != null;
            return (0, P.lA)(e, k.Ajs.CLIPS_ENABLED, n || i);
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: I.Ay.isSelfMute(),
                selfDeaf: I.Ay.isSelfDeaf(),
                selfVideo: I.Ay.isVideoEnabled(),
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
                selfMute: I.Ay.isSelfMute(),
                selfDeaf: I.Ay.isSelfDeaf(),
                selfVideo: I.Ay.isVideoEnabled(),
                preferredRegion: p.A.getPreferredRegion(),
                preferredRegions: p.A.getPreferredRegions(),
                videoStreamParameters: I.Ay.getVideoStreamParameters(),
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
                selfVideo: a,
                preferredRegion: s,
                preferredRegions: l,
                videoStreamParameters: o,
                flags: d = 0,
            } = e;
            a && h.A.getChannel(n)?.type === k.rbe.GUILD_STAGE_VOICE
                ? this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: a,
                      preferredRegion: s,
                      preferredRegions: l,
                      videoStreamParameters: o,
                      flags: d,
                  })
                : this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: a,
                      preferredRegion: s,
                      preferredRegions: l,
                      flags: d,
                  });
        }
    })(B);
(B.handleIdentify = () => {
    let e = E.default.getToken();
    if ((V.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = O.A.getState(),
        n = E.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...R.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: F.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: H.getInitialState(),
    };
}),
    (0, S.isDesktop)() &&
        C.A.powerMonitor.on("resume", () => {
            B.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    L.A.addOfflineCallback(() => {
        B.networkStateChange(15e3, "network detected offline.", !1);
    }),
    L.A.addOnlineCallback(() => {
        B.networkStateChange(5e3, "network detected online.");
    }),
    B.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    B.on("close", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    });
var W = n(33282);
n(237751);
var Y = n(73825),
    K = n(803306),
    $ = n(821956),
    z = n(628856),
    Z = n(945096),
    q = n(996512),
    X = n(814890),
    Q = n(505527),
    J = n(159993);
let ee = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var et = n(756377),
    en = n(736130),
    ei = n(464578),
    er = n(761821),
    ea = n(843010),
    es = n(95701),
    el = n(545934),
    eo = n(889227),
    ed = n(696451),
    ec = n(287809),
    eu = n(977997),
    e_ = n(97352),
    eE = n(166403),
    eA = n(107351),
    eh = n(284009),
    eI = n.n(eh),
    ef = n(723176),
    ep = n(766034),
    eT = n(314732),
    em = n(531743),
    eg = n(45773),
    eS = n(937724);
let eN = null,
    eC = {};
function eO(e, t, n) {
    return null == eN || eN.identifyTime !== e || (null != t && t.some((e) => e.id === eN.guild.id))
        ? null
        : n(eN.guild);
}
function eR(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (eI()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function eL(e) {
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
              threads: e.threads?.map((t) => (0, es.UE)(t, e.id)) ?? [],
              threadMessages: eD(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, es.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, es.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, es.UE)(t, e.id)) ?? [],
              threadMessages: eD(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function ey(e) {
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
              threads: e.threads?.map((t) => (0, es.UE)(t, e.id)) ?? [],
              threadMessages: eD(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, es.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, es.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, es.UE)(t, e.id)) ?? [],
              threadMessages: eD(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eD(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var ev = n(877166);
let eb = new d.A("ConnectionStore");
function eM(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== k.$pd.LISTENING } }
            : e;
    });
}
let eP = new ev.A(
        B,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, es.UE)(t),
                i = h.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    eU = new ev.A(
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
    ew = new ev.A(
        B,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eG = new ev.A(
        B,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    ex = {};
function ek(e, t) {
    for (let n of e) ex[n] = { preload: () => null, dispatch: t };
}
function eF(e, t, n) {
    for (let i of e) ex[i] = { preload: t, dispatch: n };
}
function eV(e) {
    let t = [];
    for (let n of e)
        null != n.member && eH(n.guild_id, n.member.user, n.member),
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
                oldChannelId: eu.A.getUserVoiceChannelId(n.guild_id, n.user_id),
                connectedAt: n.connected_at,
            });
    eB({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function eB(e) {
    l.h.dispatch(e).catch((t) => {
        eb.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            B.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function eH(e, t, n) {
    let {
            roles: i,
            nick: a,
            avatar: s,
            avatar_decoration_data: l,
            flags: o,
            premium_since: d,
            pending: c,
            joined_at: u,
            communication_disabled_until: _,
            unusual_dm_activity_until: E,
            collectibles: A,
            display_name_styles: h,
        } = n,
        I = ed.Ay.getMember(e, t.id),
        f = (0, z.t)(A),
        p = (0, Z.mT)(h);
    (null != I &&
        I.nick === a &&
        I.avatar === s &&
        r().isEqual(I.roles, i) &&
        (0, $.kn)(I.avatarDecoration ?? null, l ?? null) &&
        I.premiumSince === d &&
        I.isPending === c &&
        I.joinedAt === u &&
        I.communicationDisabledUntil === _ &&
        I.flags === o &&
        (I.unusualDMActivityUntil ?? null) === (E ?? null) &&
        r().isEqual(I.collectibles ?? null, f ?? null) &&
        r().isEqual(I.displayNameStyles ?? null, p ?? null)) ||
        eB({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: a,
            avatar: s,
            avatarDecoration: l,
            premiumSince: d,
            isPending: c,
            joinedAt: u,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: E,
            flags: o,
            collectibles: f,
            displayNameStyles: p,
        });
}
function ej(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && eH(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, eH(r, e, t);
                }
            });
}
function eW(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: eM(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function eY(e, t) {
    return e.map((e) => eK(e, t));
}
function eK(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = ee.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e) (0, J.Q)(t.content_classification) ? r.push(t) : i.push(t);
        return 0 === r.length
            ? { activities: e, hiddenActivities: t }
            : { activities: i, hiddenActivities: [...t, ...r] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eM(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function e$(e) {
    eG.add(e);
}
eF(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
    (e) => {
        ei.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = B.identifyStartTime), (n = ey(e)), (eN = { guild: e, identifyTime: t }), n);
                null != ec.default.getCurrentUser() &&
                    (eB({ type: "GUILD_CREATE", guild: i }),
                    eB({
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
                    eb.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    ek(["READY_SUPPLEMENTAL"], (e) => {
        ei.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = ei.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = eR(eC, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = eR(eC, r?.guilds[t]),
                                        a = eR(eC, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
                                }) ?? [],
                            o = eO(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != o && l.push(o), (eC = {}), { ...a, presences: s, guilds: l };
                    })(e, B.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = eY(e.presences || [], e.id);
                });
                let n = eY(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, es.UE)(e));
                ei.A.dispatchReadySupplemental.measure(() => {
                    eB({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                    eB({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    j.update();
            });
        }),
            setTimeout(() => eB({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    eF(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = ef.A.database()),
                    (n = (0, eS.O)() ? ep.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eS.O)() ? em.A.getGuildIds() : Promise.resolve(new Set()),
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
            return Promise.all([i, h.D.loadGuildIds(r) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? eB({ type: "LOGOUT" })
                : ei.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = ei.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      null != ef.A.database() &&
                                          !1 === n.databaseOk &&
                                          eg.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (eC = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          eI()(
                                                              null != eC[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          eC[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let d =
                                              l?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eR(eC, s?.[t])), eL(e)),
                                              ) ?? [],
                                          c = eO(t, l, (e) => eL(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, B.identifyStartTime, n),
                              )).private_channels.map((e) => (0, es.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              a = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              l = null == e.user_settings_proto ? void 0 : (0, er.Gd)(e.user_settings_proto);
                          ei.A.dispatchReady.measure(() => {
                              eB({
                                  type: "CONNECTION_OPEN",
                                  sessionId: e.session_id,
                                  authSessionIdHash: e.auth_session_id_hash,
                                  staticAuthSessionId: e.static_client_session_id,
                                  user: e.user,
                                  users: e.users,
                                  guilds: a,
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
                                  sessions: eW(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
                                  userSettingsProto: l,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: { flags: e.notification_settings.flags },
                                  geoRestrictedGuilds: s,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  eB({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  eB({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              H.update(),
                              j.update();
                      });
                  });
        },
    ),
    ek(["STATE_UPDATE"], (e) => {
        eB({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    ek(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    ek(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    ek(["RESUMED"], () => {
        H.forceUpdate(), j.forceUpdate(), eB({ type: "CONNECTION_RESUMED" });
    }),
    ek(["TYPING_START"], (e) => {
        null != e.member && eH(e.guild_id, e.member.user, e.member),
            eB({ type: "TYPING_START", guildId: e.guild_id, channelId: e.channel_id, userId: e.user_id });
    }),
    ek(["GUILD_RING_START"], (e) => {
        eB({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    ek(["GUILD_RING_STOP"], (e) => {
        eB({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    ek(["ACTIVITY_START"], (e) => {
        eB({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    ek(["ACTIVITY_USER_ACTION"], (e) => {
        eB({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    eF(
        ["MESSAGE_CREATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej(e),
                null != e.author &&
                    eB({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    eF(
        ["MESSAGE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej(e), eB({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    eF(
        ["MESSAGE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    eF(
        ["MESSAGE_DELETE_BULK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    eF(
        ["MESSAGE_ACK"],
        (e) => h.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            eB({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    ek(["GUILD_FEATURE_ACK"], (e) => {
        eB({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    ek(["USER_NON_CHANNEL_ACK"], (e) => {
        eB({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eF(
        ["CHANNEL_PINS_ACK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    eF(
        ["CHANNEL_PINS_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    eF(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eB({ type: t, channel: (0, es.UE)(e) });
        },
    ),
    ek(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        eB({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    ek(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        eB({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    ek(["CHANNEL_INFO"], (e, t) => {
        eB({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    ek(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    eF(
        ["CHANNEL_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eP.add(e);
        },
    ),
    eF(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            eB({ type: t, isNewlyCreated: n, channel: (0, es.UE)(i) });
        },
    ),
    eF(
        ["THREAD_LIST_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = h.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, es.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, en.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    ek(["THREAD_MEMBER_UPDATE"], (e) => {
        eB({
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
    ek(["THREAD_MEMBERS_UPDATE"], (e) => {
        eB({
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
    ek(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            eB({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    ek(["SOUNDBOARD_SOUNDS"], (e) => {
        eU.add(e);
    }),
    ek(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = h.A.getBasicChannel(e.channel_id);
        eB({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    eF(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) eB({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = ey(e);
                eB({ type: "GUILD_CREATE", guild: t }),
                    eB({
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
    ek(["GUILD_UPDATE"], (e) => {
        eB({ type: "GUILD_UPDATE", guild: e }), e.unavailable && eB({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    ek(["GUILD_PRUNE_UPDATE"], (e) => {
        eB({
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
    ek(["GUILD_BULK_BAN_UPDATE"], (e) => {
        eB({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    ek(["GUILD_DELETE"], (e) => {
        eB({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? eB({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && eB({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    ek(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            ew.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && eY(e.presences, e.guild_id).forEach(e$),
                ev.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    ek(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            eB({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && eY(e.presences, e.guild_id).forEach(e$),
                ev.A.flush();
        });
    }),
    ek(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            eB({
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
                displayNameStyles: (0, Z.mT)(e.display_name_styles),
            });
        },
    ),
    eF(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eB({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    eF(
        ["GUILD_ROLE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    ek(["GUILD_EMOJIS_UPDATE"], (e) => {
        eB({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    ek(["GUILD_STICKERS_UPDATE"], (e) => {
        eB({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    ek(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        eB({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    ek(["INTEGRATION_CREATE"], (e) => {
        eB({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    ek(["INTEGRATION_DELETE"], (e) => {
        eB({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    ek(["USER_UPDATE"], (e) => {
        eB({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    ek(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, er.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            eB({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    ek(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        eB({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    ek(["USER_CONNECTIONS_UPDATE"], () => {
        eB({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    ek(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        eB({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    ek(["USER_NOTE_UPDATE"], (e) => {
        eB({ type: "USER_NOTE_UPDATE", ...e });
    }),
    ek(["RELATIONSHIP_ADD"], (e) => {
        eB({
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
    ek(["RELATIONSHIP_REMOVE"], (e) => {
        eB({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    ek(["RELATIONSHIP_UPDATE"], (e) => {
        eB({
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
    ek(["GAME_RELATIONSHIP_ADD"], (e) => {
        eB({
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
    ek(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        eB({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    ek(["PRESENCE_UPDATE"], (e) => {
        e$(eK(e, e.guild_id));
    }),
    ek(["PRESENCES_REPLACE"], (e) => {
        eB({ type: "PRESENCES_REPLACE", presences: eY(e, void 0) });
    }),
    ek(["SESSIONS_REPLACE"], (e) => {
        eB({ type: "SESSIONS_REPLACE", sessions: eW(e) });
    }),
    ek(["VOICE_STATE_UPDATE"], (e) => {
        eV([e]);
    }),
    ek(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        eV(e.voice_states);
    }),
    ek(["VOICE_SERVER_UPDATE"], (e) => {
        eB({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    ek(["CALL_CREATE"], (e) => {
        eB({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            eB({
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
    ek(["CALL_UPDATE"], (e) => {
        eB({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    ek(["CALL_DELETE"], (e) => {
        eB({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    ek(["OAUTH2_TOKEN_CREATE"], (e) => {
        eB({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    ek(["OAUTH2_TOKEN_DELETE"], (e) => {
        eB({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    ek(["OAUTH2_TOKEN_REVOKE"], (e) => {
        eB({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    ek(["RECENT_MENTION_DELETE"], (e) => {
        eB({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    ek(["SAVED_MESSAGE_CREATE"], (e) => {
        eB({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, et.iz)(e) });
    }),
    ek(["SAVED_MESSAGE_DELETE"], (e) => {
        eB({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, et.x6)(e) });
    }),
    ek(["FRIEND_SUGGESTION_CREATE"], (e) => {
        eB({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    ek(["FRIEND_SUGGESTION_DELETE"], (e) => {
        eB({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    ek(["WEBHOOKS_UPDATE"], (e) => {
        eB({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    ek(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        eB({
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
    ek(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        eB({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: Q.v.VOTE,
        });
    }),
    ek(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        eB({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: Q.v.VOTE })),
        });
    }),
    ek(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        eB({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    ek(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        eB({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    ek(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        eB({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    ek(["PAYMENT_UPDATE"], (e) => {
        eB({ type: "PAYMENT_UPDATE", payment: e });
    }),
    ek(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        eB({ type: t, entitlement: e });
    }),
    ek(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, ea.f)() && (n(277984).$o(), Y.jv(e_.A.getFetchedSKUIDs()));
    }),
    ek(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        K.fetchCurrentUser(), (0, ea.f)() && n(277984).hP();
    }),
    ek(["WISHLIST_ITEM_PURCHASED"], (e) => {
        eB({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    ek(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o0(e.badge_id);
    }),
    ek(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        eB({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: el.A.createFromServer(e, eE.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    ek(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        eB({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: el.A.createFromServer(e, eE.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    ek(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        eB({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    ek(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        eB({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    ek(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eA.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && eB({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    ek(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eH(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                e$(eK(i, e.guild_id));
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
                ev.A.flush(),
                eB({
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
    ek(["GIFT_CODE_UPDATE"], (e) => {
        eB({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    ek(["GIFT_CODE_CREATE"], (e) => {
        eB({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    ek(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        eB({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    ek(["STREAM_CREATE"], (e) => {
        eB({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    ek(["STREAM_SERVER_UPDATE"], (e) => {
        eB({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    ek(["STREAM_UPDATE"], (e) => {
        eB({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    ek(["STREAM_DELETE"], (e) => {
        eB({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    ek(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        eB({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    ek(["REACTION_NOTIFICATION_SENT"], (e) => {
        eB({
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
    ek(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        eB({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    ek(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        eB({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    ek(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        eB({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    ek(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        eB({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    ek(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        eB({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    ek(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        eB({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    ek(["QUEST_PREVIEW_UPDATE"], (e) => {
        eB({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    ek(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id });
    }),
    ek(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        eB({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    ek(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        eB({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    ek(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        eB({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    ek(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        eB({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    ek(["INTERACTION_CREATE"], (e) => {
        eB({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    ek(["INTERACTION_SUCCESS"], (e) => {
        eB({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    ek(["INTERACTION_FAILURE"], (e) => {
        eB({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    ek(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        eB({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    ek(["INTERACTION_MODAL_CREATE"], (e) => {
        eB({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, X.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    ek(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        eB({
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
    ek(["STAGE_INSTANCE_CREATE"], (e) => {
        eB({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    ek(["STAGE_INSTANCE_UPDATE"], (e) => {
        eB({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    ek(["STAGE_INSTANCE_DELETE"], (e) => {
        eB({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    ek(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        eB({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    ek(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        eB({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    ek(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        eB({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    ek(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        eB({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    ek(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        eB({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    ek(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        eB({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    ek(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        eB({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    ek(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        eB({
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
    ek(["CLIPS_REMOTE_TRIGGER"], (e) => {
        eB({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    ek(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        eB({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new eo.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    ek(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        eB({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new eo.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    ek(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        eB({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    ek(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        eB({
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
    eF(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                instance: {
                    application_id: e.application_id,
                    launch_id: e.launch_id,
                    composite_instance_id: e.composite_instance_id,
                    location: e.location,
                    participants: e.participants ?? [],
                    content_classification: e.content_classification,
                },
            });
        },
    ),
    ek(["AUTH_SESSION_CHANGE"], (e) => {
        eB({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    ek(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        eB({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    ek(["USER_CONNECTIONS_CALLBACK"], (e) => {
        eB({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    ek(["DELETED_ENTITY_IDS"], (e) => {
        eB({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    eF(
        ["CHANNEL_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.integrity_check ||
                e.channels.forEach((e) => {
                    eP.add(e);
                }),
                eB({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    ek(["CONSOLE_COMMAND_UPDATE"], (e) => {
        eB({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    eF(
        ["PASSIVE_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eB({
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
    ek(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        eB({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    ek(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        eB({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    ek(["LAST_MESSAGES"], (e) => {
        eB({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    ek(["AUTHENTICATOR_UPDATE"], (e) => {
        eB({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    ek(["AUTHENTICATOR_CREATE"], (e) => {
        eB({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    ek(["AUTHENTICATOR_DELETE"], (e) => {
        eB({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    ek(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        eB({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    ek(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        eB({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    ek(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        eB({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    ek(["USER_APPLICATION_UPDATE"], (e) => {
        eB({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    ek(["USER_APPLICATION_REMOVE"], (e) => {
        eB({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    ek(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        eB({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    ek(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        eB({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    ek(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        eB({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    ek(["WALLET_BALANCE_UPDATE"], (e) => {
        eB({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    ek(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    ek(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    ek(["GAME_SERVER_DELETE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    ek(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        eB({ type: t, guildId: e.guild_id });
    }),
    ek(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        eB({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    ek(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        eB({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    ek(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        eB({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    ek(["GUILD_ROOM_CONNECT"], (e, t) => {
        eB({ type: t, room: (0, q.S)(e) });
    }),
    ek(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        eB({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    ek(["GUILD_ROOM_UPDATE"], (e, t) => {
        eB({ type: t, room: (0, q.S)(e) });
    }),
    ek(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        eB({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    }),
    ek(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (e) => {
        eB({
            type: "MESSAGE_REQUEST_NOTIFICATION_SENT",
            triggeringUserId: e.triggering_user_id,
            numMutualGuilds: e.num_mutual_guilds,
        });
    });
var ez = n(355097);
let eZ = window.DiscordNative;
B.dispatcher.getDispatchHandler = function (e) {
    return ex[e];
};
let eq = new d.A("ConnectionStore"),
    eX = 0,
    eQ = null,
    eJ = !0,
    e0 = null,
    e1 = null;
async function e2(e) {
    (eX = Date.now()), (eQ = e.sessionId), H.handleConnectionOpen();
    let t = {},
        n = T.Ay.getVoiceChannelId();
    if (null != n) {
        let e = s.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (s.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await eZ?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !eJ)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, u.CX)(n));
        } else f.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
    }
    j.update(t, !0), (eJ = !1), (e1 = null);
}
function e3() {
    j.update();
}
function e5() {
    return j.update(), !1;
}
function e4() {
    return H.update(), !1;
}
function e6(e) {
    B.isSessionEstablished() && B.streamDelete(e);
}
class e7 extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(E.default, A.A, h.A, I.Ay, f.A, p.A, T.Ay, m.A, g.A, _.A),
            this.syncWith([I.Ay], e5),
            this.syncWith([m.A], e4);
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
        return eX;
    }
}
let e8 = new e7(l.h, {
    START_SESSION: function () {
        return B.isClosed()
            ? (eq.verbose("Socket is reconnecting because of starting new session"), B.connect())
            : (eq.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            eq.verbose("session refresh dispatched", { isEstablished: B.isSessionEstablished() }),
            !!B.isSessionEstablished() && (B.close(), B.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && H.handleAccountSwitch(), eq.verbose("Closing socket because of logout"), B.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (B.close(), B.dispatcher.clear(), B.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        e2(e);
    },
    CONNECTION_RESUMED: function () {
        e1 = null;
    },
    CONNECTION_CLOSED: function () {
        eq.verbose("connection closed dispatched"), (eX = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== k.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? B.streamPing(e.streamKey) : B.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            j.update({ guildId: e.guildId, channelId: e.channelId }),
            (e1 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                e0 === k.g6G.BACKGROUND &&
                (null == e.channelId ? B.close(!0) : B.isClosed() && (W.V(!1), B.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (E.default.getId() !== t.userId) return e;
            if (t.sessionId === eQ) {
                if (null != e1)
                    return eq.verbose("Ignoring voice state for own session due to VSU lock on channel:", e1), e;
                j.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== j.guildId) return e;
                j.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === j.guildId && j.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === j.channelId && j.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === j.channelId) {
            if (e1 === t) return !1;
            j.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, S.isIOS)()
                ? (E.default.isAuthenticated() &&
                      (e0 === k.g6G.INACTIVE && e.state === k.g6G.BACKGROUND && null == j.channelId
                          ? B.close(!0)
                          : e0 === k.g6G.BACKGROUND &&
                            e.state === k.g6G.ACTIVE &&
                            B.isClosed() &&
                            (W.V(!1), B.connect())),
                  (e0 = e.state))
                : e.state === k.g6G.ACTIVE &&
                  (W.V(!1), E.default.isAuthenticated() && B.resetBackoff("App state is active")),
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
    STREAM_CREATE: e3,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (B.isSessionEstablished()) {
            let e = null != n ? h.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            B.streamCreate(t, n, i, e ?? p.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (B.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = g.A.getAllActiveStreamKeys().find((e) => (0, c.Iy)(e).ownerId === E.default.getId())),
                    g.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => e6(e));
            }
            B.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return e6(t), e3(), !1;
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
        B.connectionState !== N.A.WILL_RECONNECT && B.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: e3,
    RUNNING_GAMES_CHANGE: e3,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === ez.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e3();
    },
});
