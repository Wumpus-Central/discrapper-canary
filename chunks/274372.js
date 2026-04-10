"use strict";
n.d(t, { A: () => ea }), n(321073), n(938796);
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
    A = [],
    I = 0,
    T = null,
    S = null,
    y = {},
    v = null,
    N = [],
    C = null,
    R = {},
    O = new Map(),
    b = {
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
    D = {
        clipsSettings: b,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function L() {
    if (D.clipsSettings.storageLocation !== h || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    (D.clipsSettings.storageLocation = e), es.emitChange();
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
function M(e) {
    let { clip: t } = e;
    g[t.id] = t;
}
function x(e) {
    let { settings: t } = e;
    D = { ...D, clipsSettings: { ...D.clipsSettings, ...t } };
}
function P(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (
        ((I += 1), (D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === _.Fv.DECOUPLED), null != n && null != r)
    ) {
        let e = Date.now();
        (C = C ?? e), (R[n] = [...(R[n] ?? []), { timestamp: e, thumbnail: r }]);
    }
}
function k(e) {
    let { streamKey: t, timestamp: n } = e;
    C === n && (C = null), null == n ? (R[t] = []) : (R[t] = R[t].filter((e) => e.timestamp !== n));
}
function U() {
    I = Math.max(I - 1, 0);
}
function G(e) {
    let { clip: t } = e;
    (I = Math.max(I - 1, 0)),
        (S = { applicationName: t.applicationName, ended: !1, ...S, newClipIds: [...(S?.newClipIds ?? []), t.id] }),
        (D = { ...D, newClipIds: [...(D.newClipIds ?? []), t.id] }),
        (A = A.filter((e) => {
            let { id: n } = e;
            return n !== t.id;
        })),
        (E = E.filter((e) => e !== t.id)),
        (g[t.id] = t),
        (E = [t.id, ...E]),
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
function H(e) {
    let { channelId: t } = e;
    t !== T && (T = null);
}
function j(e) {
    let { applicationName: t } = e;
    if (((v = null), !D.clipsSettings.clipsEnabled)) return !1;
    S = { applicationName: t, newClipIds: [], ended: !1 };
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
    S = { applicationName: r, newClipIds: [], ended: !1 };
}
function K(e) {
    let { streamKey: t } = e;
    if (((C = null), (R[t] = []), null == S || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
    S = 0 === S.newClipIds.length ? null : { ...S, ended: !0 };
}
function $(e) {
    for (let t of ((D.hasClips = e.clips.length > 0), (E = []), e.clips)) (g[t.id] = t), E.push(t.id);
}
function z(e) {
    (E = E.filter((t) => e.id !== t)), delete g[e.id], 0 === E.length && (D.hasClips = !1);
}
function q() {
    if (null == S) return !1;
    S = null;
}
function Z() {
    D.newClipIds = [];
}
function X(e) {
    y[e.userId] = {
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
    N = t ?? [];
}
function et(e, t, n) {
    if (!(0, c.J)() || n !== u.default.getId() || null == t) return !1;
    let r = "__CLIP_METADATA__",
        i = t.indexOf(r);
    if (-1 === i) return !1;
    try {
        let n = i + r.length,
            s = t.substring(n),
            a = JSON.parse(s);
        if (null == a.id) return !1;
        let o = O.get(e);
        return null == o && ((o = new Set()), O.set(e, o)), o.add(a.id), !0;
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
        null != e && (D = e), L(), this.waitFor(o.Ay);
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
        return A;
    }
    getUserAgnosticState() {
        return D;
    }
    getSettings() {
        return D.clipsSettings;
    }
    getLastClipsSession() {
        return S;
    }
    getClipsWarningShown(e) {
        return T === e;
    }
    getActiveAnimation() {
        return C;
    }
    getStreamClipAnimations(e) {
        return R[e] ?? m;
    }
    hasAnyClipAnimations() {
        return Object.values(R).some((e) => e.length > 0);
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
        return y[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return y[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return y[e]?.allowAnyViewerClips ?? !1;
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
        return N.includes(e);
    }
    getExportingClipIds() {
        return N;
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
        let n = O.get(t);
        return n?.has(e) ?? !1;
    }
}
let es = new ei(s.h, {
        CLIPS_SETTINGS_UPDATE: x,
        CLIPS_SAVE_CLIP: G,
        CLIPS_SAVE_CLIP_PLACEHOLDER: F,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
        CLIPS_SAVE_CLIP_START: P,
        CLIPS_SAVE_CLIP_ERROR: U,
        CLIPS_SAVE_ANIMATION_END: k,
        STREAM_START: W,
        STREAM_STOP: K,
        CLIPS_CLEAR_CLIPS_SESSION: q,
        CLIPS_CLEAR_NEW_CLIP_IDS: Z,
        CLIPS_LOAD_DIRECTORY_SUCCESS: $,
        CLIPS_DELETE_CLIP: z,
        CLIPS_UPDATE_METADATA: M,
        RTC_CONNECTION_FLAGS: X,
        CLIPS_SHOW_CALL_WARNING: B,
        VOICE_CHANNEL_SELECT: H,
        CLIPS_CLASSIFY_HARDWARE: w,
        CLIPS_INIT: j,
        CLIPS_INIT_FAILURE: Y,
        CLIPS_DISMISS_EDUCATION: J,
        RUNNING_GAMES_CHANGE: Q,
        CLIPS_SET_EXPORTING: ee,
        MESSAGE_CREATE: en,
        LOAD_MESSAGES_SUCCESS: er,
    }),
    ea = es;
