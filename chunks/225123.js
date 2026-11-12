n.d(t, { A: () => tt });
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(506774),
    l = n(73153),
    o = n(597798),
    d = n(183636),
    c = n(626584),
    u = n(652896),
    _ = n(712766),
    E = n(308877),
    A = n(617617),
    f = n(46653),
    h = n(470710),
    I = n(734057),
    p = n(754712),
    m = n(495867),
    T = n(873985),
    g = n(309010),
    S = n(894768),
    N = n(753181),
    C = n(723702),
    O = n(175306),
    R = n(77729),
    L = n(376463),
    y = n(129230),
    D = n(209489),
    b = n(868),
    v = n(812729),
    P = n.n(v);
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
        ((this.dirty = !1), (this.state = this.getInitialState()));
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({ ...this.state, ...e });
        if (t) this.dirty = !P()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !P()(this.state[e], n[e]);
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
var U = n(665260),
    w = n(572164),
    G = n(253932),
    x = n(652215),
    k = n(55010),
    F = n(469177);
let B = new c.A("ConnectionStore"),
    V = new b.A(),
    H = new (class extends M {
        socket;
        switchingAccounts = !1;
        constructor(e) {
            (super(!1), (this.socket = e));
        }
        getInitialState() {
            return S.A.getLocalPresence();
        }
        getNextState() {
            return S.A.getLocalPresence();
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
    })(V),
    j = new (class extends M {
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
                i = G.Q$.getSetting();
            return (
                (n = (0, U.lA)(n, x.Ajs.ALLOW_VOICE_RECORDING, i)),
                (n = (0, U.lA)(n, x.Ajs.CLIPS_ENABLED, (0, w.T)())),
                (n = (0, U.lA)(
                    n,
                    x.Ajs.PASS_THE_CONTROLLER_HOST,
                    null != t &&
                        _.A.isSelfPassingController(
                            (0, u._z)({
                                streamType: null != e ? k.U4.GUILD : k.U4.CALL,
                                guildId: e,
                                channelId: t,
                                ownerId: f.default.getId(),
                            }),
                        ),
                ))
            );
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: p.Ay.isSelfMute(),
                selfDeaf: p.Ay.isSelfDeaf(),
                selfVideo: p.Ay.isVideoEnabled(),
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
                selfMute: p.Ay.isSelfMute(),
                selfDeaf: p.Ay.isSelfDeaf(),
                selfVideo: p.Ay.isVideoEnabled(),
                preferredRegion: T.A.getPreferredRegion(),
                preferredRegions: T.A.getPreferredRegions(),
                videoStreamParameters: p.Ay.getVideoStreamParameters(),
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
            a && I.A.getChannel(n)?.type === x.rbe.GUILD_STAGE_VOICE
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
((V.handleIdentify = () => {
    let e = f.default.getToken();
    if ((B.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = d.A.getState(),
        n = f.default.getInstallationForTracking();
    return {
        token: e,
        userId: f.default.getId() ?? L.A.getTargetUserId(),
        properties: {
            ...y.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: F.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: H.getInitialState(),
    };
}),
    (0, C.xl)() &&
        R.A.powerMonitor.on("resume", () => {
            V.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    D.A.addOfflineCallback(() => {
        V.networkStateChange(15e3, "network detected offline.", !1);
    }),
    D.A.addOnlineCallback(() => {
        V.networkStateChange(5e3, "network detected online.");
    }),
    V.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    V.on("close", (e) => {
        let { code: t, reason: n } = e;
        l.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    }));
var W = n(33282),
    Y = n(350835);
n(237751);
var K = n(73825),
    $ = n(803306),
    X = n(821956),
    z = n(628856),
    q = n(870600),
    Q = n(501803),
    J = n(996512),
    Z = n(518782),
    ee = n(257249),
    et = n(505527),
    en = n(894139),
    ei = n(761821);
function er(e) {
    return (0, ei.ii)(en.ej, e);
}
((0, n(945810).mj)({
    name: "2026-09-declarative-notification-settings-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    n(499724),
    n(405018));
var ea = n(159993),
    es = n(756377),
    el = n(736130),
    eo = n(935564),
    ed = n(843010),
    ec = n(95701),
    eu = n(545934),
    e_ = n(619019),
    eE = n(696451),
    eA = n(287809),
    ef = n(977997),
    eh = n(97352),
    eI = n(166403),
    ep = n(107351),
    em = n(284009),
    eT = n.n(em),
    eg = n(723176),
    eS = n(766034),
    eN = n(958824),
    eC = n(531743),
    eO = n(732040),
    eR = n(937724);
let eL = null,
    ey = {};
function eD(e, t, n) {
    return null == eL || eL.identifyTime !== e || (null != t && t.some((e) => e.id === eL.guild.id))
        ? null
        : n(eL.guild);
}
function eb(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            (null != i && (eT()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t));
        }),
        n
    );
}
function ev(e) {
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
              threads: e.threads?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
              threadMessages: eM(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, ec.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
              threadMessages: eM(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eP(e) {
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
              threads: e.threads?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
              threadMessages: eM(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, ec.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, ec.UE)(t, e.id)) ?? [],
              threadMessages: eM(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function eM(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
var eU = n(877166);
let ew = new c.A("ConnectionStore");
function eG(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== Y.$.LISTENING } }
            : e;
    });
}
let ex = new eU.A(
        V,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, ec.UE)(t),
                i = I.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return (e.channels.push(r ?? n), e);
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    ek = new eU.A(
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
    eF = new eU.A(
        V,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eB = new eU.A(
        V,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    eV = {};
function eH(e, t) {
    for (let n of e) eV[n] = { preload: () => null, dispatch: t };
}
function ej(e, t, n) {
    for (let i of e) eV[i] = { preload: t, dispatch: n };
}
function eW(e, t) {
    let n = [];
    for (let t of e)
        (null != t.member && eK(t.guild_id, t.member.user, t.member),
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
                oldChannelId: ef.A.getUserVoiceChannelId(t.guild_id, t.user_id),
                connectedAt: t.connected_at,
            }));
    eY({ type: "VOICE_STATE_UPDATES", voiceStates: n, receivedAt: t });
}
function eY(e) {
    l.h.dispatch(e).catch((t) => {
        (ew.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            V.resetSocketOnDispatchError({ error: t, action: e.type }));
    });
}
function eK(e, t, n) {
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
        I = eE.Ay.getMember(e, t.id),
        p = (0, z.t)(A),
        m = (0, Q.mT)(f),
        T = (0, Z.Rt)(h);
    (null != I &&
        I.nick === a &&
        I.avatar === s &&
        r().isEqual(I.roles, i) &&
        (0, X.kn)(I.avatarDecoration ?? null, l ?? null) &&
        I.premiumSince === d &&
        I.isPending === c &&
        I.joinedAt === u &&
        I.communicationDisabledUntil === _ &&
        I.flags === o &&
        (I.unusualDMActivityUntil ?? null) === (E ?? null) &&
        r().isEqual(I.collectibles ?? null, p ?? null) &&
        r().isEqual(I.displayNameStyles ?? null, m ?? null) &&
        r().isEqual(I.gamingLeaderboardData ?? null, T ?? null)) ||
        eY({
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
            gamingLeaderboardData: T,
        });
}
function e$(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    (null != t && null != r && eK(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    (delete e.member, eK(r, e, t));
                }
            }));
}
function eX(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        status: e.status,
        activities: eG(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !0 === e.active,
        clientInfo: e.client_info,
    }));
}
function ez(e, t) {
    return e.map((e) => eq(e, t));
}
function eq(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = [];
        for (let t of e) (0, ea.Q)(t.content_classification) ? i.push(t) : n.push(t);
        return 0 === i.length
            ? { activities: e, hiddenActivities: t }
            : { activities: n, hiddenActivities: [...t, ...i] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: eG(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function eQ(e) {
    eB.add(e);
}
(ej(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
    (e) => {
        eo.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = V.identifyStartTime), (n = eP(e)), (eL = { guild: e, identifyTime: t }), n);
                null != eA.default.getCurrentUser() &&
                    (eY({ type: "GUILD_CREATE", guild: i }),
                    eY({
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
                    ew.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    eH(["READY_SUPPLEMENTAL"], (e) => {
        (eo.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = (e = eo.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...a } = e,
                            s = eb(ey, r?.friends),
                            l =
                                n?.map((e, t) => {
                                    let n = eb(ey, r?.guilds[t]),
                                        a = eb(ey, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
                                }) ?? [],
                            o = eD(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return (null != o && l.push(o), (ey = {}), { ...a, presences: s, guilds: l });
                    })(e, V.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = ez(e.presences || [], e.id);
                });
                let n = ez(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, ec.UE)(e));
                eo.A.dispatchReadySupplemental.measure(() => {
                    eY({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                    eY({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    j.update());
            });
        }),
            setTimeout(() => eY({ type: "POST_CONNECTION_OPEN" }), 2e3));
    }),
    ej(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = eg.A.database()),
                    (n = (0, eR.O)() ? eS.A.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, eR.O)() ? eC.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? eN.A.okAsync(t) : Promise.resolve(!1),
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
            return Promise.all([i, I.D.loadGuildIds(r) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? eY({ type: "LOGOUT" })
                : eo.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          var t;
                          let i = (e = eo.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: a, merged_members: s, guilds: l, ...o } = e;
                                      (null != eg.A.database() &&
                                          !1 === n.databaseOk &&
                                          eO.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (ey = r().keyBy(i, (e) => e.id)),
                                          a?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              (null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          eT()(
                                                              null != ey[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          ey[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids);
                                          }));
                                      let d =
                                              l?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = eb(ey, s?.[t])), ev(e)),
                                              ) ?? [],
                                          c = eD(t, l, (e) => ev(e));
                                      return (
                                          null != c && d.push(c),
                                          { ...o, users: i, presences: [], guilds: d, private_channels: a ?? [] }
                                      );
                                  })(e, V.identifyStartTime, n),
                              )).private_channels.map((e) => (0, ec.UE)(e)),
                              a = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              s = e.guilds.filter((e) => !0 !== e.unavailable),
                              l = e.guilds.filter((e) => !0 === e.geo_restricted),
                              o = null == e.user_settings_proto ? void 0 : (0, ei.Gd)(e.user_settings_proto),
                              d =
                                  e.notification_settings?.declarative_settings_proto == null
                                      ? void 0
                                      : er(e.notification_settings.declarative_settings_proto);
                          (eo.A.dispatchReady.measure(() => {
                              eY({
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
                                  sessions: eX(e.sessions ?? []),
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
                                  eY({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  eY({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              eY({
                                  type: "PINOT_MEMBER_SETTING_STATE",
                                  locked: (t = e).swp_message_promotion_locked ?? !0,
                                  defaultOptedOut: t.swp_message_promotion_default_opted_out ?? null,
                              }),
                              H.update(),
                              j.update());
                      });
                  });
        },
    ),
    eH(["STATE_UPDATE"], (e) => {
        eY({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    eH(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        l.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    eH(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        l.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    eH(["RESUMED"], () => {
        (H.forceUpdate(), j.forceUpdate(), eY({ type: "CONNECTION_RESUMED" }));
    }),
    eH(["TYPING_START"], (e) => {
        (null != e.member && eK(e.guild_id, e.member.user, e.member),
            eY({
                type: "TYPING_START",
                guildId: e.guild_id,
                channelId: e.channel_id,
                userId: e.user_id,
                customTypingIndicatorConfig: (0, q.cE)(e.typing_indicator_style),
            }));
    }),
    eH(["ACTIVITY_START"], (e) => {
        eY({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    eH(["ACTIVITY_USER_ACTION"], (e) => {
        eY({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    ej(
        ["MESSAGE_CREATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            (e$(e),
                null != e.author &&
                    eY({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    }));
        },
    ),
    ej(
        ["MESSAGE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            (e$(e), eY({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e }));
        },
    ),
    ej(
        ["MESSAGE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    ej(
        ["MESSAGE_DELETE_BULK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    ej(
        ["MESSAGE_ACK"],
        (e) => I.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            eY({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    eH(["GUILD_FEATURE_ACK"], (e) => {
        eY({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eH(["USER_NON_CHANNEL_ACK"], (e) => {
        eY({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    eH(["CONJURING_PROJECT_CREATE_PROGRESS"], (e) => {
        eY({ type: "CONJURE_PROJECT_CREATE_PROGRESS", nonce: e.nonce, projectId: e.project_id, wsTicket: e.ws_ticket });
    }),
    eH(["CONJURING_PROJECT_UPDATE"], (e) => {
        eY({ type: "CONJURE_PROJECT_RUNNING_UPDATE", projectId: e.project_id, running: !0 === e.running });
    }),
    eH(["APPLICATION_FRAME_UPDATE"], (e) => {
        eY({
            type: "APPLICATION_FRAME_UPDATE",
            projectId: e.project_id,
            applicationId: e.application_id,
            updatedAt: e.updated_at,
        });
    }),
    eH(["CONJURING_TURN_SETTLED"], (e) => {
        eY({
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
    ej(
        ["CHANNEL_PINS_ACK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    ej(
        ["CHANNEL_PINS_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    ej(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eY({ type: t, channel: (0, ec.UE)(e) });
        },
    ),
    eH(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        eY({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    eH(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        eY({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    eH(["CHANNEL_INFO"], (e, t) => {
        eY({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    eH(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    ej(
        ["CHANNEL_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ex.add(e);
        },
    ),
    ej(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            eY({ type: t, isNewlyCreated: n, channel: (0, ec.UE)(i) });
        },
    ),
    ej(
        ["THREAD_LIST_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = I.A.getChannel(e.parent_id);
                    return (null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, ec.UE)(e));
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, el.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    eH(["THREAD_MEMBER_UPDATE"], (e) => {
        eY({
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
    eH(["THREAD_MEMBERS_UPDATE"], (e) => {
        eY({
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
    eH(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            eY({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    eH(["SOUNDBOARD_SOUNDS"], (e) => {
        ek.add(e);
    }),
    eH(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = I.A.getBasicChannel(e.channel_id);
        eY({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    ej(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) eY({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = eP(e);
                (eY({ type: "GUILD_CREATE", guild: t }),
                    eY({
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
    eH(["GUILD_UPDATE"], (e) => {
        (eY({ type: "GUILD_UPDATE", guild: e }), e.unavailable && eY({ type: "GUILD_UNAVAILABLE", guildId: e.id }));
    }),
    eH(["GUILD_PRUNE_UPDATE"], (e) => {
        eY({
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
    eH(["GUILD_BULK_BAN_UPDATE"], (e) => {
        eY({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    eH(["GUILD_DELETE"], (e) => {
        (eY({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? eY({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && eY({ type: "GUILD_UNAVAILABLE", guildId: e.id }));
    }),
    eH(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            (eF.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found, nonce: e.nonce }),
                null != e.presences && ez(e.presences, e.guild_id).forEach(eQ),
                eU.A.flush("GUILD_MEMBERS_CHUNK"));
        });
    }),
    eH(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            (eY({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && ez(e.presences, e.guild_id).forEach(eQ),
                eU.A.flush());
        });
    }),
    eH(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            eY({
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
                displayNameStyles: (0, Q.mT)(e.display_name_styles),
                gamingLeaderboardData: (0, Z.Rt)(e.member_gaming_leaderboard_data),
            });
        },
    ),
    ej(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            eY({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    ej(
        ["GUILD_ROLE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    eH(["GUILD_EMOJIS_UPDATE"], (e) => {
        eY({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    eH(["GUILD_STICKERS_UPDATE"], (e) => {
        eY({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    eH(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        eY({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    eH(["INTEGRATION_CREATE"], (e) => {
        eY({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    eH(["INTEGRATION_UPDATE"], (e) => {
        eY({ type: "INTEGRATION_UPDATE", application: e.application, guildId: e.guild_id });
    }),
    eH(["INTEGRATION_DELETE"], (e) => {
        eY({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    eH(["USER_UPDATE"], (e) => {
        eY({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    eH(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, ei.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string")
                );
            eY({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    eH(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        eY({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    eH(["USER_CONNECTIONS_UPDATE"], () => {
        eY({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    eH(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        eY({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    eH(["USER_NOTE_UPDATE"], (e) => {
        eY({ type: "USER_NOTE_UPDATE", ...e });
    }),
    eH(["RELATIONSHIP_ADD"], (e) => {
        eY({
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
    eH(["RELATIONSHIP_REMOVE"], (e) => {
        eY({
            type: "RELATIONSHIP_REMOVE",
            relationship: { ...e, id: e.id, type: e.type, userIgnored: e.user_ignored || !1 },
        });
    }),
    eH(["RELATIONSHIP_UPDATE"], (e) => {
        eY({
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
    eH(["GAME_RELATIONSHIP_ADD"], (e) => {
        eY({
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
    eH(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        eY({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    eH(["PRESENCE_UPDATE"], (e) => {
        eQ(eq(e, e.guild_id));
    }),
    eH(["PRESENCES_REPLACE"], (e) => {
        eY({ type: "PRESENCES_REPLACE", presences: ez(e, void 0) });
    }),
    eH(["SESSIONS_REPLACE"], (e) => {
        eY({ type: "SESSIONS_REPLACE", sessions: eX(e) });
    }),
    eH(["VOICE_STATE_UPDATE"], (e, t, n, i) => {
        eW([e], i);
    }),
    eH(["VOICE_STATE_UPDATE_BATCH"], (e, t, n, i) => {
        eW(e.voice_states, i);
    }),
    eH(["VOICE_SERVER_UPDATE"], (e) => {
        eY({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    eH(["CALL_CREATE"], (e) => {
        eY({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            eY({
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
    eH(["CALL_UPDATE"], (e) => {
        eY({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    eH(["CALL_DELETE"], (e) => {
        eY({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    eH(["OAUTH2_TOKEN_CREATE"], (e) => {
        eY({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    eH(["OAUTH2_TOKEN_DELETE"], (e) => {
        eY({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    eH(["OAUTH2_TOKEN_REVOKE"], (e) => {
        eY({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    eH(["RECENT_MENTION_DELETE"], (e) => {
        eY({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    eH(["SAVED_MESSAGE_CREATE"], (e) => {
        eY({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, es.iz)(e), messages: (0, es.wX)([e]) });
    }),
    eH(["SAVED_MESSAGE_DELETE"], (e) => {
        eY({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, es.x6)(e) });
    }),
    eH(["FRIEND_SUGGESTION_CREATE"], (e) => {
        eY({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    eH(["FRIEND_SUGGESTION_DELETE"], (e) => {
        eY({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    eH(["WEBHOOKS_UPDATE"], (e) => {
        eY({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    eH(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        eY({
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
    eH(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        eY({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: et.v.VOTE,
        });
    }),
    eH(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        eY({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: et.v.VOTE })),
        });
    }),
    eH(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        eY({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    eH(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        eY({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    eH(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        eY({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    eH(["PAYMENT_UPDATE"], (e) => {
        eY({ type: "PAYMENT_UPDATE", payment: e });
    }),
    eH(["ORDER_UPDATE"], (e) => {
        eY({ type: "ORDER_UPDATE", orderId: e.order_id, revision: e.revision });
    }),
    eH(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        eY({ type: t, entitlement: e });
    }),
    eH(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, ed.f)() && (n(669815).$o(), K.jv(eh.A.getFetchedSKUIDs()));
    }),
    eH(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        ($.rQ(), (0, ed.f)() && n(669815).hP());
    }),
    eH(["WISHLIST_ITEM_PURCHASED"], (e) => {
        eY({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    eH(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o0(e.badge_id);
    }),
    eH(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        eY({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: eu.A.createFromServer(e, eI.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eH(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        eY({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: eu.A.createFromServer(e, eI.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    eH(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        eY({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    eH(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        eY({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    eH(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, ep.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && eY({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    eH(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            function t(t) {
                if (null == t.member) return;
                let { member: n } = t;
                if ((eK(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                eQ(eq(i, e.guild_id));
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
                eU.A.flush(),
                eY({
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
    eH(["GIFT_CODE_UPDATE"], (e) => {
        eY({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    eH(["GIFT_CODE_CREATE"], (e) => {
        eY({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    eH(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        eY({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    eH(["STREAM_CREATE"], (e) => {
        eY({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    eH(["STREAM_SERVER_UPDATE"], (e) => {
        eY({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    eH(["STREAM_UPDATE"], (e) => {
        eY({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    eH(["STREAM_DELETE"], (e) => {
        eY({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    eH(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        eY({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    eH(["REACTION_NOTIFICATION_SENT"], (e) => {
        eY({
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
    eH(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        eY({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    eH(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        eY({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    eH(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        eY({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    eH(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        eY({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    eH(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        eY({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    eH(["ORBS_ARCADE_GAME_STATE_UPDATE"], (e) => {
        eY({ type: "ORBS_ARCADE_GAME_STATE_UPDATE", game_id: e.game_id, game_state: e.game_state });
    }),
    eH(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        eY({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    eH(["QUEST_PREVIEW_UPDATE"], (e) => {
        eY({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    eH(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id });
    }),
    eH(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        eY({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    eH(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        eY({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eH(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        eY({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    eH(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        eY({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    eH(["INTERACTION_CREATE"], (e) => {
        eY({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    eH(["INTERACTION_SUCCESS"], (e) => {
        eY({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    eH(["INTERACTION_FAILURE"], (e) => {
        eY({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    eH(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        eY({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    eH(["INTERACTION_MODAL_CREATE"], (e) => {
        eY({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, ee.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    eH(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        eY({
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
    eH(["STAGE_INSTANCE_CREATE"], (e) => {
        eY({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    eH(["STAGE_INSTANCE_UPDATE"], (e) => {
        eY({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    eH(["STAGE_INSTANCE_DELETE"], (e) => {
        eY({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        eY({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    eH(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        eY({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eH(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        eY({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    eH(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        eY({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    eH(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        eY({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    eH(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        eY({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    eH(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        eY({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    eH(["AUTO_MODERATION_CONTENT_DELETED"], (e) => {
        eY({
            type: "AUTO_MODERATION_CONTENT_DELETED",
            guildId: e.guild_id,
            channelId: e.channel_id,
            notice: e.notice,
            message: e.message,
            thread: e.thread,
        });
    }),
    eH(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        eY({
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
    eH(["CLIPS_REMOTE_TRIGGER"], (e) => {
        eY({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    eH(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        eY({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new e_.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eH(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        eY({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new e_.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    eH(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        eY({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    eH(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        eY({
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
    ej(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({
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
    eH(["AUTH_SESSION_CHANGE"], (e) => {
        eY({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    eH(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        eY({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    eH(["USER_CONNECTIONS_CALLBACK"], (e) => {
        eY({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    eH(["DELETED_ENTITY_IDS"], (e) => {
        eY({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    ej(
        ["CHANNEL_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            (e.integrity_check ||
                e.channels.forEach((e) => {
                    ex.add(e);
                }),
                eY({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                }));
        },
    ),
    eH(["CONSOLE_COMMAND_UPDATE"], (e) => {
        eY({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    ej(
        ["PASSIVE_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            eY({
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
    eH(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        eY({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    eH(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        eY({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    eH(["LAST_MESSAGES"], (e) => {
        eY({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    eH(["AUTHENTICATOR_UPDATE"], (e) => {
        eY({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    eH(["AUTHENTICATOR_CREATE"], (e) => {
        eY({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    eH(["AUTHENTICATOR_DELETE"], (e) => {
        eY({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    eH(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        let t = e?.declarative_settings_proto == null ? void 0 : er(e.declarative_settings_proto);
        eY({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags, declarativeSettings: t } });
    }),
    eH(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        eY({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    eH(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        eY({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    eH(["USER_APPLICATION_UPDATE"], (e) => {
        eY({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    eH(["USER_APPLICATION_REMOVE"], (e) => {
        eY({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    eH(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        eY({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    eH(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        eY({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    eH(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        eY({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance, totalRedeemed: e.total_redeemed });
    }),
    eH(["USER_DISCORD_ACHIEVEMENT_STATE_UPDATE"], (e) => {
        eY({ type: "USER_DISCORD_ACHIEVEMENT_STATE_UPDATE", payload: e });
    }),
    eH(["WALLET_BALANCE_UPDATE"], (e) => {
        eY({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    eH(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    eH(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    eH(["GAME_SERVER_DELETE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    eH(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        eY({ type: t, guildId: e.guild_id });
    }),
    eH(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        eY({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    eH(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        eY({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    eH(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        eY({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    eH(["GUILD_ROOM_CONNECT"], (e, t) => {
        eY({ type: t, room: (0, J.S)(e) });
    }),
    eH(["GUILD_ROOM_DISCONNECT"], (e, t) => {
        eY({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    eH(["GUILD_ROOM_UPDATE"], (e, t) => {
        eY({ type: t, room: (0, J.S)(e) });
    }),
    eH(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        eY({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    }),
    eH(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (e) => {
        eY({
            type: "MESSAGE_REQUEST_NOTIFICATION_SENT",
            triggeringUserId: e.triggering_user_id,
            numMutualGuilds: e.num_mutual_guilds,
        });
    }));
var eJ = n(355097);
let eZ = window.DiscordNative;
V.dispatcher.getDispatchHandler = function (e) {
    return eV[e];
};
let e0 = new c.A("ConnectionStore"),
    e1 = 0,
    e2 = null,
    e3 = !0,
    e6 = null,
    e5 = null;
function e7() {
    j.update();
}
function e4() {
    return (j.update(), !1);
}
function e8() {
    return (H.update(), !1);
}
function e9(e) {
    V.isSessionEstablished() && V.streamDelete(e);
}
class te extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        (this.waitFor(f.default, h.A, I.A, p.Ay, _.A, m.A, T.A, g.Ay, S.A, N.A, A.A),
            this.syncWith([p.Ay], e4),
            this.syncWith([S.A], e8));
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
        return e1;
    }
}
let tt = new te(l.h, {
    START_SESSION: function () {
        return V.isClosed()
            ? (e0.verbose("Socket is reconnecting because of starting new session"), V.connect())
            : (e0.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            e0.verbose("session refresh dispatched", { isEstablished: V.isSessionEstablished() }),
            !!V.isSessionEstablished() && (V.close(), V.connect())
        );
    },
    LOGOUT: function (e) {
        (e.isSwitchingAccount && H.handleAccountSwitch(), e0.verbose("Closing socket because of logout"), V.close());
    },
    CLEAR_CACHES: function (e) {
        return (
            e.resetSocket &&
                (V.close(),
                V.dispatcher.clear(),
                ((0, C.un)() && d.A.getState() === x.g6G.BACKGROUND && null == j.channelId) || (W.V(!1), V.connect())),
            !1
        );
    },
    CONNECTION_OPEN: (e) => {
        !(async function (e) {
            ((e1 = Date.now()), (e2 = e.sessionId), H.handleConnectionOpen());
            let t = {},
                n = s.w.get("discord_update_restart_timestamp"),
                i = null != n && Date.now() - parseInt(n, 10) < 3e5;
            s.w.remove("discord_update_restart_timestamp");
            let r = g.Ay.getVoiceChannelId();
            if (null != r) {
                let e = s.w.get("discord_watchdog_restart_timestamp"),
                    n = null != e && Date.now() - parseInt(e, 10) < 6e4;
                if (
                    (s.w.remove("discord_watchdog_restart_timestamp"),
                    window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                        n ||
                        i ||
                        (await eZ?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                        !e3)
                ) {
                    let e = I.A.getChannel(r);
                    null != e && ((t = { guildId: e.getGuildId(), channelId: r }), (0, E.A)(r));
                } else (m.A.setLastSessionVoiceChannelId(null != r ? r : null), o.default.selectVoiceChannel(null));
            }
            (j.update(t, !0), (e3 = !1), (e5 = null));
        })(e);
    },
    CONNECTION_RESUMED: function () {
        e5 = null;
    },
    CONNECTION_CLOSED: function () {
        (e0.verbose("connection closed dispatched"), (e1 = Date.now()));
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== x.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? V.streamPing(e.streamKey) : V.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            j.update({ guildId: e.guildId, channelId: e.channelId }),
            (e5 = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, C.un)() &&
                e6 === x.g6G.BACKGROUND &&
                (null == e.channelId ? V.close(!0) : V.isClosed() && (W.V(!1), V.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (f.default.getId() !== t.userId) return e;
            if (t.sessionId === e2) {
                if (null != e5)
                    return (e0.verbose("Ignoring voice state for own session due to VSU lock on channel:", e5), e);
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
            if (e5 === t) return !1;
            j.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, C.un)()
                ? (f.default.isAuthenticated() &&
                      (e6 === x.g6G.INACTIVE && e.state === x.g6G.BACKGROUND && null == j.channelId
                          ? V.close(!0)
                          : e6 === x.g6G.BACKGROUND &&
                            e.state === x.g6G.ACTIVE &&
                            V.isClosed() &&
                            (W.V(!1), V.connect())),
                  (e6 = e.state))
                : e.state === x.g6G.ACTIVE &&
                  (W.V(!1), f.default.isAuthenticated() && V.resetBackoff("App state is active")),
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
                              V.requestGuildMembers(e.guildIds, {
                                  userIds: t,
                                  presences: !!e.presences,
                                  nonce: e.nonce,
                              });
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
        return (V.isSessionEstablished() && V.updateGuildSubscriptions(t), !1);
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return (V.isSessionEstablished() && V.callConnect(t), !1);
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
    STREAM_CREATE: e7,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (V.isSessionEstablished()) {
            let e = null != n ? I.A.getChannel(i)?.rtcRegion : h.A.getCall(i)?.region;
            V.streamCreate(t, n, i, e ?? T.A.getPreferredRegion());
        }
        return (e7(), !1);
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (V.isSessionEstablished()) {
            if (n);
            else {
                let e;
                ((e = N.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === f.default.getId())),
                    N.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => e9(e)));
            }
            V.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return (e9(t), e7(), !1);
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        V.isSessionEstablished() && V.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return (V.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1);
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
        return (V.isSessionEstablished() && V.remoteCommand(t, n), !1);
    },
    RESET_SOCKET: function (e) {
        V.connectionState !== O.A.WILL_RECONNECT && V.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: e7,
    RUNNING_GAMES_CHANGE: e7,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === eJ.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            e7();
    },
    PASS_THE_CONTROLLER_UPDATE: e7,
});
