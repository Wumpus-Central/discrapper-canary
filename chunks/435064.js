n.d(t, { Z: () => ea }), n(388685), n(997841);
var r,
    i = n(442837),
    a = n(570140),
    o = n(579806),
    s = n(594190),
    l = n(569545),
    c = n(314897),
    u = n(594174),
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
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 'default',
    v = [],
    I = [],
    S = [],
    T = 0,
    A = null,
    N = null,
    C = {},
    R = null,
    P = null,
    w = {},
    D = {
        clipsEnabled: !1,
        storageLocation: O,
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
    L = {
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
async function x() {
    if (L.clipsSettings.storageLocation !== O || null == o.Z || null == o.Z.remoteApp) return;
    let e = await o.Z.remoteApp.getPath('documents');
    (L.clipsSettings.storageLocation = e), ei.emitChange();
}
function M(e) {
    let { classification: t } = e,
        n = L.hardwareClassification;
    (L.hardwareClassificationVersion = p.WM), (L.hardwareClassification = t), L.hardwareClassification === _.x.MEETS_AUTO_ENABLE && n !== _.x.MEETS_AUTO_ENABLE && (L.clipsSettings.clipsEnabled = !0);
    let r = L.hardwareClassificationForDecoupled;
    (L.hardwareClassificationForDecoupled = t), L.hardwareClassificationForDecoupled === _.x.MEETS_AUTO_ENABLE && r !== _.x.MEETS_AUTO_ENABLE && L.clipsSettings.clipsEnabled && (L.clipsSettings.decoupledClipsEnabled = !0);
}
function k(e) {
    let { clip: t } = e;
    for (let [e, n] of I.entries())
        if (n.id === t.id) {
            (I[e] = t), (I = [...I]);
            return;
        }
}
function j(e) {
    let { settings: t } = e;
    L = y(E({}, L), { clipsSettings: E({}, L.clipsSettings, t) });
}
function U(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (((T += 1), (L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === p.X9.DECOUPLED), null != n && null != r)) {
        var i;
        let e = Date.now();
        (P = null != P ? P : e),
            (w[n] = [
                ...(null != (i = w[n]) ? i : []),
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
function V(e) {
    var t, n;
    let { clip: r } = e;
    (T = Math.max(T - 1, 0)),
        (N = y(
            E(
                {
                    applicationName: r.applicationName,
                    ended: !1
                },
                N
            ),
            {
                newClipIds: [...(null != (t = null == N ? void 0 : N.newClipIds) ? t : []), r.id]
            }
        )),
        (L = y(E({}, L), {
            newClipIds: [...(null != (n = L.newClipIds) ? n : []), r.id]
        })),
        (S = S.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (I = [r, ...I]),
        (L.hasClips = !0);
}
function F(e) {
    let { clip: t } = e;
    S = [t, ...S];
}
function Z(e) {
    let { clipId: t } = e;
    S = S.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function H(e) {
    let { channelId: t } = e;
    A = t;
}
function Y(e) {
    let { channelId: t } = e;
    t !== A && (A = null);
}
function W(e) {
    let { applicationName: t } = e;
    if (((R = null), !L.clipsSettings.clipsEnabled)) return !1;
    N = {
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
    if (!L.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = s.ZP.getGameForPID(n);
        r = null != (i = null == e ? void 0 : e.name) ? i : r;
    }
    if (null == r || '' === r) return !1;
    N = {
        applicationName: r,
        newClipIds: [],
        ended: !1
    };
}
function q(e) {
    let { streamKey: t } = e;
    if (((P = null), (w[t] = []), null == N || (0, l.my)(t).ownerId !== c.default.getId())) return !1;
    N = 0 === N.newClipIds.length ? null : y(E({}, N), { ended: !0 });
}
function Q(e) {
    (L.hasClips = e.clips.length > 0), (I = e.clips);
}
function X(e) {
    0 ===
        (I = I.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (L.hasClips = !1);
}
function J() {
    if (null == N) return !1;
    N = null;
}
function $() {
    L.newClipIds = [];
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
    t.length > 0 && (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function en(e) {
    let { educationType: t } = e;
    switch (t) {
        case p.D5.Error:
            R = null;
            break;
        case p.D5.Disabled:
        case p.D5.Enabled:
            (L.clipsEducationState.dismissedAt = Date.now()), (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (L.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
class er extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (L = e), x(), this.waitFor(s.ZP);
    }
    getClips() {
        return I;
    }
    getPendingClips() {
        return S;
    }
    getUserAgnosticState() {
        return L;
    }
    getSettings() {
        return L.clipsSettings;
    }
    getLastClipsSession() {
        return N;
    }
    getClipsWarningShown(e) {
        return A === e;
    }
    getActiveAnimation() {
        return P;
    }
    getStreamClipAnimations(e) {
        var t;
        return null != (t = w[e]) ? t : v;
    }
    hasAnyClipAnimations() {
        return Object.values(w).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return L.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return L.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return L.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return T >= p.Kw;
    }
    getLastClipsError() {
        return R;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.clipsEnabled) && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.allowVoiceRecording) && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null != (n = null == (t = C[e]) ? void 0 : t.allowAnyViewerClips) && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null != (t = null == (e = u.default.getCurrentUser()) ? void 0 : e.isStaff()) && t && (0, f.isWindows)();
    }
    hasClips() {
        return L.hasClips;
    }
    hasTakenDecoupledClip() {
        return L.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return L.newClipIds;
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
            return y(E({}, e), { clipsSettings: t });
        },
        (e) => {
            var t;
            return y(E({}, e), { newClipIds: null != (t = e.newClipIds) ? t : [] });
        },
        (e) => {
            var t, n;
            return y(E({}, e), {
                hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
                hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0
            });
        },
        (e) => {
            var t;
            return y(E({}, e), { hasClips: null != (t = e.hasClips) && t });
        },
        (e) => y(E({}, e), { clipsSettings: y(E({}, e.clipsSettings), { decoupledClipsEnabled: D.decoupledClipsEnabled }) }),
        (e) => {
            var t;
            return y(E({}, e), { hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null });
        },
        (e) => {
            var t;
            let r = null == (t = n(131951).Z) ? void 0 : t.getHardwareEncoding();
            return y(E({}, e), {
                clipsSettings: y(E({}, e.clipsSettings), {
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
                })
            });
        },
        (e) => {
            var t;
            return y(E({}, e), {
                newClipIds: null != (t = e.newClipIds) ? t : [],
                newClipIDs: void 0
            });
        },
        (e) => y(E({}, e), { clipsSettings: y(E({}, e.clipsSettings), { clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? D.clipsQuality : e.clipsSettings.clipsQuality }) }),
        (e) => {
            var t;
            return y(E({}, e), { clipsSettings: y(E({}, e.clipsSettings), { remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : D.remindersEnabled }) });
        },
        (e) =>
            y(E({}, e), {
                hasTakenDecoupledClip: !1,
                clipsEducationState: {
                    dismissedAt: null,
                    numberOfGamesLaunchedSinceDismissal: 0,
                    numberOfTimesDismissed: 0
                }
            })
    ]);
let ei = new er(a.Z, {
        CLIPS_SETTINGS_UPDATE: j,
        CLIPS_SAVE_CLIP: V,
        CLIPS_SAVE_CLIP_PLACEHOLDER: F,
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Z,
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
        VOICE_CHANNEL_SELECT: Y,
        CLIPS_CLASSIFY_HARDWARE: M,
        CLIPS_INIT: W,
        CLIPS_INIT_FAILURE: K,
        CLIPS_DISMISS_EDUCATION: en,
        RUNNING_GAMES_CHANGE: et
    }),
    ea = ei;
