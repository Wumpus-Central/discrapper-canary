n.d(t, { default: () => _ }), n(801541);
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(889137),
    l = n(158954),
    u = n(311907),
    d = n(397927),
    g = n(631670),
    E = n(546727),
    m = n(975169),
    c = n(836602),
    h = n(287809),
    S = n(927578),
    A = n(652215),
    R = n(985018),
    U = n(913374);
function _(e) {
    var t;
    let { transitionState: n, onClose: r } = e,
        _ = (0, u.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        T = s.useMemo(() => S.Ay.canEditDiscriminator(_) && !_.hasUniqueUsername(), [_]),
        [v, f] = s.useState(_.username),
        [N, p] = s.useState(_.discriminator),
        [I, L] = s.useState(""),
        [y, M] = s.useState(!1),
        O = (0, u.bG)([c.A], () => c.A.getErrors()),
        w = _.hasUniqueUsername(),
        k = (0, m.i)(v, w, !1, _.username),
        C = s.useRef(null),
        b = s.useMemo(() => O?.username?.[0] ?? O?.discriminator?.[0], [O]);
    s.useEffect(() => {
        n === d.ip4.ENTERED && C.current?.focus();
    }, [n]);
    let x = N !== _.discriminator;
    async function P(e) {
        e.preventDefault(), M(!0);
        let t = await (0, g._L)({ username: v, discriminator: T ? N : void 0, password: I });
        M(!1), t?.ok && r();
    }
    return (0, i.jsx)("form", {
        onSubmit: P,
        children: (0, i.jsx)(l.Modal, {
            onClose: r,
            transitionState: n,
            title: R.intl.string(R.t.m5or54),
            subtitle: R.intl.string(R.t.SLJvy0),
            actions: [
                { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: r },
                { variant: "primary", text: R.intl.string(R.t.i4jeWR), type: "submit", loading: y },
            ],
            children: (0, i.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, i.jsx)(d.ksK, {
                                        label: R.intl.string(R.t.TWzdWj),
                                        error: b,
                                        name: "username",
                                        value: v,
                                        maxLength: A.d0r,
                                        onChange: f,
                                        inputRef: C,
                                        fullWidth: !0,
                                        ...((t = _.hasUniqueUsername()),
                                        (0, o.YW)(k)
                                            .with({ type: E.q.ERROR, message: o.P.select() }, (e) => ({ error: e }))
                                            .with({ type: E.q.AVAILABLE, message: o.P.select() }, (e) => ({
                                                successMessage: e,
                                            }))
                                            .otherwise(() => (t ? { helperText: R.intl.string(R.t.z7c4bP) } : {}))),
                                    }),
                                    !_.hasUniqueUsername() &&
                                        (0, i.jsx)(d.ksK, {
                                            name: "discriminator",
                                            "aria-label": R.intl.string(R.t.ozumaN),
                                            maxLength: 4,
                                            value: N,
                                            onChange: p,
                                            disabled: !T,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            x
                                ? (0, i.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: U.Z,
                                      children: R.intl.string(R.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(d.ksK, {
                        label: R.intl.string(R.t.TmdnJ3),
                        error: O?.password?.[0],
                        type: "password",
                        value: I,
                        onChange: L,
                    }),
                ],
            }),
        }),
    });
}
