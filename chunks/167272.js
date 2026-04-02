"use strict";
n.d(t, { A: () => G });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(833349),
    a = n(682261),
    o = n(874546),
    l = n(765379),
    u = n(141639),
    c = n(61330),
    d = n(960076),
    _ = n(709309),
    f = n(359549),
    p = n(373966),
    h = n(913948),
    m = n(793574),
    E = n(688810),
    g = n(362490),
    A = n(308335),
    I = n(82149),
    T = n(961350),
    S = n(790381),
    y = n(266080),
    v = n(939496),
    N = n(934173),
    C = n(502695),
    R = n(691041),
    O = n(306300),
    b = n(793838),
    D = n(668880),
    L = n(72742),
    w = n(312784),
    M = n(985629),
    x = n(652215),
    P = n(346640),
    k = n(996988),
    U = n(985018);
function G(e) {
    let { user: t, activity: n, onAction: G, onClose: F, application: V, containerClassName: B } = e,
        { themeType: H } = (0, v.E)(),
        j = (0, i.bG)([T.default], () => T.default.getId() === t.id),
        Y = (0, f.J)(V),
        W = (0, A.o)(n?.application_id ?? V?.id),
        { analyticsLocations: K } = (0, E.Ay)(m.A.USER_PROFILE_ACTIVITY_BUTTONS),
        $ = (0, _.A)("user_profile_activity_buttons", n?.application_id),
        { fetched: z, canStartAuthorization: q, hasAlreadyLinked: Z, startAuthorization: X } = (0, g.RD)(V),
        Q = H === k.d.MODAL || H === k.d.MODAL_V2,
        J = H === k.d.POPOUT,
        ee = (() => {
            if (j)
                return J && n?.type === x.$pd.PLAYING && V?.id != null
                    ? (0, r.jsx)(p.A, { applicationId: V.id, onAction: G, onClose: F })
                    : null;
            if (
                (n?.application_id === P.L8 && null != n && (n = { ...n, buttons: [U.intl.string(U.t.E4kW5O)] }),
                n?.buttons != null && n?.buttons.length >= 1)
            )
                return (0, r.jsx)(N.A, { user: t, activity: n, onAction: G });
            if (!W && Y && null != V && !Q)
                return (0, r.jsx)(M.A, { application: V, onAction: G, onClose: F, analyticsLocations: K });
            if ((0, l.A)(n) || ((0, o.A)(n) && W))
                return (0, r.jsx)(R.A, { user: t, activity: n, onAction: G, onClose: F });
            if (z && q && !Z) return (0, r.jsx)(O.A, { startAuthorization: X, onAction: G });
            if ($.length > 0)
                return (0, r.jsx)(h.A, {
                    distributorCTAConfigs: $,
                    gameName: n?.name ?? "",
                    fullWidth: H !== k.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: G,
                    onClose: F,
                });
            if (!(0, a.A)(n)) {
                if ((0, c.A)(n))
                    return (0, r.jsx)(D.A, { platformType: x.fg2.XBOX, icon: () => (0, r.jsx)(y.A, {}), onAction: G });
                if ((0, u.A)(n))
                    return (0, r.jsx)(D.A, {
                        platformType: x.fg2.PLAYSTATION,
                        icon: () => (0, r.jsx)(S.A, {}),
                        onAction: G,
                    });
            }
            return (0, d.A)(n)
                ? (0, r.jsx)(w.A, { activity: n, onAction: G })
                : (0, o._)(n)
                  ? (0, r.jsx)(R.A, { user: t, activity: n, onAction: G, onClose: F })
                  : n?.type === x.$pd.HANG_STATUS
                    ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: G, onClose: F })
                    : (0, s.A)(n, x.jUm.INSTANCE)
                      ? (0, r.jsx)(b.A, { user: t, activity: n, onAction: G })
                      : (0, I.Cy)(n)
                        ? (0, r.jsx)(L.A, { activity: n, onAction: G, onClose: F })
                        : null;
        })();
    return null == ee ? null : (0, r.jsx)("div", { className: B, children: ee });
}
