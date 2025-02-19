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
    d = n(418469),
    f = n(701098),
    g = n(607783),
    b = n(435064),
    p = n(779618),
    m = n(39604),
    O = n(258609),
    h = n(569545),
    j = n(352978),
    S = n(111672),
    y = n(441167),
    v = n(700994),
    Z = n(199902),
    w = n(314897),
    I = n(592125),
    x = n(131951),
    C = n(594174),
    N = n(358085),
    P = n(1226),
    E = n(981631),
    k = n(65154),
    W = n(388032);
function V(e) {
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
function A(e, t) {
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
    return (0, i.e7)([Z.Z], () => {
        let t = Z.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, h.V9)(t) === (0, h.V9)(e);
    });
}
function T(e) {
    let { stream: t, analyticsContext: n, appContext: Z, exitFullscreen: T, onSelect: D } = e,
        _ = (function (e) {
            let t = M(e),
                n = (0, p.Z)(x.Z),
                o = b.Z.getSettings().clipsEnabled,
                a = e.ownerId === w.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = y.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, i.e7)([b.Z], () => b.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([b.Z], () => b.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(l.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: W.NW.string(W.t.U4URzM),
                      action: () => (a ? (0, m.C1)() : (0, m.C1)((0, h.V9)(e)))
                  })
                : null;
        })(t),
        L = M(t),
        U = (function (e) {
            let t = M(e),
                n = (0, v.Z)(e.ownerId, k.Yn.STREAM);
            return t ? n : null;
        })(t),
        J = (function (e) {
            let t;
            let n = (0, i.e7)([O.Z], () => null != O.Z.getRemoteSessionId()),
                o = (0, i.e7)([I.Z], () => I.Z.getChannel(e.channelId), [e.channelId]),
                a = M(e),
                u = C.default.getCurrentUser(),
                d = null != u && e.ownerId === u.id;
            return ((t = d ? W.NW.string(W.t.S5anIS) : a ? W.NW.string(W.t.q3O3Jy) : W.NW.string(W.t['7Xq/nZ'])), n || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'watch',
                      label: t,
                      action: a
                          ? function () {
                                (0, s.g)((0, h.V9)(e));
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e);
                            }
                  });
        })(t),
        R = (function (e) {
            let t = M(e),
                n = (0, i.e7)([x.Z], () => x.Z.isLocalMute(e.ownerId, k.Yn.STREAM)),
                a = C.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(l.S89, {
                      id: 'mute',
                      label: W.NW.string(W.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, k.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        B = (function (e) {
            let t = M(e),
                n = e.ownerId === w.default.getId(),
                { sidechainAvailable: a } = S.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, i.e7)([x.Z], () => x.Z.getSidechainCompression()),
                s = (0, i.e7)([x.Z], () => x.Z.getSidechainCompressionStrength());
            return n || !t || !a || (0, N.isWeb)()
                ? null
                : (0, r.jsxs)(l.kSQ, {
                      children: [
                          (0, r.jsx)(l.S89, {
                              id: 'sidechain-compression',
                              label: W.NW.string(W.t['/jwMtr']),
                              action: () => o.Z.setSidechainCompression(!c),
                              checked: c
                          }),
                          (0, r.jsx)(l.II_, {
                              id: 'sidechain-parameters',
                              label: W.NW.string(W.t.fhEzfn),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      l._wy,
                                      A(V({}, e), {
                                          ref: t,
                                          value: s,
                                          maxValue: 100,
                                          onChange: (e) => o.Z.setSidechainCompressionStrength(e),
                                          'aria-label': W.NW.string(W.t.fhEzfn)
                                      })
                                  )
                          })
                      ]
                  });
        })(t),
        F = (0, d.Z)(t, Z, T),
        Q = (0, f.G)({
            stream: t,
            channelId: t.channelId,
            location: 'StreamContextMenu'
        }),
        Y = (0, g.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
            location: 'StreamContextMenu'
        }),
        z = (function (e) {
            let t = (t) => {
                    (0, P.cq)(e, t);
                },
                n = (0, P.BO)(e);
            return (0, r.jsx)(l.II_, {
                id: 'stream-zoom',
                label: W.NW.string(W.t.B3kEDg),
                control: (e, i) =>
                    (0, r.jsx)(
                        l._wy,
                        A(V({}, e), {
                            ref: i,
                            value: n,
                            maxValue: 300,
                            onChange: t,
                            minValue: 100,
                            'aria-label': W.NW.string(W.t.B3kEDg)
                        })
                    )
            });
        })(t),
        q = (function (e) {
            let t = (0, P.xN)(e);
            return (0, r.jsx)(l.S89, {
                id: 'fit',
                label: W.NW.string(W.t.mpnvra),
                action: () => {
                    (0, P.gI)(e, t === j.L.CONTAIN ? j.L.COVER : j.L.CONTAIN);
                },
                checked: t === j.L.COVER
            });
        })(t);
    return (0, r.jsx)(u.Z, {
        context: n,
        object: E.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'stream-context',
            onClose: a.Zy,
            'aria-label': W.NW.string(W.t.Gl3Q39),
            onSelect: D,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    children: [J, _, R, Q, Y]
                }),
                (0, r.jsx)(l.kSQ, { children: U }),
                (0, r.jsxs)(l.kSQ, {
                    children: [z, q]
                }),
                B,
                (0, r.jsx)(l.kSQ, { children: L && F })
            ]
        })
    });
}
