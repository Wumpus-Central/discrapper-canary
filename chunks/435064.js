var i,
    a = r(47120);
var s = r(789020);
var o = r(442837),
    l = r(570140),
    u = r(579806),
    c = r(594190),
    d = r(569545),
    f = r(314897),
    _ = r(594174),
    h = r(630388),
    p = r(358085),
    m = r(894694),
    g = r(356659),
    E = r(981631),
    v = r(37113);
function I(e, n, r) {
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
let T = 'default',
    b = [],
    y = [],
    S = [],
    A = 0,
    N = null,
    C = null,
    R = {},
    O = null,
    D = null,
    L = {},
    x = {
        clipsEnabled: !1,
        storageLocation: T,
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
        clipsSettings: x,
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
    if (w.clipsSettings.storageLocation !== T || null == u.Z || null == u.Z.remoteApp) return;
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
    for (let [e, r] of y.entries())
        if (r.id === n.id) {
            (y[e] = n), (y = [...y]);
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
            (L[r] = [
                ...(null !== (a = L[r]) && void 0 !== a ? a : []),
                {
                    timestamp: e,
                    thumbnail: i
                }
            ]);
    }
}
function G(e) {
    let { streamKey: n, timestamp: r } = e;
    D === r && (D = null), null == r ? (L[n] = []) : (L[n] = L[n].filter((e) => e.timestamp !== r));
}
function Z() {
    A = Math.max(A - 1, 0);
}
function F(e) {
    var n, r;
    let { clip: i } = e;
    (A = Math.max(A - 1, 0)),
        (C = {
            applicationName: i.applicationName,
            ended: !1,
            ...C,
            newClipIds: [...(null !== (n = null == C ? void 0 : C.newClipIds) && void 0 !== n ? n : []), i.id]
        }),
        (w = {
            ...w,
            newClipIds: [...(null !== (r = w.newClipIds) && void 0 !== r ? r : []), i.id]
        }),
        (S = S.filter((e) => {
            let { id: n } = e;
            return n !== i.id;
        })),
        (y = [i, ...y]),
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
    N = n;
}
function Y(e) {
    let { channelId: n } = e;
    n !== N && (N = null);
}
function W(e) {
    let { applicationName: n } = e;
    if (((O = null), !w.clipsSettings.clipsEnabled)) return !1;
    C = {
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
    C = {
        applicationName: i,
        newClipIds: [],
        ended: !1
    };
}
function q(e) {
    let { streamKey: n } = e;
    if (((D = null), (L[n] = []), null == C || (0, d.my)(n).ownerId !== f.default.getId())) return !1;
    C =
        0 === C.newClipIds.length
            ? null
            : {
                  ...C,
                  ended: !0
              };
}
function Q(e) {
    (w.hasClips = e.clips.length > 0), (y = e.clips);
}
function X(e) {
    0 ===
        (y = y.filter((n) => {
            let { filepath: r } = n;
            return r !== e.filepath;
        })).length && (w.hasClips = !1);
}
function J() {
    if (null == C) return !1;
    C = null;
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
class er extends (i = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (w = e), P(), this.waitFor(c.ZP);
    }
    getClips() {
        return y;
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
        return C;
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getActiveAnimation() {
        return D;
    }
    getStreamClipAnimations(e) {
        var n;
        return null !== (n = L[e]) && void 0 !== n ? n : b;
    }
    hasAnyClipAnimations() {
        return Object.values(L).some((e) => e.length > 0);
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
        return null !== (n = null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n && (0, p.isWindows)();
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
I(er, 'displayName', 'ClipsStore'),
    I(er, 'persistKey', 'ClipsStore'),
    I(er, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : x,
            newClipsCount: 0
        }),
        (e) => {
            let n = {
                ...x,
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
                decoupledClipsEnabled: x.decoupledClipsEnabled
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
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? x.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var n;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (n = e.clipsSettings.remindersEnabled) && void 0 !== n ? n : x.remindersEnabled
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
