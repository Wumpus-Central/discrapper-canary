e.d(n, { default: () => Z });
var i = e(477900),
    l = e(582128),
    a = e(224640),
    s = e(516521),
    r = e(866665),
    o = e(408278),
    d = e(972213),
    c = e(503698),
    u = e.n(c),
    x = e(855986),
    m = e(939249),
    g = e(782134),
    h = e(534514),
    f = e(834730),
    v = e(428678),
    j = e(176781),
    p = e(650684),
    b = e(123292),
    C = e(687966),
    y = e(821609),
    N = e(87719),
    A = e(780964),
    E = e(766075),
    k = e(532624),
    I = e(975571),
    _ = e(350535),
    w = e(818349),
    S = e(419490),
    G = e(572164),
    T = e(489496),
    V = e(439408),
    z = e(14868),
    D = e(271597);
e(696016);
var L = e(652215),
    M = e(683825),
    O = e(792996),
    P = e(698292),
    q = e(148289);
function Q(t) {
    let { variant: n, preselectedMode: e, onClose: a } = t,
        [s] = l.useState(() => (0, w.r)((0, G.T)(), S.Ay.getEnableAutoclipping())),
        [r, o] = l.useState(() => e ?? s),
        [d, c] = l.useState(!1),
        [x, m] = l.useState(!1),
        g = "mode_picker" === n,
        h = "expressive_non_nitro" === n;
    async function f() {
        (await a(), (0, E.openUserSettings)(A.X.CLIPS_PANEL));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R, {}),
            (0, i.jsxs)("div", {
                className: u()(P.Qs, { [P.SI]: g }),
                children: [
                    (0, i.jsx)(W, { variant: n }),
                    g
                        ? (0, i.jsx)(F, { mode: r, saving: d, saveError: x, onChange: o, onSettings: f })
                        : (0, i.jsx)(X, {}),
                    (0, i.jsx)(Y, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (r === s) return void (await a());
                                (c(!0), m(!1));
                                try {
                                    let t = (0, w.K)(r);
                                    (null != t.enableAutoclipping &&
                                        t.enableAutoclipping !== S.Ay.getEnableAutoclipping() &&
                                        (0, T.uL)(t.enableAutoclipping, !1),
                                        t.clipsEnabled !== (0, G.T)() &&
                                            (await (0, T.yO)({ clipsEnabled: t.clipsEnabled })));
                                } catch {
                                    (m(!0), c(!1));
                                    return;
                                }
                                await a();
                            }
                        },
                        onCheckItOut: async function () {
                            (await a(), h ? (0, N.x)() : (0, D.p)());
                        },
                        onSettings: f,
                    }),
                ],
            }),
        ],
    });
}
function R() {
    return (0, i.jsxs)(m.D, {
        className: P.Qw,
        "aria-label": O.intl.string(M.default["2axqmn"]),
        onClick: () => (0, z.z)("ClipsEAAnnouncementModal"),
        children: [
            (0, i.jsx)("img", { className: P.d3, src: q.A, alt: "", loading: "lazy", decoding: "async" }),
            (0, i.jsx)("div", {
                className: P.Ow,
                "aria-hidden": !0,
                children: (0, i.jsx)(g.PlayIcon, { size: "custom", width: 32, height: 32, color: "currentColor" }),
            }),
        ],
    });
}
function W(t) {
    let { variant: n } = t,
        e = "mode_picker" === n ? M.default.BtyRCT : "expressive_non_nitro" === n ? M.default.kWigdu : M.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: P.Lv,
        children: [
            (0, i.jsx)(h.D, { variant: "nitro-md", className: P.DD, children: O.intl.string(M.default.O9OeEg) }),
            (0, i.jsx)(f.E, { variant: "body-md/normal", color: "text-subtle", children: O.intl.string(e) }),
        ],
    });
}
function F(t) {
    let { mode: n, saving: e, saveError: a, onChange: s, onSettings: r } = t,
        o = (0, x.bG)([k.Ay], () =>
            (0, _.dI)(k.Ay.getKeybindForAction(L.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, _.OH)("alt+c"), !0),
        ),
        d = l.useMemo(
            () => [
                { value: "off", title: O.intl.string(M.default["uO/2T5"]), icon: v.DenyIcon },
                {
                    value: "manual",
                    title: O.intl.string(M.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? O.intl.formatToPlainString(M.default.Q5BSVD, { keybind: o })
                            : O.intl.string(M.default.VfTZ7q),
                    icon: j.ClipsIcon,
                },
                {
                    value: "auto",
                    title: O.intl.string(M.default.uEs0uv),
                    description: O.intl.string(M.default.s1pHZy),
                    icon: p.ClipsAutoIcon,
                    accent: "nitro",
                },
            ],
            [o],
        );
    return (0, i.jsxs)("div", {
        className: P.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: P.f6,
                children: [
                    (0, i.jsx)(f.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: O.intl.string(M.default.q8YDuR),
                    }),
                    (0, i.jsxs)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: [
                            O.intl.string(M.default.utyPWV),
                            " ",
                            (0, i.jsx)(b.Q, {
                                textVariant: "body-sm/normal",
                                text: O.intl.string(M.default["7kGdh5"]),
                                onClick: r,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(V.u, {
                "aria-label": O.intl.string(M.default.q8YDuR),
                value: n,
                onChange: s,
                options: d,
                disabled: e,
            }),
            a
                ? (0, i.jsx)(f.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: O.intl.string(M.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(f.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    O.intl.string(M.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(b.Q, {
                        textVariant: "body-xs/normal",
                        text: O.intl.string(O.t.hvVgAZ),
                        onClick: () => window.open(I.A.getArticleURL(L.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function X() {
    return (0, i.jsxs)("div", {
        className: P.kR,
        children: [
            (0, i.jsxs)("div", {
                className: P.Nr,
                children: [
                    (0, i.jsx)(p.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(f.E, { variant: "body-md/medium", children: O.intl.string(M.default.pGoNG5) }),
                    (0, i.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: O.intl.string(M.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: P.Nr,
                children: [
                    (0, i.jsx)(C.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(f.E, { variant: "body-md/medium", children: O.intl.string(M.default.L0RzNn) }),
                    (0, i.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: O.intl.string(M.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function Y(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: a, onSettings: s } = t,
        r = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r || o
                ? null
                : (0, i.jsx)(f.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: P.N4,
                      children: O.intl.format(M.default.oguG2t, {
                          settingsHook: (t, n) =>
                              (0, i.jsx)(b.Q, { textVariant: "body-xs/normal", text: t, onClick: s }, n),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: P.o1,
                children: [
                    (0, i.jsx)(y.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: O.intl.string(r ? M.default.liWTC0 : o ? M.default.cXDBee : M.default.n9r54F),
                        onClick: r ? l : a,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: O.intl.string(M.default.pMWdGA),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function Z(t) {
    let { variant: n, source: e, preselectedMode: l, ...c } = t;
    return (0, i.jsx)(a.d, {
        ...c,
        size: "lg",
        "aria-label": O.intl.string(M.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: P.Gt,
            children: [
                (0, i.jsx)(s.Ch, {
                    className: P.W2,
                    overflow: "auto",
                    scrollbarGutter: !1,
                    fade: !0,
                    children: (0, i.jsx)(Q, { variant: n, source: e, preselectedMode: l, onClose: c.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: P.VN,
                    children: (0, i.jsx)(r.m, {
                        text: O.intl.string(O.t.cpT0Cq),
                        children: (0, i.jsx)(o.K, {
                            icon: d.XLargeIcon,
                            variant: "overlay-secondary",
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                            onClick: c.onClose,
                        }),
                    }),
                }),
            ],
        }),
    });
}
