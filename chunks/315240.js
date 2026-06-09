"use strict";
n.d(t, {
    TE: () => ed,
    yT: () => eo,
    h$: () => en,
    YP: () => Z,
    Uh: () => J,
    p8: () => e_,
    MI: () => el,
    Fb: () => ep,
    VO: () => eg,
    uL: () => eS,
    GS: () => et,
    fd: () => X,
    Ts: () => eN,
    e6: () => eT,
    H1: () => eI,
    l0: () => eC,
    yd: () => ea,
    Su: () => eh,
    yO: () => q,
    $N: () => ev,
    YK: () => ef,
    eQ: () => z,
    PW: () => ey,
    w7: () => eR,
    K7: () => eE,
    HU: () => ee,
    Mt: () => Q,
    oH: () => em,
    Yy: () => eu,
    XK: () => ec,
}),
    n(321073);
var i = n(636537),
    r = n(459838),
    s = n(823598),
    a = n(228366),
    o = n(77729),
    l = n(885386),
    u = n(994500),
    c = n(461213),
    d = n(652215),
    _ = n(952818),
    h = n(652896),
    f = n(400492),
    p = n(616356),
    E = n(495544),
    m = n(734057),
    g = n(555975),
    A = n(763827),
    I = n(803301),
    T = n(174459),
    S = n(723702),
    y = n(53677),
    N = n(888916),
    v = n(274372),
    C = n(372684),
    R = n(974293),
    O = n(458977),
    b = n(439818),
    D = n(572164),
    L = n(835245),
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
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != x
                ? x
                : (x = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(M.kd).optional(),
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
                              }),
                          createdAt: t
                              .number()
                              .when("version", { is: t.number().greater(4).required(), then: t.required() }),
                          type: t
                              .string()
                              .allow(C.nQ.CLIP, C.nQ.SCREENSHOT, C.nQ.VOICE_CLIP)
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
    H = n(587895),
    j = n(311043),
    Y = n(287809),
    W = n(977997),
    K = n(375708);
