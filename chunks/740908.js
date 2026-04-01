t.d(s, { default: () => k });
var n = t(627968),
    l = t(64700),
    a = t(503698),
    r = t.n(a),
    i = t(989349),
    c = t.n(i),
    o = t(311907),
    d = t(287809),
    u = t(927813),
    m = t(251358),
    x = t(133636),
    v = t(257044),
    f = t(192480),
    g = t(640884),
    h = t(178090),
    b = t(683926),
    A = t(547678),
    j = t(346640),
    _ = t(429311),
    C = t(985018),
    p = t(462285),
    w = t(696545),
    N = t(173607);
function M(e) {
    let { closeModal: s, setScreen: t } = e,
        [a, r] = (0, l.useState)(!1);
    return (0, n.jsxs)("div", {
        className: p.H_,
        children: [
            (0, n.jsx)(b.A, { visible: a, text: C.intl.string(_.default["ZKTI/z"]) }),
            (0, n.jsx)(v.A, {
                contentClassName: p.gb,
                onClick: () => {
                    t(j.Q0.PATCH_NOTES), s();
                },
                color: "white",
                "aria-label": C.intl.string(_.default["ZKTI/z"]),
                onMouseEnter: () => r(!0),
                onMouseLeave: () => r(!1),
                children: (0, n.jsx)("img", { src: N.A, alt: "" }),
            }),
        ],
    });
}
function T(e) {
    let { closeModal: s, setScreen: t, ignoreCooldown: a, tooltipText: i } = e,
        d = (0, o.bG)([x.A], () => x.A.isUpdatingUserData()),
        f = (0, o.bG)([x.A], () => null != x.A.getCombatClass() && null != x.A.getCraftingClass()),
        g = (0, o.bG)([x.A], () => x.A.getClassSelectedAt()),
        h = (0, l.useRef)(null),
        [A, N] = (0, l.useState)(new Date().getTime()),
        [M, T] = (0, l.useState)(!1),
        k = null != g ? A - g.getTime() : j.AW,
        E = j.AW - k,
        S = !a && E > 0,
        L = S ? c().utc(E).format("HH:mm:ss") : null,
        D = async () => {
            d || (await (0, m.nb)({}), t(j.Q0.COMBAT_CLASS_SELECTION), s());
        };
    return (
        (0, l.useEffect)(
            () => (
                (h.current = setInterval(() => N(new Date().getTime()), u.A.Millis.SECOND)),
                () => clearInterval(h.current)
            ),
            [],
        ),
        (0, l.useEffect)(() => {
            E <= 0 && clearInterval(h.current);
        }, [E]),
        (0, n.jsxs)("div", {
            className: p.H_,
            children: [
                (0, n.jsx)(b.A, {
                    visible: M,
                    text: null != L ? C.intl.format(_.default.Qw7Hn5, { formattedCooldown: L }) : i,
                }),
                (0, n.jsx)(v.A, {
                    contentClassName: p.gb,
                    onClick: D,
                    color: "white",
                    "aria-label": C.intl.string(_.default["sTE/Mu"]),
                    disabled: !f || S,
                    onMouseEnter: () => T(!0),
                    onMouseLeave: () => T(!1),
                    children: (0, n.jsx)("img", { className: r()({ [p.Zm]: d }), src: w.A, alt: "" }),
                }),
            ],
        })
    );
}
function k(e) {
    let { setScreen: s, ...t } = e,
        a = (0, o.bG)([x.A], () => x.A.soundVolume),
        r = (0, o.bG)([x.A], () => x.A.musicVolume),
        i = (0, o.bG)([d.default], () => d.default.getCurrentUser()?.isStaff() ?? !1),
        c = (0, l.useCallback)(
            (e) => {
                (0, m.zv)({ soundVolume: e / 100, musicVolume: r });
            },
            [r],
        ),
        u = (0, l.useCallback)(
            (e) => {
                (0, m.zv)({ soundVolume: a, musicVolume: e / 100 });
            },
            [a],
        );
    return (0, n.jsxs)(f.A, {
        ...t,
        children: [
            (0, n.jsx)(h.A, {
                variant: "heading-xxl/normal",
                className: p.DD,
                children: C.intl.string(_.default.xX7sUM),
            }),
            (0, n.jsxs)("div", {
                className: p.W0,
                children: [
                    (0, n.jsxs)("div", {
                        className: p.$K,
                        children: [
                            (0, n.jsxs)("div", {
                                className: p.Ry,
                                children: [
                                    (0, n.jsx)(h.A, {
                                        variant: "text-lg/normal",
                                        children: C.intl.string(_.default.U8kWWQ),
                                    }),
                                    (0, n.jsxs)(h.A, {
                                        variant: "text-md/normal",
                                        children: [Math.round(100 * r), "%"],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(g.A, { percentage: 100 * r, onClick: u }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: p.$K,
                        children: [
                            (0, n.jsxs)("div", {
                                className: p.Ry,
                                children: [
                                    (0, n.jsx)(h.A, {
                                        variant: "text-lg/normal",
                                        children: C.intl.string(_.default["3DqH/j"]),
                                    }),
                                    (0, n.jsxs)(h.A, {
                                        variant: "text-md/normal",
                                        children: [Math.round(100 * a), "%"],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(g.A, { percentage: 100 * a, onClick: c }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: p.SF,
                        children: [
                            (0, n.jsx)(h.A, {
                                variant: "text-lg/normal",
                                children: C.intl.string(_.default["ibkUQ/"]),
                            }),
                            (0, n.jsx)(A.A, {}),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: p.aO,
                        children: [
                            (0, n.jsx)(h.A, { variant: "text-md/normal", children: C.intl.string(_.default.jFYQgq) }),
                            (0, n.jsxs)("div", {
                                className: p.qr,
                                children: [
                                    (0, n.jsx)(M, { closeModal: t.onClose, setScreen: s }),
                                    (0, n.jsx)(T, {
                                        closeModal: t.onClose,
                                        setScreen: s,
                                        tooltipText: C.intl.string(_.default["sTE/Mu"]),
                                    }),
                                    i
                                        ? (0, n.jsx)(T, {
                                              closeModal: t.onClose,
                                              setScreen: s,
                                              ignoreCooldown: !0,
                                              tooltipText: "Change class (staff)",
                                          })
                                        : null,
                                    (0, n.jsx)(h.A, {
                                        variant: "text-sm/normal",
                                        className: p.PJ,
                                        children: C.intl.string(_.default.oVwO4O),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
