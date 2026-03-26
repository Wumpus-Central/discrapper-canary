"use strict";
n.d(t, { A: () => M });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(833349),
    a = n(765379),
    o = n(141639),
    l = n(61330),
    u = n(960076),
    c = n(709309),
    d = n(359549),
    _ = n(373966),
    f = n(793574),
    p = n(688810),
    h = n(308335),
    m = n(82149),
    E = n(961350),
    g = n(790381),
    A = n(266080),
    I = n(939496),
    T = n(934173),
    S = n(502695),
    y = n(691041),
    v = n(793838),
    N = n(668880),
    C = n(72742),
    R = n(312784),
    O = n(985629),
    b = n(684207),
    D = n(938442),
    L = n(652215),
    w = n(996988);
function M(e) {
    let { user: t, activity: n, onAction: M, onClose: x, application: P, containerClassName: k } = e,
        { themeType: U } = (0, I.E)(),
        G = (0, i.bG)([E.default], () => E.default.getId() === t.id),
        F = (0, d.J)(P),
        V = (0, h.o)(n?.application_id ?? P?.id),
        { analyticsLocations: B } = (0, p.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        H = (0, c.A)("user_profile_activity_buttons", n?.application_id),
        j = U === w.d.MODAL || U === w.d.MODAL_V2,
        Y = U === w.d.POPOUT,
        W = (() =>
            G
                ? Y && n?.type === L.$pd.PLAYING && P?.id != null
                    ? (0, r.jsx)(_.A, { applicationId: P.id, onAction: M, onClose: x })
                    : null
                : V || !F || null == P || j
                  ? (0, l.A)(n)
                      ? (0, r.jsx)(N.A, { platformType: L.fg2.XBOX, icon: () => (0, r.jsx)(A.A, {}), onAction: M })
                      : 1 === H.length
                        ? (0, r.jsx)(b.A, { distributor: H[0], onAction: M, onClose: x })
                        : H.length > 1
                          ? (0, r.jsx)(D.A, {
                                distributorCTAConfigs: H,
                                gameName: n?.name ?? "",
                                onAction: M,
                                onClose: x,
                            })
                          : (0, o.A)(n)
                            ? (0, r.jsx)(N.A, {
                                  platformType: L.fg2.PLAYSTATION,
                                  icon: () => (0, r.jsx)(g.A, {}),
                                  onAction: M,
                              })
                            : (0, u.A)(n)
                              ? (0, r.jsx)(R.A, { activity: n, onAction: M })
                              : (0, s.A)(n, L.jUm.JOIN) || (0, a.A)(n)
                                ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: M, onClose: x })
                                : n?.type === L.$pd.HANG_STATUS
                                  ? (0, r.jsx)(S.A, { user: t, activity: n, onAction: M, onClose: x })
                                  : n?.buttons != null && n?.buttons.length >= 1
                                    ? (0, r.jsx)(T.A, { user: t, activity: n, onAction: M })
                                    : (0, s.A)(n, L.jUm.INSTANCE)
                                      ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: M })
                                      : (0, m.Cy)(n)
                                        ? (0, r.jsx)(C.A, { activity: n, onAction: M, onClose: x })
                                        : null
                  : (0, r.jsx)(O.A, { application: P, onAction: M, onClose: x, analyticsLocations: B }))();
    return null == W ? null : (0, r.jsx)("div", { className: k, children: W });
}
