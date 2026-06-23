t.d(n, { default: () => y });
var l = t(627968),
    i = t(64700),
    r = t(735438),
    s = t(17928),
    a = t(477782),
    d = t(964355),
    u = t(980707),
    o = t(827343),
    c = t(442433),
    I = t(730852),
    h = t(401843),
    A = t(820284),
    E = t(688810),
    g = t(74329),
    S = t(304006),
    f = t(479335),
    p = t(643501),
    m = t(652896),
    x = t(51092),
    C = t(972432),
    b = t(616356),
    G = t(495544),
    _ = t(734057),
    j = t(394459),
    w = t(287809),
    O = t(810412),
    V = t(761661),
    T = t(652215),
    L = t(731854),
    D = t(375708);
function N(e) {
    return (0, s.bG)([b.A], () => {
        let n = b.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, m._z)(n) === (0, m._z)(e);
    });
}
function y(e) {
    let n,
        t,
        b,
        y,
        X,
        v,
        M,
        k,
        R,
        U,
        Z,
        z,
        P,
        Y,
        { stream: B, analyticsContext: J, appContext: $, exitFullscreen: q, onSelect: H } = e,
        K = N(B),
        Q =
            ((n = N(B)),
            (t = i.useMemo(
                () =>
                    (0, r.debounce)((e) => {
                        (0, O.YX)(T.uss.GO_LIVE, { type: O.Z5.AUDIO, value: O.IP.SETTING_ADJUSTED, userId: B.ownerId });
                    }, 1e3),
                [B.ownerId],
            )),
            (b = (0, C.A)(B.ownerId, L.x.STREAM, t)),
            n ? b : null),
        W =
            ((X = (0, s.bG)([p.default], () => null != p.default.getRemoteSessionId())),
            (v = (0, s.bG)([_.A], () => _.A.getChannel(B.channelId), [B.channelId])),
            (M = N(B)),
            ((y = (R = null != (k = w.default.getCurrentUser()) && B.ownerId === k.id)
                ? D.intl.string(D.t.S5anIc)
                : M
                  ? D.intl.string(D.t.q3O3J8)
                  : D.intl.string(D.t["7Xq/nV"])),
            X || (!R && M && v?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "watch",
                      label: y,
                      action: M
                          ? function () {
                                (0, h.vN)((0, m._z)(B)),
                                    (0, O.YX)(T.uss.GO_LIVE, {
                                        type: O.Z5.GO_LIVE,
                                        value: O.IP.DISABLED,
                                        userId: B.ownerId,
                                    });
                            }
                          : function () {
                                I.default.selectVoiceChannel(B.channelId),
                                    (0, h.A9)(B),
                                    (0, O.YX)(T.uss.GO_LIVE, {
                                        type: O.Z5.GO_LIVE,
                                        value: O.IP.ENABLED,
                                        userId: B.ownerId,
                                    });
                            },
                  })),
        F =
            ((U = N(B)),
            (Z = (0, s.bG)([j.Ay], () => j.Ay.isLocalMute(B.ownerId, L.x.STREAM))),
            (P = null != (z = w.default.getCurrentUser()) && B.ownerId === z.id),
            !U || P
                ? null
                : (0, l.jsx)(a.sL, {
                      id: "mute",
                      label: D.intl.string(D.t.sWmtI6),
                      action: function () {
                          o.A.toggleLocalMute(B.ownerId, L.x.STREAM);
                      },
                      checked: Z,
                  })),
        ee = (function (e) {
            let n = N(e),
                t = e.ownerId === G.default.getId(),
                i = j.Ay.supports(L.O5.SIDECHAIN_COMPRESSION),
                r = (0, s.bG)([j.Ay], () => j.Ay.getSidechainCompression()),
                u = (0, s.bG)([j.Ay], () => j.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: c } = (0, E.Ay)();
            return !t && n && i
                ? (0, l.jsxs)(a.rX, {
                      children: [
                          (0, l.jsx)(a.sL, {
                              id: "sidechain-compression",
                              label: D.intl.string(D.t["/jwMtn"]),
                              action: () => o.A.setSidechainCompression(!r, { analyticsLocations: c }),
                              checked: r,
                          }),
                          r &&
                              (0, l.jsx)(a.aK, {
                                  id: "sidechain-parameters",
                                  label: D.intl.string(D.t.fhEzfj),
                                  control: (e, n) =>
                                      (0, l.jsx)(d.i, {
                                          ...e,
                                          ref: n,
                                          value: u,
                                          maxValue: 100,
                                          onChange: (e) =>
                                              o.A.setSidechainCompressionStrength(e, { analyticsLocations: c }),
                                          "aria-label": D.intl.string(D.t.fhEzfj),
                                      }),
                              }),
                      ],
                  })
                : null;
        })(B),
        en = (0, g.A)(B, $, q),
        et = (0, S.h)({ stream: B, channelId: B.channelId }),
        el = (0, f.u)({ userId: B.ownerId, channelId: B.channelId, guildId: B.guildId }),
        ei = (function (e) {
            let n = i.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        (0, O.YX)(T.uss.GO_LIVE, {
                            type: O.Z5.SCREEN_SHARE,
                            value: O.IP.SETTING_ADJUSTED,
                            userId: e.ownerId,
                        });
                    }, 1e3),
                [e.ownerId],
            );
            function t(t) {
                (0, V.Qp)(e, t), n();
            }
            let s = (0, V.f4)(e);
            return (0, l.jsx)(a.aK, {
                id: "stream-zoom",
                label: D.intl.string(D.t.B3kEDs),
                control: (e, n) =>
                    (0, l.jsx)(d.i, {
                        ...e,
                        ref: n,
                        value: s,
                        maxValue: 300,
                        onChange: t,
                        minValue: 100,
                        "aria-label": D.intl.string(D.t.B3kEDs),
                    }),
            });
        })(B),
        er =
            ((Y = (0, V.XG)(B)),
            (0, l.jsx)(a.sL, {
                id: "fit",
                label: D.intl.string(D.t.mpnvrV),
                action: function () {
                    (0, V.CZ)(B, Y === x.$.CONTAIN ? x.$.COVER : x.$.CONTAIN),
                        (0, O.YX)(T.uss.GO_LIVE, {
                            type: O.Z5.GO_LIVE,
                            value: O.IP.SETTING_ADJUSTED,
                            userId: B.ownerId,
                        });
                },
                checked: Y === x.$.COVER,
            }));
    return (0, l.jsx)(A.A, {
        context: J,
        object: T.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(u.W, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: c.Z_,
            "aria-label": D.intl.string(D.t.Gl3Q30),
            onSelect: H,
            children: [
                (0, l.jsxs)(a.rX, { children: [W, F, et, el] }),
                (0, l.jsx)(a.rX, { children: Q }),
                (0, l.jsxs)(a.rX, { children: [ei, er] }),
                ee,
                (0, l.jsx)(a.rX, { children: K && en }),
            ],
        }),
    });
}
