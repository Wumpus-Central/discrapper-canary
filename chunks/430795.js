"use strict";
n.d(t, {
    TE: () => eh,
    yT: () => ec,
    h$: () => er,
    YP: () => J,
    Uh: () => et,
    Fb: () => eA,
    VO: () => ey,
    uL: () => eR,
    GS: () => ei,
    fd: () => Q,
    Ts: () => eb,
    e6: () => ev,
    H1: () => eN,
    l0: () => eL,
    yd: () => eu,
    YV: () => ef,
    Su: () => eE,
    yO: () => X,
    $N: () => eD,
    YK: () => em,
    eQ: () => Z,
    PW: () => eO,
    w7: () => ew,
    K7: () => eT,
    HU: () => en,
    Mt: () => ee,
    oH: () => eS,
    Yy: () => ed,
    XK: () => e_,
    mN: () => ep,
}),
    n(321073);
var i = n(636537),
    r = n(228366),
    s = n(77729),
    a = n(885386),
    o = n(994500),
    l = n(461213),
    u = n(652215),
    c = n(952818),
    d = n(311043),
    _ = n(400492),
    h = n(616356),
    f = n(495544),
    p = n(734057),
    E = n(451409),
    m = n(763827),
    g = n(174459),
    A = n(723702),
    I = n(38405),
    T = n(53677),
    S = n(888916),
    y = n(486925),
    C = n(274372),
    N = n(372684),
    v = n(974293),
    R = n(458977),
    O = n(439818),
    b = n(572164);
let D = ["filepath", "sizeBytes"];
function L(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of D) delete t[e];
            return t;
        })(e),
    );
}
var w = n(835245),
    M = n(935208),
    P = n(696016);
function x(e) {
    e?.type === "yelling" && (e.type = N.Gy.SHOUTING);
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
            return { ...e, version: 4, timeline: [], type: t ? N.nQ.SCREENSHOT : N.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, w.A)(), createdAt: M.default.extractTimestamp(e.id) }),
        (e) => {
            let t = { ...e, version: 6 };
            return x(t?.decision?.signal), Array.isArray(t?.timeline) && t.timeline.forEach((e) => x(e?.signal)), t;
        },
    ],
    U = null;
async function G(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != U
                ? U
                : (U = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(P.kd).optional(),
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
                                  crop: t.object().keys({ preset: t.string().allow("original", "9:16", "16:9") }),
                              }),
                          createdAt: t
                              .number()
                              .when("version", { is: t.number().greater(4).required(), then: t.required() }),
                          type: t
                              .string()
                              .allow(N.nQ.CLIP, N.nQ.SCREENSHOT, N.nQ.VOICE_CLIP)
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
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var F = n(284009),
    V = n.n(F);
