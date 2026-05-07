t.d(n, { default: () => y });
var l = t(627968),
    i = t(64700),
    s = t(735438),
    r = t(17928),
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
    p = t(479335),
    m = t(643501),
    x = t(652896),
    C = t(51092),
    f = t(972432),
    b = t(616356),
    G = t(495544),
    _ = t(734057),
    j = t(235058),
    w = t(287809),
    O = t(810412),
    V = t(761661),
    T = t(652215),
    L = t(731854),
    D = t(375708);
function N(e) {
    return (0, r.bG)([b.A], () => {
        let n = b.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, x._z)(n) === (0, x._z)(e);
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
        B,
        J,
        $,
        { stream: q, analyticsContext: H, appContext: K, exitFullscreen: Q, onSelect: W } = e,
        F = N(q),
        ee =
            ((n = N(q)),
            (t = i.useMemo(
                () =>
                    (0, s.debounce)((e) => {
                        (0, O.YX)(T.uss.GO_LIVE, { type: O.Z5.AUDIO, value: O.IP.SETTING_ADJUSTED, userId: q.ownerId });
                    }, 1e3),
                [q.ownerId],
            )),
            (b = (0, f.A)(q.ownerId, L.x.STREAM, t)),
            n ? b : null),
        en =
            ((X = (0, r.bG)([m.default], () => null != m.default.getRemoteSessionId())),
            (v = (0, r.bG)([_.A], () => _.A.getChannel(q.channelId), [q.channelId])),
            (M = N(q)),
            ((y = (R = null != (k = w.default.getCurrentUser()) && q.ownerId === k.id)
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
                                (0, h.vN)((0, x._z)(q)),
                                    (0, O.YX)(T.uss.GO_LIVE, {
                                        type: O.Z5.GO_LIVE,
                                        value: O.IP.DISABLED,
                                        userId: q.ownerId,
                                    });
                            }
                          : function () {
                                I.default.selectVoiceChannel(q.channelId),
                                    (0, h.A9)(q),
                                    (0, O.YX)(T.uss.GO_LIVE, {
                                        type: O.Z5.GO_LIVE,
                                        value: O.IP.ENABLED,
                                        userId: q.ownerId,
                                    });
                            },
                  })),
        et =
            ((U = N(q)),
            (Z = (0, r.bG)([j.Ay], () => j.Ay.isLocalMute(q.ownerId, L.x.STREAM))),
            (P = null != (z = w.default.getCurrentUser()) && q.ownerId === z.id),
            !U || P
                ? null
                : (0, l.jsx)(a.sL, {
                      id: "mute",
                      label: D.intl.string(D.t.sWmtI6),
                      action: function () {
                          o.A.toggleLocalMute(q.ownerId, L.x.STREAM);
                      },
                      checked: Z,
                  })),
        el = (function (e) {
            let n = N(e),
                t = e.ownerId === G.default.getId(),
                i = j.Ay.supports(L.O5.SIDECHAIN_COMPRESSION),
                s = (0, r.bG)([j.Ay], () => j.Ay.getSidechainCompression()),
                u = (0, r.bG)([j.Ay], () => j.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: c } = (0, E.Ay)();
            return !t && n && i
                ? (0, l.jsxs)(a.rX, {
                      children: [
                          (0, l.jsx)(a.sL, {
                              id: "sidechain-compression",
                              label: D.intl.string(D.t["/jwMtn"]),
                              action: () => o.A.setSidechainCompression(!s, { analyticsLocations: c }),
                              checked: s,
                          }),
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
        })(q),
        ei = (0, g.A)(q, K, Q),
        es = (0, S.h)({ stream: q, channelId: q.channelId }),
        er = (0, p.u)({ userId: q.ownerId, channelId: q.channelId, guildId: q.guildId }),
        ea =
            ((Y = i.useMemo(
                () =>
                    (0, s.debounce)(() => {
                        (0, O.YX)(T.uss.GO_LIVE, {
                            type: O.Z5.SCREEN_SHARE,
                            value: O.IP.SETTING_ADJUSTED,
                            userId: q.ownerId,
                        });
                    }, 1e3),
                [q.ownerId],
            )),
            (B = (e) => {
                (0, V.Qp)(q, e), Y();
            }),
            (J = (0, V.f4)(q)),
            (0, l.jsx)(a.aK, {
                id: "stream-zoom",
                label: D.intl.string(D.t.B3kEDs),
                control: (e, n) =>
                    (0, l.jsx)(d.i, {
                        ...e,
                        ref: n,
                        value: J,
                        maxValue: 300,
                        onChange: B,
                        minValue: 100,
                        "aria-label": D.intl.string(D.t.B3kEDs),
                    }),
            })),
        ed =
            (($ = (0, V.XG)(q)),
            (0, l.jsx)(a.sL, {
                id: "fit",
                label: D.intl.string(D.t.mpnvrV),
                action: () => {
                    (0, V.CZ)(q, $ === C.$.CONTAIN ? C.$.COVER : C.$.CONTAIN),
                        (0, O.YX)(T.uss.GO_LIVE, {
                            type: O.Z5.GO_LIVE,
                            value: O.IP.SETTING_ADJUSTED,
                            userId: q.ownerId,
                        });
                },
                checked: $ === C.$.COVER,
            }));
    return (0, l.jsx)(A.A, {
        context: H,
        object: T.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(u.W, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: c.Z_,
            "aria-label": D.intl.string(D.t.Gl3Q30),
            onSelect: W,
            children: [
                (0, l.jsxs)(a.rX, { children: [en, et, es, er] }),
                (0, l.jsx)(a.rX, { children: ee }),
                (0, l.jsxs)(a.rX, { children: [ea, ed] }),
                el,
                (0, l.jsx)(a.rX, { children: F && ei }),
            ],
        }),
    });
}
