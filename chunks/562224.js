n.d(t, { Z: () => C }), n(388685);
var r = n(268146),
    i = n(872810),
    l = n(594190),
    o = n(751571),
    a = n(695346),
    s = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    p = n(944486),
    m = n(594174),
    f = n(358085),
    g = n(451467),
    _ = n(537413),
    h = n(143135),
    b = n(37113),
    E = n(761274);
async function C(e, t) {
    var n, C, v, O, y, x, j, I, S, T;
    let P = m.default.getCurrentUser(),
        N = p.Z.getVoiceChannelId(),
        A = c.Z.getChannel(N),
        w = null == A ? void 0 : A.getGuildId(),
        Z = null == (n = u.Z.getGuild(w)) ? void 0 : n.premiumTier;
    if (null == P || null == A || null == N) return [!1, "no user or channel"];
    let R = null;
    if (null == (R = "number" == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.Z.getUseSystemScreensharePicker() &&
        !(await o.Z.hasPermission(E.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: D, resolution: L, fps: M, soundshareEnabled: k } = s.Z.getState(),
        U = null != (v = null == t ? void 0 : t.preset) ? v : D,
        [F, B] = null != (O = (0, _.Z)(U, P, Z)) ? O : [],
        G = null != (y = null != F ? F : null == t ? void 0 : t.resolution) ? y : L,
        H = null != (x = null != B ? B : null == t ? void 0 : t.fps) ? x : M,
        V = null != (j = null == t ? void 0 : t.previewDisabled) ? j : a.I0.getSetting(),
        z = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : k;
    return (
        (0, g.Z)(U, G, H, P, Z, A) || ((U = b.tI.PRESET_VIDEO), (G = b.LY.RESOLUTION_720), (H = b.ws.FPS_30)),
        (0, i.Rc)({
            preset: U,
            resolution: G,
            frameRate: H,
            soundshareEnabled: z,
        }),
        (0, i.WH)(
            w,
            N,
            ((S = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {},
                (function (e) {
                    if (e.hasOwnProperty("pid")) return { pid: e.pid };
                    let t = (0, h.Z)(void 0, e, l.ZP.getRunningGames()),
                        n =
                            !(0, f.isWindows)() ||
                            null == t ||
                            (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) ||
                            null == t
                                ? null
                                : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon,
                          };
                })(R),
            )),
            (T = T =
                {
                    audioSourceId: (null == (C = R.id) ? void 0 : C.startsWith(r.vA.CAMERA))
                        ? null == t
                            ? void 0
                            : t.audioSourceId
                        : void 0,
                    sound: z,
                    previewDisabled: V,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
                    analyticsLocations: null == t ? void 0 : t.analyticsLocations,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(T))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(T)).forEach(function (e) {
                      Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(T, e));
                  }),
            S),
        ),
        [!0, void 0]
    );
}
