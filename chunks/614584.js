(n.d(t, {
    TE: () => eI,
    yT: () => eE,
    jE: () => ew,
    h$: () => el,
    YP: () => en,
    Uh: () => er,
    Fb: () => eg,
    VO: () => eb,
    uL: () => eG,
    GS: () => es,
    h5: () => eL,
    Ts: () => ex,
    H1: () => eP,
    l0: () => eF,
    yd: () => e_,
    ef: () => eC,
    Su: () => ef,
    yO: () => et,
    $N: () => ek,
    t9: () => eO,
    YK: () => ep,
    eQ: () => ee,
    EM: () => ey,
    K7: () => eN,
    HU: () => ea,
    Mt: () => ei,
    oH: () => ev,
    Yy: () => eA,
    XK: () => eh,
    mN: () => eU,
}),
    n(321073));
var i = n(636537),
    r = n(228366),
    a = n(77729),
    s = n(885386),
    l = n(994500),
    o = n(461213),
    d = n(652215),
    c = n(952818),
    u = n(205106),
    _ = n(400492),
    E = n(616356),
    A = n(280450),
    h = n(131319),
    I = n(734057),
    f = n(25578),
    p = n(763827),
    T = n(174459),
    m = n(723702),
    g = n(38405),
    S = n(53677),
    N = n(915725),
    C = n(341923),
    O = n(696016);
function R() {
    return (0, m.isDesktop)() && a.A.features.supports("clips_storage_size");
}
function L(e) {
    return "auto" === e && R() && (0, C.s$)() && N.Ay.getEnableAutoclipping();
}
function y(e) {
    return a.A.fileManager.join(e, O.SC);
}
function D(e, t) {
    return a.A.fileManager.dirname(e) === y(t);
}
var v = n(458977),
    b = n(439818),
    M = n(572164);
let P = ["filepath", "sizeBytes"];
function U(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of P) delete t[e];
            return t;
        })(e),
    );
}
var w = n(132500),
    G = n(935208);
function x(e) {
    e?.type === "yelling" && (e.type = O.Gy.SHOUTING);
}
let k = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return (delete t.gameName, t);
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? O.nQ.SCREENSHOT : O.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, w.A)(), createdAt: G.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return (x(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => x(e?.signal)), t);
        },
    ],
    F = null;
async function B(e) {
    let t = (await n.e("734188").then(n.t.bind(n, 88137, 23))).default,
        i = (function (e) {
            let t, n, i;
            return null != F
                ? F
                : (F = e
                      .object({
                          id: e.string().required(),
                          version: e.number().positive().integer().min(0).max(O.kd).optional(),
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
                              .allow(O.nQ.CLIP, O.nQ.SCREENSHOT, O.nQ.VOICE_CLIP)
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
                          syncTimestamp: e
                              .number()
                              .when("version", {
                                  is: e.number().greater(5).required(),
                                  then: e.optional(),
                                  otherwise: e.forbidden(),
                              }),
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
                                      .keys({ x: e.number().required(), y: e.number().required() })
                                      .required()),
                                  (n = e
                                      .object()
                                      .keys({
                                          id: e.string().required(),
                                          type: e.string().valid(O.Me.TEXT).required(),
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
                                                              .valid(...Object.values(O.UY))
                                                              .required(),
                                                          strokeColor: e.string().required(),
                                                      })
                                                      .required(),
                                                  position: t,
                                                  rotationDeg: e.number(),
                                              })
                                              .required(),
                                      })
                                      .unknown()),
                                  (i = e
                                      .object()
                                      .keys({
                                          id: e.string().required(),
                                          type: e.string().valid(O.Me.IMAGE).required(),
                                          startSec: e.number().required(),
                                          endSec: e.number().required(),
                                          data: e
                                              .object()
                                              .keys({
                                                  src: e.string().required(),
                                                  mimeType: e.string().required(),
                                                  fileName: e.string().required().allow(""),
                                                  naturalWidth: e.number().required(),
                                                  naturalHeight: e.number().required(),
                                                  position: t,
                                                  widthFraction: e.number().required(),
                                                  rotationDeg: e.number().required(),
                                                  shadow: e.string().valid(...Object.values(O.Hz)),
                                                  shadowColor: e.string(),
                                              })
                                              .required(),
                                      })
                                      .unknown()),
                                  e.alternatives().try(n, i)),
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
            k.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
