r.d(e, { default: () => f });
var n = r(627968),
    s = r(64700),
    i = r(189213),
    a = r(17928),
    l = r(231723),
    o = r(331322),
    u = r(292666),
    d = r(631670),
    p = r(836602),
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
        { formState: R, errors: q } = (0, a.cf)([p.A], () => ({
            formState: p.A.getFormState(),
            errors: p.A.getErrors(),
        })),
        M = s.useRef(null);
    async function T(t) {
        t.preventDefault(), (0, d.x8)();
        let e = !1;
        if (
            ("" === m ? (E(w.intl.string(w.t["/7/oPU"])), (e = !0)) : E(null),
            m !== k ? (y(w.intl.string(w.t["IEKYZ/"])), (e = !0)) : y(null),
            e)
        )
            return;
        let n = await (0, d._L)({ password: h, newPassword: m });
        n?.ok ? r() : n?.body?.username != null && (0, c.E)();
    }
    return (
        s.useEffect(() => {
            e === l.ip.ENTERED && M.current?.focus();
        }, [e]),
        (0, n.jsx)("form", {
            onSubmit: T,
            children: (0, n.jsx)(i.Modal, {
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
                            inputRef: M,
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
