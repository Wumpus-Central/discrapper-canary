n.d(t, { Z: () => m }), n(388685);
var r = n(268146),
    l = n(872810),
    i = n(594190),
    o = n(751571),
    a = n(695346),
    s = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(944486),
    h = n(594174),
    p = n(358085),
    g = n(451467),
    O = n(537413),
    y = n(143135),
    b = n(37113),
    N = n(761274);
async function m(e, t) {
    var n, m, v, x, E, C, I, T, j, S;
    let P = h.default.getCurrentUser(),
        _ = f.Z.getVoiceChannelId(),
        Z = c.Z.getChannel(_),
        A = null == Z ? void 0 : Z.getGuildId(),
        w = null == (n = u.Z.getGuild(A)) ? void 0 : n.premiumTier;
    if (null == P || null == Z || null == _) return [!1, 'no user or channel'];
    let R = null;
    if (null == (R = 'number' == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(N.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: U, fps: k, soundshareEnabled: M } = s.Z.getState(),
        L = null != (v = null == t ? void 0 : t.preset) ? v : D,
        [B, G] = null != (x = (0, O.Z)(L, P, w)) ? x : [],
        V = null != (E = null != B ? B : null == t ? void 0 : t.resolution) ? E : U,
        F = null != (C = null != G ? G : null == t ? void 0 : t.fps) ? C : k,
        W = null != (I = null == t ? void 0 : t.previewDisabled) ? I : a.I0.getSetting(),
        K = null != (T = null == t ? void 0 : t.soundshareEnabled) ? T : M;
    return (
        (0, g.Z)(L, V, F, P, w, Z) || ((L = b.tI.PRESET_VIDEO), (V = b.LY.RESOLUTION_720), (F = b.ws.FPS_30)),
        (0, l.Rc)({
            preset: L,
            resolution: V,
            frameRate: F,
            soundshareEnabled: K
        }),
        (0, l.WH)(
            A,
            _,
            ((j = (function (e) {
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
                })(R)
            )),
            (S = S =
                {
                    audioSourceId: (null == (m = R.id) ? void 0 : m.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
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
