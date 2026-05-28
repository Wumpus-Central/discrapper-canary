"use strict";
n.d(t, { Ay: () => B, _c: () => m, he: () => E }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(952818),
    l = n(652896),
    u = n(495544),
    c = n(741394),
    d = n(734066),
    _ = n(372684),
    h = n(696016),
    f = n(652215),
    p = n(753070);
let E = "default",
    m = "Discord Clips",
    g = [],
    A = [],
    I = {},
    T = {},
    S = {},
    y = [],
    N = [],
    v = [],
    C = 0,
    R = null,
    O = null,
    b = {},
    D = null,
    L = [],
    w = null,
    M = {},
    P = new Map(),
    x = {
        clipsEnabled: !1,
        storageLocation: E,
        clipsQuality: { resolution: p.on.RESOLUTION_1080, frameRate: p.kn.FPS_30 },
        clipsLength: h.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: h.on.ALL,
        maxAutoClips: h.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
    },
    k = {
        clipsSettings: x,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function U() {
    let e;
    if (k.clipsSettings.storageLocation === E && null != a.A && null != a.A.app) {
        try {
            let t = await a.A.app.getPath("videos");
            e = (0, c.CN)(t, m);
        } catch (t) {
            h.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await a.A.app.getPath("documents"));
        }
        (k.clipsSettings.storageLocation = e), V.emitChange();
    }
}
function G(e, t, n) {
    if (!(0, d.J)() || n !== u.default.getId()) return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = P.get(e);
        null == t && ((t = new Set()), P.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class F extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : x, newClipsCount: 0 }),
        (e) => {
            let t = { ...x, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: x.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(761853).Ay.getHardwareEncoding();
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
                        ? x.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? x.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? x.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? x.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
    ];
    initialize(e) {
        null != e && (k = e), U(), this.waitFor(o.Ay);
    }
    getClips() {
        return A.map((e) => I[e] ?? null).filter((e) => null != e);
    }
    getClipIds() {
        return A;
    }
    getClipById(e) {
        return I[e];
    }
    getClipByRemoteId(e) {
        let t = S[e];
        if (null != t) return I[t];
    }
    getPendingClips() {
        return y;
    }
    getPendingClipCandidates() {
        return N;
    }
    getClipCandidates() {
        return v;
    }
    getClipCandidateById(e) {
        return T[e];
    }
    getUserAgnosticState() {
        return k;
    }
    getSettings() {
        return k.clipsSettings;
    }
    getLastClipsSession() {
        return O;
    }
    getClipsWarningShown(e) {
        return R === e;
    }
    getActiveAnimation() {
        return w;
    }
    getStreamClipAnimations(e) {
        return M[e] ?? g;
    }
    hasAnyClipAnimations() {
        return Object.values(M).some((e) => e.length > 0);
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
        return C >= h.VP;
    }
    getLastClipsError() {
        return D;
    }
    isClipsEnabledForUser(e) {
        return b[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return b[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return b[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return k.hasClips;
    }
    hasTakenDecoupledClip() {
        return k.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return k.clipsSettings.remindersEnabled;
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
let V = new F(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            k = { ...k, clipsSettings: { ...k.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            if (((C = Math.max(C - 1, 0)), t.isCandidate)) {
                (N = N.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                    (v = [t, ...v]),
                    (T[t.id] = t);
                return;
            }
            (O = { applicationName: t.applicationName, ended: !1, ...O, newClipIds: [...(O?.newClipIds ?? []), t.id] }),
                (k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                (y = y.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (A = A.filter((e) => e !== t.id)),
                (I[t.id] = t),
                null != t.remoteClipId && (S[t.remoteClipId] = t.id),
                (A = [t.id, ...A]),
                (k.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            N = [t, ...N];
        },
        CLIPS_SAVE_CLIP_CANDIDATE_ERROR: function (e) {
            let { clipId: t } = e;
            N = N.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (O = { applicationName: t.applicationName, ...O, ended: !0, newClipIds: [...(O?.newClipIds ?? []), t.id] }),
                (k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                (v = v.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete T[t.id],
                (I[t.id] = t),
                (A = [t.id, ...A]),
                (k.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
            let { clip: t } = e;
            y = [t, ...y];
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
            let { clipId: t } = e;
            y = y.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t, streamKey: n, thumbnail: i } = e;
            if (
                ((C += 1),
                (k.hasTakenDecoupledClip = k.hasTakenDecoupledClip || t === h.Fv.DECOUPLED),
                null != n && null != i)
            ) {
                let e = Date.now();
                (w = w ?? e), (M[n] = [...(M[n] ?? []), { timestamp: e, thumbnail: i }]);
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            C = Math.max(C - 1, 0);
        },
        CLIPS_SAVE_ANIMATION_END: function (e) {
            let { streamKey: t, timestamp: n } = e;
            w === n && (w = null), null == n ? (M[t] = []) : (M[t] = M[t].filter((e) => e.timestamp !== n));
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
            O = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (((w = null), (M[t] = []), null == O || (0, l.Iy)(t).ownerId !== u.default.getId())) return !1;
            O = 0 === O.newClipIds.length ? null : { ...O, ended: !0 };
        },
        CLIPS_CLEAR_CLIPS_SESSION: function () {
            if (null == O) return !1;
            O = null;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            k.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            k.newClipIds = k.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((A = []), (v = []), e.clips))
                t.isCandidate
                    ? ((T[t.id] = t), v.push(t))
                    : ((I[t.id] = t), A.push(t.id), null != t.remoteClipId && (S[t.remoteClipId] = t.id));
            k.hasClips = A.length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = I[e.id];
            (A = A.filter((t) => e.id !== t)),
                (v = v.filter((t) => {
                    let { id: n } = t;
                    return e.id !== n;
                })),
                delete T[e.id],
                delete I[e.id],
                t?.remoteClipId != null && delete S[t.remoteClipId],
                0 === A.length && (k.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (T[t.id] = t) : ((I[t.id] = t), null != t.remoteClipId && (S[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            b[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, f.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, f.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, i.Lt)(e.flags, f.Ajs.ALLOW_ANY_VIEWER_CLIPS),
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
            (k.hardwareClassificationVersion = h.V0),
                (k.hardwareClassification = t),
                k.hardwareClassification === _.k9.MEETS_AUTO_ENABLE &&
                    n !== _.k9.MEETS_AUTO_ENABLE &&
                    (k.clipsSettings.clipsEnabled = !0);
            let i = k.hardwareClassificationForDecoupled;
            (k.hardwareClassificationForDecoupled = t),
                k.hardwareClassificationForDecoupled === _.k9.MEETS_AUTO_ENABLE &&
                    i !== _.k9.MEETS_AUTO_ENABLE &&
                    k.clipsSettings.clipsEnabled &&
                    (k.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((D = null), !k.clipsSettings.clipsEnabled)) return !1;
            O = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            D = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case h.P4.Error:
                    D = null;
                    break;
                case h.P4.Disabled:
                case h.P4.Enabled:
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
            return G(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || G(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            P.clear(), (O = null), (R = null), (b = {});
        },
    }),
    B = V;
