t.d(n, { default: () => D });
var l = t(627968),
    i = t(64700),
    r = t(735438),
    a = t(311907),
    s = t(477782),
    d = t(964355),
    o = t(861672),
    u = t(827343),
    c = t(442433),
    I = t(956793),
    A = t(401843),
    g = t(820284),
    h = t(688810),
    m = t(74329),
    E = t(304006),
    f = t(479335),
    S = t(643501),
    b = t(652896),
    p = t(401901),
    x = t(972432),
    v = t(616356),
    C = t(961350),
    j = t(734057),
    V = t(430452),
    G = t(287809),
    _ = t(810412),
    w = t(761661),
    T = t(652215),
    L = t(731854),
    O = t(985018);
function y(e) {
    return (0, a.bG)([v.A], () => {
        let n = v.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, b._z)(n) === (0, b._z)(e);
    });
}
function D(e) {
    let n,
        t,
        v,
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
        Y,
        B,
        { stream: $, analyticsContext: H, appContext: K, exitFullscreen: q, onSelect: Q } = e,
        W = y($),
        ee =
            ((n = y($)),
            (t = i.useMemo(
                () =>
                    (0, r.debounce)((e) => {
                        (0, _.YX)(T.uss.GO_LIVE, { type: _.Z5.AUDIO, value: _.IP.SETTING_ADJUSTED, userId: $.ownerId });
                    }, 1e3),
                [$.ownerId],
            )),
            (v = (0, x.A)($.ownerId, L.x.STREAM, t)),
            n ? v : null),
        en =
            ((N = (0, a.bG)([S.default], () => null != S.default.getRemoteSessionId())),
            (k = (0, a.bG)([j.A], () => j.A.getChannel($.channelId), [$.channelId])),
            (M = y($)),
            ((D = (U = null != (X = G.default.getCurrentUser()) && $.ownerId === X.id)
                ? O.intl.string(O.t.S5anIc)
                : M
                  ? O.intl.string(O.t.q3O3J8)
                  : O.intl.string(O.t["7Xq/nV"])),
            N || (!U && M && k?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "watch",
                      label: D,
                      action: M
                          ? function () {
                                (0, A.vN)((0, b._z)($)),
                                    (0, _.YX)(T.uss.GO_LIVE, {
                                        type: _.Z5.GO_LIVE,
                                        value: _.IP.DISABLED,
                                        userId: $.ownerId,
                                    });
                            }
                          : function () {
                                I.default.selectVoiceChannel($.channelId),
                                    (0, A.A9)($),
                                    (0, _.YX)(T.uss.GO_LIVE, {
                                        type: _.Z5.GO_LIVE,
                                        value: _.IP.ENABLED,
                                        userId: $.ownerId,
                                    });
                            },
                  })),
        et =
            ((R = y($)),
            (z = (0, a.bG)([V.Ay], () => V.Ay.isLocalMute($.ownerId, L.x.STREAM))),
            (F = null != (Z = G.default.getCurrentUser()) && $.ownerId === Z.id),
            !R || F
                ? null
                : (0, l.jsx)(s.sL, {
                      id: "mute",
                      label: O.intl.string(O.t.sWmtI6),
                      action: function () {
                          u.A.toggleLocalMute($.ownerId, L.x.STREAM);
                      },
                      checked: z,
                  })),
        el = (function (e) {
            let n = y(e),
                t = e.ownerId === C.default.getId(),
                i = V.Ay.supports(L.O5.SIDECHAIN_COMPRESSION),
                r = (0, a.bG)([V.Ay], () => V.Ay.getSidechainCompression()),
                o = (0, a.bG)([V.Ay], () => V.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: c } = (0, h.Ay)();
            return !t && n && i
                ? (0, l.jsxs)(s.rX, {
                      children: [
                          (0, l.jsx)(s.sL, {
                              id: "sidechain-compression",
                              label: O.intl.string(O.t["/jwMtn"]),
                              action: () => u.A.setSidechainCompression(!r, { analyticsLocations: c }),
                              checked: r,
                          }),
                          (0, l.jsx)(s.aK, {
                              id: "sidechain-parameters",
                              label: O.intl.string(O.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(d.i, {
                                      ...e,
                                      ref: n,
                                      value: o,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          u.A.setSidechainCompressionStrength(e, { analyticsLocations: c }),
                                      "aria-label": O.intl.string(O.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })($),
        ei = (0, m.A)($, K, q),
        er = (0, E.h)({ stream: $, channelId: $.channelId }),
        ea = (0, f.u)({ userId: $.ownerId, channelId: $.channelId, guildId: $.guildId }),
        es =
            ((J = i.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        (0, _.YX)(T.uss.GO_LIVE, {
                            type: _.Z5.SCREEN_SHARE,
                            value: _.IP.SETTING_ADJUSTED,
                            userId: $.ownerId,
                        });
                    }, 1e3),
                [$.ownerId],
            )),
            (P = (e) => {
                (0, w.Qp)($, e), J();
            }),
            (Y = (0, w.f4)($)),
            (0, l.jsx)(s.aK, {
                id: "stream-zoom",
                label: O.intl.string(O.t.B3kEDs),
                control: (e, n) =>
                    (0, l.jsx)(d.i, {
                        ...e,
                        ref: n,
                        value: Y,
                        maxValue: 300,
                        onChange: P,
                        minValue: 100,
                        "aria-label": O.intl.string(O.t.B3kEDs),
                    }),
            })),
        ed =
            ((B = (0, w.XG)($)),
            (0, l.jsx)(s.sL, {
                id: "fit",
                label: O.intl.string(O.t.mpnvrV),
                action: () => {
                    (0, w.CZ)($, B === p.$.CONTAIN ? p.$.COVER : p.$.CONTAIN),
                        (0, _.YX)(T.uss.GO_LIVE, {
                            type: _.Z5.GO_LIVE,
                            value: _.IP.SETTING_ADJUSTED,
                            userId: $.ownerId,
                        });
                },
                checked: B === p.$.COVER,
            }));
    return (0, l.jsx)(g.A, {
        context: H,
        object: T.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(o.W, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: c.Z_,
            "aria-label": O.intl.string(O.t.Gl3Q30),
            onSelect: Q,
            children: [
                (0, l.jsxs)(s.rX, { children: [en, et, er, ea] }),
                (0, l.jsx)(s.rX, { children: ee }),
                (0, l.jsxs)(s.rX, { children: [es, ed] }),
                el,
                (0, l.jsx)(s.rX, { children: W && ei }),
            ],
        }),
    });
}
