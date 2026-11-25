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
    p = i(866665),
    x = i(408278),
    b = i(365199),
    f = i(287809),
    h = i(957565),
    m = i(540665),
    A = i(738604),
    y = i(616334),
    I = i(260498),
    D = i(530165),
    C = i(189714),
    k = i(733791),
    v = i(127139),
    z = i(167483),
    W = i(256616),
    X = i(719588),
    P = i(191850),
    E = i(792996),
    U = i(552821);
function w(l) {
    let {
            projectId: n,
            projectName: i,
            guildId: j,
            projectGuildId: p,
            isOwner: x,
            canRemix: b,
            onPublish: U,
            publishLabel: w,
            publishDisabled: G = !1,
            onExport: N,
            onImport: O,
            onRemix: R,
            onConnectTool: S,
            onHistory: Y,
            onDismiss: H,
            onCloseMenu: _,
        } = l,
        q = (0, C.iI)(n),
        K = e.useContext(A.bI),
        L = (0, X.A)(n, i),
        V = (0, k.CU)(n) && x,
        B = (0, D.UC)(n),
        F = (0, r.bG)(
            [I.Ay],
            () => {
                let l = I.Ay.getProject(n);
                return null != l && (0, I.jf)(l);
            },
            [n],
        ),
        M = (0, r.bG)([m.Ay, f.default], () => m.Ay.isAccessRefused(n, f.default.getCurrentUser()?.id), [n]),
        $ = (x || F) && !M,
        Q = null != R && b,
        T = x && null != O,
        Z = h.p5 && null != j,
        J = null != N || T || null != S || null != Y,
        ll = q ? s.BellIcon : o.BellSlashIcon;
    return (0, t.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${n}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: _,
        onSelect: _,
        children: [
            null != U
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "publish",
                          label: w ?? E.intl.string(P.default["120EFN"]),
                          disabled: G,
                          action: U,
                      }),
                  })
                : null,
            Q || $
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          Q
                              ? (0, t.jsx)(c.Dr, { id: "remix", label: E.intl.string(P.default.XWgAfc), action: R })
                              : null,
                          $
                              ? (0, t.jsx)(c.Dr, {
                                    id: "settings",
                                    label: E.intl.string(P.default.FzfmQ8),
                                    icon: u.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                    action: () =>
                                        (0, y.A)(n, {
                                            guildId: p ?? j,
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
                          label: E.intl.string(E.t.WqhZss),
                          icon: d.LinkIcon,
                          leadingAccessory: { type: "icon", icon: d.LinkIcon },
                          action: () => (0, v.V)(j, n),
                      }),
                  })
                : null,
            (0, t.jsxs)(c.rX, {
                children: [
                    (0, t.jsx)(c.Dr, {
                        id: "mute",
                        label: E.intl.string(q ? P.default.s9rCuH : P.default["a+i/As"]),
                        icon: ll,
                        leadingAccessory: { type: "icon", icon: ll },
                        action: () => (0, C.$L)(n, !q),
                    }),
                    null != H
                        ? (0, t.jsx)(c.Dr, { id: "dismiss", label: E.intl.string(P.default.bWzWw9), action: H })
                        : null,
                ],
            }),
            J
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          null != N
                              ? (0, t.jsx)(c.Dr, { id: "export", label: E.intl.string(P.default.WsEEP7), action: N })
                              : null,
                          T
                              ? (0, t.jsx)(c.Dr, { id: "import", label: E.intl.string(P.default.rWGY3e), action: O })
                              : null,
                          null != S
                              ? (0, t.jsx)(c.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(P.default.yOIql5),
                                    action: S,
                                })
                              : null,
                          null != Y
                              ? (0, t.jsx)(c.Dr, {
                                    id: "history",
                                    label: E.intl.string(P.default["3hIVou"]),
                                    action: Y,
                                })
                              : null,
                      ],
                  })
                : null,
            V || null != B || x || h.p5
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          V
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(P.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let l = I.Ay.getProject(n);
                                        null != l && (0, W.A)({ project: l });
                                    },
                                })
                              : null,
                          null != B
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish-from-server",
                                    label: E.intl.string(P.default.mS61Dm),
                                    color: "danger",
                                    action: () => {
                                        let l = I.Ay.getProject(n);
                                        null != l && (0, z.A)({ project: l, target: B, action: "remove" });
                                    },
                                })
                              : null,
                          x
                              ? (0, t.jsx)(c.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: L,
                                })
                              : null,
                          h.p5
                              ? (0, t.jsx)(c.Dr, {
                                    id: "copy-project-id",
                                    label: E.intl.string(P.default["nm/zuU"]),
                                    icon: g.IdIcon,
                                    leadingAccessory: { type: "icon", icon: g.IdIcon },
                                    action: () => (0, v.o)(n),
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
                        children: (0, t.jsx)(p.m, {
                            text: E.intl.string(E.t["UKOtz+"]),
                            children: (0, t.jsx)(x.K, {
                                icon: b.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": E.intl.string(E.t["UKOtz+"]),
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
