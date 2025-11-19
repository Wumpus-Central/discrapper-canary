n.d(t, { Z: () => N }), n(388685);
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
    E = n(960861),
    b = n(143135),
    y = n(37113),
    O = n(761274);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    return e.hasOwnProperty("pid");
}
function C(e) {
    var t;
    if (A(e)) return { pid: e.pid };
    let n = (0, b.Z)(void 0, e, a.ZP.getRunningGames()),
        i = !(0, p.isWindows)() || null == n || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)),
        o = null != n ? n.pid : null;
    return i || null == o
        ? (null == o &&
              (null == (t = e.id) ? void 0 : t.startsWith("prepicked:")) &&
              (o = E.ZP.getLastPickedContentPID()),
          {
              sourceId: e.id,
              sourceName: e.name,
              sourceIcon: e.icon,
              sourcePid: o,
          })
        : { pid: o };
}
async function N(e, t) {
    var n, p, E, b, v, T, A, N;
    let R = _.default.getCurrentUser(),
        P = f.Z.getVoiceChannelId(),
        D = c.Z.getChannel(P),
        w = null == D ? void 0 : D.getGuildId(),
        L = null == (n = u.Z.getGuild(w)) ? void 0 : n.premiumTier;
    if (null == R || null == D || null == P) return [!1, "no user or channel"];
    let x = null;
    if (null == (x = "number" == typeof e ? a.ZP.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.Z.getUseSystemScreensharePicker() &&
        !(await o.Z.hasPermission(O.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: M, resolution: k, fps: j, soundshareEnabled: U } = l.Z.getState(),
        G = null != (E = null == t ? void 0 : t.preset) ? E : M,
        { allowAutoQuality: B } = (0, h.IK)({ location: "startStreamWithSource" });
    G !== y.ApplicationStreamPresets.PRESET_AUTO || B || (G = y.ApplicationStreamPresets.PRESET_VIDEO);
    let Z = G === y.ApplicationStreamPresets.PRESET_AUTO ? y.ApplicationStreamPresets.PRESET_VIDEO : G,
        [F, V] = null != (b = (0, g.Z)(Z, R, L)) ? b : [],
        H = null != (v = null != F ? F : null == t ? void 0 : t.resolution) ? v : k,
        Y = null != (T = null != V ? V : null == t ? void 0 : t.fps) ? T : j,
        W = null != (A = null == t ? void 0 : t.previewDisabled) ? A : s.I0.getSetting(),
        K = null != (N = null == t ? void 0 : t.soundshareEnabled) ? N : U;
    return (
        (0, m.Z)(Z, H, Y, R, L, D) ||
            ((G = y.ApplicationStreamPresets.PRESET_VIDEO),
            (H = y.ApplicationStreamResolutions.RESOLUTION_720),
            (Y = y.ApplicationStreamFPS.FPS_30)),
        (0, i.Rc)({
            preset: G,
            resolution: H,
            frameRate: Y,
            soundshareEnabled: K,
        }),
        (0, i.WH)(
            w,
            P,
            S(I({}, C(x)), {
                audioSourceId: (null == (p = x.id) ? void 0 : p.startsWith(r.vA.CAMERA))
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
