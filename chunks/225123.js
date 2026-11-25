n.d(t, { A: () => ta });
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(506774),
    l = n(73153),
    o = n(597798),
    d = n(183636),
    c = n(626584),
    u = n(652896),
    _ = n(623485),
    E = n(308877),
    A = n(617617),
    f = n(929921),
    h = n(46653),
    I = n(470710),
    p = n(734057),
    m = n(988468),
    g = n(495867),
    T = n(873985),
    S = n(309010),
    N = n(894768),
    C = n(753181),
    O = n(723702),
    R = n(175306),
    L = n(77729),
    y = n(376463),
    D = n(129230),
    b = n(209489),
    v = n(868),
    P = n(812729),
    M = n.n(P);
class U {
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
        ((this.dirty = !1), (this.state = this.getInitialState()));
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({ ...this.state, ...e });
        if (t) this.dirty = !M()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !M()(this.state[e], n[e]);
        let i = this.dirty && this.shouldCommit();
        return (
            (i || this.alwaysUpdateState) && (this.state = n),
            !!i && ((this.dirty = !1), this.didCommit(this.state), !0)
        );
    }
    forceUpdate() {
        ((this.dirty = !1), this.didCommit(this.state));
    }
}
(n(321073), n(938796));
var w = n(665260),
    G = n(572164),
    x = n(293651),
    k = n(310685),
    F = n(253932),
    B = n(71393),
    V = n(652215),
    H = n(55010),
    j = n(469177);
