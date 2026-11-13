e.d(n, { default: () => F });
var i = e(477900),
    l = e(582128),
    a = e(224640),
    r = e(866665),
    s = e(408278),
    o = e(972213),
    d = e(503698),
    c = e.n(d),
    u = e(855986),
    x = e(534514),
    g = e(834730),
    m = e(428678),
    f = e(176781),
    h = e(650684),
    p = e(123292),
    v = e(687966),
    j = e(821609),
    b = e(87719),
    C = e(780964),
    y = e(766075),
    A = e(532624),
    E = e(975571),
    N = e(350535),
    k = e(818349),
    _ = e(419490),
    I = e(572164),
    S = e(489496),
    w = e(439408),
    G = e(271597);
e(696016);
var T = e(652215),
    V = e(683825),
    L = e(792996),
    M = e(698292),
    O = e(148289);
function z(t) {
    let { variant: n, preselectedMode: e, onClose: a } = t,
        [r] = l.useState(() => (0, k.r)((0, I.T)(), _.Ay.getEnableAutoclipping())),
        [s, o] = l.useState(() => e ?? r),
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
                className: c()(M.Qs, { [M.SI]: m }),
                children: [
                    (0, i.jsx)(Q, { variant: n, mode: s }),
                    m
                        ? (0, i.jsx)(W, { mode: s, saving: d, saveError: x, onChange: o, onSettings: h })
                        : (0, i.jsx)(q, {}),
                    (0, i.jsx)(D, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (s === r) return void (await a());
                                (u(!0), g(!1));
                                try {
                                    let t = (0, k.K)(s);
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
        className: M.Qw,
        "aria-hidden": !0,
        children: (0, i.jsx)("img", { className: M.d3, src: O.A, alt: "", loading: "lazy", decoding: "async" }),
    });
}
function Q(t) {
    let { variant: n, mode: e } = t,
        l = "mode_picker" === n,
        a = "expressive_nitro" === n || (l && "auto" === e) ? V.default.O9OeEg : V.default.Ggh4C0,
        r = l ? V.default.BtyRCT : "expressive_non_nitro" === n ? V.default.kWigdu : V.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: M.Lv,
        children: [
            (0, i.jsx)(x.D, { variant: "nitro-md", children: L.intl.string(a) }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-subtle", children: L.intl.string(r) }),
        ],
    });
}
function W(t) {
    let { mode: n, saving: e, saveError: a, onChange: r, onSettings: s } = t,
        o = (0, u.bG)([A.Ay], () =>
            (0, N.dI)(A.Ay.getKeybindForAction(T.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, N.OH)("alt+c"), !0),
        ),
        d = l.useMemo(
            () => [
                {
                    value: "off",
                    title: L.intl.string(V.default["uO/2T5"]),
                    description: L.intl.string(V.default["l/u5Cq"]),
                    icon: m.DenyIcon,
                },
                {
                    value: "manual",
                    title: L.intl.string(V.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? L.intl.formatToPlainString(V.default.Q5BSVD, { keybind: o })
                            : L.intl.string(V.default.VfTZ7q),
                    icon: f.ClipsIcon,
                },
                {
                    value: "auto",
                    title: L.intl.string(V.default.uEs0uv),
                    description: L.intl.string(V.default.s1pHZy),
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
                    L.intl.string(V.default.utyPWV),
                    " ",
                    (0, i.jsx)(p.Q, {
                        textVariant: "body-sm/normal",
                        text: L.intl.string(V.default["7kGdh5"]),
                        onClick: s,
                    }),
                ],
            }),
            (0, i.jsx)(w.u, { label: L.intl.string(V.default.q8YDuR), value: n, onChange: r, options: d, disabled: e }),
            a
                ? (0, i.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: L.intl.string(V.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    L.intl.string(V.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(p.Q, {
                        textVariant: "body-xs/normal",
                        text: L.intl.string(L.t.hvVgAZ),
                        onClick: () => window.open(E.A.getArticleURL(T.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function q() {
    return (0, i.jsxs)("div", {
        className: M.kR,
        children: [
            (0, i.jsxs)("div", {
                className: M.Nr,
                children: [
                    (0, i.jsx)(h.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: L.intl.string(V.default.pGoNG5) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: L.intl.string(V.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: M.Nr,
                children: [
                    (0, i.jsx)(v.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: L.intl.string(V.default.L0RzNn) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: L.intl.string(V.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function D(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: a, onSettings: r } = t,
        s = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s || o
                ? null
                : (0, i.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: M.N4,
                      children: L.intl.format(V.default.oguG2t, {
                          settingsHook: (t, n) =>
                              (0, i.jsx)(p.Q, { textVariant: "body-xs/normal", text: t, onClick: r }, n),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: M.o1,
                children: [
                    (0, i.jsx)(j.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: L.intl.string(s ? V.default.liWTC0 : o ? V.default.cXDBee : V.default.n9r54F),
                        onClick: s ? l : a,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(g.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: L.intl.string(V.default.pMWdGA),
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
        "aria-label": L.intl.string(V.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: M.Gt,
            children: [
                (0, i.jsx)("div", {
                    className: M.W2,
                    children: (0, i.jsx)(z, { variant: n, source: e, preselectedMode: l, onClose: d.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: M.VN,
                    children: (0, i.jsx)(r.m, {
                        text: L.intl.string(L.t.cpT0Cq),
                        children: (0, i.jsx)(s.K, {
                            icon: o.XLargeIcon,
                            variant: "overlay-secondary",
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            onClick: d.onClose,
                        }),
                    }),
                }),
            ],
        }),
    });
}
