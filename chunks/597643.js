n.d(t, { A: () => te });
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
    I = n(916546),
    f = n(763827),
    p = n(873985),
    T = n(309010),
    m = n(461213),
    g = n(116956),
    S = n(723702),
    N = n(175306),
    C = n(77729),
    O = n(183636),
    R = n(376463),
    L = n(174459),
    y = n(209489),
    D = n(282475),
    v = n(812729),
    b = n.n(v);
class M {
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
        if (t) this.dirty = !b()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !b()(this.state[e], n[e]);
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
class P extends M {
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
var U = n(665260),
    w = n(572164),
    G = n(885386),
    x = n(652215),
    k = n(469177);
let F = new d.A("ConnectionStore"),
    V = new D.A(),
    B = new P(V),
    H = new (class extends M {
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
            return (
                (e = (0, U.lA)(e, x.Ajs.ALLOW_VOICE_RECORDING, t)), (e = (0, U.lA)(e, x.Ajs.CLIPS_ENABLED, (0, w.T)()))
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
            a && h.A.getChannel(n)?.type === x.rbe.GUILD_STAGE_VOICE
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
    })(V);
(V.handleIdentify = () => {
    let e = E.default.getToken();
    if ((F.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = O.A.getState(),
        n = E.default.getInstallationForTracking();
    return {
        token: e,
        userId: E.default.getId() ?? R.A.getTargetUserId(),
        properties: {
            ...L.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: k.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: B.getInitialState(),
    };
}),
    (0, S.isDesktop)() &&
        C.A.powerMonitor.on("resume", () => {
            V.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    y.A.addOfflineCallback(() => {
        V.networkStateChange(15e3, "network detected offline.", !1);
    }),
    y.A.addOnlineCallback(() => {
        V.networkStateChange(5e3, "network detected online.");
    }),
    V.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    V.on("close", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    });
var j = n(33282);
n(237751);
var W = n(73825),
    Y = n(803306),
    K = n(821956),
    $ = n(628856),
    z = n(870600),
    q = n(945096),
    Z = n(996512),
    X = n(814890),
    Q = n(505527),
    J = n(455598),
    ee = n(761821);
function et(e) {
    return (0, ee.ii)(J.ej, e);
}
n(207989);
var en = n(159993);
let ei = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var er = n(756377),
    ea = n(736130),
    es = n(464578),
    el = n(843010),
    eo = n(95701),
    ed = n(545934),
    ec = n(889227),
    eu = n(696451),
    e_ = n(287809),
    eE = n(977997),
    eA = n(97352),
    eh = n(166403),
    eI = n(107351),
    ef = n(284009),
    ep = n.n(ef),
    eT = n(723176),
    em = n(766034),
    eg = n(314732),
    eS = n(531743),
    eN = n(45773),
    eC = n(937724);
let eO = null,
    eR = {};
function eL(e, t, n) {
    return null == eO || eO.identifyTime !== e || (null != t && t.some((e) => e.id === eO.guild.id))
        ? null
        : n(eO.guild);
}
function ey(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (ep()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function eD(e) {
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
              threads: e.threads?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
              threadMessages: eb(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, eo.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
              threadMessages: eb(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function ev(e) {
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
              threads: e.threads?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
              threadMessages: eb(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, eo.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, eo.UE)(t, e.id)) ?? [],
              threadMessages: eb(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eb(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var eM = n(877166);
let eP = new d.A("ConnectionStore");
function eU(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== x.$pd.LISTENING } }
            : e;
    });
}
let ew = new eM.A(
        V,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, eo.UE)(t),
                i = h.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    eG = new eM.A(
        V,
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
    ex = new eM.A(
        V,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    ek = new eM.A(
        V,
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
function eH(e, t) {
    let n = [];
    for (let t of e)
        null != t.member && eW(t.guild_id, t.member.user, t.member),
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
                oldChannelId: eE.A.getUserVoiceChannelId(t.guild_id, t.user_id),
                connectedAt: t.connected_at,
            });
    ej({ type: "VOICE_STATE_UPDATES", voiceStates: n, receivedAt: t });
}
function ej(e) {
    l.h.dispatch(e).catch((t) => {
        eP.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            V.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function eW(e, t, n) {
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
        I = eu.Ay.getMember(e, t.id),
        f = (0, $.t)(A),
        p = (0, q.mT)(h);
    (null != I &&
        I.nick === a &&
        I.avatar === s &&
        r().isEqual(I.roles, i) &&
        (0, K.kn)(I.avatarDecoration ?? null, l ?? null) &&
        I.premiumSince === d &&
        I.isPending === c &&
        I.joinedAt === u &&
        I.communicationDisabledUntil === _ &&
        I.flags === o &&
        (I.unusualDMActivityUntil ?? null) === (E ?? null) &&
        r().isEqual(I.collectibles ?? null, f ?? null) &&
        r().isEqual(I.displayNameStyles ?? null, p ?? null)) ||
        ej({
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
function eY(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && eW(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, eW(r, e, t);
                }
            });
}
function eK(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: eU(e.activities ?? []),
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
        let { enabled: n } = ei.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e) (0, en.Q)(t.content_classification) ? r.push(t) : i.push(t);
        return 0 === r.length
            ? { activities: e, hiddenActivities: t }
            : { activities: i, hiddenActivities: [...t, ...r] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eU(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function eq(e) {
    ek.add(e);
}
eB(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
    (e) => {
        es.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = V.identifyStartTime), (n = ev(e)), (eO = { guild: e, identifyTime: t }), n);
                null != e_.default.getCurrentUser() &&
                    (ej({ type: "GUILD_CREATE", guild: i }),
                    ej({
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
                    eP.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    eV(["READY_SUPPLEMENTAL"], (e) => {
        es.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = es.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = ey(eR, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = ey(eR, r?.guilds[t]),
                                        a = ey(eR, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
                                }) ?? [],
                            o = eL(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != o && l.push(o), (eR = {}), { ...a, presences: s, guilds: l };
                    })(e, V.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = e$(e.presences || [], e.id);
                });
                let n = e$(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, eo.UE)(e));
                es.A.dispatchReadySupplemental.measure(() => {
                    ej({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                    ej({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    H.update();
            });
        }),
            setTimeout(() => ej({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    eB(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = eT.A.database()),
                    (n = (0, eC.O)() ? em.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eC.O)() ? eS.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? eg.A.okAsync(t) : Promise.resolve(!1),
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
                ? ej({ type: "LOGOUT" })
                : es.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = es.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      null != eT.A.database() &&
                                          !1 === n.databaseOk &&
                                          eN.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (eR = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          ep()(
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
                                                  !0 === e.unavailable ? e : ((e.members = ey(eR, s?.[t])), eD(e)),
                                              ) ?? [],
                                          c = eL(t, l, (e) => eD(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, V.identifyStartTime, n),
                              )).private_channels.map((e) => (0, eo.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              a = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              l = null == e.user_settings_proto ? void 0 : (0, ee.Gd)(e.user_settings_proto),
                              o =
                                  e.notification_settings?.declarative_settings_proto == null
                                      ? void 0
                                      : et(e.notification_settings.declarative_settings_proto);
                          es.A.dispatchReady.measure(() => {
                              ej({
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
                                  sessions: eK(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
                                  userSettingsProto: l,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: {
                                      flags: e.notification_settings.flags,
                                      declarativeSettings: o,
                                  },
                                  geoRestrictedGuilds: s,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                                  qosToken: e.qos_token ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  ej({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  ej({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              B.update(),
                              H.update();
                      });
                  });
        },
    ),
    eV(["STATE_UPDATE"], (e) => {
        ej({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    eV(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    eV(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    eV(["RESUMED"], () => {
        B.forceUpdate(), H.forceUpdate(), ej({ type: "CONNECTION_RESUMED" });
    }),
    eV(["TYPING_START"], (e) => {
        null != e.member && eW(e.guild_id, e.member.user, e.member),
            ej({
                type: "TYPING_START",
                guildId: e.guild_id,
                channelId: e.channel_id,
                userId: e.user_id,
                customTypingIndicatorConfig: (0, z.cE)(e.typing_indicator_style),
            });
    }),
    eV(["GUILD_RING_START"], (e) => {
        ej({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eV(["GUILD_RING_STOP"], (e) => {
        ej({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    eV(["ACTIVITY_START"], (e) => {
        ej({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    eV(["ACTIVITY_USER_ACTION"], (e) => {
        ej({
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
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY(e),
                null != e.author &&
                    ej({
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
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY(e), ej({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    eB(
        ["MESSAGE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    eB(
        ["MESSAGE_DELETE_BULK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    eB(
        ["MESSAGE_ACK"],
        (e) => h.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            ej({
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
        ej({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eV(["USER_NON_CHANNEL_ACK"], (e) => {
        ej({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eB(
        ["CHANNEL_PINS_ACK"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    eB(
        ["CHANNEL_PINS_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    eB(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ej({ type: t, channel: (0, eo.UE)(e) });
        },
    ),
    eV(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        ej({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    eV(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        ej({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    eV(["CHANNEL_INFO"], (e, t) => {
        ej({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    eV(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    eB(
        ["CHANNEL_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ew.add(e);
        },
    ),
    eB(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            ej({ type: t, isNewlyCreated: n, channel: (0, eo.UE)(i) });
        },
    ),
    eB(
        ["THREAD_LIST_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = h.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, eo.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, ea.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    eV(["THREAD_MEMBER_UPDATE"], (e) => {
        ej({
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
        ej({
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
            ej({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    eV(["SOUNDBOARD_SOUNDS"], (e) => {
        eG.add(e);
    }),
    eV(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = h.A.getBasicChannel(e.channel_id);
        ej({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    eB(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : h.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) ej({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = ev(e);
                ej({ type: "GUILD_CREATE", guild: t }),
                    ej({
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
        ej({ type: "GUILD_UPDATE", guild: e }), e.unavailable && ej({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eV(["GUILD_PRUNE_UPDATE"], (e) => {
        ej({
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
        ej({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    eV(["GUILD_DELETE"], (e) => {
        ej({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? ej({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && ej({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    eV(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            ex.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && e$(e.presences, e.guild_id).forEach(eq),
                eM.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    eV(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            ej({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && e$(e.presences, e.guild_id).forEach(eq),
                eM.A.flush();
        });
    }),
    eV(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            ej({
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
                collectibles: (0, $.t)(e.collectibles),
                displayNameStyles: (0, q.mT)(e.display_name_styles),
            });
        },
    ),
    eB(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ej({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    eB(
        ["GUILD_ROLE_DELETE"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    eV(["GUILD_EMOJIS_UPDATE"], (e) => {
        ej({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    eV(["GUILD_STICKERS_UPDATE"], (e) => {
        ej({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    eV(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        ej({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    eV(["INTEGRATION_CREATE"], (e) => {
        ej({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    eV(["INTEGRATION_UPDATE"], (e) => {
        ej({ type: "INTEGRATION_UPDATE", application: e.application, guildId: e.guild_id });
    }),
    eV(["INTEGRATION_DELETE"], (e) => {
        ej({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    eV(["USER_UPDATE"], (e) => {
        ej({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    eV(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, ee.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            ej({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    eV(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        ej({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    eV(["USER_CONNECTIONS_UPDATE"], () => {
        ej({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    eV(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        ej({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    eV(["USER_NOTE_UPDATE"], (e) => {
        ej({ type: "USER_NOTE_UPDATE", ...e });
    }),
    eV(["RELATIONSHIP_ADD"], (e) => {
        ej({
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
        ej({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    eV(["RELATIONSHIP_UPDATE"], (e) => {
        ej({
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
        ej({
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
        ej({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    eV(["PRESENCE_UPDATE"], (e) => {
        eq(ez(e, e.guild_id));
    }),
    eV(["PRESENCES_REPLACE"], (e) => {
        ej({ type: "PRESENCES_REPLACE", presences: e$(e, void 0) });
    }),
    eV(["SESSIONS_REPLACE"], (e) => {
        ej({ type: "SESSIONS_REPLACE", sessions: eK(e) });
    }),
    eV(["VOICE_STATE_UPDATE"], (e, t, n, i) => {
        eH([e], i);
    }),
    eV(["VOICE_STATE_UPDATE_BATCH"], (e, t, n, i) => {
        eH(e.voice_states, i);
    }),
    eV(["VOICE_SERVER_UPDATE"], (e) => {
        ej({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    eV(["CALL_CREATE"], (e) => {
        ej({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            ej({
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
        ej({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    eV(["CALL_DELETE"], (e) => {
        ej({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    eV(["OAUTH2_TOKEN_CREATE"], (e) => {
        ej({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    eV(["OAUTH2_TOKEN_DELETE"], (e) => {
        ej({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    eV(["OAUTH2_TOKEN_REVOKE"], (e) => {
        ej({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    eV(["RECENT_MENTION_DELETE"], (e) => {
        ej({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    eV(["SAVED_MESSAGE_CREATE"], (e) => {
        ej({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, er.iz)(e) });
    }),
    eV(["SAVED_MESSAGE_DELETE"], (e) => {
        ej({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, er.x6)(e) });
    }),
    eV(["FRIEND_SUGGESTION_CREATE"], (e) => {
        ej({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    eV(["FRIEND_SUGGESTION_DELETE"], (e) => {
        ej({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    eV(["WEBHOOKS_UPDATE"], (e) => {
        ej({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    eV(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        ej({
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
        ej({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: Q.v.VOTE,
        });
    }),
    eV(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        ej({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: Q.v.VOTE })),
        });
    }),
    eV(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        ej({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    eV(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        ej({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    eV(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        ej({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    eV(["PAYMENT_UPDATE"], (e) => {
        ej({ type: "PAYMENT_UPDATE", payment: e });
    }),
    eV(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        ej({ type: t, entitlement: e });
    }),
    eV(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, el.f)() && (n(277984).$o(), W.jv(eA.A.getFetchedSKUIDs()));
    }),
    eV(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        Y.fetchCurrentUser(), (0, el.f)() && n(277984).hP();
    }),
    eV(["WISHLIST_ITEM_PURCHASED"], (e) => {
        ej({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    eV(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o0(e.badge_id);
    }),
    eV(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        ej({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: ed.A.createFromServer(e, eh.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eV(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        ej({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: ed.A.createFromServer(e, eh.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eV(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        ej({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    eV(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        ej({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    eV(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eI.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && ej({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    eV(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eW(e.guild_id, n.user, n), null == n.presence)) return;
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
                eM.A.flush(),
                ej({
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
        ej({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    eV(["GIFT_CODE_CREATE"], (e) => {
        ej({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    eV(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        ej({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    eV(["STREAM_CREATE"], (e) => {
        ej({
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
        ej({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    eV(["STREAM_UPDATE"], (e) => {
        ej({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    eV(["STREAM_DELETE"], (e) => {
        ej({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    eV(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        ej({
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
        ej({
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
        ej({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    eV(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        ej({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    eV(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        ej({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    eV(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        ej({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    eV(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        ej({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    eV(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        ej({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    eV(["QUEST_PREVIEW_UPDATE"], (e) => {
        ej({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    eV(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id });
    }),
    eV(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        ej({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    eV(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        ej({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eV(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        ej({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eV(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        ej({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    eV(["INTERACTION_CREATE"], (e) => {
        ej({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    eV(["INTERACTION_SUCCESS"], (e) => {
        ej({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    eV(["INTERACTION_FAILURE"], (e) => {
        ej({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    eV(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        ej({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    eV(["INTERACTION_MODAL_CREATE"], (e) => {
        ej({
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
    eV(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        ej({
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
        ej({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    eV(["STAGE_INSTANCE_UPDATE"], (e) => {
        ej({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    eV(["STAGE_INSTANCE_DELETE"], (e) => {
        ej({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    eV(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        ej({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    eV(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        ej({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eV(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        ej({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        ej({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        ej({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    eV(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        ej({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    eV(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        ej({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    eV(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        ej({
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
        ej({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    eV(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        ej({
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
        ej({
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
        ej({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    eV(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        ej({
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
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({
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
    eV(["AUTH_SESSION_CHANGE"], (e) => {
        ej({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    eV(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        ej({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    eV(["USER_CONNECTIONS_CALLBACK"], (e) => {
        ej({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    eV(["DELETED_ENTITY_IDS"], (e) => {
        ej({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    eB(
        ["CHANNEL_SYNC"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.integrity_check ||
                e.channels.forEach((e) => {
                    ew.add(e);
                }),
                ej({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    eV(["CONSOLE_COMMAND_UPDATE"], (e) => {
        ej({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    eB(
        ["PASSIVE_UPDATE_V2"],
        (e) => h.D.loadGuildIds([e.guild_id]),
        (e) => {
            ej({
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
        ej({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    eV(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        ej({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    eV(["LAST_MESSAGES"], (e) => {
        ej({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    eV(["AUTHENTICATOR_UPDATE"], (e) => {
        ej({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    eV(["AUTHENTICATOR_CREATE"], (e) => {
        ej({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    eV(["AUTHENTICATOR_DELETE"], (e) => {
        ej({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    eV(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        let t = e?.declarative_settings_proto == null ? void 0 : et(e.declarative_settings_proto);
        ej({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags, declarativeSettings: t } });
    }),
    eV(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        ej({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    eV(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        ej({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    eV(["USER_APPLICATION_UPDATE"], (e) => {
        ej({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    eV(["USER_APPLICATION_REMOVE"], (e) => {
        ej({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    eV(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        ej({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    eV(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        ej({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    eV(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        ej({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    eV(["USER_DISCORD_ACHIEVEMENT_STATE_UPDATE"], (e) => {
        ej({ type: "USER_DISCORD_ACHIEVEMENT_STATE_UPDATE", payload: e });
    }),
    eV(["WALLET_BALANCE_UPDATE"], (e) => {
        ej({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    eV(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    eV(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    eV(["GAME_SERVER_DELETE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    eV(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        ej({ type: t, guildId: e.guild_id });
    }),
    eV(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        ej({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    eV(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        ej({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    eV(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        ej({
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
        ej({ type: t, room: (0, Z.S)(e) });
    }),
    eV(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        ej({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eV(["GUILD_ROOM_UPDATE"], (e, t) => {
        ej({ type: t, room: (0, Z.S)(e) });
    }),
    eV(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        ej({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    }),
    eV(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (e) => {
        ej({
            type: "MESSAGE_REQUEST_NOTIFICATION_SENT",
            triggeringUserId: e.triggering_user_id,
            numMutualGuilds: e.num_mutual_guilds,
        });
    });
var eZ = n(355097);
let eX = window.DiscordNative;
V.dispatcher.getDispatchHandler = function (e) {
    return eF[e];
};
let eQ = new d.A("ConnectionStore"),
    eJ = 0,
    e0 = null,
    e1 = !0,
    e2 = null,
    e3 = null;
async function e5(e) {
    (eJ = Date.now()), (e0 = e.sessionId), B.handleConnectionOpen();
    let t = {},
        n = T.Ay.getVoiceChannelId();
    if (null != n) {
        let e = s.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (s.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await eX?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !e1)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, u.CX)(n));
        } else f.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
    }
    H.update(t, !0), (e1 = !1), (e3 = null);
}
function e6() {
    H.update();
}
function e4() {
    return H.update(), !1;
}
function e7() {
    return B.update(), !1;
}
function e8(e) {
    V.isSessionEstablished() && V.streamDelete(e);
}
class e9 extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(E.default, A.A, h.A, I.Ay, f.A, p.A, T.Ay, m.A, g.A, _.A),
            this.syncWith([I.Ay], e4),
            this.syncWith([m.A], e7);
    }
    getSocket() {
        return V;
    }
    isTryingToConnect() {
        return !V.isClosed();
    }
    isConnected() {
        return V.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return V.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return eJ;
    }
}
let te = new e9(l.h, {
    START_SESSION: function () {
        return V.isClosed()
            ? (eQ.verbose("Socket is reconnecting because of starting new session"), V.connect())
            : (eQ.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            eQ.verbose("session refresh dispatched", { isEstablished: V.isSessionEstablished() }),
            !!V.isSessionEstablished() && (V.close(), V.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && B.handleAccountSwitch(), eQ.verbose("Closing socket because of logout"), V.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (V.close(), V.dispatcher.clear(), V.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        e5(e);
    },
    CONNECTION_RESUMED: function () {
        e3 = null;
    },
    CONNECTION_CLOSED: function () {
        eQ.verbose("connection closed dispatched"), (eJ = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== x.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? V.streamPing(e.streamKey) : V.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            H.update({ guildId: e.guildId, channelId: e.channelId }),
            (e3 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                e2 === x.g6G.BACKGROUND &&
                (null == e.channelId ? V.close(!0) : V.isClosed() && (j.V(!1), V.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (E.default.getId() !== t.userId) return e;
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
                ? (E.default.isAuthenticated() &&
                      (e2 === x.g6G.INACTIVE && e.state === x.g6G.BACKGROUND && null == H.channelId
                          ? V.close(!0)
                          : e2 === x.g6G.BACKGROUND &&
                            e.state === x.g6G.ACTIVE &&
                            V.isClosed() &&
                            (j.V(!1), V.connect())),
                  (e2 = e.state))
                : e.state === x.g6G.ACTIVE &&
                  (j.V(!1), E.default.isAuthenticated() && V.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            V.isSessionEstablished() &&
                ("userIds" in e
                    ? r()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              V.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : V.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        V.isSessionEstablished() && V.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return V.isSessionEstablished() && V.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return V.isSessionEstablished() && V.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            V.isSessionEstablished() &&
                t.forEach((e) => {
                    V.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: e6,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (V.isSessionEstablished()) {
            let e = null != n ? h.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            V.streamCreate(t, n, i, e ?? p.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (V.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = g.A.getAllActiveStreamKeys().find((e) => (0, c.Iy)(e).ownerId === E.default.getId())),
                    g.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => e8(e));
            }
            V.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return e8(t), e6(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        V.isSessionEstablished() && V.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return V.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        V.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        V.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return V.isSessionEstablished() && V.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        V.connectionState !== N.A.WILL_RECONNECT && V.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: e6,
    RUNNING_GAMES_CHANGE: e6,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === eZ.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e6();
    },
});
