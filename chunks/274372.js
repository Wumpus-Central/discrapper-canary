"use strict";
n.d(t, { A: () => ea }), n(938796);
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
    p = n(753070);
let h = "default",
    m = [],
    g = [],
    E = [],
    A = 0,
    I = null,
    T = null,
    y = {},
    S = null,
    v = [],
    C = null,
    b = {},
    N = new Map(),
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
    if (O.clipsSettings.storageLocation !== h || null == s.A || null == s.A.remoteApp) return;
    let e = await s.A.remoteApp.getPath("documents");
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
    for (let [e, n] of g.entries())
        if (n.id === t.id) {
            (g[e] = t), (g = [...g]);
            return;
        }
}
function x(e) {
    let { settings: t } = e;
    O = { ...O, clipsSettings: { ...O.clipsSettings, ...t } };
}
function P(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((A += 1), (O.hasTakenDecoupledClip = O.hasTakenDecoupledClip || t === _.Fv.DECOUPLED), null != n && null != r)
    ) {
        let e = Date.now();
        (C = C ?? e), (b[n] = [...(b[n] ?? []), { timestamp: e, thumbnail: r }]);
    }
}
function M(e) {
    let { streamKey: t, timestamp: n } = e;
    C === n && (C = null), null == n ? (b[t] = []) : (b[t] = b[t].filter((e) => e.timestamp !== n));
}
function k() {
    A = Math.max(A - 1, 0);
}
function U(e) {
    let { clip: t } = e;
    (A = Math.max(A - 1, 0)),
        (T = { applicationName: t.applicationName, ended: !1, ...T, newClipIds: [...(T?.newClipIds ?? []), t.id] }),
        (O = { ...O, newClipIds: [...(O.newClipIds ?? []), t.id] }),
        (E = E.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        (g = [t, ...g]),
        (O.hasClips = !0);
}
function G(e) {
    let { clip: t } = e;
    E = [t, ...E];
}
function V(e) {
    let { clipId: t } = e;
    E = E.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function F(e) {
    let { channelId: t } = e;
    I = t;
}
function B(e) {
    let { channelId: t } = e;
    t !== I && (I = null);
}
function j(e) {
    let { applicationName: t } = e;
    if (((S = null), !O.clipsSettings.clipsEnabled)) return !1;
    T = { applicationName: t, newClipIds: [], ended: !1 };
}
function H(e) {
    let { errMsg: t } = e;
    S = t;
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
    if (((C = null), (b[t] = []), null == T || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
    T = 0 === T.newClipIds.length ? null : { ...T, ended: !0 };
}
function K(e) {
    (O.hasClips = e.clips.length > 0), (g = e.clips);
}
function z(e) {
    0 ===
        (g = g.filter((t) => {
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
    y[e.userId] = {
        clipsEnabled: (0, r.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
        allowVoiceRecording: (0, r.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, r.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
    };
}
function Q(e) {
    let { added: t } = e;
    t.length > 0 && (O.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function X(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.P4.Error:
            S = null;
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
            a = t.substring(n),
            s = JSON.parse(a);
        if (null == s.id) return !1;
        let o = N.get(e);
        return null == o && ((o = new Set()), N.set(e, o)), o.add(s.id), !0;
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
            let t = n(430452).A.getHardwareEncoding();
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
        return g;
    }
    getPendingClips() {
        return E;
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
        return C;
    }
    getStreamClipAnimations(e) {
        return b[e] ?? m;
    }
    hasAnyClipAnimations() {
        return Object.values(b).some((e) => e.length > 0);
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
        return S;
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
        for (let n of g)
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
        let n = N.get(t);
        return n?.has(e) ?? !1;
    }
}
let ei = new er(a.h, {
        CLIPS_SETTINGS_UPDATE: x,
        CLIPS_SAVE_CLIP: U,
        CLIPS_SAVE_CLIP_PLACEHOLDER: G,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
        CLIPS_SAVE_CLIP_START: P,
        CLIPS_SAVE_CLIP_ERROR: k,
        CLIPS_SAVE_ANIMATION_END: M,
        STREAM_START: Y,
        STREAM_STOP: W,
        CLIPS_CLEAR_CLIPS_SESSION: $,
        CLIPS_CLEAR_NEW_CLIP_IDS: q,
        CLIPS_LOAD_DIRECTORY_SUCCESS: K,
        CLIPS_DELETE_CLIP: z,
        CLIPS_UPDATE_METADATA: w,
        RTC_CONNECTION_FLAGS: Z,
        CLIPS_SHOW_CALL_WARNING: F,
        VOICE_CHANNEL_SELECT: B,
        CLIPS_CLASSIFY_HARDWARE: L,
        CLIPS_INIT: j,
        CLIPS_INIT_FAILURE: H,
        CLIPS_DISMISS_EDUCATION: X,
        RUNNING_GAMES_CHANGE: Q,
        CLIPS_SET_EXPORTING: J,
        MESSAGE_CREATE: et,
        LOAD_MESSAGES_SUCCESS: en,
    }),
    ea = ei;
