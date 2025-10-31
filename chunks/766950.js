n.d(t, { default: () => w }), n(388685);
var l = n(951288),
    o = n(647438),
    r = n(990547),
    i = n(522942),
    a = n(342905),
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
    b = n(271383),
    _ = n(430824),
    S = n(25990),
    j = n(594174),
    C = n(626135),
    v = n(51144),
    P = n(364747),
    N = n(131016),
    y = n(489511),
    k = n(579346),
    O = n(438759),
    T = n(512070),
    E = n(299939),
    D = n(305813),
    R = n(981631),
    A = n(352609),
    I = n(388032),
    L = n(300119);
function w(e) {
    var t, n, w, B;
    let { transitionState: Z, analyticsLocations: M, guildId: G, onClose: Y } = e,
        H = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        F = null != (t = v.ZP.useName(H)) ? t : "",
        z = (0, s.e7)([h.Z, S.Z, b.ZP], () => {
            var e, t, n;
            return null != G
                ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : b.ZP.getNick(G, null == H ? void 0 : H.id))
                    ? t
                    : F
                : null != (n = S.Z.getPendingGlobalName())
                  ? n
                  : F;
        }, [G, H, F]),
        U = (0, s.e7)([_.Z], () => _.Z.getGuild(G)),
        { userDisplayNameStyles: q, guildDisplayNameStyles: K, pendingDisplayNameStyles: X } = (0, x.mD)(H, G),
        V = void 0 !== X ? X : null != K ? K : q,
        [W, $] = o.useState(null != (n = null == V ? void 0 : V.fontId) ? n : a.C.DEFAULT),
        [J, Q] = o.useState(null != (w = null == V ? void 0 : V.effectId) ? w : i.m.SOLID),
        ee = (0, y.R)(J),
        et = (0, y.R)(i.m.GRADIENT),
        en = null != (B = null == V ? void 0 : V.colors) ? B : [],
        [el, eo] = o.useState(en.length > 0 && J !== i.m.GRADIENT ? en[0] : ee.defaultColors[0]),
        [er, ei] = o.useState(en.length > 0 && J === i.m.GRADIENT ? en : et.defaultColors);
    (0, f.Z)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ea } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        es = o.useMemo(() => (J === i.m.GRADIENT ? er : [el]), [J, er, el]),
        ec = o.useMemo(() => {
            var e;
            return (
                W !== (null == V ? void 0 : V.fontId) ||
                J !== (null == V ? void 0 : V.effectId) ||
                !(0, c.E)(es, null != (e = null == V ? void 0 : V.colors) ? e : [])
            );
        }, [V, W, J, es]),
        ed = o.useCallback(() => {
            if (ec) {
                let e = es;
                J === i.m.SOLID && es.length > 0 && es[0] === ee.defaultColors[0] && (e = []);
                let t = {
                    fontId: W,
                    effectId: J,
                    colors: e,
                };
                null != G ? (0, g.N_)(t) : (0, u.NI)(t),
                    C.default.track(R.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: a.C[W],
                        effect_name: i.m[J],
                        colors: es,
                    }),
                    Y();
            }
        }, [ec, W, J, es, ee, Y, G]),
        eu = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, N.aY)();
            $(e), Q(t), t === i.m.GRADIENT ? ei(n) : eo(n[0]), C.default.track(R.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ei, eo]),
        ep = o.useCallback(
            (e) => {
                Q(e);
            },
            [Q],
        ),
        em = o.useCallback(
            (e) => {
                J === i.m.GRADIENT ? ei(e) : eo(e[0]);
            },
            [J, ei, eo],
        );
    return null == H
        ? null
        : (0, l.jsx)(m.Gt, {
              value: ea,
              children: (0, l.jsx)(P.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, l.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: Z,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: L.modalRoot,
                      children: [
                          (0, l.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: L.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: L.selectionSection,
                                      children: [
                                          (0, l.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: L.sectionHeader,
                                              children: (0, l.jsx)(d.Heading, {
                                                  variant: "heading-lg/semibold",
                                                  children: I.intl.string(A.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(T.Z, {
                                              selectedFontId: W,
                                              setSelectedFontId: $,
                                              displayName: z,
                                              className: L.selectionSubSection,
                                          }),
                                          (0, l.jsx)(O.Z, {
                                              selectedEffectId: J,
                                              setSelectedEffectId: ep,
                                              className: L.selectionSubSection,
                                          }),
                                          (0, l.jsx)(k.Z, {
                                              selectedColors: es,
                                              setSelectedColors: em,
                                              selectedEffectId: J,
                                              className: L.selectionSubSection,
                                              defaultColor: ee.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(D.Z, {
                                      user: H,
                                      guild: U,
                                      displayName: z,
                                      selectedFontId: W,
                                      selectedEffectId: J,
                                      selectedColors: J === i.m.SOLID && (0, c.E)(es, ee.defaultColors) ? [] : es,
                                      onClose: Y,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(E.B, {
                              onApply: ed,
                              onSurpriseMe: eu,
                              onClose: Y,
                              canApply: ec,
                              analyticsLocations: ea,
                          }),
                      ],
                  }),
              }),
          });
}
