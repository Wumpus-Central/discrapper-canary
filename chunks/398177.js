var n = r(477900),
    s = r(582128),
    a = r(855986),
    i = r(189213),
    l = r(231723),
    o = r(331322),
    u = r(95477),
    p = r(631670),
    d = r(836602),
    c = r(774914),
    g = r(652215),
    w = r(792996);
r.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onSuccess: r, onClose: b, requirementsUpdated: f } = t,
                [v, C] = s.useState(""),
                [h, m] = s.useState(""),
                [S, k] = s.useState(""),
                [x, E] = s.useState(null),
                [j, y] = s.useState(null),
                { formState: R, errors: q } = (0, a.cf)([d.A], () => ({
                    formState: d.A.getFormState(),
                    errors: d.A.getErrors(),
                })),
                T = s.useRef(null);
            return (
                s.useEffect(() => {
                    e === l.ip.ENTERED && T.current?.focus();
                }, [e]),
                (0, n.jsx)("form", {
                    onSubmit: async function (t) {
                        (t.preventDefault(), (0, p.x8)());
                        let e = !1;
                        if (
                            ("" === h ? (E(w.intl.string(w.t["/7/oPU"])), (e = !0)) : E(null),
                            h !== S ? (y(w.intl.string(w.t["IEKYZ/"])), (e = !0)) : y(null),
                            e)
                        )
                            return;
                        let n = await (0, p._L)({ password: v, newPassword: h });
                        n?.ok ? r() : n?.body?.username != null && (0, c.E)();
                    },
                    children: (0, n.jsx)(i.a, {
                        transitionState: e,
                        onClose: b,
                        title: w.intl.string(w.t.geta79),
                        subtitle: f ? w.intl.string(w.t["37iHbZ"]) : w.intl.string(w.t.iOurYj),
                        actions: [
                            { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: b },
                            {
                                variant: "primary",
                                text: w.intl.string(w.t.i4jeWR),
                                loading: R === g.XlH.SUBMITTING,
                                type: "submit",
                            },
                        ],
                        children: (0, n.jsxs)(o.B, {
                            gap: 20,
                            children: [
                                (0, n.jsx)(u.k, {
                                    label: w.intl.string(w.t.WBqMRQ),
                                    error: q?.password?.[0],
                                    type: "password",
                                    revealable: !0,
                                    value: v,
                                    onChange: C,
                                    inputRef: T,
                                    autoComplete: "current-password",
                                    required: !0,
                                }),
                                (0, n.jsx)(u.k, {
                                    label: w.intl.string(w.t["8dM4FO"]),
                                    error: q?.new_password?.[0] ?? x ?? void 0,
                                    type: "password",
                                    revealable: !0,
                                    value: h,
                                    onChange: m,
                                    autoComplete: "new-password",
                                    required: !0,
                                }),
                                (0, n.jsx)(u.k, {
                                    label: w.intl.string(w.t.iQG2KC),
                                    error: j ?? void 0,
                                    type: "password",
                                    revealable: !0,
                                    value: S,
                                    onChange: k,
                                    autoComplete: "new-password",
                                    required: !0,
                                }),
                            ],
                        }),
                    }),
                })
            );
        },
    },
);
