n.d(t, { default: () => R }), n(388685);
var l = n(54381),
    o = n(473749),
    r = n(990547),
    i = n(522942),
    a = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    m = n(213609),
    f = n(150039),
    g = n(430824),
    h = n(594174),
    x = n(626135),
    b = n(364747),
    _ = n(131016),
    S = n(489511),
    j = n(768446),
    C = n(166614),
    v = n(579346),
    P = n(438759),
    N = n(512070),
    k = n(299939),
    y = n(305813),
    O = n(981631),
    T = n(677065),
    E = n(388032),
    D = n(300119);
function R(e) {
    var t, n, R;
    let { transitionState: A, analyticsLocations: I, guildId: L, onClose: w } = e,
        B = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        Z = (0, C.t)(B, L),
        M = (0, s.e7)([g.Z], () => g.Z.getGuild(L)),
        { userDisplayNameStyles: G, guildDisplayNameStyles: Y, pendingDisplayNameStyles: H } = (0, f.mD)(B, L),
        z = void 0 !== H ? H : null != Y ? Y : G,
        [F, U] = o.useState(null != (t = null == z ? void 0 : z.fontId) ? t : a.C.DEFAULT),
        [q, K] = o.useState(null != (n = null == z ? void 0 : z.effectId) ? n : i.m.SOLID),
        X = (0, S.R)(q),
        V = (0, S.R)(i.m.GRADIENT),
        W = null != (R = null == z ? void 0 : z.colors) ? R : [],
        [$, J] = o.useState(W.length > 0 && q !== i.m.GRADIENT ? W[0] : X.defaultColors[0]),
        [Q, ee] = o.useState(W.length > 0 && q === i.m.GRADIENT ? W : V.defaultColors);
    (0, m.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: et } = (0, p.ZP)(I, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        en = o.useMemo(() => (q === i.m.GRADIENT ? Q : [$]), [q, Q, $]),
        el = o.useMemo(() => {
            var e;
            return (
                F !== (null == z ? void 0 : z.fontId) ||
                q !== (null == z ? void 0 : z.effectId) ||
                !(0, c.E)(en, null != (e = null == z ? void 0 : z.colors) ? e : [])
            );
        }, [z, F, q, en]),
        eo = (0, j.z)({
            hasChanges: el,
            selectedFontId: F,
            selectedEffectId: q,
            selectedColors: en,
            defaultColor: X.defaultColors[0],
            guildId: L,
            onClose: w,
        }),
        er = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, _.aY)();
            U(e), K(t), t === i.m.GRADIENT ? ee(n) : J(n[0]), x.default.track(O.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ee, J]),
        ei = o.useCallback(
            (e) => {
                K(e);
            },
            [K],
        ),
        ea = o.useCallback(
            (e) => {
                q === i.m.GRADIENT ? ee(e) : J(e[0]);
            },
            [q, ee, J],
        );
    return null == B
        ? null
        : (0, l.jsx)(p.Gt, {
              value: et,
              children: (0, l.jsx)(b.k.Provider, {
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
                                                  children: E.intl.string(T.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(N.Z, {
                                              selectedFontId: F,
                                              setSelectedFontId: U,
                                              displayName: Z,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, l.jsx)(P.Z, {
                                              selectedEffectId: q,
                                              setSelectedEffectId: ei,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, l.jsx)(v.Z, {
                                              selectedColors: en,
                                              setSelectedColors: ea,
                                              selectedEffectId: q,
                                              className: D.selectionSubSection,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(y.Z, {
                                      user: B,
                                      guild: M,
                                      displayName: Z,
                                      selectedFontId: F,
                                      selectedEffectId: q,
                                      selectedColors: q === i.m.SOLID && (0, c.E)(en, X.defaultColors) ? [] : en,
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
