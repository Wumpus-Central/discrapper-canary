n.d(t, { default: () => T });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(846027),
    a = n(239091),
    c = n(287734),
    s = n(872810),
    u = n(410575),
    d = n(906732),
    f = n(418469),
    b = n(701098),
    g = n(607783),
    p = n(435064),
    O = n(779618),
    h = n(39604),
    j = n(258609),
    m = n(569545),
    y = n(352978),
    I = n(111672),
    S = n(441167),
    v = n(700994),
    w = n(199902),
    Z = n(314897),
    x = n(592125),
    C = n(131951),
    E = n(594174),
    P = n(358085),
    k = n(444295),
    V = n(1226),
    A = n(981631),
    L = n(65154),
    N = n(388032);
function D(e) {
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
}
function _(e, t) {
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
function M(e) {
    return (0, i.e7)([w.Z], () => {
        let t = w.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, m.V9)(t) === (0, m.V9)(e);
    });
}
function T(e) {
    let { stream: t, analyticsContext: n, appContext: w, exitFullscreen: T, onSelect: B } = e,
        U = (function (e) {
            let t = M(e),
                n = (0, O.Z)(C.Z),
                o = p.Z.getSettings().clipsEnabled,
                a = e.ownerId === Z.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = S.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, i.e7)([p.Z], () => p.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([p.Z], () => p.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(l.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: N.intl.string(N.t.U4URzM),
                      action: () => (a ? (0, h.C1)() : (0, h.C1)((0, m.V9)(e)))
                  })
                : null;
        })(t),
        G = M(t),
        J = (function (e) {
            let t = M(e),
                n = (0, v.Z)(e.ownerId, L.Yn.STREAM);
            return t ? n : null;
        })(t),
        Q = (function (e) {
            let t,
                n = (0, i.e7)([j.Z], () => null != j.Z.getRemoteSessionId()),
                o = (0, i.e7)([x.Z], () => x.Z.getChannel(e.channelId), [e.channelId]),
                a = M(e),
                u = E.default.getCurrentUser(),
                d = null != u && e.ownerId === u.id;
            return ((t = d ? N.intl.string(N.t.S5anIS) : a ? N.intl.string(N.t.q3O3Jy) : N.intl.string(N.t['7Xq/nZ'])), n || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'watch',
                      label: t,
                      action: a
                          ? function () {
                                (0, s.g)((0, m.V9)(e)),
                                    (0, k.Ws)(A.Odu.GO_LIVE, {
                                        type: k.Qu.GO_LIVE,
                                        value: k.bk.DISABLED,
                                        userId: e.ownerId
                                    });
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId),
                                    (0, s.rn)(e),
                                    (0, k.Ws)(A.Odu.GO_LIVE, {
                                        type: k.Qu.GO_LIVE,
                                        value: k.bk.ENABLED,
                                        userId: e.ownerId
                                    });
                            }
                  });
        })(t),
        R = (function (e) {
            let t = M(e),
                n = (0, i.e7)([C.Z], () => C.Z.isLocalMute(e.ownerId, L.Yn.STREAM)),
                a = E.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(l.S89, {
                      id: 'mute',
                      label: N.intl.string(N.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, L.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        F = (function (e) {
            let t = M(e),
                n = e.ownerId === Z.default.getId(),
                { sidechainAvailable: a } = I.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, i.e7)([C.Z], () => C.Z.getSidechainCompression()),
                s = (0, i.e7)([C.Z], () => C.Z.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, d.ZP)();
            return n || !t || !a || (0, P.isWeb)()
                ? null
                : (0, r.jsxs)(l.kSQ, {
                      children: [
                          (0, r.jsx)(l.S89, {
                              id: 'sidechain-compression',
                              label: N.intl.string(N.t['/jwMtr']),
                              action: () => o.Z.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c
                          }),
                          (0, r.jsx)(l.II_, {
                              id: 'sidechain-parameters',
                              label: N.intl.string(N.t.fhEzfn),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      l._wy,
                                      _(D({}, e), {
                                          ref: t,
                                          value: s,
                                          maxValue: 100,
                                          onChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                          'aria-label': N.intl.string(N.t.fhEzfn)
                                      })
                                  )
                          })
                      ]
                  });
        })(t),
        Y = (0, f.Z)(t, w, T),
        z = (0, b.G)({
            stream: t,
            channelId: t.channelId
        }),
        W = (0, g.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId
        }),
        q = (function (e) {
            let t = (t) => {
                    (0, V.cq)(e, t);
                },
                n = (0, V.BO)(e);
            return (0, r.jsx)(l.II_, {
                id: 'stream-zoom',
                label: N.intl.string(N.t.B3kEDg),
                control: (e, i) =>
                    (0, r.jsx)(
                        l._wy,
                        _(D({}, e), {
                            ref: i,
                            value: n,
                            maxValue: 300,
                            onChange: t,
                            minValue: 100,
                            'aria-label': N.intl.string(N.t.B3kEDg)
                        })
                    )
            });
        })(t),
        H = (function (e) {
            let t = (0, V.xN)(e);
            return (0, r.jsx)(l.S89, {
                id: 'fit',
                label: N.intl.string(N.t.mpnvra),
                action: () => {
                    (0, V.gI)(e, t === y.L.CONTAIN ? y.L.COVER : y.L.CONTAIN);
                },
                checked: t === y.L.COVER
            });
        })(t);
    return (0, r.jsx)(u.Z, {
        context: n,
        object: A.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'stream-context',
            onClose: a.Zy,
            'aria-label': N.intl.string(N.t.Gl3Q39),
            onSelect: B,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    children: [Q, U, R, z, W]
                }),
                (0, r.jsx)(l.kSQ, { children: J }),
                (0, r.jsxs)(l.kSQ, {
                    children: [q, H]
                }),
                F,
                (0, r.jsx)(l.kSQ, { children: G && Y })
            ]
        })
    });
}
