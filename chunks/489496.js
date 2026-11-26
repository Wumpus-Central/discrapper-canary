(n.d(t, {
    ef: () => eL,
    TE: () => em,
    Su: () => eg,
    Ts: () => eB,
    l0: () => eH,
    oH: () => eM,
    $N: () => eV,
    VO: () => ew,
    t9: () => ey,
    EM: () => ev,
    _o: () => eN,
    Zw: () => es,
    Fb: () => eO,
    K7: () => eR,
    YK: () => eT,
    yd: () => ef,
    yT: () => eh,
    h5: () => eb,
    mN: () => ex,
    jE: () => ek,
    H1: () => eG,
    XK: () => ep,
    eQ: () => er,
    Yy: () => eI,
    yO: () => ea,
    h$: () => eE,
    GS: () => e_,
    HU: () => eu,
    YP: () => el,
    uL: () => eF,
    Mt: () => eo,
    Uh: () => ed,
}),
    n(321073));
var i = n(517846),
    r = n(620632),
    a = n(73153),
    s = n(77729),
    l = n(350835),
    o = n(253932),
    d = n(994500),
    c = n(894768),
    u = n(644727),
    _ = n(97770),
    E = n(886705),
    A = n(669700),
    f = n(400492),
    h = n(616356),
    I = n(46653),
    p = n(131319),
    m = n(734057),
    g = n(988468),
    T = n(495867),
    S = n(129230),
    N = n(723702),
    C = n(856383),
    O = n(53677),
    R = n(734066),
    L = n(457538),
    y = n(419490),
    D = n(341923),
    b = n(696016);
function v() {
    return (0, N.xl)() && s.A.features.supports("clips_storage_size");
}
function P(e) {
    return "auto" === e && v() && (0, D.s)() && y.Ay.getEnableAutoclipping();
}
function M(e) {
    return s.A.fileManager.join(e, b.SC);
}
function U(e, t) {
    return s.A.fileManager.dirname(e) === M(t);
}
var w = n(458977),
    G = n(572164);
let x = ["filepath", "sizeBytes"];
function k(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of x) delete t[e];
            return t;
        })(e),
    );
}
var F = n(115560),
    B = n(661191);
function V(e) {
    e?.type === "yelling" && (e.type = b.Gy.SHOUTING);
}
let H = [
        (e) => {
            let { gameName: t, ...n } = e;
            return { ...n, version: 1, applicationName: t, applicationId: void 0 };
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? b.nQ.SCREENSHOT : b.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, F.A)(), createdAt: B.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return (V(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => V(e?.signal)), t);
        },
    ],
    j = null;
