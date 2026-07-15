"use strict";
n.d(t, {
    TE: () => eE,
    yT: () => ec,
    h$: () => er,
    YP: () => J,
    Uh: () => et,
    Fb: () => eT,
    VO: () => eN,
    uL: () => eD,
    GS: () => ei,
    fd: () => Q,
    Ts: () => ev,
    e6: () => eL,
    H1: () => eR,
    l0: () => eM,
    yd: () => ed,
    YV: () => eA,
    Su: () => eI,
    yO: () => X,
    $N: () => eb,
    YK: () => ef,
    eQ: () => Z,
    PW: () => ey,
    w7: () => eP,
    K7: () => eg,
    HU: () => en,
    Mt: () => ee,
    oH: () => eS,
    Yy: () => eu,
    Vp: () => eh,
    XK: () => e_,
    mN: () => eO,
}),
    n(321073);
var i = n(636537),
    r = n(228366),
    a = n(77729),
    s = n(885386),
    l = n(994500),
    o = n(461213),
    d = n(652215),
    c = n(952818),
    u = n(311043),
    _ = n(400492),
    E = n(616356),
    A = n(280450),
    h = n(734057),
    I = n(186295),
    f = n(763827),
    p = n(174459),
    T = n(723702),
    m = n(38405),
    g = n(53677),
    S = n(888916),
    N = n(486925),
    C = n(915725),
    R = n(372684),
    O = n(974293),
    L = n(458977),
    D = n(439818),
    y = n(572164);
let v = ["filepath", "sizeBytes"];
function b(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of v) delete t[e];
            return t;
        })(e),
    );
}
var M = n(132500),
    P = n(935208),
    U = n(696016);
