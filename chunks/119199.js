var t = i(477900),
    e = i(582128),
    r = i(855986),
    s = i(782603),
    o = i(780338),
    a = i(165862),
    c = i(477782),
    u = i(625903),
    d = i(173936),
    g = i(473935),
    j = i(265872),
    x = i(866665),
    p = i(408278),
    b = i(365199),
    f = i(287809),
    h = i(957565),
    m = i(540665),
    A = i(738604),
    y = i(273569),
    I = i(616334),
    D = i(260498),
    C = i(530165),
    v = i(189714),
    X = i(733791),
    k = i(127139),
    z = i(167483),
    W = i(256616),
    P = i(719588),
    E = i(258576),
    O = i(792996),
    U = i(552821);
function w(l) {
    let {
            projectId: n,
            projectName: i,
            guildId: j,
            projectGuildId: x,
            isOwner: p,
            canRemix: b,
            onPublish: U,
            publishLabel: w,
            publishDisabled: G = !1,
            onExport: N,
            onImport: R,
            onRemix: S,
            onConnectTool: Y,
            onHistory: H,
            onDismiss: _,
            onCloseMenu: q,
        } = l,
        F = (0, v.iI)(n),
        K = e.useContext(A.bI),
        L = (0, P.A)(n, i),
        V = (0, X.CU)(n) && p,
        B = (0, C.UC)(n),
        M = (0, r.bG)(
            [D.Ay],
            () => {
                let l = D.Ay.getProject(n);
                return null != l && (0, D.jf)(l);
            },
            [n],
        ),
        $ = (0, r.bG)([m.Ay, f.default], () => m.Ay.isAccessRefused(n, f.default.getCurrentUser()?.id), [n]),
        J = (p || M) && !$,
        Q = null != S && b,
        T = p && null != R,
        Z = h.p5 && null != j,
        ll = null != N || T || null != Y || null != H,
        ln = F ? s.BellIcon : o.BellSlashIcon;
    return (0, t.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${n}`,
        "aria-label": O.intl.string(O.t.ogxXGq),
        onClose: q,
        onSelect: q,
        children: [
            null != U
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "publish",
                          label: w ?? O.intl.string(E.default["120EFN"]),
                          disabled: G,
                          action: U,
                      }),
                  })
                : null,
            Q || p || J
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          Q
                              ? (0, t.jsx)(c.Dr, { id: "remix", label: O.intl.string(E.default.XWgAfc), action: S })
                              : null,
                          p
                              ? (0, t.jsx)(c.Dr, {
                                    id: "move",
                                    label: O.intl.string(E.default.J9OF2X),
                                    action: () => (0, y.A)(n, j ?? null),
                                })
                              : null,
                          J
                              ? (0, t.jsx)(c.Dr, {
                                    id: "settings",
                                    label: O.intl.string(E.default.FzfmQ8),
                                    icon: u.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                    action: () =>
                                        (0, I.A)(n, {
                                            guildId: x ?? j,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: K,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            Z
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "copy-link",
                          label: O.intl.string(O.t.WqhZss),
                          icon: d.LinkIcon,
                          leadingAccessory: { type: "icon", icon: d.LinkIcon },
                          action: () => (0, k.V)(j, n),
                      }),
                  })
                : null,
            (0, t.jsxs)(c.rX, {
                children: [
                    (0, t.jsx)(c.Dr, {
                        id: "mute",
                        label: O.intl.string(F ? E.default.s9rCuH : E.default["a+i/As"]),
                        icon: ln,
                        leadingAccessory: { type: "icon", icon: ln },
                        action: () => (0, v.$L)(n, !F),
                    }),
                    null != _
                        ? (0, t.jsx)(c.Dr, { id: "dismiss", label: O.intl.string(E.default.bWzWw9), action: _ })
                        : null,
                ],
            }),
            ll
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          null != N
                              ? (0, t.jsx)(c.Dr, { id: "export", label: O.intl.string(E.default.WsEEP7), action: N })
                              : null,
                          T
                              ? (0, t.jsx)(c.Dr, { id: "import", label: O.intl.string(E.default.rWGY3e), action: R })
                              : null,
                          null != Y
                              ? (0, t.jsx)(c.Dr, {
                                    id: "connect-tool",
                                    label: O.intl.string(E.default.yOIql5),
                                    action: Y,
                                })
                              : null,
                          null != H
                              ? (0, t.jsx)(c.Dr, {
                                    id: "history",
                                    label: O.intl.string(E.default["3hIVou"]),
                                    action: H,
                                })
                              : null,
                      ],
                  })
                : null,
            V || null != B || p || h.p5
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          V
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish",
                                    label: O.intl.string(E.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let l = D.Ay.getProject(n);
                                        null != l && (0, W.A)({ project: l });
                                    },
                                })
                              : null,
                          null != B
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish-from-server",
                                    label: O.intl.string(E.default.mS61Dm),
                                    color: "danger",
                                    action: () => {
                                        let l = D.Ay.getProject(n);
                                        null != l && (0, z.A)({ project: l, target: B, action: "remove" });
                                    },
                                })
                              : null,
                          p
                              ? (0, t.jsx)(c.Dr, {
                                    id: "delete",
                                    label: O.intl.string(O.t.oyYWHE),
                                    color: "danger",
                                    action: L,
                                })
                              : null,
                          h.p5
                              ? (0, t.jsx)(c.Dr, {
                                    id: "copy-project-id",
                                    label: O.intl.string(E.default["nm/zuU"]),
                                    icon: g.IdIcon,
                                    leadingAccessory: { type: "icon", icon: g.IdIcon },
                                    action: () => (0, k.o)(n),
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
i.d(
    n,
    {},
    {
        A: function (l) {
            let n = e.useRef(null);
            return (0, t.jsx)(j.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: j.Y.Animation.NONE,
                renderPopout: (n) => {
                    let { closePopout: i } = n;
                    return (0, t.jsx)(w, { ...l, onCloseMenu: i });
                },
                children: (l, i) => {
                    let { onClick: e } = l,
                        { isShown: r } = i;
                    return (0, t.jsx)("div", {
                        ref: n,
                        className: U.h,
                        children: (0, t.jsx)(x.m, {
                            text: O.intl.string(O.t["UKOtz+"]),
                            children: (0, t.jsx)(p.K, {
                                icon: b.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": O.intl.string(O.t["UKOtz+"]),
                                "aria-haspopup": "menu",
                                "aria-expanded": r,
                                onClick: e,
                            }),
                        }),
                    });
                },
            });
        },
        z: w,
    },
);
