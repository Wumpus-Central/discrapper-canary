n.d(t, { Z: () => v }), n(388685);
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
    p = n(594174),
    f = n(358085),
    g = n(451467),
    y = n(537413),
    O = n(143135),
    N = n(37113),
    b = n(761274);
async function v(e, t) {
    var n, v, m, x, E, C, I, j, P, S;
    let T = p.default.getCurrentUser(),
        w = h.Z.getVoiceChannelId(),
        Z = u.Z.getChannel(w),
        _ = null == Z ? void 0 : Z.getGuildId(),
        A = null == (n = c.Z.getGuild(_)) ? void 0 : n.premiumTier;
    if (null == T || null == Z || null == w) return [!1, 'no user or channel'];
    let R = null;
    if (null == (R = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(b.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: W, fps: k, soundshareEnabled: M } = s.Z.getState(),
        U = null != (m = null == t ? void 0 : t.preset) ? m : D,
        [L, B] = null != (x = (0, y.Z)(U, T, A)) ? x : [],
        V = null != (E = null != L ? L : null == t ? void 0 : t.resolution) ? E : W,
        G = null != (C = null != B ? B : null == t ? void 0 : t.fps) ? C : k,
        F = null != (I = null == t ? void 0 : t.previewDisabled) ? I : a.I0.getSetting(),
        K = null != (j = null == t ? void 0 : t.soundshareEnabled) ? j : M;
    return (
        (0, g.Z)(U, V, G, T, A, Z) || ((U = N.tI.PRESET_VIDEO), (V = N.LY.RESOLUTION_720), (G = N.ws.FPS_30)),
        (0, l.Rc)({
            preset: U,
            resolution: V,
            frameRate: G,
            soundshareEnabled: K
        }),
        (0, l.WH)(
            _,
            w,
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
                        n = !(0, f.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
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
                    audioSourceId: (null == (v = R.id) ? void 0 : v.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
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
