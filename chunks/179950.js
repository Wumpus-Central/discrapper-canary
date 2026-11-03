l.d(e, { default: () => v });
var a = l(477900),
    s = l(582128),
    i = l(224640),
    n = l(683071),
    r = l(430993),
    d = l(789645),
    c = l(534514),
    o = l(834730),
    u = l(331322),
    h = l(150934),
    f = l(696208),
    x = l(427262),
    g = l(10005),
    m = l(438732),
    j = l(834981),
    b = l(283900),
    k = l(83152),
    p = l(105292),
    C = l(815298);
let v = function (t) {
    let { currentUser: e, otherUser: l, transitionState: v, onClose: y } = t,
        S = s.useCallback(() => {
            y();
        }, [y]),
        w = (0, m.A)(),
        A = x.Ay.useName(l),
        B = (0, j.Ld)(l.id),
        [E, N] = s.useState(!1),
        [P, D] = s.useState(!1),
        [F, H] = s.useState(!1),
        L = s.useCallback(() => {
            (H(!0), N(!1), D(!1));
        }, []),
        { disconnectLinkRequest: W, isDisconnectLoading: _ } = (0, g.A)({ onSuccess: S, onError: L }),
        z = w ? p.intl.string(k.default["WH+Gba"]) : p.intl.format(k.default.F2lccv, { username: A }),
        G = w ? p.intl.format(k.default.Or6hgl, { username: A }) : p.intl.string(k.default.hOEHFn),
        K = w ? p.intl.format(k.default.PlrZal, { username: A }) : p.intl.format(k.default.XyRW4c, { username: A }),
        O = w ? p.intl.string(k.default.PGQBnk) : p.intl.string(k.default.eiABQz),
        Q = w ? p.intl.string(k.default["0ki7+P"]) : p.intl.string(k.default.sCbKs4);
    return (0, a.jsxs)(i.d, {
        transitionState: v,
        onClose: y,
        children: [
            F && (0, a.jsx)(n.w, { type: "critical", message: p.intl.string(k.default.krIDdy), role: "alert" }),
            (0, a.jsxs)(r.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: C.wx,
                        children: [
                            (0, a.jsx)(b.A, {
                                currentUser: e,
                                otherUser: l,
                                children: (0, a.jsx)(d.P, { size: "md", color: "currentColor", className: C.ut }),
                            }),
                            (0, a.jsxs)("div", {
                                className: C.R_,
                                children: [
                                    (0, a.jsx)(c.D, {
                                        variant: "body-lg/semibold",
                                        children: p.intl.format(k.default.o0JXuK, { username: A }),
                                    }),
                                    (0, a.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: z }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)(u.B, {
                        gap: 32,
                        children: [
                            (0, a.jsxs)(u.B, {
                                gap: 16,
                                children: [
                                    B && (0, a.jsx)(n.w, { type: "warning", message: G, role: "none" }),
                                    (0, a.jsx)(o.E, { variant: "body-sm/normal", color: "text-default", children: K }),
                                ],
                            }),
                            (0, a.jsxs)(u.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(h.S, {
                                        checked: E,
                                        onChange: (t) => {
                                            (N(t), H(!1));
                                        },
                                        label: O,
                                    }),
                                    (0, a.jsx)(h.S, {
                                        checked: P,
                                        onChange: (t) => {
                                            (D(t), H(!1));
                                        },
                                        label: Q,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(f.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: p.intl.string(p.t["3ilveh"]), onClick: y, disabled: _ },
                    {
                        variant: "critical-primary",
                        text: p.intl.string(k.default["c5L+sl"]),
                        onClick: function () {
                            (H(!1), W(l.id));
                        },
                        disabled: !E || !P || _,
                        loading: _,
                    },
                ],
            }),
        ],
    });
};
