n.d(t, { A: () => u, N: () => m });
var a = n(627968),
    i = n(64700),
    l = n(990078),
    r = n(397927),
    s = n(442433),
    c = n(50268),
    o = n(67518),
    d = n(985018);
function u(e) {
    let { applicationId: t, className: n, trackAction: u } = e,
        m = i.useRef(null),
        x = (0, c.A)({ id: t, label: d.intl.string(d.t["FfCL+6"]) }),
        h = (0, o.n)(t, u);
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
                      "aria-label": d.intl.string(d.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(r.rXV, { children: x }), (0, a.jsx)(r.rXV, { children: h })],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(l.m, {
                      text: d.intl.string(d.t["UKOtz+"]),
                      children: (0, a.jsx)(r.DUT, {
                          innerRef: m,
                          className: n,
                          ...e,
                          children: (0, a.jsx)(r.jNK, { size: "xs", color: r.LU0.colors.WHITE }),
                      }),
                  }),
          });
}
function m(e) {
    let { applicationId: t, onClose: n, className: u, trackAction: m } = e,
        x = i.useRef(null),
        h = (0, c.A)({ id: t, label: d.intl.string(d.t["FfCL+6"]) }),
        f = (0, o.n)(t, m);
    return (0, a.jsxs)("div", {
        className: u,
        children: [
            (null != h || null != f) &&
                (0, a.jsx)(r.YNO, {
                    targetElementRef: x,
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
                            "aria-label": d.intl.string(d.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.rXV, { children: f }), (0, a.jsx)(r.rXV, { children: h })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(l.m, {
                            text: d.intl.string(d.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: x,
                                children: (0, a.jsx)(r.K0, {
                                    icon: r.jNK,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": d.intl.string(d.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(r.K0, {
                icon: r.PGe,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": d.intl.string(d.t.cpT0Cq),
            }),
        ],
    });
}
