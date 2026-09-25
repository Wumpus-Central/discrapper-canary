r.d(e, { default: () => f });
var n = r(477900),
    s = r(582128),
    i = r(17928),
    a = r(189213),
    l = r(231723),
    o = r(331322),
    u = r(95477),
    p = r(631670),
    d = r(836602),
    c = r(774914),
    g = r(652215),
    w = r(375708);
function f(t) {
    let { transitionState: e, onSuccess: r, onClose: f, requirementsUpdated: C } = t,
        [h, b] = s.useState(""),
        [m, S] = s.useState(""),
        [k, v] = s.useState(""),
        [x, E] = s.useState(null),
        [j, y] = s.useState(null),
        { formState: R, errors: q } = (0, i.cf)([d.A], () => ({
            formState: d.A.getFormState(),
            errors: d.A.getErrors(),
        })),
        T = s.useRef(null);
    async function _(t) {
        (t.preventDefault(), (0, p.x8)());
        let e = !1;
        if (
            ("" === m ? (E(w.intl.string(w.t["/7/oPU"])), (e = !0)) : E(null),
            m !== k ? (y(w.intl.string(w.t["IEKYZ/"])), (e = !0)) : y(null),
            e)
        )
            return;
        let n = await (0, p._L)({ password: h, newPassword: m });
        n?.ok ? r() : n?.body?.username != null && (0, c.E)();
    }
    return (
        s.useEffect(() => {
            e === l.ip.ENTERED && T.current?.focus();
        }, [e]),
        (0, n.jsx)("form", {
            onSubmit: _,
            children: (0, n.jsx)(a.a, {
                transitionState: e,
                onClose: f,
                title: w.intl.string(w.t.geta79),
                subtitle: C ? w.intl.string(w.t["37iHbZ"]) : w.intl.string(w.t.iOurYj),
                actions: [
                    { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: f },
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
                            value: h,
                            onChange: b,
                            inputRef: T,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, n.jsx)(u.k, {
                            label: w.intl.string(w.t["8dM4FO"]),
                            error: q?.new_password?.[0] ?? x ?? void 0,
                            type: "password",
                            value: m,
                            onChange: S,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, n.jsx)(u.k, {
                            label: w.intl.string(w.t.iQG2KC),
                            error: j ?? void 0,
                            type: "password",
                            value: k,
                            onChange: v,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
