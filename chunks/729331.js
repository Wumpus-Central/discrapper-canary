e.d(n, { default: () => q });
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
    m = e(834730),
    g = e(428678),
    f = e(176781),
    h = e(650684),
    v = e(123292),
    j = e(687966),
    p = e(821609),
    b = e(87719),
    y = e(780964),
    C = e(766075),
    N = e(532624),
    E = e(975571),
    A = e(350535),
    k = e(818349),
    _ = e(419490),
    I = e(572164),
    S = e(489496),
    w = e(439408),
    T = e(271597);
e(696016);
var V = e(652215),
    G = e(683825),
    L = e(792996),
    D = e(698292),
    M = e(148289);
function z(t) {
    let { variant: n, preselectedMode: e, onClose: a } = t,
        [s] = l.useState(() => (0, k.r)((0, I.T)(), _.Ay.getEnableAutoclipping())),
        [r, o] = l.useState(() => e ?? s),
        [d, u] = l.useState(!1),
        [x, m] = l.useState(!1),
        g = "mode_picker" === n,
        f = "expressive_non_nitro" === n;
    async function h() {
        (await a(), (0, C.openUserSettings)(y.X.CLIPS_PANEL));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O, {}),
            (0, i.jsxs)("div", {
                className: c()(D.Qs, { [D.SI]: g }),
                children: [
                    (0, i.jsx)(P, { variant: n }),
                    g
                        ? (0, i.jsx)(Q, { mode: r, saving: d, saveError: x, onChange: o, onSettings: h })
                        : (0, i.jsx)(R, {}),
                    (0, i.jsx)(W, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (r === s) return void (await a());
                                (u(!0), m(!1));
                                try {
                                    let t = (0, k.K)(r);
                                    (null != t.enableAutoclipping &&
                                        t.enableAutoclipping !== _.Ay.getEnableAutoclipping() &&
                                        (0, S.uL)(t.enableAutoclipping, !1),
                                        t.clipsEnabled !== (0, I.T)() &&
                                            (await (0, S.yO)({ clipsEnabled: t.clipsEnabled })));
                                } catch {
                                    (m(!0), u(!1));
                                    return;
                                }
                                await a();
                            }
                        },
                        onCheckItOut: async function () {
                            (await a(), f ? (0, b.x)() : (0, T.p)());
                        },
                        onSettings: h,
                    }),
                ],
            }),
        ],
    });
}
function O() {
    return (0, i.jsx)("div", {
        className: D.Qw,
        "aria-hidden": !0,
        children: (0, i.jsx)("img", { className: D.d3, src: M.A, alt: "", loading: "lazy", decoding: "async" }),
    });
}
function P(t) {
    let { variant: n } = t,
        e = "mode_picker" === n ? G.default.BtyRCT : "expressive_non_nitro" === n ? G.default.kWigdu : G.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: D.Lv,
        children: [
            (0, i.jsx)(x.D, { variant: "nitro-md", className: D.DD, children: L.intl.string(G.default.O9OeEg) }),
            (0, i.jsx)(m.E, { variant: "body-md/normal", color: "text-subtle", children: L.intl.string(e) }),
        ],
    });
}
function Q(t) {
    let { mode: n, saving: e, saveError: a, onChange: s, onSettings: r } = t,
        o = (0, u.bG)([N.Ay], () =>
            (0, A.dI)(N.Ay.getKeybindForAction(V.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, A.OH)("alt+c"), !0),
        ),
        d = l.useMemo(
            () => [
                { value: "off", title: L.intl.string(G.default["uO/2T5"]), icon: g.DenyIcon },
                {
                    value: "manual",
                    title: L.intl.string(G.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? L.intl.formatToPlainString(G.default.Q5BSVD, { keybind: o })
                            : L.intl.string(G.default.VfTZ7q),
                    icon: f.ClipsIcon,
                },
                {
                    value: "auto",
                    title: L.intl.string(G.default.uEs0uv),
                    description: L.intl.string(G.default.s1pHZy),
                    icon: h.ClipsAutoIcon,
                    accent: "nitro",
                },
            ],
            [o],
        );
    return (0, i.jsxs)("div", {
        className: D.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: D.f6,
                children: [
                    (0, i.jsx)(m.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: L.intl.string(G.default.q8YDuR),
                    }),
                    (0, i.jsxs)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: [
                            L.intl.string(G.default.utyPWV),
                            " ",
                            (0, i.jsx)(v.Q, {
                                textVariant: "body-sm/normal",
                                text: L.intl.string(G.default["7kGdh5"]),
                                onClick: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(w.u, {
                "aria-label": L.intl.string(G.default.q8YDuR),
                value: n,
                onChange: s,
                options: d,
                disabled: e,
            }),
            a
                ? (0, i.jsx)(m.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: L.intl.string(G.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(m.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    L.intl.string(G.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(v.Q, {
                        textVariant: "body-xs/normal",
                        text: L.intl.string(L.t.hvVgAZ),
                        onClick: () => window.open(E.A.getArticleURL(V.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function R() {
    return (0, i.jsxs)("div", {
        className: D.kR,
        children: [
            (0, i.jsxs)("div", {
                className: D.Nr,
                children: [
                    (0, i.jsx)(h.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(m.E, { variant: "body-md/medium", children: L.intl.string(G.default.pGoNG5) }),
                    (0, i.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: L.intl.string(G.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: D.Nr,
                children: [
                    (0, i.jsx)(j.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(m.E, { variant: "body-md/medium", children: L.intl.string(G.default.L0RzNn) }),
                    (0, i.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: L.intl.string(G.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function W(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: a, onSettings: s } = t,
        r = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r || o
                ? null
                : (0, i.jsx)(m.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: D.N4,
                      children: L.intl.format(G.default.oguG2t, {
                          settingsHook: (t, n) =>
                              (0, i.jsx)(v.Q, { textVariant: "body-xs/normal", text: t, onClick: s }, n),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: D.o1,
                children: [
                    (0, i.jsx)(p.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: L.intl.string(r ? G.default.liWTC0 : o ? G.default.cXDBee : G.default.n9r54F),
                        onClick: r ? l : a,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(m.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: L.intl.string(G.default.pMWdGA),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function q(t) {
    let { variant: n, source: e, preselectedMode: l, ...d } = t;
    return (0, i.jsx)(a.d, {
        ...d,
        size: "lg",
        "aria-label": L.intl.string(G.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: D.Gt,
            children: [
                (0, i.jsx)("div", {
                    className: D.W2,
                    children: (0, i.jsx)(z, { variant: n, source: e, preselectedMode: l, onClose: d.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: D.VN,
                    children: (0, i.jsx)(s.m, {
                        text: L.intl.string(L.t.cpT0Cq),
                        children: (0, i.jsx)(r.K, {
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
