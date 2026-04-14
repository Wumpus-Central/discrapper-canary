"use strict";
n.d(t, { A: () => U });
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
    C = n(691041),
    R = n(306300),
    O = n(793838),
    b = n(668880),
    D = n(72742),
    L = n(312784),
    w = n(985629),
    M = n(652215),
    x = n(346640),
    P = n(996988),
    k = n(985018);
function U(e) {
    let { user: t, activity: n, onAction: U, onClose: G, application: F, containerClassName: V } = e,
        { themeType: B } = (0, v.E)(),
        H = (0, i.bG)([T.default], () => T.default.getId() === t.id),
        j = (0, f.J)(F),
        Y = (0, A.o)(n?.application_id ?? F?.id),
        { analyticsLocations: W } = (0, E.Ay)(m.A.USER_PROFILE_ACTIVITY_BUTTONS),
        K = (0, _.A)("user_profile_activity_buttons", n?.application_id),
        { fetched: $, canStartAuthorization: z, hasAlreadyLinked: q, startAuthorization: Z } = (0, g.RD)(F),
        X = B === P.d.MODAL || B === P.d.MODAL_V2,
        Q = B === P.d.POPOUT,
        J = (() => {
            if (H)
                return Q && n?.type === M.$pd.PLAYING && F?.id != null
                    ? (0, r.jsx)(p.A, { applicationId: F.id, onAction: U, onClose: G })
                    : null;
            if (
                (n?.application_id === x.L8 && null != n && (n = { ...n, buttons: [k.intl.string(k.t.E4kW5O)] }),
                n?.buttons != null && n?.buttons.length >= 1)
            )
                return (0, r.jsx)(N.A, { user: t, activity: n, onAction: U });
            if (!Y && j && null != F && !X)
                return (0, r.jsx)(w.A, { application: F, onAction: U, onClose: G, analyticsLocations: W });
            if ((0, l.A)(n) || ((0, o.Ay)(n) && Y))
                return (0, r.jsx)(C.A, { user: t, activity: n, onAction: U, onClose: G });
            if ($ && z && !q) return (0, r.jsx)(R.A, { startAuthorization: Z, onAction: U });
            if (K.length > 0)
                return (0, r.jsx)(h.A, {
                    distributorCTAConfigs: K,
                    fullWidth: B !== P.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: U,
                    onClose: G,
                });
            if (!(0, a.A)(n)) {
                if ((0, c.A)(n))
                    return (0, r.jsx)(b.A, { platformType: M.fg2.XBOX, icon: () => (0, r.jsx)(y.A, {}), onAction: U });
                if ((0, u.A)(n))
                    return (0, r.jsx)(b.A, {
                        platformType: M.fg2.PLAYSTATION,
                        icon: () => (0, r.jsx)(S.A, {}),
                        onAction: U,
                    });
            }
            return (0, d.A)(n)
                ? (0, r.jsx)(L.A, { activity: n, onAction: U })
                : (0, o._C)(n)
                  ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: U, onClose: G })
                  : (0, s.A)(n, M.jUm.INSTANCE)
                    ? (0, r.jsx)(O.A, { user: t, activity: n, onAction: U })
                    : (0, I.Cy)(n)
                      ? (0, r.jsx)(D.A, { activity: n, onAction: U, onClose: G })
                      : null;
        })();
    return null == J ? null : (0, r.jsx)("div", { className: V, children: J });
}
