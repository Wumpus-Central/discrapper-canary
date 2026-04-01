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
    C = n(691041),
    N = n(793838),
    R = n(668880),
    O = n(72742),
    b = n(312784),
    D = n(985629),
    L = n(652215),
    w = n(346640),
    M = n(996988),
    x = n(985018);
function P(e) {
    let { user: t, activity: n, onAction: P, onClose: k, application: U, containerClassName: G } = e,
        { themeType: F } = (0, S.E)(),
        V = (0, i.bG)([A.default], () => A.default.getId() === t.id),
        B = (0, _.J)(U),
        H = (0, E.o)(n?.application_id ?? U?.id),
        { analyticsLocations: j } = (0, m.Ay)(h.A.USER_PROFILE_ACTIVITY_BUTTONS),
        Y = (0, d.A)("user_profile_activity_buttons", n?.application_id),
        W = F === M.d.MODAL || F === M.d.MODAL_V2,
        K = F === M.d.POPOUT,
        $ = (() =>
            V
                ? K && n?.type === L.$pd.PLAYING && U?.id != null
                    ? (0, r.jsx)(f.A, { applicationId: U.id, onAction: P, onClose: k })
                    : null
                : H || !B || null == U || W
                  ? (0, a.A)(n)
                      ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: P, onClose: k })
                      : (0, u.A)(n)
                        ? (0, r.jsx)(R.A, { platformType: L.fg2.XBOX, icon: () => (0, r.jsx)(T.A, {}), onAction: P })
                        : Y.length > 0
                          ? (0, r.jsx)(p.A, {
                                distributorCTAConfigs: Y,
                                gameName: n?.name ?? "",
                                fullWidth: F !== M.d.MODAL_V2,
                                stopPropagation: !0,
                                onAction: P,
                                onClose: k,
                            })
                          : (0, l.A)(n)
                            ? (0, r.jsx)(R.A, {
                                  platformType: L.fg2.PLAYSTATION,
                                  icon: () => (0, r.jsx)(I.A, {}),
                                  onAction: P,
                              })
                            : (0, c.A)(n)
                              ? (0, r.jsx)(b.A, { activity: n, onAction: P })
                              : (0, s.A)(n, L.jUm.JOIN) || (0, o.A)(n)
                                ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: P, onClose: k })
                                : n?.type === L.$pd.HANG_STATUS
                                  ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: P, onClose: k })
                                  : (n?.application_id === w.L8 &&
                                          null != n &&
                                          (n = { ...n, buttons: [x.intl.string(x.t.E4kW5O)] }),
                                      n?.buttons != null && n?.buttons.length >= 1)
                                    ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: P })
                                    : (0, s.A)(n, L.jUm.INSTANCE)
                                      ? (0, r.jsx)(N.A, { user: t, activity: n, onAction: P })
                                      : (0, g.Cy)(n)
                                        ? (0, r.jsx)(O.A, { activity: n, onAction: P, onClose: k })
                                        : null
                  : (0, r.jsx)(D.A, { application: U, onAction: P, onClose: k, analyticsLocations: j }))();
    return null == $ ? null : (0, r.jsx)("div", { className: G, children: $ });
}