function w(e) {
    e?.type === "yelling" && (e.type = R.Gy.SHOUTING);
}
let G = [
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
        (e) => ({ ...e, version: 5, id: (0, M.A)(), createdAt: P.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return w(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => w(e?.signal)), t;
        },
    ],
    x = null;
async function k(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != x
                ? x
                : (x = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(U.kd).optional(),
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
                              .allow(R.nQ.CLIP, R.nQ.SCREENSHOT, R.nQ.VOICE_CLIP)
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
            G.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var F = n(284009),
    V = n.n(F);
async function B(e) {
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
    V()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        o = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), o], { type: e.type });
}
var H = n(956050),
    j = n(47167),
    W = n(587895),
    Y = n(287809),
    K = n(977997),
    $ = n(375708);
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: a,
            sourceApplicationId: s,
            activity: _,
            isVoiceOnly: I,
        } = (function () {
            let e,
                t = E.A.getStreamerActiveStreamMetadata(),
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
                _ = f.A.getChannelId(),
                A = null == s && null != _;
            if (A) {
                let e = null != _ ? h.A.getChannel(_) : null;
                s = null != e ? (0, j.m1)(e, Y.default, l.A) : "";
            }
            let I =
                    ((e = new Set()),
                    null == a ||
                        (e.add(a),
                        u.A.getGame(a)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        W.A.getApplication(a)?.linkedGames?.forEach((t) => {
                            e.add(t.id), u.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                p = o.A.getUnfilteredActivities(!0).filter(function (e) {
                    return e.type === d.$pd.PLAYING && null != e.application_id && I.has(e.application_id);
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
                    p.find(function (e) {
                        return (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details);
                    }) ?? p[0],
                ),
                isVoiceOnly: A,
            };
        })(),
        p = f.A.getChannelId(),
        T = f.A.getGuildId(),
        m = new Set([A.default.getId()]);
    null != p && (m = m.union(new Set(Object.keys(K.A.getVoiceStatesForChannel(p))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && m.add(t.userId);
        });
    let g = I && t === R.nQ.CLIP ? R.nQ.VOICE_CLIP : t;
    return {
        id: (0, M.A)(),
        createdAt: Date.now(),
        version: U.kd,
        applicationName: a ?? $.intl.string($.t.qtSJxb),
        applicationId: s,
        activity: _,
        users: Array.from(m),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: T ?? void 0,
        channelId: p ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === R.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: g,
    };
}
var q = n(201538);
async function Z(e) {
    let { allowVoiceRecording: t } = e;
    await s.Q$.updateSetting(t),
        p.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
            ...g.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function X(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        a = !t && !(0, S.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(a && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            p.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...g.lc("updateClipsEnabled"),
                clips_enabled: t,
                guild_id: n,
                ...(a && { decoupled_clips_enabled: !1 }),
            });
}
function Q(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            p.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...g.lc("updateDecoupledClipsEnabled"),
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function J(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ee(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        p.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { ...g.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function et(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function en(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eT(e).catch((e) => {
            U.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function ei(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function er(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function ea(e) {
    if (
        !L.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== R.Gy.MANUAL
    )
        return;
    let t = f.A.getChannelId(),
        n = h.A.getChannel(t);
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
            null != t && (await eu(e.id, { remoteClipId: t }, !1)),
                p.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...g.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            U.nx.warn("Failed to send remote clip trigger", e);
        }
}
function es(e) {
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
async function el(e) {
    let { clipMethod: t, request: n, timeline: i, decision: r, isCandidate: s, gameSessionId: l } = e,
        o = C.Ay.getSettings(),
        c = (0, N.C5)(t),
        u = c ? (0, N.xT)(o.storageLocation) : o.storageLocation,
        _ = z(t, R.nQ.CLIP, i, r, l);
    _.isCandidate = s ?? !1;
    let h = `${(0, D.A)(_.applicationName.substring(0, 20))}_${_.id}.mp4`,
        f = a.A.fileManager.join(u, h),
        T = I.Ay.getMediaEngine(),
        m = JSON.stringify(_),
        S = g.TX(_),
        { startMs: O, endMs: L, trimStartMs: y, trimEndMs: v } = n;
    try {
        let e;
        null != a.A.fileManager.createDirectoryIfNotExists && (await a.A.fileManager.createDirectoryIfNotExists(u, c));
        let {
                duration: t,
                clipStats: n,
                thumbnail: i,
                metadata: r,
            } = await T.saveClipEx({
                filepath: f,
                metadata: m,
                thumbnailMs: y,
                startMs: O,
                endMs: L,
                trimStartMs: y,
                trimEndMs: v,
                userId: null != E.A.getCurrentUserActiveStream() ? A.default.getId() : void 0,
            }),
            s = g.kY(S, n);
        if (
            ((s.clip_save_time_ms = n.clipSaveTimeMs),
            (s.clip_size_bytes = n.clipSizeBytes),
            null != n.viewerDecodeFps &&
                ((s.decode_fps_during_clip = n.viewerDecodeFps),
                (s.encode_fps_during_clip = n.viewerEncodeFps),
                (s.target_fps = null),
                (s.remote_clip_id = _.remoteClipId)),
            (s.clip_signal_types = g.Gb(_)),
            null != r)
        )
            e = JSON.parse(r);
        else {
            if (((_.length = t), void 0 !== i)) _.thumbnail = i;
            else {
                let e = "";
                try {
                    e = await (0, H.m)(a.A.clips.getClipProtocolURLFromPath(f), 0);
                } catch (e) {
                    U.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (_.thumbnail = e), await T.updateClipMetadata(f, JSON.stringify(_));
            }
            e = _;
        }
        return (
            p.default.track(d.HAw.CLIP_SAVED, s),
            U.nx.info(`Clip save succeeded with ${t}ms and thumbnail ${e.thumbnail.length} bytes thumbnail.`),
            { ...e, filepath: f, sizeBytes: n.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (p.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...g.lc("doSaveClip"), ...S }), e);
        if (e.errorAt !== R.RC.BUFFER_WARMING_UP && e.errorAt !== R.RC.BRIDGE_SHUTDOWN) {
            let t = g.kY(S, e);
            (t.error_at = e.errorAt), (t.error_message = e.errorMessage), p.default.track(d.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function eo(e) {
    let { storageLocation: t } = C.Ay.getSettings(),
        n = [...Object.values(C.Ay.getClips()), ...C.Ay.getClipCandidates()].filter((e) => (0, N.Fk)(e.filepath, t));
    for (let t of (0, N.SF)(n, U.CN, e))
        try {
            await eS(t, !1);
        } catch (e) {
            U.nx.error("Failed to evict transient clip", e);
        }
}
async function ed(e) {
    let { clipMethod: t, request: n, timeline: i, decision: a, isCandidate: s, gameSessionId: l } = e;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MAX_CONCURRENT_SAVES });
    if ((0, O.qi)("saveClip") && !(0, q.t_)()) {
        U.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.MODULE_NOT_LOADED });
        return;
    }
    let o = (0, y.TD)(),
        d = E.A.getCurrentUserActiveStream(),
        u = null != d,
        A = (0, y.Ao)(),
        h = c.Ay.getVisibleGame()?.windowHandle != null,
        f = I.Ay.hasClipsSource(),
        p = A && h && f;
    if (!(o && u) && !p)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: R.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: o,
                hasActiveStream: u,
                decoupledClipsEnabled: A,
                hasVisibleGameWindow: h,
                hasClipsSource: f,
            },
        });
    if ((0, O.qi)("saveClip") && I.Ay.isClipsRecordingReadySignalSupported() && !I.Ay.isClipsRecordingReady()) {
        U.nx.warn("Save clip ignored: clips recorder not ready (still starting up or idle shut down)"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: R.RC.RECORDING_NOT_READY });
        return;
    }
    let T = (() => {
        if (null != d) return U.Fv.STREAMER;
        if (p) return U.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: T, clipMethod: t, signal: a?.signal });
    let m = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        g = performance.now(),
        S = setTimeout(() => {
            U.nx.warn(`Clip save still pending after ${U.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: U.ut });
        }, U.ut);
    try {
        if ("auto" === t && !s && !(0, N.rX)()) {
            let e = C.Ay.getSettings().maxAutoClips,
                t = C.Ay.getClips(),
                n = Object.values(t).filter((e) => !0 === e.isTemporary),
                i = n.length - e + 1;
            if (i > 0) {
                let t = n.sort((e, t) => e.createdAt - t.createdAt).slice(0, i);
                for (let n of (U.nx.info(`Deleting ${t.length} temporary clips to stay within limit of ${e}`), t))
                    try {
                        await eS(n, !1);
                    } catch (e) {
                        U.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await el({ clipMethod: t, request: n, timeline: i, decision: a, isCandidate: s, gameSessionId: l });
        if (s && null != e.gameSessionId && C.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eS(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), (0, N.C5)(t) && (await eo(e.id)), ea(e);
    } catch (a) {
        let { errorAt: e, errorMessage: n } = es(a),
            i =
                e === R.RC.BUFFER_WARMING_UP
                    ? R.RC.BUFFER_WARMING_UP
                    : e === R.RC.BRIDGE_SHUTDOWN
                      ? R.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (U.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              m?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (U.nx.error("Clip Failed to Save", a),
              m?.stop(),
              s || (0, _.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(S);
    }
    U.nx.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - g)}ms`);
}
async function ec(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, O.qi)("saveScreenshotFromClip") && !(0, q.t_)())
        return void U.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = I.Ay.getMediaEngine(),
        s = z(e, R.nQ.SCREENSHOT),
        l = C.Ay.getSettings().storageLocation,
        o = `${(0, D.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        d = a.A.fileManager.join(l, o);
    if (
        (null != s.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            U.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            U.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && U.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), U.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        U.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: U.Fv.STREAMER, clipMethod: e ?? "manual" });
    let u = (0, _.Ak)("clip_save", 0.5),
        E = performance.now();
    try {
        let e = { ...s, filepath: d, length: 0, thumbnail: "" },
            n = b(e),
            a = (await i.saveScreenshot(d, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${a}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            U.nx.info(`Screenshot save took ${Math.round(performance.now() - E)}ms`),
            U.nx.log("Successfully saved screenshot to:", d);
    } catch (e) {
        throw (
            (U.nx.error("Failed to save screenshot:", e),
            u?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...es(e) }),
            e)
        );
    }
}
async function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = C.Ay.getClipById(e) ?? C.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    if (null == (await k(s))) return;
    let l = a.A.clips.updateClipMetadata;
    (0, O.qi)("updateClipMetadata") && s.type === R.nQ.CLIP && null != l
        ? await l(s.filepath, b(s))
        : await I.Ay.getMediaEngine().updateClipMetadata(s.filepath, b(s)),
        n && p.default.track(d.HAw.CLIP_EDITED, { clip_uuid: s.id, ...g.lc("updateClipMetadata") }),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s });
}
async function e_(e) {
    await eu(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eE() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function eA() {
    let e = C.Ay.getCurrentClipsSession(),
        t = e?.id;
    if (null == t) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP", gameId: e?.gameId ?? null });
    let n = C.Ay.getHistoricalClipsSessionById(t);
    null != n &&
        p.default.track(d.HAw.CLIPS_SESSION_ENDED, {
            ...g.lc("stopClipsSession"),
            current_clip_session_id: n.id,
            application_id: n.gameId,
            application_name: u.A.getGame(n.gameId)?.name,
            manual_clips_saved: n.manualClipsSaved,
            candidate_clips_saved: n.candidateClipsSaved,
            candidate_clips_promoted: n.candidateClipsPromoted,
        });
}
function eh(e, t) {
    let n = C.Ay.getCurrentClipsSession()?.gameId ?? null;
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t, previousGameId: n }),
        p.default.track(d.HAw.CLIPS_SESSION_STARTED, {
            ...g.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: u.A.getGame(t)?.name,
        });
}
function eI() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ef(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ep(e) {
    let t = await a.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await k({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
async function eT(e) {
    if (!(0, T.isDesktop)() || a.A.clips?.loadClipsDirectory == null) return;
    let t = await ep(e);
    if ((0, N.rX)()) {
        let n = (0, N.xT)(e);
        await a.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await ep(n)));
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function em(e) {
    let { storageLocation: t } = C.Ay.getSettings(),
        n = a.A.fileManager.join(t, a.A.fileManager.basename(e.filepath));
    return await a.A.clips.moveClip(e.filepath, n), n;
}
async function eg(e, t, n) {
    let i = e,
        a = { isCandidate: !1, audioEvents: n },
        { storageLocation: s } = C.Ay.getSettings();
    if ((0, N.rX)() && (0, N.Fk)(e.filepath, s))
        try {
            let t = await em(e);
            i = { ...e, filepath: t };
        } catch (e) {
            U.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...i, ...a } });
    try {
        await eu(i.id, { ...a, filepath: i.filepath });
    } catch (e) {
        U.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    p.default.track(d.HAw.CLIP_PROMOTED, {
        ...g.lc("promoteClipCandidate"),
        ...g.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eS(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, T.isDesktop)() || a.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e,
        s = (await a.A.clips.deleteClip(n)) ?? { ok: !0 };
    if (!s.ok) {
        let { reason: e, recoverable: t } = s;
        if ((m.A.captureException(Error(`deleteClip failed (${e})`)), !t)) {
            U.nx.warn(`deleteClip: dropping unrecoverable clip record ${i} (${e})`),
                r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
            return;
        }
        throw Error(`deleteClip failed for ${i} (${e})`);
    }
    r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            p.default.track(d.HAw.CLIP_DELETED, {
                ...g.lc("deleteClip"),
                ...g.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function eN(e) {
    try {
        eR([e.id]);
        let t = I.Ay.getMediaEngine();
        if (
            (0, O.qi)("exportClip") &&
            ((0, q.UW)({ forceV3Capability: !0 }), !(0, q.t_)()) &&
            (await (0, q.so)({ forceV3Capability: !0 }), !(0, q.t_)())
        )
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await eu(e.id, i);
        let r = {
            ...(e.editMetadata ?? {
                start: 0,
                end: e.length / 1e3,
                applicationAudio: !0,
                voiceAudio: !0,
                soundboardAudio: !0,
            }),
            crop: (0, R._1)(e.editMetadata?.crop) ?? void 0,
        };
        if (t.hasExportClipToFile() && (0, O.qi)("exportClip")) {
            let n = await a.A.app.getPath("temp"),
                i = a.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                l = a.A.fileManager.join(i, s),
                o = await t.exportClipToFile(e.filepath, l, r);
            try {
                let t = await a.A.clips.loadClip(o),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === R.nQ.SCREENSHOT) return n;
                return B(n);
            } finally {
                await eC(o);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === R.nQ.SCREENSHOT) return s;
        return B(s);
    } finally {
        eR(null);
    }
}
async function eC(e) {
    if ((0, T.isDesktop)())
        try {
            await a.A.clips.deleteClip(e);
        } catch {}
}
function eR(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eO(e) {
    r.h.dispatch({ type: "CLIPS_SET_AUTO_STASH_ENABLED", enabled: e });
}
function eL(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eD(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }),
        t &&
            p.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...g.lc("updateEnableAutoclipping"),
                autoclips_enabled: e,
            });
}
function ey(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...C.Ay.getSettings().clipSignals, ...e } },
    });
}
function ev(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eb(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eM() {
    ev({ type: R.Gy.MANUAL });
}
async function eP(e) {
    await eu(e, { isTemporary: !1 }, !0);
}
