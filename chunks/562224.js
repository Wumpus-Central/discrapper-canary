n.d(t, { Z: () => A }), n(388685);
var r = n(268146),
    i = n(872810),
    o = n(594190),
    a = n(751571),
    s = n(695346),
    l = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(944486),
    _ = n(594174),
    p = n(358085),
    h = n(451467),
    m = n(537413),
    g = n(143135),
    E = n(37113),
    b = n(761274);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
function T(e) {
    return e.hasOwnProperty("pid");
}
function S(e) {
    if (T(e)) return { pid: e.pid };
    let t = (0, g.Z)(void 0, e, o.ZP.getRunningGames()),
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
async function A(e, t) {
    var n, p, g, y, v, T, A, N;
    let C = _.default.getCurrentUser(),
        R = f.Z.getVoiceChannelId(),
        P = c.Z.getChannel(R),
        w = null == P ? void 0 : P.getGuildId(),
        D = null == (n = u.Z.getGuild(w)) ? void 0 : n.premiumTier;
    if (null == C || null == P || null == R) return [!1, "no user or channel"];
    let L = null;
    if (null == (L = "number" == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.Z.getUseSystemScreensharePicker() &&
        !(await a.Z.hasPermission(b.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: x, resolution: M, fps: j, soundshareEnabled: k } = l.Z.getState(),
        U = null != (g = null == t ? void 0 : t.preset) ? g : x,
        [G, B] = null != (y = (0, m.Z)(U, C, D)) ? y : [],
        Z = null != (v = null != G ? G : null == t ? void 0 : t.resolution) ? v : M,
        F = null != (T = null != B ? B : null == t ? void 0 : t.fps) ? T : j,
        V = null != (A = null == t ? void 0 : t.previewDisabled) ? A : s.I0.getSetting(),
        H = null != (N = null == t ? void 0 : t.soundshareEnabled) ? N : k;
    return (
        (0, h.Z)(U, Z, F, C, D, P) || ((U = E.tI.PRESET_VIDEO), (Z = E.LY.RESOLUTION_720), (F = E.ws.FPS_30)),
        (0, i.Rc)({
            preset: U,
            resolution: Z,
            frameRate: F,
            soundshareEnabled: H,
        }),
        (0, i.WH)(
            w,
            R,
            I(O({}, S(L)), {
                audioSourceId: (null == (p = L.id) ? void 0 : p.startsWith(r.vA.CAMERA))
                    ? null == t
                        ? void 0
                        : t.audioSourceId
                    : void 0,
                sound: H,
                previewDisabled: V,
                goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
                analyticsLocations: null == t ? void 0 : t.analyticsLocations,
            }),
        ),
        [!0, void 0]
    );
}
