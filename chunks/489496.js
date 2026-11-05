(n.d(t, {
    ef: () => eT,
    TE: () => eE,
    Su: () => eA,
    Ts: () => eP,
    l0: () => eU,
    oH: () => eR,
    $N: () => eM,
    VO: () => eL,
    t9: () => eg,
    EM: () => eC,
    Fb: () => ep,
    K7: () => em,
    YK: () => ef,
    yd: () => ed,
    yT: () => ec,
    h5: () => eN,
    mN: () => eD,
    jE: () => eb,
    H1: () => ey,
    XK: () => e_,
    eQ: () => ee,
    Yy: () => eu,
    yO: () => et,
    h$: () => el,
    GS: () => es,
    HU: () => ea,
    YP: () => en,
    uL: () => ev,
    Mt: () => ei,
    Uh: () => er,
}),
    n(321073));
var i = n(620632),
    r = n(73153),
    a = n(77729),
    s = n(350835),
    l = n(253932),
    o = n(994500),
    d = n(894768),
    c = n(397369),
    u = n(886705),
    _ = n(400492),
    E = n(616356),
    A = n(46653),
    f = n(131319),
    h = n(734057),
    I = n(754712),
    p = n(495867),
    m = n(129230),
    T = n(723702),
    g = n(856383),
    S = n(53677),
    N = n(734066),
    C = n(419490),
    O = n(341923),
    R = n(696016);
function L() {
    return (0, T.xl)() && a.A.features.supports("clips_storage_size");
}
function y(e) {
    return "auto" === e && L() && (0, O.s)() && C.Ay.getEnableAutoclipping();
}
function D(e) {
    return a.A.fileManager.join(e, R.SC);
}
function b(e, t) {
    return a.A.fileManager.dirname(e) === D(t);
}
var v = n(458977),
    P = n(439818),
    M = n(572164);
let U = ["filepath", "sizeBytes"];
function w(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of U) delete t[e];
            return t;
        })(e),
    );
}
var G = n(115560),
    x = n(811091);
function k(e) {
    e?.type === "yelling" && (e.type = R.Gy.SHOUTING);
}
let F = [
        (e) => {
            let { gameName: t, ...n } = e;
            return { ...n, version: 1, applicationName: t, applicationId: void 0 };
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? R.nQ.SCREENSHOT : R.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, G.A)(), createdAt: x.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return (k(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => k(e?.signal)), t);
        },
    ],
    B = null;
