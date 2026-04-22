n.d(e, { A: () => C });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(772707),
    l = n(331322),
    o = n(292666),
    c = n(631670),
    E = n(836602),
    u = n(828578),
    A = n(985018),
    _ = n(37229);
function C(t) {
    let { emailToken: e, onClose: n, onBack: C, onNext: d, transitionState: g } = t,
        [N, S] = r.useState(""),
        [k, m] = r.useState(""),
        [h, f] = r.useState(!1),
        x = (0, i.bG)([E.A], () => E.A.getErrors()),
        p = r.useRef(null);
    async function R(t) {
        t.preventDefault(), f(!0);
        let n = await (0, c._L)({ email: N, emailToken: e, password: k });
        f(!1), n?.ok ? d(N) : n?.body?.username != null ? (0, u.E)() : n?.body?.email_token != null && C?.();
    }
    return (
        r.useEffect(() => {
            p.current?.focus();
        }, []),
        (0, a.jsx)(s.k, {
            graphic: { type: "image", src: _ },
            title: A.intl.string(A.t.p3280r),
            subtitle: A.intl.string(A.t["1k44EL"]),
            onClose: n,
            transitionState: g,
            actions: [
                null != C
                    ? { variant: "secondary", text: A.intl.string(A.t["13/7kX"]), onClick: C }
                    : { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: A.intl.string(A.t.i4jeWR), loading: h, onClick: R },
            ],
            children: (0, a.jsxs)(l.B, {
                gap: 20,
                children: [
                    (0, a.jsx)(o.k, {
                        label: A.intl.string(A.t["w/qqKK"]),
                        error: x?.email?.[0],
                        type: "email",
                        value: N,
                        onChange: S,
                        inputRef: p,
                    }),
                    (0, a.jsx)(o.k, {
                        label: A.intl.string(A.t.TmdnJ3),
                        error: x?.password?.[0],
                        type: "password",
                        value: k,
                        onChange: m,
                    }),
                ],
            }),
        })
    );
}
