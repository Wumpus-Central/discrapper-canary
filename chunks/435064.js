n.d(t, { Z: () => en }), n(47120), n(789020);
var i,
    r = n(442837),
    a = n(570140),
    s = n(579806),
    o = n(594190),
    l = n(569545),
    u = n(314897),
    c = n(594174),
    d = n(630388),
    f = n(358085),
    _ = n(894694),
    p = n(356659),
    h = n(981631),
    m = n(37113);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = 'default',
    v = [],
    y = [],
    I = [],
    b = 0,
    T = null,
    S = null,
    A = {},
    N = null,
    C = null,
    R = {},
    O = {
        clipsEnabled: !1,
        storageLocation: E,
        clipsQuality: {
            resolution: m.LY.RESOLUTION_1080,
            frameRate: m.ws.FPS_30
        },
        clipsLength: p.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.dJ.ALL
    },
    D = {
        clipsSettings: O,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: {
            dismissedAt: null,
            numberOfGamesLaunchedSinceDismissal: 0,
            numberOfTimesDismissed: 0
        }
    };
async function x() {
    if (D.clipsSettings.storageLocation !== E || null == s.Z || null == s.Z.remoteApp) return;
    let e = await s.Z.remoteApp.getPath('documents');
    (D.clipsSettings.storageLocation = e), et.emitChange();
}
function L(e) {
    let { classification: t } = e,
        n = D.hardwareClassification;
    (D.hardwareClassificationVersion = p.WM), (D.hardwareClassification = t), D.hardwareClassification === _.x.MEETS_AUTO_ENABLE && n !== _.x.MEETS_AUTO_ENABLE && (D.clipsSettings.clipsEnabled = !0);
    let i = D.hardwareClassificationForDecoupled;
    (D.hardwareClassificationForDecoupled = t), D.hardwareClassificationForDecoupled === _.x.MEETS_AUTO_ENABLE && i !== _.x.MEETS_AUTO_ENABLE && D.clipsSettings.clipsEnabled && (D.clipsSettings.decoupledClipsEnabled = !0);
}
function P(e) {
    let { clip: t } = e;
    for (let [e, n] of y.entries())
        if (n.id === t.id) {
            (y[e] = t), (y = [...y]);
            return;
        }
}
function w(e) {
    let { settings: t } = e;
    D = {
        ...D,
        clipsSettings: {
            ...D.clipsSettings,
            ...t
        }
    };
}
function M(e) {
    let { clipType: t, streamKey: n, thumbnail: i } = e;
    if (((b += 1), (D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === p.X9.DECOUPLED), null != n && null != i)) {
        var r;
        let e = Date.now();
        (C = null != C ? C : e),
            (R[n] = [
                ...(null !== (r = R[n]) && void 0 !== r ? r : []),
                {
                    timestamp: e,
                    thumbnail: i
                }
            ]);
    }
}
function k(e) {
    let { streamKey: t, timestamp: n } = e;
    C === n && (C = null), null == n ? (R[t] = []) : (R[t] = R[t].filter((e) => e.timestamp !== n));
}
function U() {
    b = Math.max(b - 1, 0);
}
function G(e) {
    var t, n;
    let { clip: i } = e;
    (b = Math.max(b - 1, 0)),
        (S = {
            applicationName: i.applicationName,
            ended: !1,
            ...S,
            newClipIds: [...(null !== (t = null == S ? void 0 : S.newClipIds) && void 0 !== t ? t : []), i.id]
        }),
        (D = {
            ...D,
            newClipIds: [...(null !== (n = D.newClipIds) && void 0 !== n ? n : []), i.id]
        }),
        (I = I.filter((e) => {
            let { id: t } = e;
            return t !== i.id;
        })),
        (y = [i, ...y]),
        (D.hasClips = !0);
}
function B(e) {
    let { clip: t } = e;
    I = [t, ...I];
}
function Z(e) {
    let { clipId: t } = e;
    I = I.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function F(e) {
    let { channelId: t } = e;
    T = t;
}
function V(e) {
    let { channelId: t } = e;
    t !== T && (T = null);
}
function j(e) {
    let { applicationName: t } = e;
    if (((N = null), !D.clipsSettings.clipsEnabled)) return !1;
    S = {
        applicationName: t,
        newClipIds: [],
        ended: !1
    };
}
function H(e) {
    let { errMsg: t } = e;
    N = t;
}
function Y(e) {
    let { sourceName: t, pid: n } = e;
    if (!D.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
        var r;
        let e = o.ZP.getGameForPID(n);
        i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i;
    }
    if (null == i || '' === i) return !1;
    S = {
        applicationName: i,
        newClipIds: [],
        ended: !1
    };
}
function W(e) {
    let { streamKey: t } = e;
    if (((C = null), (R[t] = []), null == S || (0, l.my)(t).ownerId !== u.default.getId())) return !1;
    S =
        0 === S.newClipIds.length
            ? null
            : {
                  ...S,
                  ended: !0
              };
}
function K(e) {
    (D.hasClips = e.clips.length > 0), (y = e.clips);
}
function z(e) {
    0 ===
        (y = y.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (D.hasClips = !1);
}
function q() {
    if (null == S) return !1;
    S = null;
}
function Q() {
    D.newClipIds = [];
}
function X(e) {
    A[e.userId] = {
        clipsEnabled: (0, d.yE)(e.flags, h.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, d.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, d.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
    };
}
function J(e) {
    let { added: t } = e;
    t.length > 0 && (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function $(e) {
    let { educationType: t } = e;
    switch (t) {
        case p.D5.Error:
            N = null;
            break;
        case p.D5.Disabled:
        case p.D5.Enabled:
            (D.clipsEducationState.dismissedAt = Date.now()), (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (D.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
class ee extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (D = e), x(), this.waitFor(o.ZP);
    }
    getClips() {
        return y;
    }
    getPendingClips() {
        return I;
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
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : v;
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
        return b >= p.Kw;
    }
    getLastClipsError() {
        return N;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null !== (t = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t && (0, f.isWindows)();
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
}
g(ee, 'displayName', 'ClipsStore'),
    g(ee, 'persistKey', 'ClipsStore'),
    g(ee, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : O,
            newClipsCount: 0
        }),
        (e) => {
            let t = {
                ...O,
                ...e.clipsSettings
            };
            return {
                ...e,
                clipsSettings: t
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
            };
        },
        (e) => {
            var t, n;
            return {
                ...e,
                hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
                hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hasClips: null !== (t = e.hasClips) && void 0 !== t && t
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                decoupledClipsEnabled: O.decoupledClipsEnabled
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            let i = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!i && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!i && e.clipsSettings.decoupledClipsEnabled
                }
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
                newClipIDs: void 0
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? O.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : O.remindersEnabled
                }
            };
        },
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        })
    ]);
let et = new ee(a.Z, {
        CLIPS_SETTINGS_UPDATE: w,
        CLIPS_SAVE_CLIP: G,
        CLIPS_SAVE_CLIP_PLACEHOLDER: B,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Z,
        CLIPS_SAVE_CLIP_START: M,
        CLIPS_SAVE_CLIP_ERROR: U,
        CLIPS_SAVE_ANIMATION_END: k,
        STREAM_START: Y,
        STREAM_STOP: W,
        CLIPS_CLEAR_CLIPS_SESSION: q,
        CLIPS_CLEAR_NEW_CLIP_IDS: Q,
        CLIPS_LOAD_DIRECTORY_SUCCESS: K,
        CLIPS_DELETE_CLIP: z,
        CLIPS_UPDATE_METADATA: P,
        RTC_CONNECTION_FLAGS: X,
        CLIPS_SHOW_CALL_WARNING: F,
        VOICE_CHANNEL_SELECT: V,
        CLIPS_CLASSIFY_HARDWARE: L,
        CLIPS_INIT: j,
        CLIPS_INIT_FAILURE: H,
        CLIPS_DISMISS_EDUCATION: $,
        RUNNING_GAMES_CHANGE: J
    }),
    en = et;
