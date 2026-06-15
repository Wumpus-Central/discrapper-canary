"use strict";
n.d(t, {
    TE: () => ea,
    yT: () => ei,
    h$: () => Q,
    YP: () => $,
    Uh: () => q,
    Fb: () => ed,
    VO: () => ef,
    uL: () => eg,
    GS: () => Z,
    fd: () => K,
    Ts: () => eI,
    e6: () => em,
    H1: () => eE,
    l0: () => eS,
    yd: () => en,
    YV: () => eo,
    Su: () => eu,
    yO: () => W,
    $N: () => eT,
    YK: () => ec,
    eQ: () => Y,
    PW: () => eA,
    w7: () => ey,
    K7: () => e_,
    HU: () => X,
    Mt: () => z,
    oH: () => eh,
    Yy: () => er,
    XK: () => es,
    mN: () => el,
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
    E = n(136491),
    m = n(763827),
    g = n(174459),
    A = n(723702),
    I = n(53677),
    T = n(888916),
    S = n(274372),
    y = n(372684),
    N = n(974293),
    v = n(458977),
    C = n(439818),
    R = n(572164),
    O = n(835245),
    b = n(935208),
    D = n(696016);
let L = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? y.nQ.SCREENSHOT : y.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, O.A)(), createdAt: b.default.extractTimestamp(e.id) }),
    ],
    w = null;
