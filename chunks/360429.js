n.d(t, { default: () => _ });
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
    b = n(607783),
    g = n(435064),
    p = n(779618),
    O = n(39604),
    h = n(258609),
    j = n(569545),
    m = n(352978),
    y = n(111672),
    I = n(441167),
    S = n(700994),
    v = n(199902),
    w = n(314897),
    Z = n(592125),
    N = n(131951),
    x = n(594174),
    C = n(358085),
    E = n(444295),
    P = n(1226),
    k = n(981631),
    W = n(65154),
    V = n(388032);
function A(e) {
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
function L(e, t) {
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
function D(e) {
    return (0, i.e7)([v.Z], () => {
        let t = v.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, j.V9)(t) === (0, j.V9)(e);
    });
}
function _(e) {
    let { stream: t, analyticsContext: n, appContext: v, exitFullscreen: _, onSelect: M } = e,
        T = (function (e) {
            let t = D(e),
                n = (0, p.Z)(N.Z),
                o = g.Z.getSettings().clipsEnabled,
                a = e.ownerId === w.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = I.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, i.e7)([g.Z], () => g.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([g.Z], () => g.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(l.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: V.NW.string(V.t.U4URzM),
                      action: () => (a ? (0, O.C1)() : (0, O.C1)((0, j.V9)(e)))
                  })
                : null;
        })(t),
        B = D(t),
        U = (function (e) {
            let t = D(e),
                n = (0, S.Z)(e.ownerId, W.Yn.STREAM);
            return t ? n : null;
        })(t),
        G = (function (e) {
            let t;
            let n = (0, i.e7)([h.Z], () => null != h.Z.getRemoteSessionId()),
                o = (0, i.e7)([Z.Z], () => Z.Z.getChannel(e.channelId), [e.channelId]),
                a = D(e),
                u = x.default.getCurrentUser(),
                d = null != u && e.ownerId === u.id;
            return ((t = d ? V.NW.string(V.t.S5anIS) : a ? V.NW.string(V.t.q3O3Jy) : V.NW.string(V.t['7Xq/nZ'])), n || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'watch',
                      label: t,
                      action: a
                          ? function () {
                                (0, s.g)((0, j.V9)(e)),
                                    (0, E.Ws)(k.Odu.GO_LIVE, {
                                        type: E.Qu.GO_LIVE,
                                        value: E.bk.DISABLED,
                                        userId: e.ownerId
                                    });
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId),
                                    (0, s.rn)(e),
                                    (0, E.Ws)(k.Odu.GO_LIVE, {
                                        type: E.Qu.GO_LIVE,
                                        value: E.bk.ENABLED,
                                        userId: e.ownerId
                                    });
                            }
                  });
        })(t),
        J = (function (e) {
            let t = D(e),
                n = (0, i.e7)([N.Z], () => N.Z.isLocalMute(e.ownerId, W.Yn.STREAM)),
                a = x.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(l.S89, {
                      id: 'mute',
                      label: V.NW.string(V.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, W.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        Q = (function (e) {
            let t = D(e),
                n = e.ownerId === w.default.getId(),
                { sidechainAvailable: a } = y.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, i.e7)([N.Z], () => N.Z.getSidechainCompression()),
                s = (0, i.e7)([N.Z], () => N.Z.getSidechainCompressionStrength());
            return n || !t || !a || (0, C.isWeb)()
                ? null
                : (0, r.jsxs)(l.kSQ, {
                      children: [
                          (0, r.jsx)(l.S89, {
                              id: 'sidechain-compression',
                              label: V.NW.string(V.t['/jwMtr']),
                              action: () => o.Z.setSidechainCompression(!c),
                              checked: c
                          }),
                          (0, r.jsx)(l.II_, {
                              id: 'sidechain-parameters',
                              label: V.NW.string(V.t.fhEzfn),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      l._wy,
                                      L(A({}, e), {
                                          ref: t,
                                          value: s,
                                          maxValue: 100,
                                          onChange: (e) => o.Z.setSidechainCompressionStrength(e),
                                          'aria-label': V.NW.string(V.t.fhEzfn)
                                      })
                                  )
                          })
                      ]
                  });
        })(t),
        R = (0, d.Z)(t, v, _),
        F = (0, f.G)({
            stream: t,
            channelId: t.channelId
        }),
        Y = (0, b.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId
        }),
        z = (function (e) {
            let t = (t) => {
                    (0, P.cq)(e, t);
                },
                n = (0, P.BO)(e);
            return (0, r.jsx)(l.II_, {
                id: 'stream-zoom',
                label: V.NW.string(V.t.B3kEDg),
                control: (e, i) =>
                    (0, r.jsx)(
                        l._wy,
                        L(A({}, e), {
                            ref: i,
                            value: n,
                            maxValue: 300,
                            onChange: t,
                            minValue: 100,
                            'aria-label': V.NW.string(V.t.B3kEDg)
                        })
                    )
            });
        })(t),
        q = (function (e) {
            let t = (0, P.xN)(e);
            return (0, r.jsx)(l.S89, {
                id: 'fit',
                label: V.NW.string(V.t.mpnvra),
                action: () => {
                    (0, P.gI)(e, t === m.L.CONTAIN ? m.L.COVER : m.L.CONTAIN);
                },
                checked: t === m.L.COVER
            });
        })(t);
    return (0, r.jsx)(u.Z, {
        context: n,
        object: k.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'stream-context',
            onClose: a.Zy,
            'aria-label': V.NW.string(V.t.Gl3Q39),
            onSelect: M,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    children: [G, T, J, F, Y]
                }),
                (0, r.jsx)(l.kSQ, { children: U }),
                (0, r.jsxs)(l.kSQ, {
                    children: [z, q]
                }),
                Q,
                (0, r.jsx)(l.kSQ, { children: B && R })
            ]
        })
    });
}
