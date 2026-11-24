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
    y = i(738604),
    A = i(616334),
    I = i(260498),
    D = i(189714),
    C = i(733791),
    k = i(127139),
    z = i(256616),
    W = i(842615),
    X = i(191850),
    v = i(792996),
    E = i(552821);
function P(l) {
    let {
            projectId: n,
            projectName: i,
            guildId: j,
            projectGuildId: p,
            isOwner: x,
            canRemix: b,
            onPublish: E,
            publishLabel: P,
            publishDisabled: w = !1,
            onExport: G,
            onImport: N,
            onRemix: O,
            onConnectTool: R,
            onHistory: U,
            onDismiss: Y,
            onCloseMenu: H,
        } = l,
        S = (0, D.iI)(n),
        _ = e.useContext(y.bI),
        q = (0, W.A)(n, i),
        K = (0, C.CU)(n) && x,
        L = (0, r.bG)(
            [I.Ay],
            () => {
                let l = I.Ay.getProject(n);
                return null != l && (0, I.jf)(l);
            },
            [n],
        ),
        V = (0, r.bG)([m.Ay, f.default], () => m.Ay.isAccessRefused(n, f.default.getCurrentUser()?.id), [n]),
        B = (x || L) && !V,
        F = null != O && b,
        M = x && null != N,
        $ = h.p5 && null != j,
        Q = null != G || M || null != R || null != U,
        T = S ? s.BellIcon : o.BellSlashIcon;
    return (0, t.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${n}`,
        "aria-label": v.intl.string(v.t.ogxXGq),
        onClose: H,
        onSelect: H,
        children: [
            null != E
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "publish",
                          label: P ?? v.intl.string(X.default["120EFN"]),
                          disabled: w,
                          action: E,
                      }),
                  })
                : null,
            F || B
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          F
                              ? (0, t.jsx)(c.Dr, { id: "remix", label: v.intl.string(X.default.XWgAfc), action: O })
                              : null,
                          B
                              ? (0, t.jsx)(c.Dr, {
                                    id: "settings",
                                    label: v.intl.string(X.default.FzfmQ8),
                                    icon: u.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                    action: () =>
                                        (0, A.A)(n, {
                                            guildId: p ?? j,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: _,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            $
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "copy-link",
                          label: v.intl.string(v.t.WqhZss),
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
                        label: v.intl.string(S ? X.default.s9rCuH : X.default["a+i/As"]),
                        icon: T,
                        leadingAccessory: { type: "icon", icon: T },
                        action: () => (0, D.$L)(n, !S),
                    }),
                    null != Y
                        ? (0, t.jsx)(c.Dr, { id: "dismiss", label: v.intl.string(X.default.bWzWw9), action: Y })
                        : null,
                ],
            }),
            Q
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          null != G
                              ? (0, t.jsx)(c.Dr, { id: "export", label: v.intl.string(X.default.WsEEP7), action: G })
                              : null,
                          M
                              ? (0, t.jsx)(c.Dr, { id: "import", label: v.intl.string(X.default.rWGY3e), action: N })
                              : null,
                          null != R
                              ? (0, t.jsx)(c.Dr, {
                                    id: "connect-tool",
                                    label: v.intl.string(X.default.yOIql5),
                                    action: R,
                                })
                              : null,
                          null != U
                              ? (0, t.jsx)(c.Dr, {
                                    id: "history",
                                    label: v.intl.string(X.default["3hIVou"]),
                                    action: U,
                                })
                              : null,
                      ],
                  })
                : null,
            K || x || h.p5
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          K
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish",
                                    label: v.intl.string(X.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let l = I.Ay.getProject(n);
                                        null != l && (0, z.A)({ project: l });
                                    },
                                })
                              : null,
                          x
                              ? (0, t.jsx)(c.Dr, {
                                    id: "delete",
                                    label: v.intl.string(v.t.oyYWHE),
                                    color: "danger",
                                    action: q,
                                })
                              : null,
                          h.p5
                              ? (0, t.jsx)(c.Dr, {
                                    id: "copy-project-id",
                                    label: v.intl.string(X.default["nm/zuU"]),
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
                    return (0, t.jsx)(P, { ...l, onCloseMenu: i });
                },
                children: (l, i) => {
                    let { onClick: e } = l,
                        { isShown: r } = i;
                    return (0, t.jsx)("div", {
                        ref: n,
                        className: E.h,
                        children: (0, t.jsx)(p.m, {
                            text: v.intl.string(v.t["UKOtz+"]),
                            children: (0, t.jsx)(x.K, {
                                icon: b.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": v.intl.string(v.t["UKOtz+"]),
                                "aria-haspopup": "menu",
                                "aria-expanded": r,
                                onClick: e,
                            }),
                        }),
                    });
                },
            });
        },
        z: P,
    },
);
