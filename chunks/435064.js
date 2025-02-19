n.d(t, { Z: () => eo }), n(47120), n(789020);
var r,
    i = n(442837),
    o = n(570140),
    a = n(579806),
    s = n(594190),
    l = n(569545),
    c = n(314897),
    u = n(594174),
    d = n(630388),
    f = n(358085),
    p = n(894694),
    _ = n(356659),
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 'default',
    O = [],
    S = [],
    I = [],
    T = 0,
    N = null,
    A = null,
    C = {},
    R = null,
    P = null,
    w = {},
    D = {
        clipsEnabled: !1,
        storageLocation: y,
        clipsQuality: {
            resolution: m.LY.RESOLUTION_1080,
            frameRate: m.ws.FPS_30
        },
        clipsLength: _.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: _.dJ.ALL
    },
    x = {
        clipsSettings: D,
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
async function L() {
    if (x.clipsSettings.storageLocation !== y || null == a.Z || null == a.Z.remoteApp) return;
    let e = await a.Z.remoteApp.getPath('documents');
    (x.clipsSettings.storageLocation = e), ei.emitChange();
}
function M(e) {
    let { classification: t } = e,
        n = x.hardwareClassification;
    (x.hardwareClassificationVersion = _.WM), (x.hardwareClassification = t), x.hardwareClassification === p.x.MEETS_AUTO_ENABLE && n !== p.x.MEETS_AUTO_ENABLE && (x.clipsSettings.clipsEnabled = !0);
    let r = x.hardwareClassificationForDecoupled;
    (x.hardwareClassificationForDecoupled = t), x.hardwareClassificationForDecoupled === p.x.MEETS_AUTO_ENABLE && r !== p.x.MEETS_AUTO_ENABLE && x.clipsSettings.clipsEnabled && (x.clipsSettings.decoupledClipsEnabled = !0);
}
function k(e) {
    let { clip: t } = e;
    for (let [e, n] of S.entries())
        if (n.id === t.id) {
            (S[e] = t), (S = [...S]);
            return;
        }
}
function j(e) {
    let { settings: t } = e;
    x = b(E({}, x), { clipsSettings: E({}, x.clipsSettings, t) });
}
function U(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (((T += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === _.X9.DECOUPLED), null != n && null != r)) {
        var i;
        let e = Date.now();
        (P = null != P ? P : e),
            (w[n] = [
                ...(null !== (i = w[n]) && void 0 !== i ? i : []),
                {
                    timestamp: e,
                    thumbnail: r
                }
            ]);
    }
}
function G(e) {
    let { streamKey: t, timestamp: n } = e;
    P === n && (P = null), null == n ? (w[t] = []) : (w[t] = w[t].filter((e) => e.timestamp !== n));
}
function B() {
    T = Math.max(T - 1, 0);
}
function Z(e) {
    var t, n;
    let { clip: r } = e;
    (T = Math.max(T - 1, 0)),
        (A = b(
            E(
                {
                    applicationName: r.applicationName,
                    ended: !1
                },
                A
            ),
            {
                newClipIds: [...(null !== (t = null == A ? void 0 : A.newClipIds) && void 0 !== t ? t : []), r.id]
            }
        )),
        (x = b(E({}, x), {
            newClipIds: [...(null !== (n = x.newClipIds) && void 0 !== n ? n : []), r.id]
        })),
        (I = I.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (S = [r, ...S]),
        (x.hasClips = !0);
}
function F(e) {
    let { clip: t } = e;
    I = [t, ...I];
}
function V(e) {
    let { clipId: t } = e;
    I = I.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function H(e) {
    let { channelId: t } = e;
    N = t;
}
function W(e) {
    let { channelId: t } = e;
    t !== N && (N = null);
}
function Y(e) {
    let { applicationName: t } = e;
    if (((R = null), !x.clipsSettings.clipsEnabled)) return !1;
    A = {
        applicationName: t,
        newClipIds: [],
        ended: !1
    };
}
function K(e) {
    let { errMsg: t } = e;
    R = t;
}
function z(e) {
    let { sourceName: t, pid: n } = e;
    if (!x.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = s.ZP.getGameForPID(n);
        r = null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : r;
    }
    if (null == r || '' === r) return !1;
    A = {
        applicationName: r,
        newClipIds: [],
        ended: !1
    };
}
function q(e) {
    let { streamKey: t } = e;
    if (((P = null), (w[t] = []), null == A || (0, l.my)(t).ownerId !== c.default.getId())) return !1;
    A = 0 === A.newClipIds.length ? null : b(E({}, A), { ended: !0 });
}
function Q(e) {
    (x.hasClips = e.clips.length > 0), (S = e.clips);
}
function X(e) {
    0 ===
        (S = S.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (x.hasClips = !1);
}
function J() {
    if (null == A) return !1;
    A = null;
}
function $() {
    x.newClipIds = [];
}
function ee(e) {
    C[e.userId] = {
        clipsEnabled: (0, d.yE)(e.flags, h.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, d.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, d.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
    };
}
function et(e) {
    let { added: t } = e;
    t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function en(e) {
    let { educationType: t } = e;
    switch (t) {
        case _.D5.Error:
            R = null;
            break;
        case _.D5.Disabled:
        case _.D5.Enabled:
            (x.clipsEducationState.dismissedAt = Date.now()), (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (x.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
class er extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (x = e), L(), this.waitFor(s.ZP);
    }
    getClips() {
        return S;
    }
    getPendingClips() {
        return I;
    }
    getUserAgnosticState() {
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getLastClipsSession() {
        return A;
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getActiveAnimation() {
        return P;
    }
    getStreamClipAnimations(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : O;
    }
    hasAnyClipAnimations() {
        return Object.values(w).some((e) => e.length > 0);
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
        return T >= _.Kw;
    }
    getLastClipsError() {
        return R;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null !== (t = null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t && (0, f.isWindows)();
    }
    hasClips() {
        return x.hasClips;
    }
    hasTakenDecoupledClip() {
        return x.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return x.newClipIds;
    }
}
g(er, 'displayName', 'ClipsStore'),
    g(er, 'persistKey', 'ClipsStore'),
    g(er, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : D,
            newClipsCount: 0
        }),
        (e) => {
            let t = E({}, D, e.clipsSettings);
            return b(E({}, e), { clipsSettings: t });
        },
        (e) => {
            var t;
            return b(E({}, e), { newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [] });
        },
        (e) => {
            var t, n;
            return b(E({}, e), {
                hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
                hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
            });
        },
        (e) => {
            var t;
            return b(E({}, e), { hasClips: null !== (t = e.hasClips) && void 0 !== t && t });
        },
        (e) => b(E({}, e), { clipsSettings: b(E({}, e.clipsSettings), { decoupledClipsEnabled: D.decoupledClipsEnabled }) }),
        (e) => {
            var t;
            return b(E({}, e), { hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null });
        },
        (e) => {
            var t;
            let r = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareEncoding();
            return b(E({}, e), {
                clipsSettings: b(E({}, e.clipsSettings), {
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
                })
            });
        },
        (e) => {
            var t;
            return b(E({}, e), {
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
                newClipIDs: void 0
            });
        },
        (e) => b(E({}, e), { clipsSettings: b(E({}, e.clipsSettings), { clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? D.clipsQuality : e.clipsSettings.clipsQuality }) }),
        (e) => {
            var t;
            return b(E({}, e), { clipsSettings: b(E({}, e.clipsSettings), { remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : D.remindersEnabled }) });
        },
        (e) =>
            b(E({}, e), {
                hasTakenDecoupledClip: !1,
                clipsEducationState: {
                    dismissedAt: null,
                    numberOfGamesLaunchedSinceDismissal: 0,
                    numberOfTimesDismissed: 0
                }
            })
    ]);
let ei = new er(o.Z, {
        CLIPS_SETTINGS_UPDATE: j,
        CLIPS_SAVE_CLIP: Z,
        CLIPS_SAVE_CLIP_PLACEHOLDER: F,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
        CLIPS_SAVE_CLIP_START: U,
        CLIPS_SAVE_CLIP_ERROR: B,
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
        VOICE_CHANNEL_SELECT: W,
        CLIPS_CLASSIFY_HARDWARE: M,
        CLIPS_INIT: Y,
        CLIPS_INIT_FAILURE: K,
        CLIPS_DISMISS_EDUCATION: en,
        RUNNING_GAMES_CHANGE: et
    }),
    eo = ei;
