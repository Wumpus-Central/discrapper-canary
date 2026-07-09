l.d(e, { default: () => v });
var i = l(627968),
    n = l(64700),
    a = l(224640),
    s = l(683071),
    r = l(430993),
    d = l(789645),
    c = l(534514),
    o = l(834730),
    u = l(331322),
    h = l(150934),
    x = l(696208),
    f = l(427262),
    g = l(10005),
    j = l(438732),
    m = l(834981),
    k = l(283900),
    p = l(477480),
    b = l(375708),
    C = l(25979);
let v = function (t) {
    let { currentUser: e, otherUser: l, transitionState: v, onClose: y } = t,
        S = n.useCallback(() => {
            y();
        }, [y]),
        w = (0, j.A)(),
        A = f.Ay.useName(l),
        B = (0, m.Ld)(l.id),
        [E, N] = n.useState(!1),
        [P, D] = n.useState(!1),
        [F, H] = n.useState(!1),
        L = n.useCallback(() => {
            H(!0), N(!1), D(!1);
        }, []),
        { disconnectLinkRequest: W, isDisconnectLoading: _ } = (0, g.A)({ onSuccess: S, onError: L }),
        z = w ? b.intl.string(p.default["WH+Gba"]) : b.intl.format(p.default.F2lccv, { username: A }),
        G = w ? b.intl.format(p.default.Or6hgl, { username: A }) : b.intl.string(p.default.hOEHFn),
        K = w ? b.intl.format(p.default.PlrZal, { username: A }) : b.intl.format(p.default.XyRW4c, { username: A }),
        O = w ? b.intl.string(p.default.PGQBnk) : b.intl.string(p.default.eiABQz),
        Q = w ? b.intl.string(p.default["0ki7+P"]) : b.intl.string(p.default.sCbKs4);
    return (0, i.jsxs)(a.d, {
        transitionState: v,
        onClose: y,
        children: [
            F && (0, i.jsx)(s.w, { type: "critical", children: b.intl.string(p.default.krIDdy) }),
            (0, i.jsxs)(r.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: C.wx,
                        children: [
                            (0, i.jsx)(k.A, {
                                currentUser: e,
                                otherUser: l,
                                children: (0, i.jsx)(d.P, { size: "md", color: "currentColor", className: C.ut }),
                            }),
                            (0, i.jsxs)("div", {
                                className: C.R_,
                                children: [
                                    (0, i.jsx)(c.D, {
                                        variant: "text-lg/bold",
                                        children: b.intl.format(p.default.o0JXuK, { username: A }),
                                    }),
                                    (0, i.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: z }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(u.B, {
                        gap: 32,
                        children: [
                            (0, i.jsxs)(u.B, {
                                gap: 16,
                                children: [
                                    B && (0, i.jsx)(s.w, { type: "warning", children: G }),
                                    (0, i.jsx)(o.E, { variant: "text-sm/normal", color: "text-default", children: K }),
                                ],
                            }),
                            (0, i.jsxs)(u.B, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(h.S, {
                                        checked: E,
                                        onChange: (t) => {
                                            N(t), H(!1);
                                        },
                                        label: O,
                                    }),
                                    (0, i.jsx)(h.S, {
                                        checked: P,
                                        onChange: (t) => {
                                            D(t), H(!1);
                                        },
                                        label: Q,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(x.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: b.intl.string(b.t["3ilveh"]), onClick: y, disabled: _ },
                    {
                        variant: "critical-primary",
                        text: b.intl.string(p.default["c5L+sl"]),
                        onClick: function () {
                            H(!1), W(l.id);
                        },
                        disabled: !E || !P || _,
                        loading: _,
                    },
                ],
            }),
        ],
    });
};
