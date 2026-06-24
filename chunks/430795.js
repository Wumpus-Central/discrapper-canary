"use strict";
n.d(t, {
    TE: () => ed,
    yT: () => el,
    h$: () => en,
    YP: () => X,
    Uh: () => J,
    Fb: () => em,
    VO: () => eT,
    uL: () => eN,
    GS: () => et,
    fd: () => Z,
    Ts: () => eR,
    e6: () => eC,
    H1: () => ey,
    l0: () => eb,
    yd: () => eo,
    YV: () => e_,
    Su: () => ef,
    yO: () => q,
    $N: () => eO,
    YK: () => ep,
    eQ: () => z,
    PW: () => ev,
    w7: () => eD,
    K7: () => eA,
    HU: () => ee,
    Mt: () => Q,
    oH: () => eI,
    Yy: () => eu,
    XK: () => ec,
    mN: () => eh,
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
    E = n(472444),
    m = n(763827),
    g = n(174459),
    A = n(723702),
    I = n(53677),
    T = n(888916),
    S = n(486925),
    y = n(274372),
    C = n(372684),
    N = n(974293),
    v = n(458977),
    R = n(439818),
    O = n(572164);
let b = ["filepath", "sizeBytes"];
function D(e) {
    return JSON.stringify(
        (function (e) {
            let t = { ...e };
            for (let e of b) delete t[e];
            return t;
        })(e),
    );
}
var L = n(835245),
    w = n(935208),
    M = n(696016);
let P = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? C.nQ.SCREENSHOT : C.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, L.A)(), createdAt: w.default.extractTimestamp(e.id) }),
    ],
    x = null;
