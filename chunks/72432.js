n.d(t, {
    A: () => b,
}),
    n(896048);
var l = n(141931),
    r = n(401843),
    i = n(15285),
    u = n(674966),
    a = n(253932),
    o = n(929921),
    s = n(734057),
    d = n(71393),
    c = n(430452),
    m = n(309010),
    A = n(287809),
    h = n(723702),
    f = n(258585),
    E = n(874124),
    p = n(476697),
    g = n(571044),
    O = n(310689),
    T = n(753070),
    _ = n(765682);
let I = new Set(["356943187589201930"]);
async function b(e, t) {
    var n, b, N, C, P, S, y, D, R, v;
    let G = A.default.getCurrentUser(),
        w = m.A.getVoiceChannelId(),
        L = s.A.getChannel(w),
        k = null == L ? void 0 : L.getGuildId(),
        J = null == (y = d.A.getGuild(k)) ? void 0 : y.premiumTier;
    if (null == G || null == L || null == w) return [!1, "no user or channel"];
    let U = null;
    if (null == (U = "number" == typeof e ? i.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !c.A.getUseSystemScreensharePicker() &&
        !(await u.A.hasPermission(_.iL.SCREEN_RECORDING, {
            showAuthorizationError: !1,
        }))
    )
        return [!1, "no permission"];
    let { preset: M, resolution: j, fps: $, soundshareEnabled: B } = o.A.getState(),
        H = null != (n = null == t ? void 0 : t.preset) ? n : M,
        { allowAutoQuality: x } = (0, f.eO)({
            location: "startStreamWithSource",
        });
    H !== T.jQ.PRESET_AUTO || x || (H = T.jQ.PRESET_VIDEO);
    let V = H === T.jQ.PRESET_AUTO ? T.jQ.PRESET_VIDEO : H,
        [W, F] = null != (b = (0, p.A)(V, G, J)) ? b : [],
        Q = null != (N = null != W ? W : null == t ? void 0 : t.resolution) ? N : j,
        X = null != (C = null != F ? F : null == t ? void 0 : t.fps) ? C : $,
        q = null != (P = null == t ? void 0 : t.previewDisabled) ? P : a.uh.getSetting(),
        z = null != (S = null == t ? void 0 : t.soundshareEnabled) ? S : B;
    return (
        (0, E.A)(V, Q, X, G, J, L) || ((H = T.jQ.PRESET_VIDEO), (Q = T.on.RESOLUTION_720), (X = T.kn.FPS_30)),
        (0, r.Xd)({
            preset: H,
            resolution: Q,
            frameRate: X,
            soundshareEnabled: z,
        }),
        (0, r.XI)(
            k,
            w,
            ((R = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {},
                (function (e) {
                    var t;
                    let n;
                    if (e.hasOwnProperty("pid"))
                        return {
                            pid: e.pid,
                        };
                    let r = (0, O.A)(void 0, e, i.Ay.getRunningGames()),
                        u =
                            !(0, h.isWindows)() ||
                            null == r ||
                            (null != (n = r.id) && I.has(n)) ||
                            (null == e ? void 0 : e.id.startsWith(l.fS.CAMERA)),
                        a = null != r ? r.pid : null;
                    return u || null == a
                        ? (null == a &&
                              (null == (t = e.id) ? void 0 : t.startsWith("prepicked:")) &&
                              (a = g.Ay.getLastPickedContentPID()),
                          {
                              sourceId: e.id,
                              sourceName: e.name,
                              sourceIcon: e.icon,
                              sourcePid: a,
                          })
                        : {
                              pid: a,
                          };
                })(U),
            )),
            (v = v =
                {
                    audioSourceId: (null == (D = U.id) ? void 0 : D.startsWith(l.fS.CAMERA))
                        ? null == t
                            ? void 0
                            : t.audioSourceId
                        : void 0,
                    sound: z,
                    previewDisabled: q,
                    goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
                    analyticsLocations: null == t ? void 0 : t.analyticsLocations,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(v))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(v)).forEach(function (e) {
                      Object.defineProperty(R, e, Object.getOwnPropertyDescriptor(v, e));
                  }),
            R),
        ),
        [!0, void 0]
    );
}
