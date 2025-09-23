n.d(t, { default: () => D }), n(388685);
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
    g = n(18438),
    h = n(150039),
    b = n(594174),
    x = n(626135),
    j = n(364747),
    _ = n(131016),
    S = n(579346),
    C = n(438759),
    O = n(512070),
    v = n(299939),
    P = n(305813),
    y = n(203872),
    k = n(981631),
    N = n(62222),
    E = n(388032),
    T = n(845378);
function D(e) {
    var t, n, D;
    let { transitionState: R, analyticsLocations: w, guildId: A, onClose: I } = e,
        L = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { currentDisplayNameStyles: B, pendingDisplayNameStyles: M } = (0, h.mD)(L, A),
        G = void 0 !== M ? M : B,
        [Z, Y] = o.useState(null != (t = null == G ? void 0 : G.fontId) ? t : i.C.DEFAULT),
        [H, z] = o.useState(null != (n = null == G ? void 0 : G.effectId) ? n : a.m.SOLID),
        F = (0, y.R)(H),
        U = (0, y.R)(a.m.GRADIENT),
        q = null != (D = null == G ? void 0 : G.colors) ? D : [],
        [K, X] = o.useState(q.length > 0 && H !== a.m.GRADIENT ? q[0] : F.defaultColors[0]),
        [V, W] = o.useState(q.length > 0 && H === a.m.GRADIENT ? q : U.defaultColors);
    (0, m.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: $ } = (0, f.ZP)(w, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        J = o.useMemo(() => (H === a.m.GRADIENT ? V : [K]), [H, V, K]),
        Q = o.useMemo(() => {
            var e;
            return (
                Z !== (null == G ? void 0 : G.fontId) ||
                H !== (null == G ? void 0 : G.effectId) ||
                !(0, c.E)(J, null != (e = null == G ? void 0 : G.colors) ? e : [])
            );
        }, [G, Z, H, J]),
        ee = o.useCallback(() => {
            if (Q) {
                let e = J;
                H === a.m.SOLID && J.length > 0 && J[0] === F.defaultColors[0] && (e = []);
                let t = {
                    fontId: Z,
                    effectId: H,
                    colors: e,
                };
                null != A ? (0, g.N_)(t) : (0, u.NI)(t),
                    x.default.track(k.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[Z],
                        effect_name: a.m[H],
                        colors: J,
                    }),
                    I();
            }
        }, [Q, Z, H, J, F, I, A]),
        et = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, _.aY)();
            Y(e), z(t), t === a.m.GRADIENT ? W(n) : X(n[0]), x.default.track(k.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [W, X]),
        en = o.useCallback(
            (e) => {
                z(e);
            },
            [z],
        ),
        er = o.useCallback(
            (e) => {
                H === a.m.GRADIENT ? W(e) : X(e[0]);
            },
            [H, W, X],
        );
    return null == L
        ? null
        : (0, r.jsx)(f.Gt, {
              value: $,
              children: (0, r.jsx)(j.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: R,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: T.modalRoot,
                      children: [
                          (0, r.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: T.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: T.selectionSection,
                                      children: [
                                          (0, r.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: T.sectionHeader,
                                              children: (0, r.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: E.intl.string(N.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              selectedFontId: Z,
                                              setSelectedFontId: Y,
                                              className: T.selectionSubSection,
                                          }),
                                          (0, r.jsx)(C.Z, {
                                              selectedEffectId: H,
                                              setSelectedEffectId: en,
                                              className: T.selectionSubSection,
                                          }),
                                          (0, r.jsx)(S.Z, {
                                              selectedColors: J,
                                              setSelectedColors: er,
                                              selectedEffectId: H,
                                              className: T.selectionSubSection,
                                              defaultColor: F.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      user: L,
                                      selectedFontId: Z,
                                      selectedEffectId: H,
                                      selectedColors: H === a.m.SOLID && (0, c.E)(J, F.defaultColors) ? [] : J,
                                      onClose: I,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(v.B, {
                              onApply: ee,
                              onSurpriseMe: et,
                              onClose: I,
                              canApply: Q,
                              analyticsLocations: $,
                          }),
                      ],
                  }),
              }),
          });
}
