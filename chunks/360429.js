n.d(t, { default: () => L });
var r = n(951288);
n(647438);
var l = n(392711),
    i = n(442837),
    o = n(481060),
    a = n(846027),
    c = n(239091),
    u = n(287734),
    s = n(872810),
    d = n(410575),
    f = n(906732),
    b = n(418469),
    p = n(701098),
    g = n(607783),
    O = n(435064),
    I = n(779618),
    j = n(39604),
    h = n(258609),
    S = n(569545),
    m = n(352978),
    y = n(441167),
    E = n(700994),
    v = n(199902),
    w = n(314897),
    Z = n(592125),
    x = n(131951),
    C = n(594174),
    V = n(444295),
    P = n(1226),
    k = n(981631),
    A = n(65154),
    _ = n(388032);
function D(e) {
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
function N(e, t) {
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
function T(e) {
    return (0, i.e7)([v.Z], () => {
        let t = v.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, S.V9)(t) === (0, S.V9)(e);
    });
}
function L(e) {
    let { stream: t, analyticsContext: n, appContext: v, exitFullscreen: L, onSelect: G } = e,
        U = (function (e) {
            let t = T(e),
                n = (0, I.Z)(x.Z),
                l = O.Z.getSettings().clipsEnabled,
                a = e.ownerId === w.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: u } = y.Z.useExperiment(
                    { location: "StreamContextMenu" },
                    { autoTrackExposure: !1 },
                ),
                s = (0, i.e7)([O.Z], () => O.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([O.Z], () => O.Z.isViewerClippingAllowedForUser(e.ownerId)) || u;
            return n && c && t
                ? (0, r.jsx)(o.sNh, {
                      id: "clip-stream",
                      disabled: !l || !(a || d) || s,
                      label: _.intl.string(_.t.U4URzP),
                      action: () => (a ? (0, j.br)() : (0, j.C1)((0, S.V9)(e))),
                  })
                : null;
        })(t),
        M = T(t),
        Q = (function (e) {
            let t = T(e),
                n = (0, l.debounce)((t) => {
                    (0, V.Ws)(k.Odu.GO_LIVE, {
                        type: V.Qu.AUDIO,
                        value: V.bk.SETTING_ADJUSTED,
                        userId: e.ownerId,
                    });
                }, 1000),
                r = (0, E.Z)(e.ownerId, A.Yn.STREAM, n);
            return t ? r : null;
        })(t),
        R = (function (e) {
            let t,
                n = (0, i.e7)([h.default], () => null != h.default.getRemoteSessionId()),
                l = (0, i.e7)([Z.Z], () => Z.Z.getChannel(e.channelId), [e.channelId]),
                a = T(e),
                c = C.default.getCurrentUser(),
                d = null != c && e.ownerId === c.id;
            return ((t = d ? _.intl.string(_.t.S5anIc) : a ? _.intl.string(_.t.q3O3J8) : _.intl.string(_.t["7Xq/nV"])),
            n || (!d && a && (null == l ? void 0 : l.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(o.sNh, {
                      id: "watch",
                      label: t,
                      action: a
                          ? function () {
                                (0, s.g)((0, S.V9)(e)),
                                    (0, V.Ws)(k.Odu.GO_LIVE, {
                                        type: V.Qu.GO_LIVE,
                                        value: V.bk.DISABLED,
                                        userId: e.ownerId,
                                    });
                            }
                          : function () {
                                u.default.selectVoiceChannel(e.channelId),
                                    (0, s.rn)(e),
                                    (0, V.Ws)(k.Odu.GO_LIVE, {
                                        type: V.Qu.GO_LIVE,
                                        value: V.bk.ENABLED,
                                        userId: e.ownerId,
                                    });
                            },
                  });
        })(t),
        B = (function (e) {
            let t = T(e),
                n = (0, i.e7)([x.Z], () => x.Z.isLocalMute(e.ownerId, A.Yn.STREAM)),
                l = C.default.getCurrentUser(),
                c = null != l && e.ownerId === l.id;
            return !t || c
                ? null
                : (0, r.jsx)(o.S89, {
                      id: "mute",
                      label: _.intl.string(_.t.sWmtI6),
                      action: function () {
                          a.Z.toggleLocalMute(e.ownerId, A.Yn.STREAM);
                      },
                      checked: n,
                  });
        })(t),
        J = (function (e) {
            let t = T(e),
                n = e.ownerId === w.default.getId(),
                l = x.Z.supports(A.AN.SIDECHAIN_COMPRESSION),
                c = (0, i.e7)([x.Z], () => x.Z.getSidechainCompression()),
                u = (0, i.e7)([x.Z], () => x.Z.getSidechainCompressionStrength()),
                { analyticsLocations: s } = (0, f.ZP)();
            return !n && t && l
                ? (0, r.jsxs)(o.kSQ, {
                      children: [
                          (0, r.jsx)(o.S89, {
                              id: "sidechain-compression",
                              label: _.intl.string(_.t["/jwMtn"]),
                              action: () => a.Z.setSidechainCompression(!c, { analyticsLocations: s }),
                              checked: c,
                          }),
                          (0, r.jsx)(o.II_, {
                              id: "sidechain-parameters",
                              label: _.intl.string(_.t.fhEzfj),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      o._wy,
                                      N(D({}, e), {
                                          ref: t,
                                          value: u,
                                          maxValue: 100,
                                          onChange: (e) =>
                                              a.Z.setSidechainCompressionStrength(e, { analyticsLocations: s }),
                                          "aria-label": _.intl.string(_.t.fhEzfj),
                                      }),
                                  ),
                          }),
                      ],
                  })
                : null;
        })(t),
        F = (0, b.Z)(t, v, L),
        Y = (0, p.G)({
            stream: t,
            channelId: t.channelId,
        }),
        W = (0, g.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
        }),
        z = (function (e) {
            let t = (0, l.debounce)(() => {
                    (0, V.Ws)(k.Odu.GO_LIVE, {
                        type: V.Qu.SCREEN_SHARE,
                        value: V.bk.SETTING_ADJUSTED,
                        userId: e.ownerId,
                    });
                }, 1000),
                n = (n) => {
                    (0, P.cq)(e, n), t();
                },
                i = (0, P.BO)(e);
            return (0, r.jsx)(o.II_, {
                id: "stream-zoom",
                label: _.intl.string(_.t.B3kEDs),
                control: (e, t) =>
                    (0, r.jsx)(
                        o._wy,
                        N(D({}, e), {
                            ref: t,
                            value: i,
                            maxValue: 300,
                            onChange: n,
                            minValue: 100,
                            "aria-label": _.intl.string(_.t.B3kEDs),
                        }),
                    ),
            });
        })(t),
        q = (function (e) {
            let t = (0, P.xN)(e);
            return (0, r.jsx)(o.S89, {
                id: "fit",
                label: _.intl.string(_.t.mpnvrV),
                action: () => {
                    (0, P.gI)(e, t === m.L.CONTAIN ? m.L.COVER : m.L.CONTAIN),
                        (0, V.Ws)(k.Odu.GO_LIVE, {
                            type: V.Qu.GO_LIVE,
                            value: V.bk.SETTING_ADJUSTED,
                            userId: e.ownerId,
                        });
                },
                checked: t === m.L.COVER,
            });
        })(t);
    return (0, r.jsx)(d.Z, {
        context: n,
        object: k.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            navId: "stream-context",
            onClose: c.Zy,
            "aria-label": _.intl.string(_.t.Gl3Q30),
            onSelect: G,
            children: [
                (0, r.jsxs)(o.kSQ, {
                    children: [R, U, B, Y, W],
                }),
                (0, r.jsx)(o.kSQ, { children: Q }),
                (0, r.jsxs)(o.kSQ, {
                    children: [z, q],
                }),
                J,
                (0, r.jsx)(o.kSQ, { children: M && F }),
            ],
        }),
    });
}
