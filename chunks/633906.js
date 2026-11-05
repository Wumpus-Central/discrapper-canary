e.d(n, { default: () => F });
var i = e(477900),
    l = e(582128),
    a = e(224640),
    s = e(866665),
    r = e(408278),
    o = e(972213),
    d = e(503698),
    c = e.n(d),
    u = e(855986),
    x = e(534514),
    g = e(834730),
    m = e(428678),
    f = e(176781),
    h = e(650684),
    v = e(123292),
    p = e(687966),
    j = e(821609),
    b = e(87719),
    C = e(780964),
    y = e(766075),
    E = e(532624),
    N = e(975571),
    k = e(350535),
    A = e(818349),
    _ = e(419490),
    I = e(572164),
    S = e(489496),
    w = e(439408),
    G = e(271597);
e(696016);
var T = e(652215),
    L = e(683825),
    M = e(792996),
    V = e(698292);
function O(t) {
    let { variant: n, preselectedMode: e, onClose: a } = t,
        [s] = l.useState(() => (0, A.r)((0, I.T)(), _.Ay.getEnableAutoclipping())),
        [r, o] = l.useState(() => e ?? s),
        [d, u] = l.useState(!1),
        [x, g] = l.useState(!1),
        m = "mode_picker" === n,
        f = "expressive_non_nitro" === n;
    async function h() {
        (await a(), (0, y.openUserSettings)(C.X.CLIPS_PANEL));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P, {}),
            (0, i.jsxs)("div", {
                className: c()(V.Qs, { [V.SI]: m }),
                children: [
                    (0, i.jsx)(W, { variant: n, mode: r }),
                    m
                        ? (0, i.jsx)(q, { mode: r, saving: d, saveError: x, onChange: o, onSettings: h })
                        : (0, i.jsx)(z, {}),
                    (0, i.jsx)(R, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (r === s) return void (await a());
                                (u(!0), g(!1));
                                try {
                                    let t = (0, A.K)(r);
                                    (null != t.enableAutoclipping &&
                                        t.enableAutoclipping !== _.Ay.getEnableAutoclipping() &&
                                        (0, S.uL)(t.enableAutoclipping, !1),
                                        t.clipsEnabled !== (0, I.T)() &&
                                            (await (0, S.yO)({ clipsEnabled: t.clipsEnabled })));
                                } catch {
                                    (g(!0), u(!1));
                                    return;
                                }
                                await a();
                            }
                        },
                        onCheckItOut: async function () {
                            (await a(), f ? (0, b.x)() : (0, G.p)());
                        },
                        onSettings: h,
                    }),
                ],
            }),
        ],
    });
}
function P() {
    return (0, i.jsx)("div", {
        className: V.Qw,
        "aria-hidden": !0,
        children: (0, i.jsx)("img", {
            className: V.d3,
            src: "/assets/cc9b98ec3d958835.svg",
            alt: "",
            loading: "lazy",
            decoding: "async",
        }),
    });
}
function W(t) {
    let { variant: n, mode: e } = t,
        l = "mode_picker" === n,
        a = "expressive_nitro" === n || (l && "auto" === e) ? L.default.O9OeEg : L.default.Ggh4C0,
        s = l ? L.default.BtyRCT : "expressive_non_nitro" === n ? L.default.kWigdu : L.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: V.Lv,
        children: [
            (0, i.jsx)(x.D, { variant: "nitro-md", children: M.intl.string(a) }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-subtle", children: M.intl.string(s) }),
        ],
    });
}
function q(t) {
    let { mode: n, saving: e, saveError: a, onChange: s, onSettings: r } = t,
        o = (0, u.bG)([E.Ay], () =>
            (0, k.dI)(E.Ay.getKeybindForAction(T.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, k.OH)("alt+c"), !0),
        ),
        d = l.useMemo(
            () => [
                {
                    value: "off",
                    title: M.intl.string(L.default["uO/2T5"]),
                    description: M.intl.string(L.default["l/u5Cq"]),
                    icon: m.DenyIcon,
                },
                {
                    value: "manual",
                    title: M.intl.string(L.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? M.intl.formatToPlainString(L.default["qYS+JH"], { keybind: o })
                            : M.intl.string(L.default.VfTZ7q),
                    icon: f.ClipsIcon,
                },
                {
                    value: "auto",
                    title: M.intl.string(L.default.uEs0uv),
                    description: M.intl.string(L.default.MRWtw9),
                    icon: h.ClipsAutoIcon,
                    accent: "nitro",
                },
            ],
            [o],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: [
                    M.intl.string(L.default.utyPWV),
                    " ",
                    (0, i.jsx)(v.Q, {
                        textVariant: "body-sm/normal",
                        text: M.intl.string(L.default["7kGdh5"]),
                        onClick: r,
                    }),
                ],
            }),
            (0, i.jsx)(w.u, { label: M.intl.string(L.default.q8YDuR), value: n, onChange: s, options: d, disabled: e }),
            a
                ? (0, i.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: M.intl.string(L.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    M.intl.string(L.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(v.Q, {
                        textVariant: "body-xs/normal",
                        text: M.intl.string(M.t.hvVgAZ),
                        onClick: () => window.open(N.A.getArticleURL(T.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function z() {
    return (0, i.jsxs)("div", {
        className: V.kR,
        children: [
            (0, i.jsxs)("div", {
                className: V.Nr,
                children: [
                    (0, i.jsx)(h.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: M.intl.string(L.default.pGoNG5) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: M.intl.string(L.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.Nr,
                children: [
                    (0, i.jsx)(p.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: M.intl.string(L.default.L0RzNn) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: M.intl.string(L.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function R(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: a, onSettings: s } = t,
        r = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r || o
                ? null
                : (0, i.jsxs)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: V.N4,
                      children: [
                          M.intl.string(L.default["22Z9fP"]),
                          " ",
                          (0, i.jsx)(v.Q, {
                              textVariant: "body-xs/normal",
                              text: M.intl.string(L.default["7kGdh5"]),
                              onClick: s,
                          }),
                      ],
                  }),
            (0, i.jsxs)("div", {
                className: V.o1,
                children: [
                    (0, i.jsx)(j.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: M.intl.string(r ? L.default.liWTC0 : L.default.n9r54F),
                        onClick: r ? l : a,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(g.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: M.intl.string(L.default.pMWdGA),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function F(t) {
    let { variant: n, source: e, preselectedMode: l, ...d } = t;
    return (0, i.jsx)(a.d, {
        ...d,
        size: "lg",
        "aria-label": M.intl.string(L.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: V.Gt,
            children: [
                (0, i.jsx)("div", {
                    className: V.W2,
                    children: (0, i.jsx)(O, { variant: n, source: e, preselectedMode: l, onClose: d.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: V.VN,
                    children: (0, i.jsx)(s.m, {
                        text: M.intl.string(M.t.cpT0Cq),
                        children: (0, i.jsx)(r.K, {
                            icon: o.XLargeIcon,
                            variant: "overlay-secondary",
                            "aria-label": M.intl.string(M.t.cpT0Cq),
                            onClick: d.onClose,
                        }),
                    }),
                }),
            ],
        }),
    });
}
