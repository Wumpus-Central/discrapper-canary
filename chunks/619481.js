"use strict";
a.d(t, { default: () => k });
var l = a(627968),
    i = a(64700),
    r = a(110259),
    n = a(508425),
    s = a(559949),
    o = a(311907),
    d = a(52133),
    c = a(935462),
    u = a(534514),
    _ = a(793574),
    h = a(688810),
    m = a(139286),
    p = a(919395),
    g = a(71393),
    f = a(287809),
    b = a(954571),
    A = a(871162),
    x = a(945096),
    v = a(898985),
    C = a(415299),
    E = a(897661),
    y = a(18396),
    I = a(242853),
    N = a(32246),
    S = a(879164),
    T = a(30925),
    w = a(652215),
    j = a(864386),
    R = a(985018),
    L = a(511698);
function k(e) {
    let { transitionState: t, analyticsLocations: a, guildId: k, onClose: M } = e,
        P = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        O = (0, E.b)(P, k),
        D = (0, o.bG)([g.A], () => g.A.getGuild(k)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: B, pendingDisplayNameStyles: F } = (0, p.B0)(P, k),
        G = void 0 !== F ? F : (B ?? U),
        [H, V] = i.useState(G?.fontId ?? s.x.DEFAULT),
        [W, Y] = i.useState(G?.effectId ?? n.z.SOLID),
        Z = (0, v._)(W),
        z = (0, v._)(n.z.GRADIENT),
        J = G?.colors ?? [],
        [K, $] = i.useState(J.length > 0 && W !== n.z.GRADIENT ? J[0] : Z.defaultColors[0]),
        [q, Q] = i.useState(J.length > 0 && W === n.z.GRADIENT ? J : z.defaultColors);
    (0, m.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: X } = (0, h.Ay)(a, _.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ee = i.useMemo(() => (W === n.z.GRADIENT ? q : [K]), [W, q, K]),
        et = i.useMemo(() => H !== G?.fontId || W !== G?.effectId || !(0, d.v)(ee, G?.colors ?? []), [G, H, W, ee]),
        ea = (0, C.v)({
            hasChanges: et,
            selectedFontId: H,
            selectedEffectId: W,
            selectedColors: ee,
            defaultColor: Z.defaultColors[0],
            guildId: k,
            onClose: M,
        }),
        el = i.useCallback(() => {
            let { fontId: e, effectId: t, colors: a } = (0, x.gN)();
            V(e), Y(t), t === n.z.GRADIENT ? Q(a) : $(a[0]), b.default.track(w.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [Q, $]),
        ei = i.useCallback(
            (e) => {
                Y(e);
            },
            [Y],
        ),
        er = i.useCallback(
            (e) => {
                W === n.z.GRADIENT ? Q(e) : $(e[0]);
            },
            [W, Q, $],
        );
    return null == P
        ? null
        : (0, l.jsx)(h.f5, {
              value: X,
              children: (0, l.jsx)(A.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: c.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: L.CR,
                      children: [
                          (0, l.jsxs)(c.$m, {
                              "data-migration-pending": !0,
                              className: L.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: L.w1,
                                      children: [
                                          (0, l.jsx)(c.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: L.bV,
                                              children: (0, l.jsx)(u.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: R.intl.string(j.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(N.A, {
                                              selectedFontId: H,
                                              setSelectedFontId: V,
                                              displayName: O,
                                              className: L._,
                                          }),
                                          (0, l.jsx)(I.A, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: ei,
                                              className: L._,
                                          }),
                                          (0, l.jsx)(y.A, {
                                              selectedColors: ee,
                                              setSelectedColors: er,
                                              selectedEffectId: W,
                                              className: L._,
                                              defaultColor: Z.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(T.A, {
                                      user: P,
                                      guild: D,
                                      displayName: O,
                                      selectedFontId: H,
                                      selectedEffectId: W,
                                      selectedColors: W === n.z.SOLID && (0, d.v)(ee, Z.defaultColors) ? [] : ee,
                                      onClose: M,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(S._, {
                              onApply: ea,
                              onSurpriseMe: el,
                              onClose: M,
                              canApply: et,
                              analyticsLocations: X,
                          }),
                      ],
                  }),
              }),
          });
}
