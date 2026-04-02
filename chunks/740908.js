"use strict";
n.d(t, { default: () => O, h: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(311907),
    c = n(287809),
    d = n(927813),
    _ = n(251358),
    f = n(133636),
    p = n(257044),
    h = n(192480),
    m = n(640884),
    E = n(178090),
    g = n(683926),
    A = n(547678),
    I = n(346640),
    T = n(350601),
    S = n(985018),
    y = n(934840),
    v = n(696545),
    N = n(173607);
function C(e) {
    let { closeModal: t, setScreen: n } = e,
        [s, a] = (0, i.useState)(!1),
        o = () => {
            n(I.Q0.PATCH_NOTES), t();
        };
    return (0, r.jsxs)("div", {
        className: y.H_,
        children: [
            (0, r.jsx)(g.A, { visible: s, text: S.intl.string(T.default["ZKTI/z"]) }),
            (0, r.jsx)(p.A, {
                contentClassName: y.gb,
                onClick: o,
                color: "white",
                "aria-label": S.intl.string(T.default["ZKTI/z"]),
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1),
                children: (0, r.jsx)("img", { src: N.A, alt: "" }),
            }),
        ],
    });
}
function R(e) {
    let { closeModal: t, setScreen: n, ignoreCooldown: s, tooltipText: o, iconButtonClassName: c } = e,
        h = (0, u.bG)([f.A], () => f.A.isUpdatingUserData()),
        m = (0, u.bG)([f.A], () => null != f.A.getCombatClass() && null != f.A.getCraftingClass()),
        E = (0, u.bG)([f.A], () => f.A.getClassSelectedAt()),
        A = (0, i.useRef)(null),
        [N, C] = (0, i.useState)(new Date().getTime()),
        [R, O] = (0, i.useState)(!1),
        b = null != E ? N - E.getTime() : I.AW,
        D = I.AW - b,
        L = !s && D > 0,
        w = L ? l().utc(D).format("HH:mm:ss") : null,
        M = async () => {
            h || (await (0, _.nb)({}), n(I.Q0.COMBAT_CLASS_SELECTION), t?.());
        };
    return (
        (0, i.useEffect)(
            () => (
                (A.current = setInterval(() => C(new Date().getTime()), d.A.Millis.SECOND)),
                () => clearInterval(A.current)
            ),
            [],
        ),
        (0, i.useEffect)(() => {
            D <= 0 && clearInterval(A.current);
        }, [D]),
        (0, r.jsxs)("div", {
            className: y.H_,
            children: [
                (0, r.jsx)(g.A, {
                    visible: R,
                    text: null != w ? S.intl.format(T.default.Qw7Hn5, { formattedCooldown: w }) : o,
                }),
                (0, r.jsx)(p.A, {
                    contentClassName: c,
                    onClick: M,
                    color: "white",
                    "aria-label": S.intl.string(T.default["sTE/Mu"]),
                    disabled: !m || L,
                    onMouseEnter: () => O(!0),
                    onMouseLeave: () => O(!1),
                    children: (0, r.jsx)("img", { className: a()({ [y.Zm]: h }), src: v.A, alt: "" }),
                }),
            ],
        })
    );
}
function O(e) {
    let { setScreen: t, ...n } = e,
        s = (0, u.bG)([f.A], () => f.A.soundVolume),
        a = (0, u.bG)([f.A], () => f.A.musicVolume),
        o = (0, u.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        l = (0, i.useCallback)(
            (e) => {
                (0, _.zv)({ soundVolume: e / 100, musicVolume: a });
            },
            [a],
        ),
        d = (0, i.useCallback)(
            (e) => {
                (0, _.zv)({ soundVolume: s, musicVolume: e / 100 });
            },
            [s],
        );
    return (0, r.jsxs)(h.A, {
        ...n,
        children: [
            (0, r.jsx)(E.A, {
                variant: "heading-xxl/normal",
                className: y.DD,
                children: S.intl.string(T.default.xX7sUM),
            }),
            (0, r.jsxs)("div", {
                className: y.W0,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.$K,
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.Ry,
                                children: [
                                    (0, r.jsx)(E.A, {
                                        variant: "text-lg/normal",
                                        children: S.intl.string(T.default.U8kWWQ),
                                    }),
                                    (0, r.jsxs)(E.A, {
                                        variant: "text-md/normal",
                                        children: [Math.round(100 * a), "%"],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(m.A, { percentage: 100 * a, onClick: d }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.$K,
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.Ry,
                                children: [
                                    (0, r.jsx)(E.A, {
                                        variant: "text-lg/normal",
                                        children: S.intl.string(T.default["3DqH/j"]),
                                    }),
                                    (0, r.jsxs)(E.A, {
                                        variant: "text-md/normal",
                                        children: [Math.round(100 * s), "%"],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(m.A, { percentage: 100 * s, onClick: l }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.SF,
                        children: [
                            (0, r.jsx)(E.A, {
                                variant: "text-lg/normal",
                                children: S.intl.string(T.default["ibkUQ/"]),
                            }),
                            (0, r.jsx)(A.A, {}),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.aO,
                        children: [
                            (0, r.jsx)(E.A, { variant: "text-md/normal", children: S.intl.string(T.default.jFYQgq) }),
                            (0, r.jsxs)("div", {
                                className: y.qr,
                                children: [
                                    (0, r.jsx)(C, { closeModal: n.onClose, setScreen: t }),
                                    (0, r.jsx)(R, {
                                        closeModal: n.onClose,
                                        setScreen: t,
                                        tooltipText: S.intl.string(T.default["sTE/Mu"]),
                                        iconButtonClassName: y.gb,
                                    }),
                                    o
                                        ? (0, r.jsx)(R, {
                                              closeModal: n.onClose,
                                              setScreen: t,
                                              ignoreCooldown: !0,
                                              tooltipText: "Change class (staff)",
                                              iconButtonClassName: y.gb,
                                          })
                                        : null,
                                    (0, r.jsx)(E.A, {
                                        variant: "text-sm/normal",
                                        className: y.PJ,
                                        children: S.intl.string(T.default.oVwO4O),
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
