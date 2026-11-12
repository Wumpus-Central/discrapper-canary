t.d(n, { default: () => F });
var l = t(477900);
t(582128);
var i = t(855986),
    r = t(477782),
    a = t(959988),
    c = t(687966),
    s = t(964355),
    d = t(165862),
    o = t(827343),
    u = t(442433),
    h = t(597798),
    I = t(401843),
    g = t(820284),
    A = t(793574),
    f = t(688810),
    x = t(810845),
    S = t(854182),
    j = t(666328),
    p = t(817281),
    m = t(964404),
    b = t(469707),
    C = t(792996),
    y = t(74329),
    v = t(304006),
    w = t(479335),
    X = t(600125),
    G = t(643501),
    E = t(16833),
    _ = t(972432),
    M = t(471993),
    U = t(616356),
    z = t(46653),
    R = t(734057),
    T = t(754712),
    k = t(287809),
    N = t(652896),
    L = t(652215),
    O = t(731854);
function D(e) {
    return (0, i.bG)([U.A], () => {
        let n = U.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, N._z)(n) === (0, N._z)(e);
    });
}
function F(e) {
    let n,
        t,
        U,
        F,
        V,
        W,
        {
            stream: P,
            analyticsContext: Z,
            appContext: q,
            exitFullscreen: Q,
            onSelect: H,
            onInteraction: J,
            minimal: K = !1,
        } = e,
        B = (0, i.cf)([k.default], () => P?.ownerId === k.default.getCurrentUser()?.id),
        Y = D(P),
        $ = ((n = D(P)), (t = (0, _.A)(P.ownerId, O.x.STREAM)), n ? t : null),
        ee = (function (e, n) {
            let t,
                s = (0, i.bG)([G.default], () => null != G.default.getRemoteSessionId()),
                d = (0, i.bG)([R.A], () => R.A.getChannel(e.channelId), [e.channelId]),
                o = (0, E.A)(e),
                u = D(e),
                g = k.default.getCurrentUser(),
                A = null != g && e.ownerId === g.id;
            function f() {
                (0, I.vN)((0, N._z)(e));
            }
            return ((t = A ? C.intl.string(C.t.S5anIc) : u ? C.intl.string(C.t.q3O3J8) : C.intl.string(C.t["7Xq/nV"])),
            s || (!A && u && d?.isGuildStageVoice()))
                ? null
                : null != o
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(r.Dr, {
                                id: "watch",
                                label: t,
                                action: f,
                                icon: n && a.ScreenXIcon,
                                leadingAccessory: n ? { type: "icon", icon: a.ScreenXIcon } : void 0,
                            }),
                            (0, l.jsx)(r.Dr, {
                                id: "pass-controller",
                                label: o.label,
                                action: o.toggle,
                                color: o.isActive ? "success" : "default",
                                icon: n && c.GameControllerIcon,
                                leadingAccessory: n ? { type: "icon", icon: c.GameControllerIcon } : void 0,
                            }),
                        ],
                    })
                  : (0, l.jsx)(r.Dr, {
                        id: "watch",
                        label: t,
                        action: u
                            ? f
                            : function () {
                                  (h.default.selectVoiceChannel(e.channelId), (0, I.A9)(e));
                              },
                        icon: n && u && a.ScreenXIcon,
                        leadingAccessory: n && u ? { type: "icon", icon: a.ScreenXIcon } : void 0,
                    });
        })(P, K),
        en =
            ((U = D(P)),
            (F = (0, i.bG)([T.Ay], () => T.Ay.isLocalMute(P.ownerId, O.x.STREAM))),
            (W = null != (V = k.default.getCurrentUser()) && P.ownerId === V.id),
            !U || W
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "mute",
                      label: C.intl.string(C.t.sWmtI6),
                      action: function () {
                          o.default.toggleLocalMute(P.ownerId, O.x.STREAM);
                      },
                      checked: F,
                  })),
        et = (function (e) {
            let n = D(e),
                t = e.ownerId === z.default.getId(),
                a = T.Ay.supports(O.O5.SIDECHAIN_COMPRESSION),
                c = (0, i.bG)([T.Ay], () => T.Ay.getSidechainCompression()),
                d = (0, i.bG)([T.Ay], () => T.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, f.Ay)();
            return !t && n && a
                ? (0, l.jsxs)(r.rX, {
                      children: [
                          (0, l.jsx)(r.sL, {
                              id: "sidechain-compression",
                              label: C.intl.string(C.t["/jwMtn"]),
                              subtext: C.intl.string(C.t.zlA23F),
                              action: () => o.default.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c,
                          }),
                          c &&
                              (0, l.jsx)(r.aK, {
                                  id: "sidechain-parameters",
                                  label: C.intl.string(C.t.fhEzfj),
                                  control: (e, n) =>
                                      (0, l.jsx)(s.i, {
                                          ...e,
                                          ref: n,
                                          value: d,
                                          maxValue: 100,
                                          onChange: (e) =>
                                              o.default.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                          "aria-label": C.intl.string(C.t.fhEzfj),
                                      }),
                              }),
                      ],
                  })
                : null;
        })(P),
        el = (0, y.A)(P, q, Q),
        ei = (0, j.A)(P.channelId, P.ownerId),
        er = (function (e, n) {
            let [t] = (0, b.A)(e, n),
                a = (0, i.bG)([m.Ay], () => m.Ay.pauseSelfStreamPreviewWhenUnfocused);
            return t
                ? (0, l.jsx)(r.sL, {
                      id: "self-stream-pause-preview-when-unfocused",
                      label: C.intl.string(C.t.vpzyht),
                      checked: a,
                      action: () => p.Ay.updatedUnsyncedSettings({ pauseSelfStreamPreviewWhenUnfocused: !a }),
                  })
                : null;
        })(P.channelId, P.ownerId),
        ea = (0, S.A)(P.channelId),
        ec = (0, x.A)(P.channelId, (0, N._z)(P)),
        es = (0, i.bG)([R.A], () => R.A.getChannel(P.channelId), [P.channelId]),
        ed = (0, v.h)({ stream: P, channelId: P.channelId }),
        eo = (0, w.u)({ userId: P.ownerId, channelId: P.channelId, guildId: P.guildId, minimal: K }),
        { analyticsLocations: eu } = (0, f.Ay)(A.A.STREAM_CONTEXT_MENU),
        eh = (0, X.E)({
            stream: P,
            handleGoLive: () => (0, M.A)(P.guildId, P.channelId, eu),
            minimal: K,
            appContext: q,
        });
    return K
        ? (0, l.jsx)(f.f5, {
              value: eu,
              children: (0, l.jsxs)(d.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: u.Z_,
                  "aria-label": C.intl.string(C.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: H,
                  onInteraction: J,
                  children: [
                      (0, l.jsx)(r.rX, { children: B ? eh : ee }),
                      (0, l.jsxs)(r.rX, { children: [en, $] }),
                      (0, l.jsx)(r.rX, { children: ec }),
                      et,
                      Y
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.bX, {}),
                                    (0, l.jsxs)(r.Dr, {
                                        id: "more-options",
                                        label: C.intl.string(C.t.PdRCRg),
                                        children: [ei, er, ed, eo, el],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(g.A, {
              context: Z,
              object: L.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(d.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: u.Z_,
                  "aria-label": C.intl.string(C.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: H,
                  onInteraction: J,
                  children: [
                      (0, l.jsx)(r.rX, { children: (0, l.jsxs)(l.Fragment, { children: [ee, en, ed, eo] }) }),
                      (0, l.jsx)(r.rX, { children: $ }),
                      (0, l.jsx)(r.rX, { children: ec }),
                      et,
                      (0, l.jsxs)(r.rX, { children: [es?.isGuildStageVoice() ? null : ea, ei, er, Y && el] }),
                  ],
              }),
          });
}
