r.d(t, { Z: () => h }), r(388685);
var n = r(268146),
    l = r(872810),
    o = r(594190),
    i = r(751571),
    u = r(695346),
    a = r(361291),
    c = r(592125),
    s = r(430824),
    d = r(131951),
    f = r(944486),
    p = r(594174),
    b = r(358085),
    v = r(451467),
    O = r(537413),
    g = r(143135),
    m = r(37113),
    y = r(761274);
async function h(e, t) {
    var r, h, w, j, P, S, E, I, D, x;
    let k = p.default.getCurrentUser(),
        C = f.Z.getVoiceChannelId(),
        Z = c.Z.getChannel(C),
        R = null == Z ? void 0 : Z.getGuildId(),
        _ = null == (r = s.Z.getGuild(R)) ? void 0 : r.premiumTier;
    if (null == k || null == Z || null == C) return [!1, 'no user or channel'];
    let A = null;
    if (null == (A = 'number' == typeof e ? o.ZP.getGameForPID(e) : e)) return [!1, 'no source'];
    if (!d.Z.getUseSystemScreensharePicker() && !(await i.Z.hasPermission(y.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) return [!1, 'no permission'];
    let { preset: M, resolution: W, fps: G, soundshareEnabled: N } = a.Z.getState(),
        L = null != (w = null == t ? void 0 : t.preset) ? w : M,
        [V, U] = null != (j = (0, O.Z)(L, k, _)) ? j : [],
        T = null != (P = null != V ? V : null == t ? void 0 : t.resolution) ? P : W,
        H = null != (S = null != U ? U : null == t ? void 0 : t.fps) ? S : G,
        F = null != (E = null == t ? void 0 : t.previewDisabled) ? E : u.I0.getSetting(),
        Y = null != (I = null == t ? void 0 : t.soundshareEnabled) ? I : N;
    return (
        (0, v.Z)(L, T, H, k, _, Z) || ((L = m.tI.PRESET_VIDEO), (T = m.LY.RESOLUTION_720), (H = m.ws.FPS_30)),
        (0, l.Rc)({
            preset: L,
            resolution: T,
            frameRate: H,
            soundshareEnabled: Y
        }),
        (0, l.WH)(
            R,
            C,
            ((D = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {},
                (function (e) {
                    if (e.hasOwnProperty('pid')) return { pid: e.pid };
                    let t = (0, g.Z)(void 0, e, o.ZP.getRunningGames()),
                        r = !(0, b.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(n.vA.CAMERA)) || null == t ? null : t.pid;
                    return null != r
                        ? { pid: r }
                        : {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon
                          };
                })(A)
            )),
            (x = x =
                {
                    audioSourceId: (null == (h = A.id) ? void 0 : h.startsWith(n.vA.CAMERA)) ? (null == t ? void 0 : t.audioSourceId) : void 0,
                    sound: Y,
                    previewDisabled: F,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(x))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(x)).forEach(function (e) {
                      Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(x, e));
                  }),
            D)
        ),
        [!0, void 0]
    );
}
