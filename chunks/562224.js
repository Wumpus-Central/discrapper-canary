n.d(t, { Z: () => v }), n(388685);
var r = n(268146),
    l = n(872810),
    i = n(594190),
    o = n(751571),
    a = n(695346),
    s = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    h = n(944486),
    f = n(594174),
    p = n(358085),
    g = n(451467),
    N = n(537413),
    y = n(143135),
    O = n(37113),
    b = n(761274);
async function v(e, t) {
    var n, v, x, m, E, C, j, I, S, P;
    let T = f.default.getCurrentUser(),
        w = h.Z.getVoiceChannelId(),
        Z = c.Z.getChannel(w),
        _ = null == Z ? void 0 : Z.getGuildId(),
        R = null == (n = u.Z.getGuild(_)) ? void 0 : n.premiumTier;
    if (null == T || null == Z || null == w) return [!1, 'no user or channel'];
    let A = null;
    if (null == (A = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(b.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: W, fps: k, soundshareEnabled: B } = s.Z.getState(),
        M = null != (x = null == t ? void 0 : t.preset) ? x : D,
        [U, L] = null != (m = (0, N.Z)(M, T, R)) ? m : [],
        G = null != (E = null != U ? U : null == t ? void 0 : t.resolution) ? E : W,
        V = null != (C = null != L ? L : null == t ? void 0 : t.fps) ? C : k,
        F = null != (j = null == t ? void 0 : t.previewDisabled) ? j : a.I0.getSetting(),
        K = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : B;
    return (
        (0, g.Z)(M, G, V, T, R, Z) || ((M = O.tI.PRESET_VIDEO), (G = O.LY.RESOLUTION_720), (V = O.ws.FPS_30)),
        (0, l.Rc)({
            preset: M,
            resolution: G,
            frameRate: V,
            soundshareEnabled: K
        }),
        (0, l.WH)(
            _,
            w,
            ((S = (function (e) {
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
                    let t = (0, y.Z)(void 0, e, i.ZP.getRunningGames()),
                        n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(A)
            )),
            (P = P =
                {
                    audioSourceId: (null == (v = A.id) ? void 0 : v.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: K,
                    previewDisabled: F,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(P))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(P)).forEach(function (e) {
                      Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(P, e));
                  }),
            S)
        ),
        [!0, void 0]
    );
}