async function B(e) {
    let t,
        { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        r = i.createFile(!1),
        s = new Promise((e) => {
            r.onReady = e;
        }),
        a = await e.arrayBuffer();
    for (let e of ((a.fileStart = 0),
    r.appendBuffer(a),
    r.flush(),
    await s,
    V()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var j = n(956050),
    H = n(47167),
    Y = n(587895),
    W = n(287809),
    K = n(977997),
    $ = n(375708);
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: s,
            sourceApplicationId: a,
            activity: _,
            isVoiceOnly: E,
        } = (function () {
            let e,
                t = h.A.getStreamerActiveStreamMetadata(),
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
                s = t?.id ?? r?.id,
                a = t?.sourceName ?? r?.name,
                _ = m.A.getChannelId(),
                f = null == a && null != _;
            if (f) {
                let e = null != _ ? p.A.getChannel(_) : null;
                a = null != e ? (0, H.m1)(e, W.default, o.A) : "";
            }
            let E =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        d.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        Y.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), d.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                g = l.A.getUnfilteredActivities(!0).filter(function (e) {
                    return e.type === u.$pd.PLAYING && null != e.application_id && E.has(e.application_id);
                });
            return {
                sourceName: a,
                sourceApplicationId: s,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(
                    g.find(function (e) {
                        return (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details);
                    }) ?? g[0],
                ),
                isVoiceOnly: f,
            };
        })(),
        g = m.A.getChannelId(),
        A = m.A.getGuildId(),
        I = new Set([f.default.getId()]);
    null != g && (I = I.union(new Set(Object.keys(K.A.getVoiceStatesForChannel(g))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && I.add(t.userId);
        });
    let T = E && t === N.nQ.CLIP ? N.nQ.VOICE_CLIP : t;
    return {
        id: (0, w.A)(),
        createdAt: Date.now(),
        version: P.kd,
        applicationName: s ?? $.intl.string($.t.qtSJxb),
        applicationId: a,
        activity: _,
        users: Array.from(I),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: A ?? void 0,
        channelId: g ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === N.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: T,
    };
}
var q = n(201538);
async function Z(e) {
    let { allowVoiceRecording: t } = e;
    await a.Q$.updateSetting(t),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
            ...T.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function X(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        s = !t && !(0, S.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(s && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...T.lc("updateClipsEnabled"),
                clips_enabled: t,
                guild_id: n,
                ...(s && { decoupled_clips_enabled: !1 }),
            });
}
function Q(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...T.lc("updateDecoupledClipsEnabled"),
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function J(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function ee(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, { ...T.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function et(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function en(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        eA(e).catch((e) => {
            P.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function ei(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function er(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function es(e) {
    if (
        !R.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== N.Gy.MANUAL
    )
        return;
    let t = m.A.getChannelId(),
        n = p.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!l.A.getActivities(!1).some((e) => e.type === u.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => o.A.isFriend(e));
            if (e.isGuildVocalOrThread()) {
                let t = e.guild_id;
                return !a.JG.getSetting().includes(t);
            }
            return !1;
        })(n)
    )
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: u.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await ed(e.id, { remoteClipId: t }, !1)),
                g.default.track(u.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...T.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            P.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ea(e) {
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
async function eo(e) {
    let { clipMethod: t, request: n, timeline: i, decision: r, isCandidate: a, gameSessionId: o } = e,
        l = C.Ay.getSettings(),
        c = (0, y.C5)(t),
        d = c ? (0, y.xT)(l.storageLocation) : l.storageLocation,
        _ = z(t, N.nQ.CLIP, i, r, o);
    _.isCandidate = a ?? !1;
    let p = `${(0, O.A)(_.applicationName.substring(0, 20))}_${_.id}.mp4`,
        m = s.A.fileManager.join(d, p),
        A = E.Ay.getMediaEngine(),
        I = JSON.stringify(_),
        S = T.TX(_),
        v = n.trimStartMs;
    try {
        let e;
        null != s.A.fileManager.createDirectoryIfNotExists && (await s.A.fileManager.createDirectoryIfNotExists(d, c));
        let {
                duration: t,
                clipStats: i,
                thumbnail: r,
                metadata: a,
            } = await (null != h.A.getCurrentUserActiveStream()
                ? A.saveClipForUser({
                      userID: f.default.getId(),
                      filepath: m,
                      metadata: I,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })
                : A.saveClip({
                      filepath: m,
                      metadata: I,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })),
            o = T.kY(S, i);
        if (
            ((o.clip_save_time_ms = i.clipSaveTimeMs),
            (o.clip_size_bytes = i.clipSizeBytes),
            null != i.viewerDecodeFps &&
                ((o.decode_fps_during_clip = i.viewerDecodeFps),
                (o.encode_fps_during_clip = i.viewerEncodeFps),
                (o.target_fps = null),
                (o.remote_clip_id = _.remoteClipId)),
            (o.clip_signal_types = T.Gb(_)),
            null != a)
        )
            e = JSON.parse(a);
        else {
            if (((_.length = t), void 0 !== r)) _.thumbnail = r;
            else {
                let e = "";
                try {
                    e = await (0, j.m)(s.A.clips.getClipProtocolURLFromPath(m), 0);
                } catch (e) {
                    P.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (_.thumbnail = e), await A.updateClipMetadata(m, JSON.stringify(_));
            }
            e = _;
        }
        return (
            g.default.track(u.HAw.CLIP_SAVED, o),
            P.nx.info(`Clip save succeeded with ${t}ms and thumbnail ${e.thumbnail.length} bytes thumbnail.`),
            { ...e, filepath: m, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (g.default.track(u.HAw.CLIP_SAVE_FAILURE, { ...T.lc("doSaveClip"), ...S }), e);
        if (e.errorAt !== N.RC.BUFFER_WARMING_UP && e.errorAt !== N.RC.BRIDGE_SHUTDOWN) {
            let t = T.kY(S, e);
            (t.error_at = e.errorAt), (t.error_message = e.errorMessage), g.default.track(u.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function el(e) {
    let { storageLocation: t } = C.Ay.getSettings(),
        n = [...Object.values(C.Ay.getClips()), ...C.Ay.getClipCandidates()].filter((e) => (0, y.Fk)(e.filepath, t));
    for (let t of (0, y.SF)(n, P.CN, e))
        try {
            await eS(t, !1);
        } catch (e) {
            P.nx.error("Failed to evict transient clip", e);
        }
}
async function eu(e) {
    let { clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o } = e;
    if (C.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: N.RC.MAX_CONCURRENT_SAVES });
    if ((0, v.qi)("saveClip") && !(0, q.t_)()) {
        P.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: N.RC.MODULE_NOT_LOADED });
        return;
    }
    let l = (0, b.TD)(),
        u = h.A.getCurrentUserActiveStream(),
        d = null != u,
        f = (0, b.Ao)(),
        p = c.Ay.getVisibleGame()?.windowHandle != null,
        m = E.Ay.hasClipsSource(),
        g = f && p && m;
    if (!(l && d) && !g)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: N.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: l,
                hasActiveStream: d,
                decoupledClipsEnabled: f,
                hasVisibleGameWindow: p,
                hasClipsSource: m,
            },
        });
    let A = (() => {
        if (null != u) return P.Fv.STREAMER;
        if (g) return P.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: A, clipMethod: t, signal: s?.signal });
    let I = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        T = performance.now(),
        S = setTimeout(() => {
            P.nx.warn(`Clip save still pending after ${P.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: P.ut });
        }, P.ut);
    try {
        if ("auto" === t && !a && !(0, y.rX)()) {
            let e = C.Ay.getSettings().maxAutoClips,
                t = C.Ay.getClips(),
                n = Object.values(t).filter((e) => !0 === e.isTemporary),
                i = n.length - e + 1;
            if (i > 0) {
                let t = n.sort((e, t) => e.createdAt - t.createdAt).slice(0, i);
                for (let n of (P.nx.info(`Deleting ${t.length} temporary clips to stay within limit of ${e}`), t))
                    try {
                        await eS(n, !1);
                    } catch (e) {
                        P.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await eo({ clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o });
        if (a && null != e.gameSessionId && C.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eS(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), (0, y.C5)(t) && (await el(e.id)), es(e);
    } catch (s) {
        let { errorAt: e, errorMessage: n } = ea(s),
            i =
                e === N.RC.BUFFER_WARMING_UP
                    ? N.RC.BUFFER_WARMING_UP
                    : e === N.RC.BRIDGE_SHUTDOWN
                      ? N.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (P.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              I?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (P.nx.error("Clip Failed to Save", s),
              I?.stop(),
              a || (0, _.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(S);
    }
    P.nx.info(`${C.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - T)}ms`);
}
async function ec(e) {
    let t, n;
    if (C.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, v.qi)("saveScreenshotFromClip") && !(0, q.t_)())
        return void P.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = E.Ay.getMediaEngine(),
        a = z(e, N.nQ.SCREENSHOT),
        o = C.Ay.getSettings().storageLocation,
        l = `${(0, O.A)(a.applicationName.substring(0, 20))}_${a.id}.jpeg`,
        u = s.A.fileManager.join(o, l);
    if (
        (null != a.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === a.applicationId)) &&
            P.nx.log("Matched application ID to running game:", a.applicationId, n.name),
        null == n &&
            null != a.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === a.applicationName)) &&
            P.nx.log("Matched application name to running game:", a.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && P.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), P.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        P.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: P.Fv.STREAMER, clipMethod: e ?? "manual" });
    let d = (0, _.Ak)("clip_save", 0.5),
        h = performance.now();
    try {
        let e = { ...a, filepath: u, length: 0, thumbnail: "" },
            n = L(e),
            s = (await i.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${s}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            P.nx.info(`Screenshot save took ${Math.round(performance.now() - h)}ms`),
            P.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (P.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ea(e) }),
            e)
        );
    }
}
async function ed(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = C.Ay.getClipById(e) ?? C.Ay.getClipCandidateById(e);
    if (null == i) return;
    let a = { ...i, ...t };
    if (null == (await G(a))) return;
    let o = s.A.clips.updateClipMetadata;
    (0, v.qi)("updateClipMetadata") && a.type === N.nQ.CLIP && null != o
        ? await o(a.filepath, L(a))
        : await E.Ay.getMediaEngine().updateClipMetadata(a.filepath, L(a)),
        n && g.default.track(u.HAw.CLIP_EDITED, { clip_uuid: a.id, ...T.lc("updateClipMetadata") }),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: a });
}
async function e_(e) {
    await ed(e.id, { isFavorite: !e.isFavorite }, !0);
}
function eh() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function ef() {
    let e = C.Ay.getCurrentClipsSession()?.id;
    if (null == e) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP" });
    let t = C.Ay.getHistoricalClipsSessionById(e);
    null != t &&
        g.default.track(u.HAw.CLIPS_SESSION_ENDED, {
            ...T.lc("stopClipsSession"),
            current_clip_session_id: t.id,
            application_id: t.gameId,
            application_name: d.A.getGame(t.gameId)?.name,
            manual_clips_saved: t.manualClipsSaved,
            candidate_clips_saved: t.candidateClipsSaved,
            candidate_clips_promoted: t.candidateClipsPromoted,
        });
}
function ep(e, t) {
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t }),
        g.default.track(u.HAw.CLIPS_SESSION_STARTED, {
            ...T.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: d.A.getGame(t)?.name,
        });
}
function eE() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function em(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eg(e) {
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await G({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
async function eA(e) {
    if (!(0, A.isDesktop)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await eg(e);
    if ((0, y.rX)()) {
        let n = (0, y.xT)(e);
        await s.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await eg(n)));
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eI(e) {
    let { storageLocation: t } = C.Ay.getSettings(),
        n = s.A.fileManager.join(t, s.A.fileManager.basename(e.filepath));
    return await s.A.clips.moveClip(e.filepath, n), n;
}
async function eT(e, t, n) {
    let i = e,
        s = { isCandidate: !1, audioEvents: n },
        { storageLocation: a } = C.Ay.getSettings();
    if ((0, y.rX)() && (0, y.Fk)(e.filepath, a))
        try {
            let t = await eI(e);
            i = { ...e, filepath: t };
        } catch (e) {
            P.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...i, ...s } });
    try {
        await ed(i.id, { ...s, filepath: i.filepath });
    } catch (e) {
        P.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    g.default.track(u.HAw.CLIP_PROMOTED, {
        ...T.lc("promoteClipCandidate"),
        ...T.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eS(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, A.isDesktop)() || s.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e,
        a = (await s.A.clips.deleteClip(n)) ?? { ok: !0 };
    if (!a.ok) {
        let { reason: e, recoverable: t } = a;
        if ((I.A.captureException(Error(`deleteClip failed (${e})`)), !t)) {
            P.nx.warn(`deleteClip: dropping unrecoverable clip record ${i} (${e})`),
                r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n });
            return;
        }
        throw Error(`deleteClip failed for ${i} (${e})`);
    }
    r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            g.default.track(u.HAw.CLIP_DELETED, {
                ...T.lc("deleteClip"),
                ...T.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function ey(e) {
    try {
        eN([e.id]);
        let t = E.Ay.getMediaEngine();
        if (
            (0, v.qi)("exportClip") &&
            ((0, q.UW)({ forceV3Capability: !0 }), !(0, q.t_)()) &&
            (await (0, q.so)({ forceV3Capability: !0 }), !(0, q.t_)())
        )
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await ed(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, v.qi)("exportClip")) {
            let n = await s.A.app.getPath("temp"),
                i = s.A.fileManager.join(n, "Discord Clips"),
                a = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                o = s.A.fileManager.join(i, a),
                l = await t.exportClipToFile(e.filepath, o, r);
            try {
                let t = await s.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === N.nQ.SCREENSHOT) return n;
                return B(n);
            } finally {
                await eC(l);
            }
        }
        let a = await t.exportClip(e.filepath, r);
        if (e.type === N.nQ.SCREENSHOT) return a;
        return B(a);
    } finally {
        eN(null);
    }
}
async function eC(e) {
    if ((0, A.isDesktop)())
        try {
            await s.A.clips.deleteClip(e);
        } catch {}
}
function eN(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ev(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }),
        t &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...T.lc("updateEnableAutoclipping"),
                autoclips_enabled: e,
            });
}
function eO(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...C.Ay.getSettings().clipSignals, ...e } },
    });
}
function eb(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eD(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eL() {
    eb({ type: N.Gy.MANUAL });
}
async function ew(e) {
    await ed(e, { isTemporary: !1 }, !0);
}
