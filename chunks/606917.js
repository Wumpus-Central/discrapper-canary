n.d(e, { A: () => A });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    l = n(631670),
    o = n(836602),
    c = n(828578),
    E = n(985018),
    u = n(37229);
function A(t) {
    let { emailToken: e, onClose: n, onBack: A, onNext: _, transitionState: C } = t,
        [g, N] = r.useState(""),
        [S, d] = r.useState(""),
        [k, m] = r.useState(!1),
        h = (0, i.bG)([o.A], () => o.A.getErrors()),
        x = r.useRef(null);
    async function p(t) {
        t.preventDefault(), m(!0);
        let n = await (0, l._L)({ email: g, emailToken: e, password: S });
        m(!1), n?.ok ? _(g) : n?.body?.username != null ? (0, c.E)() : n?.body?.email_token != null && A?.();
    }
    return (
        r.useEffect(() => {
            x.current?.focus();
        }, []),
        (0, a.jsx)(s.kpP, {
            graphic: { type: "image", src: u },
            title: E.intl.string(E.t.p3280r),
            subtitle: E.intl.string(E.t["1k44EL"]),
            onClose: n,
            transitionState: C,
            actions: [
                null != A
                    ? { variant: "secondary", text: E.intl.string(E.t["13/7kX"]), onClick: A }
                    : { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n },
                { variant: "primary", text: E.intl.string(E.t.i4jeWR), loading: k, onClick: p },
            ],
            children: (0, a.jsxs)(s.BJc, {
                gap: 20,
                children: [
                    (0, a.jsx)(s.ksK, {
                        label: E.intl.string(E.t["w/qqKK"]),
                        error: h?.email?.[0],
                        type: "email",
                        value: g,
                        onChange: N,
                        inputRef: x,
                    }),
                    (0, a.jsx)(s.ksK, {
                        label: E.intl.string(E.t.TmdnJ3),
                        error: h?.password?.[0],
                        type: "password",
                        value: S,
                        onChange: d,
                    }),
                ],
            }),
        })
    );
}
