n(801541);
var r = n(477900),
    s = n(582128),
    a = n(284009),
    i = n.n(a),
    l = n(889137),
    u = n(855986),
    o = n(189213),
    c = n(231723),
    d = n(331322),
    m = n(95477),
    h = n(834730),
    g = n(631670),
    p = n(546727),
    x = n(576326),
    b = n(836602),
    f = n(287809),
    v = n(722178);
n(652215);
var U = n(792996),
    j = n(742616);
n.d(
    t,
    {},
    {
        default: function (e) {
            var t;
            let { transitionState: n, onClose: a } = e,
                C = (0, u.bG)([f.default], () => {
                    let e = f.default.getCurrentUser();
                    return (i()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e);
                }),
                E = s.useMemo(() => v.Ay.canEditDiscriminator(C) && !C.hasUniqueUsername(), [C]),
                [y, k] = s.useState(C.username),
                [w, R] = s.useState(C.discriminator),
                [S, q] = s.useState(""),
                [A, L] = s.useState(!1),
                T = (0, u.bG)([b.A], () => b.A.getErrors()),
                W = C.hasUniqueUsername(),
                z = (0, x.i)(y, W, !1, C.username),
                M = s.useRef(null),
                B = s.useMemo(() => T?.username?.[0] ?? T?.discriminator?.[0], [T]);
            s.useEffect(() => {
                n === c.ip.ENTERED && M.current?.focus();
            }, [n]);
            let D = w !== C.discriminator;
            return (0, r.jsx)("form", {
                onSubmit: async function (e) {
                    (e.preventDefault(), L(!0));
                    let t = await (0, g._L)({ username: y, discriminator: E ? w : void 0, password: S });
                    (L(!1), t?.ok && a());
                },
                children: (0, r.jsx)(o.a, {
                    onClose: a,
                    transitionState: n,
                    title: U.intl.string(U.t.m5or54),
                    subtitle: U.intl.string(U.t.SLJvy0),
                    actions: [
                        { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: a },
                        { variant: "primary", text: U.intl.string(U.t.i4jeWR), type: "submit", loading: A },
                    ],
                    children: (0, r.jsxs)(d.B, {
                        gap: 16,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)(d.B, {
                                        direction: "horizontal",
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(m.k, {
                                                label: U.intl.string(U.t.TWzdWj),
                                                error: B,
                                                name: "username",
                                                value: y,
                                                maxLength: 32,
                                                onChange: k,
                                                inputRef: M,
                                                fullWidth: !0,
                                                ...((t = C.hasUniqueUsername()),
                                                (0, l.YW)(z)
                                                    .with({ type: p.q.ERROR, message: l.P.select() }, (e) => ({
                                                        error: e,
                                                    }))
                                                    .with({ type: p.q.AVAILABLE, message: l.P.select() }, (e) => ({
                                                        successMessage: e,
                                                    }))
                                                    .otherwise(() =>
                                                        t ? { helperText: U.intl.string(U.t.z7c4bP) } : {},
                                                    )),
                                            }),
                                            !C.hasUniqueUsername() &&
                                                (0, r.jsx)(m.k, {
                                                    name: "discriminator",
                                                    "aria-label": U.intl.string(U.t.ozumaN),
                                                    maxLength: 4,
                                                    value: w,
                                                    onChange: R,
                                                    disabled: !E,
                                                    leading: "#",
                                                }),
                                        ],
                                    }),
                                    D
                                        ? (0, r.jsx)(h.E, {
                                              variant: "body-xs/normal",
                                              color: "text-default",
                                              className: j.Z,
                                              children: U.intl.string(U.t.mConUX),
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)(m.k, {
                                label: U.intl.string(U.t.TmdnJ3),
                                error: T?.password?.[0],
                                type: "password",
                                revealable: !0,
                                value: S,
                                onChange: q,
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