async function W(e) {
    let t = (await n.e(734188).then(n.t.bind(n, 88137, 23))).default,
        i = (function (e) {
            let t, n, i;
            return null != j
                ? j
                : (j = e
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
                                  speakerVolumes: e.object().pattern(/^\d+$/, e.number().strict().min(0).max(200)),
                                  mutedSpeakerIds: e.array().items(e.string()),
                                  applicationVolume: e.number().strict().min(0).max(200),
                                  soundboardVolume: e.number().strict().min(0).max(200),
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
                              .allow(b.nQ.CLIP, b.nQ.SCREENSHOT, b.nQ.VOICE_CLIP)
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
                                          type: e.string().valid(b.Me.TEXT).required(),
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
                                                              .valid(...Object.values(b.UY))
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
                                          type: e.string().valid(b.Me.IMAGE).required(),
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
                                                  shadow: e.string().valid(...Object.values(b.Hz)),
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
        (delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            null != e.decision && delete e.decision.emotionHistory);
        let n = e?.editMetadata;
        for (let e of (n?.speakerVolumes != null && (n.speakerVolumes = (0, L.ud)(n.speakerVolumes)),
        ["applicationVolume", "soundboardVolume"]))
            n?.[e] != null && ("number" == typeof n[e] ? (n[e] = (0, L.pX)(n[e])) : delete n[e]);
        return (t.assert(e, i), null == e.version && (e.version = 0), H.slice(e.version).reduce((e, t) => t(e), e));
    } catch (e) {
        return null;
    }
}
var Y = n(395378),
    K = n(538724),
    $ = n(31048),
    X = n(997649),
    z = n(649223);
function q(e, t, n) {
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
var Q = n(284009),
    J = n.n(Q),
    Z = n(956050),
    ee = n(160330),
    et = n(160759),
    en = n(253116),
    ei = n(652215);
async function er(e) {
    let { allowVoiceRecording: t, analyticsLocation: n } = e;
    (await o.Q$.updateSetting(t),
        S.default.track(ei.HAw.CLIPS_SETTINGS_UPDATED, { location: n, ...O.lc(), allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
}
async function ea(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1, analyticsLocation: r, skipOptOutSurvey: s = !1 } = e,
        l = y.Ay.getState().clipsSettings.clipsEnabled;
    (await a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsEnabled: t } }),
        i && S.default.track(ei.HAw.CLIPS_SETTINGS_UPDATED, { location: r, ...O.lc(), clips_enabled: t, guild_id: n }),
        !l || t || s || es());
}
function es() {
    A.Ay.fireSurveyAction(i.w.CLIPS_OPT_OUT);
}
function el(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function eo(e) {
    (a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        S.default.track(ei.HAw.CLIPS_SETTINGS_UPDATED, { ...O.lc(), reminders_enabled: e }));
}
function ed(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
async function ec(e, t) {
    try {
        await eO(e);
    } catch (e) {
        b.GU.error(t, e);
    }
}
function eu(e) {
    (a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ec(e, "Failed to load clips directory after storage location change"));
}
function e_(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function eE(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
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
async function ef(e) {
    let { clipMethod: t, request: n, timeline: i, decision: A, isCandidate: N, session: C, decisionSignals: R } = e;
    if (y.Ay.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: b.RC.MAX_CONCURRENT_SAVES });
    if (!(0, et.t_)()) {
        (b.GU.warn("Save clip ignored: discord_clips module not loaded yet"),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: b.RC.MODULE_NOT_LOADED }));
        return;
    }
    let L = (0, G.T)(),
        D = h.A.getCurrentUserActiveStream(),
        v = null != D,
        x = u.Ay.getVisibleGame()?.windowHandle != null,
        k = g.Ay.hasClipsSource(),
        F = L && v,
        B = L && x && k;
    if (!F && !B)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: b.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: { clipsEnabled: L, hasActiveStream: v, hasVisibleGameWindow: x, hasClipsSource: k },
        });
    if (g.Ay.isClipsRecordingReadySignalSupported() && !g.Ay.isClipsRecordingReady()) {
        (b.GU.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: b.RC.RECORDING_NOT_READY }));
        return;
    }
    let V = (() => {
        if (null != D) return b.Fv.STREAMER;
        if (B) return b.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    a.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: V, clipMethod: t, signal: A?.signal });
    let H = "manual" === t ? (0, f.Ak)("clip_save", 0.5) : null,
        j = performance.now(),
        W = setTimeout(() => {
            (b.GU.warn(`Clip save still pending after ${b.ut}ms \u{2014} native callback may have stalled`),
                a.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: b.ut }));
        }, b.ut);
    try {
        let e = await (async function (e) {
            let t,
                n,
                {
                    clipMethod: i,
                    request: r,
                    timeline: a,
                    decision: l,
                    isCandidate: o,
                    gameSessionId: d,
                    decisionSignals: c,
                } = e,
                u = y.Ay.getSettings(),
                A = P(i),
                f = A ? M(u.storageLocation) : u.storageLocation,
                m = (0, ee.A)(i, b.nQ.CLIP, a, l, d),
                T = null != m.syncTimestamp ? m.syncTimestamp - m.createdAt : void 0,
                N = (0, $.p)(T);
            m.isCandidate = o ?? !1;
            let C = `${(0, _.A)(m.applicationName.substring(0, 20))}_${m.id}.mp4`,
                R = s.A.fileManager.join(f, C),
                L = g.Ay.getMediaEngine(),
                D = JSON.stringify(m),
                v = O.TX(m),
                U =
                    ((t = g.Ay.getNoiseCancellation()),
                    (n = g.Ay.getSystemMicrophoneMode()),
                    {
                        noise_cancellation: t,
                        effective_noise_cancellation: (0, E.A)(t, n),
                        noise_suppression: g.Ay.getNoiseSuppression(),
                        bypass_system_input_processing: g.Ay.getBypassSystemInputProcessing(),
                        system_microphone_mode: n ?? null,
                        audio_bitrate: p.A.bitrate,
                    }),
                { startMs: w, endMs: G, trimStartMs: x, trimEndMs: k } = r;
            try {
                let e, t;
                null != s.A.fileManager.createDirectoryIfNotExists &&
                    (await s.A.fileManager.createDirectoryIfNotExists(f, A));
                let {
                    duration: n,
                    clipStats: i,
                    thumbnail: a,
                    metadata: l,
                } = await L.saveClipEx({
                    filepath: R,
                    metadata: D,
                    thumbnailMs: x,
                    startMs: w,
                    endMs: G,
                    trimStartMs: x,
                    trimEndMs: k,
                    userId: null != h.A.getCurrentUserActiveStream() ? I.default.getId() : void 0,
                });
                if (o && null != c && y.Ay.getEnableAutoclipping())
                    try {
                        e = (function (e, t, n, i, r) {
                            let a = e.applicationId,
                                s = 1e3 * Math.floor(t.startMs / 1e3),
                                l = Math.floor((t.endMs - s) / 1e3) + 1,
                                o = s + (l - 1) * 1e3,
                                d = n.audioModelDataPerUser[I.default.getId()];
                            function c() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return (0, Y.lq)((0, Y.Tv)(e, s, o), s, l).map((e) => e.value);
                            }
                            let u = (0, Y.Q4)(a, n.gameEventData),
                                _ = (0, X.p)(n.gameEventData, s, o).filter((e) => Number.isFinite(e.timestamp_ms + r));
                            return {
                                game_events_supported: (0, Y.GC)(a),
                                created_at_ms: e.createdAt,
                                window_start_ms: s + r,
                                window_end_ms: o + r,
                                trim_start_ms: Math.round(t.trimStartMs + r),
                                trim_end_ms: Math.round(t.trimEndMs + r),
                                in_game: u?.getInGameState?.(s, o) ?? [],
                                game_event_ts_ms: _.map((e) => Math.round(e.timestamp_ms + r)),
                                game_event_weight: _.map((e) => e.score ?? 0),
                                game_event_name: _.map((e) => e.eventName ?? ""),
                                ...i,
                                laughter: c(d?.laughterData),
                                shouting: c(d?.shoutingData),
                                rms: c(d?.rmsData),
                            };
                        })(m, r, c, U, N);
                    } catch (e) {
                        b.GU.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
                    }
                let d = O.u2(v, i, m, e);
                if (null != l) t = JSON.parse(l);
                else {
                    if (((m.length = n), void 0 !== a)) m.thumbnail = a;
                    else {
                        let e = "";
                        try {
                            e = await (0, Z.m)(s.A.clips.getClipProtocolURLFromPath(R), 0);
                        } catch (e) {
                            b.GU.warn("Failed to generate clip thumbnail:", e);
                        }
                        ((m.thumbnail = e), await L.updateClipMetadata(R, JSON.stringify(m)));
                    }
                    t = m;
                }
                return (
                    S.default.track(ei.HAw.CLIP_SAVED, d),
                    b.GU.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
                    { ...t, filepath: R, sizeBytes: i.clipSizeBytes }
                );
            } catch (e) {
                if (!("errorMessage" in e)) throw (S.default.track(ei.HAw.CLIP_SAVE_FAILURE, { ...O.lc(), ...v }), e);
                if (e.errorAt !== b.RC.BUFFER_WARMING_UP && e.errorAt !== b.RC.BRIDGE_SHUTDOWN) {
                    let t = O.WR(v, e);
                    S.default.track(ei.HAw.CLIP_SAVE_FAILURE, t);
                }
                throw e;
            }
        })({
            clipMethod: t,
            request: n,
            timeline: i,
            decision: A,
            isCandidate: N,
            gameSessionId: C?.id,
            decisionSignals: R,
        });
        if (N && null != C && !C.isActive) {
            (a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), eM(e));
            return;
        }
        (a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: C }),
            P(t) &&
                (await (async function (e) {
                    let { storageLocation: t } = y.Ay.getSettings();
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
                        [...Object.values(y.Ay.getClips()), ...y.Ay.getClipCandidates()].filter((e) =>
                            U(e.filepath, t),
                        ),
                        b.CN,
                        e,
                    ))
                        try {
                            await eM(n, !1);
                        } catch (e) {
                            b.GU.error("Failed to evict transient clip", e);
                        }
                })(e.id)),
            (async function (e) {
                if (
                    !w.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
                    e.isCandidate ||
                    null == e.applicationId ||
                    e.decision?.signal.type !== b.Gy.MANUAL
                )
                    return;
                let t = T.A.getChannelId(),
                    n = m.A.getChannel(t);
                if (
                    null != n &&
                    (function (e) {
                        if (!c.A.getActivities(!1).some((e) => e.type === l.$.PLAYING)) return !1;
                        if (e.isPrivate()) return e.recipients.every((e) => d.A.isFriend(e));
                        if (e.isGuildVocalOrThread()) {
                            let t = e.guild_id;
                            return !o.JG.getSetting().includes(t);
                        }
                        return !1;
                    })(n)
                )
                    try {
                        let {
                            body: { remote_clip_id: t },
                        } = await r.Bo.post({
                            url: ei.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                            body: { application_id: e.applicationId },
                            rejectWithError: !0,
                        });
                        (null != t && (await eI(e.id, { remoteClipId: t }, !1)),
                            S.default.track(ei.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                                ...O.lc(),
                                remote_clip_id: t,
                                clip_trigger_type: e.decision?.signal.type,
                                num_clip_participants: e.users.length,
                                application_id: e.applicationId,
                            }));
                    } catch (e) {
                        b.GU.warn("Failed to send remote clip trigger", e);
                    }
            })(e));
    } catch (r) {
        let { errorAt: e, errorMessage: n } = eA(r),
            i =
                e === b.RC.BUFFER_WARMING_UP
                    ? b.RC.BUFFER_WARMING_UP
                    : e === b.RC.BRIDGE_SHUTDOWN
                      ? b.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (b.GU.warn(`Clip save no-op (${i}): ${n ?? i}`),
              H?.stop(),
              a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (b.GU.error("Clip Failed to Save", r),
              H?.stop(),
              N || (0, f.Ak)("clip_error", 0.5),
              a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(W);
    }
    b.GU.info(`${y.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - j)}ms`);
}
async function eh(e) {
    let t, n;
    if (y.Ay.getIsAtMaxSaveClipOperations()) return;
    if (!(0, et.t_)()) return void b.GU.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = y.Ay.getActiveClipsSession(),
        r = g.Ay.getMediaEngine(),
        l = (0, ee.A)(e, b.nQ.SCREENSHOT),
        o = y.Ay.getSettings().storageLocation,
        d = `${(0, _.A)(l.applicationName.substring(0, 20))}_${l.id}.jpeg`,
        c = s.A.fileManager.join(o, d);
    if (
        (null != l.applicationId &&
            null != (n = u.Ay.getRunningGames().find((e) => e.id === l.applicationId)) &&
            b.GU.log("Matched application ID to running game:", l.applicationId, n.name),
        null == n &&
            null != l.applicationName &&
            null != (n = u.Ay.getRunningGames().find((e) => e.name === l.applicationName)) &&
            b.GU.log("Matched application name to running game:", l.applicationName),
        null == n && null != (n = u.Ay.getVisibleGame()) && b.GU.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        ((t = parseInt(n.windowHandle, 10)), b.GU.log("Using window handle for full resolution screenshot:", t));
    else {
        (b.GU.error("Failed to save screenshot: No window handle available"), (0, f.Ak)("clip_error", 0.5));
        return;
    }
    a.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: b.Fv.STREAMER, clipMethod: e ?? "manual" });
    let E = (0, f.Ak)("clip_save", 0.5),
        A = performance.now();
    try {
        null != s.A.fileManager.createDirectoryIfNotExists && (await s.A.fileManager.createDirectoryIfNotExists(o, !1));
        let e = { ...l, filepath: c, length: 0, thumbnail: "" },
            n = k(e),
            d = (await r.saveScreenshot(c, n, 90, void 0, t)).toString("base64");
        ((e.thumbnail = `data:image/jpeg;base64,${d}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e, session: i }),
            b.GU.info(`Screenshot save took ${Math.round(performance.now() - A)}ms`),
            b.GU.log("Successfully saved screenshot to:", c));
    } catch (t) {
        throw (
            b.GU.error("Failed to save screenshot:", t),
            E?.stop(),
            (0, f.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...eA(t) }),
            t
        );
    }
}
async function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = y.Ay.getClipById(e);
    if (null == i) return;
    let r = { ...i, ...t };
    if (null == (await W(r))) return;
    let l = s.A?.clips?.updateClipMetadata;
    if (r.type === b.nQ.CLIP && null != l) await l(r.filepath, k(r));
    else {
        if (!(0, R.ri)(g.Ay)) return;
        await g.Ay.getMediaEngine().updateClipMetadata(r.filepath, k(r));
    }
    (n && O.PQ(i, t), a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function ep(e) {
    await eI(e.id, { isFavorite: !e.isFavorite }, !0);
}
function em() {
    a.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function eg() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eT(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eS(e) {
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await W({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
function eN() {
    Object.keys(y.Ay.getClips()).length > 0 && A.Ay.fireSurveyAction(i.w.POPULATED_CLIP_GALLERY_CLOSED);
}
let eC = !1;
async function eO(e) {
    if (!(0, N.xl)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await eS(e);
    if (!eC) {
        eC = !0;
        let t = [];
        if (P("auto")) {
            let n = M(e);
            t = (await eS(n)).filter((e) => e.isCandidate);
        }
        t.forEach(async (e) => {
            try {
                await eP(e);
            } catch (t) {
                b.GU.error(`Failed to cleanup old clip candidate ${e.id}`, t);
            }
        });
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eR(e, t, n, i) {
    let r = e,
        l = { isCandidate: !1, audioEvents: i },
        { storageLocation: o } = y.Ay.getSettings();
    if (v() && U(e.filepath, o))
        try {
            let t = await (async function (e) {
                let { storageLocation: t } = y.Ay.getSettings(),
                    n = s.A.fileManager.join(t, s.A.fileManager.basename(e.filepath));
                return (await s.A.clips.moveClip(e.filepath, n), n);
            })(e);
            r = { ...e, filepath: t };
        } catch (e) {
            return (b.GU.error("Clip promotion failed: failed to move the clip out of transient storage", e), null);
        }
    await a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...r, ...l }, session: n });
    try {
        await eI(r.id, { ...l, filepath: r.filepath });
    } catch (e) {
        b.GU.error("Clip promotion failed: failed to update clip metadata", e);
    }
    return (
        S.default.track(ei.HAw.CLIP_PROMOTED, { ...O.lc(), ...O.Zy(e), clip_uuid: e.id, clip_auto_clip_score: t }),
        { ...r, ...l }
    );
}
function eL(e) {
    a.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_START", clip: e });
}
async function ey(e) {
    a.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_ERROR", clipId: e.id });
    try {
        let t = await s.A.clips.deleteClip(e.filepath);
        null == t ||
            t.ok ||
            "ENOENT" === t.reason ||
            b.GU.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath} (${t.reason})`);
    } catch (t) {
        b.GU.warn(`failMontagePlaceholder: could not delete orphaned montage file ${e.filepath}`, t);
    }
}
function eD(e) {
    let t = { ...e };
    return (delete t.pending, t);
}
function eb(e) {
    return k(eD(e));
}
async function ev(e, t) {
    let n = eD(e);
    try {
        ((n.thumbnail = await (0, Z.m)(s.A.clips.getClipProtocolURLFromPath(n.filepath), 0)),
            await s.A.clips.updateClipMetadata(n.filepath, k(n)));
    } catch (e) {
        b.GU.warn("finalizeMontageClip: failed to generate montage thumbnail:", e);
    }
    a.h.dispatch({ type: "CLIPS_MONTAGE_RENDER_DONE", clip: n, session: t });
}
async function eP(e) {
    if (!(0, N.xl)() || s.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await s.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((C.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return (b.GU.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1);
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function eM(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, N.xl)() || s.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eP(e))
        ? (a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
          t &&
              S.default.track(ei.HAw.CLIP_DELETED, {
                  ...O.lc(),
                  ...O.Zy(e),
                  application_name: e.applicationName,
                  application_id: e.applicationId,
                  clip_uuid: e.id,
              }))
        : a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
}
let eU = Promise.resolve();
async function ew() {
    let e;
    for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
    let a = eU;
    ((eU = new Promise((t) => {
        e = t;
    })),
        await a);
    try {
        return await (async function (e, t) {
            let { analyticsLocations: i, watermark: r, isTemporaryEdit: a = !1, skipComposition: l = !1 } = t;
            if (!(0, R.ri)(g.Ay)) throw Error("Clips export is not supported on this platform");
            let o = performance.now();
            try {
                eG([e.id]);
                let t = g.Ay.getMediaEngine();
                if (!(0, et.t_)() && (await (0, et.so)(), !(0, et.t_)()))
                    throw Error("discord_clips module failed to load");
                let { filepath: i, ...o } = e;
                a || (await eI(e.id, o));
                let d = l ? null : (0, b._1)(e.editMetadata?.crop),
                    c = e.editMetadata?.start ?? 0,
                    u = e.editMetadata?.end ?? e.length / 1e3,
                    _ = null;
                if (r && !l && e.type === b.nQ.CLIP)
                    try {
                        _ = await (0, en.e8)();
                    } catch (e) {
                        throw (b.GU.error("Failed to load the clip share watermark; aborting export", e), e);
                    }
                let E = {
                        ...(e.editMetadata ?? {
                            start: 0,
                            end: e.length / 1e3,
                            applicationAudio: !0,
                            voiceAudio: !0,
                            soundboardAudio: !0,
                            mutedSpeakerIds: [],
                        }),
                        trackVolumes: (0, L.hT)(e.editMetadata),
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
                                  let l = q(e, r, a);
                                  if (0 === l.length && null == s) return [];
                                  let { width: o, height: d } = await (async function (e, t) {
                                      let { width: n, height: i } = await (0, z.N)(e);
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
                                              (n = (e ? b.Qh : b.Yj) * t),
                                              (i = (e ? b.DX : b.b1) * t),
                                              {
                                                  id: b.I4,
                                                  type: b.Me.IMAGE,
                                                  startSec: r,
                                                  endSec: a,
                                                  data: {
                                                      ...s,
                                                      position: { x: (i + n / 2) / o, y: 0.75 },
                                                      widthFraction: n / o,
                                                      rotationDeg: 0,
                                                      shadow: "small",
                                                      shadowColor: b.xv,
                                                  },
                                              });
                                      l.push(...q([c], r, a));
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
                                                  s.postMessage({
                                                      tracks: e,
                                                      canvasWidth: t,
                                                      canvasHeight: i,
                                                      fontFamily: a,
                                                  }));
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
                                                  opacity: n.id === b.I4 ? 0.65 : 1,
                                                  kind: "bitmap",
                                                  png: a,
                                              };
                                          }),
                                      },
                                  ];
                              })(e.tracks ?? [], d, s.A.clips.getClipProtocolURLFromPath(e.filepath), {
                                  trimStartSec: c,
                                  trimEndSec: u,
                                  watermark: _,
                              }),
                    },
                    A = await s.A.app.getPath("temp"),
                    f = s.A.fileManager.join(A, "Discord Clips"),
                    h = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                    I = s.A.fileManager.join(f, h),
                    { filepath: p, formattedForUpload: m } = await t.exportClipToFile(e.filepath, I, E);
                try {
                    let t = await s.A.clips.loadClip(p),
                        i = new Blob([t.data], { type: "video/mp4" });
                    if (e.type === b.nQ.SCREENSHOT || m) return i;
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
                        J()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
                        r.boxes))
                            "uuid" === e.type && (t = e.start);
                        let l = e.slice(0, t, e.type),
                            o = e.slice(t + 4, t + 8 + 16, e.type);
                        return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
                    })(i);
                } finally {
                    await (async function (e) {
                        if ((0, N.xl)())
                            try {
                                await s.A.clips.deleteClip(e);
                            } catch {}
                    })(p);
                }
            } finally {
                eG(null);
                let t = performance.now();
                S.default.track(ei.HAw.CLIP_EXPORTED, {
                    ...O.lc(),
                    ...O.Zy(e),
                    location_stack: i,
                    export_duration: t - o,
                });
            }
        })(...i);
    } finally {
        e();
    }
}
function eG(e) {
    (0, K.T)(e);
}
function ex(e) {
    a.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function ek(e) {
    a.h.dispatch({ type: "CLIPS_AUTOCLIPS_STAFF_BYPASS_OVERRIDE", disabled: e });
}
function eF(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = P("auto");
    if ((a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }), !i && P("auto"))) {
        let { storageLocation: e } = y.Ay.getSettings();
        ec(e, "Failed to reload clips after enabling autoclipping");
    }
    t && S.default.track(ei.HAw.CLIPS_SETTINGS_UPDATED, { ...O.lc(), autoclips_enabled: e, location: n });
}
function eB(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eV(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eH() {
    eB({ type: b.Gy.MANUAL });
}
