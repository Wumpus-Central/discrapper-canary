n.d(t, { A: () => C, N: () => S });
var l = n(627968),
    a = n(64700),
    i = n(990078),
    r = n(265872),
    s = n(861672),
    o = n(477782),
    c = n(939249),
    d = n(365199),
    u = n(827734),
    m = n(821609),
    h = n(663341),
    f = n(408278),
    _ = n(34188),
    g = n(789645),
    p = n(442433),
    x = n(50268),
    E = n(44724),
    A = n(409626),
    v = n(305080),
    I = n(67518),
    b = n(651864),
    j = n(652215),
    N = n(985018);
function C(e) {
    let { applicationId: t, className: n, trackAction: m } = e,
        h = a.useRef(null),
        f = (0, x.A)({ id: t, label: N.intl.string(N.t["FfCL+6"]) }),
        _ = (0, I.n)(t, m);
    return null == f && null == _
        ? null
        : (0, l.jsx)(r.Y, {
              targetElementRef: h,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(s.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, p.Z_)(), t();
                      },
                      "aria-label": N.intl.string(N.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(o.rX, { children: f }), (0, l.jsx)(o.rX, { children: _ })],
                      }),
                  });
              },
              children: (e) =>
                  (0, l.jsx)(i.m, {
                      text: N.intl.string(N.t["UKOtz+"]),
                      children: (0, l.jsx)(c.D, {
                          innerRef: h,
                          className: n,
                          ...e,
                          children: (0, l.jsx)(d.j, { size: "xs", color: u.A.colors.WHITE }),
                      }),
                  }),
          });
}
function S(e) {
    let { game: t, onClose: n, className: c, trackAction: u } = e,
        C = a.useRef(null),
        S = a.useRef(null),
        y = (0, x.A)({ id: t.id, label: N.intl.string(N.t["FfCL+6"]) }),
        R = (0, I.n)(t.id, u),
        L = (0, b.A)(t),
        { officialInvite: T } = (0, v.c)(),
        k = new Set(T?.guild?.features).has(j.GuildFeatures.SOCIAL_LAYER_STOREFRONT),
        w = a.useCallback(() => {
            null != T && (0, E.X)({ invite: T });
        }, [T]),
        M = a.useCallback(() => {
            null != T && (u(A.Ws.GameShop), (0, E.default)({ invite: T }), n());
        }, [T, u, n]);
    return (0, l.jsxs)("div", {
        className: c,
        children: [
            null != L &&
                (0, l.jsx)(r.Y, {
                    targetElementRef: S,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(s.W, {
                            navId: "game-profile-add-to-profile",
                            onClose: () => {
                                (0, p.Z_)(), t();
                            },
                            "aria-label": N.intl.string(N.t.sidPSo),
                            onSelect: () => {},
                            children: (0, l.jsx)(o.rX, { children: L }),
                        });
                    },
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: S,
                            children: (0, l.jsx)(m.$, {
                                icon: h.p,
                                variant: "overlay-secondary",
                                size: "sm",
                                text: N.intl.string(N.t.sidPSo),
                            }),
                        }),
                }),
            k &&
                null != T &&
                (0, l.jsx)(i.m, {
                    text: N.intl.string(N.t.apFNLU),
                    children: (0, l.jsx)(f.K, {
                        icon: _.U,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": N.intl.string(N.t.apFNLU),
                        onMouseDown: w,
                        onClick: M,
                    }),
                }),
            (null != y || null != R) &&
                (0, l.jsx)(r.Y, {
                    targetElementRef: C,
                    align: "top",
                    position: "right",
                    disablePointerEvents: !1,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(s.W, {
                            navId: "game-profile-context",
                            onClose: () => {
                                (0, p.Z_)(), t();
                            },
                            "aria-label": N.intl.string(N.t.PNeFgW),
                            onSelect: () => {},
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.rX, { children: R }), (0, l.jsx)(o.rX, { children: y })],
                            }),
                        });
                    },
                    children: (e) =>
                        (0, l.jsx)(i.m, {
                            text: N.intl.string(N.t["UKOtz+"]),
                            children: (0, l.jsx)("div", {
                                ...e,
                                ref: C,
                                children: (0, l.jsx)(f.K, {
                                    icon: d.j,
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    "aria-label": N.intl.string(N.t["UKOtz+"]),
                                }),
                            }),
                        }),
                }),
            (0, l.jsx)(f.K, {
                icon: g.P,
                variant: "overlay-secondary",
                size: "sm",
                onClick: n,
                "aria-label": N.intl.string(N.t.cpT0Cq),
            }),
        ],
    });
}
