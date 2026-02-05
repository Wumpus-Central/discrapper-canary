"use strict";
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(833349),
    s = n(765379),
    o = n(141639),
    l = n(61330),
    u = n(960076),
    c = n(359549),
    d = n(373966),
    _ = n(793574),
    f = n(688810),
    p = n(308335),
    h = n(82149),
    m = n(961350),
    g = n(790381),
    E = n(266080),
    A = n(939496),
    I = n(934173),
    T = n(502695),
    y = n(691041),
    S = n(793838),
    v = n(668880),
    C = n(72742),
    b = n(312784),
    N = n(985629),
    R = n(652215),
    O = n(996988);
function D(e) {
    let { user: t, activity: n, onAction: D, onClose: L, application: w, containerClassName: x } = e,
        { themeType: P } = (0, A.E)(),
        M = (0, i.bG)([m.default], () => m.default.getId() === t.id),
        k = (0, c.J)(w),
        U = (0, p.o)(n?.application_id ?? w?.id),
        { analyticsLocations: G } = (0, f.Ay)(_.A.USER_PROFILE_ACTIVITY_BUTTONS),
        V = P === O.d.MODAL || P === O.d.MODAL_V2,
        F = P === O.d.POPOUT,
        B = (() =>
            M
                ? F && n?.type === R.$pd.PLAYING && w?.id != null
                    ? (0, r.jsx)(d.A, { applicationId: w.id, onAction: D, onClose: L })
                    : null
                : U || !k || null == w || V
                  ? (0, l.A)(n)
                      ? (0, r.jsx)(v.A, { platformType: R.fg2.XBOX, icon: () => (0, r.jsx)(E.A, {}), onAction: D })
                      : (0, o.A)(n)
                        ? (0, r.jsx)(v.A, {
                              platformType: R.fg2.PLAYSTATION,
                              icon: () => (0, r.jsx)(g.A, {}),
                              onAction: D,
                          })
                        : (0, u.A)(n)
                          ? (0, r.jsx)(b.A, { activity: n, onAction: D })
                          : (0, a.A)(n, R.jUm.JOIN) || (0, s.A)(n)
                            ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: D, onClose: L })
                            : n?.type === R.$pd.HANG_STATUS
                              ? (0, r.jsx)(T.A, { user: t, activity: n, onAction: D, onClose: L })
                              : n?.buttons != null && n?.buttons.length >= 1
                                ? (0, r.jsx)(I.A, { user: t, activity: n, onAction: D })
                                : (0, a.A)(n, R.jUm.INSTANCE)
                                  ? (0, r.jsx)(S.A, { user: t, activity: n, onAction: D })
                                  : (0, h.Cy)(n)
                                    ? (0, r.jsx)(C.A, { activity: n, onAction: D, onClose: L })
                                    : null
                  : (0, r.jsx)(N.A, { application: w, onAction: D, onClose: L, analyticsLocations: G }))();
    return null == B ? null : (0, r.jsx)("div", { className: x, children: B });
}
