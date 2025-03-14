n.d(t, { Z: () => b }), n(47120);
var r = n(268146),
    l = n(872810),
    o = n(594190),
    i = n(751571),
    s = n(695346),
    a = n(361291),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    h = n(944486),
    f = n(594174),
    p = n(358085),
    g = n(451467),
    y = n(537413),
    v = n(143135),
    O = n(37113),
    N = n(761274);
async function b(e, t) {
    var n, b, m, x, C, j, E, I, P, S;
    let w = f.default.getCurrentUser(),
        T = h.Z.getVoiceChannelId(),
        Z = c.Z.getChannel(T),
        _ = null == Z ? void 0 : Z.getGuildId(),
        R = null === (n = u.Z.getGuild(_)) || void 0 === n ? void 0 : n.premiumTier;
    if (null == w || null == Z || null == T) return [!1, 'no user or channel'];
    let A = null;
    if (null == (A = 'number' == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await i.Z.hasPermission(N.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: D, resolution: W, fps: k, soundshareEnabled: M } = a.Z.getState(),
        B = null !== (m = null == t ? void 0 : t.preset) && void 0 !== m ? m : D,
        [U, L] = null !== (x = (0, y.Z)(B, w, R)) && void 0 !== x ? x : [],
        G = null !== (C = null != U ? U : null == t ? void 0 : t.resolution) && void 0 !== C ? C : W,
        V = null !== (j = null != L ? L : null == t ? void 0 : t.fps) && void 0 !== j ? j : k,
        F = null !== (E = null == t ? void 0 : t.previewDisabled) && void 0 !== E ? E : s.I0.getSetting(),
        H = null !== (I = null == t ? void 0 : t.soundshareEnabled) && void 0 !== I ? I : M;
    return (
        (0, g.Z)(B, G, V, w, R, Z) || ((B = O.tI.PRESET_VIDEO), (G = O.LY.RESOLUTION_720), (V = O.ws.FPS_30)),
        (0, l.Rc)({
            preset: B,
            resolution: G,
            frameRate: V,
            soundshareEnabled: H
        }),
        (0, l.WH)(
            _,
            T,
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
                    let t = (0, v.Z)(void 0, e, o.ZP.getRunningGames()),
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
            (S = S =
                {
                    audioSourceId: (null === (b = A.id) || void 0 === b ? void 0 : b.startsWith(r.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: H,
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
