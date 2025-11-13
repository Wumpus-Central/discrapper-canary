n.d(t, { default: () => L }), n(388685);
var l = n(951288),
    o = n(647438),
    r = n(990547),
    i = n(522942),
    a = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    m = n(213609),
    f = n(778825),
    g = n(150039),
    h = n(271383),
    x = n(430824),
    b = n(25990),
    _ = n(594174),
    S = n(626135),
    j = n(51144),
    C = n(364747),
    v = n(131016),
    P = n(489511),
    N = n(768446),
    k = n(579346),
    y = n(438759),
    O = n(512070),
    T = n(299939),
    E = n(305813),
    D = n(981631),
    R = n(88406),
    A = n(388032),
    I = n(300119);
function L(e) {
    var t, n, L, w;
    let { transitionState: B, analyticsLocations: Z, guildId: M, onClose: G } = e,
        Y = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        H = null != (t = j.ZP.useName(Y)) ? t : "",
        z = (0, s.e7)([f.Z, b.Z, h.ZP], () => {
            var e, t, n;
            return null != M
                ? null != (t = null != (e = f.Z.getPendingNickname()) ? e : h.ZP.getNick(M, null == Y ? void 0 : Y.id))
                    ? t
                    : H
                : null != (n = b.Z.getPendingGlobalName())
                  ? n
                  : H;
        }, [M, Y, H]),
        F = (0, s.e7)([x.Z], () => x.Z.getGuild(M)),
        { userDisplayNameStyles: U, guildDisplayNameStyles: q, pendingDisplayNameStyles: K } = (0, g.mD)(Y, M),
        X = void 0 !== K ? K : null != q ? q : U,
        [V, W] = o.useState(null != (n = null == X ? void 0 : X.fontId) ? n : a.C.DEFAULT),
        [$, J] = o.useState(null != (L = null == X ? void 0 : X.effectId) ? L : i.m.SOLID),
        Q = (0, P.R)($),
        ee = (0, P.R)(i.m.GRADIENT),
        et = null != (w = null == X ? void 0 : X.colors) ? w : [],
        [en, el] = o.useState(et.length > 0 && $ !== i.m.GRADIENT ? et[0] : Q.defaultColors[0]),
        [eo, er] = o.useState(et.length > 0 && $ === i.m.GRADIENT ? et : ee.defaultColors);
    (0, m.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ei } = (0, p.ZP)(Z, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ea = o.useMemo(() => ($ === i.m.GRADIENT ? eo : [en]), [$, eo, en]),
        es = o.useMemo(() => {
            var e;
            return (
                V !== (null == X ? void 0 : X.fontId) ||
                $ !== (null == X ? void 0 : X.effectId) ||
                !(0, c.E)(ea, null != (e = null == X ? void 0 : X.colors) ? e : [])
            );
        }, [X, V, $, ea]),
        ec = (0, N.z)({
            hasChanges: es,
            selectedFontId: V,
            selectedEffectId: $,
            selectedColors: ea,
            defaultColor: Q.defaultColors[0],
            guildId: M,
            onClose: G,
        }),
        ed = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, v.aY)();
            W(e), J(t), t === i.m.GRADIENT ? er(n) : el(n[0]), S.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [er, el]),
        eu = o.useCallback(
            (e) => {
                J(e);
            },
            [J],
        ),
        ep = o.useCallback(
            (e) => {
                $ === i.m.GRADIENT ? er(e) : el(e[0]);
            },
            [$, er, el],
        );
    return null == Y
        ? null
        : (0, l.jsx)(p.Gt, {
              value: ei,
              children: (0, l.jsx)(C.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: B,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: I.modalRoot,
                      children: [
                          (0, l.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: I.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: I.selectionSection,
                                      children: [
                                          (0, l.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: I.sectionHeader,
                                              children: (0, l.jsx)(d.Heading, {
                                                  variant: "heading-lg/semibold",
                                                  children: A.intl.string(R.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(O.Z, {
                                              selectedFontId: V,
                                              setSelectedFontId: W,
                                              displayName: z,
                                              className: I.selectionSubSection,
                                          }),
                                          (0, l.jsx)(y.Z, {
                                              selectedEffectId: $,
                                              setSelectedEffectId: eu,
                                              className: I.selectionSubSection,
                                          }),
                                          (0, l.jsx)(k.Z, {
                                              selectedColors: ea,
                                              setSelectedColors: ep,
                                              selectedEffectId: $,
                                              className: I.selectionSubSection,
                                              defaultColor: Q.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(E.Z, {
                                      user: Y,
                                      guild: F,
                                      displayName: z,
                                      selectedFontId: V,
                                      selectedEffectId: $,
                                      selectedColors: $ === i.m.SOLID && (0, c.E)(ea, Q.defaultColors) ? [] : ea,
                                      onClose: G,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(T.B, {
                              onApply: ec,
                              onSurpriseMe: ed,
                              onClose: G,
                              canApply: es,
                              analyticsLocations: ei,
                          }),
                      ],
                  }),
              }),
          });
}
