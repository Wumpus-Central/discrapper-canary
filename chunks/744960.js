t.d(n, { default: () => O });
var l = t(477900);
t(582128);
var i = t(17928),
    r = t(477782),
    a = t(959988),
    d = t(964355),
    s = t(980707),
    c = t(827343),
    o = t(442433),
    u = t(730852),
    h = t(401843),
    A = t(820284),
    g = t(793574),
    I = t(688810),
    x = t(810845),
    f = t(854182),
    S = t(666328),
    j = t(817281),
    p = t(742023),
    m = t(469707),
    b = t(375708),
    C = t(74329),
    w = t(304006),
    v = t(479335),
    y = t(405916),
    G = t(643501),
    E = t(972432),
    X = t(471993),
    _ = t(616356),
    M = t(280450),
    U = t(734057),
    z = t(916546),
    R = t(287809),
    T = t(652896),
    k = t(652215),
    N = t(731854);
function L(e) {
    return (0, i.bG)([_.A], () => {
        let n = _.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, T._z)(n) === (0, T._z)(e);
    });
}
function O(e) {
    let n,
        t,
        _,
        O,
        V,
        W,
        F,
        P,
        D,
        Z,
        q,
        Q,
        {
            stream: H,
            analyticsContext: J,
            appContext: K,
            exitFullscreen: B,
            onSelect: Y,
            onInteraction: $,
            minimal: ee = !1,
        } = e,
        en = (0, i.cf)([R.default], () => H?.ownerId === R.default.getCurrentUser()?.id),
        et = L(H),
        el = ((n = L(H)), (t = (0, E.A)(H.ownerId, N.x.STREAM)), n ? t : null),
        ei =
            ((O = (0, i.bG)([G.default], () => null != G.default.getRemoteSessionId())),
            (V = (0, i.bG)([U.A], () => U.A.getChannel(H.channelId), [H.channelId])),
            (W = L(H)),
            ((_ = (P = null != (F = R.default.getCurrentUser()) && H.ownerId === F.id)
                ? b.intl.string(b.t.S5anIc)
                : W
                  ? b.intl.string(b.t.q3O3J8)
                  : b.intl.string(b.t["7Xq/nV"])),
            O || (!P && W && V?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "watch",
                      label: _,
                      action: W
                          ? function () {
                                (0, h.vN)((0, T._z)(H));
                            }
                          : function () {
                                u.default.selectVoiceChannel(H.channelId), (0, h.A9)(H);
                            },
                      icon: ee && W && a.G,
                      leadingAccessory: ee && W ? { type: "icon", icon: a.G } : void 0,
                  })),
        er =
            ((D = L(H)),
            (Z = (0, i.bG)([z.Ay], () => z.Ay.isLocalMute(H.ownerId, N.x.STREAM))),
            (Q = null != (q = R.default.getCurrentUser()) && H.ownerId === q.id),
            !D || Q
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "mute",
                      label: b.intl.string(b.t.sWmtI6),
                      action: function () {
                          c.A.toggleLocalMute(H.ownerId, N.x.STREAM);
                      },
                      checked: Z,
                  })),
        ea = (function (e) {
            let n = L(e),
                t = e.ownerId === M.default.getId(),
                a = z.Ay.supports(N.O5.SIDECHAIN_COMPRESSION),
                s = (0, i.bG)([z.Ay], () => z.Ay.getSidechainCompression()),
                o = (0, i.bG)([z.Ay], () => z.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, I.Ay)();
            return !t && n && a
                ? (0, l.jsxs)(r.rX, {
                      children: [
                          (0, l.jsx)(r.sL, {
                              id: "sidechain-compression",
                              label: b.intl.string(b.t["/jwMtn"]),
                              subtext: b.intl.string(b.t.zlA23F),
                              action: () => c.A.setSidechainCompression(!s, { analyticsLocations: u }),
                              checked: s,
                          }),
                          s &&
                              (0, l.jsx)(r.aK, {
                                  id: "sidechain-parameters",
                                  label: b.intl.string(b.t.fhEzfj),
                                  control: (e, n) =>
                                      (0, l.jsx)(d.i, {
                                          ...e,
                                          ref: n,
                                          value: o,
                                          maxValue: 100,
                                          onChange: (e) =>
                                              c.A.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                          "aria-label": b.intl.string(b.t.fhEzfj),
                                      }),
                              }),
                      ],
                  })
                : null;
        })(H),
        ed = (0, C.A)(H, K, B),
        es = (0, S.A)(H.channelId, H.ownerId),
        ec = (function (e, n) {
            let [t] = (0, m.A)(e, n),
                a = (0, i.bG)([p.Ay], () => p.Ay.pauseSelfStreamPreviewWhenUnfocused);
            return t
                ? (0, l.jsx)(r.sL, {
                      id: "self-stream-pause-preview-when-unfocused",
                      label: b.intl.string(b.t.vpzyht),
                      checked: a,
                      action: () => j.Ay.updatedUnsyncedSettings({ pauseSelfStreamPreviewWhenUnfocused: !a }),
                  })
                : null;
        })(H.channelId, H.ownerId),
        eo = (0, f.A)(H.channelId),
        eu = (0, x.A)(H.channelId, (0, T._z)(H)),
        eh = (0, i.bG)([U.A], () => U.A.getChannel(H.channelId), [H.channelId]),
        eA = (0, w.h)({ stream: H, channelId: H.channelId }),
        eg = (0, v.u)({ userId: H.ownerId, channelId: H.channelId, guildId: H.guildId, minimal: ee }),
        { analyticsLocations: eI } = (0, I.Ay)(g.A.STREAM_CONTEXT_MENU),
        ex = (0, y.E)({
            stream: H,
            handleGoLive: () => (0, X.A)(H.guildId, H.channelId, eI),
            minimal: ee,
            appContext: K,
        });
    return ee
        ? (0, l.jsx)(I.f5, {
              value: eI,
              children: (0, l.jsxs)(s.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": b.intl.string(b.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: Y,
                  onInteraction: $,
                  children: [
                      (0, l.jsx)(r.rX, { children: en ? ex : ei }),
                      (0, l.jsxs)(r.rX, { children: [er, el] }),
                      (0, l.jsx)(r.rX, { children: eu }),
                      ea,
                      et
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.bX, {}),
                                    (0, l.jsxs)(r.Dr, {
                                        id: "more-options",
                                        label: b.intl.string(b.t.PdRCRg),
                                        children: [es, ec, eA, eg, ed],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(A.A, {
              context: J,
              object: k.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(s.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": b.intl.string(b.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: Y,
                  onInteraction: $,
                  children: [
                      (0, l.jsx)(r.rX, { children: (0, l.jsxs)(l.Fragment, { children: [ei, er, eA, eg] }) }),
                      (0, l.jsx)(r.rX, { children: el }),
                      (0, l.jsx)(r.rX, { children: eu }),
                      ea,
                      (0, l.jsxs)(r.rX, { children: [eh?.isGuildStageVoice() ? null : eo, es, ec, et && ed] }),
                  ],
              }),
          });
}
