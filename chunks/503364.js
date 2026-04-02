n.d(t, { A: () => m, N: () => x });
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(442433),
    o = n(50268),
    c = n(67518),
    d = n(651864),
    u = n(985018);
function m(e) {
    let { applicationId: t, className: n, trackAction: d } = e,
        m = l.useRef(null),
        x = (0, o.A)({ id: t, label: u.intl.string(u.t["FfCL+6"]) }),
        h = (0, c.n)(t, d);
    return null == x && null == h
        ? null
        : (0, a.jsx)(r.YNO, {
              targetElementRef: m,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(r.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, s.Z_)(), t();
                      },
                      "aria-label": u.intl.string(u.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(r.rXV, { children: x }), (0, a.jsx)(r.rXV, { children: h })],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(i.m, {
                      text: u.intl.string(u.t["UKOtz+"]),
                      children: (0, a.jsx)(r.DUT, {
                          innerRef: m,
                          className: n,
                          ...e,
                          children: (0, a.jsx)(r.jNK, { size: "xs", color: r.LU0.colors.WHITE }),
                      }),
                  }),
          });
}
function x(e) {
    let { game: t, onClose: n, className: m, trackAction: x } = e,
        h = l.useRef(null),
        f = l.useRef(null),
        p = (0, o.A)({ id: t.id, label: u.intl.string(u.t["FfCL+6"]) }),
        g = (0, c.n)(t.id, x),
        _ = (0, d.A)(t);
    return (0, a.jsxs)("div", {
        className: m,
        children: [
            null != _ &&
                (0, a.jsx)(r.YNO, {
                    targetElementRef: f,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(r.W1t, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, s.Z_)(), t();
                            },
                            "aria-label": u.intl.string(u.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(r.rXV, { children: _ }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: f,
                            children: (0, a.jsx)(r.Button, {
                                icon: r.pa$,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: u.intl.string(u.t.sidPSo),
                            }),
                        }),
                }),
            (null != p || null != g) &&
                (0, a.jsx)(r.YNO, {
                    targetElementRef: h,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(r.W1t, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, s.Z_)(), t();
                            },
                            "aria-label": u.intl.string(u.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.rXV, { children: g }), (0, a.jsx)(r.rXV, { children: p })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(i.m, {
                            text: u.intl.string(u.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: h,
                                children: (0, a.jsx)(r.K0, {
                                    icon: r.jNK,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": u.intl.string(u.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(r.K0, {
                icon: r.PGe,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": u.intl.string(u.t.cpT0Cq),
            }),
        ],
    });
}