async function k(e) {
    var t;
    let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        r =
            null != x
                ? x
                : (x = i
                      .object({
                          id: i.string().required(),
                          version: i.number().positive().integer().min(0).max(M.kd).optional(),
                          name: i.string().when("version", { is: i.number().less(3), then: i.string().allow("") }),
                          gameName: i
                              .string()
                              .when("version", {
                                  is: i.number().greater(0).required(),
                                  then: i.forbidden(),
                                  otherwise: i.required(),
                              }),
                          applicationName: i
                              .string()
                              .when("version", {
                                  is: i.number().greater(0).required(),
                                  then: i.required().allow(""),
                                  otherwise: i.forbidden(),
                              }),
                          applicationId: i.string(),
                          activity: i
                              .object()
                              .keys({
                                  state: i.string(),
                                  details: i.string(),
                                  timestamps: i.object().keys({ start: i.number(), end: i.number() }),
                                  party: i.object().keys({ id: i.string(), size: i.array().items(i.number()) }),
                              }),
                          users: i.array().items(i.string()).required(),
                          filepath: i.string().required(),
                          length: i.number().required(),
                          thumbnail: i.string().required().allow(""),
                          editMetadata: i
                              .object()
                              .keys({
                                  start: i.number(),
                                  end: i.number(),
                                  applicationAudio: i.boolean(),
                                  voiceAudio: i.boolean(),
                                  soundboardAudio: i.boolean(),
                                  crop: i.object().keys({ preset: i.string().allow("original", "9:16", "16:9") }),
                              }),
                          createdAt: i
                              .number()
                              .when("version", { is: i.number().greater(4).required(), then: i.required() }),
                          type: i
                              .string()
                              .allow(C.nQ.CLIP, C.nQ.SCREENSHOT, C.nQ.VOICE_CLIP)
                              .when("version", {
                                  is: i.number().greater(3).required(),
                                  then: i.required(),
                                  otherwise: i.forbidden(),
                              }),
                          clipMethod: i.string().allow("auto", "manual").required(),
                          guildId: i.string(),
                          channelId: i.string(),
                          isFavorite: i.boolean(),
                          isTemporary: i.boolean(),
                          isCandidate: i.boolean(),
                          remoteClipId: i.string(),
                          gameSessionId: i.string(),
                          decision: i
                              .object()
                              .keys({
                                  reason: i.string(),
                                  clippingPressure: i.number(),
                                  currentThreshold: i.number(),
                                  effectivePressure: i.number(),
                                  timestamp: i.number(),
                                  signal: i.object().required(),
                              }),
                          timeline: i
                              .array()
                              .items(
                                  i
                                      .object()
                                      .keys({ signal: i.object().required(), timestamp: i.number().required() })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: i.number().greater(3).required(),
                                  then: i.required(),
                                  otherwise: i.forbidden(),
                              }),
                          originalStartMs: i.number(),
                          originalEndMs: i.number(),
                          sizeBytes: i.number(),
                      })
                      .required());
    try {
        return (
            delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            null != e.decision && delete e.decision.emotionHistory,
            (t = e?.decision?.signal),
            t?.type === "yelling" && (t.type = C.Gy.SHOUTING),
            i.assert(e, r),
            null == e.version && (e.version = 0),
            P.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var U = n(284009),
    G = n.n(U);
async function F(e) {
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
    G()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var V = n(956050),
    B = n(47167),
    j = n(587895),
    H = n(287809),
    Y = n(977997),
    W = n(375708);
function K() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.nQ.CLIP,
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
                a = null != e ? (0, B.m1)(e, H.default, o.A) : "";
            }
            let E =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        d.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        j.A.getApplication(s)?.linkedGames?.forEach((t) => {
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
    null != g && (I = I.union(new Set(Object.keys(Y.A.getVoiceStatesForChannel(g))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && I.add(t.userId);
        });
    let T = E && t === C.nQ.CLIP ? C.nQ.VOICE_CLIP : t;
    return {
        id: (0, L.A)(),
        createdAt: Date.now(),
        version: M.kd,
        applicationName: s ?? W.intl.string(W.t.qtSJxb),
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
        remoteClipId: i?.signal?.type === C.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: T,
    };
}
var $ = n(201538);
async function z(e) {
    let { allowVoiceRecording: t } = e;
    await a.Q$.updateSetting(t),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
            ...I.lc("updateAllowVoiceRecording"),
            allow_voice_recording: t,
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function q(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        s = !t && !(0, T.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(s && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...I.lc("updateClipsEnabled"),
                clips_enabled: t,
                guild_id: n,
                ...(s && { decoupled_clips_enabled: !1 }),
            });
}
function Z(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...I.lc("updateDecoupledClipsEnabled"),
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function X(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function Q(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, { ...I.lc("updateRemindersEnabled"), reminders_enabled: e });
}
function J(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function ee(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        em(e).catch((e) => {
            M.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function et(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function en(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function ei(e) {
    if (
        !v.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== C.Gy.MANUAL
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
            null != t && (await eu(e.id, { remoteClipId: t }, !1)),
                g.default.track(u.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    ...I.lc("maybeSendRemoteClipTrigger"),
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                });
        } catch (e) {
            M.nx.warn("Failed to send remote clip trigger", e);
        }
}
function er(e) {
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
async function es(e) {
    let { clipMethod: t, request: n, timeline: i, decision: r, isCandidate: a, gameSessionId: o } = e,
        l = y.Ay.getSettings(),
        c = (0, S.C5)(t),
        d = c ? (0, S.xT)(l.storageLocation) : l.storageLocation,
        _ = K(t, C.nQ.CLIP, i, r, o);
    _.isCandidate = a ?? !1;
    let p = `${(0, R.A)(_.applicationName.substring(0, 20))}_${_.id}.mp4`,
        m = s.A.fileManager.join(d, p),
        A = E.Ay.getMediaEngine(),
        T = JSON.stringify(_),
        N = I.TX(_),
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
                      metadata: T,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })
                : A.saveClip({
                      filepath: m,
                      metadata: T,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })),
            o = I.kY(N, i);
        if (
            ((o.clip_save_time_ms = i.clipSaveTimeMs),
            (o.clip_size_bytes = i.clipSizeBytes),
            null != i.viewerDecodeFps &&
                ((o.decode_fps_during_clip = i.viewerDecodeFps),
                (o.encode_fps_during_clip = i.viewerEncodeFps),
                (o.target_fps = null),
                (o.remote_clip_id = _.remoteClipId)),
            (o.clip_signal_types = I.Gb(_)),
            null != a)
        )
            e = JSON.parse(a);
        else {
            if (((_.length = t), void 0 !== r)) _.thumbnail = r;
            else {
                let e = "";
                try {
                    e = await (0, V.m)(s.A.clips.getClipProtocolURLFromPath(m), 0);
                } catch (e) {
                    M.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (_.thumbnail = e), await A.updateClipMetadata(m, JSON.stringify(_));
            }
            e = _;
        }
        return (
            g.default.track(u.HAw.CLIP_SAVED, o),
            M.nx.info(`Clip save succeeded with ${t}ms and thumbnail ${e.thumbnail.length} bytes thumbnail.`),
            { ...e, filepath: m, sizeBytes: i.clipSizeBytes }
        );
    } catch (e) {
        if (!("errorMessage" in e))
            throw (g.default.track(u.HAw.CLIP_SAVE_FAILURE, { ...I.lc("doSaveClip"), ...N }), e);
        if (e.errorAt !== C.RC.BUFFER_WARMING_UP && e.errorAt !== C.RC.BRIDGE_SHUTDOWN) {
            let t = I.kY(N, e);
            (t.error_at = e.errorAt), (t.error_message = e.errorMessage), g.default.track(u.HAw.CLIP_SAVE_FAILURE, t);
        }
        throw e;
    }
}
async function ea(e) {
    let { storageLocation: t } = y.Ay.getSettings(),
        n = [...Object.values(y.Ay.getClips()), ...y.Ay.getClipCandidates()].filter((e) => (0, S.Fk)(e.filepath, t));
    for (let t of (0, S.SF)(n, M.CN, e))
        try {
            await eI(t, !1);
        } catch (e) {
            M.nx.error("Failed to evict transient clip", e);
        }
}
async function eo(e) {
    let { clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o } = e;
    if (y.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: C.RC.MAX_CONCURRENT_SAVES });
    if ((0, N.qi)("saveClip") && !(0, $.t_)()) {
        M.nx.warn("Save clip ignored: discord_clips module not loaded yet"),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: C.RC.MODULE_NOT_LOADED });
        return;
    }
    let l = (0, O.TD)(),
        u = h.A.getCurrentUserActiveStream(),
        d = null != u,
        f = (0, O.Ao)(),
        p = c.Ay.getVisibleGame()?.windowHandle != null,
        m = E.Ay.hasClipsSource(),
        g = f && p && m;
    if (!(l && d) && !g)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: C.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: l,
                hasActiveStream: d,
                decoupledClipsEnabled: f,
                hasVisibleGameWindow: p,
                hasClipsSource: m,
            },
        });
    let A = (() => {
        if (null != u) return M.Fv.STREAMER;
        if (g) return M.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: A, clipMethod: t, signal: s?.signal });
    let I = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        T = performance.now(),
        v = setTimeout(() => {
            M.nx.warn(`Clip save still pending after ${M.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: M.ut });
        }, M.ut);
    try {
        if ("auto" === t && !a && !(0, S.rX)()) {
            let e = y.Ay.getSettings().maxAutoClips,
                t = y.Ay.getClips(),
                n = Object.values(t).filter((e) => !0 === e.isTemporary),
                i = n.length - e + 1;
            if (i > 0) {
                let t = n.sort((e, t) => e.createdAt - t.createdAt).slice(0, i);
                for (let n of (M.nx.info(`Deleting ${t.length} temporary clips to stay within limit of ${e}`), t))
                    try {
                        await eI(n, !1);
                    } catch (e) {
                        M.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await es({ clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o });
        if (a && null != e.gameSessionId && y.Ay.getCurrentClipsSession()?.id !== e.gameSessionId) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eI(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), (0, S.C5)(t) && (await ea(e.id)), ei(e);
    } catch (s) {
        let { errorAt: e, errorMessage: n } = er(s),
            i =
                e === C.RC.BUFFER_WARMING_UP
                    ? C.RC.BUFFER_WARMING_UP
                    : e === C.RC.BRIDGE_SHUTDOWN
                      ? C.RC.BRIDGE_SHUTDOWN
                      : null;
        null != i
            ? (M.nx.warn(`Clip save no-op (${i}): ${n ?? i}`),
              I?.stop(),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: i }))
            : (M.nx.error("Clip Failed to Save", s),
              I?.stop(),
              a || (0, _.Ak)("clip_error", 0.5),
              r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", errorAt: e, errorMessage: n }));
    } finally {
        clearTimeout(v);
    }
    M.nx.info(`${y.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - T)}ms`);
}
async function el(e) {
    let t, n;
    if (y.Ay.getIsAtMaxSaveClipOperations()) return;
    if ((0, N.qi)("saveScreenshotFromClip") && !(0, $.t_)())
        return void M.nx.warn("Screenshot ignored: discord_clips module not loaded yet");
    let i = E.Ay.getMediaEngine(),
        a = K(e, C.nQ.SCREENSHOT),
        o = y.Ay.getSettings().storageLocation,
        l = `${(0, R.A)(a.applicationName.substring(0, 20))}_${a.id}.jpeg`,
        u = s.A.fileManager.join(o, l);
    if (
        (null != a.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === a.applicationId)) &&
            M.nx.log("Matched application ID to running game:", a.applicationId, n.name),
        null == n &&
            null != a.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === a.applicationName)) &&
            M.nx.log("Matched application name to running game:", a.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && M.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), M.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        M.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: M.Fv.STREAMER, clipMethod: e ?? "manual" });
    let d = (0, _.Ak)("clip_save", 0.5),
        h = performance.now();
    try {
        let e = { ...a, filepath: u, length: 0, thumbnail: "" },
            n = D(e),
            s = (await i.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${s}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            M.nx.info(`Screenshot save took ${Math.round(performance.now() - h)}ms`),
            M.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (M.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...er(e) }),
            e)
        );
    }
}
async function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = y.Ay.getClipById(e) ?? y.Ay.getClipCandidateById(e);
    if (null == i) return;
    let a = { ...i, ...t };
    if (null == (await k(a))) return;
    let o = s.A.clips.updateClipMetadata;
    (0, N.qi)("updateClipMetadata") && a.type === C.nQ.CLIP && null != o
        ? await o(a.filepath, D(a))
        : await E.Ay.getMediaEngine().updateClipMetadata(a.filepath, D(a)),
        n && g.default.track(u.HAw.CLIP_EDITED, { clip_uuid: a.id, ...I.lc("updateClipMetadata") }),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: a });
}
async function ec(e) {
    await eu(e.id, { isFavorite: !e.isFavorite }, !0);
}
function ed() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function e_() {
    let e = y.Ay.getCurrentClipsSession()?.id;
    if (null == e) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP" });
    let t = y.Ay.getHistoricalClipsSessionById(e);
    null != t &&
        g.default.track(u.HAw.CLIPS_SESSION_ENDED, {
            ...I.lc("stopClipsSession"),
            current_clip_session_id: t.id,
            application_id: t.gameId,
            application_name: d.A.getGame(t.gameId)?.name,
            manual_clips_saved: t.manualClipsSaved,
            candidate_clips_saved: t.candidateClipsSaved,
            candidate_clips_promoted: t.candidateClipsPromoted,
        });
}
function eh(e, t) {
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t }),
        g.default.track(u.HAw.CLIPS_SESSION_STARTED, {
            ...I.lc("startClipsSession"),
            current_clip_session_id: e,
            application_id: t,
            application_name: d.A.getGame(t)?.name,
        });
}
function ef() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ep(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function eE(e) {
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await k({ ...e.metadata, filepath: e.filepath, sizeBytes: e.sizeBytes });
        null != t && n.push(t);
    }
    return n;
}
async function em(e) {
    if (!(0, A.isDesktop)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await eE(e);
    if ((0, S.rX)()) {
        let n = (0, S.xT)(e);
        await s.A.fileManager.createDirectoryIfNotExists(n, !0), t.push(...(await eE(n)));
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: t });
}
async function eg(e) {
    let { storageLocation: t } = y.Ay.getSettings(),
        n = s.A.fileManager.join(t, s.A.fileManager.basename(e.filepath));
    return await s.A.clips.moveClip(e.filepath, n), n;
}
async function eA(e, t) {
    let n = e,
        { storageLocation: i } = y.Ay.getSettings();
    if ((0, S.rX)() && (0, S.Fk)(e.filepath, i))
        try {
            let t = await eg(e);
            n = { ...e, filepath: t };
        } catch (e) {
            M.nx.error("Clip promotion failed: failed to move the clip out of transient storage", e);
            return;
        }
    r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...n, isCandidate: !1 } });
    try {
        await eu(n.id, { isCandidate: !1, filepath: n.filepath });
    } catch (e) {
        M.nx.error("Clip promotion failed: failed to update clip metadata", e);
    }
    g.default.track(u.HAw.CLIP_PROMOTED, {
        ...I.lc("promoteClipCandidate"),
        ...I.Zy(e),
        clip_uuid: e.id,
        clip_auto_clip_score: t,
    });
}
async function eI(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, A.isDesktop)() || s.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    await s.A.clips.deleteClip(n),
        r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            g.default.track(u.HAw.CLIP_DELETED, {
                ...I.lc("deleteClip"),
                ...I.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function eT(e) {
    try {
        ey([e.id]);
        let t = E.Ay.getMediaEngine();
        if ((0, N.qi)("exportClip") && !(0, $.t_)() && (await (0, $.so)(), !(0, $.t_)()))
            throw Error("discord_clips module failed to load");
        let { filepath: n, ...i } = e;
        await eu(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, N.qi)("exportClip")) {
            let n = await s.A.app.getPath("temp"),
                i = s.A.fileManager.join(n, "Discord Clips"),
                a = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                o = s.A.fileManager.join(i, a),
                l = await t.exportClipToFile(e.filepath, o, r);
            try {
                let t = await s.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === C.nQ.SCREENSHOT) return n;
                return F(n);
            } finally {
                await eS(l);
            }
        }
        let a = await t.exportClip(e.filepath, r);
        if (e.type === C.nQ.SCREENSHOT) return a;
        return F(a);
    } finally {
        ey(null);
    }
}
async function eS(e) {
    if ((0, A.isDesktop)())
        try {
            await s.A.clips.deleteClip(e);
        } catch {}
}
function ey(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eC(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eN(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } }),
        t &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...I.lc("updateEnableAutoclipping"),
                autoclips_enabled: e,
            });
}
function ev(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...y.Ay.getSettings().clipSignals, ...e } },
    });
}
function eR(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eO(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eb() {
    eR({ type: C.Gy.MANUAL });
}
async function eD(e) {
    await eu(e, { isTemporary: !1 }, !0);
}
