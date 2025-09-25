n.d(t, { default: () => A }), n(388685);
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
    m = n(906732),
    f = n(213609),
    g = n(18438),
    h = n(778825),
    b = n(150039),
    x = n(271383),
    j = n(25990),
    _ = n(594174),
    S = n(626135),
    C = n(51144),
    O = n(364747),
    v = n(131016),
    y = n(579346),
    P = n(438759),
    k = n(512070),
    N = n(299939),
    E = n(305813),
    T = n(203872),
    D = n(981631),
    R = n(693450),
    L = n(388032),
    w = n(300119);
function A(e) {
    var t, n, A, I;
    let { transitionState: B, analyticsLocations: M, guildId: Z, onClose: G } = e,
        Y = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        H = null != (t = C.ZP.useName(Y)) ? t : "",
        z = (0, s.e7)([h.Z, j.Z, x.ZP], () => {
            var e, t, n;
            return null != Z
                ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : x.ZP.getNick(Z, null == Y ? void 0 : Y.id))
                    ? t
                    : H
                : null != (n = j.Z.getPendingGlobalName())
                  ? n
                  : H;
        }, [Z, Y, H]),
        { currentDisplayNameStyles: F, pendingDisplayNameStyles: U } = (0, b.mD)(Y, Z),
        q = void 0 !== U ? U : F,
        [K, X] = o.useState(null != (n = null == q ? void 0 : q.fontId) ? n : i.C.DEFAULT),
        [V, W] = o.useState(null != (A = null == q ? void 0 : q.effectId) ? A : a.m.SOLID),
        $ = (0, T.R)(V),
        J = (0, T.R)(a.m.GRADIENT),
        Q = null != (I = null == q ? void 0 : q.colors) ? I : [],
        [ee, et] = o.useState(Q.length > 0 && V !== a.m.GRADIENT ? Q[0] : $.defaultColors[0]),
        [en, er] = o.useState(Q.length > 0 && V === a.m.GRADIENT ? Q : J.defaultColors);
    (0, f.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eo } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        el = o.useMemo(() => (V === a.m.GRADIENT ? en : [ee]), [V, en, ee]),
        ea = o.useMemo(() => {
            var e;
            return (
                K !== (null == q ? void 0 : q.fontId) ||
                V !== (null == q ? void 0 : q.effectId) ||
                !(0, c.E)(el, null != (e = null == q ? void 0 : q.colors) ? e : [])
            );
        }, [q, K, V, el]),
        ei = o.useCallback(() => {
            if (ea) {
                let e = el;
                V === a.m.SOLID && el.length > 0 && el[0] === $.defaultColors[0] && (e = []);
                let t = {
                    fontId: K,
                    effectId: V,
                    colors: e,
                };
                null != Z ? (0, g.N_)(t) : (0, u.NI)(t),
                    S.default.track(D.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[K],
                        effect_name: a.m[V],
                        colors: el,
                    }),
                    G();
            }
        }, [ea, K, V, el, $, G, Z]),
        es = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, v.aY)();
            X(e), W(t), t === a.m.GRADIENT ? er(n) : et(n[0]), S.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [er, et]),
        ec = o.useCallback(
            (e) => {
                W(e);
            },
            [W],
        ),
        ed = o.useCallback(
            (e) => {
                V === a.m.GRADIENT ? er(e) : et(e[0]);
            },
            [V, er, et],
        );
    return null == Y
        ? null
        : (0, r.jsx)(m.Gt, {
              value: eo,
              children: (0, r.jsx)(O.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: B,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: w.modalRoot,
                      children: [
                          (0, r.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: w.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: w.selectionSection,
                                      children: [
                                          (0, r.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: w.sectionHeader,
                                              children: (0, r.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: L.intl.string(R.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(k.Z, {
                                              selectedFontId: K,
                                              setSelectedFontId: X,
                                              displayName: z,
                                              className: w.selectionSubSection,
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              selectedEffectId: V,
                                              setSelectedEffectId: ec,
                                              className: w.selectionSubSection,
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectedColors: el,
                                              setSelectedColors: ed,
                                              selectedEffectId: V,
                                              className: w.selectionSubSection,
                                              defaultColor: $.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(E.Z, {
                                      user: Y,
                                      displayName: z,
                                      selectedFontId: K,
                                      selectedEffectId: V,
                                      selectedColors: V === a.m.SOLID && (0, c.E)(el, $.defaultColors) ? [] : el,
                                      onClose: G,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(N.B, {
                              onApply: ei,
                              onSurpriseMe: es,
                              onClose: G,
                              canApply: ea,
                              analyticsLocations: eo,
                          }),
                      ],
                  }),
              }),
          });
}
