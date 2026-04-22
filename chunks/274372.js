"use strict";
n.d(t, { A: () => e_ }), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(77729),
    o = n(15285),
    l = n(652896),
    u = n(961350);
n(741394);
var c = n(734066),
    d = n(372684),
    _ = n(696016),
    f = n(652215),
    p = n(753070);
let h = "default",
    m = [],
    E = [],
    g = {},
    A = {},
    I = [],
    T = [],
    S = [],
    y = 0,
    v = null,
    N = null,
    C = {},
    R = null,
    O = [],
    b = null,
    D = {},
    L = new Map(),
    w = {
        clipsEnabled: !1,
        storageLocation: h,
        clipsQuality: { resolution: p.on.RESOLUTION_1080, frameRate: p.kn.FPS_30 },
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
    (M.clipsSettings.storageLocation = e), ed.emitChange();
}
function x(e) {
    let { classification: t } = e,
        n = M.hardwareClassification;
    (M.hardwareClassificationVersion = _.V0),
        (M.hardwareClassification = t),
        M.hardwareClassification === d.k9.MEETS_AUTO_ENABLE &&
            n !== d.k9.MEETS_AUTO_ENABLE &&
            (M.clipsSettings.clipsEnabled = !0);
    let r = M.hardwareClassificationForDecoupled;
    (M.hardwareClassificationForDecoupled = t),
        M.hardwareClassificationForDecoupled === d.k9.MEETS_AUTO_ENABLE &&
            r !== d.k9.MEETS_AUTO_ENABLE &&
            M.clipsSettings.clipsEnabled &&
            (M.clipsSettings.decoupledClipsEnabled = !0);
}
function k(e) {
    let { clip: t } = e;
    t.isCandidate ? (A[t.id] = t) : (g[t.id] = t);
}
function U(e) {
    let { settings: t } = e;
    M = { ...M, clipsSettings: { ...M.clipsSettings, ...t } };
}
function G(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((y += 1), (M.hasTakenDecoupledClip = M.hasTakenDecoupledClip || t === _.Fv.DECOUPLED), null != n && null != r)
    ) {
        let e = Date.now();
        (b = b ?? e), (D[n] = [...(D[n] ?? []), { timestamp: e, thumbnail: r }]);
    }
}
function F(e) {
    let { streamKey: t, timestamp: n } = e;
    b === n && (b = null), null == n ? (D[t] = []) : (D[t] = D[t].filter((e) => e.timestamp !== n));
}
function V() {
    y = Math.max(y - 1, 0);
}
function B(e) {
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
    (N = { applicationName: t.applicationName, ended: !1, ...N, newClipIds: [...(N?.newClipIds ?? []), t.id] }),
        (M = { ...M, newClipIds: [...(M.newClipIds ?? []), t.id] }),
        (I = I.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        (E = E.filter((e) => e !== t.id)),
        (g[t.id] = t),
        (E = [t.id, ...E]),
        (M.hasClips = !0);
}
function H(e) {
    let { clip: t } = e;
    T = [t, ...T];
}
function j(e) {
    let { clipId: t } = e;
    T = T.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function Y(e) {
    let { clip: t } = e;
    (N = { applicationName: t.applicationName, ...N, ended: !0, newClipIds: [...(N?.newClipIds ?? []), t.id] }),
        (M = { ...M, newClipIds: [...(M.newClipIds ?? []), t.id] }),
        (S = S.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        delete A[t.id],
        (g[t.id] = t),
        (E = [t.id, ...E]),
        (M.hasClips = !0);
}
function W(e) {
    let { clip: t } = e;
    I = [t, ...I];
}
function K(e) {
    let { clipId: t } = e;
    I = I.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function $(e) {
    let { channelId: t } = e;
    v = t;
}
function z(e) {
    let { channelId: t } = e;
    t !== v && (v = null);
}
function q(e) {
    let { applicationName: t } = e;
    if (((R = null), !M.clipsSettings.clipsEnabled)) return !1;
    N = { applicationName: t, newClipIds: [], ended: !1 };
}
function Z(e) {
    let { errMsg: t } = e;
    R = t;
}
function X(e) {
    let { sourceName: t, pid: n } = e;
    if (!M.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        let e = o.Ay.getGameForPID(n);
        r = e?.name ?? r;
    }
    if (null == r || "" === r) return !1;
    N = { applicationName: r, newClipIds: [], ended: !1 };
}
function Q(e) {
    let { streamKey: t } = e;
    if (((b = null), (D[t] = []), null == N || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
    N = 0 === N.newClipIds.length ? null : { ...N, ended: !0 };
}
function J(e) {
    for (let t of ((E = []), (S = []), e.clips))
        t.isCandidate ? ((A[t.id] = t), S.push(t)) : ((g[t.id] = t), E.push(t.id));
    M.hasClips = E.length > 0;
}
function ee(e) {
    (E = E.filter((t) => e.id !== t)),
        (S = S.filter((t) => {
            let { id: n } = t;
            return e.id !== n;
        })),
        delete A[e.id],
        delete g[e.id],
        0 === E.length && (M.hasClips = !1);
}
function et() {
    if (null == N) return !1;
    N = null;
}
function en() {
    M.newClipIds = [];
}
function er(e) {
    C[e.userId] = {
        clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
        allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function ei(e) {
    let { added: t } = e;
    t.length > 0 && (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function es(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.P4.Error:
            R = null;
            break;
        case _.P4.Disabled:
        case _.P4.Enabled:
            (M.clipsEducationState.dismissedAt = Date.now()),
                (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (M.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function ea(e) {
    let { clipIds: t } = e;
    O = t ?? [];
}
function eo(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId() || null == t) return !1;
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
function el(e) {
    return eo(e.channelId, e.message.content, e.message.author?.id);
}
function eu(e) {
    let t = !1;
    for (let n of e.messages) t = t || eo(e.channelId, n.content, n.author?.id);
    return t;
}
class ec extends i.Ay.DeviceSettingsStore {
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
        return E.map((e) => g[e]);
    }
    getClipIds() {
        return E;
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
        return N;
    }
    getClipsWarningShown(e) {
        return v === e;
    }
    getActiveAnimation() {
        return b;
    }
    getStreamClipAnimations(e) {
        return D[e] ?? m;
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
        return R;
    }
    isClipsEnabledForUser(e) {
        return C[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return C[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return C[e]?.allowAnyViewerClips ?? !1;
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
        return O.includes(e);
    }
    getExportingClipIds() {
        return O;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let n of E) {
            let r = g[n];
            if (
                (null != t && n === t) ||
                (null != e &&
                    r.decision?.signal?.type === d.Gy.DISTRIBUTED &&
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
let ed = new ec(s.h, {
        CLIPS_SETTINGS_UPDATE: U,
        CLIPS_SAVE_CLIP: B,
        CLIPS_SAVE_CLIP_CANDIDATE: H,
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: j,
        CLIPS_PROMOTE_CLIP_CANDIDATE: Y,
        CLIPS_SAVE_CLIP_PLACEHOLDER: W,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: K,
        CLIPS_SAVE_CLIP_START: G,
        CLIPS_SAVE_CLIP_ERROR: V,
        CLIPS_SAVE_ANIMATION_END: F,
        STREAM_START: X,
        STREAM_STOP: Q,
        CLIPS_CLEAR_CLIPS_SESSION: et,
        CLIPS_CLEAR_NEW_CLIP_IDS: en,
        CLIPS_LOAD_DIRECTORY_SUCCESS: J,
        CLIPS_DELETE_CLIP: ee,
        CLIPS_UPDATE_METADATA: k,
        RTC_CONNECTION_FLAGS: er,
        CLIPS_SHOW_CALL_WARNING: $,
        VOICE_CHANNEL_SELECT: z,
        CLIPS_CLASSIFY_HARDWARE: x,
        CLIPS_INIT: q,
        CLIPS_INIT_FAILURE: Z,
        CLIPS_DISMISS_EDUCATION: es,
        RUNNING_GAMES_CHANGE: ei,
        CLIPS_SET_EXPORTING: ea,
        MESSAGE_CREATE: el,
        LOAD_MESSAGES_SUCCESS: eu,
    }),
    e_ = ed;
