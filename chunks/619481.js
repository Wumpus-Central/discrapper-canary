l.d(t, { default: () => I }), l(896048);
var n = l(627968),
    a = l(64700),
    s = l(110259),
    r = l(508425),
    i = l(559949),
    o = l(311907),
    c = l(52133),
    d = l(397927),
    u = l(793574),
    f = l(688810),
    m = l(139286),
    b = l(919395),
    p = l(71393),
    x = l(287809),
    g = l(954571),
    j = l(871162),
    h = l(945096),
    v = l(898985),
    N = l(415299),
    A = l(897661),
    y = l(18396),
    _ = l(242853),
    S = l(32246),
    O = l(879164),
    C = l(30925),
    E = l(652215),
    T = l(927961),
    w = l(985018),
    D = l(753565);
function I(e) {
    var t, l, I;
    let { transitionState: P, analyticsLocations: L, guildId: k, onClose: R } = e,
        G = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        z = (0, A.b)(G, k),
        M = (0, o.bG)([p.A], () => p.A.getGuild(k)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: H, pendingDisplayNameStyles: Y } = (0, b.B0)(G, k),
        J = void 0 !== Y ? Y : null != H ? H : U,
        [F, B] = a.useState(null != (t = null == J ? void 0 : J.fontId) ? t : i.x.DEFAULT),
        [V, K] = a.useState(null != (l = null == J ? void 0 : J.effectId) ? l : r.z.SOLID),
        q = (0, v._)(V),
        X = (0, v._)(r.z.GRADIENT),
        Q = null != (I = null == J ? void 0 : J.colors) ? I : [],
        [Z, W] = a.useState(Q.length > 0 && V !== r.z.GRADIENT ? Q[0] : q.defaultColors[0]),
        [$, ee] = a.useState(Q.length > 0 && V === r.z.GRADIENT ? Q : X.defaultColors);
    (0, m.A)(
        {
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, f.Ay)(L, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        el = a.useMemo(() => (V === r.z.GRADIENT ? $ : [Z]), [V, $, Z]),
        en = a.useMemo(() => {
            var e;
            return (
                F !== (null == J ? void 0 : J.fontId) ||
                V !== (null == J ? void 0 : J.effectId) ||
                !(0, c.v)(el, null != (e = null == J ? void 0 : J.colors) ? e : [])
            );
        }, [J, F, V, el]),
        ea = (0, N.v)({
            hasChanges: en,
            selectedFontId: F,
            selectedEffectId: V,
            selectedColors: el,
            defaultColor: q.defaultColors[0],
            guildId: k,
            onClose: R,
        }),
        es = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: l } = (0, h.gN)();
            B(e), K(t), t === r.z.GRADIENT ? ee(l) : W(l[0]), g.default.track(E.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ee, W]),
        er = a.useCallback(
            (e) => {
                K(e);
            },
            [K],
        ),
        ei = a.useCallback(
            (e) => {
                V === r.z.GRADIENT ? ee(e) : W(e[0]);
            },
            [V, ee, W],
        );
    return null == G
        ? null
        : (0, n.jsx)(f.f5, {
              value: et,
              children: (0, n.jsx)(j.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, n.jsxs)(d.EOs, {
                      "data-migration-pending": !0,
                      transitionState: P,
                      size: d.rIJ.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: D.CR,
                      children: [
                          (0, n.jsxs)(d.$mQ, {
                              "data-migration-pending": !0,
                              className: D.jE,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: D.w1,
                                      children: [
                                          (0, n.jsx)(d.rQ0, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: D.bV,
                                              children: (0, n.jsx)(d.Heading, {
                                                  variant: "heading-lg/semibold",
                                                  children: w.intl.string(T.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, n.jsx)(S.A, {
                                              selectedFontId: F,
                                              setSelectedFontId: B,
                                              displayName: z,
                                              className: D._,
                                          }),
                                          (0, n.jsx)(_.A, {
                                              selectedEffectId: V,
                                              setSelectedEffectId: er,
                                              className: D._,
                                          }),
                                          (0, n.jsx)(y.A, {
                                              selectedColors: el,
                                              setSelectedColors: ei,
                                              selectedEffectId: V,
                                              className: D._,
                                              defaultColor: q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(C.A, {
                                      user: G,
                                      guild: M,
                                      displayName: z,
                                      selectedFontId: F,
                                      selectedEffectId: V,
                                      selectedColors: V === r.z.SOLID && (0, c.v)(el, q.defaultColors) ? [] : el,
                                      onClose: R,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(O._, {
                              onApply: ea,
                              onSurpriseMe: es,
                              onClose: R,
                              canApply: en,
                              analyticsLocations: et,
                          }),
                      ],
                  }),
              }),
          });
}
