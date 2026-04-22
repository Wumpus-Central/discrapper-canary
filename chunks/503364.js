n.d(t, { A: () => j, N: () => y });
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(265872),
    s = n(861672),
    o = n(477782),
    d = n(939249),
    c = n(365199),
    u = n(827734),
    m = n(821609),
    _ = n(663341),
    h = n(408278),
    f = n(34188),
    g = n(789645),
    p = n(442433),
    x = n(50268),
    b = n(44724),
    A = n(409626),
    v = n(305080),
    E = n(67518),
    I = n(651864),
    C = n(652215),
    N = n(985018);
function j(e) {
    let { applicationId: t, className: n, trackAction: m } = e,
        _ = l.useRef(null),
        h = (0, x.A)({ id: t, label: N.intl.string(N.t["FfCL+6"]) }),
        f = (0, E.n)(t, m);
    return null == h && null == f
        ? null
        : (0, a.jsx)(r.Y, {
              targetElementRef: _,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(s.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, p.Z_)(), t();
                      },
                      "aria-label": N.intl.string(N.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(o.rX, { children: h }), (0, a.jsx)(o.rX, { children: f })],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(i.m, {
                      text: N.intl.string(N.t["UKOtz+"]),
                      children: (0, a.jsx)(d.D, {
                          innerRef: _,
                          className: n,
                          ...e,
                          children: (0, a.jsx)(c.j, { size: "xs", color: u.A.colors.WHITE }),
                      }),
                  }),
          });
}
function y(e) {
    let { game: t, onClose: n, className: d, trackAction: u } = e,
        j = l.useRef(null),
        y = l.useRef(null),
        S = (0, x.A)({ id: t.id, label: N.intl.string(N.t["FfCL+6"]) }),
        R = (0, E.n)(t.id, u),
        T = (0, I.A)(t),
        { officialInvite: L } = (0, v.c)(),
        k = new Set(L?.guild?.features).has(C.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        M = l.useCallback(() => {
            null != L && (0, b.X)({ invite: L });
        }, [L]),
        w = l.useCallback(() => {
            null != L && (u(A.Ws.GameShop), (0, b.default)({ invite: L }), n());
        }, [L, u, n]);
    return (0, a.jsxs)("div", {
        className: d,
        children: [
            null != T &&
                (0, a.jsx)(r.Y, {
                    targetElementRef: y,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(s.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, p.Z_)(), t();
                            },
                            "aria-label": N.intl.string(N.t.sidPSo),
                            onSelect: () => {},
                            children: (0, a.jsx)(o.rX, { children: T }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: y,
                            children: (0, a.jsx)(m.$, {
                                icon: _.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: N.intl.string(N.t.sidPSo),
                            }),
                        }),
                }),
            k &&
                null != L &&
                (0, a.jsx)(i.m, {
                    text: N.intl.string(N.t.apFNLU),
                    children: (0, a.jsx)(h.K, {
                        icon: f.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": N.intl.string(N.t.apFNLU),
                        onMouseDown: M,
                        onClick: w,
                    }),
                }),
            (null != S || null != R) &&
                (0, a.jsx)(r.Y, {
                    targetElementRef: j,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, a.jsx)(s.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, p.Z_)(), t();
                            },
                            "aria-label": N.intl.string(N.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.rX, { children: R }), (0, a.jsx)(o.rX, { children: S })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, a.jsx)(i.m, {
                            text: N.intl.string(N.t["UKOtz+"]),
                            children: (0, a.jsx)("div", {
                                ...e,
                                ref: j,
                                children: (0, a.jsx)(h.K, {
                                    icon: c.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": N.intl.string(N.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, a.jsx)(h.K, {
                icon: g.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": N.intl.string(N.t.cpT0Cq),
            }),
        ],
    });
}