async function V(e) {
    let t = (await n.e(734188).then(n.t.bind(n, 88137, 23))).default,
        i = (function (e) {
            let t, n, i;
            return null != B
                ? B
                : (B = e
                      .object({
                          id: e.string().required(),
                          version: e.number().positive().integer().min(0).max(6).optional(),
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
                              .allow(R.nQ.CLIP, R.nQ.SCREENSHOT, R.nQ.VOICE_CLIP)
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
                                          type: e.string().valid(R.Me.TEXT).required(),
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
                                                              .valid(...Object.values(R.UY))
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
                                          type: e.string().valid(R.Me.IMAGE).required(),
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
                                                  shadow: e.string().valid(...Object.values(R.Hz)),
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
            F.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
var H = n(395378),
    j = n(31048),
    W = n(997649),
    Y = n(649223);
function K(e, t, n) {
    return e
        .map((e) => ({
            track: e,
            start_ms: Math.round((Math.max(e.startSec, t) - t) * 1e3),
            end_ms: Math.round((Math.min(e.endSec, n) - t) * 1e3),
        }))
        .filter((e) => {
            let { start_ms: t, end_ms: n } = e;
            return n > t;
        });
}
(n(323874), n(14289), n(35956), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var $ = n(284009),
    X = n.n($),
    z = n(956050),
    q = n(160330),
    Q = n(160759),
    Z = n(253116),
    J = n(652215);
async function ee(e) {
    let { allowVoiceRecording: t } = e;
    (await l.Q$.updateSetting(t),
        m.default.track(J.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), allow_voice_recording: t }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
}
async function et(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1, analyticsLocation: a } = e;
    (await r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsEnabled: t } }),
        i && m.default.track(J.HAw.CLIPS_SETTINGS_UPDATED, { location: a, ...S.lc(), clips_enabled: t, guild_id: n }));
}
function en(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ei(e) {
    (r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(J.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), reminders_enabled: e }));
}
function er(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function ea(e) {
    (r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ep(e).catch((e) => {
            R.GU.error("Failed to load clips directory after storage location change", e);
        }));
}
function es(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function el(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function eo(e) {
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
async function ed(e) {
    let { clipMethod: t, request: n, timeline: T, decision: g, isCandidate: N, session: O, decisionSignals: L } = e;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MAX_CONCURRENT_SAVES });
    if (!(0, Q.t_)()) {
        (R.GU.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MODULE_NOT_LOADED }));
        return;
    }
    let U = (0, M.T)(),
        w = E.A.getCurrentUserActiveStream(),
        G = null != w,
        x = c.Ay.getVisibleGame()?.windowHandle != null,
        k = I.Ay.hasClipsSource(),
        F = U && G,
        B = U && x && k;
    if (!F && !B)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: R.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: { clipsEnabled: U, hasActiveStream: G, hasVisibleGameWindow: x, hasClipsSource: k },
        });
    if (I.Ay.isClipsRecordingReadySignalSupported() && !I.Ay.isClipsRecordingReady()) {
        (R.GU.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.RECORDING_NOT_READY }));
        return;
    }
    let V = (() => {
        if (null != w) return R.Fv.STREAMER;
        if (B) return R.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: V, clipMethod: t, signal: g?.signal });
    let Y = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        K = performance.now(),
        $ = setTimeout(() => {
            (R.GU.warn(`Clip save still pending after ${R.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: R.ut }));
        }, R.ut);
    try {
        let e = await (async function (e) {
            let t,
                n,
                {
                    clipMethod: i,
                    request: r,
                    timeline: s,
                    decision: l,
                    isCandidate: o,
                    gameSessionId: d,
                    decisionSignals: c,
                } = e,
                _ = C.Ay.getSettings(),
                h = y(i),
                p = h ? D(_.storageLocation) : _.storageLocation,
                T = (0, q.A)(i, R.nQ.CLIP, s, l, d),
                g = null != T.syncTimestamp ? T.syncTimestamp - T.createdAt : void 0,
                N = (0, j.p)(g);
            T.isCandidate = o ?? !1;
            let O = `${(0, P.A)(T.applicationName.substring(0, 20))}_${T.id}.mp4`,
                L = a.A.fileManager.join(p, O),
                b = I.Ay.getMediaEngine(),
                v = JSON.stringify(T),
                M = S.TX(T),
                U =
                    ((t = I.Ay.getNoiseCancellation()),
                    (n = I.Ay.getSystemMicrophoneMode()),
                    {
                        noise_cancellation: t,
                        effective_noise_cancellation: (0, u.A)(t, n),
                        noise_suppression: I.Ay.getNoiseSuppression(),
                        bypass_system_input_processing: I.Ay.getBypassSystemInputProcessing(),
                        system_microphone_mode: n ?? null,
                        audio_bitrate: f.A.bitrate,
                    }),
                { startMs: w, endMs: G, trimStartMs: x, trimEndMs: k } = r;
            try {
                let e, t;
                null != a.A.fileManager.createDirectoryIfNotExists &&
                    (await a.A.fileManager.createDirectoryIfNotExists(p, h));
                let {
                    duration: n,
                    clipStats: i,
                    thumbnail: s,
                    metadata: l,
                } = await b.saveClipEx({
                    filepath: L,
                    metadata: v,
                    thumbnailMs: x,
                    startMs: w,
                    endMs: G,
                    trimStartMs: x,
                    trimEndMs: k,
                    userId: null != E.A.getCurrentUserActiveStream() ? A.default.getId() : void 0,
                });
                if (o && null != c && C.Ay.getEnableAutoclipping())
                    try {
                        e = (function (e, t, n, i, r) {
                            let a = e.applicationId,
                                s = 1e3 * Math.floor(t.startMs / 1e3),
                                l = Math.floor((t.endMs - s) / 1e3) + 1,
                                o = s + (l - 1) * 1e3,
                                d = n.audioModelDataPerUser[A.default.getId()];
                            function c() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return (0, H.lq)((0, H.Tv)(e, s, o), s, l).map((e) => e.value);
                            }
                            let u = (0, H.Q4)(a, n.gameEventData),
                                _ = (0, W.p)(n.gameEventData, s, o);
                            return {
                                game_events_supported: (0, H.GC)(a),
                                created_at_ms: e.createdAt,
                                window_start_ms: s + r,
                                window_end_ms: o + r,
                                trim_start_ms: t.trimStartMs + r,
                                trim_end_ms: t.trimEndMs + r,
                                in_game: u?.getInGameState?.(s, o) ?? [],
                                game_event_ts_ms: _.map((e) => e.timestamp_ms + r),
                                game_event_weight: _.map((e) => e.score ?? 0),
                                game_event_name: _.map((e) => e.eventName ?? ""),
                                ...i,
                                laughter: c(d?.laughterData),
                                shouting: c(d?.shoutingData),
                                rms: c(d?.rmsData),
                            };
                        })(T, r, c, U, N);
                    } catch (e) {
                        R.GU.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
                    }
                let d = S.u2(M, i, T, e);
                if (null != l) t = JSON.parse(l);
                else {
                    if (((T.length = n), void 0 !== s)) T.thumbnail = s;
                    else {
                        let e = "";
                        try {
                            e = await (0, z.m)(a.A.clips.getClipProtocolURLFromPath(L), 0);
                        } catch (e) {
                            R.GU.warn("Failed to generate clip thumbnail:", e);
                        }
                        ((T.thumbnail = e), await b.updateClipMetadata(L, JSON.stringify(T)));
                    }
                    t = T;
                }
                return (
                    m.default.track(J.HAw.CLIP_SAVED, d),
                    R.GU.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
                    { ...t, filepath: L, sizeBytes: i.clipSizeBytes }
                );
            } catch (e) {
                if (!("errorMessage" in e)) throw (m.default.track(J.HAw.CLIP_SAVE_FAILURE, { ...S.lc(), ...M }), e);
                if (e.errorAt !== R.RC.BUFFER_WARMING_UP && e.errorAt !== R.RC.BRIDGE_SHUTDOWN) {
                    let t = S.WR(M, e);
                    m.default.track(J.HAw.CLIP_SAVE_FAILURE, t);
                }
                throw e;
            }
        })({
            clipMethod: t,
            request: n,
            timeline: T,
            decision: g,
            isCandidate: N,
            gameSessionId: O?.id,
            decisionSignals: L,
        });
        if (N && null != O && !O.isActive) {
            (r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), eR(e));
            return;
        }
        (r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: O }),
            y(t) &&
                (await (async function (e) {
                    let { storageLocation: t } = C.Ay.getSettings();
                    for (let n of (function (e, t, n) {
                        let i = e.reduce((e, t) => e + (t.sizeBytes ?? 0), 0);
                        if (i <= t) return [];
                        let r = e
                                .filter((e) => e.id !== n && !0 !== e.pending)
                                .sort((e, t) => e.createdAt - t.createdAt),
                            a = [];
                        for (let e of r) {
                            if (i <= t) break;
                            (a.push(e), (i -= e.sizeBytes ?? 0));
                        }
                        return a;
                    })(
                        [...Object.values(C.Ay.getClips()), ...C.Ay.getClipCandidates()].filter((e) =>
                            b(e.filepath, t),
                        ),
                        R.CN,
                        e,
                    ))
                        try {
                            await eR(n, !1);
                        } catch (e) {
                            R.GU.error("Failed to evict transient clip", e);
                        }
                })(e.id)),
            (async function (e) {
                if (
                    !v.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
                    e.isCandidate ||
                    null == e.applicationId ||
                    e.decision?.signal.type !== R.Gy.MANUAL
                )
                    return;
                let t = p.A.getChannelId(),
                    n = h.A.getChannel(t);
                if (
                    null != n &&
                    (function (e) {
                        if (!d.A.getActivities(!1).some((e) => e.type === s.$.PLAYING)) return !1;
                        if (e.isPrivate()) return e.recipients.every((e) => o.A.isFriend(e));
                        if (e.isGuildVocalOrThread()) {
                            let t = e.guild_id;
                            return !l.JG.getSetting().includes(t);
                        }
                        return !1;
                    })(n)
                )
                    try {
                        let {
                            body: { remote_clip_id: t },
                        } = await i.Bo.post({
                            url: J.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                            body: { application_id: e.applicationId },
                            rejectWithError: !0,
                        });
                        (null != t && (await eu(e.id, { remoteClipId: t }, !1)),
                            m.default.track(J.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                                ...S.lc(),
                                remote_clip_id: t,
                                clip_trigger_type: e.decision?.signal.type,
                                num_clip_participants: e.users.length,
                                application_id: e.applicationId,
                            }));
                    } catch (e) {
                        R.GU.warn("Failed to send remote clip trigger", e);
                    }
            })(e));
    } catch (a) {
        let { errorAt: e, errorMessage: n } = eo(a),
            i =
                e === R.RC.BUFFER_WARMING_UP
                    ? R.RC.BUFFER_WARMING_UP
                    : e === R.RC.BRIDGE_SHUTDOWN
                      ? R.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (R.GU.warn(`Clip save no-op (${i}): ${n ?? i}`),
              Y?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (R.GU.error("Clip Failed to Save", a),
              Y?.stop(),
              N || (0, _.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout($);
    }
    R.GU.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - K)}ms`);
}
async function ec(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    if (!(0, Q.t_)()) return void R.GU.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = C.Ay.getActiveClipsSession(),
        s = I.Ay.getMediaEngine(),
        l = (0, q.A)(e, R.nQ.SCREENSHOT),
        o = C.Ay.getSettings().storageLocation,
        d = `${(0, P.A)(l.applicationName.substring(0, 20))}_${l.id}.jpeg`,
        u = a.A.fileManager.join(o, d);
    if (
        (null != l.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === l.applicationId)) &&
            R.GU.log("Matched application ID to running game:", l.applicationId, n.name),
        null == n &&
            null != l.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === l.applicationName)) &&
            R.GU.log("Matched application name to running game:", l.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && R.GU.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        ((t = parseInt(n.windowHandle, 10)), R.GU.log("Using window handle for full resolution screenshot:", t));
    else {
        (R.GU.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5));
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: R.Fv.STREAMER, clipMethod: e ?? "manual" });
    let E = (0, _.Ak)("clip_save", 0.5),
        A = performance.now();
    try {
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(o, !1));
        let e = { ...l, filepath: u, length: 0, thumbnail: "" },
            n = w(e),
            d = (await s.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        ((e.thumbnail = `data:image/jpeg;base64,${d}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: i }),
            R.GU.info(`Screenshot save took ${Math.round(performance.now() - A)}ms`),
            R.GU.log("Successfully saved screenshot to:", u));
    } catch (t) {
        throw (
            R.GU.error("Failed to save screenshot:", t),
            E?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...eo(t) }),
            t
        );
    }
}
async function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = C.Ay.getClipById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await V(s))) return;
    let l = a.A?.clips?.updateClipMetadata;
    if (s.type === R.nQ.CLIP && null != l) await l(s.filepath, w(s));
    else {
        if (!(0, N.ri)(I.Ay)) return;
        await I.Ay.getMediaEngine().updateClipMetadata(s.filepath, w(s));
    }
    (n && S.PQ(i, t), r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s }));
}
async function e_(e) {
    await eu(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eE() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function eA() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ef(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eh(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await V({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
let eI = !1;
async function ep(e) {
    if (!(0, T.xl)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await eh(e);
    if (!eI) {
        eI = !0;
        let t = [];
        if (y("auto")) {
            let n = D(e);
            t = (await eh(n)).filter((e) => e.isCandidate);
        }
        t.forEach((e) =>
            eO(e).catch((t) => {
                R.GU.error(`Failed to cleanup old clip candidate ${e.id}`, t);
            }),
        );
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function em(e, t, n, i) {
    let s = e,
        l = { isCandidate: !1, audioEvents: i },
        { storageLocation: o } = C.Ay.getSettings();
    if (L() && b(e.filepath, o))
        try {
            let t = await (async function (e) {
                let { storageLocation: t } = C.Ay.getSettings(),
                    n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
                return (await a.A.clips.moveClip(e.filepath, n), n);
            })(e);
            s = { ...e, filepath: t };
        } catch (e) {
            return (R.GU.error("Clip promotion failed: failed to move the clip out of transient storage", e), null);
        }
    await r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...s, ...l }, session: n });
    try {
        await eu(s.id, { ...l, filepath: s.filepath });
    } catch (e) {
        R.GU.error("Clip promotion failed: failed to update clip metadata", e);
    }
    return (
        m.default.track(J.HAw.CLIP_PROMOTED, { ...S.lc(), ...S.Zy(e), clip_uuid: e.id, clip_auto_clip_score: t }),
        { ...s, ...l }
    );
}
function eT(e) {
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_START", clip: e });
}
async function eg(e) {
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_ERROR", clipId: e.id });
    try {
        let t = await a.A.clips.deleteClip(e.filepath);
        null == t ||
            t.ok ||
            "ENOENT" === t.reason ||
            R.GU.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath} (${t.reason})`);
    } catch (t) {
        R.GU.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath}`, t);
    }
}
function eS(e) {
    let t = { ...e };
    return (delete t.pending, t);
}
function eN(e) {
    return w(eS(e));
}
async function eC(e, t) {
    let n = eS(e);
    try {
        ((n.thumbnail = await (0, z.m)(a.A.clips.getClipProtocolURLFromPath(n.filepath), 0)),
            await a.A.clips.updateClipMetadata(n.filepath, w(n)));
    } catch (e) {
        R.GU.warn("finalizeMontageClip: failed to generate montage thumbnail:", e);
    }
    r.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_DONE", clip: n, session: t });
}
async function eO(e) {
    if (!(0, T.xl)() || a.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await a.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((g.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return (R.GU.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1);
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function eR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, T.xl)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eO(e))
        ? (r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
          t &&
              m.default.track(J.HAw.CLIP_DELETED, {
                  ...S.lc(),
                  ...S.Zy(e),
                  application_name: e.applicationName,
                  application_id: e.applicationId,
                  clip_uuid: e.id,
              }))
        : r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
}
async function eL(e, t) {
    let { analyticsLocations: i, watermark: r, isTemporaryEdit: s = !1, skipComposition: l = !1 } = t;
    if (!(0, N.ri)(I.Ay)) throw Error("Clips export is not supported on this platform");
    let o = performance.now();
    try {
        ey([e.id]);
        let t = I.Ay.getMediaEngine();
        if (!(0, Q.t_)() && (await (0, Q.so)(), !(0, Q.t_)())) throw Error("discord_clips module failed to load");
        let { filepath: i, ...o } = e;
        s || (await eu(e.id, o));
        let d = l ? null : (0, R._1)(e.editMetadata?.crop),
            c = e.editMetadata?.start ?? 0,
            u = e.editMetadata?.end ?? e.length / 1e3,
            _ = null;
        if (r && !l && e.type === R.nQ.CLIP)
            try {
                _ = await (0, Z.e8)();
            } catch (e) {
                throw (R.GU.error("Failed to load the clip share watermark; aborting export", e), e);
            }
        let E = {
                ...(e.editMetadata ?? {
                    start: 0,
                    end: e.length / 1e3,
                    applicationAudio: !0,
                    voiceAudio: !0,
                    soundboardAudio: !0,
                }),
                crop: d ?? void 0,
                tracks: l
                    ? []
                    : await (async function (e, t, i) {
                          let {
                              trimStartSec: r = 0,
                              trimEndSec: a = 1 / 0,
                              watermark: s = null,
                          } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (null != s && !Number.isFinite(a))
                              throw Error("buildExportOverlayTracks: a watermark requires a finite trimEndSec");
                          let l = K(e, r, a);
                          if (0 === l.length && null == s) return [];
                          let { width: o, height: d } = await (async function (e, t) {
                              let { width: n, height: i } = await (0, Y.N)(e);
                              if (t?.width != null && t?.height != null)
                                  return { width: Math.round(n * t.width), height: Math.round(i * t.height) };
                              if (t?.aspectRatio != null) {
                                  var r;
                                  let e;
                                  return (
                                      (e = Math.min(n, i * (r = t.aspectRatio))),
                                      { width: Math.round(e), height: Math.round(e / r) }
                                  );
                              }
                              return { width: n, height: i };
                          })(i, t);
                          if (null != s) {
                              let e,
                                  t,
                                  n,
                                  i,
                                  c =
                                      ((e = d > o),
                                      (t = Math.min(o, d)),
                                      (n = (e ? R.Qh : R.Yj) * t),
                                      (i = (e ? R.DX : R.b1) * t),
                                      {
                                          id: R.I4,
                                          type: R.Me.IMAGE,
                                          startSec: r,
                                          endSec: a,
                                          data: {
                                              ...s,
                                              position: { x: (i + n / 2) / o, y: 0.75 },
                                              widthFraction: n / o,
                                              rotationDeg: 0,
                                              shadow: "small",
                                              shadowColor: R.xv,
                                          },
                                      });
                              l.push(...K([c], r, a));
                          }
                          let c = await (async function (e, t, i) {
                              if (0 === e.length) return [];
                              let r = getComputedStyle(document.body).fontFamily,
                                  a = "" === r ? "sans-serif" : r,
                                  s = new Worker(new URL("/assets/" + n.u(922518), n.b));
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
                          })(
                              l.map((e) => {
                                  let { track: t } = e;
                                  return t;
                              }),
                              o,
                              d,
                          );
                          return [
                              {
                                  segments: l.map((e, t) => {
                                      let { track: n, start_ms: i, end_ms: r } = e,
                                          { pngBase64: a, x: s, y: l, width: o, height: d } = c[t];
                                      return {
                                          start_ms: i,
                                          end_ms: r,
                                          x: s,
                                          y: l,
                                          width: o,
                                          height: d,
                                          opacity: n.id === R.I4 ? 0.65 : 1,
                                          kind: "bitmap",
                                          png: a,
                                      };
                                  }),
                              },
                          ];
                      })(e.tracks ?? [], d, a.A.clips.getClipProtocolURLFromPath(e.filepath), {
                          trimStartSec: c,
                          trimEndSec: u,
                          watermark: _,
                      }),
            },
            A = await a.A.app.getPath("temp"),
            f = a.A.fileManager.join(A, "Discord Clips"),
            h = `${crypto.randomUUID()}-${Date.now()}.mp4`,
            p = a.A.fileManager.join(f, h),
            { filepath: m, formattedForUpload: g } = await t.exportClipToFile(e.filepath, p, E);
        try {
            let t = await a.A.clips.loadClip(m),
                i = new Blob([t.data], { type: "video/mp4" });
            if (e.type === R.nQ.SCREENSHOT || g) return i;
            return (async function (e) {
                let t,
                    { default: i } = await n.e(25777).then(n.t.bind(n, 293384, 19)),
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
            })(i);
        } finally {
            await (async function (e) {
                if ((0, T.xl)())
                    try {
                        await a.A.clips.deleteClip(e);
                    } catch {}
            })(m);
        }
    } finally {
        ey(null);
        let t = performance.now();
        m.default.track(J.HAw.CLIP_EXPORTED, { ...S.lc(), ...S.Zy(e), location_stack: i, export_duration: t - o });
    }
}
function ey(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eD(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function eb(e) {
    r.h.dispatch({ type: "CLIPS_AUTOCLIPS_STAFF_BYPASS_OVERRIDE", disabled: e });
}
function ev(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = y("auto");
    if ((r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }), !i && y("auto"))) {
        let { storageLocation: e } = C.Ay.getSettings();
        ep(e).catch((e) => {
            R.GU.error("Failed to reload clips after enabling autoclipping", e);
        });
    }
    t && m.default.track(J.HAw.CLIPS_SETTINGS_UPDATED, { ...S.lc(), autoclips_enabled: e, location: n });
}
function eP(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eM(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eU() {
    eP({ type: R.Gy.MANUAL });
}
