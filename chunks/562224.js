n.d(t, { Z: () => P }), n(47120);
var r = n(268146),
    i = n(872810),
    l = n(594190),
    o = n(751571),
    u = n(695346),
    s = n(361291),
    a = n(592125),
    d = n(430824),
    c = n(131951),
    f = n(944486),
    v = n(594174),
    p = n(358085),
    h = n(451467),
    g = n(537413),
    b = n(143135),
    m = n(37113),
    O = n(761274);
async function P(e, t) {
    var n, P, w, E, S, y, Z, I, D, R, A, N;
    let _ = v.default.getCurrentUser(),
        j = f.Z.getVoiceChannelId(),
        C = a.Z.getChannel(j),
        W = null == C ? void 0 : C.getGuildId(),
        k = null === (n = d.Z.getGuild(W)) || void 0 === n ? void 0 : n.premiumTier;
    if (null == _ || null == C || null == j) return [!1, 'no user or channel'];
    let G = null;
    if (null == (G = 'number' == typeof e ? l.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!c.Z.getUseSystemScreensharePicker() && !(await o.Z.hasPermission(O.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: L, resolution: M, fps: U, soundshareEnabled: V } = s.Z.getState(),
        x = null !== (w = null == t ? void 0 : t.preset) && void 0 !== w ? w : L,
        [T, H] = null !== (E = (0, g.Z)(x, _, k)) && void 0 !== E ? E : [],
        Y = null !== (y = null !== (S = null == t ? void 0 : t.resolution) && void 0 !== S ? S : T) && void 0 !== y ? y : M,
        F = null !== (I = null !== (Z = null == t ? void 0 : t.fps) && void 0 !== Z ? Z : H) && void 0 !== I ? I : U,
        z = null !== (D = null == t ? void 0 : t.previewDisabled) && void 0 !== D ? D : u.I0.getSetting(),
        B = null !== (R = null == t ? void 0 : t.soundshareEnabled) && void 0 !== R ? R : V;
    return (
        (0, h.Z)(x, Y, F, _, k, C) || ((x = m.tI.PRESET_VIDEO), (Y = m.LY.RESOLUTION_720), (F = m.ws.FPS_30)),
        u.I0.updateSetting(z),
        (0, i.Rc)({
            preset: x,
            resolution: Y,
            frameRate: F,
            soundshareEnabled: B
        }),
        (0, i.WH)(
            W,
            j,
            ((A = (function (e) {
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
                })(G)
            )),
            (N = N =
                {
                    audioSourceId: (null === (P = G.id) || void 0 === P ? void 0 : P.startsWith(r.vA.CAMERA)) ? c.Z.getInputDeviceId() : void 0,
                    sound: B,
                    previewDisabled: z,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(N))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(N)).forEach(function (e) {
                      Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(N, e));
                  }),
            A)
        ),
        [!0, void 0]
    );
}
