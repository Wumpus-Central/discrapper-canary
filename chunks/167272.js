"use strict";
n.d(t, { A: () => x });
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
    P = n(996988);
function x(e) {
    let { user: t, activity: n, onAction: x, onClose: k, application: U, containerClassName: G } = e,
        { themeType: F } = (0, v.E)(),
        V = (0, i.bG)([T.default], () => T.default.getId() === t.id),
        B = (0, f.J)(U),
        H = (0, A.o)(n?.application_id ?? U?.id),
        { analyticsLocations: j } = (0, E.Ay)(m.A.USER_PROFILE_ACTIVITY_BUTTONS),
        Y = (0, _.A)("user_profile_activity_buttons", n?.application_id),
        { fetched: W, canStartAuthorization: K, hasAlreadyLinked: $, startAuthorization: z } = (0, g.RD)(U),
        q = F === P.d.MODAL || F === P.d.MODAL_V2,
        Z = F === P.d.POPOUT,
        X = (() => {
            if (V)
                return Z && n?.type === M.$pd.PLAYING && U?.id != null
                    ? (0, r.jsx)(p.A, { applicationId: U.id, onAction: x, onClose: k })
                    : null;
            if (n?.buttons != null && n?.buttons.length >= 1)
                return (0, r.jsx)(N.A, { user: t, activity: n, onAction: x });
            if (!H && B && null != U && !q)
                return (0, r.jsx)(w.A, { application: U, onAction: x, onClose: k, analyticsLocations: j });
            if ((0, l.A)(n) || ((0, o.Ay)(n) && H))
                return (0, r.jsx)(C.A, { user: t, activity: n, onAction: x, onClose: k });
            if (W && K && !$) return (0, r.jsx)(R.A, { startAuthorization: z, onAction: x });
            if (Y.length > 0)
                return (0, r.jsx)(h.A, {
                    distributorCTAConfigs: Y,
                    fullWidth: F !== P.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: x,
                    onClose: k,
                });
            if (!(0, a.A)(n)) {
                if ((0, c.A)(n))
                    return (0, r.jsx)(b.A, { platformType: M.fg2.XBOX, icon: () => (0, r.jsx)(y.A, {}), onAction: x });
                if ((0, u.A)(n))
                    return (0, r.jsx)(b.A, {
                        platformType: M.fg2.PLAYSTATION,
                        icon: () => (0, r.jsx)(S.A, {}),
                        onAction: x,
                    });
            }
            return (0, d.A)(n)
                ? (0, r.jsx)(L.A, { activity: n, onAction: x })
                : (0, o._C)(n)
                  ? (0, r.jsx)(C.A, { user: t, activity: n, onAction: x, onClose: k })
                  : (0, s.A)(n, M.jUm.INSTANCE)
                    ? (0, r.jsx)(O.A, { user: t, activity: n, onAction: x })
                    : (0, I.Cy)(n)
                      ? (0, r.jsx)(D.A, { activity: n, onAction: x, onClose: k })
                      : null;
        })();
    return null == X ? null : (0, r.jsx)("div", { className: G, children: X });
}