async function M(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != w
                ? w
                : (w = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(D.kd).optional(),
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
                              .allow(y.nQ.CLIP, y.nQ.SCREENSHOT, y.nQ.VOICE_CLIP)
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
            L.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var P = n(284009),
    x = n.n(P);
async function k(e) {
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
    x()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var U = n(956050),
    G = n(47167),
    F = n(587895),
    V = n(287809),
    B = n(977997),
    H = n(375708);
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.nQ.CLIP,
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
                a = null != e ? (0, G.m1)(e, V.default, o.A) : "";
            }
            let E =
                    ((e = new Set()),
                    null == s ||
                        (e.add(s),
                        d.A.getGame(s)?.linkedApplications?.forEach((t) => e.add(t.id)),
                        F.A.getApplication(s)?.linkedGames?.forEach((t) => {
                            e.add(t.id), d.A.getGame(t.id)?.linkedApplications?.forEach((t) => e.add(t.id));
                        })),
                    e),
                g = l.A.getUnfilteredActivities(!0).filter(
                    (e) => e.type === u.$pd.PLAYING && null != e.application_id && E.has(e.application_id),
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
                    g.find((e) => (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details)) ??
                        g[0],
                ),
                isVoiceOnly: f,
            };
        })(),
        g = m.A.getChannelId(),
        A = m.A.getGuildId(),
        I = new Set([f.default.getId()]);
    null != g && (I = I.union(new Set(Object.keys(B.A.getVoiceStatesForChannel(g))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && I.add(t.userId);
        });
    let T = E && t === y.nQ.CLIP ? y.nQ.VOICE_CLIP : t;
    return {
        id: (0, O.A)(),
        createdAt: Date.now(),
        version: D.kd,
        applicationName: s ?? H.intl.string(H.t.qtSJxb),
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
        remoteClipId: i?.signal?.type === y.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: T,
    };
}
async function Y(e) {
    let { allowVoiceRecording: t } = e;
    await a.Q$.updateSetting(t),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t,
            clip_runtime: (0, N.GN)("updateAllowVoiceRecording"),
        }),
        r.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function W(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e,
        s = !t && !(0, T.Fp)();
    await r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(s && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(s && { decoupled_clips_enabled: !1 }),
                clip_runtime: (0, N.GN)("updateClipsEnabled"),
            });
}
function K(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
                clip_runtime: (0, N.GN)("updateDecoupledClipsEnabled"),
            });
}
function $(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { debugTooltipsEnabled: e } });
}
function z(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        g.default.track(u.HAw.CLIPS_SETTINGS_UPDATED, {
            reminders_enabled: e,
            clip_runtime: (0, N.GN)("updateRemindersEnabled"),
        });
}
function q(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { showPovClipsInGallery: e } });
}
function X(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ed(e).catch((e) => {
            D.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function Z(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function Q(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
async function J(e) {
    if (
        !v.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        e.isCandidate ||
        null == e.applicationId ||
        e.decision?.signal.type !== y.Gy.MANUAL
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
            null != t && (await er(e.id, { remoteClipId: t }, !1)),
                g.default.track(u.HAw.CLIP_REMOTE_TRIGGER_SENT, {
                    remote_clip_id: t,
                    clip_trigger_type: e.decision?.signal.type,
                    num_clip_participants: e.users.length,
                    application_id: e.applicationId,
                    clip_runtime: (0, N.GN)("maybeSendRemoteClipTrigger"),
                });
        } catch (e) {
            D.nx.warn("Failed to send remote clip trigger", e);
        }
}
function ee(e) {
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
async function et(e) {
    let { clipMethod: t, request: n, timeline: i, decision: a, isCandidate: o, gameSessionId: l } = e,
        c = S.Ay.getSettings().storageLocation,
        d = j(t, y.nQ.CLIP, i, a, l);
    d.isCandidate = o ?? !1;
    let _ = `${(0, C.A)(d.applicationName.substring(0, 20))}_${d.id}.mp4`,
        p = s.A.fileManager.join(c, _),
        m = E.Ay.getMediaEngine(),
        A = JSON.stringify(d),
        T = I.TX(d);
    o && r.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...d, pending: !0, filepath: p } });
    let v = n.trimStartMs;
    try {
        let e,
            {
                duration: t,
                clipStats: i,
                thumbnail: r,
                metadata: a,
            } = await (null != h.A.getCurrentUserActiveStream()
                ? m.saveClipForUser({
                      userID: f.default.getId(),
                      filepath: p,
                      metadata: A,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })
                : m.saveClip({
                      filepath: p,
                      metadata: A,
                      thumbnailMs: v,
                      startMs: n.startMs,
                      endMs: n.endMs,
                      trimStartMs: n.trimStartMs,
                      trimEndMs: n.trimEndMs,
                  })),
            o = I.kY(T, i);
        if (
            ((o.clip_save_time_ms = i.clipSaveTimeMs),
            (o.clip_size_bytes = i.clipSizeBytes),
            null != i.viewerDecodeFps &&
                ((o.decode_fps_during_clip = i.viewerDecodeFps),
                (o.encode_fps_during_clip = i.viewerEncodeFps),
                (o.target_fps = null),
                (o.remote_clip_id = d.remoteClipId)),
            (o.clip_signal_types = I.Gb(d)),
            null != a)
        )
            e = JSON.parse(a);
        else {
            if (((d.length = t), void 0 !== r)) d.thumbnail = r;
            else {
                let e = "";
                try {
                    e = await (0, U.m)(s.A.clips.getClipProtocolURLFromPath(p), 0);
                } catch (e) {
                    D.nx.warn("Failed to generate clip thumbnail:", e);
                }
                (d.thumbnail = e), await m.updateClipMetadata(p, JSON.stringify(d));
            }
            e = d;
        }
        return (
            g.default.track(u.HAw.CLIP_SAVED, o),
            D.nx.info(`Clip save succeeded with ${t}ms and thumbnail ${e.thumbnail.length} bytes thumbnail.`),
            { ...e, filepath: p }
        );
    } catch (t) {
        if ((o && r.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: d.id }), !("errorMessage" in t)))
            throw (g.default.track(u.HAw.CLIP_SAVE_FAILURE, { ...T, clip_runtime: (0, N.GN)("doSaveClip") }), t);
        let e = I.kY(T, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            g.default.track(u.HAw.CLIP_SAVE_FAILURE, e),
            t)
        );
    }
}
async function en(e) {
    let { clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o } = e;
    if (S.Ay.getIsAtMaxSaveClipOperations())
        return void r.h.dispatch({ type: "CLIPS_SAVE_CLIP_NO_OP", clipMethod: t, reason: y.RC.MAX_CONCURRENT_SAVES });
    let l = (0, R.TD)(),
        u = h.A.getCurrentUserActiveStream(),
        d = null != u,
        f = (0, R.Ao)(),
        p = c.Ay.getVisibleGame()?.windowHandle != null,
        m = E.Ay.hasClipsSource(),
        g = f && p && m;
    if (!(l && d) && !g)
        return void r.h.dispatch({
            type: "CLIPS_SAVE_CLIP_NO_OP",
            clipMethod: t,
            reason: y.RC.NO_ELIGIBLE_SOURCE,
            sourceChecks: {
                clipsEnabled: l,
                hasActiveStream: d,
                decoupledClipsEnabled: f,
                hasVisibleGameWindow: p,
                hasClipsSource: m,
            },
        });
    let A = (() => {
        if (null != u) return D.Fv.STREAMER;
        if (g) return D.Fv.DECOUPLED;
        throw Error("No clip type available");
    })();
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: A, clipMethod: t, signal: s?.signal });
    let I = "manual" === t ? (0, _.Ak)("clip_save", 0.5) : null,
        T = performance.now(),
        N = setTimeout(() => {
            D.nx.warn(`Clip save still pending after ${D.ut}ms \u{2014} native callback may have stalled`),
                r.h.dispatch({ type: "CLIPS_SAVE_CLIP_TIMEOUT", clipMethod: t, elapsedMs: D.ut });
        }, D.ut);
    try {
        if ("auto" === t && !a) {
            let e = S.Ay.getSettings().maxAutoClips,
                t = S.Ay.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (D.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await eh(t, !1);
                    } catch (e) {
                        D.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let e = await et({ clipMethod: t, request: n, timeline: i, decision: s, isCandidate: a, gameSessionId: o });
        if (
            a &&
            !S.Ay.getPendingClipCandidates().some((t) => {
                let { id: n } = t;
                return n === e.id;
            })
        ) {
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), eh(e);
            return;
        }
        r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }), J(e);
    } catch (e) {
        D.nx.error("Clip Failed to Save", e),
            I?.stop(),
            a || (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ee(e) });
    } finally {
        clearTimeout(N);
    }
    D.nx.info(`${S.Ay.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - T)}ms`);
}
async function ei(e) {
    let t, n;
    if (S.Ay.getIsAtMaxSaveClipOperations()) return;
    let i = E.Ay.getMediaEngine(),
        a = j(e, y.nQ.SCREENSHOT),
        o = S.Ay.getSettings().storageLocation,
        l = `${(0, C.A)(a.applicationName.substring(0, 20))}_${a.id}.jpeg`,
        u = s.A.fileManager.join(o, l);
    if (
        (null != a.applicationId &&
            null != (n = c.Ay.getRunningGames().find((e) => e.id === a.applicationId)) &&
            D.nx.log("Matched application ID to running game:", a.applicationId, n.name),
        null == n &&
            null != a.applicationName &&
            null != (n = c.Ay.getRunningGames().find((e) => e.name === a.applicationName)) &&
            D.nx.log("Matched application name to running game:", a.applicationName),
        null == n && null != (n = c.Ay.getVisibleGame()) && D.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), D.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        D.nx.error("Failed to save screenshot: No window handle available"), (0, _.Ak)("clip_error", 0.5);
        return;
    }
    r.h.dispatch({ type: "CLIPS_SAVE_CLIP_START", clipType: D.Fv.STREAMER, clipMethod: e ?? "manual" });
    let d = (0, _.Ak)("clip_save", 0.5),
        h = performance.now();
    try {
        let e = { ...a, filepath: u, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            s = (await i.saveScreenshot(u, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${s}`),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            D.nx.info(`Screenshot save took ${Math.round(performance.now() - h)}ms`),
            D.nx.log("Successfully saved screenshot to:", u);
    } catch (e) {
        throw (
            (D.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, _.Ak)("clip_error", 0.5),
            r.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR", ...ee(e) }),
            e)
        );
    }
}
async function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = S.Ay.getClipById(e) ?? S.Ay.getClipCandidateById(e);
    if (null == i) return;
    let s = { ...i, ...t };
    null != (await M(s)) &&
        (await E.Ay.getMediaEngine().updateClipMetadata(s.filepath, JSON.stringify(s)),
        n && g.default.track(u.HAw.CLIP_EDITED, { clip_uuid: s.id, ...I.lc() }),
        r.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: s }));
}
async function es(e) {
    await er(e.id, { isFavorite: !e.isFavorite }, !0);
}
function ea() {
    r.h.dispatch({ type: "CLIPS_CLEAR_LAST_CLIPS_SESSION" });
}
async function eo() {
    let e = S.Ay.getCurrentClipsSession()?.id;
    if (null == e) return;
    await r.h.dispatch({ type: "CLIPS_SESSION_STOP" });
    let t = S.Ay.getHistoricalClipsSessionById(e);
    null != t &&
        g.default.track(u.HAw.CLIPS_SESSION_ENDED, {
            ...I.lc(),
            current_clip_session_id: t.id,
            application_id: t.gameId,
            application_name: d.A.getGame(t.gameId)?.name,
            manual_clips_saved: t.manualClipsSaved,
            candidate_clips_saved: t.candidateClipsSaved,
            candidate_clips_promoted: t.candidateClipsPromoted,
        });
}
function el(e, t) {
    r.h.dispatch({ type: "CLIPS_SESSION_START", sessionId: e, gameId: t }),
        g.default.track(u.HAw.CLIPS_SESSION_STARTED, {
            ...I.lc(),
            current_clip_session_id: e,
            application_id: t,
            application_name: d.A.getGame(t)?.name,
        });
}
function eu() {
    r.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function ec(e) {
    r.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ed(e) {
    if (!(0, A.isDesktop)() || s.A.clips?.loadClipsDirectory == null) return;
    let t = await s.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await M({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    r.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function e_(e) {
    er(e.id, { isCandidate: !1 }),
        r.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } }),
        g.default.track(u.HAw.CLIP_PROMOTED, { ...I.lc(), ...I.Zy(e), clip_uuid: e.id });
}
async function eh(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, A.isDesktop)() || s.A.clips?.deleteClip == null) return;
    let { filepath: n, id: i } = e;
    await s.A.clips.deleteClip(n),
        r.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: i, filepath: n }),
        t &&
            g.default.track(u.HAw.CLIP_DELETED, {
                ...I.lc(),
                ...I.Zy(e),
                application_name: e.applicationName,
                application_id: e.applicationId,
                clip_uuid: e.id,
            });
}
async function ef(e) {
    try {
        eE([e.id]);
        let t = E.Ay.getMediaEngine(),
            { filepath: n, ...i } = e;
        await er(e.id, i);
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
                if (e.type === y.nQ.SCREENSHOT) return n;
                return k(n);
            } finally {
                await ep(l);
            }
        }
        let a = await t.exportClip(e.filepath, r);
        if (e.type === y.nQ.SCREENSHOT) return a;
        return k(a);
    } finally {
        eE(null);
    }
}
async function ep(e) {
    if ((0, A.isDesktop)())
        try {
            await s.A.clips.deleteClip(e);
        } catch {}
}
function eE(e) {
    r.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function em(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eg(e) {
    r.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { enableAutoclipping: e } });
}
function eA(e) {
    r.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...S.Ay.getSettings().clipSignals, ...e } },
    });
}
function eI(e, t) {
    r.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eT(e) {
    r.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eS() {
    eI({ type: y.Gy.MANUAL });
}
async function ey(e) {
    await er(e, { isTemporary: !1 }, !0);
}
