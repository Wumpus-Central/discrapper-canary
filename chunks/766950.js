n.d(t, { default: () => T }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(990547),
    a = n(522942),
    i = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(809206),
    p = n(100527),
    f = n(906732),
    m = n(213609),
    g = n(25990),
    h = n(594174),
    b = n(626135),
    x = n(364747),
    j = n(131016),
    _ = n(579346),
    S = n(438759),
    C = n(512070),
    O = n(299939),
    v = n(305813),
    P = n(203872),
    y = n(981631),
    k = n(693450),
    N = n(388032),
    E = n(300119);
function T(e) {
    var t, n, T;
    let { transitionState: D, analyticsLocations: R, guild: A, onClose: w } = e,
        I = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        L = (0, s.e7)([g.Z], () => g.Z.getAllPending().pendingDisplayNameStyles),
        B = void 0 !== L ? L : null == I ? void 0 : I.displayNameStyles,
        [M, G] = o.useState(null != (t = null == B ? void 0 : B.fontId) ? t : i.C.DEFAULT),
        [Z, Y] = o.useState(null != (n = null == B ? void 0 : B.effectId) ? n : a.m.SOLID),
        H = (0, P.R)(Z),
        z = (0, P.R)(a.m.GRADIENT),
        F = null != (T = null == B ? void 0 : B.colors) ? T : [],
        [U, K] = o.useState(F.length > 0 && Z !== a.m.GRADIENT ? F[0] : H.defaultColors[0]),
        [V, X] = o.useState(F.length > 0 && Z === a.m.GRADIENT ? F : z.defaultColors);
    (0, m.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: q } = (0, f.ZP)(R, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        W = o.useMemo(() => (Z === a.m.GRADIENT ? V : [U]), [Z, V, U]),
        $ = o.useMemo(() => {
            var e;
            return (
                M !== (null == B ? void 0 : B.fontId) ||
                Z !== (null == B ? void 0 : B.effectId) ||
                !(0, c.E)(W, null != (e = null == B ? void 0 : B.colors) ? e : [])
            );
        }, [B, M, Z, W]),
        J = o.useCallback(() => {
            if ($) {
                let e = W;
                Z === a.m.SOLID && W.length > 0 && W[0] === H.defaultColors[0] && (e = []),
                    (0, u.NI)({
                        fontId: M,
                        effectId: Z,
                        colors: e,
                    }),
                    b.default.track(y.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[M],
                        effect_name: a.m[Z],
                        colors: W,
                    }),
                    w();
            }
        }, [$, M, Z, W, H, w]),
        Q = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, j.aY)();
            G(e), Y(t), t === a.m.GRADIENT ? X(n) : K(n[0]), b.default.track(y.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [X, K]),
        ee = o.useCallback(
            (e) => {
                Y(e);
            },
            [Y],
        ),
        et = o.useCallback(
            (e) => {
                Z === a.m.GRADIENT ? X(e) : K(e[0]);
            },
            [Z, X, K],
        );
    return null == I
        ? null
        : (0, r.jsx)(f.Gt, {
              value: q,
              children: (0, r.jsx)(x.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: D,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: E.modalRoot,
                      children: [
                          (0, r.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: E.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: E.selectionSection,
                                      children: [
                                          (0, r.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: E.sectionHeader,
                                              children: (0, r.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: N.intl.string(k.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(C.Z, {
                                              selectedFontId: M,
                                              setSelectedFontId: G,
                                              className: E.selectionSubSection,
                                          }),
                                          (0, r.jsx)(S.Z, {
                                              selectedEffectId: Z,
                                              setSelectedEffectId: ee,
                                              className: E.selectionSubSection,
                                          }),
                                          (0, r.jsx)(_.Z, {
                                              selectedColors: W,
                                              setSelectedColors: et,
                                              selectedEffectId: Z,
                                              className: E.selectionSubSection,
                                              defaultColor: H.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      user: I,
                                      selectedFontId: M,
                                      selectedEffectId: Z,
                                      selectedColors: Z === a.m.SOLID && (0, c.E)(W, H.defaultColors) ? [] : W,
                                      onClose: w,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(O.B, {
                              onApply: J,
                              onSurpriseMe: Q,
                              onClose: w,
                              canApply: $,
                              analyticsLocations: q,
                          }),
                      ],
                  }),
              }),
          });
}
