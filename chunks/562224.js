(n.d(t, { Z: () => x }), n(388685));
var r = n(268146),
    l = n(872810),
    i = n(594190),
    o = n(751571),
    s = n(695346),
    a = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(944486),
    h = n(594174),
    p = n(358085),
    g = n(451467),
    O = n(537413),
    N = n(143135),
    y = n(37113),
    b = n(761274);
async function x(e, t) {
    var n, x, E, m, v, C, I, T, j, S;
    let P = h.default.getCurrentUser(),
        _ = f.Z.getVoiceChannelId(),
        A = c.Z.getChannel(_),
        R = null == A ? void 0 : A.getGuildId(),
        w = null == (n = u.Z.getGuild(R)) ? void 0 : n.premiumTier;
    if (null == P || null == A || null == _) return [!1, 'no user or channel'];
    let Z = null;
    if (null == (Z = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(b.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: k, fps: M, soundshareEnabled: U } = a.Z.getState(),
        L = null != (E = null == t ? void 0 : t.preset) ? E : D,
        [B, G] = null != (m = (0, O.Z)(L, P, w)) ? m : [],
        V = null != (v = null != B ? B : null == t ? void 0 : t.resolution) ? v : k,
        F = null != (C = null != G ? G : null == t ? void 0 : t.fps) ? C : M,
        W = null != (I = null == t ? void 0 : t.previewDisabled) ? I : s.I0.getSetting(),
        K = null != (T = null == t ? void 0 : t.soundshareEnabled) ? T : U;
    return (
        (0, g.Z)(L, V, F, P, w, A) || ((L = y.tI.PRESET_VIDEO), (V = y.LY.RESOLUTION_720), (F = y.ws.FPS_30)),
        (0, l.Rc)({
            preset: L,
            resolution: V,
            frameRate: F,
            soundshareEnabled: K
        }),
        (0, l.WH)(
            R,
            _,
            ((j = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {},
                (function (e) {
                    if (e.hasOwnProperty('pid')) return { pid: e.pid };
                    let t = (0, N.Z)(void 0, e, i.ZP.getRunningGames()),
                        n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(Z)
            )),
            (S = S =
                {
                    audioSourceId: (null == (x = Z.id) ? void 0 : x.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: K,
                    previewDisabled: W,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(S))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(S)).forEach(function (e) {
                      Object.defineProperty(j, e, Object.getOwnPropertyDescriptor(S, e));
                  }),
            j)
        ),
        [!0, void 0]
    );
}
