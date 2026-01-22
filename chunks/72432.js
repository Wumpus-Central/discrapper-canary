n.d(t, { A: () => N }), n(896048);
var r = n(141931),
    i = n(401843),
    a = n(15285),
    s = n(674966),
    o = n(253932),
    l = n(929921),
    c = n(734057),
    u = n(71393),
    d = n(430452),
    f = n(309010),
    p = n(287809),
    _ = n(723702),
    h = n(258585),
    m = n(874124),
    g = n(476697),
    E = n(571044),
    b = n(310689),
    y = n(753070),
    O = n(765682);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    return e.hasOwnProperty("pid");
}
function C(e) {
    var t;
    if (T(e)) return { pid: e.pid };
    let n = (0, b.A)(void 0, e, a.Ay.getRunningGames()),
        i = !(0, _.isWindows)() || null == n || (null == e ? void 0 : e.id.startsWith(r.fS.CAMERA)),
        s = null != n ? n.pid : null;
    return i || null == s
        ? (null == s &&
              (null == (t = e.id) ? void 0 : t.startsWith("prepicked:")) &&
              (s = E.Ay.getLastPickedContentPID()),
          {
              sourceId: e.id,
              sourceName: e.name,
              sourceIcon: e.icon,
              sourcePid: s,
          })
        : { pid: s };
}
async function N(e, t) {
    var n, _, E, b, A, S, T, N;
    let R = p.default.getCurrentUser(),
        w = f.A.getVoiceChannelId(),
        P = c.A.getChannel(w),
        D = null == P ? void 0 : P.getGuildId(),
        x = null == (T = u.A.getGuild(D)) ? void 0 : T.premiumTier;
    if (null == R || null == P || null == w) return [!1, "no user or channel"];
    let L = null;
    if (null == (L = "number" == typeof e ? a.Ay.getGameForPID(e) : e)) return [!1, "no source"];
    if (
        !d.A.getUseSystemScreensharePicker() &&
        !(await s.A.hasPermission(O.iL.SCREEN_RECORDING, { showAuthorizationError: !1 }))
    )
        return [!1, "no permission"];
    let { preset: j, resolution: M, fps: k, soundshareEnabled: U } = l.A.getState(),
        G = null != (n = null == t ? void 0 : t.preset) ? n : j,
        { allowAutoQuality: V } = (0, h.eO)({ location: "startStreamWithSource" });
    G !== y.jQ.PRESET_AUTO || V || (G = y.jQ.PRESET_VIDEO);
    let F = G === y.jQ.PRESET_AUTO ? y.jQ.PRESET_VIDEO : G,
        [B, H] = null != (_ = (0, g.A)(F, R, x)) ? _ : [],
        Y = null != (E = null != B ? B : null == t ? void 0 : t.resolution) ? E : M,
        W = null != (b = null != H ? H : null == t ? void 0 : t.fps) ? b : k,
        K = null != (A = null == t ? void 0 : t.previewDisabled) ? A : o.uh.getSetting(),
        z = null != (S = null == t ? void 0 : t.soundshareEnabled) ? S : U;
    return (
        (0, m.A)(F, Y, W, R, x, P) || ((G = y.jQ.PRESET_VIDEO), (Y = y.on.RESOLUTION_720), (W = y.kn.FPS_30)),
        (0, i.Xd)({
            preset: G,
            resolution: Y,
            frameRate: W,
            soundshareEnabled: z,
        }),
        (0, i.XI)(
            D,
            w,
            I(v({}, C(L)), {
                audioSourceId: (null == (N = L.id) ? void 0 : N.startsWith(r.fS.CAMERA))
                    ? null == t
                        ? void 0
                        : t.audioSourceId
                    : void 0,
                sound: z,
                previewDisabled: K,
                goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs,
                analyticsLocations: null == t ? void 0 : t.analyticsLocations,
            }),
        ),
        [!0, void 0]
    );
}
