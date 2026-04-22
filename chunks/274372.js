"use strict";
n.d(t, { A: () => G }), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(77729),
    o = n(15285),
    l = n(652896),
    u = n(961350);
n(741394);
var d = n(734066),
    c = n(372684),
    _ = n(696016),
    f = n(652215),
    E = n(753070);
let h = "default",
    p = [],
    m = [],
    g = {},
    A = {},
    I = [],
    T = [],
    S = [],
    y = 0,
    N = null,
    O = null,
    R = {},
    v = null,
    C = [],
    b = null,
    D = {},
    L = new Map(),
    w = {
        clipsEnabled: !1,
        storageLocation: h,
        clipsQuality: { resolution: E.on.RESOLUTION_1080, frameRate: E.kn.FPS_30 },
        clipsLength: _.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.on.ALL,
        maxAutoClips: _.T2,
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
    M = {
        clipsSettings: w,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function P() {
    if (M.clipsSettings.storageLocation !== h || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (M.clipsSettings.storageLocation = e), x.emitChange();
}
function U(e, t, n) {
    if (!(0, d.J)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            s = t.substring(n),
            a = JSON.parse(s);
        if (null == a.id) return !1;
        let o = L.get(e);
        return null == o && ((o = new Set()), L.set(e, o)), o.add(a.id), !0;
    } catch (e) {
        return !1;
    }
}
class k extends i.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : w, newClipsCount: 0 }),
        (e) => {
            let t = { ...w, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: w.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(430452).Ay.getHardwareEncoding();
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
                        ? w.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? w.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? w.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? w.clipSignals,
                mlPipelinesEnabled: e.clipsSettings.mlPipelinesEnabled ?? w.mlPipelinesEnabled,
                autoClipPhrases: e.clipsSettings.autoClipPhrases ?? w.autoClipPhrases,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                autoClipPhrases:
                    0 === e.clipsSettings.autoClipPhrases.length ? w.autoClipPhrases : e.clipsSettings.autoClipPhrases,
            },
        }),
    ];
    initialize(e) {
        null != e && (M = e), P(), this.waitFor(o.Ay);
    }
    getClips() {
        return m.map((e) => g[e]);
    }
    getClipIds() {
        return m;
    }
    getClipById(e) {
        return g[e];
    }
    getPendingClips() {
        return I;
    }
    getPendingClipCandidates() {
        return T;
    }
    getClipCandidates() {
        return S;
    }
    getClipCandidateById(e) {
        return A[e];
    }
    getUserAgnosticState() {
        return M;
    }
    getSettings() {
        return M.clipsSettings;
    }
    getLastClipsSession() {
        return O;
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getActiveAnimation() {
        return b;
    }
    getStreamClipAnimations(e) {
        return D[e] ?? p;
    }
    hasAnyClipAnimations() {
        return Object.values(D).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return M.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return M.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return M.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return y >= _.VP;
    }
    getLastClipsError() {
        return v;
    }
    isClipsEnabledForUser(e) {
        return R[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return R[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return R[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return M.hasClips;
    }
    hasTakenDecoupledClip() {
        return M.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return M.newClipIds;
    }
    isClipExporting(e) {
        return C.includes(e);
    }
    getExportingClipIds() {
        return C;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let n of m) {
            let r = g[n];
            if (
                (null != t && n === t) ||
                (null != e &&
                    r.decision?.signal?.type === c.Gy.DISTRIBUTED &&
                    r.decision?.signal?.remoteTriggerClipId === e)
            )
                return r;
        }
        return null;
    }
    wasClipSharedInChannel(e, t) {
        let n = L.get(t);
        return n?.has(e) ?? !1;
    }
}
let x = new k(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            M = { ...M, clipsSettings: { ...M.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((y = Math.max(y - 1, 0)), t.isCandidate)) {
                (T = T.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (S = [t, ...S]),
                    (A[t.id] = t);
                return;
            }
            (O = { applicationName: t.applicationName, ended: !1, ...O, newClipIds: [...(O?.newClipIds ?? []), t.id] }),
                (M = { ...M, newClipIds: [...(M.newClipIds ?? []), t.id] }),
                (I = I.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (m = m.filter((e) => e !== t.id)),
                (g[t.id] = t),
                (m = [t.id, ...m]),
                (M.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            T = [t, ...T];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            T = T.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (O = { applicationName: t.applicationName, ...O, ended: !0, newClipIds: [...(O?.newClipIds ?? []), t.id] }),
                (M = { ...M, newClipIds: [...(M.newClipIds ?? []), t.id] }),
                (S = S.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete A[t.id],
                (g[t.id] = t),
                (m = [t.id, ...m]),
                (M.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            I = [t, ...I];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            I = I.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t, streamKey: n, thumbnail: r } = e;
            if (
                ((y += 1),
                (M.hasTakenDecoupledClip = M.hasTakenDecoupledClip || t === _.Fv.DECOUPLED),
                null != n && null != r)
            ) {
                let e = Date.now();
                (b = b ?? e), (D[n] = [...(D[n] ?? []), { timestamp: e, thumbnail: r }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            y = Math.max(y - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            b === n && (b = null), null == n ? (D[t] = []) : (D[t] = D[t].filter((e) => e.timestamp !== n));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!M.clipsSettings.clipsEnabled) return !1;
            let r = t;
            if (null != n) {
                let e = o.Ay.getGameForPID(n);
                r = e?.name ?? r;
            }
            if (null == r || "" === r) return !1;
            O = { applicationName: r, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((b = null), (D[t] = []), null == O || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            O = 0 === O.newClipIds.length ? null : { ...O, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == O) return !1;
            O = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            M.newClipIds = [];
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((m = []), (S = []), e.clips))
                t.isCandidate ? ((A[t.id] = t), S.push(t)) : ((g[t.id] = t), m.push(t.id));
            M.hasClips = m.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            (m = m.filter((t) => e.id !== t)),
                (S = S.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete A[e.id],
                delete g[e.id],
                0 === m.length && (M.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (A[t.id] = t) : (g[t.id] = t);
        },
        RTC_CONNECTION_FLAGS: function (e) {
            R[e.userId] = {
                clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            N = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== N && (N = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = M.hardwareClassification;
            (M.hardwareClassificationVersion = _.V0),
                (M.hardwareClassification = t),
                M.hardwareClassification === c.k9.MEETS_AUTO_ENABLE &&
                    n !== c.k9.MEETS_AUTO_ENABLE &&
                    (M.clipsSettings.clipsEnabled = !0);
            let r = M.hardwareClassificationForDecoupled;
            (M.hardwareClassificationForDecoupled = t),
                M.hardwareClassificationForDecoupled === c.k9.MEETS_AUTO_ENABLE &&
                    r !== c.k9.MEETS_AUTO_ENABLE &&
                    M.clipsSettings.clipsEnabled &&
                    (M.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((v = null), !M.clipsSettings.clipsEnabled)) return !1;
            O = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            v = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case _.P4.Error:
                    v = null;
                    break;
                case _.P4.Disabled:
                case _.P4.Enabled:
                    (M.clipsEducationState.dismissedAt = Date.now()),
                        (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (M.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            C = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return U(e.channelId, e.message.content, e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || U(e.channelId, n.content, n.author?.id);
            return t;
        },
    }),
    G = x;
