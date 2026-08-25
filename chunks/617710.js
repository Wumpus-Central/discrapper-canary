"use strict";
n.d(t, { A: () => e7 });
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
    R = n(183636),
    O = n(174459),
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
    w = n(885386),
    G = n(652215),
    x = n(469177);
let k = new d.A("ConnectionStore"),
    F = new y.A(),
    V = new M(F),
    B = new (class extends b {
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
                t = w.Q$.getSetting();
            return (
                (e = (0, P.lA)(e, G.Ajs.ALLOW_VOICE_RECORDING, t)), (e = (0, P.lA)(e, G.Ajs.CLIPS_ENABLED, (0, U.T)()))
            );
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
            a && h.A.getChannel(n)?.type === G.rbe.GUILD_STAGE_VOICE
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
    })(F);
(F.handleIdentify = () => {
    let e = E.default.getToken();
    if ((k.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = R.A.getState(),
        n = E.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...O.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: x.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: V.getInitialState(),
    };
}),
    (0, S.isDesktop)() &&
        C.A.powerMonitor.on("resume", () => {
            F.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    L.A.addOfflineCallback(() => {
        F.networkStateChange(15e3, "network detected offline.", !1);
    }),
    L.A.addOnlineCallback(() => {
        F.networkStateChange(5e3, "network detected online.");
    }),
    F.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    F.on("close", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    });
var H = n(33282);
n(237751);
var j = n(73825),
    W = n(803306),
    Y = n(821956),
    K = n(628856),
    $ = n(870600),
    z = n(945096),
    Z = n(996512),
    q = n(814890),
    X = n(505527),
    Q = n(159993);
let J = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = n(756377),
    et = n(736130),
    en = n(464578),
    ei = n(761821),
    er = n(843010),
    ea = n(95701),
    es = n(545934),
    el = n(889227),
    eo = n(696451),
    ed = n(287809),
    ec = n(977997),
    eu = n(97352),
    e_ = n(166403),
    eE = n(107351),
    eA = n(284009),
    eh = n.n(eA),
    eI = n(723176),
    ef = n(766034),
    ep = n(314732),
    eT = n(531743),
    em = n(45773),
    eg = n(937724);
let eS = null,
    eN = {};
function eC(e, t, n) {
    return null == eS || eS.identifyTime !== e || (null != t && t.some((e) => e.id === eS.guild.id))
        ? null
        : n(eS.guild);
}
function eR(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (eh()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function eO(e) {
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
              threads: e.threads?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
              threadMessages: ey(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, ea.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
              threadMessages: ey(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eL(e) {
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
              threads: e.threads?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
              threadMessages: ey(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, ea.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, ea.UE)(t, e.id)) ?? [],
              threadMessages: ey(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function ey(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var eD = n(877166);
let ev = new d.A("ConnectionStore");
function eb(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== G.$pd.LISTENING } }
            : e;
    });
}
let eM = new eD.A(
        F,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, ea.UE)(t),
                i = h.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    eP = new eD.A(
        F,
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
    eU = new eD.A(
        F,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    ew = new eD.A(
        F,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eG = {};
function ex(e, t) {
    for (let n of e) eG[n] = { preload: () => null, dispatch: t };
}
function ek(e, t, n) {
    for (let i of e) eG[i] = { preload: t, dispatch: n };
}
function eF(e, t) {
    let n = [];
    for (let t of e)
        null != t.member && eB(t.guild_id, t.member.user, t.member),
            n.push({
                userId: t.user_id,
                guildId: t.guild_id,
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
                oldChannelId: ec.A.getUserVoiceChannelId(t.guild_id, t.user_id),
                connectedAt: t.connected_at,
            });
    eV({ type: "VOICE_STATE_UPDATES", voiceStates: n, receivedAt: t });
}
function eV(e) {
    l.h.dispatch(e).catch((t) => {
        ev.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            F.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function eB(e, t, n) {
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
        I = eo.Ay.getMember(e, t.id),
        f = (0, K.t)(A),
        p = (0, z.mT)(h);
    (null != I &&
        I.nick === a &&
        I.avatar === s &&
        r().isEqual(I.roles, i) &&
        (0, Y.kn)(I.avatarDecoration ?? null, l ?? null) &&
        I.premiumSince === d &&
        I.isPending === c &&
        I.joinedAt === u &&
        I.communicationDisabledUntil === _ &&
        I.flags === o &&
        (I.unusualDMActivityUntil ?? null) === (E ?? null) &&
        r().isEqual(I.collectibles ?? null, f ?? null) &&
        r().isEqual(I.displayNameStyles ?? null, p ?? null)) ||
        eV({
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
function eH(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && eB(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, eB(r, e, t);
                }
            });
}
function ej(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: eb(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function eW(e, t) {
    return e.map((e) => eY(e, t));
}
function eY(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = J.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e) (0, Q.Q)(t.content_classification) ? r.push(t) : i.push(t);
        return 0 === r.length
            ? { activities: e, hiddenActivities: t }
            : { activities: i, hiddenActivities: [...t, ...r] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eb(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function eK(e) {
    ew.add(e);
}
ek(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
    (e) => {
        en.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = F.identifyStartTime), (n = eL(e)), (eS = { guild: e, identifyTime: t }), n);
                null != ed.default.getCurrentUser() &&
                    (eV({ type: "GUILD_CREATE", guild: i }),
                    eV({
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
                    ev.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    ex(["READY_SUPPLEMENTAL"], (e) => {
        en.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = en.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = eR(eN, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = eR(eN, r?.guilds[t]),
                                        a = eR(eN, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
                                }) ?? [],
                            o = eC(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != o && l.push(o), (eN = {}), { ...a, presences: s, guilds: l };
                    })(e, F.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = eW(e.presences || [], e.id);
                });
                let n = eW(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, ea.UE)(e));
                en.A.dispatchReadySupplemental.measure(() => {
                    eV({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                    eV({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    B.update();
            });
        }),
            setTimeout(() => eV({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    ek(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = eI.A.database()),
                    (n = (0, eg.O)() ? ef.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eg.O)() ? eT.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? ep.A.okAsync(t) : Promise.resolve(!1),
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
                ? eV({ type: "LOGOUT" })
                : en.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = en.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      null != eI.A.database() &&
                                          !1 === n.databaseOk &&
                                          em.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (eN = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          eh()(
                                                              null != eN[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          eN[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let d =
                                              l?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eR(eN, s?.[t])), eO(e)),
                                              ) ?? [],
                                          c = eC(t, l, (e) => eO(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, F.identifyStartTime, n),
                              )).private_channels.map((e) => (0, ea.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              a = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              l = null == e.user_settings_proto ? void 0 : (0, ei.Gd)(e.user_settings_proto);
                          en.A.dispatchReady.measure(() => {
                              eV({
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
                                  sessions: ej(e.sessions ?? []),
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
                                  eV({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  eV({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              V.update(),
                              B.update();
                      });
                  });
        },
    ),
    ex(["STATE_UPDATE"], (e) => {
        eV({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    ex(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    ex(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    ex(["RESUMED"], () => {
        V.forceUpdate(), B.forceUpdate(), eV({ type: "CONNECTION_RESUMED" });
    }),
    ex(["TYPING_START"], (e) => {
        null != e.member && eB(e.guild_id, e.member.user, e.member),
            eV({
                type: "TYPING_START",
                guildId: e.guild_id,
                channelId: e.channel_id,
                userId: e.user_id,
                customTypingIndicatorConfig: (0, $.cE)(e.typing_indicator_style),
            });
    }),
    ex(["GUILD_RING_START"], (e) => {
        eV({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    ex(["GUILD_RING_STOP"], (e) => {
        eV({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    ex(["ACTIVITY_START"], (e) => {
        eV({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    ex(["ACTIVITY_USER_ACTION"], (e) => {
        eV({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    ek(
        ["MESSAGE_CREATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH(e),
                null != e.author &&
                    eV({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    ek(
        ["MESSAGE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH(e), eV({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    ek(
        ["MESSAGE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    ek(
        ["MESSAGE_DELETE_BULK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    ek(
        ["MESSAGE_ACK"],
        (e) => h.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            eV({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    ex(["GUILD_FEATURE_ACK"], (e) => {
        eV({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    ex(["USER_NON_CHANNEL_ACK"], (e) => {
        eV({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    ek(
        ["CHANNEL_PINS_ACK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    ek(
        ["CHANNEL_PINS_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    ek(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eV({ type: t, channel: (0, ea.UE)(e) });
        },
    ),
    ex(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        eV({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    ex(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        eV({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    ex(["CHANNEL_INFO"], (e, t) => {
        eV({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    ex(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    ek(
        ["CHANNEL_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eM.add(e);
        },
    ),
    ek(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            eV({ type: t, isNewlyCreated: n, channel: (0, ea.UE)(i) });
        },
    ),
    ek(
        ["THREAD_LIST_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = h.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, ea.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, et.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    ex(["THREAD_MEMBER_UPDATE"], (e) => {
        eV({
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
    ex(["THREAD_MEMBERS_UPDATE"], (e) => {
        eV({
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
    ex(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            eV({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    ex(["SOUNDBOARD_SOUNDS"], (e) => {
        eP.add(e);
    }),
    ex(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = h.A.getBasicChannel(e.channel_id);
        eV({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    ek(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) eV({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = eL(e);
                eV({ type: "GUILD_CREATE", guild: t }),
                    eV({
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
    ex(["GUILD_UPDATE"], (e) => {
        eV({ type: "GUILD_UPDATE", guild: e }), e.unavailable && eV({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    ex(["GUILD_PRUNE_UPDATE"], (e) => {
        eV({
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
    ex(["GUILD_BULK_BAN_UPDATE"], (e) => {
        eV({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    ex(["GUILD_DELETE"], (e) => {
        eV({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? eV({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && eV({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    ex(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            eU.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && eW(e.presences, e.guild_id).forEach(eK),
                eD.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    ex(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            eV({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && eW(e.presences, e.guild_id).forEach(eK),
                eD.A.flush();
        });
    }),
    ex(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            eV({
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
                collectibles: (0, K.t)(e.collectibles),
                displayNameStyles: (0, z.mT)(e.display_name_styles),
            });
        },
    ),
    ek(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eV({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    ek(
        ["GUILD_ROLE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    ex(["GUILD_EMOJIS_UPDATE"], (e) => {
        eV({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    ex(["GUILD_STICKERS_UPDATE"], (e) => {
        eV({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    ex(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        eV({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    ex(["INTEGRATION_CREATE"], (e) => {
        eV({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    ex(["INTEGRATION_DELETE"], (e) => {
        eV({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    ex(["USER_UPDATE"], (e) => {
        eV({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    ex(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, ei.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            eV({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    ex(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        eV({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    ex(["USER_CONNECTIONS_UPDATE"], () => {
        eV({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    ex(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        eV({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    ex(["USER_NOTE_UPDATE"], (e) => {
        eV({ type: "USER_NOTE_UPDATE", ...e });
    }),
    ex(["RELATIONSHIP_ADD"], (e) => {
        eV({
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
    ex(["RELATIONSHIP_REMOVE"], (e) => {
        eV({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    ex(["RELATIONSHIP_UPDATE"], (e) => {
        eV({
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
    ex(["GAME_RELATIONSHIP_ADD"], (e) => {
        eV({
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
    ex(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        eV({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    ex(["PRESENCE_UPDATE"], (e) => {
        eK(eY(e, e.guild_id));
    }),
    ex(["PRESENCES_REPLACE"], (e) => {
        eV({ type: "PRESENCES_REPLACE", presences: eW(e, void 0) });
    }),
    ex(["SESSIONS_REPLACE"], (e) => {
        eV({ type: "SESSIONS_REPLACE", sessions: ej(e) });
    }),
    ex(["VOICE_STATE_UPDATE"], (e, t, n, i) => {
        eF([e], i);
    }),
    ex(["VOICE_STATE_UPDATE_BATCH"], (e, t, n, i) => {
        eF(e.voice_states, i);
    }),
    ex(["VOICE_SERVER_UPDATE"], (e) => {
        eV({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    ex(["CALL_CREATE"], (e) => {
        eV({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            eV({
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
    ex(["CALL_UPDATE"], (e) => {
        eV({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    ex(["CALL_DELETE"], (e) => {
        eV({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    ex(["OAUTH2_TOKEN_CREATE"], (e) => {
        eV({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    ex(["OAUTH2_TOKEN_DELETE"], (e) => {
        eV({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    ex(["OAUTH2_TOKEN_REVOKE"], (e) => {
        eV({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    ex(["RECENT_MENTION_DELETE"], (e) => {
        eV({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    ex(["SAVED_MESSAGE_CREATE"], (e) => {
        eV({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, ee.iz)(e) });
    }),
    ex(["SAVED_MESSAGE_DELETE"], (e) => {
        eV({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, ee.x6)(e) });
    }),
    ex(["FRIEND_SUGGESTION_CREATE"], (e) => {
        eV({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    ex(["FRIEND_SUGGESTION_DELETE"], (e) => {
        eV({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    ex(["WEBHOOKS_UPDATE"], (e) => {
        eV({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    ex(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        eV({
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
    ex(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        eV({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: X.v.VOTE,
        });
    }),
    ex(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        eV({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: X.v.VOTE })),
        });
    }),
    ex(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        eV({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    ex(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        eV({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    ex(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        eV({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    ex(["PAYMENT_UPDATE"], (e) => {
        eV({ type: "PAYMENT_UPDATE", payment: e });
    }),
    ex(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        eV({ type: t, entitlement: e });
    }),
    ex(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, er.f)() && (n(277984).$o(), j.jv(eu.A.getFetchedSKUIDs()));
    }),
    ex(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        W.fetchCurrentUser(), (0, er.f)() && n(277984).hP();
    }),
    ex(["WISHLIST_ITEM_PURCHASED"], (e) => {
        eV({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    ex(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o0(e.badge_id);
    }),
    ex(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        eV({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: es.A.createFromServer(e, e_.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    ex(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        eV({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: es.A.createFromServer(e, e_.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    ex(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        eV({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    ex(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        eV({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    ex(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eE.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && eV({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    ex(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eB(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                eK(eY(i, e.guild_id));
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
                eD.A.flush(),
                eV({
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
    ex(["GIFT_CODE_UPDATE"], (e) => {
        eV({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    ex(["GIFT_CODE_CREATE"], (e) => {
        eV({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    ex(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        eV({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    ex(["STREAM_CREATE"], (e) => {
        eV({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    ex(["STREAM_SERVER_UPDATE"], (e) => {
        eV({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    ex(["STREAM_UPDATE"], (e) => {
        eV({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    ex(["STREAM_DELETE"], (e) => {
        eV({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    ex(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        eV({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    ex(["REACTION_NOTIFICATION_SENT"], (e) => {
        eV({
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
    ex(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        eV({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    ex(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        eV({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    ex(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        eV({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    ex(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        eV({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    ex(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        eV({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    ex(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        eV({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    ex(["QUEST_PREVIEW_UPDATE"], (e) => {
        eV({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    ex(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id });
    }),
    ex(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        eV({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    ex(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        eV({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    ex(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        eV({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    ex(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        eV({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    ex(["INTERACTION_CREATE"], (e) => {
        eV({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    ex(["INTERACTION_SUCCESS"], (e) => {
        eV({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    ex(["INTERACTION_FAILURE"], (e) => {
        eV({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    ex(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        eV({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    ex(["INTERACTION_MODAL_CREATE"], (e) => {
        eV({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, q.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    ex(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        eV({
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
    ex(["STAGE_INSTANCE_CREATE"], (e) => {
        eV({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    ex(["STAGE_INSTANCE_UPDATE"], (e) => {
        eV({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    ex(["STAGE_INSTANCE_DELETE"], (e) => {
        eV({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    ex(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        eV({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    ex(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        eV({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    ex(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        eV({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    ex(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        eV({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    ex(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        eV({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    ex(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        eV({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    ex(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        eV({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    ex(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        eV({
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
    ex(["CLIPS_REMOTE_TRIGGER"], (e) => {
        eV({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    ex(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        eV({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new el.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    ex(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        eV({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new el.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    ex(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        eV({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    ex(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        eV({
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
    ek(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({
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
    ex(["AUTH_SESSION_CHANGE"], (e) => {
        eV({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    ex(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        eV({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    ex(["USER_CONNECTIONS_CALLBACK"], (e) => {
        eV({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    ex(["DELETED_ENTITY_IDS"], (e) => {
        eV({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    ek(
        ["CHANNEL_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.integrity_check ||
                e.channels.forEach((e) => {
                    eM.add(e);
                }),
                eV({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    ex(["CONSOLE_COMMAND_UPDATE"], (e) => {
        eV({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    ek(
        ["PASSIVE_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV({
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
    ex(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        eV({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    ex(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        eV({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    ex(["LAST_MESSAGES"], (e) => {
        eV({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    ex(["AUTHENTICATOR_UPDATE"], (e) => {
        eV({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    ex(["AUTHENTICATOR_CREATE"], (e) => {
        eV({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    ex(["AUTHENTICATOR_DELETE"], (e) => {
        eV({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    ex(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        eV({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    ex(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        eV({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    ex(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        eV({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    ex(["USER_APPLICATION_UPDATE"], (e) => {
        eV({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    ex(["USER_APPLICATION_REMOVE"], (e) => {
        eV({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    ex(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        eV({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    ex(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        eV({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    ex(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        eV({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    ex(["WALLET_BALANCE_UPDATE"], (e) => {
        eV({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    ex(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    ex(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    ex(["GAME_SERVER_DELETE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    ex(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        eV({ type: t, guildId: e.guild_id });
    }),
    ex(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        eV({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    ex(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        eV({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    ex(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        eV({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    ex(["GUILD_ROOM_CONNECT"], (e, t) => {
        eV({ type: t, room: (0, Z.S)(e) });
    }),
    ex(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        eV({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    ex(["GUILD_ROOM_UPDATE"], (e, t) => {
        eV({ type: t, room: (0, Z.S)(e) });
    }),
    ex(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        eV({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    }),
    ex(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (e) => {
        eV({
            type: "MESSAGE_REQUEST_NOTIFICATION_SENT",
            triggeringUserId: e.triggering_user_id,
            numMutualGuilds: e.num_mutual_guilds,
        });
    });
var e$ = n(355097);
let ez = window.DiscordNative;
F.dispatcher.getDispatchHandler = function (e) {
    return eG[e];
};
let eZ = new d.A("ConnectionStore"),
    eq = 0,
    eX = null,
    eQ = !0,
    eJ = null,
    e0 = null;
async function e1(e) {
    (eq = Date.now()), (eX = e.sessionId), V.handleConnectionOpen();
    let t = {},
        n = T.Ay.getVoiceChannelId();
    if (null != n) {
        let e = s.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (s.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await ez?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !eQ)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, u.CX)(n));
        } else f.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
    }
    B.update(t, !0), (eQ = !1), (e0 = null);
}
function e2() {
    B.update();
}
function e3() {
    return B.update(), !1;
}
function e5() {
    return V.update(), !1;
}
function e4(e) {
    F.isSessionEstablished() && F.streamDelete(e);
}
class e6 extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(E.default, A.A, h.A, I.Ay, f.A, p.A, T.Ay, m.A, g.A, _.A),
            this.syncWith([I.Ay], e3),
            this.syncWith([m.A], e5);
    }
    getSocket() {
        return F;
    }
    isTryingToConnect() {
        return !F.isClosed();
    }
    isConnected() {
        return F.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return F.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return eq;
    }
}
let e7 = new e6(l.h, {
    START_SESSION: function () {
        return F.isClosed()
            ? (eZ.verbose("Socket is reconnecting because of starting new session"), F.connect())
            : (eZ.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            eZ.verbose("session refresh dispatched", { isEstablished: F.isSessionEstablished() }),
            !!F.isSessionEstablished() && (F.close(), F.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && V.handleAccountSwitch(), eZ.verbose("Closing socket because of logout"), F.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (F.close(), F.dispatcher.clear(), F.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        e1(e);
    },
    CONNECTION_RESUMED: function () {
        e0 = null;
    },
    CONNECTION_CLOSED: function () {
        eZ.verbose("connection closed dispatched"), (eq = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== G.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? F.streamPing(e.streamKey) : F.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            B.update({ guildId: e.guildId, channelId: e.channelId }),
            (e0 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                eJ === G.g6G.BACKGROUND &&
                (null == e.channelId ? F.close(!0) : F.isClosed() && (H.V(!1), F.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (E.default.getId() !== t.userId) return e;
            if (t.sessionId === eX) {
                if (null != e0)
                    return eZ.verbose("Ignoring voice state for own session due to VSU lock on channel:", e0), e;
                B.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== B.guildId) return e;
                B.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === B.guildId && B.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === B.channelId && B.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === B.channelId) {
            if (e0 === t) return !1;
            B.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, S.isIOS)()
                ? (E.default.isAuthenticated() &&
                      (eJ === G.g6G.INACTIVE && e.state === G.g6G.BACKGROUND && null == B.channelId
                          ? F.close(!0)
                          : eJ === G.g6G.BACKGROUND &&
                            e.state === G.g6G.ACTIVE &&
                            F.isClosed() &&
                            (H.V(!1), F.connect())),
                  (eJ = e.state))
                : e.state === G.g6G.ACTIVE &&
                  (H.V(!1), E.default.isAuthenticated() && F.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            F.isSessionEstablished() &&
                ("userIds" in e
                    ? r()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              F.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : F.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        F.isSessionEstablished() && F.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return F.isSessionEstablished() && F.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return F.isSessionEstablished() && F.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            F.isSessionEstablished() &&
                t.forEach((e) => {
                    F.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: e2,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (F.isSessionEstablished()) {
            let e = null != n ? h.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            F.streamCreate(t, n, i, e ?? p.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (F.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = g.A.getAllActiveStreamKeys().find((e) => (0, c.Iy)(e).ownerId === E.default.getId())),
                    g.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => e4(e));
            }
            F.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return e4(t), e2(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        F.isSessionEstablished() && F.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return F.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        F.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        F.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return F.isSessionEstablished() && F.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        F.connectionState !== N.A.WILL_RECONNECT && F.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: e2,
    RUNNING_GAMES_CHANGE: e2,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === e$.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e2();
    },
});
