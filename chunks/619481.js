a.d(t, { default: () => L });
var l = a(627968),
    n = a(64700),
    s = a(110259),
    r = a(508425),
    i = a(559949),
    o = a(311907),
    c = a(52133),
    d = a(935462),
    u = a(534514),
    m = a(793574),
    _ = a(688810),
    h = a(139286),
    p = a(919395),
    f = a(71393),
    g = a(287809),
    x = a(954571),
    A = a(871162),
    v = a(945096),
    N = a(898985),
    C = a(415299),
    b = a(897661),
    S = a(18396),
    E = a(242853),
    j = a(32246),
    y = a(879164),
    T = a(30925),
    I = a(652215),
    w = a(864386),
    D = a(985018),
    k = a(511698);
function L(e) {
    let { transitionState: t, analyticsLocations: a, guildId: L, onClose: M } = e,
        P = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        R = (0, b.b)(P, L),
        U = (0, o.bG)([f.A], () => f.A.getGuild(L)),
        { userDisplayNameStyles: G, guildDisplayNameStyles: H, pendingDisplayNameStyles: O } = (0, p.B0)(P, L),
        Y = void 0 !== O ? O : (H ?? G),
        [B, z] = n.useState(Y?.fontId ?? i.x.DEFAULT),
        [V, F] = n.useState(Y?.effectId ?? r.z.SOLID),
        Z = (0, N._)(V),
        J = (0, N._)(r.z.GRADIENT),
        Q = Y?.colors ?? [],
        [W, $] = n.useState(Q.length > 0 && V !== r.z.GRADIENT ? Q[0] : Z.defaultColors[0]),
        [q, X] = n.useState(Q.length > 0 && V === r.z.GRADIENT ? Q : J.defaultColors);
    (0, h.A)(
        { type: s.ImpressionTypes.POPOUT, name: s.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: K } = (0, _.Ay)(a, m.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ee = n.useMemo(() => (V === r.z.GRADIENT ? q : [W]), [V, q, W]),
        et = n.useMemo(() => B !== Y?.fontId || V !== Y?.effectId || !(0, c.v)(ee, Y?.colors ?? []), [Y, B, V, ee]),
        ea = (0, C.v)({
            hasChanges: et,
            selectedFontId: B,
            selectedEffectId: V,
            selectedColors: ee,
            defaultColor: Z.defaultColors[0],
            guildId: L,
            onClose: M,
        }),
        el = n.useCallback(() => {
            let { fontId: e, effectId: t, colors: a } = (0, v.gN)();
            z(e), F(t), t === r.z.GRADIENT ? X(a) : $(a[0]), x.default.track(I.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [X, $]),
        en = n.useCallback(
            (e) => {
                F(e);
            },
            [F],
        ),
        es = n.useCallback(
            (e) => {
                V === r.z.GRADIENT ? X(e) : $(e[0]);
            },
            [V, X, $],
        );
    return null == P
        ? null
        : (0, l.jsx)(_.f5, {
              value: K,
              children: (0, l.jsx)(A.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(d.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: d.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: k.CR,
                      children: [
                          (0, l.jsxs)(d.$m, {
                              "data-migration-pending": !0,
                              className: k.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: k.w1,
                                      children: [
                                          (0, l.jsx)(d.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: k.bV,
                                              children: (0, l.jsx)(u.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: D.intl.string(w.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(j.A, {
                                              selectedFontId: B,
                                              setSelectedFontId: z,
                                              displayName: R,
                                              className: k._,
                                          }),
                                          (0, l.jsx)(E.A, {
                                              selectedEffectId: V,
                                              setSelectedEffectId: en,
                                              className: k._,
                                          }),
                                          (0, l.jsx)(S.A, {
                                              selectedColors: ee,
                                              setSelectedColors: es,
                                              selectedEffectId: V,
                                              className: k._,
                                              defaultColor: Z.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(T.A, {
                                      user: P,
                                      guild: U,
                                      displayName: R,
                                      selectedFontId: B,
                                      selectedEffectId: V,
                                      selectedColors: V === r.z.SOLID && (0, c.v)(ee, Z.defaultColors) ? [] : ee,
                                      onClose: M,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(y._, {
                              onApply: ea,
                              onSurpriseMe: el,
                              onClose: M,
                              canApply: et,
                              analyticsLocations: K,
                          }),
                      ],
                  }),
              }),
          });
}
