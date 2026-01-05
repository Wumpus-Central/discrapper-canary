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
    p = n(594174),
    _ = n(358085),
    m = n(580991),
    h = n(451467),
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
function S(e) {
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
function C(e) {
    return e.hasOwnProperty("pid");
}
function A(e) {
    var t;
    if (C(e)) return { pid: e.pid };
    let n = (0, b.Z)(void 0, e, a.ZP.getRunningGames()),
        i = !(0, _.isWindows)() || null == n || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)),
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
    var n, _, E, b, v, I, C, N;
    let P = p.default.getCurrentUser(),
        R = f.Z.getVoiceChannelId(),
        w = c.Z.getChannel(R),
        D = null == w ? void 0 : w.getGuildId(),
        x = null == (n = u.Z.getGuild(D)) ? void 0 : n.premiumTier;
    if (null == P || null == w || null == R) return [!1, "no user or channel"];
    let L = null;
    if (null == (L = "number" == typeof e ? a.ZP.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.Z.getUseSystemScreensharePicker() &&
        !(await o.Z.hasPermission(O.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: j, resolution: M, fps: k, soundshareEnabled: U } = l.Z.getState(),
        G = null != (E = null == t ? void 0 : t.preset) ? E : j,
        { allowAutoQuality: Z } = (0, m.IK)({ location: "startStreamWithSource" });
    G !== y.tI.PRESET_AUTO || Z || (G = y.tI.PRESET_VIDEO);
    let F = G === y.tI.PRESET_AUTO ? y.tI.PRESET_VIDEO : G,
        [B, V] = null != (b = (0, g.Z)(F, P, x)) ? b : [],
        H = null != (v = null != B ? B : null == t ? void 0 : t.resolution) ? v : M,
        Y = null != (I = null != V ? V : null == t ? void 0 : t.fps) ? I : k,
        W = null != (C = null == t ? void 0 : t.previewDisabled) ? C : s.I0.getSetting(),
        K = null != (N = null == t ? void 0 : t.soundshareEnabled) ? N : U;
    return (
        (0, h.Z)(F, H, Y, P, x, w) || ((G = y.tI.PRESET_VIDEO), (H = y.LY.RESOLUTION_720), (Y = y.ws.FPS_30)),
        (0, i.Rc)({
            preset: G,
            resolution: H,
            frameRate: Y,
            soundshareEnabled: K,
        }),
        (0, i.WH)(
            D,
            R,
            T(S({}, A(L)), {
                audioSourceId: (null == (_ = L.id) ? void 0 : _.startsWith(r.vA.CAMERA))
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
