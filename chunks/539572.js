"use strict";
n.d(t, {
    TE: () => eN,
    Su: () => eR,
    yT: () => em,
    $N: () => eB,
    YK: () => eL,
    Yy: () => eg,
    eQ: () => el,
    yO: () => eo,
    h$: () => eA,
    YP: () => ed,
    Fb: () => ev,
    K7: () => eM,
    Uh: () => eu,
    HU: () => e_,
    VO: () => ew,
    uL: () => eF,
    Mt: () => ec,
    GS: () => eE,
    Ts: () => eV,
    oH: () => eU,
    l0: () => eH,
    yd: () => eT,
    H1: () => ex,
    Vp: () => eO,
    YV: () => eC,
    XK: () => eS,
    mN: () => ek,
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
    p = n(749983),
    T = n(763827),
    m = n(174459),
    g = n(723702),
    S = n(38405),
    N = n(53677),
    C = n(915725),
    O = n(341923),
    R = n(696016);
function L() {
    return (0, g.isDesktop)() && a.A.features.supports("clips_storage_size");
}
function D(e) {
    return "auto" === e && L() && (0, O.s)() && C.Ay.getEnableAutoclipping();
}
function y(e) {
    return a.A.fileManager.join(e, R.SC);
}
function v(e, t) {
    return a.A.fileManager.dirname(e) === y(t);
}
var b = n(974293),
    M = n(458977),
    P = n(439818),
    U = n(572164);
let w = ["filepath", "sizeBytes"];
function G(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of w) delete t[e];
            return t;
        })(e),
    );
}
var x = n(132500),
    k = n(935208);
function F(e) {
    e?.type === "yelling" && (e.type = R.Gy.SHOUTING);
}
let V = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? R.nQ.SCREENSHOT : R.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, x.A)(), createdAt: k.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return F(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => F(e?.signal)), t;
        },
    ],
    B = null;
