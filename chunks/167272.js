"use strict";
n.d(t, { A: () => M });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(833349),
    a = n(874546),
    o = n(765379),
    l = n(141639),
    u = n(61330),
    c = n(960076),
    d = n(709309),
    _ = n(359549),
    f = n(373966),
    p = n(913948),
    h = n(793574),
    m = n(688810),
    E = n(308335),
    g = n(82149),
    A = n(961350),
    I = n(790381),
    T = n(266080),
    S = n(939496),
    y = n(934173),
    v = n(502695),
    N = n(691041),
    C = n(793838),
    R = n(668880),
    O = n(72742),
    b = n(312784),
    D = n(985629),
    L = n(652215),
    w = n(996988);
function M(e) {
    let { user: t, activity: n, onAction: M, onClose: P, application: x, containerClassName: k } = e,
        { themeType: U } = (0, S.E)(),
        G = (0, i.bG)([A.default], () => A.default.getId() === t.id),
        F = (0, _.J)(x),
        V = (0, E.o)(n?.application_id ?? x?.id),
        { analyticsLocations: B } = (0, m.Ay)(h.A.USER_PROFILE_ACTIVITY_BUTTONS),
        H = (0, d.A)("user_profile_activity_buttons", n?.application_id),
        j = U === w.d.MODAL || U === w.d.MODAL_V2,
        Y = U === w.d.POPOUT,
        W = (() =>
            G
                ? Y && n?.type === L.$pd.PLAYING && x?.id != null
                    ? (0, r.jsx)(f.A, { applicationId: x.id, onAction: M, onClose: P })
                    : null
                : V || !F || null == x || j
                  ? (0, a.A)(n)
                      ? (0, r.jsx)(N.A, { user: t, activity: n, onAction: M, onClose: P })
                      : (0, u.A)(n)
                        ? (0, r.jsx)(R.A, { platformType: L.fg2.XBOX, icon: () => (0, r.jsx)(T.A, {}), onAction: M })
                        : H.length > 0
                          ? (0, r.jsx)(p.A, {
                                distributorCTAConfigs: H,
                                gameName: n?.name ?? "",
                                fullWidth: U !== w.d.MODAL_V2,
                                stopPropagation: !0,
                                onAction: M,
                                onClose: P,
                            })
                          : (0, l.A)(n)
                            ? (0, r.jsx)(R.A, {
                                  platformType: L.fg2.PLAYSTATION,
                                  icon: () => (0, r.jsx)(I.A, {}),
                                  onAction: M,
                              })
                            : (0, c.A)(n)
                              ? (0, r.jsx)(b.A, { activity: n, onAction: M })
                              : (0, s.A)(n, L.jUm.JOIN) || (0, o.A)(n)
                                ? (0, r.jsx)(N.A, { user: t, activity: n, onAction: M, onClose: P })
                                : n?.type === L.$pd.HANG_STATUS
                                  ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: M, onClose: P })
                                  : n?.buttons != null && n?.buttons.length >= 1
                                    ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: M })
                                    : (0, s.A)(n, L.jUm.INSTANCE)
                                      ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: M })
                                      : (0, g.Cy)(n)
                                        ? (0, r.jsx)(O.A, { activity: n, onAction: M, onClose: P })
                                        : null
                  : (0, r.jsx)(D.A, { application: x, onAction: M, onClose: P, analyticsLocations: B }))();
    return null == W ? null : (0, r.jsx)("div", { className: k, children: W });
}
