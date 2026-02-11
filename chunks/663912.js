t.d(n, { default: () => U });
var l = t(627968),
    i = t(64700),
    r = t(735438),
    a = t(311907),
    s = t(397927),
    o = t(827343),
    d = t(442433),
    u = t(956793),
    c = t(401843),
    I = t(820284),
    A = t(688810),
    g = t(74329),
    h = t(304006),
    m = t(479335),
    p = t(274372),
    E = t(915618),
    f = t(572164),
    b = t(399925),
    S = t(643501),
    x = t(652896),
    C = t(401901),
    V = t(670470),
    v = t(972432),
    j = t(616356),
    G = t(961350),
    w = t(734057),
    _ = t(430452),
    T = t(287809),
    y = t(810412),
    O = t(761661),
    D = t(652215),
    L = t(731854),
    N = t(985018);
function M(e) {
    return (0, a.bG)([j.A], () => {
        let n = j.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, x._z)(n) === (0, x._z)(e);
    });
}
function U(e) {
    let n,
        t,
        j,
        U,
        k,
        X,
        R,
        z,
        F,
        P,
        Z,
        J,
        Y,
        B,
        $,
        K,
        q,
        { stream: H, analyticsContext: Q, appContext: W, exitFullscreen: ee, onSelect: en } = e,
        et = (function (e) {
            let n = M(e),
                t = (0, E.A)(_.Ay),
                i = (0, f.Et)(),
                r = e.ownerId === G.default.getId(),
                { enableViewerClipping: o, ignoreSenderPreference: d } = V.A.useExperiment(
                    { location: "StreamContextMenu" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, a.bG)([p.A], () => p.A.getIsAtMaxSaveClipOperations()),
                c = (0, a.bG)([p.A], () => p.A.isViewerClippingAllowedForUser(e.ownerId)) || d;
            return t && o && n
                ? (0, l.jsx)(s.Drp, {
                      id: "clip-stream",
                      disabled: !i || !(r || c) || u,
                      label: N.intl.string(N.t.U4URzP),
                      action: () => (r ? (0, b.l0)() : (0, b.yd)((0, x._z)(e))),
                  })
                : null;
        })(H),
        el = M(H),
        ei =
            ((n = M(H)),
            (t = i.useMemo(
                () =>
                    (0, r.debounce)((e) => {
                        (0, y.YX)(D.uss.GO_LIVE, { type: y.Z5.AUDIO, value: y.IP.SETTING_ADJUSTED, userId: H.ownerId });
                    }, 1e3),
                [H.ownerId],
            )),
            (j = (0, v.A)(H.ownerId, L.x.STREAM, t)),
            n ? j : null),
        er =
            ((k = (0, a.bG)([S.default], () => null != S.default.getRemoteSessionId())),
            (X = (0, a.bG)([w.A], () => w.A.getChannel(H.channelId), [H.channelId])),
            (R = M(H)),
            ((U = (F = null != (z = T.default.getCurrentUser()) && H.ownerId === z.id)
                ? N.intl.string(N.t.S5anIc)
                : R
                  ? N.intl.string(N.t.q3O3J8)
                  : N.intl.string(N.t["7Xq/nV"])),
            k || (!F && R && X?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(s.Drp, {
                      id: "watch",
                      label: U,
                      action: R
                          ? function () {
                                (0, c.vN)((0, x._z)(H)),
                                    (0, y.YX)(D.uss.GO_LIVE, {
                                        type: y.Z5.GO_LIVE,
                                        value: y.IP.DISABLED,
                                        userId: H.ownerId,
                                    });
                            }
                          : function () {
                                u.default.selectVoiceChannel(H.channelId),
                                    (0, c.A9)(H),
                                    (0, y.YX)(D.uss.GO_LIVE, {
                                        type: y.Z5.GO_LIVE,
                                        value: y.IP.ENABLED,
                                        userId: H.ownerId,
                                    });
                            },
                  })),
        ea =
            ((P = M(H)),
            (Z = (0, a.bG)([_.Ay], () => _.Ay.isLocalMute(H.ownerId, L.x.STREAM))),
            (Y = null != (J = T.default.getCurrentUser()) && H.ownerId === J.id),
            !P || Y
                ? null
                : (0, l.jsx)(s.sLh, {
                      id: "mute",
                      label: N.intl.string(N.t.sWmtI6),
                      action: function () {
                          o.A.toggleLocalMute(H.ownerId, L.x.STREAM);
                      },
                      checked: Z,
                  })),
        es = (function (e) {
            let n = M(e),
                t = e.ownerId === G.default.getId(),
                i = _.Ay.supports(L.O5.SIDECHAIN_COMPRESSION),
                r = (0, a.bG)([_.Ay], () => _.Ay.getSidechainCompression()),
                d = (0, a.bG)([_.Ay], () => _.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, A.Ay)();
            return !t && n && i
                ? (0, l.jsxs)(s.rXV, {
                      children: [
                          (0, l.jsx)(s.sLh, {
                              id: "sidechain-compression",
                              label: N.intl.string(N.t["/jwMtn"]),
                              action: () => o.A.setSidechainCompression(!r, { analyticsLocations: u }),
                              checked: r,
                          }),
                          (0, l.jsx)(s.aK1, {
                              id: "sidechain-parameters",
                              label: N.intl.string(N.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(s.i42, {
                                      ...e,
                                      ref: n,
                                      value: d,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          o.A.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                      "aria-label": N.intl.string(N.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(H),
        eo = (0, g.A)(H, W, ee),
        ed = (0, h.h)({ stream: H, channelId: H.channelId }),
        eu = (0, m.u)({ userId: H.ownerId, channelId: H.channelId, guildId: H.guildId }),
        ec =
            ((B = i.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        (0, y.YX)(D.uss.GO_LIVE, {
                            type: y.Z5.SCREEN_SHARE,
                            value: y.IP.SETTING_ADJUSTED,
                            userId: H.ownerId,
                        });
                    }, 1e3),
                [H.ownerId],
            )),
            ($ = (e) => {
                (0, O.Qp)(H, e), B();
            }),
            (K = (0, O.f4)(H)),
            (0, l.jsx)(s.aK1, {
                id: "stream-zoom",
                label: N.intl.string(N.t.B3kEDs),
                control: (e, n) =>
                    (0, l.jsx)(s.i42, {
                        ...e,
                        ref: n,
                        value: K,
                        maxValue: 300,
                        onChange: $,
                        minValue: 100,
                        "aria-label": N.intl.string(N.t.B3kEDs),
                    }),
            })),
        eI =
            ((q = (0, O.XG)(H)),
            (0, l.jsx)(s.sLh, {
                id: "fit",
                label: N.intl.string(N.t.mpnvrV),
                action: () => {
                    (0, O.CZ)(H, q === C.$.CONTAIN ? C.$.COVER : C.$.CONTAIN),
                        (0, y.YX)(D.uss.GO_LIVE, {
                            type: y.Z5.GO_LIVE,
                            value: y.IP.SETTING_ADJUSTED,
                            userId: H.ownerId,
                        });
                },
                checked: q === C.$.COVER,
            }));
    return (0, l.jsx)(I.A, {
        context: Q,
        object: D.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(s.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: d.Z_,
            "aria-label": N.intl.string(N.t.Gl3Q30),
            onSelect: en,
            children: [
                (0, l.jsxs)(s.rXV, { children: [er, et, ea, ed, eu] }),
                (0, l.jsx)(s.rXV, { children: ei }),
                (0, l.jsxs)(s.rXV, { children: [ec, eI] }),
                es,
                (0, l.jsx)(s.rXV, { children: el && eo }),
            ],
        }),
    });
}
