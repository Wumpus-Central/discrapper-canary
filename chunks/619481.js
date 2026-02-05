l.d(t, { default: () => P });
var s = l(627968),
    a = l(64700),
    n = l(110259),
    i = l(508425),
    r = l(559949),
    o = l(311907),
    d = l(52133),
    c = l(397927),
    u = l(793574),
    m = l(688810),
    _ = l(139286),
    x = l(919395),
    g = l(71393),
    h = l(287809),
    p = l(954571),
    f = l(871162),
    N = l(945096),
    A = l(898985),
    C = l(415299),
    j = l(897661),
    S = l(18396),
    T = l(242853),
    v = l(32246),
    E = l(879164),
    b = l(30925),
    L = l(652215),
    D = l(927961),
    I = l(985018),
    k = l(753565);
function P(e) {
    let { transitionState: t, analyticsLocations: l, guildId: P, onClose: y } = e,
        w = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        R = (0, j.b)(w, P),
        G = (0, o.bG)([g.A], () => g.A.getGuild(P)),
        { userDisplayNameStyles: O, guildDisplayNameStyles: z, pendingDisplayNameStyles: M } = (0, x.B0)(w, P),
        H = void 0 !== M ? M : (z ?? O),
        [U, Y] = a.useState(H?.fontId ?? r.x.DEFAULT),
        [B, J] = a.useState(H?.effectId ?? i.z.SOLID),
        F = (0, A._)(B),
        V = (0, A._)(i.z.GRADIENT),
        q = H?.colors ?? [],
        [K, X] = a.useState(q.length > 0 && B !== i.z.GRADIENT ? q[0] : F.defaultColors[0]),
        [Q, Z] = a.useState(q.length > 0 && B === i.z.GRADIENT ? q : V.defaultColors);
    (0, _.A)(
        { type: n.ImpressionTypes.POPOUT, name: n.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: W } = (0, m.Ay)(l, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        $ = a.useMemo(() => (B === i.z.GRADIENT ? Q : [K]), [B, Q, K]),
        ee = a.useMemo(() => U !== H?.fontId || B !== H?.effectId || !(0, d.v)($, H?.colors ?? []), [H, U, B, $]),
        et = (0, C.v)({
            hasChanges: ee,
            selectedFontId: U,
            selectedEffectId: B,
            selectedColors: $,
            defaultColor: F.defaultColors[0],
            guildId: P,
            onClose: y,
        }),
        el = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: l } = (0, N.gN)();
            Y(e), J(t), t === i.z.GRADIENT ? Z(l) : X(l[0]), p.default.track(L.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [Z, X]),
        es = a.useCallback(
            (e) => {
                J(e);
            },
            [J],
        ),
        ea = a.useCallback(
            (e) => {
                B === i.z.GRADIENT ? Z(e) : X(e[0]);
            },
            [B, Z, X],
        );
    return null == w
        ? null
        : (0, s.jsx)(m.f5, {
              value: W,
              children: (0, s.jsx)(f.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, s.jsxs)(c.EOs, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: c.rIJ.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: k.CR,
                      children: [
                          (0, s.jsxs)(c.$mQ, {
                              "data-migration-pending": !0,
                              className: k.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: k.w1,
                                      children: [
                                          (0, s.jsx)(c.rQ0, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: k.bV,
                                              children: (0, s.jsx)(c.Heading, {
                                                  variant: "heading-lg/semibold",
                                                  children: I.intl.string(D.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, s.jsx)(v.A, {
                                              selectedFontId: U,
                                              setSelectedFontId: Y,
                                              displayName: R,
                                              className: k._,
                                          }),
                                          (0, s.jsx)(T.A, {
                                              selectedEffectId: B,
                                              setSelectedEffectId: es,
                                              className: k._,
                                          }),
                                          (0, s.jsx)(S.A, {
                                              selectedColors: $,
                                              setSelectedColors: ea,
                                              selectedEffectId: B,
                                              className: k._,
                                              defaultColor: F.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(b.A, {
                                      user: w,
                                      guild: G,
                                      displayName: R,
                                      selectedFontId: U,
                                      selectedEffectId: B,
                                      selectedColors: B === i.z.SOLID && (0, d.v)($, F.defaultColors) ? [] : $,
                                      onClose: y,
                                  }),
                              ],
                          }),
                          (0, s.jsx)(E._, {
                              onApply: et,
                              onSurpriseMe: el,
                              onClose: y,
                              canApply: ee,
                              analyticsLocations: W,
                          }),
                      ],
                  }),
              }),
          });
}
