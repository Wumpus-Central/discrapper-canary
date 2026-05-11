n.d(t, { default: () => E }), n(801541);
var s = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    l = n(889137),
    u = n(189213),
    o = n(17928),
    d = n(231723),
    c = n(331322),
    m = n(292666),
    h = n(834730),
    g = n(631670),
    p = n(546727),
    x = n(5052),
    f = n(836602),
    b = n(287809),
    v = n(927578),
    U = n(652215),
    j = n(375708),
    C = n(621979);
function E(e) {
    var t;
    let { transitionState: n, onClose: i } = e,
        E = (0, o.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        k = r.useMemo(() => v.Ay.canEditDiscriminator(E) && !E.hasUniqueUsername(), [E]),
        [y, w] = r.useState(E.username),
        [R, S] = r.useState(E.discriminator),
        [q, A] = r.useState(""),
        [L, M] = r.useState(!1),
        T = (0, o.bG)([f.A], () => f.A.getErrors()),
        W = E.hasUniqueUsername(),
        z = (0, x.i)(y, W, !1, E.username),
        B = r.useRef(null),
        D = r.useMemo(() => T?.username?.[0] ?? T?.discriminator?.[0], [T]);
    r.useEffect(() => {
        n === d.ip.ENTERED && B.current?.focus();
    }, [n]);
    let N = R !== E.discriminator;
    async function P(e) {
        e.preventDefault(), M(!0);
        let t = await (0, g._L)({ username: y, discriminator: k ? R : void 0, password: q });
        M(!1), t?.ok && i();
    }
    return (0, s.jsx)("form", {
        onSubmit: P,
        children: (0, s.jsx)(u.Modal, {
            onClose: i,
            transitionState: n,
            title: j.intl.string(j.t.m5or54),
            subtitle: j.intl.string(j.t.SLJvy0),
            actions: [
                { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: i },
                { variant: "primary", text: j.intl.string(j.t.i4jeWR), type: "submit", loading: L },
            ],
            children: (0, s.jsxs)(c.B, {
                gap: 16,
                children: [
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsxs)(c.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, s.jsx)(m.k, {
                                        label: j.intl.string(j.t.TWzdWj),
                                        error: D,
                                        name: "username",
                                        value: y,
                                        maxLength: U.d0r,
                                        onChange: w,
                                        inputRef: B,
                                        fullWidth: !0,
                                        ...((t = E.hasUniqueUsername()),
                                        (0, l.YW)(z)
                                            .with({ type: p.q.ERROR, message: l.P.select() }, (e) => ({ error: e }))
                                            .with({ type: p.q.AVAILABLE, message: l.P.select() }, (e) => ({
                                                successMessage: e,
                                            }))
                                            .otherwise(() => (t ? { helperText: j.intl.string(j.t.z7c4bP) } : {}))),
                                    }),
                                    !E.hasUniqueUsername() &&
                                        (0, s.jsx)(m.k, {
                                            name: "discriminator",
                                            "aria-label": j.intl.string(j.t.ozumaN),
                                            maxLength: 4,
                                            value: R,
                                            onChange: S,
                                            disabled: !k,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            N
                                ? (0, s.jsx)(h.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: C.Z,
                                      children: j.intl.string(j.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)(m.k, {
                        label: j.intl.string(j.t.TmdnJ3),
                        error: T?.password?.[0],
                        type: "password",
                        value: q,
                        onChange: A,
                    }),
                ],
            }),
        }),
    });
}
