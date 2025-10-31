n.d(t, { Z: () => O }), n(539854), n(388685);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(704215),
    o = n(907459),
    s = n(514361),
    l = n(662975),
    c = n(724145),
    u = n(771934),
    d = n(884134),
    f = n(266454),
    _ = n(243778),
    p = n(819640),
    h = n(594174),
    m = n(74538),
    g = n(550385),
    E = n(981631),
    b = n(921944),
    y = n(223399);
let O = function (e) {
    let { mobile: t } = e,
        n = (0, i.e7)([p.Z], () => p.Z.getLayers().includes(E.S9g.USER_SETTINGS)),
        O = (0, i.e7)([h.default], () => m.ZP.canUseClientThemes(h.default.getCurrentUser())),
        v = (0, i.e7)([s.Z], () => s.Z.isCoachmark),
        I = (0, l.g)(),
        { activePanel: T, metadata: S } = (0, g.oq)(),
        A = [];
    !n && null == T && (v && !O && A.push(a.z.CLIENT_THEMES_COACHMARK), I && A.push(a.z.CUSTOM_THEME_COACHMARK));
    let [C, N] = (0, _.US)(A, b.R.SIDEBAR, !0),
        R = C === a.z.CLIENT_THEMES_COACHMARK,
        P = C === a.z.CUSTOM_THEME_COACHMARK;
    if (((0, u.HA)(I, C), n)) return null;
    let w = T === g.wh.CLIENT_THEMES || R,
        D = T === g.wh.APP_ICON,
        x = T === g.wh.CUSTOM_THEME || P;
    if (!(w || D || x)) return null;
    let L = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                w &&
                    (0, r.jsx)(c.Z, {
                        markAsDismissed: R
                            ? N
                            : () => {
                                  (0, f.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
                                      dismissAction: b.L.INDIRECT_ACTION,
                                      forceTrack: !0,
                                  });
                              },
                        showClientThemesCoachmark: R,
                    }),
                D &&
                    (0, r.jsx)(o.Z, {
                        isCoachmark: !1,
                        markAsDismissed: N,
                    }),
                x &&
                    (0, r.jsx)(d.Z, {
                        metadata: null != S ? S : {},
                        markAsDismissed: N,
                        isCoachmark: P,
                        isMobile: t,
                    }),
            ],
        });
    return t
        ? (0, r.jsx)("div", {
              className: y.mobileContainer,
              children: L(),
          })
        : L();
};
