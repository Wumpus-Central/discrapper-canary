"use strict";
n.d(t, { A: () => e9 });
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
    I = n(186295),
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
            n = [],
            i = function () {
                for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                let l = Date.now();
                for (null != t && (clearTimeout(t), (t = null)); n.length > 0 && n[0] <= l; ) n.shift();
                n.length < 5 ? (n.push(l + 2e4), e(...a)) : (t = setTimeout(() => i(...a), n[0] - l));
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
    let t = R.A.getState(),
        n = E.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...O.default.getSuperProperties(),
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
    q = n(945096),
    Z = n(996512),
    X = n(692744),
    Q = n(814890),
    J = n(505527),
    ee = n(159993);
let et = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var en = n(756377),
    ei = n(736130),
    er = n(464578),
    ea = n(761821),
    es = n(843010),
    el = n(95701),
    eo = n(545934),
    ed = n(889227),
    ec = n(696451),
    eu = n(287809),
    e_ = n(977997),
    eE = n(97352),
    eA = n(166403),
    eh = n(107351),
    eI = n(284009),
    ef = n.n(eI),
    ep = n(723176),
    eT = n(766034),
    em = n(314732),
    eg = n(531743),
    eS = n(45773),
    eN = n(937724);
let eC = null,
    eR = {};
function eO(e, t, n) {
    return null == eC || eC.identifyTime !== e || (null != t && t.some((e) => e.id === eC.guild.id))
        ? null
        : n(eC.guild);
}
function eL(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (ef()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function ey(e) {
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
              threadMessages: ev(e.threads),
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
              threadMessages: ev(e.threads),
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
              threadMessages: ev(e.threads),
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
              threadMessages: ev(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function ev(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var eb = n(877166);
let eM = new d.A("ConnectionStore");
function eP(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== k.$pd.LISTENING } }
            : e;
    });
}
let eU = new eb.A(
        B,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, el.UE)(t),
                i = h.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    ew = new eb.A(
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
    eG = new eb.A(
        B,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    ex = new eb.A(
        B,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    ek = {};
function eF(e, t) {
    for (let n of e) ek[n] = { preload: () => null, dispatch: t };
}
function eV(e, t, n) {
    for (let i of e) ek[i] = { preload: t, dispatch: n };
}
function eB(e) {
    let t = [];
    for (let n of e)
        null != n.member && ej(n.guild_id, n.member.user, n.member),
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
                oldChannelId: e_.A.getUserVoiceChannelId(n.guild_id, n.user_id),
                connectedAt: n.connected_at,
            });
    eH({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function eH(e) {
    l.h.dispatch(e).catch((t) => {
        eM.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            B.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function ej(e, t, n) {
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
        I = ec.Ay.getMember(e, t.id),
        f = (0, z.t)(A),
        p = (0, q.mT)(h);
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
        eH({
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
function eW(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && ej(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, ej(r, e, t);
                }
            });
}
function eY(e) {
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
function eK(e, t) {
    return e.map((e) => e$(e, t));
}
function e$(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = et.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e) (0, ee.Q)(t.content_classification) ? r.push(t) : i.push(t);
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
function ez(e) {
    ex.add(e);
}
eV(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
    (e) => {
        er.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = B.identifyStartTime), (n = eD(e)), (eC = { guild: e, identifyTime: t }), n);
                null != eu.default.getCurrentUser() &&
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
    eF(["READY_SUPPLEMENTAL"], (e) => {
        er.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = er.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = eL(eR, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = eL(eR, r?.guilds[t]),
                                        a = eL(eR, i?.[t]);
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
                        return null != o && l.push(o), (eR = {}), { ...a, presences: s, guilds: l };
                    })(e, B.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = eK(e.presences || [], e.id);
                });
                let n = eK(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, el.UE)(e));
                er.A.dispatchReadySupplemental.measure(() => {
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
                    j.update();
            });
        }),
            setTimeout(() => eH({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    eV(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = ep.A.database()),
                    (n = (0, eN.O)() ? eT.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eN.O)() ? eg.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? em.A.okAsync(t) : Promise.resolve(!1),
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
                ? eH({ type: "LOGOUT" })
                : er.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = er.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      null != ep.A.database() &&
                                          !1 === n.databaseOk &&
                                          eS.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (eR = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          ef()(
                                                              null != eR[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          eR[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let d =
                                              l?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eL(eR, s?.[t])), ey(e)),
                                              ) ?? [],
                                          c = eO(t, l, (e) => ey(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, B.identifyStartTime, n),
                              )).private_channels.map((e) => (0, el.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              a = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              l = null == e.user_settings_proto ? void 0 : (0, ea.Gd)(e.user_settings_proto);
                          er.A.dispatchReady.measure(() => {
                              eH({
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
                                  sessions: eY(e.sessions ?? []),
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
                                  eH({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  eH({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              H.update(),
                              j.update();
                      });
                  });
        },
    ),
    eF(["STATE_UPDATE"], (e) => {
        eH({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    eF(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    eF(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    eF(["RESUMED"], () => {
        H.forceUpdate(), j.forceUpdate(), eH({ type: "CONNECTION_RESUMED" });
    }),
    eF(["TYPING_START"], (e) => {
        null != e.member && ej(e.guild_id, e.member.user, e.member),
            eH({ type: "TYPING_START", guildId: e.guild_id, channelId: e.channel_id, userId: e.user_id });
    }),
    eF(["GUILD_RING_START"], (e) => {
        eH({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eF(["GUILD_RING_STOP"], (e) => {
        eH({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eF(["ACTIVITY_START"], (e) => {
        eH({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    eF(["ACTIVITY_USER_ACTION"], (e) => {
        eH({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    eV(
        ["MESSAGE_CREATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
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
    eV(
        ["MESSAGE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eW(e), eH({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    eV(
        ["MESSAGE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    eV(
        ["MESSAGE_DELETE_BULK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    eV(
        ["MESSAGE_ACK"],
        (e) => h.D.loadGuildFromChannelId(e.channel_id),
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
    eF(["GUILD_FEATURE_ACK"], (e) => {
        eH({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eF(["USER_NON_CHANNEL_ACK"], (e) => {
        eH({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eV(
        ["CHANNEL_PINS_ACK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    eV(
        ["CHANNEL_PINS_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    eV(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eH({ type: t, channel: (0, el.UE)(e) });
        },
    ),
    eF(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        eH({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    eF(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        eH({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    eF(["CHANNEL_INFO"], (e, t) => {
        eH({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    eF(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    eV(
        ["CHANNEL_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eU.add(e);
        },
    ),
    eV(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            eH({ type: t, isNewlyCreated: n, channel: (0, el.UE)(i) });
        },
    ),
    eV(
        ["THREAD_LIST_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = h.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, el.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, ei.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    eF(["THREAD_MEMBER_UPDATE"], (e) => {
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
    eF(["THREAD_MEMBERS_UPDATE"], (e) => {
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
    eF(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            eH({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    eF(["SOUNDBOARD_SOUNDS"], (e) => {
        ew.add(e);
    }),
    eF(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = h.A.getBasicChannel(e.channel_id);
        eH({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    eV(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
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
    eF(["GUILD_UPDATE"], (e) => {
        eH({ type: "GUILD_UPDATE", guild: e }), e.unavailable && eH({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eF(["GUILD_PRUNE_UPDATE"], (e) => {
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
    eF(["GUILD_BULK_BAN_UPDATE"], (e) => {
        eH({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    eF(["GUILD_DELETE"], (e) => {
        eH({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? eH({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && eH({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eF(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            eG.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && eK(e.presences, e.guild_id).forEach(ez),
                eb.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    eF(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            eH({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && eK(e.presences, e.guild_id).forEach(ez),
                eb.A.flush();
        });
    }),
    eF(
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
    eV(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eH({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    eV(
        ["GUILD_ROLE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    eF(["GUILD_EMOJIS_UPDATE"], (e) => {
        eH({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    eF(["GUILD_STICKERS_UPDATE"], (e) => {
        eH({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    eF(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        eH({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    eF(["INTEGRATION_CREATE"], (e) => {
        eH({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    eF(["INTEGRATION_DELETE"], (e) => {
        eH({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    eF(["USER_UPDATE"], (e) => {
        eH({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    eF(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
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
    eF(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        eH({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    eF(["USER_CONNECTIONS_UPDATE"], () => {
        eH({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    eF(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        eH({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    eF(["USER_NOTE_UPDATE"], (e) => {
        eH({ type: "USER_NOTE_UPDATE", ...e });
    }),
    eF(["RELATIONSHIP_ADD"], (e) => {
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
    eF(["RELATIONSHIP_REMOVE"], (e) => {
        eH({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    eF(["RELATIONSHIP_UPDATE"], (e) => {
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
    eF(["GAME_RELATIONSHIP_ADD"], (e) => {
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
    eF(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        eH({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    eF(["PRESENCE_UPDATE"], (e) => {
        ez(e$(e, e.guild_id));
    }),
    eF(["PRESENCES_REPLACE"], (e) => {
        eH({ type: "PRESENCES_REPLACE", presences: eK(e, void 0) });
    }),
    eF(["SESSIONS_REPLACE"], (e) => {
        eH({ type: "SESSIONS_REPLACE", sessions: eY(e) });
    }),
    eF(["VOICE_STATE_UPDATE"], (e) => {
        eB([e]);
    }),
    eF(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        eB(e.voice_states);
    }),
    eF(["VOICE_SERVER_UPDATE"], (e) => {
        eH({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    eF(["CALL_CREATE"], (e) => {
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
    eF(["CALL_UPDATE"], (e) => {
        eH({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    eF(["CALL_DELETE"], (e) => {
        eH({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    eF(["OAUTH2_TOKEN_CREATE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    eF(["OAUTH2_TOKEN_DELETE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    eF(["OAUTH2_TOKEN_REVOKE"], (e) => {
        eH({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    eF(["RECENT_MENTION_DELETE"], (e) => {
        eH({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    eF(["SAVED_MESSAGE_CREATE"], (e) => {
        eH({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, en.iz)(e) });
    }),
    eF(["SAVED_MESSAGE_DELETE"], (e) => {
        eH({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, en.x6)(e) });
    }),
    eF(["FRIEND_SUGGESTION_CREATE"], (e) => {
        eH({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    eF(["FRIEND_SUGGESTION_DELETE"], (e) => {
        eH({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    eF(["WEBHOOKS_UPDATE"], (e) => {
        eH({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    eF(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
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
    eF(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        eH({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: J.v.VOTE,
        });
    }),
    eF(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        eH({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: J.v.VOTE })),
        });
    }),
    eF(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        eH({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    eF(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        eH({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    eF(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        eH({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    eF(["PAYMENT_UPDATE"], (e) => {
        eH({ type: "PAYMENT_UPDATE", payment: e });
    }),
    eF(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        eH({ type: t, entitlement: e });
    }),
    eF(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, es.f)() && (n(277984).$o(), Y.jv(eE.A.getFetchedSKUIDs()));
    }),
    eF(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        K.rQ(), (0, es.f)() && n(277984).hP();
    }),
    eF(["WISHLIST_ITEM_PURCHASED"], (e) => {
        eH({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    eF(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o(e.badge_id);
    }),
    eF(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        eH({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: eo.A.createFromServer(e, eA.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eF(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        eH({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: eo.A.createFromServer(e, eA.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eF(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        eH({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    eF(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        eH({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    eF(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eh.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && eH({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    eF(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((ej(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                ez(e$(i, e.guild_id));
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
                eb.A.flush(),
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
    eF(["GIFT_CODE_UPDATE"], (e) => {
        eH({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    eF(["GIFT_CODE_CREATE"], (e) => {
        eH({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    eF(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        eH({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    eF(["STREAM_CREATE"], (e) => {
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
    eF(["STREAM_SERVER_UPDATE"], (e) => {
        eH({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    eF(["STREAM_UPDATE"], (e) => {
        eH({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    eF(["STREAM_DELETE"], (e) => {
        eH({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    eF(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
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
    eF(["REACTION_NOTIFICATION_SENT"], (e) => {
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
    eF(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    eF(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    eF(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    eF(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        eH({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    eF(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        eH({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    eF(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        eH({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    eF(["QUEST_PREVIEW_UPDATE"], (e) => {
        eH({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    eF(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id });
    }),
    eF(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        eH({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    eF(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eF(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eF(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        eH({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    eF(["INTERACTION_CREATE"], (e) => {
        eH({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    eF(["INTERACTION_SUCCESS"], (e) => {
        eH({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    eF(["INTERACTION_FAILURE"], (e) => {
        eH({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    eF(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        eH({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    eF(["INTERACTION_MODAL_CREATE"], (e) => {
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
    eF(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
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
    eF(["STAGE_INSTANCE_CREATE"], (e) => {
        eH({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    eF(["STAGE_INSTANCE_UPDATE"], (e) => {
        eH({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    eF(["STAGE_INSTANCE_DELETE"], (e) => {
        eH({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    eF(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        eH({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    eF(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        eH({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eF(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        eH({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eF(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    eF(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    eF(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        eH({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    eF(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        eH({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    eF(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
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
    eF(["CLIPS_REMOTE_TRIGGER"], (e) => {
        eH({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    eF(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        eH({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new ed.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eF(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        eH({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new ed.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eF(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        eH({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    eF(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
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
    eV(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eH({
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
    eF(["AUTH_SESSION_CHANGE"], (e) => {
        eH({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    eF(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        eH({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    eF(["USER_CONNECTIONS_CALLBACK"], (e) => {
        eH({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    eF(["DELETED_ENTITY_IDS"], (e) => {
        eH({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    eV(
        ["CHANNEL_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.integrity_check ||
                e.channels.forEach((e) => {
                    eU.add(e);
                }),
                eH({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    eF(["CONSOLE_COMMAND_UPDATE"], (e) => {
        eH({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    eV(
        ["PASSIVE_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
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
    eF(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        eH({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    eF(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        eH({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    eF(["LAST_MESSAGES"], (e) => {
        eH({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    eF(["AUTHENTICATOR_UPDATE"], (e) => {
        eH({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    eF(["AUTHENTICATOR_CREATE"], (e) => {
        eH({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    eF(["AUTHENTICATOR_DELETE"], (e) => {
        eH({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    eF(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        eH({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    eF(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        eH({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    eF(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        eH({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    eF(["USER_APPLICATION_UPDATE"], (e) => {
        eH({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    eF(["USER_APPLICATION_REMOVE"], (e) => {
        eH({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    eF(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        eH({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    eF(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        eH({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    eF(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        eH({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    eF(["WALLET_BALANCE_UPDATE"], (e) => {
        eH({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    eF(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    eF(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    eF(["GAME_SERVER_DELETE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    eF(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        eH({ type: t, guildId: e.guild_id });
    }),
    eF(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        eH({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    eF(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        eH({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    eF(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
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
    eF(["GUILD_ROOM_CONNECT"], (e, t) => {
        eH({ type: t, room: (0, Z.S)(e) });
    }),
    eF(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        eH({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eF(["GUILD_ROOM_UPDATE"], (e, t) => {
        eH({ type: t, room: (0, Z.S)(e) });
    }),
    eF(["HAVEN_CONNECT"], (e, t) => {
        eH({ type: t, room: (0, X.xf)(e) });
    }),
    eF(["HAVEN_DISCONNECT"], (e, t) => {
        eH({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eF(["HAVEN_UPDATE"], (e, t) => {
        eH({ type: t, room: (0, X.xf)(e) });
    }),
    eF(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        eH({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
var eq = n(355097);
let eZ = window.DiscordNative;
B.dispatcher.getDispatchHandler = function (e) {
    return ek[e];
};
let eX = new d.A("ConnectionStore"),
    eQ = 0,
    eJ = null,
    e0 = !0,
    e1 = null,
    e2 = null;
async function e3(e) {
    (eQ = Date.now()), (eJ = e.sessionId), H.handleConnectionOpen();
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
                !e0)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, u.CX)(n));
        } else f.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
    }
    j.update(t, !0), (e0 = !1), (e2 = null);
}
function e6() {
    j.update();
}
function e4() {
    return j.update(), !1;
}
function e5() {
    return H.update(), !1;
}
function e7(e) {
    B.isSessionEstablished() && B.streamDelete(e);
}
class e8 extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(E.default, A.A, h.A, I.Ay, f.A, p.A, T.Ay, m.A, g.A, _.A),
            this.syncWith([I.Ay], e4),
            this.syncWith([m.A], e5);
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
        return eQ;
    }
}
let e9 = new e8(l.h, {
    START_SESSION: function () {
        return B.isClosed()
            ? (eX.verbose("Socket is reconnecting because of starting new session"), B.connect())
            : (eX.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            eX.verbose("session refresh dispatched", { isEstablished: B.isSessionEstablished() }),
            !!B.isSessionEstablished() && (B.close(), B.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && H.handleAccountSwitch(), eX.verbose("Closing socket because of logout"), B.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (B.close(), B.dispatcher.clear(), B.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        e3(e);
    },
    CONNECTION_RESUMED: function () {
        e2 = null;
    },
    CONNECTION_CLOSED: function () {
        eX.verbose("connection closed dispatched"), (eQ = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== k.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? B.streamPing(e.streamKey) : B.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            j.update({ guildId: e.guildId, channelId: e.channelId }),
            (e2 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                e1 === k.g6G.BACKGROUND &&
                (null == e.channelId ? B.close(!0) : B.isClosed() && (W.V(!1), B.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (E.default.getId() !== t.userId) return e;
            if (t.sessionId === eJ) {
                if (null != e2)
                    return eX.verbose("Ignoring voice state for own session due to VSU lock on channel:", e2), e;
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
            if (e2 === t) return !1;
            j.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, S.isIOS)()
                ? (E.default.isAuthenticated() &&
                      (e1 === k.g6G.INACTIVE && e.state === k.g6G.BACKGROUND && null == j.channelId
                          ? B.close(!0)
                          : e1 === k.g6G.BACKGROUND &&
                            e.state === k.g6G.ACTIVE &&
                            B.isClosed() &&
                            (W.V(!1), B.connect())),
                  (e1 = e.state))
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
    STREAM_CREATE: e6,
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
                        .forEach((e) => e7(e));
            }
            B.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return e7(t), e6(), !1;
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
    CLIPS_SETTINGS_UPDATE: e6,
    RUNNING_GAMES_CHANGE: e6,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === eq.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e6();
    },
});
