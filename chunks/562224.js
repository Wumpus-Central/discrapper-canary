n.d(t, { Z: () => m }), n(388685);
var r = n(268146),
    l = n(872810),
    i = n(594190),
    o = n(751571),
    a = n(695346),
    s = n(361291),
    u = n(592125),
    c = n(430824),
    d = n(131951),
    h = n(944486),
    f = n(594174),
    p = n(358085),
    g = n(451467),
    y = n(537413),
    O = n(143135),
    b = n(37113),
    v = n(761274);
async function m(e, t) {
    var n, m, x, N, C, E, j, I, P, S;
    let T = f.default.getCurrentUser(),
        Z = h.Z.getVoiceChannelId(),
        _ = u.Z.getChannel(Z),
        w = null == _ ? void 0 : _.getGuildId(),
        A = null == (n = c.Z.getGuild(w)) ? void 0 : n.premiumTier;
    if (null == T || null == _ || null == Z) return [!1, 'no user or channel'];
    let R = null;
    if (null == (R = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(v.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: k, fps: M, soundshareEnabled: U } = s.Z.getState(),
        L = null != (x = null == t ? void 0 : t.preset) ? x : D,
        [B, G] = null != (N = (0, y.Z)(L, T, A)) ? N : [],
        V = null != (C = null != B ? B : null == t ? void 0 : t.resolution) ? C : k,
        W = null != (E = null != G ? G : null == t ? void 0 : t.fps) ? E : M,
        F = null != (j = null == t ? void 0 : t.previewDisabled) ? j : a.I0.getSetting(),
        K = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : U;
    return (
        (0, g.Z)(L, V, W, T, A, _) || ((L = b.tI.PRESET_VIDEO), (V = b.LY.RESOLUTION_720), (W = b.ws.FPS_30)),
        (0, l.Rc)({
            preset: L,
            resolution: V,
            frameRate: W,
            soundshareEnabled: K
        }),
        (0, l.WH)(
            w,
            Z,
            ((P = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {},
                (function (e) {
                    if (e.hasOwnProperty('pid')) return { pid: e.pid };
                    let t = (0, O.Z)(void 0, e, i.ZP.getRunningGames()),
                        n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(R)
            )),
            (S = S =
                {
                    audioSourceId: (null == (m = R.id) ? void 0 : m.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: K,
                    previewDisabled: F,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(S))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(S)).forEach(function (e) {
                      Object.defineProperty(P, e, Object.getOwnPropertyDescriptor(S, e));
                  }),
            P)
        ),
        [!0, void 0]
    );
}
