n.d(t, { Z: () => E }), n(388685);
var l = n(268146),
    r = n(872810),
    i = n(594190),
    a = n(751571),
    o = n(695346),
    s = n(361291),
    u = n(592125),
    c = n(430824),
    d = n(131951),
    f = n(944486),
    h = n(594174),
    g = n(358085),
    p = n(451467),
    y = n(537413),
    O = n(143135),
    m = n(37113),
    v = n(761274);
async function E(e, t) {
    var n, E, b, N, C, x, I, S, T, P;
    let _ = h.default.getCurrentUser(),
        Z = f.Z.getVoiceChannelId(),
        j = u.Z.getChannel(Z),
        A = null == j ? void 0 : j.getGuildId(),
        w = null == (n = c.Z.getGuild(A)) ? void 0 : n.premiumTier;
    if (null == _ || null == j || null == Z) return [!1, 'no user or channel'];
    let R = null;
    if (null == (R = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await a.Z.hasPermission(v.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: M, fps: k, soundshareEnabled: U } = s.Z.getState(),
        L = null != (b = null == t ? void 0 : t.preset) ? b : D,
        [G, V] = null != (N = (0, y.Z)(L, _, w)) ? N : [],
        B = null != (C = null != G ? G : null == t ? void 0 : t.resolution) ? C : M,
        F = null != (x = null != V ? V : null == t ? void 0 : t.fps) ? x : k,
        W = null != (I = null == t ? void 0 : t.previewDisabled) ? I : o.I0.getSetting(),
        H = null != (S = null == t ? void 0 : t.soundshareEnabled) ? S : U;
    return (
        (0, p.Z)(L, B, F, _, w, j) || ((L = m.tI.PRESET_VIDEO), (B = m.LY.RESOLUTION_720), (F = m.ws.FPS_30)),
        (0, r.Rc)({
            preset: L,
            resolution: B,
            frameRate: F,
            soundshareEnabled: H
        }),
        (0, r.WH)(
            A,
            Z,
            ((T = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {},
                (function (e) {
                    if (e.hasOwnProperty('pid')) return { pid: e.pid };
                    let t = (0, O.Z)(void 0, e, i.ZP.getRunningGames()),
                        n = !(0, g.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(l.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(R)
            )),
            (P = P =
                {
                    audioSourceId: (null == (E = R.id) ? void 0 : E.startsWith(l.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: H,
                    previewDisabled: W,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(P))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(P)).forEach(function (e) {
                      Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(P, e));
                  }),
            T)
        ),
        [!0, void 0]
    );
}
