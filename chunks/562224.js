n.d(t, { Z: () => O }), n(47120);
var r = n(268146),
    i = n(872810),
    l = n(594190),
    o = n(751571),
    u = n(695346),
    s = n(361291),
    a = n(592125),
    c = n(430824),
    d = n(131951),
    f = n(944486),
    v = n(594174),
    p = n(358085),
    h = n(451467),
    g = n(537413),
    b = n(143135),
    m = n(37113),
    w = n(761274);
async function O(e, t) {
    var n, O, P, E, S, y, Z, I, C, D;
    let R = v.default.getCurrentUser(),
        A = f.Z.getVoiceChannelId(),
        N = a.Z.getChannel(A),
        _ = null == N ? void 0 : N.getGuildId(),
        j = null == (n = c.Z.getGuild(_)) ? void 0 : n.premiumTier;
    if (null == R || null == N || null == A) return [!1, 'no user or channel'];
    let k = null;
    if (null == (k = 'number' == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(w.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: W, resolution: G, fps: L, soundshareEnabled: V } = s.Z.getState(),
        M = null != (P = null == t ? void 0 : t.preset) ? P : W,
        [x, U] = null != (E = (0, g.Z)(M, R, j)) ? E : [],
        T = null != (S = null != x ? x : null == t ? void 0 : t.resolution) ? S : G,
        H = null != (y = null != U ? U : null == t ? void 0 : t.fps) ? y : L,
        Y = null != (Z = null == t ? void 0 : t.previewDisabled) ? Z : u.I0.getSetting(),
        F = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : V;
    return (
        (0, h.Z)(M, T, H, R, j, N) || ((M = m.tI.PRESET_VIDEO), (T = m.LY.RESOLUTION_720), (H = m.ws.FPS_30)),
        (0, i.Rc)({
            preset: M,
            resolution: T,
            frameRate: H,
            soundshareEnabled: F
        }),
        (0, i.WH)(
            _,
            A,
            ((C = (function (e) {
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
                    let t = (0, b.Z)(void 0, e, l.ZP.getRunningGames()),
                        n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != n
                        ? { pid: n }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(k)
            )),
            (D = D =
                {
                    audioSourceId: (null == (O = k.id) ? void 0 : O.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: F,
                    previewDisabled: Y,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(D))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(D)).forEach(function (e) {
                      Object.defineProperty(C, e, Object.getOwnPropertyDescriptor(D, e));
                  }),
            C)
        ),
        [!0, void 0]
    );
}
