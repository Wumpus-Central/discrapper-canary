"use strict";
n.d(t, { A: () => es }), n(938796);
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
    g = [],
    A = 0,
    I = null,
    T = null,
    S = {},
    y = null,
    v = [],
    N = null,
    C = {},
    b = new Map(),
    R = {
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
        mlPipelinesEnabled: { emotionClassifier: !0, wakeWordDetector: !1, yellDetector: !0, whisperTranscription: !0 },
        autoClipPhrases: ["clip that", "clip it", "clip clip"],
    },
    O = {
        clipsSettings: R,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function D() {
    if (O.clipsSettings.storageLocation !== h || null == a.A || null == a.A.remoteApp) return;
    let e = await a.A.remoteApp.getPath("documents");
    (O.clipsSettings.storageLocation = e), ei.emitChange();
}
function L(e) {
    let { classification: t } = e,
        n = O.hardwareClassification;
    (O.hardwareClassificationVersion = _.V0),
        (O.hardwareClassification = t),
        O.hardwareClassification === d.k9.MEETS_AUTO_ENABLE &&
            n !== d.k9.MEETS_AUTO_ENABLE &&
            (O.clipsSettings.clipsEnabled = !0);
    let r = O.hardwareClassificationForDecoupled;
    (O.hardwareClassificationForDecoupled = t),
        O.hardwareClassificationForDecoupled === d.k9.MEETS_AUTO_ENABLE &&
            r !== d.k9.MEETS_AUTO_ENABLE &&
            O.clipsSettings.clipsEnabled &&
            (O.clipsSettings.decoupledClipsEnabled = !0);
}
function w(e) {
    let { clip: t } = e;
    for (let [e, n] of E.entries())
        if (n.id === t.id) {
            (E[e] = t), (E = [...E]);
            return;
        }
}
function x(e) {
    let { settings: t } = e;
    O = { ...O, clipsSettings: { ...O.clipsSettings, ...t } };
}
function M(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((A += 1), (O.hasTakenDecoupledClip = O.hasTakenDecoupledClip || t === _.Fv.DECOUPLED), null != n && null != r)
    ) {
        let e = Date.now();
        (N = N ?? e), (C[n] = [...(C[n] ?? []), { timestamp: e, thumbnail: r }]);
    }
}
function P(e) {
    let { streamKey: t, timestamp: n } = e;
    N === n && (N = null), null == n ? (C[t] = []) : (C[t] = C[t].filter((e) => e.timestamp !== n));
}
function k() {
    A = Math.max(A - 1, 0);
}
function U(e) {
    let { clip: t } = e;
    (A = Math.max(A - 1, 0)),
        (T = { applicationName: t.applicationName, ended: !1, ...T, newClipIds: [...(T?.newClipIds ?? []), t.id] }),
        (O = { ...O, newClipIds: [...(O.newClipIds ?? []), t.id] }),
        (g = g.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        (E = [t, ...E]),
        (O.hasClips = !0);
}
function G(e) {
    let { clip: t } = e;
    g = [t, ...g];
}
function F(e) {
    let { clipId: t } = e;
    g = g.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function V(e) {
    let { channelId: t } = e;
    I = t;
}
function B(e) {
    let { channelId: t } = e;
    t !== I && (I = null);
}
function H(e) {
    let { applicationName: t } = e;
    if (((y = null), !O.clipsSettings.clipsEnabled)) return !1;
    T = { applicationName: t, newClipIds: [], ended: !1 };
}
function j(e) {
    let { errMsg: t } = e;
    y = t;
}
function Y(e) {
    let { sourceName: t, pid: n } = e;
    if (!O.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        let e = o.Ay.getGameForPID(n);
        r = e?.name ?? r;
    }
    if (null == r || "" === r) return !1;
    T = { applicationName: r, newClipIds: [], ended: !1 };
}
function W(e) {
    let { streamKey: t } = e;
    if (((N = null), (C[t] = []), null == T || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
    T = 0 === T.newClipIds.length ? null : { ...T, ended: !0 };
}
function K(e) {
    (O.hasClips = e.clips.length > 0), (E = e.clips);
}
function z(e) {
    0 ===
        (E = E.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (O.hasClips = !1);
}
function $() {
    if (null == T) return !1;
    T = null;
}
function q() {
    O.newClipIds = [];
}
function Z(e) {
    S[e.userId] = {
        clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
        allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function X(e) {
    let { added: t } = e;
    t.length > 0 && (O.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function Q(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.P4.Error:
            y = null;
            break;
        case _.P4.Disabled:
        case _.P4.Enabled:
            (O.clipsEducationState.dismissedAt = Date.now()),
                (O.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                (O.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
function J(e) {
    let { clipIds: t } = e;
    v = t ?? [];
}
function ee(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            s = t.substring(n),
            a = JSON.parse(s);
        if (null == a.id) return !1;
        let o = b.get(e);
        return null == o && ((o = new Set()), b.set(e, o)), o.add(a.id), !0;
    } catch (e) {
        return !1;
    }
}
function et(e) {
    return ee(e.channelId, e.message.content, e.message.author?.id);
}
function en(e) {
    let t = !1;
    for (let n of e.messages) t = t || ee(e.channelId, n.content, n.author?.id);
    return t;
}
class er extends i.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : R, newClipsCount: 0 }),
        (e) => {
            let t = { ...R, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: R.decoupledClipsEnabled } }),
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
                        ? R.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? R.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? R.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? R.clipSignals,
                mlPipelinesEnabled: e.clipsSettings.mlPipelinesEnabled ?? R.mlPipelinesEnabled,
                autoClipPhrases: e.clipsSettings.autoClipPhrases ?? R.autoClipPhrases,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                autoClipPhrases:
                    0 === e.clipsSettings.autoClipPhrases.length ? R.autoClipPhrases : e.clipsSettings.autoClipPhrases,
            },
        }),
    ];
    initialize(e) {
        null != e && (O = e), D(), this.waitFor(o.Ay);
    }
    getClips() {
        return E;
    }
    getPendingClips() {
        return g;
    }
    getUserAgnosticState() {
        return O;
    }
    getSettings() {
        return O.clipsSettings;
    }
    getLastClipsSession() {
        return T;
    }
    getClipsWarningShown(e) {
        return I === e;
    }
    getActiveAnimation() {
        return N;
    }
    getStreamClipAnimations(e) {
        return C[e] ?? m;
    }
    hasAnyClipAnimations() {
        return Object.values(C).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return O.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return O.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return O.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return A >= _.VP;
    }
    getLastClipsError() {
        return y;
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
        return O.hasClips;
    }
    hasTakenDecoupledClip() {
        return O.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return O.newClipIds;
    }
    isClipExporting(e) {
        return v.includes(e);
    }
    getExportingClipIds() {
        return v;
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
        let n = b.get(t);
        return n?.has(e) ?? !1;
    }
}
let ei = new er(s.h, {
        CLIPS_SETTINGS_UPDATE: x,
        CLIPS_SAVE_CLIP: U,
        CLIPS_SAVE_CLIP_PLACEHOLDER: G,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: F,
        CLIPS_SAVE_CLIP_START: M,
        CLIPS_SAVE_CLIP_ERROR: k,
        CLIPS_SAVE_ANIMATION_END: P,
        STREAM_START: Y,
        STREAM_STOP: W,
        CLIPS_CLEAR_CLIPS_SESSION: $,
        CLIPS_CLEAR_NEW_CLIP_IDS: q,
        CLIPS_LOAD_DIRECTORY_SUCCESS: K,
        CLIPS_DELETE_CLIP: z,
        CLIPS_UPDATE_METADATA: w,
        RTC_CONNECTION_FLAGS: Z,
        CLIPS_SHOW_CALL_WARNING: V,
        VOICE_CHANNEL_SELECT: B,
        CLIPS_CLASSIFY_HARDWARE: L,
        CLIPS_INIT: H,
        CLIPS_INIT_FAILURE: j,
        CLIPS_DISMISS_EDUCATION: Q,
        RUNNING_GAMES_CHANGE: X,
        CLIPS_SET_EXPORTING: J,
        MESSAGE_CREATE: et,
        LOAD_MESSAGES_SUCCESS: en,
    }),
    es = ei;
