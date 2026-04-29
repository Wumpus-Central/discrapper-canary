"use strict";
n.d(t, { A: () => V }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(328153),
    l = n(652896),
    _ = n(495544);
n(741394);
var d = n(734066),
    u = n(372684),
    c = n(696016),
    E = n(652215),
    h = n(753070);
let m = "default",
    f = [],
    g = [],
    I = {},
    A = {},
    p = {},
    T = [],
    S = [],
    N = [],
    O = 0,
    R = null,
    C = null,
    y = {},
    D = null,
    L = [],
    v = null,
    w = {},
    P = new Map(),
    b = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: { resolution: h.on.RESOLUTION_1080, frameRate: h.kn.FPS_30 },
        clipsLength: c.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: c.on.ALL,
        maxAutoClips: c.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        mlPipelinesEnabled: {
            emotionClassifier: !0,
            wakeWordDetector: !1,
            yellDetector: !0,
            whisperTranscription: !0,
            laughterDetector: !0,
        },
        autoClipPhrases: ["clip that", "clip it", "clip clip"],
    },
    k = {
        clipsSettings: b,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function U() {
    if (k.clipsSettings.storageLocation !== m || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (k.clipsSettings.storageLocation = e), x.emitChange();
}
function M(e, t, n) {
    if (!(0, d.J)() || n !== _.default.getId()) return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = P.get(e);
        null == t && ((t = new Set()), P.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class G extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : b, newClipsCount: 0 }),
        (e) => {
            let t = { ...b, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: b.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(51760).Ay.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled,
                },
            };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [], newClipIDs: void 0 }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality:
                    "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                        ? b.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? b.remindersEnabled,
            },
        }),
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                maxAutoClips: e.clipsSettings.maxAutoClips ?? b.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? b.clipSignals,
                mlPipelinesEnabled: e.clipsSettings.mlPipelinesEnabled ?? b.mlPipelinesEnabled,
                autoClipPhrases: e.clipsSettings.autoClipPhrases ?? b.autoClipPhrases,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                autoClipPhrases:
                    0 === e.clipsSettings.autoClipPhrases.length ? b.autoClipPhrases : e.clipsSettings.autoClipPhrases,
            },
        }),
    ];
    initialize(e) {
        null != e && (k = e), U(), this.waitFor(o.Ay);
    }
    getClips() {
        return g.map((e) => I[e] ?? null).filter((e) => null != e);
    }
    getClipIds() {
        return g;
    }
    getClipById(e) {
        return I[e];
    }
    getClipByRemoteId(e) {
        let t = p[e];
        if (null != t) return I[t];
    }
    getPendingClips() {
        return T;
    }
    getPendingClipCandidates() {
        return S;
    }
    getClipCandidates() {
        return N;
    }
    getClipCandidateById(e) {
        return A[e];
    }
    getUserAgnosticState() {
        return k;
    }
    getSettings() {
        return k.clipsSettings;
    }
    getLastClipsSession() {
        return C;
    }
    getClipsWarningShown(e) {
        return R === e;
    }
    getActiveAnimation() {
        return v;
    }
    getStreamClipAnimations(e) {
        return w[e] ?? f;
    }
    hasAnyClipAnimations() {
        return Object.values(w).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return k.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return k.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return k.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return O >= c.VP;
    }
    getLastClipsError() {
        return D;
    }
    isClipsEnabledForUser(e) {
        return y[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return y[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return y[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return k.hasClips;
    }
    hasTakenDecoupledClip() {
        return k.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return k.newClipIds;
    }
    isClipExporting(e) {
        return L.includes(e);
    }
    getExportingClipIds() {
        return L;
    }
    wasClipSharedInChannel(e, t) {
        let n = P.get(t);
        return n?.has(e) ?? !1;
    }
}
let x = new G(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            k = { ...k, clipsSettings: { ...k.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((O = Math.max(O - 1, 0)), t.isCandidate)) {
                (S = S.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (N = [t, ...N]),
                    (A[t.id] = t);
                return;
            }
            (C = { applicationName: t.applicationName, ended: !1, ...C, newClipIds: [...(C?.newClipIds ?? []), t.id] }),
                (k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                (T = T.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (g = g.filter((e) => e !== t.id)),
                (I[t.id] = t),
                null != t.remoteClipId && (p[t.remoteClipId] = t.id),
                (g = [t.id, ...g]),
                (k.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            S = [t, ...S];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            S = S.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (C = { applicationName: t.applicationName, ...C, ended: !0, newClipIds: [...(C?.newClipIds ?? []), t.id] }),
                (k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                (N = N.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete A[t.id],
                (I[t.id] = t),
                (g = [t.id, ...g]),
                (k.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            T = [t, ...T];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            T = T.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t, streamKey: n, thumbnail: i } = e;
            if (
                ((O += 1),
                (k.hasTakenDecoupledClip = k.hasTakenDecoupledClip || t === c.Fv.DECOUPLED),
                null != n && null != i)
            ) {
                let e = Date.now();
                (v = v ?? e), (w[n] = [...(w[n] ?? []), { timestamp: e, thumbnail: i }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            O = Math.max(O - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            v === n && (v = null), null == n ? (w[t] = []) : (w[t] = w[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!k.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                let e = o.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            C = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((v = null), (w[t] = []), null == C || (0, l.Iy)(t).ownerId !== _.default.getId())) return !1;
            C = 0 === C.newClipIds.length ? null : { ...C, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == C) return !1;
            C = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            k.newClipIds = [];
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((g = []), (N = []), e.clips))
                t.isCandidate
                    ? ((A[t.id] = t), N.push(t))
                    : ((I[t.id] = t), g.push(t.id), null != t.remoteClipId && (p[t.remoteClipId] = t.id));
            k.hasClips = g.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = I[e.id];
            (g = g.filter((t) => e.id !== t)),
                (N = N.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete A[e.id],
                delete I[e.id],
                t?.remoteClipId != null && delete p[t.remoteClipId],
                0 === g.length && (k.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (A[t.id] = t) : ((I[t.id] = t), null != t.remoteClipId && (p[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            y[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, E.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, E.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, i.Lt)(e.flags, E.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            R = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== R && (R = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = k.hardwareClassification;
            (k.hardwareClassificationVersion = c.V0),
                (k.hardwareClassification = t),
                k.hardwareClassification === u.k9.MEETS_AUTO_ENABLE &&
                    n !== u.k9.MEETS_AUTO_ENABLE &&
                    (k.clipsSettings.clipsEnabled = !0);
            let i = k.hardwareClassificationForDecoupled;
            (k.hardwareClassificationForDecoupled = t),
                k.hardwareClassificationForDecoupled === u.k9.MEETS_AUTO_ENABLE &&
                    i !== u.k9.MEETS_AUTO_ENABLE &&
                    k.clipsSettings.clipsEnabled &&
                    (k.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((D = null), !k.clipsSettings.clipsEnabled)) return !1;
            C = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            D = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case c.P4.Error:
                    D = null;
                    break;
                case c.P4.Disabled:
                case c.P4.Enabled:
                    (k.clipsEducationState.dismissedAt = Date.now()),
                        (k.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (k.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (k.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            L = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return M(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || M(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
    }),
    V = x;
