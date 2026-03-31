"use strict";
n.d(t, { A: () => P });
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
    p = n(793574),
    h = n(688810),
    m = n(308335),
    E = n(82149),
    g = n(961350),
    A = n(790381),
    I = n(266080),
    T = n(939496),
    S = n(934173),
    y = n(502695),
    v = n(691041),
    N = n(793838),
    C = n(668880),
    R = n(72742),
    O = n(312784),
    b = n(985629),
    D = n(684207),
    L = n(938442),
    w = n(652215),
    M = n(996988);
function P(e) {
    let { user: t, activity: n, onAction: P, onClose: x, application: k, containerClassName: U } = e,
        { themeType: G } = (0, T.E)(),
        F = (0, i.bG)([g.default], () => g.default.getId() === t.id),
        V = (0, _.J)(k),
        B = (0, m.o)(n?.application_id ?? k?.id),
        { analyticsLocations: H } = (0, h.Ay)(p.A.USER_PROFILE_ACTIVITY_BUTTONS),
        j = (0, d.A)("user_profile_activity_buttons", n?.application_id),
        Y = G === M.d.MODAL || G === M.d.MODAL_V2,
        W = G === M.d.POPOUT,
        K = (() =>
            F
                ? W && n?.type === w.$pd.PLAYING && k?.id != null
                    ? (0, r.jsx)(f.A, { applicationId: k.id, onAction: P, onClose: x })
                    : null
                : B || !V || null == k || Y
                  ? (0, a.A)(n)
                      ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: P, onClose: x })
                      : (0, u.A)(n)
                        ? (0, r.jsx)(C.A, { platformType: w.fg2.XBOX, icon: () => (0, r.jsx)(I.A, {}), onAction: P })
                        : 1 === j.length
                          ? (0, r.jsx)(D.A, { distributor: j[0], onAction: P, onClose: x })
                          : j.length > 1
                            ? (0, r.jsx)(L.A, {
                                  distributorCTAConfigs: j,
                                  gameName: n?.name ?? "",
                                  onAction: P,
                                  onClose: x,
                              })
                            : (0, l.A)(n)
                              ? (0, r.jsx)(C.A, {
                                    platformType: w.fg2.PLAYSTATION,
                                    icon: () => (0, r.jsx)(A.A, {}),
                                    onAction: P,
                                })
                              : (0, c.A)(n)
                                ? (0, r.jsx)(O.A, { activity: n, onAction: P })
                                : (0, s.A)(n, w.jUm.JOIN) || (0, o.A)(n)
                                  ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: P, onClose: x })
                                  : n?.type === w.$pd.HANG_STATUS
                                    ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: P, onClose: x })
                                    : n?.buttons != null && n?.buttons.length >= 1
                                      ? (0, r.jsx)(S.A, { user: t, activity: n, onAction: P })
                                      : (0, s.A)(n, w.jUm.INSTANCE)
                                        ? (0, r.jsx)(N.A, { user: t, activity: n, onAction: P })
                                        : (0, E.Cy)(n)
                                          ? (0, r.jsx)(R.A, { activity: n, onAction: P, onClose: x })
                                          : null
                  : (0, r.jsx)(b.A, { application: k, onAction: P, onClose: x, analyticsLocations: H }))();
    return null == K ? null : (0, r.jsx)("div", { className: U, children: K });
}
