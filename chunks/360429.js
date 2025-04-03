n.d(t, { default: () => M });
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
    N = n(592125),
    x = n(131951),
    C = n(594174),
    E = n(358085),
    P = n(444295),
    k = n(1226),
    W = n(981631),
    V = n(65154),
    A = n(388032);
function L(e) {
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
function D(e, t) {
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
function _(e) {
    return (0, i.e7)([w.Z], () => {
        let t = w.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, m.V9)(t) === (0, m.V9)(e);
    });
}
function M(e) {
    let { stream: t, analyticsContext: n, appContext: w, exitFullscreen: M, onSelect: T } = e,
        B = (function (e) {
            let t = _(e),
                n = (0, O.Z)(x.Z),
                o = p.Z.getSettings().clipsEnabled,
                a = e.ownerId === Z.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = S.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                u = (0, i.e7)([p.Z], () => p.Z.getIsAtMaxSaveClipOperations()),
                d = (0, i.e7)([p.Z], () => p.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(l.sNh, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || u,
                      label: A.NW.string(A.t.U4URzM),
                      action: () => (a ? (0, h.C1)() : (0, h.C1)((0, m.V9)(e)))
                  })
                : null;
        })(t),
        U = _(t),
        G = (function (e) {
            let t = _(e),
                n = (0, v.Z)(e.ownerId, V.Yn.STREAM);
            return t ? n : null;
        })(t),
        J = (function (e) {
            let t,
                n = (0, i.e7)([j.Z], () => null != j.Z.getRemoteSessionId()),
                o = (0, i.e7)([N.Z], () => N.Z.getChannel(e.channelId), [e.channelId]),
                a = _(e),
                u = C.default.getCurrentUser(),
                d = null != u && e.ownerId === u.id;
            return ((t = d ? A.NW.string(A.t.S5anIS) : a ? A.NW.string(A.t.q3O3Jy) : A.NW.string(A.t['7Xq/nZ'])), n || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(l.sNh, {
                      id: 'watch',
                      label: t,
                      action: a
                          ? function () {
                                (0, s.g)((0, m.V9)(e)),
                                    (0, P.Ws)(W.Odu.GO_LIVE, {
                                        type: P.Qu.GO_LIVE,
                                        value: P.bk.DISABLED,
                                        userId: e.ownerId
                                    });
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId),
                                    (0, s.rn)(e),
                                    (0, P.Ws)(W.Odu.GO_LIVE, {
                                        type: P.Qu.GO_LIVE,
                                        value: P.bk.ENABLED,
                                        userId: e.ownerId
                                    });
                            }
                  });
        })(t),
        Q = (function (e) {
            let t = _(e),
                n = (0, i.e7)([x.Z], () => x.Z.isLocalMute(e.ownerId, V.Yn.STREAM)),
                a = C.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(l.S89, {
                      id: 'mute',
                      label: A.NW.string(A.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, V.Yn.STREAM);
                      },
                      checked: n
                  });
        })(t),
        R = (function (e) {
            let t = _(e),
                n = e.ownerId === Z.default.getId(),
                { sidechainAvailable: a } = I.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                c = (0, i.e7)([x.Z], () => x.Z.getSidechainCompression()),
                s = (0, i.e7)([x.Z], () => x.Z.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, d.ZP)();
            return n || !t || !a || (0, E.isWeb)()
                ? null
                : (0, r.jsxs)(l.kSQ, {
                      children: [
                          (0, r.jsx)(l.S89, {
                              id: 'sidechain-compression',
                              label: A.NW.string(A.t['/jwMtr']),
                              action: () => o.Z.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c
                          }),
                          (0, r.jsx)(l.II_, {
                              id: 'sidechain-parameters',
                              label: A.NW.string(A.t.fhEzfn),
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      l._wy,
                                      D(L({}, e), {
                                          ref: t,
                                          value: s,
                                          maxValue: 100,
                                          onChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                          'aria-label': A.NW.string(A.t.fhEzfn)
                                      })
                                  )
                          })
                      ]
                  });
        })(t),
        F = (0, f.Z)(t, w, M),
        Y = (0, b.G)({
            stream: t,
            channelId: t.channelId
        }),
        z = (0, g.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId
        }),
        q = (function (e) {
            let t = (t) => {
                    (0, k.cq)(e, t);
                },
                n = (0, k.BO)(e);
            return (0, r.jsx)(l.II_, {
                id: 'stream-zoom',
                label: A.NW.string(A.t.B3kEDg),
                control: (e, i) =>
                    (0, r.jsx)(
                        l._wy,
                        D(L({}, e), {
                            ref: i,
                            value: n,
                            maxValue: 300,
                            onChange: t,
                            minValue: 100,
                            'aria-label': A.NW.string(A.t.B3kEDg)
                        })
                    )
            });
        })(t),
        H = (function (e) {
            let t = (0, k.xN)(e);
            return (0, r.jsx)(l.S89, {
                id: 'fit',
                label: A.NW.string(A.t.mpnvra),
                action: () => {
                    (0, k.gI)(e, t === y.L.CONTAIN ? y.L.COVER : y.L.CONTAIN);
                },
                checked: t === y.L.COVER
            });
        })(t);
    return (0, r.jsx)(u.Z, {
        context: n,
        object: W.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'stream-context',
            onClose: a.Zy,
            'aria-label': A.NW.string(A.t.Gl3Q39),
            onSelect: T,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    children: [J, B, Q, Y, z]
                }),
                (0, r.jsx)(l.kSQ, { children: G }),
                (0, r.jsxs)(l.kSQ, {
                    children: [q, H]
                }),
                R,
                (0, r.jsx)(l.kSQ, { children: U && F })
            ]
        })
    });
}