function $() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: s,
            sourceApplicationId: a,
            activity: o,
            isVoiceOnly: l,
        } = (function () {
            let e,
                t = p.A.getStreamerActiveStreamMetadata(),
                n = t?.pid,
                i = t?.sourceName,
                r = (() => {
                    if (null == t) return _.Ay.getVisibleGame();
                    {
                        let e = null != n ? _.Ay.getGameForPID(n) : null,
                            t = null != i ? _.Ay.getGameForName(i) : null;
                        return e ?? t;
                    }
                })(),
                s = t?.id ?? r?.id,
                a = t?.sourceName ?? r?.name,
                o = A.A.getChannelId(),
                l = null == a && null != o;
            if (l) {
                let e = null != o ? m.A.getChannel(o) : null;
                a = null != e ? (0, B.m1)(e, Y.default, u.A) : "";
            }
            let h =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        j.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        H.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), j.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                f = c.A.getUnfilteredActivities(!0).filter(
                    (e) => e.type === d.$pd.PLAYING && null != e.application_id && h.has(e.application_id),
                );
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
                    f.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        f[0],
                ),
                isVoiceOnly: l,
            };
        })(),
        h = A.A.getChannelId(),
        f = A.A.getGuildId(),
        g = new Set([E.default.getId()]);
    null != h && (g = g.union(new Set(Object.keys(W.A.getVoiceStatesForChannel(h))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && g.add(t.userId);
        });
    let I = l && t === C.nQ.CLIP ? C.nQ.VOICE_CLIP : t;
    return {
        id: (0, L.A)(),
        createdAt: Date.now(),
        version: M.kd,
        applicationName: s ?? K.intl.string(K.t.qtSJxb),
        applicationId: a,
        activity: o,
        users: Array.from(g),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: f ?? void 0,
        channelId: h ?? void 0,
        timeline: n,
        decision: i,
        gameSessionId: r,
        remoteClipId: i?.signal?.type === C.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: I,
    };
}
async function z(e) {
    let { allowVoiceRecording: t } = e;
    await l.Q$.updateSetting(t),
        T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t, clip_runtime: (0, R.GN)() }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function q(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        r = !t && !(0, N.Fp)();
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(r && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(r && { decoupled_clips_enabled: !1 }),
                clip_runtime: (0, R.GN)(),
            });
}
function X(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
                clip_runtime: (0, R.GN)(),
            });
}
function Z(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function Q(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        T.default.track(d.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e, clip_runtime: (0, R.GN)() });
}
function J(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function ee(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ep(e).catch((e) => {
            M.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function et(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function en(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function ei(e) {
    if (
        !O.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== C.Gy.MANUAL
    )
        return;
    let t = A.A.getChannelId(),
        n = m.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!c.A.getActivities(!1).some((e) => e.type === d.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => u.A.isFriend(e));
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
                url: d.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await eu(e.id, { remoteClipId: t }, !1)),
                T.default.track(d.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                    clip_runtime: (0, R.GN)(),
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
async function es() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = v.Ay.getSettings().storageLocation,
        l = $(e, C.nQ.CLIP, t, n, r);
    l.isCandidate = i ?? !1;
    let u = `${(0, b.A)(l.applicationName.substring(0, 20))}_${l.id}.mp4`,
        c = o.A.fileManager.join(s, u),
        _ = g.Ay.getMediaEngine(),
        h = JSON.stringify(l),
        f = y.TX(l);
    i && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...l, pending: !0, filepath: c } });
    try {
        let { duration: e, clipStats: t } = await (null != p.A.getCurrentUserActiveStream()
                ? _.saveClipForUser(E.default.getId(), c, h)
                : _.saveClip(c, h)),
            n = y.kY(f, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null),
                (n.remote_clip_id = l.remoteClipId)),
            (n.clip_signal_types = y.Gb(l));
        let i = "";
        try {
            i = await (0, V.m)(o.A.clips.getClipProtocolURLFromPath(c), 0);
        } catch (e) {
            M.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (l.thumbnail = i),
            (l.length = e),
            T.default.track(d.HAw.CLIP_SAVED, n),
            M.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await _.updateClipMetadata(c, JSON.stringify(l)),
            { ...l, filepath: c }
        );
    } catch (t) {
        if ((i && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: l.id }), !("errorMessage" in t)))
            throw (T.default.track(d.HAw.CLIP_SAVE_FAILURE, { ...f, clip_runtime: (0, R.GN)() }), t);
        let e = y.kY(f, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            T.default.track(d.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function ea() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 ? arguments[4] : void 0;
    if (v.Ay.getIsAtMaxSaveClipOperations())
        return void a.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: e, reason: C.RC.MAX_CONCURRENT_SAVES });
    let l = (0, D.TD)(),
        u = p.A.getCurrentUserActiveStream(),
        c = null != u,
        d = (0, D.Ao)(),
        E = _.Ay.getVisibleGame()?.windowHandle != null,
        m = g.Ay.hasClipsSource(),
        A = d && E && m;
    if (!(l && c) && !A)
        return void a.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: e,
            reason: C.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: l,
                hasActiveStream: c,
                decoupledClipsEnabled: d,
                hasVisibleGameWindow: E,
                hasClipsSource: m,
            },
        });
    let T = null != u ? (0, h._z)(u) : void 0,
        S = (() => {
            if (null != u) return M.Fv.STREAMER;
            if (A) return M.Fv.DECOUPLED;
            throw Error("No clip type available");
        })(),
        y = await (async () => {
            if (null == T) return;
            let { ownerId: e, guildId: t } = (0, h.Iy)(T),
                n = I.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, V.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: S,
        streamKey: T,
        thumbnail: i ? void 0 : y,
        clipMethod: e,
        signal: n?.signal,
    });
    let N = "manual" === e ? (0, f.Ak)("clip_save", 0.5) : null,
        R = performance.now(),
        O = setTimeout(() => {
            M.nx.warn(`Clip save still pending after ${M.ut}ms \u{2014} native callback may have stalled`),
                a.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: e, elapsedMs: M.ut });
        }, M.ut);
    try {
        if ("auto" === e && !i) {
            let e = v.Ay.getSettings().maxAutoClips,
                t = v.Ay.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (M.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await em(t, !1);
                    } catch (e) {
                        M.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await es(e, t, n, i, o);
        if (
            i &&
            !v.Ay.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), em(r);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), ei(r);
    } catch (e) {
        M.nx.error("Clip Failed to Save", e),
            N?.stop(),
            i || (0, f.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...er(e) });
    } finally {
        clearTimeout(O);
    }
    M.nx.info(`${v.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - R)}ms`);
}
async function eo(e) {
    let t, n;
    if (v.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = p.A.getCurrentUserActiveStream(),
        r = g.Ay.getMediaEngine(),
        s = $(e, C.nQ.SCREENSHOT),
        l = v.Ay.getSettings().storageLocation,
        u = `${(0, b.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        c = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = _.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            M.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = _.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            M.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = _.Ay.getVisibleGame()) && M.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), M.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        M.nx.error("Failed to save screenshot: No window handle available"), (0, f.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: M.Fv.STREAMER,
        streamKey: null != i ? (0, h._z)(i) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let d = (0, f.Ak)("clip_save", 0.5),
        E = performance.now();
    try {
        let e = { ...s, filepath: c, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            i = (await r.saveScreenshot(c, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${i}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            M.nx.info(`Screenshot save took ${Math.round(performance.now() - E)}ms`),
            M.nx.log("Successfully saved screenshot to:", c);
    } catch (e) {
        throw (
            (M.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, f.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...er(e) }),
            e)
        );
    }
}
function el(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = v.Ay.getClipById(e) ?? v.Ay.getClipCandidateById(e);
    if (null == i) return;
    let r = { ...i, ...t };
    null != (await k(r)) &&
        (await g.Ay.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        n && T.default.track(d.HAw.CLIP_EDITED, { clip_uuid: r.id, ...y.lc() }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: r }));
}
async function ec(e) {
    await eu(e.id, { isFavorite: !e.isFavorite }, !0);
}
function ed() {
    a.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
function e_(e) {
    a.h.dispatch({ type: "CLIPS_SESSION_UPDATE", session: e });
}
function eh() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ef(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ep(e) {
    if (!(0, S.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await k({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function eE(e) {
    eu(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function em(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, S.isDesktop)() || o.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    await o.A.clips.deleteClip(n),
        a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            T.default.track(d.HAw.CLIP_DELETED, {
                ...y.lc(),
                ...y.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function eg(e) {
    try {
        eI([e.id]);
        let t = g.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await eu(e.id, i);
        let r = e.editMetadata ?? {
            start: 0,
            end: e.length / 1e3,
            applicationAudio: !0,
            voiceAudio: !0,
            soundboardAudio: !0,
        };
        if (t.hasExportClipToFile() && (0, R.qi)()) {
            let n = await o.A.app.getPath("temp"),
                i = o.A.fileManager.join(n, "Discord Clips"),
                s = `${crypto.randomUUID()}-${Date.now()}.mp4`,
                a = o.A.fileManager.join(i, s),
                l = await t.exportClipToFile(e.filepath, a, r);
            try {
                let t = await o.A.clips.loadClip(l),
                    n = new Blob([t.data], { type: "video/mp4" });
                if (e.type === C.nQ.SCREENSHOT) return n;
                return F(n);
            } finally {
                await eA(l);
            }
        }
        let s = await t.exportClip(e.filepath, r);
        if (e.type === C.nQ.SCREENSHOT) return s;
        return F(s);
    } finally {
        eI(null);
    }
}
async function eA(e) {
    if ((0, S.isDesktop)())
        try {
            await o.A.clips.deleteClip(e);
        } catch {}
}
function eI(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function eT(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eS(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } });
}
function ey(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...v.Ay.getSettings().clipSignals, ...e } },
    });
}
function eN(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function ev(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eC() {
    eN({ type: C.Gy.MANUAL });
}
async function eR(e) {
    await eu(e, { isTemporary: !1 }, !0);
}
