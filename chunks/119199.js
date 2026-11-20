var t = i(477900),
    e = i(582128),
    r = i(855986),
    o = i(782603),
    s = i(780338),
    a = i(165862),
    c = i(477782),
    u = i(625903),
    d = i(173936),
    j = i(473935),
    g = i(265872),
    p = i(866665),
    x = i(408278),
    b = i(365199),
    h = i(957565),
    f = i(738604),
    m = i(616334),
    I = i(260498),
    y = i(189714),
    A = i(733791),
    D = i(127139),
    k = i(256616),
    z = i(842615),
    C = i(191850),
    W = i(792996),
    X = i(552821);
function v(n) {
    let {
            projectId: l,
            projectName: i,
            guildId: g,
            projectGuildId: p,
            isOwner: x,
            canRemix: b,
            onPublish: X,
            publishLabel: v,
            publishDisabled: E = !1,
            onExport: P,
            onImport: w,
            onRemix: N,
            onConnectTool: O,
            onHistory: Y,
            onDismiss: G,
            onCloseMenu: H,
        } = n,
        R = (0, y.iI)(l),
        S = e.useContext(f.bI),
        U = (0, z.A)(l, i),
        _ = (0, A.CU)(l) && x,
        q = (0, r.bG)(
            [I.Ay],
            () => {
                let n = I.Ay.getProject(l);
                return null != n && (0, I.jf)(n);
            },
            [l],
        ),
        K = x || q,
        L = null != N && b,
        V = x && null != w,
        B = h.p5 && null != g,
        F = null != P || V || null != O || null != Y,
        M = R ? o.BellIcon : s.BellSlashIcon;
    return (0, t.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${l}`,
        "aria-label": W.intl.string(W.t.ogxXGq),
        onClose: H,
        onSelect: H,
        children: [
            null != X
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "publish",
                          label: v ?? W.intl.string(C.default["120EFN"]),
                          disabled: E,
                          action: X,
                      }),
                  })
                : null,
            L || K
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          L
                              ? (0, t.jsx)(c.Dr, { id: "remix", label: W.intl.string(C.default.XWgAfc), action: N })
                              : null,
                          K
                              ? (0, t.jsx)(c.Dr, {
                                    id: "settings",
                                    label: W.intl.string(C.default.FzfmQ8),
                                    icon: u.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                    action: () =>
                                        (0, m.A)(l, {
                                            guildId: p ?? g,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: S,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            B
                ? (0, t.jsx)(c.rX, {
                      children: (0, t.jsx)(c.Dr, {
                          id: "copy-link",
                          label: W.intl.string(W.t.WqhZss),
                          icon: d.LinkIcon,
                          leadingAccessory: { type: "icon", icon: d.LinkIcon },
                          action: () => (0, D.V)(g, l),
                      }),
                  })
                : null,
            (0, t.jsxs)(c.rX, {
                children: [
                    (0, t.jsx)(c.Dr, {
                        id: "mute",
                        label: W.intl.string(R ? C.default.s9rCuH : C.default["a+i/As"]),
                        icon: M,
                        leadingAccessory: { type: "icon", icon: M },
                        action: () => (0, y.$L)(l, !R),
                    }),
                    null != G
                        ? (0, t.jsx)(c.Dr, { id: "dismiss", label: W.intl.string(C.default.bWzWw9), action: G })
                        : null,
                ],
            }),
            F
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          null != P
                              ? (0, t.jsx)(c.Dr, { id: "export", label: W.intl.string(C.default.WsEEP7), action: P })
                              : null,
                          V
                              ? (0, t.jsx)(c.Dr, { id: "import", label: W.intl.string(C.default.rWGY3e), action: w })
                              : null,
                          null != O
                              ? (0, t.jsx)(c.Dr, {
                                    id: "connect-tool",
                                    label: W.intl.string(C.default.yOIql5),
                                    action: O,
                                })
                              : null,
                          null != Y
                              ? (0, t.jsx)(c.Dr, {
                                    id: "history",
                                    label: W.intl.string(C.default["3hIVou"]),
                                    action: Y,
                                })
                              : null,
                      ],
                  })
                : null,
            _ || x || h.p5
                ? (0, t.jsxs)(c.rX, {
                      children: [
                          _
                              ? (0, t.jsx)(c.Dr, {
                                    id: "unpublish",
                                    label: W.intl.string(C.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let n = I.Ay.getProject(l);
                                        null != n && (0, k.A)({ project: n });
                                    },
                                })
                              : null,
                          x
                              ? (0, t.jsx)(c.Dr, {
                                    id: "delete",
                                    label: W.intl.string(W.t.oyYWHE),
                                    color: "danger",
                                    action: U,
                                })
                              : null,
                          h.p5
                              ? (0, t.jsx)(c.Dr, {
                                    id: "copy-project-id",
                                    label: W.intl.string(C.default["nm/zuU"]),
                                    icon: j.IdIcon,
                                    leadingAccessory: { type: "icon", icon: j.IdIcon },
                                    action: () => (0, D.o)(l),
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
i.d(
    l,
    {},
    {
        A: function (n) {
            let l = e.useRef(null);
            return (0, t.jsx)(g.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: g.Y.Animation.NONE,
                renderPopout: (l) => {
                    let { closePopout: i } = l;
                    return (0, t.jsx)(v, { ...n, onCloseMenu: i });
                },
                children: (n, i) => {
                    let { onClick: e } = n,
                        { isShown: r } = i;
                    return (0, t.jsx)("div", {
                        ref: l,
                        className: X.h,
                        children: (0, t.jsx)(p.m, {
                            text: W.intl.string(W.t["UKOtz+"]),
                            children: (0, t.jsx)(x.K, {
                                icon: b.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": W.intl.string(W.t["UKOtz+"]),
                                "aria-haspopup": "menu",
                                "aria-expanded": r,
                                onClick: e,
                            }),
                        }),
                    });
                },
            });
        },
        z: v,
    },
);
