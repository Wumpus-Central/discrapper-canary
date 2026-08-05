"use strict";
n.d(t, {
    TE: () => eg,
    yT: () => ep,
    h$: () => e_,
    YP: () => el,
    Uh: () => ed,
    Fb: () => eD,
    VO: () => eP,
    uL: () => ek,
    GS: () => eu,
    fd: () => es,
    Ts: () => eV,
    e6: () => ex,
    H1: () => ew,
    l0: () => eH,
    yd: () => ef,
    YV: () => eS,
    Su: () => eC,
    yO: () => ea,
    $N: () => eB,
    YK: () => eO,
    eQ: () => er,
    PW: () => eF,
    w7: () => ej,
    K7: () => ev,
    HU: () => ec,
    Mt: () => eo,
    oH: () => eM,
    Yy: () => eT,
    Vp: () => eN,
    XK: () => em,
    mN: () => eG,
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
    L = n(974293),
    D = n(458977),
    y = n(439818),
    v = n(572164);
let b = ["filepath", "sizeBytes"];
function M(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of b) delete t[e];
            return t;
        })(e),
    );
}
var P = n(132500),
    U = n(935208),
    w = n(696016);
function G(e) {
    e?.type === "yelling" && (e.type = w.Gy.SHOUTING);
}
let x = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? w.nQ.SCREENSHOT : w.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, P.A)(), createdAt: U.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return G(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => G(e?.signal)), t;
        },
    ],
    k = null;
