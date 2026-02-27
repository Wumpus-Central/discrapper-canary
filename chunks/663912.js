t.d(n, { default: () => O });
var l = t(627968),
    i = t(64700),
    r = t(735438),
    a = t(311907),
    s = t(397927),
    d = t(827343),
    o = t(442433),
    u = t(956793),
    c = t(401843),
    I = t(820284),
    A = t(688810),
    h = t(74329),
    g = t(304006),
    m = t(479335),
    E = t(643501),
    f = t(652896),
    S = t(401901),
    b = t(972432),
    p = t(616356),
    x = t(961350),
    V = t(734057),
    C = t(430452),
    v = t(287809),
    j = t(810412),
    G = t(761661),
    _ = t(652215),
    w = t(731854),
    T = t(985018);
function L(e) {
    return (0, a.bG)([p.A], () => {
        let n = p.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, f._z)(n) === (0, f._z)(e);
    });
}
function O(e) {
    let n,
        t,
        p,
        O,
        y,
        D,
        N,
        k,
        M,
        X,
        U,
        R,
        z,
        Z,
        F,
        J,
        P,
        { stream: Y, analyticsContext: B, appContext: $, exitFullscreen: H, onSelect: K } = e,
        q = L(Y),
        Q =
            ((n = L(Y)),
            (t = i.useMemo(
                () =>
                    (0, r.debounce)((e) => {
                        (0, j.YX)(_.uss.GO_LIVE, { type: j.Z5.AUDIO, value: j.IP.SETTING_ADJUSTED, userId: Y.ownerId });
                    }, 1e3),
                [Y.ownerId],
            )),
            (p = (0, b.A)(Y.ownerId, w.x.STREAM, t)),
            n ? p : null),
        W =
            ((y = (0, a.bG)([E.default], () => null != E.default.getRemoteSessionId())),
            (D = (0, a.bG)([V.A], () => V.A.getChannel(Y.channelId), [Y.channelId])),
            (N = L(Y)),
            ((O = (M = null != (k = v.default.getCurrentUser()) && Y.ownerId === k.id)
                ? T.intl.string(T.t.S5anIc)
                : N
                  ? T.intl.string(T.t.q3O3J8)
                  : T.intl.string(T.t["7Xq/nV"])),
            y || (!M && N && D?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(s.Drp, {
                      id: "watch",
                      label: O,
                      action: N
                          ? function () {
                                (0, c.vN)((0, f._z)(Y)),
                                    (0, j.YX)(_.uss.GO_LIVE, {
                                        type: j.Z5.GO_LIVE,
                                        value: j.IP.DISABLED,
                                        userId: Y.ownerId,
                                    });
                            }
                          : function () {
                                u.default.selectVoiceChannel(Y.channelId),
                                    (0, c.A9)(Y),
                                    (0, j.YX)(_.uss.GO_LIVE, {
                                        type: j.Z5.GO_LIVE,
                                        value: j.IP.ENABLED,
                                        userId: Y.ownerId,
                                    });
                            },
                  })),
        ee =
            ((X = L(Y)),
            (U = (0, a.bG)([C.Ay], () => C.Ay.isLocalMute(Y.ownerId, w.x.STREAM))),
            (z = null != (R = v.default.getCurrentUser()) && Y.ownerId === R.id),
            !X || z
                ? null
                : (0, l.jsx)(s.sLh, {
                      id: "mute",
                      label: T.intl.string(T.t.sWmtI6),
                      action: function () {
                          d.A.toggleLocalMute(Y.ownerId, w.x.STREAM);
                      },
                      checked: U,
                  })),
        en = (function (e) {
            let n = L(e),
                t = e.ownerId === x.default.getId(),
                i = C.Ay.supports(w.O5.SIDECHAIN_COMPRESSION),
                r = (0, a.bG)([C.Ay], () => C.Ay.getSidechainCompression()),
                o = (0, a.bG)([C.Ay], () => C.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, A.Ay)();
            return !t && n && i
                ? (0, l.jsxs)(s.rXV, {
                      children: [
                          (0, l.jsx)(s.sLh, {
                              id: "sidechain-compression",
                              label: T.intl.string(T.t["/jwMtn"]),
                              action: () => d.A.setSidechainCompression(!r, { analyticsLocations: u }),
                              checked: r,
                          }),
                          (0, l.jsx)(s.aK1, {
                              id: "sidechain-parameters",
                              label: T.intl.string(T.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(s.i42, {
                                      ...e,
                                      ref: n,
                                      value: o,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          d.A.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                      "aria-label": T.intl.string(T.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(Y),
        et = (0, h.A)(Y, $, H),
        el = (0, g.h)({ stream: Y, channelId: Y.channelId }),
        ei = (0, m.u)({ userId: Y.ownerId, channelId: Y.channelId, guildId: Y.guildId }),
        er =
            ((Z = i.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        (0, j.YX)(_.uss.GO_LIVE, {
                            type: j.Z5.SCREEN_SHARE,
                            value: j.IP.SETTING_ADJUSTED,
                            userId: Y.ownerId,
                        });
                    }, 1e3),
                [Y.ownerId],
            )),
            (F = (e) => {
                (0, G.Qp)(Y, e), Z();
            }),
            (J = (0, G.f4)(Y)),
            (0, l.jsx)(s.aK1, {
                id: "stream-zoom",
                label: T.intl.string(T.t.B3kEDs),
                control: (e, n) =>
                    (0, l.jsx)(s.i42, {
                        ...e,
                        ref: n,
                        value: J,
                        maxValue: 300,
                        onChange: F,
                        minValue: 100,
                        "aria-label": T.intl.string(T.t.B3kEDs),
                    }),
            })),
        ea =
            ((P = (0, G.XG)(Y)),
            (0, l.jsx)(s.sLh, {
                id: "fit",
                label: T.intl.string(T.t.mpnvrV),
                action: () => {
                    (0, G.CZ)(Y, P === S.$.CONTAIN ? S.$.COVER : S.$.CONTAIN),
                        (0, j.YX)(_.uss.GO_LIVE, {
                            type: j.Z5.GO_LIVE,
                            value: j.IP.SETTING_ADJUSTED,
                            userId: Y.ownerId,
                        });
                },
                checked: P === S.$.COVER,
            }));
    return (0, l.jsx)(I.A, {
        context: B,
        object: _.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(s.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: o.Z_,
            "aria-label": T.intl.string(T.t.Gl3Q30),
            onSelect: K,
            children: [
                (0, l.jsxs)(s.rXV, { children: [W, ee, el, ei] }),
                (0, l.jsx)(s.rXV, { children: Q }),
                (0, l.jsxs)(s.rXV, { children: [er, ea] }),
                en,
                (0, l.jsx)(s.rXV, { children: q && et }),
            ],
        }),
    });
}
