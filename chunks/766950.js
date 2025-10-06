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
    j = n(626135),
    C = n(51144),
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
    L = n(388032),
    A = n(300119);
function I(e) {
    var t, n, I, w;
    let { transitionState: B, analyticsLocations: M, guildId: Z, onClose: G } = e,
        Y = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        H = null != (t = C.ZP.useName(Y)) ? t : "",
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
        { currentDisplayNameStyles: F, pendingDisplayNameStyles: U } = (0, x.mD)(Y, Z),
        q = void 0 !== U ? U : F,
        [K, X] = l.useState(null != (n = null == q ? void 0 : q.fontId) ? n : i.C.DEFAULT),
        [V, W] = l.useState(null != (I = null == q ? void 0 : q.effectId) ? I : a.m.SOLID),
        $ = (0, E.R)(V),
        J = (0, E.R)(a.m.GRADIENT),
        Q = null != (w = null == q ? void 0 : q.colors) ? w : [],
        [ee, et] = l.useState(Q.length > 0 && V !== a.m.GRADIENT ? Q[0] : $.defaultColors[0]),
        [en, eo] = l.useState(Q.length > 0 && V === a.m.GRADIENT ? Q : J.defaultColors);
    (0, f.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: el } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        er = l.useMemo(() => (V === a.m.GRADIENT ? en : [ee]), [V, en, ee]),
        ea = l.useMemo(() => {
            var e;
            return (
                K !== (null == q ? void 0 : q.fontId) ||
                V !== (null == q ? void 0 : q.effectId) ||
                !(0, c.E)(er, null != (e = null == q ? void 0 : q.colors) ? e : [])
            );
        }, [q, K, V, er]),
        ei = l.useCallback(() => {
            if (ea) {
                let e = er;
                V === a.m.SOLID && er.length > 0 && er[0] === $.defaultColors[0] && (e = []);
                let t = {
                    fontId: K,
                    effectId: V,
                    colors: e,
                };
                null != Z ? (0, g.N_)(t) : (0, u.NI)(t),
                    j.default.track(D.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[K],
                        effect_name: a.m[V],
                        colors: er,
                    }),
                    G();
            }
        }, [ea, K, V, er, $, G, Z]),
        es = l.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, P.aY)();
            X(e), W(t), t === a.m.GRADIENT ? eo(n) : et(n[0]), j.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [eo, et]),
        ec = l.useCallback(
            (e) => {
                W(e);
            },
            [W],
        ),
        ed = l.useCallback(
            (e) => {
                V === a.m.GRADIENT ? eo(e) : et(e[0]);
            },
            [V, eo, et],
        );
    return null == Y
        ? null
        : (0, o.jsx)(m.Gt, {
              value: el,
              children: (0, o.jsx)(v.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, o.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: B,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: A.modalRoot,
                      children: [
                          (0, o.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: A.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, o.jsxs)("div", {
                                      className: A.selectionSection,
                                      children: [
                                          (0, o.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: A.sectionHeader,
                                              children: (0, o.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: L.intl.string(R.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, o.jsx)(y.Z, {
                                              selectedFontId: K,
                                              setSelectedFontId: X,
                                              displayName: z,
                                              className: A.selectionSubSection,
                                          }),
                                          (0, o.jsx)(k.Z, {
                                              selectedEffectId: V,
                                              setSelectedEffectId: ec,
                                              className: A.selectionSubSection,
                                          }),
                                          (0, o.jsx)(N.Z, {
                                              selectedColors: er,
                                              setSelectedColors: ed,
                                              selectedEffectId: V,
                                              className: A.selectionSubSection,
                                              defaultColor: $.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, o.jsx)(T.Z, {
                                      user: Y,
                                      displayName: z,
                                      selectedFontId: K,
                                      selectedEffectId: V,
                                      selectedColors: V === a.m.SOLID && (0, c.E)(er, $.defaultColors) ? [] : er,
                                      onClose: G,
                                  }),
                              ],
                          }),
                          (0, o.jsx)(O.B, {
                              onApply: ei,
                              onSurpriseMe: es,
                              onClose: G,
                              canApply: ea,
                              analyticsLocations: el,
                          }),
                      ],
                  }),
              }),
          });
}
