n.d(t, { default: () => m });
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(311907),
    l = n(397927),
    o = n(631670),
    c = n(836602),
    d = n(592074),
    u = n(652215),
    _ = n(985018);
function m(e) {
    let { transitionState: t, onSuccess: n, onClose: m, requirementsUpdated: A } = e,
        [g, E] = s.useState(""),
        [h, p] = s.useState(""),
        [C, x] = s.useState(""),
        [T, I] = s.useState(null),
        [S, f] = s.useState(null),
        { formState: N, errors: b } = (0, a.cf)([c.A], () => ({
            formState: c.A.getFormState(),
            errors: c.A.getErrors(),
        })),
        R = s.useRef(null);
    async function v(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if (
            ("" === h ? (I(_.intl.string(_.t["/7/oPU"])), (t = !0)) : I(null),
            h !== C ? (f(_.intl.string(_.t["IEKYZ/"])), (t = !0)) : f(null),
            t)
        )
            return;
        let i = await (0, o.yu)({ password: g, newPassword: h });
        i?.ok ? n() : i?.body?.username != null && (0, d.E)();
    }
    return (
        s.useEffect(() => {
            t === l.ip4.ENTERED && R.current?.focus();
        }, [t]),
        (0, i.jsx)("form", {
            onSubmit: v,
            children: (0, i.jsx)(r.Modal, {
                transitionState: t,
                onClose: m,
                title: _.intl.string(_.t.geta79),
                subtitle: A ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
                actions: [
                    { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: m },
                    {
                        variant: "primary",
                        text: _.intl.string(_.t.i4jeWR),
                        loading: N === u.XlH.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, i.jsxs)(l.BJc, {
                    gap: 20,
                    children: [
                        (0, i.jsx)(l.ksK, {
                            label: _.intl.string(_.t.WBqMRQ),
                            error: b?.password?.[0],
                            type: "password",
                            value: g,
                            onChange: E,
                            inputRef: R,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, i.jsx)(l.ksK, {
                            label: _.intl.string(_.t["8dM4FO"]),
                            error: b?.new_password?.[0] ?? T ?? void 0,
                            type: "password",
                            value: h,
                            onChange: p,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, i.jsx)(l.ksK, {
                            label: _.intl.string(_.t.iQG2KC),
                            error: S ?? void 0,
                            type: "password",
                            value: C,
                            onChange: x,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