let W = new c.A("ConnectionStore"),
    Y = new v.A(),
    K = new (class extends U {
        socket;
        switchingAccounts = !1;
        constructor(e) {
            (super(!1), (this.socket = e));
        }
        getInitialState() {
            return N.A.getLocalPresence();
        }
        getNextState() {
            return N.A.getLocalPresence();
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
                for (null != t && (clearTimeout(t), (t = null)); n.length > 0 && n[0] <= l;) n.shift();
                n.length < 5 ? (n.push(l + 2e4), e(...a)) : (t = setTimeout(() => i(...a), n[0] - l));
            };
        })(this.emitPresenceUpdate.bind(this));
        emitPresenceUpdate(e) {
            let { status: t, since: n, activities: i, afk: r } = e;
            this.socket.presenceUpdate(t, n, i, r);
        }
        handleConnectionOpen() {
            let e = !this.switchingAccounts;
            (this.update({}, e), (this.switchingAccounts = !1));
        }
        handleAccountSwitch() {
            ((this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState()));
        }
    })(Y),
    $ = new (class extends U {
        socket;
        constructor(e) {
            (super(), (this.socket = e));
        }
        get guildId() {
            return this.getState().guildId;
        }
        get channelId() {
            return this.getState().channelId;
        }
        computeVoiceFlags(e, t) {
            let n = 0,
                i = F.Q$.getSetting();
            return (
                (n = (0, w.lA)(n, V.Ajs.ALLOW_VOICE_RECORDING, i)),
                (n = (0, w.lA)(n, V.Ajs.CLIPS_ENABLED, (0, G.T)())),
                (n = (0, w.lA)(
                    n,
                    V.Ajs.PASS_THE_CONTROLLER_HOST,
                    null != t &&
                        _.A.isSelfPassingController(
                            (0, u._z)({
                                streamType: null != e ? H.U4.GUILD : H.U4.CALL,
                                guildId: e,
                                channelId: t,
                                ownerId: h.default.getId(),
                            }),
                        ),
                )),
                (n = (0, w.lA)(
                    n,
                    V.Ajs.ALLOW_STREAM_DRAWING,
                    (0, x.HB)(p.A.getChannel(t), B.A.getGuild(e)) &&
                        (0, k.qQ)(t, "LocalVoiceStateManager", !1) &&
                        f.A.getState().streamDrawingEnabled,
                ))
            );
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: m.Ay.isSelfMute(),
                selfDeaf: m.Ay.isSelfDeaf(),
                selfVideo: m.Ay.isVideoEnabled(),
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
                selfMute: m.Ay.isSelfMute(),
                selfDeaf: m.Ay.isSelfDeaf(),
                selfVideo: m.Ay.isVideoEnabled(),
                preferredRegion: T.A.getPreferredRegion(),
                preferredRegions: T.A.getPreferredRegions(),
                videoStreamParameters: m.Ay.getVideoStreamParameters(),
                flags: this.computeVoiceFlags(t, n),
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
            a && p.A.getChannel(n)?.type === V.rbe.GUILD_STAGE_VOICE
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
    })(Y);
((Y.handleIdentify = () => {
    let e = h.default.getToken();
    if ((W.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = d.A.getState(),
        n = h.default.getInstallationForTracking();
    return {
        token: e,
        userId: h.default.getId() ?? y.A.getTargetUserId(),
        properties: {
            ...D.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: j.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: K.getInitialState(),
    };
}),
    (0, O.xl)() &&
        L.A.powerMonitor.on("resume", () => {
            Y.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    b.A.addOfflineCallback(() => {
        Y.networkStateChange(15e3, "network detected offline.", !1);
    }),
    b.A.addOnlineCallback(() => {
        Y.networkStateChange(5e3, "network detected online.");
    }),
    Y.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    Y.on("close", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    }));
var X = n(33282),
    z = n(350835);
n(237751);
var q = n(73825),
    Q = n(803306),
    J = n(821956),
    Z = n(628856),
    ee = n(870600),
    et = n(501803),
    en = n(996512),
    ei = n(518782),
    er = n(257249),
    ea = n(505527),
    es = n(894139),
    el = n(761821);
function eo(e) {
    return (0, el.ii)(es.ej, e);
}
((0, n(945810).mj)({
    name: "2026-09-declarative-notification-settings-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    n(499724),
    n(405018));
var ed = n(159993),
    ec = n(756377),
    eu = n(736130),
    e_ = n(935564),
    eE = n(843010),
    eA = n(95701),
    ef = n(545934),
    eh = n(619019),
    eI = n(696451),
    ep = n(287809),
    em = n(977997),
    eg = n(97352),
    eT = n(166403),
    eS = n(107351),
    eN = n(284009),
    eC = n.n(eN),
    eO = n(723176),
    eR = n(766034),
    eL = n(958824),
    ey = n(531743),
    eD = n(732040),
    eb = n(937724);
let ev = null,
    eP = {};
function eM(e, t, n) {
    return null == ev || ev.identifyTime !== e || (null != t && t.some((e) => e.id === ev.guild.id))
        ? null
        : n(ev.guild);
}
function eU(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            (null != i && (eC()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t));
        }),
        n
    );
}
function ew(e) {
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
              threads: e.threads?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
              threadMessages: ex(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, eA.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
              threadMessages: ex(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eG(e) {
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
              threads: e.threads?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
              threadMessages: ex(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, eA.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, eA.UE)(t, e.id)) ?? [],
              threadMessages: ex(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function ex(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var ek = n(877166);
let eF = new c.A("ConnectionStore");
function eB(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== z.$.LISTENING } }
            : e;
    });
}
let eV = new ek.A(
        Y,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, eA.UE)(t),
                i = p.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return (e.channels.push(r ?? n), e);
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    eH = new ek.A(
        Y,
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
    ej = new ek.A(
        Y,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eW = new ek.A(
        Y,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eY = {};
function eK(e, t) {
    for (let n of e) eY[n] = { preload: () => null, dispatch: t };
}
function e$(e, t, n) {
    for (let i of e) eY[i] = { preload: t, dispatch: n };
}
function eX(e, t) {
    let n = [];
    for (let t of e)
        (null != t.member && eq(t.guild_id, t.member.user, t.member),
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
                oldChannelId: em.A.getUserVoiceChannelId(t.guild_id, t.user_id),
                connectedAt: t.connected_at,
            }));
    ez({ type: "VOICE_STATE_UPDATES", voiceStates: n, receivedAt: t });
}
function ez(e) {
    l.h.dispatch(e).catch((t) => {
        (eF.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            Y.resetSocketOnDispatchError({ error: t, action: e.type }));
    });
}
function eq(e, t, n) {
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
            display_name_styles: f,
            member_gaming_leaderboard_data: h,
        } = n,
        I = eI.Ay.getMember(e, t.id),
        p = (0, Z.t)(A),
        m = (0, et.mT)(f),
        g = (0, ei.Rt)(h);
    (null != I &&
        I.nick === a &&
        I.avatar === s &&
        r().isEqual(I.roles, i) &&
        (0, J.kn)(I.avatarDecoration ?? null, l ?? null) &&
        I.premiumSince === d &&
        I.isPending === c &&
        I.joinedAt === u &&
        I.communicationDisabledUntil === _ &&
        I.flags === o &&
        (I.unusualDMActivityUntil ?? null) === (E ?? null) &&
        r().isEqual(I.collectibles ?? null, p ?? null) &&
        r().isEqual(I.displayNameStyles ?? null, m ?? null) &&
        r().isEqual(I.gamingLeaderboardData ?? null, g ?? null)) ||
        ez({
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
            collectibles: p,
            displayNameStyles: m,
            gamingLeaderboardData: g,
        });
}
function eQ(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    (null != t && null != r && eq(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    (delete e.member, eq(r, e, t));
                }
            }));
}
function eJ(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        status: e.status,
        activities: eB(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !0 === e.active,
        clientInfo: e.client_info,
    }));
}
function eZ(e, t) {
    return e.map((e) => e0(e, t));
}
function e0(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = [];
        for (let t of e) (0, ed.Q)(t.content_classification) ? i.push(t) : n.push(t);
        return 0 === i.length
            ? { activities: e, hiddenActivities: t }
            : { activities: n, hiddenActivities: [...t, ...i] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eB(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function e1(e) {
    eW.add(e);
}
(e$(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : p.D.loadGuildIds([e.id])),
    (e) => {
        e_.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = Y.identifyStartTime), (n = eG(e)), (ev = { guild: e, identifyTime: t }), n);
                null != ep.default.getCurrentUser() &&
                    (ez({ type: "GUILD_CREATE", guild: i }),
                    ez({
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
                    eF.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    eK(["READY_SUPPLEMENTAL"], (e) => {
        (e_.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = e_.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = eU(eP, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = eU(eP, r?.guilds[t]),
                                        a = eU(eP, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
                                }) ?? [],
                            o = eM(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return (null != o && l.push(o), (eP = {}), { ...a, presences: s, guilds: l });
                    })(e, Y.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = eZ(e.presences || [], e.id);
                });
                let n = eZ(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, eA.UE)(e));
                e_.A.dispatchReadySupplemental.measure(() => {
                    ez({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
                });
                let r = [];
                (t.forEach((e) => {
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
                    ez({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    $.update());
            });
        }),
            setTimeout(() => ez({ type: "POST_CONNECTION_OPEN" }), 2e3));
    }),
    e$(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = eO.A.database()),
                    (n = (0, eb.O)() ? eR.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eb.O)() ? ey.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? eL.A.okAsync(t) : Promise.resolve(!1),
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
                ? ez({ type: "LOGOUT" })
                : e_.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          var t;
                          let i = (e = e_.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      (null != eO.A.database() &&
                                          !1 === n.databaseOk &&
                                          eD.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (eP = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              (null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          eC()(
                                                              null != eP[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          eP[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids);
                                          }));
                                      let d =
                                              l?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eU(eP, s?.[t])), ew(e)),
                                              ) ?? [],
                                          c = eM(t, l, (e) => ew(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, Y.identifyStartTime, n),
                              )).private_channels.map((e) => (0, eA.UE)(e)),
                              a = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              s = e.guilds.filter((e) => !0 !== e.unavailable),
                              l = e.guilds.filter((e) => !0 === e.geo_restricted),
                              o = null == e.user_settings_proto ? void 0 : (0, el.Gd)(e.user_settings_proto),
                              d =
                                  e.notification_settings?.declarative_settings_proto == null
                                      ? void 0
                                      : eo(e.notification_settings.declarative_settings_proto);
                          (e_.A.dispatchReady.measure(() => {
                              ez({
                                  type: "CONNECTION_OPEN",
                                  sessionId: e.session_id,
                                  authSessionIdHash: e.auth_session_id_hash,
                                  staticAuthSessionId: e.static_client_session_id,
                                  user: e.user,
                                  users: e.users,
                                  guilds: s,
                                  initialPrivateChannels: i,
                                  unavailableGuilds: a,
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
                                  sessions: eJ(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
                                  userSettingsProto: o,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: {
                                      flags: e.notification_settings.flags,
                                      declarativeSettings: d,
                                  },
                                  geoRestrictedGuilds: l,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                                  qosToken: e.qos_token ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  ez({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  ez({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              ez({
                                  type: "PINOT_MEMBER_SETTING_STATE",
                                  locked: (t = e).swp_message_promotion_locked ?? !0,
                                  defaultOptedOut: t.swp_message_promotion_default_opted_out ?? null,
                              }),
                              K.update(),
                              $.update());
                      });
                  });
        },
    ),
    eK(["STATE_UPDATE"], (e) => {
        ez({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    eK(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    eK(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    eK(["RESUMED"], () => {
        (K.forceUpdate(), $.forceUpdate(), ez({ type: "CONNECTION_RESUMED" }));
    }),
    eK(["TYPING_START"], (e) => {
        (null != e.member && eq(e.guild_id, e.member.user, e.member),
            ez({
                type: "TYPING_START",
                guildId: e.guild_id,
                channelId: e.channel_id,
                userId: e.user_id,
                customTypingIndicatorConfig: (0, ee.cE)(e.typing_indicator_style),
            }));
    }),
    eK(["ACTIVITY_START"], (e) => {
        ez({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    eK(["ACTIVITY_USER_ACTION"], (e) => {
        ez({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    e$(
        ["MESSAGE_CREATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            (eQ(e),
                null != e.author &&
                    ez({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    }));
        },
    ),
    e$(
        ["MESSAGE_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            (eQ(e), ez({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e }));
        },
    ),
    e$(
        ["MESSAGE_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    e$(
        ["MESSAGE_DELETE_BULK"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    e$(
        ["MESSAGE_ACK"],
        (e) => p.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            ez({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    eK(["GUILD_FEATURE_ACK"], (e) => {
        ez({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eK(["USER_NON_CHANNEL_ACK"], (e) => {
        ez({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eK(["CONJURING_PROJECT_CREATE_PROGRESS"], (e) => {
        ez({ type: "CONJURE_PROJECT_CREATE_PROGRESS", nonce: e.nonce, projectId: e.project_id, wsTicket: e.ws_ticket });
    }),
    eK(["CONJURING_PROJECT_UPDATE"], (e) => {
        ez({ type: "CONJURE_PROJECT_RUNNING_UPDATE", projectId: e.project_id, running: !0 === e.running });
    }),
    eK(["APPLICATION_FRAME_UPDATE"], (e) => {
        ez({
            type: "APPLICATION_FRAME_UPDATE",
            projectId: e.project_id,
            applicationId: e.application_id,
            updatedAt: e.updated_at,
        });
    }),
    eK(["CONJURING_TURN_SETTLED"], (e) => {
        ez({
            type: "CONJURE_TURN_SETTLED",
            projectId: e.project_id,
            guildId: e.guild_id,
            entityId: e.entity_id,
            title: e.title,
            body: e.body,
            nonce: e.nonce ?? null,
            badgeCount: e.badge_count ?? null,
        });
    }),
    e$(
        ["CHANNEL_PINS_ACK"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    e$(
        ["CHANNEL_PINS_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    e$(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ez({ type: t, channel: (0, eA.UE)(e) });
        },
    ),
    eK(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        ez({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    eK(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        ez({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    eK(["CHANNEL_INFO"], (e, t) => {
        ez({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    eK(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    e$(
        ["CHANNEL_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            eV.add(e);
        },
    ),
    e$(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            ez({ type: t, isNewlyCreated: n, channel: (0, eA.UE)(i) });
        },
    ),
    e$(
        ["THREAD_LIST_SYNC"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = p.A.getChannel(e.parent_id);
                    return (null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, eA.UE)(e));
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, eu.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    eK(["THREAD_MEMBER_UPDATE"], (e) => {
        ez({
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
    eK(["THREAD_MEMBERS_UPDATE"], (e) => {
        ez({
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
    eK(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            ez({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    eK(["SOUNDBOARD_SOUNDS"], (e) => {
        eH.add(e);
    }),
    eK(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = p.A.getBasicChannel(e.channel_id);
        ez({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    e$(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : p.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) ez({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = eG(e);
                (ez({ type: "GUILD_CREATE", guild: t }),
                    ez({
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
                    }));
            }
        },
    ),
    eK(["GUILD_UPDATE"], (e) => {
        (ez({ type: "GUILD_UPDATE", guild: e }), e.unavailable && ez({ type: "GUILD_UNAVAILABLE", guildId: e.id }));
    }),
    eK(["GUILD_PRUNE_UPDATE"], (e) => {
        ez({
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
    eK(["GUILD_BULK_BAN_UPDATE"], (e) => {
        ez({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    eK(["GUILD_DELETE"], (e) => {
        (ez({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? ez({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && ez({ type: "GUILD_UNAVAILABLE", guildId: e.id }));
    }),
    eK(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            (ej.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found, nonce: e.nonce }),
                null != e.presences && eZ(e.presences, e.guild_id).forEach(e1),
                ek.A.flush("GUILD_MEMBERS_CHUNK"));
        });
    }),
    eK(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            (ez({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && eZ(e.presences, e.guild_id).forEach(e1),
                ek.A.flush());
        });
    }),
    eK(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            ez({
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
                collectibles: (0, Z.t)(e.collectibles),
                displayNameStyles: (0, et.mT)(e.display_name_styles),
                gamingLeaderboardData: (0, ei.Rt)(e.member_gaming_leaderboard_data),
            });
        },
    ),
    e$(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ez({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    e$(
        ["GUILD_ROLE_DELETE"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    eK(["GUILD_EMOJIS_UPDATE"], (e) => {
        ez({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    eK(["GUILD_STICKERS_UPDATE"], (e) => {
        ez({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    eK(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        ez({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    eK(["INTEGRATION_CREATE"], (e) => {
        ez({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    eK(["INTEGRATION_UPDATE"], (e) => {
        ez({ type: "INTEGRATION_UPDATE", application: e.application, guildId: e.guild_id });
    }),
    eK(["INTEGRATION_DELETE"], (e) => {
        ez({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    eK(["USER_UPDATE"], (e) => {
        ez({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    eK(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, el.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string")
                );
            ez({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    eK(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        ez({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    eK(["USER_CONNECTIONS_UPDATE"], () => {
        ez({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    eK(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        ez({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    eK(["USER_NOTE_UPDATE"], (e) => {
        ez({ type: "USER_NOTE_UPDATE", ...e });
    }),
    eK(["RELATIONSHIP_ADD"], (e) => {
        ez({
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
    eK(["RELATIONSHIP_REMOVE"], (e) => {
        ez({
            type: "RELATIONSHIP_REMOVE",
            relationship: { ...e, id: e.id, type: e.type, userIgnored: e.user_ignored || !1 },
        });
    }),
    eK(["RELATIONSHIP_UPDATE"], (e) => {
        ez({
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
    eK(["GAME_RELATIONSHIP_ADD"], (e) => {
        ez({
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
    eK(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        ez({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    eK(["PRESENCE_UPDATE"], (e) => {
        e1(e0(e, e.guild_id));
    }),
    eK(["PRESENCES_REPLACE"], (e) => {
        ez({ type: "PRESENCES_REPLACE", presences: eZ(e, void 0) });
    }),
    eK(["SESSIONS_REPLACE"], (e) => {
        ez({ type: "SESSIONS_REPLACE", sessions: eJ(e) });
    }),
    eK(["VOICE_STATE_UPDATE"], (e, t, n, i) => {
        eX([e], i);
    }),
    eK(["VOICE_STATE_UPDATE_BATCH"], (e, t, n, i) => {
        eX(e.voice_states, i);
    }),
    eK(["VOICE_SERVER_UPDATE"], (e) => {
        ez({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    eK(["CALL_CREATE"], (e) => {
        ez({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            ez({
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
    eK(["CALL_UPDATE"], (e) => {
        ez({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    eK(["CALL_DELETE"], (e) => {
        ez({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    eK(["OAUTH2_TOKEN_CREATE"], (e) => {
        ez({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    eK(["OAUTH2_TOKEN_DELETE"], (e) => {
        ez({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    eK(["OAUTH2_TOKEN_REVOKE"], (e) => {
        ez({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    eK(["RECENT_MENTION_DELETE"], (e) => {
        ez({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    eK(["SAVED_MESSAGE_CREATE"], (e) => {
        ez({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, ec.iz)(e), messages: (0, ec.wX)([e]) });
    }),
    eK(["SAVED_MESSAGE_DELETE"], (e) => {
        ez({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, ec.x6)(e) });
    }),
    eK(["FRIEND_SUGGESTION_CREATE"], (e) => {
        ez({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    eK(["FRIEND_SUGGESTION_DELETE"], (e) => {
        ez({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    eK(["WEBHOOKS_UPDATE"], (e) => {
        ez({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    eK(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        e.type === ea.v6.SOUND ||
            (ea.H2.has(e.type) &&
                ez({
                    type: t,
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    userId: e.user_id,
                    emoji: e.emoji,
                    colors: e.burst_colors,
                    reactionType: e.type,
                    messageAuthorId: e.message_author_id,
                }));
    }),
    eK(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        ez({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: ea.v6.VOTE,
        });
    }),
    eK(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        ez({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: ea.v6.VOTE })),
        });
    }),
    eK(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        ez({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    eK(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        ez({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    eK(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        ez({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    eK(["PAYMENT_UPDATE"], (e) => {
        ez({ type: "PAYMENT_UPDATE", payment: e });
    }),
    eK(["ORDER_UPDATE"], (e) => {
        ez({ type: "ORDER_UPDATE", orderId: e.order_id, revision: e.revision });
    }),
    eK(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        ez({ type: t, entitlement: e });
    }),
    eK(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, eE.f)() && (n(669815).$o(), q.jv(eg.A.getFetchedSKUIDs()));
    }),
    eK(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        (Q.rQ(), (0, eE.f)() && n(669815).hP());
    }),
    eK(["WISHLIST_ITEM_PURCHASED"], (e) => {
        ez({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    eK(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o0(e.badge_id);
    }),
    eK(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        ez({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: ef.A.createFromServer(e, eT.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eK(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        ez({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: ef.A.createFromServer(e, eT.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eK(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        ez({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    eK(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        ez({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    eK(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, eS.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && ez({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    eK(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            function t(t) {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eq(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                e1(e0(i, e.guild_id));
            }
            (e.ops.forEach((e) => {
                switch (e.op) {
                    case "SYNC":
                        e.items.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(e.item);
                }
            }),
                ek.A.flush(),
                ez({
                    type: "GUILD_MEMBER_LIST_UPDATE",
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count,
                }));
        });
    }),
    eK(["GIFT_CODE_UPDATE"], (e) => {
        ez({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    eK(["GIFT_CODE_CREATE"], (e) => {
        ez({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    eK(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        ez({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    eK(["STREAM_CREATE"], (e) => {
        ez({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    eK(["STREAM_SERVER_UPDATE"], (e) => {
        ez({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    eK(["STREAM_UPDATE"], (e) => {
        ez({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    eK(["STREAM_DELETE"], (e) => {
        ez({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    eK(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        ez({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    eK(["REACTION_NOTIFICATION_SENT"], (e) => {
        ez({
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
    eK(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        ez({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    eK(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        ez({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    eK(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        ez({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    eK(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        ez({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    eK(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        ez({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    eK(["ORBS_ARCADE_GAME_STATE_UPDATE"], (e) => {
        ez({ type: "ORBS_ARCADE_GAME_STATE_UPDATE", game_id: e.game_id, game_state: e.game_state });
    }),
    eK(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        ez({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    eK(["QUEST_PREVIEW_UPDATE"], (e) => {
        ez({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    eK(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id });
    }),
    eK(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        ez({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    eK(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        ez({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eK(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        ez({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eK(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        ez({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    eK(["INTERACTION_CREATE"], (e) => {
        ez({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    eK(["INTERACTION_SUCCESS"], (e) => {
        ez({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    eK(["INTERACTION_FAILURE"], (e) => {
        ez({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    eK(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        ez({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    eK(["INTERACTION_MODAL_CREATE"], (e) => {
        ez({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, er.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    eK(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        ez({
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
    eK(["STAGE_INSTANCE_CREATE"], (e) => {
        ez({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    eK(["STAGE_INSTANCE_UPDATE"], (e) => {
        ez({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    eK(["STAGE_INSTANCE_DELETE"], (e) => {
        ez({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        ez({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    eK(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        ez({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eK(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        ez({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eK(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        ez({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    eK(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        ez({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    eK(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        ez({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    eK(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        ez({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    eK(["AUTO_MODERATION_CONTENT_DELETED"], (e) => {
        ez({
            type: "AUTO_MODERATION_CONTENT_DELETED",
            guildId: e.guild_id,
            channelId: e.channel_id,
            notice: e.notice,
            message: e.message,
            thread: e.thread,
        });
    }),
    eK(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        ez({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
            soundName: e.name,
            sourceGuildId: e.source_guild_id,
            isEcho: e.is_echo,
            authorId: e.author_id,
        });
    }),
    eK(["CLIPS_REMOTE_TRIGGER"], (e) => {
        ez({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    eK(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        ez({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new eh.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eK(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        ez({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new eh.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eK(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        ez({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    eK(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        ez({
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
    e$(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({
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
    eK(["AUTH_SESSION_CHANGE"], (e) => {
        ez({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    eK(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        ez({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    eK(["USER_CONNECTIONS_CALLBACK"], (e) => {
        ez({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    eK(["DELETED_ENTITY_IDS"], (e) => {
        ez({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    e$(
        ["CHANNEL_SYNC"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            (e.integrity_check ||
                e.channels.forEach((e) => {
                    eV.add(e);
                }),
                ez({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                }));
        },
    ),
    eK(["CONSOLE_COMMAND_UPDATE"], (e) => {
        ez({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    e$(
        ["PASSIVE_UPDATE_V2"],
        (e) => p.D.loadGuildIds([e.guild_id]),
        (e) => {
            ez({
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
    eK(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        ez({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    eK(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        ez({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    eK(["LAST_MESSAGES"], (e) => {
        ez({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    eK(["AUTHENTICATOR_UPDATE"], (e) => {
        ez({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    eK(["AUTHENTICATOR_CREATE"], (e) => {
        ez({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    eK(["AUTHENTICATOR_DELETE"], (e) => {
        ez({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    eK(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        let t = e?.declarative_settings_proto == null ? void 0 : eo(e.declarative_settings_proto);
        ez({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags, declarativeSettings: t } });
    }),
    eK(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        ez({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    eK(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        ez({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    eK(["USER_APPLICATION_UPDATE"], (e) => {
        ez({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    eK(["USER_APPLICATION_REMOVE"], (e) => {
        ez({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    eK(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        ez({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    eK(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        ez({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    eK(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        ez({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance, totalRedeemed: e.total_redeemed });
    }),
    eK(["USER_DISCORD_ACHIEVEMENT_STATE_UPDATE"], (e) => {
        ez({ type: "USER_DISCORD_ACHIEVEMENT_STATE_UPDATE", payload: e });
    }),
    eK(["WALLET_BALANCE_UPDATE"], (e) => {
        ez({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    eK(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    eK(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    eK(["GAME_SERVER_DELETE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    eK(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        ez({ type: t, guildId: e.guild_id });
    }),
    eK(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        ez({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    eK(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        ez({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    eK(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        ez({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    eK(["GUILD_ROOM_CONNECT"], (e, t) => {
        ez({ type: t, room: (0, en.S)(e) });
    }),
    eK(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        ez({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eK(["GUILD_ROOM_UPDATE"], (e, t) => {
        ez({ type: t, room: (0, en.S)(e) });
    }),
    eK(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        ez({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    }),
    eK(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (e) => {
        ez({
            type: "MESSAGE_REQUEST_NOTIFICATION_SENT",
            triggeringUserId: e.triggering_user_id,
            numMutualGuilds: e.num_mutual_guilds,
        });
    }));
var e2 = n(355097);
let e3 = window.DiscordNative;
Y.dispatcher.getDispatchHandler = function (e) {
    return eY[e];
};
let e6 = new c.A("ConnectionStore"),
    e5 = 0,
    e7 = null,
    e4 = !0,
    e8 = null,
    e9 = null;
function te() {
    $.update();
}
function tt() {
    return ($.update(), !1);
}
function tn() {
    return (K.update(), !1);
}
function ti(e) {
    Y.isSessionEstablished() && Y.streamDelete(e);
}
class tr extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        (this.waitFor(f.A, h.default, I.A, p.A, m.Ay, _.A, g.A, T.A, S.Ay, N.A, C.A, A.A),
            this.syncWith([m.Ay], tt),
            this.syncWith([N.A], tn));
    }
    getSocket() {
        return Y;
    }
    isTryingToConnect() {
        return !Y.isClosed();
    }
    isConnected() {
        return Y.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return Y.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return e5;
    }
}
let ta = new tr(l.h, {
    START_SESSION: function () {
        return Y.isClosed()
            ? (e6.verbose("Socket is reconnecting because of starting new session"), Y.connect())
            : (e6.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            e6.verbose("session refresh dispatched", { isEstablished: Y.isSessionEstablished() }),
            !!Y.isSessionEstablished() && (Y.close(), Y.connect())
        );
    },
    LOGOUT: function (e) {
        (e.isSwitchingAccount && K.handleAccountSwitch(), e6.verbose("Closing socket because of logout"), Y.close());
    },
    CLEAR_CACHES: function (e) {
        return (
            e.resetSocket &&
                (Y.close(),
                Y.dispatcher.clear(),
                ((0, O.un)() && d.A.getState() === V.g6G.BACKGROUND && null == $.channelId) || (X.V(!1), Y.connect())),
            !1
        );
    },
    CONNECTION_OPEN: (e) => {
        !(async function (e) {
            ((e5 = Date.now()), (e7 = e.sessionId), K.handleConnectionOpen());
            let t = {},
                n = s.w.get("discord_update_restart_timestamp"),
                i = null != n && Date.now() - parseInt(n, 10) < 3e5;
            s.w.remove("discord_update_restart_timestamp");
            let r = S.Ay.getVoiceChannelId();
            if (null != r) {
                let e = s.w.get("discord_watchdog_restart_timestamp"),
                    n = null != e && Date.now() - parseInt(e, 10) < 6e4;
                if (
                    (s.w.remove("discord_watchdog_restart_timestamp"),
                    window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                        n ||
                        i ||
                        (await e3?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                        !e4)
                ) {
                    let e = p.A.getChannel(r);
                    null != e && ((t = { guildId: e.getGuildId(), channelId: r }), (0, E.A)(r));
                } else (g.A.setLastSessionVoiceChannelId(null != r ? r : null), o.default.selectVoiceChannel(null));
            }
            ($.update(t, !0), (e4 = !1), (e9 = null));
        })(e);
    },
    CONNECTION_RESUMED: function () {
        e9 = null;
    },
    CONNECTION_CLOSED: function () {
        (e6.verbose("connection closed dispatched"), (e5 = Date.now()));
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== V.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? Y.streamPing(e.streamKey) : Y.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            $.update({ guildId: e.guildId, channelId: e.channelId }),
            (e9 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, O.un)() &&
                e8 === V.g6G.BACKGROUND &&
                (null == e.channelId ? Y.close(!0) : Y.isClosed() && (X.V(!1), Y.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (h.default.getId() !== t.userId) return e;
            if (t.sessionId === e7) {
                if (null != e9)
                    return (e6.verbose("Ignoring voice state for own session due to VSU lock on channel:", e9), e);
                $.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== $.guildId) return e;
                $.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === $.guildId && $.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === $.channelId && $.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === $.channelId) {
            if (e9 === t) return !1;
            $.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, O.un)()
                ? (h.default.isAuthenticated() &&
                      (e8 === V.g6G.INACTIVE && e.state === V.g6G.BACKGROUND && null == $.channelId
                          ? Y.close(!0)
                          : e8 === V.g6G.BACKGROUND &&
                            e.state === V.g6G.ACTIVE &&
                            Y.isClosed() &&
                            (X.V(!1), Y.connect())),
                  (e8 = e.state))
                : e.state === V.g6G.ACTIVE &&
                  (X.V(!1), h.default.isAuthenticated() && Y.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            Y.isSessionEstablished() &&
                ("userIds" in e
                    ? r()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              Y.requestGuildMembers(e.guildIds, {
                                  userIds: t,
                                  presences: !!e.presences,
                                  nonce: e.nonce,
                              });
                          })
                    : Y.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        Y.isSessionEstablished() && Y.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return (Y.isSessionEstablished() && Y.updateGuildSubscriptions(t), !1);
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return (Y.isSessionEstablished() && Y.callConnect(t), !1);
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            Y.isSessionEstablished() &&
                t.forEach((e) => {
                    Y.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: te,
    STREAM_UPDATE_SETTINGS: te,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (Y.isSessionEstablished()) {
            let e = null != n ? p.A.getChannel(i)?.rtcRegion : I.A.getCall(i)?.region;
            Y.streamCreate(t, n, i, e ?? T.A.getPreferredRegion());
        }
        return (te(), !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (Y.isSessionEstablished()) {
            if (n);
            else {
                let e;
                ((e = C.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === h.default.getId())),
                    C.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => ti(e)));
            }
            Y.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return (ti(t), te(), !1);
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        Y.isSessionEstablished() && Y.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return (Y.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        Y.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        Y.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return (Y.isSessionEstablished() && Y.remoteCommand(t, n), !1);
    },
    RESET_SOCKET: function (e) {
        Y.connectionState !== R.A.WILL_RECONNECT && Y.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: te,
    RUNNING_GAMES_CHANGE: te,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === e2.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            te();
    },
    PASS_THE_CONTROLLER_UPDATE: te,
});
