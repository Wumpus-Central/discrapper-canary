n.d(t, { default: () => I }), n(388685);
var o = n(951288),
    l = n(647438),
    r = n(990547),
    a = n(522942),
    i = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(809206),
    p = n(100527),
    m = n(906732),
    f = n(213609),
    g = n(18438),
    h = n(778825),
    x = n(150039),
    _ = n(271383),
    b = n(25990),
    S = n(594174),
    C = n(626135),
    j = n(51144),
    v = n(364747),
    P = n(131016),
    N = n(579346),
    k = n(438759),
    y = n(512070),
    O = n(299939),
    T = n(305813),
    E = n(203872),
    D = n(981631),
    R = n(693450),
    A = n(388032),
    L = n(300119);
function I(e) {
    var t, n, I, w;
    let { transitionState: B, analyticsLocations: M, guildId: Z, onClose: G } = e,
        Y = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        H = null != (t = j.ZP.useName(Y)) ? t : "",
        z = (0, s.e7)([h.Z, b.Z, _.ZP], () => {
            var e, t, n;
            return null != Z
                ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : _.ZP.getNick(Z, null == Y ? void 0 : Y.id))
                    ? t
                    : H
                : null != (n = b.Z.getPendingGlobalName())
                  ? n
                  : H;
        }, [Z, Y, H]),
        { userDisplayNameStyles: F, guildDisplayNameStyles: U, pendingDisplayNameStyles: q } = (0, x.mD)(Y, Z),
        K = void 0 !== q ? q : null != U ? U : F,
        [X, V] = l.useState(null != (n = null == K ? void 0 : K.fontId) ? n : i.C.DEFAULT),
        [W, $] = l.useState(null != (I = null == K ? void 0 : K.effectId) ? I : a.m.SOLID),
        J = (0, E.R)(W),
        Q = (0, E.R)(a.m.GRADIENT),
        ee = null != (w = null == K ? void 0 : K.colors) ? w : [],
        [et, en] = l.useState(ee.length > 0 && W !== a.m.GRADIENT ? ee[0] : J.defaultColors[0]),
        [eo, el] = l.useState(ee.length > 0 && W === a.m.GRADIENT ? ee : Q.defaultColors);
    (0, f.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: er } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ea = l.useMemo(() => (W === a.m.GRADIENT ? eo : [et]), [W, eo, et]),
        ei = l.useMemo(() => {
            var e;
            return (
                X !== (null == K ? void 0 : K.fontId) ||
                W !== (null == K ? void 0 : K.effectId) ||
                !(0, c.E)(ea, null != (e = null == K ? void 0 : K.colors) ? e : [])
            );
        }, [K, X, W, ea]),
        es = l.useCallback(() => {
            if (ei) {
                let e = ea;
                W === a.m.SOLID && ea.length > 0 && ea[0] === J.defaultColors[0] && (e = []);
                let t = {
                    fontId: X,
                    effectId: W,
                    colors: e,
                };
                null != Z ? (0, g.N_)(t) : (0, u.NI)(t),
                    C.default.track(D.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[X],
                        effect_name: a.m[W],
                        colors: ea,
                    }),
                    G();
            }
        }, [ei, X, W, ea, J, G, Z]),
        ec = l.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, P.aY)();
            V(e), $(t), t === a.m.GRADIENT ? el(n) : en(n[0]), C.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [el, en]),
        ed = l.useCallback(
            (e) => {
                $(e);
            },
            [$],
        ),
        eu = l.useCallback(
            (e) => {
                W === a.m.GRADIENT ? el(e) : en(e[0]);
            },
            [W, el, en],
        );
    return null == Y
        ? null
        : (0, o.jsx)(m.Gt, {
              value: er,
              children: (0, o.jsx)(v.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, o.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: B,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: L.modalRoot,
                      children: [
                          (0, o.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: L.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, o.jsxs)("div", {
                                      className: L.selectionSection,
                                      children: [
                                          (0, o.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: L.sectionHeader,
                                              children: (0, o.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: A.intl.string(R.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, o.jsx)(y.Z, {
                                              selectedFontId: X,
                                              setSelectedFontId: V,
                                              displayName: z,
                                              className: L.selectionSubSection,
                                          }),
                                          (0, o.jsx)(k.Z, {
                                              selectedEffectId: W,
                                              setSelectedEffectId: ed,
                                              className: L.selectionSubSection,
                                          }),
                                          (0, o.jsx)(N.Z, {
                                              selectedColors: ea,
                                              setSelectedColors: eu,
                                              selectedEffectId: W,
                                              className: L.selectionSubSection,
                                              defaultColor: J.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(T.Z, {
                                      user: Y,
                                      displayName: z,
                                      selectedFontId: X,
                                      selectedEffectId: W,
                                      selectedColors: W === a.m.SOLID && (0, c.E)(ea, J.defaultColors) ? [] : ea,
                                      onClose: G,
                                  }),
                              ],
                          }),
                          (0, o.jsx)(O.B, {
                              onApply: es,
                              onSurpriseMe: ec,
                              onClose: G,
                              canApply: ei,
                              analyticsLocations: er,
                          }),
                      ],
                  }),
              }),
          });
}