async function F(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i = (function (e) {
            let t;
            return null != k
                ? k
                : (k = e
                      .object({
                          id: e.string().required(),
                          version: e.number().positive().integer().min(0).max(w.kd).optional(),
                          name: e.string().when("version", { is: e.number().less(3), then: e.string().allow("") }),
                          gameName: e
                              .string()
                              .when("version", {
                                  is: e.number().greater(0).required(),
                                  then: e.forbidden(),
                                  otherwise: e.required(),
                              }),
                          applicationName: e
                              .string()
                              .when("version", {
                                  is: e.number().greater(0).required(),
                                  then: e.required().allow(""),
                                  otherwise: e.forbidden(),
                              }),
                          applicationId: e.string(),
                          activity: e
                              .object()
                              .keys({
                                  state: e.string(),
                                  details: e.string(),
                                  timestamps: e.object().keys({ start: e.number(), end: e.number() }),
                                  party: e.object().keys({ id: e.string(), size: e.array().items(e.number()) }),
                              }),
                          users: e.array().items(e.string()).required(),
                          filepath: e.string().required(),
                          length: e.number().required(),
                          thumbnail: e.string().required().allow(""),
                          editMetadata: e
                              .object()
                              .keys({
                                  start: e.number(),
                                  end: e.number(),
                                  applicationAudio: e.boolean(),
                                  voiceAudio: e.boolean(),
                                  soundboardAudio: e.boolean(),
                                  crop: e
                                      .object()
                                      .keys({
                                          preset: e.string().allow("original", "9:16", "16:9"),
                                          bounds: e
                                              .object()
                                              .keys({
                                                  x: e.number(),
                                                  y: e.number(),
                                                  width: e.number(),
                                                  height: e.number(),
                                                  aspectRatio: e.number(),
                                              }),
                                      }),
                              }),
                          createdAt: e
                              .number()
                              .when("version", { is: e.number().greater(4).required(), then: e.required() }),
                          type: e
                              .string()
                              .allow(w.nQ.CLIP, w.nQ.SCREENSHOT, w.nQ.VOICE_CLIP)
                              .when("version", {
                                  is: e.number().greater(3).required(),
                                  then: e.required(),
                                  otherwise: e.forbidden(),
                              }),
                          clipMethod: e.string().allow("auto", "manual").required(),
                          guildId: e.string(),
                          channelId: e.string(),
                          isFavorite: e.boolean(),
                          isTemporary: e.boolean(),
                          isCandidate: e.boolean(),
                          remoteClipId: e.string(),
                          gameSessionId: e.string(),
                          decision: e
                              .object()
                              .keys({
                                  reason: e.string(),
                                  clippingPressure: e.number(),
                                  currentThreshold: e.number(),
                                  effectivePressure: e.number(),
                                  timestamp: e.number(),
                                  signal: e.object().required(),
                              }),
                          timeline: e
                              .array()
                              .items(
                                  e
                                      .object()
                                      .keys({ signal: e.object().required(), timestamp: e.number().required() })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: e.number().greater(3).required(),
                                  then: e.required(),
                                  otherwise: e.forbidden(),
                              }),
                          originalStartMs: e.number(),
                          originalEndMs: e.number(),
                          sizeBytes: e.number(),
                          audioEvents: e
                              .array()
                              .items(
                                  e
                                      .object()
                                      .keys({
                                          type: e.string().valid("laughter", "shouting").required(),
                                          userId: e.string().required(),
                                          startMs: e.number().required(),
                                          endMs: e.number().required(),
                                          peakMs: e.number().required(),
                                          peakConfidence: e.number().required(),
                                      })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: e.number().greater(5).required(),
                                  then: e.optional(),
                                  otherwise: e.forbidden(),
                              }),
                          tracks: e
                              .array()
                              .items(
                                  ((t = e
                                      .object()
                                      .keys({
                                          id: e.string().required(),
                                          type: e.string().valid(w.Me.TEXT).required(),
                                          startSec: e.number().required(),
                                          endSec: e.number().required(),
                                          data: e
                                              .object()
                                              .keys({
                                                  text: e.string().required().allow(""),
                                                  style: e
                                                      .object()
                                                      .keys({
                                                          fontSize: e.number().required(),
                                                          color: e.string().required(),
                                                          strokeWidth: e
                                                              .string()
                                                              .valid(...Object.values(w.UY))
                                                              .required(),
                                                          strokeColor: e.string().required(),
                                                      })
                                                      .required(),
                                                  position: e
                                                      .object()
                                                      .keys({ x: e.number().required(), y: e.number().required() })
                                                      .required(),
                                              })
                                              .required(),
                                      })
                                      .unknown()),
                                  e.alternatives().try(t)),
                              )
                              .when("version", {
                                  is: e.number().greater(5).required(),
                                  then: e.optional(),
                                  otherwise: e.forbidden(),
                              }),
                      })
                      .required());
        })(t);
    try {
        return (
            delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            null != e.decision && delete e.decision.emotionHistory,
            t.assert(e, i),
            null == e.version && (e.version = 0),
            x.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
var V = n(796617),
    B = n(31048),
    H = n(997649),
    j = n(367974);
async function W(e) {
    let t,
        n = document.createElement("video");
    (n.volume = 0), (n.crossOrigin = "anonymous"), (n.src = e);
    try {
        return (
            await Promise.race([
                n.play(),
                new Promise((e, n) => {
                    t = setTimeout(() => n(Error("getVideoDimensions: playback start timed out")), 5e3);
                }),
            ]),
            n.pause(),
            { width: n.videoWidth, height: n.videoHeight }
        );
    } finally {
        null != t && clearTimeout(t), (0, j.A)(n);
    }
}
async function Y(e, t, n) {
    let i = document.createElement("canvas");
    (i.width = t), (i.height = n);
    let r = i.getContext("2d");
    if (null == r) throw Error("rasterizeTextTrack: could not create a 2D canvas context");
    await document.fonts.ready;
    let a = getComputedStyle(document.body).fontFamily,
        { text: s, style: l, position: o } = e.data,
        d = l.fontSize * n,
        c = w.mO[l.strokeWidth] * d;
    (r.font = `700 ${d}px ${"" === a ? "sans-serif" : a}`), (r.textAlign = "center"), (r.textBaseline = "middle");
    let u = o.x * t,
        _ = o.y * n;
    c > 0 &&
        ((r.lineJoin = "round"),
        (r.miterLimit = 2),
        (r.lineWidth = c),
        (r.strokeStyle = l.strokeColor),
        r.strokeText(s, u, _)),
        (r.fillStyle = l.color),
        r.fillText(s, u, _);
    let E = i.toDataURL("image/png");
    return { pngBase64: E.slice(E.indexOf(",") + 1), x: 0, y: 0, width: 1, height: 1 };
}
async function K(e, t) {
    let { width: n, height: i } = await W(e);
    if (t?.width != null && t?.height != null)
        return { width: Math.round(n * t.width), height: Math.round(i * t.height) };
    if (t?.aspectRatio != null) {
        var r;
        let e;
        return { width: Math.round((e = Math.min(n, i * (r = t.aspectRatio)))), height: Math.round(e / r) };
    }
    return { width: n, height: i };
}
async function $(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0,
        a = e
            .map((e) => ({
                track: e,
                start_ms: Math.round((Math.max(e.startSec, i) - i) * 1e3),
                end_ms: Math.round((Math.min(e.endSec, r) - i) * 1e3),
            }))
            .filter((e) => {
                let { start_ms: t, end_ms: n } = e;
                return n > t;
            });
    if (0 === a.length) return [];
    let { width: s, height: l } = await K(n, t);
    return [
        {
            segments: await Promise.all(
                a.map(async (e) => {
                    let { track: t, start_ms: n, end_ms: i } = e,
                        {
                            pngBase64: r,
                            x: a,
                            y: o,
                            width: d,
                            height: c,
                        } = await (function (e, t, n) {
                            if (e.type === w.Me.TEXT) return Y(e, t, n);
                            {
                                let t = e.type;
                                throw Error(`rasterizeTrack: unhandled track type '${t}'`);
                            }
                        })(t, s, l);
                    return {
                        start_ms: n,
                        end_ms: i,
                        x: a,
                        y: o,
                        width: d,
                        height: c,
                        opacity: 1,
                        kind: "bitmap",
                        png: r,
                    };
                }),
            ),
        },
    ];
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var z = n(284009),
    q = n.n(z);
async function Z(e) {
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
    q()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
var X = n(956050),
    Q = n(47167),
    J = n(587895),
    ee = n(287809),
    et = n(375708);
function en() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.nQ.CLIP,
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
                s = null != e ? (0, Q.m1)(e, ee.default, l.A) : "";
            }
            let h =
                    ((e = new Set()),
                    null == a ||
                        (e.add(a),
                        u.A.getGame(a)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        J.A.getApplication(a)?.linkedGames?.forEach((t) => {
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
    let g = E && t === w.nQ.CLIP ? w.nQ.VOICE_CLIP : t;
    return {
        id: (0, P.A)(),
        createdAt: Date.now(),
        version: w.kd,
        applicationName: a ?? et.intl.string(et.t.qtSJxb),
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
        remoteClipId: i?.signal?.type === w.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: g,
    };
}
var ei = n(201538);
async function er(e) {
    let { allowVoiceRecording: t } = e;
    await s.Q$.updateSetting(t),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
            ...N.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function ea(e) {
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
function es(e) {
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
function el(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function eo(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...N.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function ed(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function ec(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eD(e).catch((e) => {
            w.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function eu(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function e_(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function eE(e) {
    if (
        !D.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== w.Gy.MANUAL
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
            null != t && (await eT(e.id, { remoteClipId: t }, !1)),
                m.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...N.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            w.nx.warn("Failed to send remote clip trigger", e);
        }
}
function eA(e) {
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
async function eh(e) {
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
        g = en(i, w.nQ.CLIP, s, l, c);
    g.isCandidate = o ?? !1;
    let S = `${(0, y.A)(g.applicationName.substring(0, 20))}_${g.id}.mp4`,
        C = a.A.fileManager.join(T, S),
        L = p.Ay.getMediaEngine(),
        D = JSON.stringify(g),
        v = N.TX(g),
        b =
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
        { startMs: M, endMs: P, trimStartMs: U, trimEndMs: G } = r;
    try {
        let e, t;
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(T, f));
        let {
            duration: n,
            clipStats: i,
            thumbnail: s,
            metadata: l,
        } = await L.saveClipEx({
            filepath: C,
            metadata: D,
            thumbnailMs: U,
            startMs: M,
            endMs: P,
            trimStartMs: U,
            trimEndMs: G,
            userId: null != A.A.getCurrentUserActiveStream() ? h.default.getId() : void 0,
        });
        if (o && null != u && R.Ay.getEnableAutoclipping())
            try {
                e = (function (e, t, n, i) {
                    let r = e.applicationId,
                        a = (0, B.p)(),
                        s = Math.floor(t.startMs / V.pn) * V.pn,
                        l = Math.floor((t.endMs - s) / V.pn) + 1,
                        o = s + (l - 1) * V.pn,
                        d = n.audioModelDataPerUser[h.default.getId()];
                    function c() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return (0, V.lq)((0, V.Tv)(e, s, o), s, l).map((e) => e.value);
                    }
                    let u = (0, V.Q4)(r, n.gameEventData),
                        _ = (0, H.p)(n.gameEventData, s, o);
                    return {
                        game_events_supported: (0, V.GC)(r),
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
                })(g, r, u, b);
            } catch (e) {
                w.nx.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
            }
        let c = N.u2(v, i, g, e);
        if (null != l) t = JSON.parse(l);
        else {
            if (((g.length = n), void 0 !== s)) g.thumbnail = s;
            else {
                let e = "";
                try {
                    e = await (0, X.m)(a.A.clips.getClipProtocolURLFromPath(C), 0);
                } catch (e) {
                    w.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (g.thumbnail = e), await L.updateClipMetadata(C, JSON.stringify(g));
            }
            t = g;
        }
        return (
            m.default.track(d.HAw.CLIP_SAVED, c),
            w.nx.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
            { ...t, filepath: C, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (m.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...N.lc("doSaveClip"), ...v }), e);
        if (e.errorAt !== w.RC.BUFFER_WARMING_UP && e.errorAt !== w.RC.BRIDGE_SHUTDOWN) {
            let t = N.WR(v, e);
            m.default.track(d.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function eI(e) {
    let { storageLocation: t } = R.Ay.getSettings(),
        n = [...Object.values(R.Ay.getClips()), ...R.Ay.getClipCandidates()].filter((e) => (0, O.Fk)(e.filepath, t));
    for (let t of (0, O.SF)(n, w.CN, e))
        try {
            await eM(t, !1);
        } catch (e) {
            w.nx.error("Failed to evict transient clip", e);
        }
}
async function ef(e) {
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
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: w.RC.MAX_CONCURRENT_SAVES });
    if ((0, L.qi)("saveClip") && !(0, ei.t_)()) {
        w.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: w.RC.MODULE_NOT_LOADED });
        return;
    }
    let d = (0, v.TD)(),
        u = A.A.getCurrentUserActiveStream(),
        _ = null != u,
        h = (0, v.Ao)(),
        I = c.Ay.getVisibleGame()?.windowHandle != null,
        f = p.Ay.hasClipsSource(),
        T = h && I && f;
    if (!(d && _) && !T)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: w.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: d,
                hasActiveStream: _,
                decoupledClipsEnabled: h,
                hasVisibleGameWindow: I,
                hasClipsSource: f,
            },
        });
    if ((0, L.qi)("saveClip") && p.Ay.isClipsRecordingReadySignalSupported() && !p.Ay.isClipsRecordingReady()) {
        w.nx.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: w.RC.RECORDING_NOT_READY });
        return;
    }
    let m = (() => {
        if (null != u) return w.Fv.STREAMER;
        if (T) return w.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: m, clipMethod: t, signal: a?.signal });
    let g = "manual" === t ? (0, E.Ak)("clip_save", 0.5) : null,
        S = performance.now(),
        N = setTimeout(() => {
            w.nx.warn(`Clip save still pending after ${w.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: w.ut });
        }, w.ut);
    try {
        if ("auto" === t && !s && !(0, O.rX)()) {
            let e = R.Ay.getSettings().maxAutoClips,
                t = R.Ay.getClips(),
                n = Object.values(t).filter((e) => !0 === e.isTemporary),
                i = n.length - e + 1;
            if (i > 0) {
                let t = n.sort((e, t) => e.createdAt - t.createdAt).slice(0, i);
                for (let n of (w.nx.info(`Deleting ${t.length} temporary clips to stay within limit of ${e}`), t))
                    try {
                        await eM(n, !1);
                    } catch (e) {
                        w.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await eh({
            clipMethod: t,
            request: n,
            timeline: i,
            decision: a,
            isCandidate: s,
            gameSessionId: l,
            decisionSignals: o,
        });
        if (s && null != e.gameSessionId && R.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), eM(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), (0, O.C5)(t) && (await eI(e.id)), eE(e);
    } catch (a) {
        let { errorAt: e, errorMessage: n } = eA(a),
            i =
                e === w.RC.BUFFER_WARMING_UP
                    ? w.RC.BUFFER_WARMING_UP
                    : e === w.RC.BRIDGE_SHUTDOWN
                      ? w.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (w.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              g?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (w.nx.error("Clip Failed to Save", a),
              g?.stop(),
              s || (0, E.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(N);
    }
    w.nx.info(`${R.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - S)}ms`);
}
async function ep(e) {
    let t, n;
    if (R.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, L.qi)("saveScreenshotFromClip") && !(0, ei.t_)())
        return void w.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = p.Ay.getMediaEngine(),
        s = en(e, w.nQ.SCREENSHOT),
        l = R.Ay.getSettings().storageLocation,
        o = `${(0, y.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        d = a.A.fileManager.join(l, o);
    if (
        (null != s.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            w.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            w.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && w.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), w.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        w.nx.error("Failed to save screenshot: No window handle available"), (0, E.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: w.Fv.STREAMER, clipMethod: e ?? "manual" });
    let u = (0, E.Ak)("clip_save", 0.5),
        _ = performance.now();
    try {
        let e = { ...s, filepath: d, length: 0, thumbnail: "" },
            n = M(e),
            a = (await i.saveScreenshot(d, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${a}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            w.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            w.nx.log("Successfully saved screenshot to:", d);
    } catch (t) {
        throw (
            (w.nx.error("Failed to save screenshot:", t),
            u?.stop(),
            (0, E.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...eA(t) }),
            t)
        );
    }
}
async function eT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = R.Ay.getClipById(e) ?? R.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await F(s))) return;
    let l = a.A.clips.updateClipMetadata;
    (0, L.qi)("updateClipMetadata") && s.type === w.nQ.CLIP && null != l
        ? await l(s.filepath, M(s))
        : await p.Ay.getMediaEngine().updateClipMetadata(s.filepath, M(s)),
        n && N.PQ(i, t),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s });
}
async function em(e) {
    await eT(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eg() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function eS() {
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
function eN(e, t) {
    let n = R.Ay.getCurrentClipsSession()?.gameId ?? null;
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t, previousGameId: n }),
        m.default.track(d.HAw.CLIPS_SESSION_STARTED, {
            ...N.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: u.A.getGame(t)?.name,
        });
}
function eC() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eO(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eR(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await F({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
let eL = !1;
async function eD(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await eR(e);
    if ((0, O.rX)()) {
        let n = (0, O.xT)(e);
        await a.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await eR(n)));
    }
    if (!eL) {
        eL = !0;
        let e = t;
        for (let n of ((t = []), e))
            n.isCandidate
                ? eb(n).catch((e) => {
                      w.nx.error(`Failed to cleanup old clip candidate ${n.id}`, e);
                  })
                : t.push(n);
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function ey(e) {
    let { storageLocation: t } = R.Ay.getSettings(),
        n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
    return await a.A.clips.moveClip(e.filepath, n), n;
}
async function ev(e, t, n) {
    let i = e,
        a = { isCandidate: !1, audioEvents: n },
        { storageLocation: s } = R.Ay.getSettings();
    if ((0, O.rX)() && (0, O.Fk)(e.filepath, s))
        try {
            let t = await ey(e);
            i = { ...e, filepath: t };
        } catch (e) {
            w.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...i, ...a } });
    try {
        await eT(i.id, { ...a, filepath: i.filepath });
    } catch (e) {
        w.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    m.default.track(d.HAw.CLIP_PROMOTED, {
        ...N.lc("promoteClipCandidate"),
        ...N.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eb(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await a.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((S.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return w.nx.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1;
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function eM(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eb(e))
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
async function eP(e, t) {
    let { analyticsLocations: n } = t,
        i = performance.now();
    try {
        ew([e.id]);
        let t = p.Ay.getMediaEngine();
        if (
            (0, L.qi)("exportClip") &&
            ((0, ei.UW)({ forceV3Capability: !0 }), !(0, ei.t_)()) &&
            (await (0, ei.so)({ forceV3Capability: !0 }), !(0, ei.t_)())
        )
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await eT(e.id, i);
        let r = (0, w._1)(e.editMetadata?.crop),
            s = e.editMetadata?.start ?? 0,
            l = e.editMetadata?.end ?? e.length / 1e3,
            o = {
                ...(e.editMetadata ?? {
                    start: 0,
                    end: e.length / 1e3,
                    applicationAudio: !0,
                    voiceAudio: !0,
                    soundboardAudio: !0,
                }),
                crop: r ?? void 0,
                tracks: await $(e.tracks ?? [], r, a.A.clips.getClipProtocolURLFromPath(e.filepath), s, l),
            };
        if (t.hasExportClipToFile() && (0, L.qi)("exportClip")) {
            let n = await a.A.app.getPath("temp"),
                i = a.A.fileManager.join(n, "Discord Clips"),
                r = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                s = a.A.fileManager.join(i, r),
                { filepath: l, formattedForUpload: d } = await t.exportClipToFile(e.filepath, s, o);
            try {
                let t = await a.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === w.nQ.SCREENSHOT || d) return n;
                return Z(n);
            } finally {
                await eU(l);
            }
        }
        let d = await t.exportClip(e.filepath, o);
        if (e.type === w.nQ.SCREENSHOT) return d;
        return Z(d);
    } finally {
        ew(null);
        let t = performance.now();
        m.default.track(d.HAw.CLIP_EXPORTED, {
            ...N.lc("exportClip"),
            ...N.Zy(e),
            location_stack: n,
            export_duration: t - i,
        });
    }
}
async function eU(e) {
    if ((0, g.isDesktop)())
        try {
            await a.A.clips.deleteClip(e);
        } catch {}
}
function ew(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eG(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function ex(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function ek(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }),
        t &&
            m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...N.lc("updateEnableAutoclipping"),
                autoclips_enabled: e,
            });
}
function eF(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...R.Ay.getSettings().clipSignals, ...e } },
    });
}
function eV(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eB(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eH() {
    eV({ type: w.Gy.MANUAL });
}
async function ej(e) {
    await eT(e, { isTemporary: !1 }, !0);
}
