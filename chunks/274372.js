"use strict";
n.d(t, { A: () => es }), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(77729),
    o = n(15285),
    l = n(652896),
    u = n(961350);
n(741394);
var c = n(734066),
    d = n(372684),
    _ = n(696016),
    f = n(652215),
    h = n(753070);
let p = "default",
    g = [],
    E = [],
    A = [],
    I = 0,
    T = null,
    y = null,
    S = {},
    v = null,
    C = [],
    b = null,
    N = {},
    R = new Map(),
    O = {
        clipsEnabled: !1,
        storageLocation: p,
        clipsQuality: { resolution: h.on.RESOLUTION_1080, frameRate: h.kn.FPS_30 },
        clipsLength: _.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.on.ALL,
        maxAutoClips: _.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        mlPipelinesEnabled: { emotionClassifier: !0, wakeWordDetector: !1, yellDetector: !0, whisperTranscription: !0 },
        autoClipPhrases: ["clip that", "clip it", "clip clip"],
    },
    D = {
        clipsSettings: O,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function L() {
    if (D.clipsSettings.storageLocation !== p || null == s.A || null == s.A.remoteApp) return;
    let e = await s.A.remoteApp.getPath("documents");
    (D.clipsSettings.storageLocation = e), ea.emitChange();
}
function w(e) {
    let { classification: t } = e,
        n = D.hardwareClassification;
    (D.hardwareClassificationVersion = _.V0),
        (D.hardwareClassification = t),
        D.hardwareClassification === d.k9.MEETS_AUTO_ENABLE &&
            n !== d.k9.MEETS_AUTO_ENABLE &&
            (D.clipsSettings.clipsEnabled = !0);
    let r = D.hardwareClassificationForDecoupled;
    (D.hardwareClassificationForDecoupled = t),
        D.hardwareClassificationForDecoupled === d.k9.MEETS_AUTO_ENABLE &&
            r !== d.k9.MEETS_AUTO_ENABLE &&
            D.clipsSettings.clipsEnabled &&
            (D.clipsSettings.decoupledClipsEnabled = !0);
}
function x(e) {
    let { clip: t } = e;
    for (let [e, n] of E.entries())
        if (n.id === t.id) {
            (E[e] = t), (E = [...E]);
            return;
        }
}
function P(e) {
    let { settings: t } = e;
    D = { ...D, clipsSettings: { ...D.clipsSettings, ...t } };
}
function M(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((I += 1), (D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === _.Fv.DECOUPLED), null != n && null != r)
    ) {
        let e = Date.now();
        (b = b ?? e), (N[n] = [...(N[n] ?? []), { timestamp: e, thumbnail: r }]);
    }
}
function k(e) {
    let { streamKey: t, timestamp: n } = e;
    b === n && (b = null), null == n ? (N[t] = []) : (N[t] = N[t].filter((e) => e.timestamp !== n));
}
function U() {
    I = Math.max(I - 1, 0);
}
function G(e) {
    let { clip: t } = e;
    (I = Math.max(I - 1, 0)),
        (y = { applicationName: t.applicationName, ended: !1, ...y, newClipIds: [...(y?.newClipIds ?? []), t.id] }),
        (D = { ...D, newClipIds: [...(D.newClipIds ?? []), t.id] }),
        (A = A.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        (E = [t, ...E]),
        (D.hasClips = !0);
}
function F(e) {
    let { clip: t } = e;
    A = [t, ...A];
}
function V(e) {
    let { clipId: t } = e;
    A = A.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function B(e) {
    let { channelId: t } = e;
    T = t;
}
function j(e) {
    let { channelId: t } = e;
    t !== T && (T = null);
}
function H(e) {
    let { applicationName: t } = e;
    if (((v = null), !D.clipsSettings.clipsEnabled)) return !1;
    y = { applicationName: t, newClipIds: [], ended: !1 };
}
function Y(e) {
    let { errMsg: t } = e;
    v = t;
}
function W(e) {
    let { sourceName: t, pid: n } = e;
    if (!D.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        let e = o.Ay.getGameForPID(n);
        r = e?.name ?? r;
    }
    if (null == r || "" === r) return !1;
    y = { applicationName: r, newClipIds: [], ended: !1 };
}
function K(e) {
    let { streamKey: t } = e;
    if (((b = null), (N[t] = []), null == y || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
    y = 0 === y.newClipIds.length ? null : { ...y, ended: !0 };
}
function $(e) {
    (D.hasClips = e.clips.length > 0), (E = e.clips);
}
function z(e) {
    0 ===
        (E = E.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (D.hasClips = !1);
}
function q() {
    if (null == y) return !1;
    y = null;
}
function X() {
    D.newClipIds = [];
}
function Z(e) {
    S[e.userId] = {
        clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
        allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function Q(e) {
    let { added: t } = e;
    t.length > 0 && (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function J(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.P4.Error:
            v = null;
            break;
        case _.P4.Disabled:
        case _.P4.Enabled:
            (D.clipsEducationState.dismissedAt = Date.now()),
                (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (D.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function ee(e) {
    let { clipIds: t } = e;
    C = t ?? [];
}
function et(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            a = t.substring(n),
            s = JSON.parse(a);
        if (null == s.id) return !1;
        let o = R.get(e);
        return null == o && ((o = new Set()), R.set(e, o)), o.add(s.id), !0;
    } catch (e) {
        return !1;
    }
}
function en(e) {
    return et(e.channelId, e.message.content, e.message.author?.id);
}
function er(e) {
    let t = !1;
    for (let n of e.messages) t = t || et(e.channelId, n.content, n.author?.id);
    return t;
}
class ei extends i.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : O, newClipsCount: 0 }),
        (e) => {
            let t = { ...O, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: O.decoupledClipsEnabled } }),
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
                        ? O.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? O.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? O.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? O.clipSignals,
                mlPipelinesEnabled: e.clipsSettings.mlPipelinesEnabled ?? O.mlPipelinesEnabled,
                autoClipPhrases: e.clipsSettings.autoClipPhrases ?? O.autoClipPhrases,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                autoClipPhrases:
                    0 === e.clipsSettings.autoClipPhrases.length ? O.autoClipPhrases : e.clipsSettings.autoClipPhrases,
            },
        }),
    ];
    initialize(e) {
        null != e && (D = e), L(), this.waitFor(o.Ay);
    }
    getClips() {
        return E;
    }
    getPendingClips() {
        return A;
    }
    getUserAgnosticState() {
        return D;
    }
    getSettings() {
        return D.clipsSettings;
    }
    getLastClipsSession() {
        return y;
    }
    getClipsWarningShown(e) {
        return T === e;
    }
    getActiveAnimation() {
        return b;
    }
    getStreamClipAnimations(e) {
        return N[e] ?? g;
    }
    hasAnyClipAnimations() {
        return Object.values(N).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return D.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return D.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return D.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return I >= _.VP;
    }
    getLastClipsError() {
        return v;
    }
    isClipsEnabledForUser(e) {
        return S[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return S[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return S[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return D.hasClips;
    }
    hasTakenDecoupledClip() {
        return D.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return D.newClipIds;
    }
    isClipExporting(e) {
        return C.includes(e);
    }
    getExportingClipIds() {
        return C;
    }
    getMatchingGroupClip(e, t) {
        if (null == e && null == t) return null;
        for (let n of E)
            if (
                (null != t && n.id === t) ||
                (null != e &&
                    n.decision?.signal?.type === d.Gy.DISTRIBUTED &&
                    n.decision?.signal?.remoteTriggerClipId === e)
            )
                return n;
        return null;
    }
    wasClipSharedInChannel(e, t) {
        let n = R.get(t);
        return n?.has(e) ?? !1;
    }
}
let ea = new ei(a.h, {
        CLIPS_SETTINGS_UPDATE: P,
        CLIPS_SAVE_CLIP: G,
        CLIPS_SAVE_CLIP_PLACEHOLDER: F,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
        CLIPS_SAVE_CLIP_START: M,
        CLIPS_SAVE_CLIP_ERROR: U,
        CLIPS_SAVE_ANIMATION_END: k,
        STREAM_START: W,
        STREAM_STOP: K,
        CLIPS_CLEAR_CLIPS_SESSION: q,
        CLIPS_CLEAR_NEW_CLIP_IDS: X,
        CLIPS_LOAD_DIRECTORY_SUCCESS: $,
        CLIPS_DELETE_CLIP: z,
        CLIPS_UPDATE_METADATA: x,
        RTC_CONNECTION_FLAGS: Z,
        CLIPS_SHOW_CALL_WARNING: B,
        VOICE_CHANNEL_SELECT: j,
        CLIPS_CLASSIFY_HARDWARE: w,
        CLIPS_INIT: H,
        CLIPS_INIT_FAILURE: Y,
        CLIPS_DISMISS_EDUCATION: J,
        RUNNING_GAMES_CHANGE: Q,
        CLIPS_SET_EXPORTING: ee,
        MESSAGE_CREATE: en,
        LOAD_MESSAGES_SUCCESS: er,
    }),
    es = ea;
