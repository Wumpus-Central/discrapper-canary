"use strict";
n.d(t, { A: () => w });
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
    D = n(652215),
    L = n(996988);
function w(e) {
    let { user: t, activity: n, onAction: w, onClose: M, application: x, containerClassName: P } = e,
        { themeType: k } = (0, I.E)(),
        U = (0, i.bG)([E.default], () => E.default.getId() === t.id),
        G = (0, d.J)(x),
        F = (0, h.o)(n?.application_id ?? x?.id),
        { analyticsLocations: V } = (0, p.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        B = (0, c.A)("user_profile_activity_buttons", n?.application_id),
        H = k === L.d.MODAL || k === L.d.MODAL_V2,
        j = k === L.d.POPOUT,
        Y = (() =>
            U
                ? j && n?.type === D.$pd.PLAYING && x?.id != null
                    ? (0, r.jsx)(_.A, { applicationId: x.id, onAction: w, onClose: M })
                    : null
                : F || !G || null == x || H
                  ? (0, l.A)(n)
                      ? (0, r.jsx)(N.A, { platformType: D.fg2.XBOX, icon: () => (0, r.jsx)(A.A, {}), onAction: w })
                      : B.length > 0
                        ? (0, r.jsx)(b.A, { distributor: B[0], onAction: w, onClose: M })
                        : (0, o.A)(n)
                          ? (0, r.jsx)(N.A, {
                                platformType: D.fg2.PLAYSTATION,
                                icon: () => (0, r.jsx)(g.A, {}),
                                onAction: w,
                            })
                          : (0, u.A)(n)
                            ? (0, r.jsx)(R.A, { activity: n, onAction: w })
                            : (0, s.A)(n, D.jUm.JOIN) || (0, a.A)(n)
                              ? (0, r.jsx)(y.A, { user: t, activity: n, onAction: w, onClose: M })
                              : n?.type === D.$pd.HANG_STATUS
                                ? (0, r.jsx)(S.A, { user: t, activity: n, onAction: w, onClose: M })
                                : n?.buttons != null && n?.buttons.length >= 1
                                  ? (0, r.jsx)(T.A, { user: t, activity: n, onAction: w })
                                  : (0, s.A)(n, D.jUm.INSTANCE)
                                    ? (0, r.jsx)(v.A, { user: t, activity: n, onAction: w })
                                    : (0, m.Cy)(n)
                                      ? (0, r.jsx)(C.A, { activity: n, onAction: w, onClose: M })
                                      : null
                  : (0, r.jsx)(O.A, { application: x, onAction: w, onClose: M, analyticsLocations: V }))();
    return null == Y ? null : (0, r.jsx)("div", { className: P, children: Y });
}
