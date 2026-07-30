"use strict";
n.d(t, {
    TE: () => ef,
    yT: () => eA,
    h$: () => eo,
    YP: () => ei,
    Uh: () => ea,
    Fb: () => eC,
    VO: () => ey,
    uL: () => eU,
    GS: () => el,
    fd: () => en,
    Ts: () => eG,
    e6: () => eP,
    H1: () => eb,
    l0: () => ek,
    yd: () => eE,
    YV: () => ep,
    Su: () => em,
    yO: () => et,
    $N: () => ex,
    YK: () => eg,
    eQ: () => ee,
    PW: () => ew,
    w7: () => eF,
    K7: () => eR,
    HU: () => es,
    Mt: () => er,
    oH: () => eD,
    Yy: () => eh,
    Vp: () => eT,
    XK: () => eI,
    mN: () => eM,
}),
    n(321073);
var i = n(562465),
    r = n(228366),
    a = n(77729),
    s = n(885386),
    l = n(994500),
    o = n(461213),
    d = n(652215),
    c = n(952818),
    u = n(311043),
    _ = n(205106),
    E = n(400492),
    A = n(616356),
    h = n(280450),
    I = n(131319),
    f = n(734057),
    p = n(293246),
    T = n(763827),
    m = n(174459),
    g = n(723702),
    S = n(38405),
    N = n(53677),
    C = n(888916),
    O = n(486925),
    R = n(915725),
    L = n(372684),
    D = n(974293),
    y = n(458977),
    v = n(439818),
    b = n(572164);
let M = ["filepath", "sizeBytes"];
function P(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of M) delete t[e];
            return t;
        })(e),
    );
}
var U = n(132500),
    w = n(935208),
    G = n(696016);
function x(e) {
    e?.type === "yelling" && (e.type = L.Gy.SHOUTING);
}
let k = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? L.nQ.SCREENSHOT : L.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, U.A)(), createdAt: w.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return x(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => x(e?.signal)), t;
        },
    ],
    F = null;
