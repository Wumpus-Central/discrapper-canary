n.d(t, { default: () => G });
var r = n(951288),
    l = n(647438),
    i = n(392711),
    o = n(442837),
    a = n(481060),
    u = n(846027),
    c = n(239091),
    s = n(287734),
    d = n(872810),
    f = n(410575),
    b = n(906732),
    p = n(418469),
    g = n(701098),
    O = n(607783),
    I = n(435064),
    j = n(779618),
    h = n(39604),
    S = n(258609),
    m = n(569545),
    y = n(352978),
    E = n(441167),
    w = n(700994),
    v = n(199902),
    Z = n(314897),
    x = n(592125),
    C = n(131951),
    V = n(594174),
    P = n(444295),
    k = n(1226),
    A = n(981631),
    _ = n(65154),
    D = n(388032);
function N(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    return (0, o.e7)([v.Z], () => {
        let t = v.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, m.V9)(t) === (0, m.V9)(e);
    });
}
function G(e) {
    let { stream: t, analyticsContext: n, appContext: v, exitFullscreen: G, onSelect: M } = e,
        U = (function (e) {
            let t = L(e),
                n = (0, j.Z)(C.Z),
                l = I.Z.getSettings().clipsEnabled,
                i = e.ownerId === Z.default.getId(),
                { enableViewerClipping: u, ignoreSenderPreference: c } = E.Z.useExperiment(
                    { location: "StreamContextMenu" },
                    { autoTrackExposure: !1 },
                ),
                s = (0, o.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
                d = (0, o.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || c;
            return n && u && t
                ? (0, r.jsx)(a.sNh, {
                      id: "clip-stream",
                      disabled: !l || !(i || d) || s,
                      label: D.intl.string(D.t.U4URzP),
                      action: () => (i ? (0, h.br)() : (0, h.C1)((0, m.V9)(e))),
                  })
                : null;
        })(t),
        Q = L(t),
        R = (function (e) {
            let t = L(e),
                n = l.useMemo(
                    () =>
                        (0, i.debounce)((t) => {
                            (0, P.Ws)(A.Odu.GO_LIVE, {
                                type: P.Qu.AUDIO,
                                value: P.bk.SETTING_ADJUSTED,
                                userId: e.ownerId,
                            });
                        }, 1000),
                    [e.ownerId],
                ),
                r = (0, w.Z)(e.ownerId, _.Yn.STREAM, n);
            return t ? r : null;
        })(t),
        B = (function (e) {
            let t,
                n = (0, o.e7)([S.default], () => null != S.default.getRemoteSessionId()),
                l = (0, o.e7)([x.Z], () => x.Z.getChannel(e.channelId), [e.channelId]),
                i = L(e),
                u = V.default.getCurrentUser(),
                c = null != u && e.ownerId === u.id;
            return ((t = c ? D.intl.string(D.t.S5anIc) : i ? D.intl.string(D.t.q3O3J8) : D.intl.string(D.t["7Xq/nV"])),
            n || (!c && i && (null == l ? void 0 : l.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(a.sNh, {
                      id: "watch",
                      label: t,
                      action: i
                          ? function () {
                                (0, d.g)((0, m.V9)(e)),
                                    (0, P.Ws)(A.Odu.GO_LIVE, {
                                        type: P.Qu.GO_LIVE,
                                        value: P.bk.DISABLED,
                                        userId: e.ownerId,
                                    });
                            }
                          : function () {
                                s.default.selectVoiceChannel(e.channelId),
                                    (0, d.rn)(e),
                                    (0, P.Ws)(A.Odu.GO_LIVE, {
                                        type: P.Qu.GO_LIVE,
                                        value: P.bk.ENABLED,
                                        userId: e.ownerId,
                                    });
                            },
                  });
        })(t),
        J = (function (e) {
            let t = L(e),
                n = (0, o.e7)([C.Z], () => C.Z.isLocalMute(e.ownerId, _.Yn.STREAM)),
                l = V.default.getCurrentUser(),
                i = null != l && e.ownerId === l.id;
            return !t || i
                ? null
                : (0, r.jsx)(a.S89, {
                      id: "mute",
                      label: D.intl.string(D.t.sWmtI6),
                      action: function () {
                          u.Z.toggleLocalMute(e.ownerId, _.Yn.STREAM);
                      },
                      checked: n,
                  });
        })(t),
        F = (function (e) {
            let t = L(e),
                n = e.ownerId === Z.default.getId(),
                l = C.Z.supports(_.AN.SIDECHAIN_COMPRESSION),
                i = (0, o.e7)([C.Z], () => C.Z.getSidechainCompression()),
                c = (0, o.e7)([C.Z], () => C.Z.getSidechainCompressionStrength()),
                { analyticsLocations: s } = (0, b.ZP)();
            return !n && t && l
                ? (0, r.jsxs)(a.kSQ, {
                      children: [
                          (0, r.jsx)(a.S89, {
                              id: "sidechain-compression",
                              label: D.intl.string(D.t["/jwMtn"]),
                              action: () => u.Z.setSidechainCompression(!i, { analyticsLocations: s }),
                              checked: i,
                          }),
                          (0, r.jsx)(a.II_, {
                              id: "sidechain-parameters",
                              label: D.intl.string(D.t.fhEzfj),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      a._wy,
                                      T(N({}, e), {
                                          ref: t,
                                          value: c,
                                          maxValue: 100,
                                          onChange: (e) =>
                                              u.Z.setSidechainCompressionStrength(e, { analyticsLocations: s }),
                                          "aria-label": D.intl.string(D.t.fhEzfj),
                                      }),
                                  ),
                          }),
                      ],
                  })
                : null;
        })(t),
        Y = (0, p.Z)(t, v, G),
        W = (0, g.G)({
            stream: t,
            channelId: t.channelId,
        }),
        z = (0, O.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
        }),
        q = (function (e) {
            let t = l.useMemo(
                    () =>
                        (0, i.debounce)(() => {
                            (0, P.Ws)(A.Odu.GO_LIVE, {
                                type: P.Qu.SCREEN_SHARE,
                                value: P.bk.SETTING_ADJUSTED,
                                userId: e.ownerId,
                            });
                        }, 1000),
                    [e.ownerId],
                ),
                n = (n) => {
                    (0, k.cq)(e, n), t();
                },
                o = (0, k.BO)(e);
            return (0, r.jsx)(a.II_, {
                id: "stream-zoom",
                label: D.intl.string(D.t.B3kEDs),
                control: (e, t) =>
                    (0, r.jsx)(
                        a._wy,
                        T(N({}, e), {
                            ref: t,
                            value: o,
                            maxValue: 300,
                            onChange: n,
                            minValue: 100,
                            "aria-label": D.intl.string(D.t.B3kEDs),
                        }),
                    ),
            });
        })(t),
        H = (function (e) {
            let t = (0, k.xN)(e);
            return (0, r.jsx)(a.S89, {
                id: "fit",
                label: D.intl.string(D.t.mpnvrV),
                action: () => {
                    (0, k.gI)(e, t === y.L.CONTAIN ? y.L.COVER : y.L.CONTAIN),
                        (0, P.Ws)(A.Odu.GO_LIVE, {
                            type: P.Qu.GO_LIVE,
                            value: P.bk.SETTING_ADJUSTED,
                            userId: e.ownerId,
                        });
                },
                checked: t === y.L.COVER,
            });
        })(t);
    return (0, r.jsx)(f.Z, {
        context: n,
        object: A.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            navId: "stream-context",
            onClose: c.Zy,
            "aria-label": D.intl.string(D.t.Gl3Q30),
            onSelect: M,
            children: [
                (0, r.jsxs)(a.kSQ, {
                    children: [B, U, J, W, z],
                }),
                (0, r.jsx)(a.kSQ, { children: R }),
                (0, r.jsxs)(a.kSQ, {
                    children: [q, H],
                }),
                F,
                (0, r.jsx)(a.kSQ, { children: Q && Y }),
            ],
        }),
    });
}
