n.d(t, { A: () => g, N: () => p });
var l = n(627968),
    a = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(442433),
    o = n(50268),
    c = n(44724),
    d = n(409626),
    u = n(305080),
    m = n(67518),
    f = n(651864),
    h = n(652215),
    x = n(985018);
function g(e) {
    let { applicationId: t, className: n, trackAction: c } = e,
        d = a.useRef(null),
        u = (0, o.A)({ id: t, label: x.intl.string(x.t["FfCL+6"]) }),
        f = (0, m.n)(t, c);
    return null == u && null == f
        ? null
        : (0, l.jsx)(r.YNO, {
              targetElementRef: d,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(r.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, s.Z_)(), t();
                      },
                      "aria-label": x.intl.string(x.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(r.rXV, { children: u }), (0, l.jsx)(r.rXV, { children: f })],
                      }),
                  });
              },
              children: (e) =>
                  (0, l.jsx)(i.m, {
                      text: x.intl.string(x.t["UKOtz+"]),
                      children: (0, l.jsx)(r.DUT, {
                          innerRef: d,
                          className: n,
                          ...e,
                          children: (0, l.jsx)(r.jNK, { size: "xs", color: r.LU0.colors.WHITE }),
                      }),
                  }),
          });
}
function p(e) {
    let { game: t, onClose: n, className: g, trackAction: p } = e,
        _ = a.useRef(null),
        v = a.useRef(null),
        A = (0, o.A)({ id: t.id, label: x.intl.string(x.t["FfCL+6"]) }),
        b = (0, m.n)(t.id, p),
        E = (0, f.A)(t),
        { officialInvite: j } = (0, u.c)(),
        C = new Set(j?.guild?.features).has(h.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        I = a.useCallback(() => {
            null != j && (0, c.X)({ invite: j });
        }, [j]),
        N = a.useCallback(() => {
            null != j && (p(d.Ws.GameShop), (0, c.default)({ invite: j }), n());
        }, [j, p, n]);
    return (0, l.jsxs)("div", {
        className: g,
        children: [
            null != E &&
                (0, l.jsx)(r.YNO, {
                    targetElementRef: v,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(r.W1t, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, s.Z_)(), t();
                            },
                            "aria-label": x.intl.string(x.t.sidPSo),
                            onSelect: () => {},
                            children: (0, l.jsx)(r.rXV, { children: E }),
                        });
                    },
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: v,
                            children: (0, l.jsx)(r.Button, {
                                icon: r.pa$,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: x.intl.string(x.t.sidPSo),
                            }),
                        }),
                }),
            C &&
                null != j &&
                (0, l.jsx)(i.m, {
                    text: x.intl.string(x.t.apFNLU),
                    children: (0, l.jsx)(r.K0, {
                        icon: r.U1X,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": x.intl.string(x.t.apFNLU),
                        onMouseDown: I,
                        onClick: N,
                    }),
                }),
            (null != A || null != b) &&
                (0, l.jsx)(r.YNO, {
                    targetElementRef: _,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(r.W1t, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, s.Z_)(), t();
                            },
                            "aria-label": x.intl.string(x.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(r.rXV, { children: b }), (0, l.jsx)(r.rXV, { children: A })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, l.jsx)(i.m, {
                            text: x.intl.string(x.t["UKOtz+"]),
                            children: (0, l.jsx)("div", {
                                ...e,
                                ref: _,
                                children: (0, l.jsx)(r.K0, {
                                    icon: r.jNK,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": x.intl.string(x.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, l.jsx)(r.K0, {
                icon: r.PGe,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": x.intl.string(x.t.cpT0Cq),
            }),
        ],
    });
}