async function V(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != F
                ? F
                : (F = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(G.kd).optional(),
                          name: t.string().when("version", { is: t.number().less(3), then: t.string().allow("") }),
                          gameName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.forbidden(),
                                  otherwise: t.required(),
                              }),
                          applicationName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.required().allow(""),
                                  otherwise: t.forbidden(),
                              }),
                          applicationId: t.string(),
                          activity: t
                              .object()
                              .keys({
                                  state: t.string(),
                                  details: t.string(),
                                  timestamps: t.object().keys({ start: t.number(), end: t.number() }),
                                  party: t.object().keys({ id: t.string(), size: t.array().items(t.number()) }),
                              }),
                          users: t.array().items(t.string()).required(),
                          filepath: t.string().required(),
                          length: t.number().required(),
                          thumbnail: t.string().required().allow(""),
                          editMetadata: t
                              .object()
                              .keys({
                                  start: t.number(),
                                  end: t.number(),
                                  applicationAudio: t.boolean(),
                                  voiceAudio: t.boolean(),
                                  soundboardAudio: t.boolean(),
                                  crop: t
                                      .object()
                                      .keys({
                                          preset: t.string().allow("original", "9:16", "16:9"),
                                          bounds: t
                                              .object()
                                              .keys({
                                                  x: t.number(),
                                                  y: t.number(),
                                                  width: t.number(),
                                                  height: t.number(),
                                                  aspectRatio: t.number(),
                                              }),
                                      }),
                              }),
                          createdAt: t
                              .number()
                              .when("version", { is: t.number().greater(4).required(), then: t.required() }),
                          type: t
                              .string()
                              .allow(L.nQ.CLIP, L.nQ.SCREENSHOT, L.nQ.VOICE_CLIP)
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                          clipMethod: t.string().allow("auto", "manual").required(),
                          guildId: t.string(),
                          channelId: t.string(),
                          isFavorite: t.boolean(),
                          isTemporary: t.boolean(),
                          isCandidate: t.boolean(),
                          remoteClipId: t.string(),
                          gameSessionId: t.string(),
                          decision: t
                              .object()
                              .keys({
                                  reason: t.string(),
                                  clippingPressure: t.number(),
                                  currentThreshold: t.number(),
                                  effectivePressure: t.number(),
                                  timestamp: t.number(),
                                  signal: t.object().required(),
                              }),
                          timeline: t
                              .array()
                              .items(
                                  t
                                      .object()
                                      .keys({ signal: t.object().required(), timestamp: t.number().required() })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                          originalStartMs: t.number(),
                          originalEndMs: t.number(),
                          sizeBytes: t.number(),
                          audioEvents: t
                              .array()
                              .items(
                                  t
                                      .object()
                                      .keys({
                                          type: t.string().valid("laughter", "shouting").required(),
                                          userId: t.string().required(),
                                          startMs: t.number().required(),
                                          endMs: t.number().required(),
                                          peakMs: t.number().required(),
                                          peakConfidence: t.number().required(),
                                      })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: t.number().greater(5).required(),
                                  then: t.optional(),
                                  otherwise: t.forbidden(),
                              }),
                      })
                      .required());
    try {
        return (
            delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            null != e.decision && delete e.decision.emotionHistory,
            t.assert(e, i),
            null == e.version && (e.version = 0),
            k.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
var B = n(796617),
    H = n(31048),
    j = n(997649);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var W = n(284009),
    Y = n.n(W);
async function K(e) {
    let t,
        { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        r = i.createFile(!1),
        a = new Promise((e) => {
            r.onReady = e;
        }),
        s = await e.arrayBuffer();
    for (let e of ((s.fileStart = 0),
    r.appendBuffer(s),
    r.flush(),
    await a,
    Y()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
var $ = n(956050),
    z = n(47167),
    q = n(587895),
    Z = n(287809),
    X = n(375708);
function Q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: a,
            sourceApplicationId: s,
            activity: _,
            isVoiceOnly: E,
        } = (function () {
            let e,
                t = A.A.getStreamerActiveStreamMetadata(),
                n = t?.pid,
                i = t?.sourceName,
                r = (() => {
                    if (null == t) return c.Ay.getVisibleGame();
                    {
                        let e = null != n ? c.Ay.getGameForPID(n) : null,
                            t = null != i ? c.Ay.getGameForName(i) : null;
                        return e ?? t;
                    }
                })(),
                a = t?.id ?? r?.id,
                s = t?.sourceName ?? r?.name,
                _ = T.A.getChannelId(),
                E = null == s && null != _;
            if (E) {
                let e = null != _ ? f.A.getChannel(_) : null;
                s = null != e ? (0, z.m1)(e, Z.default, l.A) : "";
            }
            let h =
                    ((e = new Set()),
                    null == a ||
                        (e.add(a),
                        u.A.getGame(a)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        q.A.getApplication(a)?.linkedGames?.forEach((t) => {
                            e.add(t.id), u.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                I = o.A.getUnfilteredActivities(!0).filter(function (e) {
                    return e.type === d.$pd.PLAYING && null != e.application_id && h.has(e.application_id);
                });
            return {
                sourceName: s,
                sourceApplicationId: a,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(
                    I.find(function (e) {
                        return (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details);
                    }) ?? I[0],
                ),
                isVoiceOnly: E,
            };
        })(),
        I = T.A.getChannelId(),
        p = T.A.getGuildId(),
        m = new Set([h.default.getId()]);
    n.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && m.add(t.userId);
    });
    let g = E && t === L.nQ.CLIP ? L.nQ.VOICE_CLIP : t;
    return {
        id: (0, U.A)(),
        createdAt: Date.now(),
        version: G.kd,
        applicationName: a ?? X.intl.string(X.t.qtSJxb),
        applicationId: s,
        activity: _,
        users: Array.from(m),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: p ?? void 0,
        channelId: I ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === L.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: g,
    };
}
var J = n(201538);
async function ee(e) {
    let { allowVoiceRecording: t } = e;
    await s.Q$.updateSetting(t),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
            ...N.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function et(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        a = !t || (0, C.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(a && { decoupledClipsEnabled: t }) },
    }),
        i &&
            m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...N.lc("updateClipsEnabled"),
                clips_enabled: t,
                guild_id: n,
                ...(a && { decoupled_clips_enabled: t }),
            });
}
function en(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...N.lc("updateDecoupledClipsEnabled"),
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function ei(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function er(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...N.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function ea(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function es(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eC(e).catch((e) => {
            G.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function el(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function eo(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function ed(e) {
    if (
        !y.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== L.Gy.MANUAL
    )
        return;
    let t = T.A.getChannelId(),
        n = f.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!o.A.getActivities(!1).some((e) => e.type === d.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => l.A.isFriend(e));
            if (e.isGuildVocalOrThread()) {
                let t = e.guild_id;
                return !s.JG.getSetting().includes(t);
            }
            return !1;
        })(n)
    )
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: d.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await eh(e.id, { remoteClipId: t }, !1)),
                m.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...N.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            G.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ec(e) {
    return "string" == typeof e
        ? { errorMessage: e }
        : null != e && "object" == typeof e
          ? {
                errorMessage:
                    "string" == typeof e.errorMessage
                        ? e.errorMessage
                        : "string" == typeof e.message
                          ? e.message
                          : void 0,
                errorAt: "string" == typeof e.errorAt ? e.errorAt : void 0,
            }
          : {};
}
async function eu(e) {
    let t,
        n,
        {
            clipMethod: i,
            request: r,
            timeline: s,
            decision: l,
            isCandidate: o,
            gameSessionId: c,
            decisionSignals: u,
        } = e,
        E = R.Ay.getSettings(),
        f = (0, O.C5)(i),
        T = f ? (0, O.xT)(E.storageLocation) : E.storageLocation,
        g = Q(i, L.nQ.CLIP, s, l, c);
    g.isCandidate = o ?? !1;
    let S = `${(0, v.A)(g.applicationName.substring(0, 20))}_${g.id}.mp4`,
        C = a.A.fileManager.join(T, S),
        D = p.Ay.getMediaEngine(),
        y = JSON.stringify(g),
        b = N.TX(g),
        M =
            ((t = p.Ay.getNoiseCancellation()),
            (n = p.Ay.getSystemMicrophoneMode()),
            {
                noise_cancellation: t,
                effective_noise_cancellation: (0, _.A)(t, n),
                noise_suppression: p.Ay.getNoiseSuppression(),
                bypass_system_input_processing: p.Ay.getBypassSystemInputProcessing(),
                system_microphone_mode: n ?? null,
                audio_bitrate: I.A.bitrate,
            }),
        { startMs: P, endMs: U, trimStartMs: w, trimEndMs: x } = r;
    try {
        let e, t;
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(T, f));
        let {
            duration: n,
            clipStats: i,
            thumbnail: s,
            metadata: l,
        } = await D.saveClipEx({
            filepath: C,
            metadata: y,
            thumbnailMs: w,
            startMs: P,
            endMs: U,
            trimStartMs: w,
            trimEndMs: x,
            userId: null != A.A.getCurrentUserActiveStream() ? h.default.getId() : void 0,
        });
        if (o && null != u && R.Ay.getEnableAutoclipping())
            try {
                e = (function (e, t, n, i) {
                    let r = e.applicationId,
                        a = (0, H.p)(),
                        s = Math.floor(t.startMs / B.pn) * B.pn,
                        l = Math.floor((t.endMs - s) / B.pn) + 1,
                        o = s + (l - 1) * B.pn,
                        d = n.audioModelDataPerUser[h.default.getId()];
                    function c() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return (0, B.lq)((0, B.Tv)(e, s, o), s, l).map((e) => e.value);
                    }
                    let u = (0, B.Q4)(r, n.gameEventData),
                        _ = (0, j.p)(n.gameEventData, s, o);
                    return {
                        game_events_supported: (0, B.GC)(r),
                        created_at_ms: e.createdAt,
                        window_start_ms: s + a,
                        window_end_ms: o + a,
                        trim_start_ms: t.trimStartMs + a,
                        trim_end_ms: t.trimEndMs + a,
                        in_game: u?.getInGameState?.(s, o) ?? [],
                        game_event_ts_ms: _.map((e) => e.timestamp_ms + a),
                        game_event_weight: _.map((e) => e.score ?? 0),
                        game_event_name: _.map((e) => e.eventName ?? ""),
                        ...i,
                        laughter: c(d?.laughterData),
                        shouting: c(d?.shoutingData),
                        rms: c(d?.rmsData),
                    };
                })(g, r, u, M);
            } catch (e) {
                G.nx.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
            }
        let c = N.u2(b, i, g, e);
        if (null != l) t = JSON.parse(l);
        else {
            if (((g.length = n), void 0 !== s)) g.thumbnail = s;
            else {
                let e = "";
                try {
                    e = await (0, $.m)(a.A.clips.getClipProtocolURLFromPath(C), 0);
                } catch (e) {
                    G.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (g.thumbnail = e), await D.updateClipMetadata(C, JSON.stringify(g));
            }
            t = g;
        }
        return (
            m.default.track(d.HAw.CLIP_SAVED, c),
            G.nx.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
            { ...t, filepath: C, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (m.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...N.lc("doSaveClip"), ...b }), e);
        if (e.errorAt !== L.RC.BUFFER_WARMING_UP && e.errorAt !== L.RC.BRIDGE_SHUTDOWN) {
            let t = N.WR(b, e);
            m.default.track(d.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function e_(e) {
    let { storageLocation: t } = R.Ay.getSettings(),
        n = [...Object.values(R.Ay.getClips()), ...R.Ay.getClipCandidates()].filter((e) => (0, O.Fk)(e.filepath, t));
    for (let t of (0, O.SF)(n, G.CN, e))
        try {
            await eD(t, !1);
        } catch (e) {
            G.nx.error("Failed to evict transient clip", e);
        }
}
async function eE(e) {
    let {
        clipMethod: t,
        request: n,
        timeline: i,
        decision: a,
        isCandidate: s,
        gameSessionId: l,
        decisionSignals: o,
    } = e;
    if (R.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: L.RC.MAX_CONCURRENT_SAVES });
    if ((0, D.qi)("saveClip") && !(0, J.t_)()) {
        G.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: L.RC.MODULE_NOT_LOADED });
        return;
    }
    let d = (0, b.TD)(),
        u = A.A.getCurrentUserActiveStream(),
        _ = null != u,
        h = (0, b.Ao)(),
        I = c.Ay.getVisibleGame()?.windowHandle != null,
        f = p.Ay.hasClipsSource(),
        T = h && I && f;
    if (!(d && _) && !T)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: L.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: d,
                hasActiveStream: _,
                decoupledClipsEnabled: h,
                hasVisibleGameWindow: I,
                hasClipsSource: f,
            },
        });
    if ((0, D.qi)("saveClip") && p.Ay.isClipsRecordingReadySignalSupported() && !p.Ay.isClipsRecordingReady()) {
        G.nx.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: L.RC.RECORDING_NOT_READY });
        return;
    }
    let m = (() => {
        if (null != u) return G.Fv.STREAMER;
        if (T) return G.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: m, clipMethod: t, signal: a?.signal });
    let g = "manual" === t ? (0, E.Ak)("clip_save", 0.5) : null,
        S = performance.now(),
        N = setTimeout(() => {
            G.nx.warn(`Clip save still pending after ${G.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: G.ut });
        }, G.ut);
    try {
        if ("auto" === t && !s && !(0, O.rX)()) {
            let e = R.Ay.getSettings().maxAutoClips,
                t = R.Ay.getClips(),
                n = Object.values(t).filter((e) => !0 === e.isTemporary),
                i = n.length - e + 1;
            if (i > 0) {
                let t = n.sort((e, t) => e.createdAt - t.createdAt).slice(0, i);
                for (let n of (G.nx.info(`Deleting ${t.length} temporary clips to stay within limit of ${e}`), t))
                    try {
                        await eD(n, !1);
                    } catch (e) {
                        G.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await eu({
            clipMethod: t,
            request: n,
            timeline: i,
            decision: a,
            isCandidate: s,
            gameSessionId: l,
            decisionSignals: o,
        });
        if (s && null != e.gameSessionId && R.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), eD(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), (0, O.C5)(t) && (await e_(e.id)), ed(e);
    } catch (a) {
        let { errorAt: e, errorMessage: n } = ec(a),
            i =
                e === L.RC.BUFFER_WARMING_UP
                    ? L.RC.BUFFER_WARMING_UP
                    : e === L.RC.BRIDGE_SHUTDOWN
                      ? L.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (G.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              g?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (G.nx.error("Clip Failed to Save", a),
              g?.stop(),
              s || (0, E.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(N);
    }
    G.nx.info(`${R.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - S)}ms`);
}
async function eA(e) {
    let t, n;
    if (R.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, D.qi)("saveScreenshotFromClip") && !(0, J.t_)())
        return void G.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = p.Ay.getMediaEngine(),
        s = Q(e, L.nQ.SCREENSHOT),
        l = R.Ay.getSettings().storageLocation,
        o = `${(0, v.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        d = a.A.fileManager.join(l, o);
    if (
        (null != s.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            G.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            G.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && G.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), G.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        G.nx.error("Failed to save screenshot: No window handle available"), (0, E.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: G.Fv.STREAMER, clipMethod: e ?? "manual" });
    let u = (0, E.Ak)("clip_save", 0.5),
        _ = performance.now();
    try {
        let e = { ...s, filepath: d, length: 0, thumbnail: "" },
            n = P(e),
            a = (await i.saveScreenshot(d, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${a}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            G.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            G.nx.log("Successfully saved screenshot to:", d);
    } catch (t) {
        throw (
            (G.nx.error("Failed to save screenshot:", t),
            u?.stop(),
            (0, E.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...ec(t) }),
            t)
        );
    }
}
async function eh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = R.Ay.getClipById(e) ?? R.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await V(s))) return;
    let l = a.A.clips.updateClipMetadata;
    (0, D.qi)("updateClipMetadata") && s.type === L.nQ.CLIP && null != l
        ? await l(s.filepath, P(s))
        : await p.Ay.getMediaEngine().updateClipMetadata(s.filepath, P(s)),
        n && N.PQ(i, t),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s });
}
async function eI(e) {
    await eh(e.id, { isFavorite: !e.isFavorite }, !0);
}
function ef() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function ep() {
    let e = R.Ay.getCurrentClipsSession(),
        t = e?.id;
    if (null == t) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP", gameId: e?.gameId ?? null });
    let n = R.Ay.getHistoricalClipsSessionById(t);
    null != n &&
        m.default.track(d.HAw.CLIPS_SESSION_ENDED, {
            ...N.lc("stopClipsSession"),
            current_clip_session_id: n.id,
            application_id: n.gameId,
            application_name: u.A.getGame(n.gameId)?.name,
            manual_clips_saved: n.manualClipsSaved,
            candidate_clips_saved: n.candidateClipsSaved,
            candidate_clips_promoted: n.candidateClipsPromoted,
        });
}
function eT(e, t) {
    let n = R.Ay.getCurrentClipsSession()?.gameId ?? null;
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t, previousGameId: n }),
        m.default.track(d.HAw.CLIPS_SESSION_STARTED, {
            ...N.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: u.A.getGame(t)?.name,
        });
}
function em() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eg(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eS(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await V({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
let eN = !1;
async function eC(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await eS(e);
    if ((0, O.rX)()) {
        let n = (0, O.xT)(e);
        await a.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await eS(n)));
    }
    if (!eN) {
        eN = !0;
        let e = t;
        for (let n of ((t = []), e))
            n.isCandidate
                ? eL(n).catch((e) => {
                      G.nx.error(`Failed to cleanup old clip candidate ${n.id}`, e);
                  })
                : t.push(n);
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eO(e) {
    let { storageLocation: t } = R.Ay.getSettings(),
        n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
    return await a.A.clips.moveClip(e.filepath, n), n;
}
async function eR(e, t, n) {
    let i = e,
        a = { isCandidate: !1, audioEvents: n },
        { storageLocation: s } = R.Ay.getSettings();
    if ((0, O.rX)() && (0, O.Fk)(e.filepath, s))
        try {
            let t = await eO(e);
            i = { ...e, filepath: t };
        } catch (e) {
            G.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...i, ...a } });
    try {
        await eh(i.id, { ...a, filepath: i.filepath });
    } catch (e) {
        G.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    m.default.track(d.HAw.CLIP_PROMOTED, {
        ...N.lc("promoteClipCandidate"),
        ...N.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eL(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await a.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((S.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return G.nx.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1;
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function eD(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eL(e))
        ? (r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
          t &&
              m.default.track(d.HAw.CLIP_DELETED, {
                  ...N.lc("deleteClip"),
                  ...N.Zy(e),
                  application_name: e.applicationName,
                  application_id: e.applicationId,
                  clip_uuid: e.id,
              }))
        : r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
}
async function ey(e, t) {
    let { analyticsLocations: n } = t,
        i = performance.now();
    try {
        eb([e.id]);
        let t = p.Ay.getMediaEngine();
        if (
            (0, D.qi)("exportClip") &&
            ((0, J.UW)({ forceV3Capability: !0 }), !(0, J.t_)()) &&
            (await (0, J.so)({ forceV3Capability: !0 }), !(0, J.t_)())
        )
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await eh(e.id, i);
        let r = {
            ...(e.editMetadata ?? {
                start: 0,
                end: e.length / 1e3,
                applicationAudio: !0,
                voiceAudio: !0,
                soundboardAudio: !0,
            }),
            crop: (0, L._1)(e.editMetadata?.crop) ?? void 0,
        };
        if (t.hasExportClipToFile() && (0, D.qi)("exportClip")) {
            let n = await a.A.app.getPath("temp"),
                i = a.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                l = a.A.fileManager.join(i, s),
                { filepath: o, formattedForUpload: d } = await t.exportClipToFile(e.filepath, l, r);
            try {
                let t = await a.A.clips.loadClip(o),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === L.nQ.SCREENSHOT || d) return n;
                return K(n);
            } finally {
                await ev(o);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === L.nQ.SCREENSHOT) return s;
        return K(s);
    } finally {
        eb(null);
        let t = performance.now();
        m.default.track(d.HAw.CLIP_EXPORTED, {
            ...N.lc("exportClip"),
            ...N.Zy(e),
            location_stack: n,
            export_duration: t - i,
        });
    }
}
async function ev(e) {
    if ((0, g.isDesktop)())
        try {
            await a.A.clips.deleteClip(e);
        } catch {}
}
function eb(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eM(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function eP(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eU(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }),
        t &&
            m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...N.lc("updateEnableAutoclipping"),
                autoclips_enabled: e,
            });
}
function ew(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...R.Ay.getSettings().clipSignals, ...e } },
    });
}
function eG(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ex(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function ek() {
    eG({ type: L.Gy.MANUAL });
}
async function eF(e) {
    await eh(e, { isTemporary: !1 }, !0);
}
