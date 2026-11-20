e.d(n, { default: () => B });
var i = e(477900),
    l = e(582128),
    r = e(224640),
    a = e(516521),
    s = e(866665),
    o = e(408278),
    c = e(972213),
    d = e(503698),
    u = e.n(d),
    x = e(855986),
    m = e(939249),
    f = e(782134),
    h = e(534514),
    g = e(834730),
    v = e(428678),
    j = e(176781),
    C = e(650684),
    N = e(123292),
    b = e(687966),
    p = e(821609),
    y = e(793574),
    A = e(87719),
    E = e(780964),
    _ = e(766075),
    k = e(532624),
    I = e(975571),
    S = e(350535),
    L = e(805573),
    w = e(818349),
    T = e(419490),
    M = e(572164),
    P = e(439408),
    O = e(14868),
    U = e(271597),
    G = e(464132);
e(696016);
var V = e(652215),
    z = e(682901),
    D = e(683825),
    R = e(792996),
    q = e(698292),
    H = e(148289);
function Q(t) {
    let { variant: n, source: e, preselectedMode: r, onClose: a } = t,
        [s] = l.useState(() => (0, w.r)((0, M.T)(), T.Ay.getEnableAutoclipping())),
        [o, c] = l.useState(() => r ?? s),
        [d, x] = l.useState(!1),
        [m, f] = l.useState(!1),
        h = "mode_picker" === n,
        g = "expressive_non_nitro" === n,
        { markActedOn: v, logUpsellAction: j } = (function (t, n) {
            let e = "expressive_non_nitro" === t,
                { trackViewed: i, trackInteracted: r } = (0, L.r)(
                    z.e.AUTOCLIPS_EA_LAUNCH_ANNOUNCEMENT_UPSELL,
                    y.A.CLIPS_EA_LAUNCH_ANNOUNCEMENT,
                ),
                a = l.useRef(!1);
            l.useEffect(() => {
                if (e)
                    return (
                        i(n),
                        () => {
                            a.current || r("close");
                        }
                    );
            }, [e, n, i, r]);
            let s = l.useCallback(() => {
                    a.current = !0;
                }, []),
                o = l.useCallback(
                    function (t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        (s(), e && r(t, n));
                    },
                    [e, s, r],
                );
            return { markActedOn: s, logUpsellAction: o };
        })(n, e);
    async function C() {
        (v(), await a(), (0, _.openUserSettings)(E.X.CLIPS_PANEL));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W, {
                onPlay: function () {
                    j("watch_video");
                },
            }),
            (0, i.jsxs)("div", {
                className: u()(q.Qs, { [q.SI]: h }),
                children: [
                    (0, i.jsx)(F, { variant: n }),
                    h
                        ? (0, i.jsx)(X, { mode: o, saving: d, saveError: m, onChange: c, onSettings: C })
                        : (0, i.jsx)(Y, {}),
                    (0, i.jsx)(Z, {
                        variant: n,
                        saving: d,
                        onConfirm: async function () {
                            if (!d) {
                                if (o === s) {
                                    (v(), await a());
                                    return;
                                }
                                (x(!0), f(!1));
                                try {
                                    await (0, G.r)(o, y.A.CLIPS_EA_LAUNCH_ANNOUNCEMENT);
                                } catch {
                                    (f(!0), x(!1));
                                    return;
                                }
                                (v(), await a());
                            }
                        },
                        onCheckItOut: async function () {
                            (j("nitro_home", "nitro_home"), await a(), g ? (0, A.x)() : (0, U.p)());
                        },
                        onSettings: C,
                    }),
                ],
            }),
        ],
    });
}
function W(t) {
    let { onPlay: n } = t;
    return (0, i.jsxs)(m.D, {
        className: q.Qw,
        "aria-label": R.intl.string(D.default["2axqmn"]),
        onClick: () => {
            (n(), (0, O.z)("ClipsEAAnnouncementModal"));
        },
        children: [
            (0, i.jsx)("img", { className: q.d3, src: H.A, alt: "", loading: "lazy", decoding: "async" }),
            (0, i.jsx)("div", {
                className: q.Ow,
                "aria-hidden": !0,
                children: (0, i.jsx)(f.PlayIcon, { size: "custom", width: 32, height: 32, color: "currentColor" }),
            }),
        ],
    });
}
function F(t) {
    let { variant: n } = t,
        e = "mode_picker" === n ? D.default.BtyRCT : "expressive_non_nitro" === n ? D.default.kWigdu : D.default.M8rOjI;
    return (0, i.jsxs)("div", {
        className: q.Lv,
        children: [
            (0, i.jsx)(h.D, { variant: "nitro-md", className: q.DD, children: R.intl.string(D.default.O9OeEg) }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-subtle", children: R.intl.string(e) }),
        ],
    });
}
function X(t) {
    let { mode: n, saving: e, saveError: r, onChange: a, onSettings: s } = t,
        o = (0, x.bG)([k.Ay], () =>
            (0, S.dI)(k.Ay.getKeybindForAction(V.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, S.OH)("alt+c"), !0),
        ),
        c = l.useMemo(
            () => [
                { value: "off", title: R.intl.string(D.default["uO/2T5"]), icon: v.DenyIcon },
                {
                    value: "manual",
                    title: R.intl.string(D.default["2Uh8Zr"]),
                    description:
                        o.length > 0
                            ? R.intl.formatToPlainString(D.default.Q5BSVD, { keybind: o })
                            : R.intl.string(D.default.VfTZ7q),
                    icon: j.ClipsIcon,
                },
                {
                    value: "auto",
                    title: R.intl.string(D.default.uEs0uv),
                    description: R.intl.string(D.default.s1pHZy),
                    icon: C.ClipsAutoIcon,
                    accent: "nitro",
                },
            ],
            [o],
        );
    return (0, i.jsxs)("div", {
        className: q.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: q.f6,
                children: [
                    (0, i.jsx)(g.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: R.intl.string(D.default.q8YDuR),
                    }),
                    (0, i.jsxs)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: [
                            R.intl.string(D.default.utyPWV),
                            " ",
                            (0, i.jsx)(N.Q, {
                                textVariant: "body-sm/normal",
                                text: R.intl.string(D.default["7kGdh5"]),
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(P.u, {
                "aria-label": R.intl.string(D.default.q8YDuR),
                value: n,
                onChange: a,
                options: c,
                disabled: e,
            }),
            r
                ? (0, i.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: R.intl.string(D.default.YXeYlM),
                  })
                : null,
            (0, i.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                children: [
                    R.intl.string(D.default["03CMAJ"]),
                    " ",
                    (0, i.jsx)(N.Q, {
                        textVariant: "body-xs/normal",
                        text: R.intl.string(R.t.hvVgAZ),
                        onClick: () => window.open(I.A.getArticleURL(V.MVz.CLIPS), "_blank", "noopener,noreferrer"),
                    }),
                ],
            }),
        ],
    });
}
function Y() {
    return (0, i.jsxs)("div", {
        className: q.kR,
        children: [
            (0, i.jsxs)("div", {
                className: q.Nr,
                children: [
                    (0, i.jsx)(C.ClipsAutoIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: R.intl.string(D.default.pGoNG5) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: R.intl.string(D.default["4Ta12C"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: q.Nr,
                children: [
                    (0, i.jsx)(b.GameControllerIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, i.jsx)(g.E, { variant: "body-md/medium", children: R.intl.string(D.default.L0RzNn) }),
                    (0, i.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: R.intl.string(D.default.vngMNi),
                    }),
                ],
            }),
        ],
    });
}
function Z(t) {
    let { variant: n, saving: e, onConfirm: l, onCheckItOut: r, onSettings: a } = t,
        s = "mode_picker" === n,
        o = "expressive_non_nitro" === n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s || o
                ? null
                : (0, i.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: q.N4,
                      children: R.intl.format(D.default.oguG2t, {
                          settingsHook: (t, n) =>
                              (0, i.jsx)(N.Q, { textVariant: "body-xs/normal", text: t, onClick: a }, n),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: q.o1,
                children: [
                    (0, i.jsx)(p.$, {
                        fullWidth: !0,
                        variant: o ? "expressive" : "primary",
                        text: R.intl.string(s ? D.default.liWTC0 : o ? D.default.cXDBee : D.default.n9r54F),
                        onClick: s ? l : r,
                        loading: e,
                    }),
                    o
                        ? (0, i.jsx)(g.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: R.intl.string(D.default.pMWdGA),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function B(t) {
    let { variant: n, source: e, preselectedMode: l, ...d } = t;
    return (0, i.jsx)(r.d, {
        ...d,
        size: "lg",
        "aria-label": R.intl.string(D.default.Ggh4C0),
        children: (0, i.jsxs)("div", {
            className: q.Gt,
            children: [
                (0, i.jsx)(a.Ch, {
                    className: q.W2,
                    overflow: "auto",
                    scrollbarGutter: !1,
                    fade: !0,
                    children: (0, i.jsx)(Q, { variant: n, source: e, preselectedMode: l, onClose: d.onClose }),
                }),
                (0, i.jsx)("div", {
                    className: q.VN,
                    children: (0, i.jsx)(s.m, {
                        text: R.intl.string(R.t.cpT0Cq),
                        children: (0, i.jsx)(o.K, {
                            icon: c.XLargeIcon,
                            variant: "overlay-secondary",
                            "aria-label": R.intl.string(R.t.cpT0Cq),
                            onClick: d.onClose,
                        }),
                    }),
                }),
            ],
        }),
    });
}
