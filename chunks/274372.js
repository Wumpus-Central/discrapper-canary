"use strict";
n.d(t, { Ay: () => V, _c: () => g, he: () => m }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(952818),
    l = n(652896),
    u = n(495544),
    c = n(287809),
    d = n(741394),
    _ = n(372684),
    h = n(458977),
    f = n(696016),
    p = n(652215),
    E = n(753070);
let m = "default",
    g = "Discord Clips",
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
    b = null,
    D = {},
    L = null,
    w = [],
    M = new Map(),
    P = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: { resolution: E.on.RESOLUTION_1080, frameRate: E.kn.FPS_30 },
        clipsLength: f.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: f.on.ALL,
        maxAutoClips: f.T2,
        clipSignals: { enableDistributedSignals: !0, enablePhraseSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    x = {
        clipsSettings: P,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function k() {
    let e;
    if (x.clipsSettings.storageLocation === m && null != a.A && null != a.A.app) {
        try {
            let t = await a.A.app.getPath("videos");
            e = (0, d.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await a.A.app.getPath("documents"));
        }
        (x.clipsSettings.storageLocation = e), F.emitChange();
    }
}
function U(e, t, n) {
    if (!h.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== u.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = M.get(e);
        null == t && ((t = new Set()), M.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class G extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : P, newClipsCount: 0 }),
        (e) => {
            let t = { ...P, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: P.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(890063).Ay.getHardwareEncoding();
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
                        ? P.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? P.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? P.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? P.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? P.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? P.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (x = e), k(), this.waitFor(o.Ay);
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
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getEnableAutoclipping() {
        let e;
        return (
            x.clipsSettings.enableAutoclipping ??
            (null != (e = c.default.getCurrentUser()) && (0, i.Lt)(e.flags, p.nhx.STAFF))
        );
    }
    getLastClipsSession() {
        return O;
    }
    getCurrentClipsSession() {
        return b;
    }
    getCurrentClipsSessionId() {
        return b?.id ?? null;
    }
    devSetLastClipsSession(e) {
        (O = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return R === e;
    }
    getHardwareClassification() {
        return x.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return x.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return x.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return C >= f.VP;
    }
    getLastClipsError() {
        return L;
    }
    isClipsEnabledForUser(e) {
        return D[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return D[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return D[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return x.hasClips;
    }
    hasTakenDecoupledClip() {
        return x.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return x.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return x.newClipIds;
    }
    isClipExporting(e) {
        return w.includes(e);
    }
    getExportingClipIds() {
        return w;
    }
    wasClipSharedInChannel(e, t) {
        let n = M.get(t);
        return n?.has(e) ?? !1;
    }
}
let F = new G(s.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            x = { ...x, clipsSettings: { ...x.clipsSettings, ...t } };
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
                (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                (y = y.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                (A = A.filter((e) => e !== t.id)),
                (I[t.id] = t),
                null != t.remoteClipId && (S[t.remoteClipId] = t.id),
                (A = [t.id, ...A]),
                (x.hasClips = !0);
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
                (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                (v = v.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete T[t.id],
                (I[t.id] = t),
                (A = [t.id, ...A]),
                (x.hasClips = !0);
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
            let { clipType: t } = e;
            (C += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === f.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            C = Math.max(C - 1, 0);
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!x.clipsSettings.clipsEnabled) return !1;
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
            if (null == O || (0, l.Iy)(t).ownerId !== u.default.getId()) return !1;
            O = 0 === O.newClipIds.length ? null : { ...O, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == O) return !1;
            O = null;
        },
        CLIPS_SESSION_UPDATE: function (e) {
            let { session: t } = e;
            b = t;
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            x.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            x.newClipIds = x.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((A = []), (v = []), e.clips))
                t.isCandidate
                    ? ((T[t.id] = t), v.push(t))
                    : ((I[t.id] = t), A.push(t.id), null != t.remoteClipId && (S[t.remoteClipId] = t.id));
            x.hasClips = A.length > 0;
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
                0 === A.length && (x.hasClips = !1);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (T[t.id] = t) : ((I[t.id] = t), null != t.remoteClipId && (S[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            D[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, p.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, p.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, i.Lt)(e.flags, p.Ajs.ALLOW_ANY_VIEWER_CLIPS),
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
                n = x.hardwareClassification;
            (x.hardwareClassificationVersion = f.V0),
                (x.hardwareClassification = t),
                x.hardwareClassification === _.k9.MEETS_AUTO_ENABLE &&
                    n !== _.k9.MEETS_AUTO_ENABLE &&
                    (x.clipsSettings.clipsEnabled = !0);
            let i = x.hardwareClassificationForDecoupled;
            (x.hardwareClassificationForDecoupled = t),
                x.hardwareClassificationForDecoupled === _.k9.MEETS_AUTO_ENABLE &&
                    i !== _.k9.MEETS_AUTO_ENABLE &&
                    x.clipsSettings.clipsEnabled &&
                    (x.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((L = null), !x.clipsSettings.clipsEnabled)) return !1;
            O = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            L = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case f.P4.Error:
                    L = null;
                    break;
                case f.P4.Disabled:
                case f.P4.Enabled:
                    (x.clipsEducationState.dismissedAt = Date.now()),
                        (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (x.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            w = t ?? [];
        },
        MESSAGE_CREATE: function (e) {
            return U(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || U(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            M.clear(), (O = null), (R = null), (D = {});
        },
    }),
    V = F;
