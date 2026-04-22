e.d(n, { A: () => U });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(833349),
    a = e(682261),
    s = e(874546),
    o = e(765379),
    c = e(141639),
    u = e(61330),
    d = e(960076),
    A = e(709309),
    x = e(359549),
    p = e(373966),
    f = e(913948),
    _ = e(793574),
    m = e(688810),
    E = e(362490),
    T = e(308335),
    g = e(82149),
    N = e(961350),
    C = e(790381),
    I = e(266080),
    O = e(939496),
    S = e(934173),
    y = e(691041),
    h = e(306300),
    j = e(793838),
    v = e(668880),
    P = e(72742),
    L = e(312784),
    R = e(985629),
    b = e(652215),
    D = e(996988);
function U(t) {
    let { user: n, activity: e, onAction: U, onClose: M, application: G, containerClassName: V } = t,
        { themeType: Y } = (0, O.E)(),
        k = (0, l.bG)([N.default], () => N.default.getId() === n.id),
        W = (0, x.J)(G),
        B = (0, T.o)(e?.application_id ?? G?.id),
        { analyticsLocations: w } = (0, m.Ay)(_.A.USER_PROFILE_ACTIVITY_BUTTONS),
        F = (0, A.A)("user_profile_activity_buttons", e?.application_id),
        { fetched: H, canStartAuthorization: z, hasAlreadyLinked: X, startAuthorization: $ } = (0, E.RD)(G),
        Q = Y === D.d.MODAL || Y === D.d.MODAL_V2,
        q = Y === D.d.POPOUT,
        J = (() => {
            if (k)
                return q && e?.type === b.$pd.PLAYING && G?.id != null
                    ? (0, i.jsx)(p.A, { applicationId: G.id, onAction: U, onClose: M })
                    : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
                return (0, i.jsx)(S.A, { user: n, activity: e, onAction: U });
            if (!B && W && null != G && !Q)
                return (0, i.jsx)(R.A, { application: G, onAction: U, onClose: M, analyticsLocations: w });
            if ((0, o.A)(e) || ((0, s.Ay)(e) && B))
                return (0, i.jsx)(y.A, { user: n, activity: e, onAction: U, onClose: M });
            if (H && z && !X) return (0, i.jsx)(h.A, { startAuthorization: $, onAction: U });
            if (F.length > 0)
                return (0, i.jsx)(f.A, {
                    distributorCTAConfigs: F,
                    fullWidth: Y !== D.d.MODAL_V2,
                    stopPropagation: !0,
                    onAction: U,
                    onClose: M,
                });
            if (!(0, a.A)(e)) {
                if ((0, u.A)(e))
                    return (0, i.jsx)(v.A, { platformType: b.fg2.XBOX, icon: () => (0, i.jsx)(I.A, {}), onAction: U });
                if ((0, c.A)(e))
                    return (0, i.jsx)(v.A, {
                        platformType: b.fg2.PLAYSTATION,
                        icon: () => (0, i.jsx)(C.A, {}),
                        onAction: U,
                    });
            }
            return (0, d.A)(e)
                ? (0, i.jsx)(L.A, { activity: e, onAction: U })
                : (0, s._C)(e)
                  ? (0, i.jsx)(y.A, { user: n, activity: e, onAction: U, onClose: M })
                  : (0, r.A)(e, b.jUm.INSTANCE)
                    ? (0, i.jsx)(j.A, { user: n, activity: e, onAction: U })
                    : (0, g.Cy)(e)
                      ? (0, i.jsx)(P.A, { activity: e, onAction: U, onClose: M })
                      : null;
        })();
    return null == J ? null : (0, i.jsx)("div", { className: V, children: J });
}
