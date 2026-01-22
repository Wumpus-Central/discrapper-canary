n.d(t, { A: () => w });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(833349),
    s = n(765379),
    o = n(141639),
    l = n(61330),
    c = n(960076),
    u = n(359549),
    d = n(373966),
    f = n(793574),
    p = n(688810),
    _ = n(308335),
    h = n(82149),
    m = n(961350),
    g = n(790381),
    E = n(266080),
    b = n(939496),
    y = n(934173),
    O = n(502695),
    A = n(691041),
    v = n(793838),
    S = n(668880),
    I = n(72742),
    T = n(312784),
    C = n(985629),
    N = n(652215),
    R = n(996988);
function w(e) {
    var t;
    let { user: n, activity: w, onAction: P, onClose: D, application: x, containerClassName: L } = e,
        { themeType: j } = (0, b.E)(),
        M = (0, i.bG)([m.default], () => m.default.getId() === n.id),
        k = (0, u.J)(x),
        U = (0, _.o)(null != (t = null == w ? void 0 : w.application_id) ? t : null == x ? void 0 : x.id),
        { analyticsLocations: G } = (0, p.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS),
        V = j === R.d.MODAL || j === R.d.MODAL_V2,
        F = j === R.d.POPOUT,
        B = (() =>
            M
                ? F && (null == w ? void 0 : w.type) === N.$pd.PLAYING && (null == x ? void 0 : x.id) != null
                    ? (0, r.jsx)(d.A, {
                          applicationId: x.id,
                          onAction: P,
                          onClose: D,
                      })
                    : null
                : U || !k || null == x || V
                  ? (0, l.A)(w)
                      ? (0, r.jsx)(S.A, {
                            platformType: N.fg2.XBOX,
                            icon: () => (0, r.jsx)(E.A, {}),
                            onAction: P,
                        })
                      : (0, o.A)(w)
                        ? (0, r.jsx)(S.A, {
                              platformType: N.fg2.PLAYSTATION,
                              icon: () => (0, r.jsx)(g.A, {}),
                              onAction: P,
                          })
                        : (0, c.A)(w)
                          ? (0, r.jsx)(T.A, {
                                activity: w,
                                onAction: P,
                            })
                          : (0, a.A)(w, N.jUm.JOIN) || (0, s.A)(w)
                            ? (0, r.jsx)(A.A, {
                                  user: n,
                                  activity: w,
                                  onAction: P,
                                  onClose: D,
                              })
                            : (null == w ? void 0 : w.type) === N.$pd.HANG_STATUS
                              ? (0, r.jsx)(O.A, {
                                    user: n,
                                    activity: w,
                                    onAction: P,
                                    onClose: D,
                                })
                              : (null == w ? void 0 : w.buttons) != null && (null == w ? void 0 : w.buttons.length) >= 1
                                ? (0, r.jsx)(y.A, {
                                      user: n,
                                      activity: w,
                                      onAction: P,
                                  })
                                : (0, a.A)(w, N.jUm.INSTANCE)
                                  ? (0, r.jsx)(v.A, {
                                        user: n,
                                        activity: w,
                                        onAction: P,
                                    })
                                  : (0, h.Cy)(w)
                                    ? (0, r.jsx)(I.A, {
                                          activity: w,
                                          onAction: P,
                                          onClose: D,
                                      })
                                    : null
                  : (0, r.jsx)(C.A, {
                        application: x,
                        onAction: P,
                        onClose: D,
                        analyticsLocations: G,
                    }))();
    return null == B
        ? null
        : (0, r.jsx)("div", {
              className: L,
              children: B,
          });
}
