n.d(t, { default: () => R }), n(388685);
var l = n(54381),
    o = n(473749),
    r = n(990547),
    a = n(522942),
    i = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(100527),
    f = n(906732),
    p = n(213609),
    m = n(150039),
    g = n(430824),
    h = n(594174),
    b = n(626135),
    x = n(364747),
    S = n(131016),
    j = n(489511),
    C = n(768446),
    v = n(166614),
    P = n(579346),
    N = n(438759),
    O = n(512070),
    k = n(299939),
    T = n(305813),
    y = n(981631),
    _ = n(143525),
    E = n(388032),
    D = n(771753);
function R(e) {
    var t, n, R;
    let { transitionState: A, analyticsLocations: I, guildId: L, onClose: w } = e,
        B = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        Z = (0, v.t)(B, L),
        M = (0, s.e7)([g.Z], () => g.Z.getGuild(L)),
        { userDisplayNameStyles: G, guildDisplayNameStyles: H, pendingDisplayNameStyles: Y } = (0, m.mD)(B, L),
        z = void 0 !== Y ? Y : null != H ? H : G,
        [F, U] = o.useState(null != (t = null == z ? void 0 : z.fontId) ? t : i.C.DEFAULT),
        [q, K] = o.useState(null != (n = null == z ? void 0 : z.effectId) ? n : a.m.SOLID),
        X = (0, j.R)(q),
        V = (0, j.R)(a.m.GRADIENT),
        W = null != (R = null == z ? void 0 : z.colors) ? R : [],
        [$, J] = o.useState(W.length > 0 && q !== a.m.GRADIENT ? W[0] : X.defaultColors[0]),
        [Q, ee] = o.useState(W.length > 0 && q === a.m.GRADIENT ? W : V.defaultColors);
    (0, p.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, f.ZP)(I, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        en = o.useMemo(() => (q === a.m.GRADIENT ? Q : [$]), [q, Q, $]),
        el = o.useMemo(() => {
            var e;
            return (
                F !== (null == z ? void 0 : z.fontId) ||
                q !== (null == z ? void 0 : z.effectId) ||
                !(0, c.E)(en, null != (e = null == z ? void 0 : z.colors) ? e : [])
            );
        }, [z, F, q, en]),
        eo = (0, C.z)({
            hasChanges: el,
            selectedFontId: F,
            selectedEffectId: q,
            selectedColors: en,
            defaultColor: X.defaultColors[0],
            guildId: L,
            onClose: w,
        }),
        er = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, S.aY)();
            U(e), K(t), t === a.m.GRADIENT ? ee(n) : J(n[0]), b.default.track(y.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ee, J]),
        ea = o.useCallback(
            (e) => {
                K(e);
            },
            [K],
        ),
        ei = o.useCallback(
            (e) => {
                q === a.m.GRADIENT ? ee(e) : J(e[0]);
            },
            [q, ee, J],
        );
    return null == B
        ? null
        : (0, l.jsx)(f.Gt, {
              value: et,
              children: (0, l.jsx)(x.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: A,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: D.modalRoot,
                      children: [
                          (0, l.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: D.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: D.selectionSection,
                                      children: [
                                          (0, l.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: D.sectionHeader,
                                              children: (0, l.jsx)(d.Heading, {
                                                  variant: "heading-lg/semibold",
                                                  children: E.intl.string(_.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(O.Z, {
                                              selectedFontId: F,
                                              setSelectedFontId: U,
                                              displayName: Z,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, l.jsx)(N.Z, {
                                              selectedEffectId: q,
                                              setSelectedEffectId: ea,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, l.jsx)(P.Z, {
                                              selectedColors: en,
                                              setSelectedColors: ei,
                                              selectedEffectId: q,
                                              className: D.selectionSubSection,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(T.Z, {
                                      user: B,
                                      guild: M,
                                      displayName: Z,
                                      selectedFontId: F,
                                      selectedEffectId: q,
                                      selectedColors: q === a.m.SOLID && (0, c.E)(en, X.defaultColors) ? [] : en,
                                      onClose: w,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(k.B, {
                              onApply: eo,
                              onSurpriseMe: er,
                              onClose: w,
                              canApply: el,
                              analyticsLocations: et,
                          }),
                      ],
                  }),
              }),
          });
}
