var i,
    a = r(47120);
var o = r(789020);
var s = r(442837),
    l = r(570140),
    u = r(579806),
    c = r(594190),
    d = r(569545),
    f = r(314897),
    p = r(594174),
    h = r(630388),
    _ = r(358085),
    m = r(894694),
    g = r(356659),
    E = r(981631),
    v = r(37113);
function y(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = 'default',
    I = [],
    T = [],
    S = [],
    A = 0,
    C = null,
    N = null,
    R = {},
    O = null,
    D = null,
    x = {},
    L = {
        clipsEnabled: !1,
        storageLocation: b,
        clipsQuality: {
            resolution: v.LY.RESOLUTION_1080,
            frameRate: v.ws.FPS_30
        },
        clipsLength: g.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: g.dJ.ALL
    },
    w = {
        clipsSettings: L,
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
async function P() {
    if (w.clipsSettings.storageLocation !== b || null == u.Z || null == u.Z.remoteApp) return;
    let e = await u.Z.remoteApp.getPath('documents');
    (w.clipsSettings.storageLocation = e), ei.emitChange();
}
function M(e) {
    let { classification: n } = e,
        r = w.hardwareClassification;
    (w.hardwareClassificationVersion = g.WM), (w.hardwareClassification = n), w.hardwareClassification === m.x.MEETS_AUTO_ENABLE && r !== m.x.MEETS_AUTO_ENABLE && (w.clipsSettings.clipsEnabled = !0);
    let i = w.hardwareClassificationForDecoupled;
    (w.hardwareClassificationForDecoupled = n), w.hardwareClassificationForDecoupled === m.x.MEETS_AUTO_ENABLE && i !== m.x.MEETS_AUTO_ENABLE && w.clipsSettings.clipsEnabled && (w.clipsSettings.decoupledClipsEnabled = !0);
}
function k(e) {
    let { clip: n } = e;
    for (let [e, r] of T.entries())
        if (r.id === n.id) {
            (T[e] = n), (T = [...T]);
            return;
        }
}
function U(e) {
    let { settings: n } = e;
    w = {
        ...w,
        clipsSettings: {
            ...w.clipsSettings,
            ...n
        }
    };
}
function B(e) {
    let { clipType: n, streamKey: r, thumbnail: i } = e;
    if (((A += 1), (w.hasTakenDecoupledClip = w.hasTakenDecoupledClip || n === g.X9.DECOUPLED), null != r && null != i)) {
        var a;
        let e = Date.now();
        (D = null != D ? D : e),
            (x[r] = [
                ...(null !== (a = x[r]) && void 0 !== a ? a : []),
                {
                    timestamp: e,
                    thumbnail: i
                }
            ]);
    }
}
function G(e) {
    let { streamKey: n, timestamp: r } = e;
    D === r && (D = null), null == r ? (x[n] = []) : (x[n] = x[n].filter((e) => e.timestamp !== r));
}
function Z() {
    A = Math.max(A - 1, 0);
}
function F(e) {
    var n, r;
    let { clip: i } = e;
    (A = Math.max(A - 1, 0)),
        (N = {
            applicationName: i.applicationName,
            ended: !1,
            ...N,
            newClipIds: [...(null !== (n = null == N ? void 0 : N.newClipIds) && void 0 !== n ? n : []), i.id]
        }),
        (w = {
            ...w,
            newClipIds: [...(null !== (r = w.newClipIds) && void 0 !== r ? r : []), i.id]
        }),
        (S = S.filter((e) => {
            let { id: n } = e;
            return n !== i.id;
        })),
        (T = [i, ...T]),
        (w.hasClips = !0);
}
function V(e) {
    let { clip: n } = e;
    S = [n, ...S];
}
function j(e) {
    let { clipId: n } = e;
    S = S.filter((e) => {
        let { id: r } = e;
        return r !== n;
    });
}
function H(e) {
    let { channelId: n } = e;
    C = n;
}
function Y(e) {
    let { channelId: n } = e;
    n !== C && (C = null);
}
function W(e) {
    let { applicationName: n } = e;
    if (((O = null), !w.clipsSettings.clipsEnabled)) return !1;
    N = {
        applicationName: n,
        newClipIds: [],
        ended: !1
    };
}
function K(e) {
    let { errMsg: n } = e;
    O = n;
}
function z(e) {
    let { sourceName: n, pid: r } = e;
    if (!w.clipsSettings.clipsEnabled) return !1;
    let i = n;
    if (null != r) {
        var a;
        let e = c.ZP.getGameForPID(r);
        i = null !== (a = null == e ? void 0 : e.name) && void 0 !== a ? a : i;
    }
    if (null == i || '' === i) return !1;
    N = {
        applicationName: i,
        newClipIds: [],
        ended: !1
    };
}
function q(e) {
    let { streamKey: n } = e;
    if (((D = null), (x[n] = []), null == N || (0, d.my)(n).ownerId !== f.default.getId())) return !1;
    N =
        0 === N.newClipIds.length
            ? null
            : {
                  ...N,
                  ended: !0
              };
}
function Q(e) {
    (w.hasClips = e.clips.length > 0), (T = e.clips);
}
function X(e) {
    0 ===
        (T = T.filter((n) => {
            let { filepath: r } = n;
            return r !== e.filepath;
        })).length && (w.hasClips = !1);
}
function J() {
    if (null == N) return !1;
    N = null;
}
function $() {
    w.newClipIds = [];
}
function ee(e) {
    R[e.userId] = {
        clipsEnabled: (0, h.yE)(e.flags, E.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, h.yE)(e.flags, E.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, h.yE)(e.flags, E.BVn.ALLOW_ANY_VIEWER_CLIPS)
    };
}
function et(e) {
    let { added: n } = e;
    n.length > 0 && (w.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function en(e) {
    let { educationType: n } = e;
    switch (n) {
        case g.D5.Error:
            O = null;
            break;
        case g.D5.Disabled:
        case g.D5.Enabled:
            (w.clipsEducationState.dismissedAt = Date.now()), (w.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (w.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
class er extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (w = e), P(), this.waitFor(c.ZP);
    }
    getClips() {
        return T;
    }
    getPendingClips() {
        return S;
    }
    getUserAgnosticState() {
        return w;
    }
    getSettings() {
        return w.clipsSettings;
    }
    getLastClipsSession() {
        return N;
    }
    getClipsWarningShown(e) {
        return C === e;
    }
    getActiveAnimation() {
        return D;
    }
    getStreamClipAnimations(e) {
        var n;
        return null !== (n = x[e]) && void 0 !== n ? n : I;
    }
    hasAnyClipAnimations() {
        return Object.values(x).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return w.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return w.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return w.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return A >= g.Kw;
    }
    getLastClipsError() {
        return O;
    }
    isClipsEnabledForUser(e) {
        var n, r;
        return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n.clipsEnabled) && void 0 !== r && r;
    }
    isVoiceRecordingAllowedForUser(e) {
        var n, r;
        return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n.allowVoiceRecording) && void 0 !== r && r;
    }
    isViewerClippingAllowedForUser(e) {
        var n, r;
        return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n.allowAnyViewerClips) && void 0 !== r && r;
    }
    isDecoupledGameClippingEnabled() {
        var e, n;
        return null !== (n = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n && (0, _.isWindows)();
    }
    hasClips() {
        return w.hasClips;
    }
    hasTakenDecoupledClip() {
        return w.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return w.newClipIds;
    }
}
y(er, 'displayName', 'ClipsStore'),
    y(er, 'persistKey', 'ClipsStore'),
    y(er, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : L,
            newClipsCount: 0
        }),
        (e) => {
            let n = {
                ...L,
                ...e.clipsSettings
            };
            return {
                ...e,
                clipsSettings: n
            };
        },
        (e) => {
            var n;
            return {
                ...e,
                newClipIds: null !== (n = e.newClipIds) && void 0 !== n ? n : []
            };
        },
        (e) => {
            var n, r;
            return {
                ...e,
                hardwareClassification: null !== (n = e.hardwareClassification) && void 0 !== n ? n : null,
                hardwareClassificationVersion: null !== (r = e.hardwareClassificationVersion) && void 0 !== r ? r : 0
            };
        },
        (e) => {
            var n;
            return {
                ...e,
                hasClips: null !== (n = e.hasClips) && void 0 !== n && n
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                decoupledClipsEnabled: L.decoupledClipsEnabled
            }
        }),
        (e) => {
            var n;
            return {
                ...e,
                hardwareClassificationForDecoupled: null !== (n = e.hardwareClassificationForDecoupled) && void 0 !== n ? n : null
            };
        },
        (e) => {
            var n;
            let i = null === (n = r(131951).Z) || void 0 === n ? void 0 : n.getHardwareEncoding();
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
            var n;
            return {
                ...e,
                newClipIds: null !== (n = e.newClipIds) && void 0 !== n ? n : [],
                newClipIDs: void 0
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var n;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (n = e.clipsSettings.remindersEnabled) && void 0 !== n ? n : L.remindersEnabled
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
let ei = new er(l.Z, {
    CLIPS_SETTINGS_UPDATE: U,
    CLIPS_SAVE_CLIP: F,
    CLIPS_SAVE_CLIP_PLACEHOLDER: V,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: j,
    CLIPS_SAVE_CLIP_START: B,
    CLIPS_SAVE_CLIP_ERROR: Z,
    CLIPS_SAVE_ANIMATION_END: G,
    STREAM_START: z,
    STREAM_STOP: q,
    CLIPS_CLEAR_CLIPS_SESSION: J,
    CLIPS_CLEAR_NEW_CLIP_IDS: $,
    CLIPS_LOAD_DIRECTORY_SUCCESS: Q,
    CLIPS_DELETE_CLIP: X,
    CLIPS_UPDATE_METADATA: k,
    RTC_CONNECTION_FLAGS: ee,
    CLIPS_SHOW_CALL_WARNING: H,
    VOICE_CHANNEL_SELECT: Y,
    CLIPS_CLASSIFY_HARDWARE: M,
    CLIPS_INIT: W,
    CLIPS_INIT_FAILURE: K,
    CLIPS_DISMISS_EDUCATION: en,
    RUNNING_GAMES_CHANGE: et
});
n.Z = ei;
