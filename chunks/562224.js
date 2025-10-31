n.d(t, { Z: () => C }), n(388685);
var r = n(268146),
    i = n(872810),
    a = n(594190),
    o = n(751571),
    s = n(695346),
    l = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(944486),
    _ = n(594174),
    p = n(358085),
    h = n(580991),
    m = n(451467),
    g = n(537413),
    E = n(143135),
    b = n(37113),
    y = n(761274);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    return e.hasOwnProperty("pid");
}
function A(e) {
    if (S(e)) return { pid: e.pid };
    let t = (0, E.Z)(void 0, e, a.ZP.getRunningGames()),
        n =
            !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t
                ? null
                : t.pid;
    return null != n
        ? { pid: n }
        : {
              sourceId: e.id,
              sourceName: e.name,
              sourceIcon: e.icon,
          };
}
async function C(e, t) {
    var n, p, E, O, I, S, C, N;
    let R = _.default.getCurrentUser(),
        P = f.Z.getVoiceChannelId(),
        w = c.Z.getChannel(P),
        D = null == w ? void 0 : w.getGuildId(),
        x = null == (n = u.Z.getGuild(D)) ? void 0 : n.premiumTier;
    if (null == R || null == w || null == P) return [!1, "no user or channel"];
    let L = null;
    if (null == (L = "number" == typeof e ? a.ZP.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.Z.getUseSystemScreensharePicker() &&
        !(await o.Z.hasPermission(y.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: M, resolution: j, fps: k, soundshareEnabled: U } = l.Z.getState(),
        G = null != (E = null == t ? void 0 : t.preset) ? E : M,
        { allowAutoQuality: B } = (0, h.IK)({ location: "startStreamWithSource" });
    G !== b.ApplicationStreamPresets.PRESET_AUTO || B || (G = b.ApplicationStreamPresets.PRESET_VIDEO);
    let Z = G === b.ApplicationStreamPresets.PRESET_AUTO ? b.ApplicationStreamPresets.PRESET_VIDEO : G,
        [F, V] = null != (O = (0, g.Z)(Z, R, x)) ? O : [],
        H = null != (I = null != F ? F : null == t ? void 0 : t.resolution) ? I : j,
        Y = null != (S = null != V ? V : null == t ? void 0 : t.fps) ? S : k,
        W = null != (C = null == t ? void 0 : t.previewDisabled) ? C : s.I0.getSetting(),
        K = null != (N = null == t ? void 0 : t.soundshareEnabled) ? N : U;
    return (
        (0, m.Z)(Z, H, Y, R, x, w) ||
            ((G = b.ApplicationStreamPresets.PRESET_VIDEO),
            (H = b.ApplicationStreamResolutions.RESOLUTION_720),
            (Y = b.ApplicationStreamFPS.FPS_30)),
        (0, i.Rc)({
            preset: G,
            resolution: H,
            frameRate: Y,
            soundshareEnabled: K,
        }),
        (0, i.WH)(
            D,
            P,
            T(v({}, A(L)), {
                audioSourceId: (null == (p = L.id) ? void 0 : p.startsWith(r.vA.CAMERA))
                    ? null == t
                        ? void 0
                        : t.audioSourceId
                    : void 0,
                sound: K,
                previewDisabled: W,
                goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
                analyticsLocations: null == t ? void 0 : t.analyticsLocations,
            }),
        ),
        [!0, void 0]
    );
}
