e.d(n, { default: () => Y });
var i = e(477900),
    l = e(582128),
    a = e(224640),
    s = e(866665),
    r = e(408278),
    o = e(972213),
    d = e(503698),
    c = e.n(d),
    u = e(855986),
    x = e(939249),
    m = e(782134),
    g = e(534514),
    h = e(834730),
    f = e(428678),
    v = e(176781),
    j = e(650684),
    p = e(123292),
    b = e(687966),
    y = e(821609),
    C = e(87719),
    N = e(780964),
    A = e(766075),
    E = e(532624),
    k = e(975571),
    I = e(350535),
    _ = e(818349),
    S = e(419490),
    w = e(572164),
    T = e(489496),
    V = e(439408),
    z = e(14868),
    D = e(271597);
e(696016);
var G = e(652215),
    L = e(683825),
    M = e(792996),
    O = e(698292),
    P = e(148289);
function q(t) {
    let { variant: n, preselectedMode: e, onClose: a } = t,
        [s] = l.useState(() => (0, _.r)((0, w.T)(), S.Ay.getEnableAutoclipping())),
        [r, o] = l.useState(() => e ?? s),
        [d, u] = l.useState(!1),
        [x, m] = l.useState(!1),
        g = "mode_picker" === n,
        h = "expressive_non_nitro" === n;
    async function f() {
        (await a(), (0, A.openUserSettings)(N.X.CLIPS_PANEL));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Q, {}),
            (0, i.jsxs)("div", {
                className: c()(O.Qs, { [O.SI]: g }),
                children: [
                    (0, i.jsx)(R, { variant: n }),
                    g
                        ? (0, i.jsx)(W, { mode: r, saving: d, saveError: x, onChange: o, onSettings: f })
                        : (0, i.jsx)(F, {}),
                    (0, i.jsx)(X, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (r === s) return void (await a());
                                (u(!0), m(!1));
                                try {
                                    let t = (0, _.K)(r);
                                    (null != t.enableAutoclipping &&
                                        t.enableAutoclipping !== S.Ay.getEnableAutoclipping() &&
                                        (0, T.uL)(t.enableAutoclipping, !1),
                                        t.clipsEnabled !== (0, w.T)() &&
                                            (await (0, T.yO)({ clipsEnabled: t.clipsEnabled })));
                                } catch {
                                    (m(!0), u(!1));
                                    return;
                                }
                                await a();
                            }
                        },
                        onCheckItOut: async function () {
                            (await a(), h ? (0, C.x)() : (0, D.p)());
                        },
                        onSettings: f,
                    }),
                ],
            }),
        ],
    });
}
function Q() {
    return (0, i.jsxs)(x.D, {
        className: O.Qw,
        "aria-label": M.intl.string(L.default["2axqmn"]),
        onClick: () => (0, z.z)("ClipsEAAnnouncementModal"),
        children: [
            (0, i.jsx)("img", { className: O.d3, src: P.A, alt: "", loading: "lazy", decoding: "async" }),
            (0, i.jsx)("div", {
                className: O.Ow,
                "aria-hidden": !0,
                children: (0, i.jsx)(m.PlayIcon, { size: "custom", width: 32, height: 32, color: "currentColor" }),
            }),
        ],
    });
}
function R(t) {
    let { variant: n } = t,
        e = "mode_picker" === n ? L.default.BtyRCT : "expressive_non_nitro" === n ? L.default.kWigdu : L.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: O.Lv,
        children: [
            (0, i.jsx)(g.D, { variant: "nitro-md", className: O.DD, children: M.intl.string(L.default.O9OeEg) }),
            (0, i.jsx)(h.E, { variant: "body-md/normal", color: "text-subtle", children: M.intl.string(e) }),
        ],
    });
}
function W(t) {
    let { mode: n, saving: e, saveError: a, onChange: s, onSettings: r } = t,
        o = (0, u.bG)([E.Ay], () =>
            (0, I.dI)(E.Ay.getKeybindForAction(G.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, I.OH)("alt+c"), !0),
        ),
        d = l.useMemo(
            () => [
                { value: "off", title: M.intl.string(L.default["uO/2T5"]), icon: f.DenyIcon },
                {
                    value: "manual",
                    title: M.intl.string(L.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? M.intl.formatToPlainString(L.default.Q5BSVD, { keybind: o })
                            : M.intl.string(L.default.VfTZ7q),
                    icon: v.ClipsIcon,
                },
                {
                    value: "auto",
                    title: M.intl.string(L.default.uEs0uv),
                    description: M.intl.string(L.default.s1pHZy),
                    icon: j.ClipsAutoIcon,
                    accent: "nitro",
                },
            ],
            [o],
        );
    return (0, i.jsxs)("div", {
        className: O.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: O.f6,
                children: [
                    (0, i.jsx)(h.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: M.intl.string(L.default.q8YDuR),
                    }),
                    (0, i.jsxs)(h.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: [
                            M.intl.string(L.default.utyPWV),
                            " ",
                            (0, i.jsx)(p.Q, {
                                textVariant: "body-sm/normal",
                                text: M.intl.string(L.default["7kGdh5"]),
                                onClick: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(V.u, {
                "aria-label": M.intl.string(L.default.q8YDuR),
                value: n,
                onChange: s,
                options: d,
                disabled: e,
            }),
            a
                ? (0, i.jsx)(h.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: M.intl.string(L.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(h.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    M.intl.string(L.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(p.Q, {
                        textVariant: "body-xs/normal",
                        text: M.intl.string(M.t.hvVgAZ),
                        onClick: () => window.open(k.A.getArticleURL(G.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function F() {
    return (0, i.jsxs)("div", {
        className: O.kR,
        children: [
            (0, i.jsxs)("div", {
                className: O.Nr,
                children: [
                    (0, i.jsx)(j.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(h.E, { variant: "body-md/medium", children: M.intl.string(L.default.pGoNG5) }),
                    (0, i.jsx)(h.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: M.intl.string(L.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O.Nr,
                children: [
                    (0, i.jsx)(b.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(h.E, { variant: "body-md/medium", children: M.intl.string(L.default.L0RzNn) }),
                    (0, i.jsx)(h.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: M.intl.string(L.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function X(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: a, onSettings: s } = t,
        r = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r || o
                ? null
                : (0, i.jsx)(h.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: O.N4,
                      children: M.intl.format(L.default.oguG2t, {
                          settingsHook: (t, n) =>
                              (0, i.jsx)(p.Q, { textVariant: "body-xs/normal", text: t, onClick: s }, n),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: O.o1,
                children: [
                    (0, i.jsx)(y.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: M.intl.string(r ? L.default.liWTC0 : o ? L.default.cXDBee : L.default.n9r54F),
                        onClick: r ? l : a,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(h.E, {
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
function Y(t) {
    let { variant: n, source: e, preselectedMode: l, ...d } = t;
    return (0, i.jsx)(a.d, {
        ...d,
        size: "lg",
        "aria-label": M.intl.string(L.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: O.Gt,
            children: [
                (0, i.jsx)("div", {
                    className: O.W2,
                    children: (0, i.jsx)(q, { variant: n, source: e, preselectedMode: l, onClose: d.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: O.VN,
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