var V = n(826651),
    H = n(31048),
    j = n(997649),
    W = n(649223);
async function Y(e, t, i) {
    if (0 === e.length) return [];
    let r = getComputedStyle(document.body).fontFamily,
        a = "" === r ? "sans-serif" : r,
        s = new Worker(new URL("/assets/" + n.u("783400"), n.b));
    try {
        return await new Promise((n, r) => {
            (s.addEventListener(
                "message",
                (e) => {
                    let {
                        data: { results: t, error: i },
                    } = e;
                    null != i ? r(Error(i)) : n(t ?? []);
                },
                { once: !0 },
            ),
                s.addEventListener("error", (e) => r(Error(e.message)), { once: !0 }),
                s.postMessage({ tracks: e, canvasWidth: t, canvasHeight: i, fontFamily: a }));
        });
    } finally {
        s.terminate();
    }
}
async function K(e, t) {
    let { width: n, height: i } = await (0, W.N)(e);
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
    let { width: s, height: l } = await K(n, t),
        o = await Y(
            a.map((e) => {
                let { track: t } = e;
                return t;
            }),
            s,
            l,
        );
    return [
        {
            segments: a.map((e, t) => {
                let { start_ms: n, end_ms: i } = e,
                    { pngBase64: r, x: a, y: s, width: l, height: d } = o[t];
                return { start_ms: n, end_ms: i, x: a, y: s, width: l, height: d, opacity: 1, kind: "bitmap", png: r };
            }),
        },
    ];
}
(n(323874), n(14289), n(35956), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var z = n(284009),
    X = n.n(z);
async function q(e) {
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
    X()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
var Z = n(956050),
    Q = n(160330),
    J = n(201538);
async function ee(e) {
    let { allowVoiceRecording: t } = e;
    (await s.Q$.updateSetting(t),
        T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), allow_voice_recording: t }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
}
async function et(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1, analyticsLocation: a } = e;
    (await r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsEnabled: t } }),
        i && T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { location: a, ...S.lc(), clips_enabled: t, guild_id: n }));
}
function en(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ei(e) {
    (r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), reminders_enabled: e }));
}
function er(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function ea(e) {
    (r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eg(e).catch((e) => {
            O.nx.error("Failed to load clips directory after storage location change", e);
        }));
}
function es(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function el(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function eo(e) {
    if (
        !v.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== O.Gy.MANUAL
    )
        return;
    let t = p.A.getChannelId(),
        n = I.A.getChannel(t);
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
            (null != t && (await eA(e.id, { remoteClipId: t }, !1)),
                T.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...S.lc(),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                }));
        } catch (e) {
            O.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ed(e) {
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
async function ec(e) {
    let t,
        n,
        {
            clipMethod: i,
            request: r,
            timeline: s,
            decision: l,
            isCandidate: o,
            gameSessionId: c,
            decisionSignals: _,
        } = e,
        I = N.Ay.getSettings(),
        p = L(i),
        m = p ? y(I.storageLocation) : I.storageLocation,
        g = (0, Q.A)(i, O.nQ.CLIP, s, l, c);
    g.isCandidate = o ?? !1;
    let C = `${(0, b.A)(g.applicationName.substring(0, 20))}_${g.id}.mp4`,
        R = a.A.fileManager.join(m, C),
        D = f.Ay.getMediaEngine(),
        v = JSON.stringify(g),
        M = S.TX(g),
        P =
            ((t = f.Ay.getNoiseCancellation()),
            (n = f.Ay.getSystemMicrophoneMode()),
            {
                noise_cancellation: t,
                effective_noise_cancellation: (0, u.A)(t, n),
                noise_suppression: f.Ay.getNoiseSuppression(),
                bypass_system_input_processing: f.Ay.getBypassSystemInputProcessing(),
                system_microphone_mode: n ?? null,
                audio_bitrate: h.A.bitrate,
            }),
        { startMs: U, endMs: w, trimStartMs: G, trimEndMs: x } = r;
    try {
        let e, t;
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(m, p));
        let {
            duration: n,
            clipStats: i,
            thumbnail: s,
            metadata: l,
        } = await D.saveClipEx({
            filepath: R,
            metadata: v,
            thumbnailMs: G,
            startMs: U,
            endMs: w,
            trimStartMs: G,
            trimEndMs: x,
            userId: null != E.A.getCurrentUserActiveStream() ? A.default.getId() : void 0,
        });
        if (o && null != _ && N.Ay.getEnableAutoclipping())
            try {
                e = (function (e, t, n, i) {
                    let r = e.applicationId,
                        a = (0, H.p)(),
                        s = Math.floor(t.startMs / V.pn) * V.pn,
                        l = Math.floor((t.endMs - s) / V.pn) + 1,
                        o = s + (l - 1) * V.pn,
                        d = n.audioModelDataPerUser[A.default.getId()];
                    function c() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return (0, V.lq)((0, V.Tv)(e, s, o), s, l).map((e) => e.value);
                    }
                    let u = (0, V.Q4)(r, n.gameEventData),
                        _ = (0, j.p)(n.gameEventData, s, o);
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
                })(g, r, _, P);
            } catch (e) {
                O.nx.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
            }
        let c = S.u2(M, i, g, e);
        if (null != l) t = JSON.parse(l);
        else {
            if (((g.length = n), void 0 !== s)) g.thumbnail = s;
            else {
                let e = "";
                try {
                    e = await (0, Z.m)(a.A.clips.getClipProtocolURLFromPath(R), 0);
                } catch (e) {
                    O.nx.warn("Failed to generate clip thumbnail:", e);
                }
                ((g.thumbnail = e), await D.updateClipMetadata(R, JSON.stringify(g)));
            }
            t = g;
        }
        return (
            T.default.track(d.HAw.CLIP_SAVED, c),
            O.nx.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
            { ...t, filepath: R, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e)) throw (T.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...S.lc(), ...M }), e);
        if (e.errorAt !== O.RC.BUFFER_WARMING_UP && e.errorAt !== O.RC.BRIDGE_SHUTDOWN) {
            let t = S.WR(M, e);
            T.default.track(d.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function eu(e) {
    let { storageLocation: t } = N.Ay.getSettings();
    for (let n of (function (e, t, n) {
        let i = e.reduce((e, t) => e + (t.sizeBytes ?? 0), 0);
        if (i <= t) return [];
        let r = e.filter((e) => e.id !== n && !0 !== e.pending).sort((e, t) => e.createdAt - t.createdAt),
            a = [];
        for (let e of r) {
            if (i <= t) break;
            (a.push(e), (i -= e.sizeBytes ?? 0));
        }
        return a;
    })(
        [...Object.values(N.Ay.getClips()), ...N.Ay.getClipCandidates()].filter((e) => D(e.filepath, t)),
        O.CN,
        e,
    ))
        try {
            await ev(n, !1);
        } catch (e) {
            O.nx.error("Failed to evict transient clip", e);
        }
}
async function e_(e) {
    let { clipMethod: t, request: n, timeline: i, decision: a, isCandidate: s, session: l, decisionSignals: o } = e;
    if (N.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: O.RC.MAX_CONCURRENT_SAVES });
    if (!(0, J.t_)()) {
        (O.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: O.RC.MODULE_NOT_LOADED }));
        return;
    }
    let d = (0, M.T)(),
        u = E.A.getCurrentUserActiveStream(),
        A = null != u,
        h = c.Ay.getVisibleGame()?.windowHandle != null,
        I = f.Ay.hasClipsSource(),
        p = d && A,
        T = d && h && I;
    if (!p && !T)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: O.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: { clipsEnabled: d, hasActiveStream: A, hasVisibleGameWindow: h, hasClipsSource: I },
        });
    if (f.Ay.isClipsRecordingReadySignalSupported() && !f.Ay.isClipsRecordingReady()) {
        (O.nx.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: O.RC.RECORDING_NOT_READY }));
        return;
    }
    let m = (() => {
        if (null != u) return O.Fv.STREAMER;
        if (T) return O.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: m, clipMethod: t, signal: a?.signal });
    let g = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        S = performance.now(),
        C = setTimeout(() => {
            (O.nx.warn(`Clip save still pending after ${O.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: O.ut }));
        }, O.ut);
    try {
        let e = await ec({
            clipMethod: t,
            request: n,
            timeline: i,
            decision: a,
            isCandidate: s,
            gameSessionId: l?.id,
            decisionSignals: o,
        });
        if (s && null != l && !l.isActive) {
            (r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), ev(e));
            return;
        }
        (r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: l }), L(t) && (await eu(e.id)), eo(e));
    } catch (a) {
        let { errorAt: e, errorMessage: n } = ed(a),
            i =
                e === O.RC.BUFFER_WARMING_UP
                    ? O.RC.BUFFER_WARMING_UP
                    : e === O.RC.BRIDGE_SHUTDOWN
                      ? O.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (O.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              g?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (O.nx.error("Clip Failed to Save", a),
              g?.stop(),
              s || (0, _.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(C);
    }
    O.nx.info(`${N.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - S)}ms`);
}
async function eE(e) {
    let t, n;
    if (N.Ay.getIsAtMaxSaveClipOperations()) return;
    if (!(0, J.t_)()) return void O.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = N.Ay.getActiveClipsSession(),
        s = f.Ay.getMediaEngine(),
        l = (0, Q.A)(e, O.nQ.SCREENSHOT),
        o = N.Ay.getSettings().storageLocation,
        d = `${(0, b.A)(l.applicationName.substring(0, 20))}_${l.id}.jpeg`,
        u = a.A.fileManager.join(o, d);
    if (
        (null != l.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === l.applicationId)) &&
            O.nx.log("Matched application ID to running game:", l.applicationId, n.name),
        null == n &&
            null != l.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === l.applicationName)) &&
            O.nx.log("Matched application name to running game:", l.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && O.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        ((t = parseInt(n.windowHandle, 10)), O.nx.log("Using window handle for full resolution screenshot:", t));
    else {
        (O.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5));
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: O.Fv.STREAMER, clipMethod: e ?? "manual" });
    let E = (0, _.Ak)("clip_save", 0.5),
        A = performance.now();
    try {
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(o, !1));
        let e = { ...l, filepath: u, length: 0, thumbnail: "" },
            n = U(e),
            d = (await s.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        ((e.thumbnail = `data:image/jpeg;base64,${d}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: i }),
            O.nx.info(`Screenshot save took ${Math.round(performance.now() - A)}ms`),
            O.nx.log("Successfully saved screenshot to:", u));
    } catch (t) {
        throw (
            O.nx.error("Failed to save screenshot:", t),
            E?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...ed(t) }),
            t
        );
    }
}
async function eA(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = N.Ay.getClipById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await B(s))) return;
    let l = a.A.clips.updateClipMetadata;
    (s.type === O.nQ.CLIP && null != l
        ? await l(s.filepath, U(s))
        : await f.Ay.getMediaEngine().updateClipMetadata(s.filepath, U(s)),
        n && S.PQ(i, t),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s }));
}
async function eh(e) {
    await eA(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eI() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function ef() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ep(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eT(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await B({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
let em = !1;
async function eg(e) {
    if (!(0, m.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await eT(e);
    if (!em) {
        em = !0;
        let t = [];
        if (L("auto")) {
            let n = y(e);
            t = (await eT(n)).filter((e) => e.isCandidate);
        }
        t.forEach((e) =>
            eD(e).catch((t) => {
                O.nx.error(`Failed to cleanup old clip candidate ${e.id}`, t);
            }),
        );
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eS(e) {
    let { storageLocation: t } = N.Ay.getSettings(),
        n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
    return (await a.A.clips.moveClip(e.filepath, n), n);
}
async function eN(e, t, n, i) {
    let a = e,
        s = { isCandidate: !1, audioEvents: i },
        { storageLocation: l } = N.Ay.getSettings();
    if (R() && D(e.filepath, l))
        try {
            let t = await eS(e);
            a = { ...e, filepath: t };
        } catch (e) {
            return (O.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e), null);
        }
    await r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...a, ...s }, session: n });
    try {
        await eA(a.id, { ...s, filepath: a.filepath });
    } catch (e) {
        O.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    return (
        T.default.track(d.HAw.CLIP_PROMOTED, { ...S.lc(), ...S.Zy(e), clip_uuid: e.id, clip_auto_clip_score: t }),
        { ...a, ...s }
    );
}
function eC(e) {
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_START", clip: e });
}
async function eO(e) {
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_ERROR", clipId: e.id });
    try {
        let t = await a.A.clips.deleteClip(e.filepath);
        null == t ||
            t.ok ||
            "ENOENT" === t.reason ||
            O.nx.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath} (${t.reason})`);
    } catch (t) {
        O.nx.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath}`, t);
    }
}
function eR(e) {
    let t = { ...e };
    return (delete t.pending, t);
}
function eL(e) {
    return U(eR(e));
}
async function ey(e, t) {
    let n = eR(e);
    try {
        ((n.thumbnail = await (0, Z.m)(a.A.clips.getClipProtocolURLFromPath(n.filepath), 0)),
            await a.A.clips.updateClipMetadata(n.filepath, U(n)));
    } catch (e) {
        O.nx.warn("finalizeMontageClip: failed to generate montage thumbnail:", e);
    }
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_DONE", clip: n, session: t });
}
async function eD(e) {
    if (!(0, m.isDesktop)() || a.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await a.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((g.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return (O.nx.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1);
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function ev(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, m.isDesktop)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eD(e))
        ? (r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
          t &&
              T.default.track(d.HAw.CLIP_DELETED, {
                  ...S.lc(),
                  ...S.Zy(e),
                  application_name: e.applicationName,
                  application_id: e.applicationId,
                  clip_uuid: e.id,
              }))
        : r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
}
async function eb(e, t) {
    let { analyticsLocations: n, isTemporaryEdit: i = !1, skipComposition: r = !1 } = t,
        s = performance.now();
    try {
        eP([e.id]);
        let t = f.Ay.getMediaEngine();
        if (!(0, J.t_)() && (await (0, J.so)(), !(0, J.t_)())) throw Error("discord_clips module failed to load");
        let { filepath: n, ...s } = e;
        i || (await eA(e.id, s));
        let l = r ? null : (0, O._1)(e.editMetadata?.crop),
            o = e.editMetadata?.start ?? 0,
            d = e.editMetadata?.end ?? e.length / 1e3,
            c = {
                ...(e.editMetadata ?? {
                    start: 0,
                    end: e.length / 1e3,
                    applicationAudio: !0,
                    voiceAudio: !0,
                    soundboardAudio: !0,
                }),
                crop: l ?? void 0,
                tracks: r ? [] : await $(e.tracks ?? [], l, a.A.clips.getClipProtocolURLFromPath(e.filepath), o, d),
            },
            u = await a.A.app.getPath("temp"),
            _ = a.A.fileManager.join(u, "Discord Clips"),
            E = `${crypto.randomUUID()}-${Date.now()}.mp4`,
            A = a.A.fileManager.join(_, E),
            { filepath: h, formattedForUpload: I } = await t.exportClipToFile(e.filepath, A, c);
        try {
            let t = await a.A.clips.loadClip(h),
                n = new Blob([t.data], { type: "video/mp4" });
            if (e.type === O.nQ.SCREENSHOT || I) return n;
            return q(n);
        } finally {
            await eM(h);
        }
    } finally {
        eP(null);
        let t = performance.now();
        T.default.track(d.HAw.CLIP_EXPORTED, { ...S.lc(), ...S.Zy(e), location_stack: n, export_duration: t - s });
    }
}
async function eM(e) {
    if ((0, m.isDesktop)())
        try {
            await a.A.clips.deleteClip(e);
        } catch {}
}
function eP(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eU(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function ew(e) {
    r.h.dispatch({ type: "CLIPS_AUTOCLIPS_STAFF_BYPASS_OVERRIDE", disabled: e });
}
function eG(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = L("auto");
    if ((r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }), !i && L("auto"))) {
        let { storageLocation: e } = N.Ay.getSettings();
        eg(e).catch((e) => {
            O.nx.error("Failed to reload clips after enabling autoclipping", e);
        });
    }
    t && T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), autoclips_enabled: e, location: n });
}
function ex(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ek(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eF() {
    ex({ type: O.Gy.MANUAL });
}