async function H(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i = (function (e) {
            let t;
            return null != B
                ? B
                : (B = e
                      .object({
                          id: e.string().required(),
                          version: e.number().positive().integer().min(0).max(R.kd).optional(),
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
            V.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
var j = n(796617),
    W = n(31048),
    Y = n(997649),
    K = n(367974);
async function $(e) {
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
        null != t && clearTimeout(t), (0, K.A)(n);
    }
}
async function z(e, t, i) {
    if (0 === e.length) return [];
    let r = getComputedStyle(document.body).fontFamily,
        a = "" === r ? "sans-serif" : r,
        s = new Worker(new URL("/assets/" + n.u("83400"), n.b));
    try {
        return await new Promise((n, r) => {
            s.addEventListener(
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
                s.postMessage({ tracks: e, canvasWidth: t, canvasHeight: i, fontFamily: a });
        });
    } finally {
        s.terminate();
    }
}
async function q(e, t) {
    let { width: n, height: i } = await $(e);
    if (t?.width != null && t?.height != null)
        return { width: Math.round(n * t.width), height: Math.round(i * t.height) };
    if (t?.aspectRatio != null) {
        var r;
        let e;
        return { width: Math.round((e = Math.min(n, i * (r = t.aspectRatio)))), height: Math.round(e / r) };
    }
    return { width: n, height: i };
}
async function Z(e, t, n) {
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
    let { width: s, height: l } = await q(n, t),
        o = await z(
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
n(323874), n(14289), n(35956), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var X = n(284009),
    Q = n.n(X);
async function J(e) {
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
    Q()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
var ee = n(956050),
    et = n(47167),
    en = n(587895),
    ei = n(287809),
    er = n(375708);
function ea() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.nQ.CLIP,
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
                s = null != e ? (0, et.m1)(e, ei.default, l.A) : "";
            }
            let h =
                    ((e = new Set()),
                    null == a ||
                        (e.add(a),
                        u.A.getGame(a)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        en.A.getApplication(a)?.linkedGames?.forEach((t) => {
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
    let g = E && t === R.nQ.CLIP ? R.nQ.VOICE_CLIP : t;
    return {
        id: (0, x.A)(),
        createdAt: Date.now(),
        version: R.kd,
        applicationName: a ?? er.intl.string(er.t.qtSJxb),
        applicationId: s,
        activity: _,
        users: Array.from(m),
        clipMethod: e,
        guildId: p ?? void 0,
        channelId: I ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === R.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: g,
    };
}
var es = n(201538);
async function el(e) {
    let { allowVoiceRecording: t } = e;
    await s.Q$.updateSetting(t),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
            ...N.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function eo(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1, analyticsLocation: a } = e;
    await r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsEnabled: t, decoupledClipsEnabled: t } }),
        i &&
            m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                location: a,
                ...N.lc("updateClipsEnabled"),
                clips_enabled: t,
                guild_id: n,
                decoupled_clips_enabled: t,
            });
}
function ed(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ec(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...N.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function eu(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function e_(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ev(e).catch((e) => {
            R.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function eE(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function eA(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function eh(e) {
    if (
        !M.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== R.Gy.MANUAL
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
            null != t && (await eg(e.id, { remoteClipId: t }, !1)),
                m.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...N.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            R.nx.warn("Failed to send remote clip trigger", e);
        }
}
function eI(e) {
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
        E = C.Ay.getSettings(),
        f = D(i),
        T = f ? y(E.storageLocation) : E.storageLocation,
        g = ea(i, R.nQ.CLIP, s, l, c);
    g.isCandidate = o ?? !1;
    let S = `${(0, P.A)(g.applicationName.substring(0, 20))}_${g.id}.mp4`,
        O = a.A.fileManager.join(T, S),
        L = p.Ay.getMediaEngine(),
        v = JSON.stringify(g),
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
        { startMs: U, endMs: w, trimStartMs: G, trimEndMs: x } = r;
    try {
        let e, t;
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(T, f));
        let {
            duration: n,
            clipStats: i,
            thumbnail: s,
            metadata: l,
        } = await L.saveClipEx({
            filepath: O,
            metadata: v,
            thumbnailMs: G,
            startMs: U,
            endMs: w,
            trimStartMs: G,
            trimEndMs: x,
            userId: null != A.A.getCurrentUserActiveStream() ? h.default.getId() : void 0,
        });
        if (o && null != u && C.Ay.getEnableAutoclipping())
            try {
                e = (function (e, t, n, i) {
                    let r = e.applicationId,
                        a = (0, W.p)(),
                        s = Math.floor(t.startMs / j.pn) * j.pn,
                        l = Math.floor((t.endMs - s) / j.pn) + 1,
                        o = s + (l - 1) * j.pn,
                        d = n.audioModelDataPerUser[h.default.getId()];
                    function c() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return (0, j.lq)((0, j.Tv)(e, s, o), s, l).map((e) => e.value);
                    }
                    let u = (0, j.Q4)(r, n.gameEventData),
                        _ = (0, Y.p)(n.gameEventData, s, o);
                    return {
                        game_events_supported: (0, j.GC)(r),
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
                R.nx.warn("Failed to build candidate clip analytics; emitting clip_saved without them:", e);
            }
        let c = N.u2(b, i, g, e);
        if (null != l) t = JSON.parse(l);
        else {
            if (((g.length = n), void 0 !== s)) g.thumbnail = s;
            else {
                let e = "";
                try {
                    e = await (0, ee.m)(a.A.clips.getClipProtocolURLFromPath(O), 0);
                } catch (e) {
                    R.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (g.thumbnail = e), await L.updateClipMetadata(O, JSON.stringify(g));
            }
            t = g;
        }
        return (
            m.default.track(d.HAw.CLIP_SAVED, c),
            R.nx.info(`Clip save succeeded with ${n}ms and thumbnail ${t.thumbnail.length} bytes thumbnail.`),
            { ...t, filepath: O, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (m.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...N.lc("doSaveClip"), ...b }), e);
        if (e.errorAt !== R.RC.BUFFER_WARMING_UP && e.errorAt !== R.RC.BRIDGE_SHUTDOWN) {
            let t = N.WR(b, e);
            m.default.track(d.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function ep(e) {
    let { storageLocation: t } = C.Ay.getSettings();
    for (let n of (function (e, t, n) {
        let i = e.reduce((e, t) => e + (t.sizeBytes ?? 0), 0);
        if (i <= t) return [];
        let r = e.filter((e) => e.id !== n && !0 !== e.pending).sort((e, t) => e.createdAt - t.createdAt),
            a = [];
        for (let e of r) {
            if (i <= t) break;
            a.push(e), (i -= e.sizeBytes ?? 0);
        }
        return a;
    })(
        [...Object.values(C.Ay.getClips()), ...C.Ay.getClipCandidates()].filter((e) => v(e.filepath, t)),
        R.CN,
        e,
    ))
        try {
            await eU(n, !1);
        } catch (e) {
            R.nx.error("Failed to evict transient clip", e);
        }
}
async function eT(e) {
    let {
        clipMethod: t,
        request: n,
        timeline: i,
        decision: a,
        isCandidate: s,
        gameSessionId: l,
        decisionSignals: o,
    } = e;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MAX_CONCURRENT_SAVES });
    if ((0, b.qi)("saveClip") && !(0, es.t_)()) {
        R.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MODULE_NOT_LOADED });
        return;
    }
    let d = (0, U.TD)(),
        u = A.A.getCurrentUserActiveStream(),
        _ = null != u,
        h = (0, U.Ao)(),
        I = c.Ay.getVisibleGame()?.windowHandle != null,
        f = p.Ay.hasClipsSource(),
        T = h && I && f;
    if (!(d && _) && !T)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: R.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: d,
                hasActiveStream: _,
                decoupledClipsEnabled: h,
                hasVisibleGameWindow: I,
                hasClipsSource: f,
            },
        });
    if ((0, b.qi)("saveClip") && p.Ay.isClipsRecordingReadySignalSupported() && !p.Ay.isClipsRecordingReady()) {
        R.nx.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.RECORDING_NOT_READY });
        return;
    }
    let m = (() => {
        if (null != u) return R.Fv.STREAMER;
        if (T) return R.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: m, clipMethod: t, signal: a?.signal });
    let g = "manual" === t ? (0, E.Ak)("clip_save", 0.5) : null,
        S = performance.now(),
        N = setTimeout(() => {
            R.nx.warn(`Clip save still pending after ${R.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: R.ut });
        }, R.ut);
    try {
        let e = await ef({
            clipMethod: t,
            request: n,
            timeline: i,
            decision: a,
            isCandidate: s,
            gameSessionId: l,
            decisionSignals: o,
        });
        if (s && null != e.gameSessionId && C.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t }), eU(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), D(t) && (await ep(e.id)), eh(e);
    } catch (a) {
        let { errorAt: e, errorMessage: n } = eI(a),
            i =
                e === R.RC.BUFFER_WARMING_UP
                    ? R.RC.BUFFER_WARMING_UP
                    : e === R.RC.BRIDGE_SHUTDOWN
                      ? R.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (R.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              g?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (R.nx.error("Clip Failed to Save", a),
              g?.stop(),
              s || (0, E.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: t, errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(N);
    }
    R.nx.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - S)}ms`);
}
async function em(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, b.qi)("saveScreenshotFromClip") && !(0, es.t_)())
        return void R.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = p.Ay.getMediaEngine(),
        s = ea(e, R.nQ.SCREENSHOT),
        l = C.Ay.getSettings().storageLocation,
        o = `${(0, P.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        d = a.A.fileManager.join(l, o);
    if (
        (null != s.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            R.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            R.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && R.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), R.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        R.nx.error("Failed to save screenshot: No window handle available"), (0, E.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: R.Fv.STREAMER, clipMethod: e ?? "manual" });
    let u = (0, E.Ak)("clip_save", 0.5),
        _ = performance.now();
    try {
        let e = { ...s, filepath: d, length: 0, thumbnail: "" },
            n = G(e),
            a = (await i.saveScreenshot(d, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${a}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            R.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            R.nx.log("Successfully saved screenshot to:", d);
    } catch (t) {
        throw (
            (R.nx.error("Failed to save screenshot:", t),
            u?.stop(),
            (0, E.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", clipMethod: e ?? "manual", ...eI(t) }),
            t)
        );
    }
}
async function eg(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = C.Ay.getClipById(e) ?? C.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await H(s))) return;
    let l = a.A.clips.updateClipMetadata;
    (0, b.qi)("updateClipMetadata") && s.type === R.nQ.CLIP && null != l
        ? await l(s.filepath, G(s))
        : await p.Ay.getMediaEngine().updateClipMetadata(s.filepath, G(s)),
        n && N.PQ(i, t),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s });
}
async function eS(e) {
    await eg(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eN() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function eC() {
    let e = C.Ay.getCurrentClipsSession(),
        t = e?.id;
    if (null == t) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP", gameId: e?.gameId ?? null });
    let n = C.Ay.getHistoricalClipsSessionById(t);
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
function eO(e, t) {
    let n = C.Ay.getCurrentClipsSession()?.gameId ?? null;
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t, previousGameId: n }),
        m.default.track(d.HAw.CLIPS_SESSION_STARTED, {
            ...N.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: u.A.getGame(t)?.name,
        });
}
function eR() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eL(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eD(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await H({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
let ey = !1;
async function ev(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await eD(e);
    if (D("auto")) {
        let n = y(e);
        await a.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await eD(n)));
    }
    if (!ey) {
        ey = !0;
        let e = t;
        for (let n of ((t = []), e))
            n.isCandidate
                ? eP(n).catch((e) => {
                      R.nx.error(`Failed to cleanup old clip candidate ${n.id}`, e);
                  })
                : t.push(n);
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eb(e) {
    let { storageLocation: t } = C.Ay.getSettings(),
        n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
    return await a.A.clips.moveClip(e.filepath, n), n;
}
async function eM(e, t, n) {
    let i = e,
        a = { isCandidate: !1, audioEvents: n },
        { storageLocation: s } = C.Ay.getSettings();
    if (L() && v(e.filepath, s))
        try {
            let t = await eb(e);
            i = { ...e, filepath: t };
        } catch (e) {
            R.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...i, ...a } });
    try {
        await eg(i.id, { ...a, filepath: i.filepath });
    } catch (e) {
        R.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    m.default.track(d.HAw.CLIP_PROMOTED, {
        ...N.lc("promoteClipCandidate"),
        ...N.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eP(e) {
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return !1;
    let { filepath: t, id: n } = e,
        i = (await a.A.clips.deleteClip(t)) ?? { ok: !0 };
    if (!i.ok) {
        let { reason: e, recoverable: t } = i;
        if ((S.A.captureException(Error(`deleteClip failed (${e})`)), !t))
            return R.nx.warn(`deleteClip: dropping unrecoverable clip record ${n} (${e})`), !1;
        throw Error(`deleteClip failed for ${n} (${e})`);
    }
    return !0;
}
async function eU(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, g.isDesktop)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    (await eP(e))
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
async function ew(e, t) {
    let { analyticsLocations: n } = t,
        i = performance.now();
    try {
        ex([e.id]);
        let t = p.Ay.getMediaEngine();
        if (
            (0, b.qi)("exportClip") &&
            ((0, es.UW)({ forceV3Capability: !0 }), !(0, es.t_)()) &&
            (await (0, es.so)({ forceV3Capability: !0 }), !(0, es.t_)())
        )
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await eg(e.id, i);
        let r = (0, R._1)(e.editMetadata?.crop),
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
                tracks: await Z(e.tracks ?? [], r, a.A.clips.getClipProtocolURLFromPath(e.filepath), s, l),
            };
        if (t.hasExportClipToFile() && (0, b.qi)("exportClip")) {
            let n = await a.A.app.getPath("temp"),
                i = a.A.fileManager.join(n, "Discord Clips"),
                r = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                s = a.A.fileManager.join(i, r),
                { filepath: l, formattedForUpload: d } = await t.exportClipToFile(e.filepath, s, o);
            try {
                let t = await a.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === R.nQ.SCREENSHOT || d) return n;
                return J(n);
            } finally {
                await eG(l);
            }
        }
        let d = await t.exportClip(e.filepath, o);
        if (e.type === R.nQ.SCREENSHOT) return d;
        return J(d);
    } finally {
        ex(null);
        let t = performance.now();
        m.default.track(d.HAw.CLIP_EXPORTED, {
            ...N.lc("exportClip"),
            ...N.Zy(e),
            location_stack: n,
            export_duration: t - i,
        });
    }
}
async function eG(e) {
    if ((0, g.isDesktop)())
        try {
            await a.A.clips.deleteClip(e);
        } catch {}
}
function ex(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ek(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function eF(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = D("auto");
    if ((r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }), !i && D("auto"))) {
        let { storageLocation: e } = C.Ay.getSettings();
        ev(e).catch((e) => {
            R.nx.error("Failed to reload clips after enabling autoclipping", e);
        });
    }
    t &&
        m.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
            ...N.lc("updateEnableAutoclipping"),
            autoclips_enabled: e,
            location: n,
        });
}
function eV(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eB(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eH() {
    eV({ type: R.Gy.MANUAL });
}
