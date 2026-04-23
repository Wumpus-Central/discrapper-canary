n.d(t, { default: () => f }), n(801541);
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(889137),
    l = n(189213),
    u = n(311907),
    d = n(231723),
    g = n(331322),
    E = n(292666),
    m = n(834730),
    c = n(631670),
    h = n(546727),
    S = n(975169),
    A = n(836602),
    R = n(287809),
    U = n(927578),
    _ = n(652215),
    T = n(985018),
    v = n(548027);
function f(e) {
    var t;
    let { transitionState: n, onClose: s } = e,
        f = (0, u.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        N = r.useMemo(() => U.Ay.canEditDiscriminator(f) && !f.hasUniqueUsername(), [f]),
        [p, I] = r.useState(f.username),
        [L, y] = r.useState(f.discriminator),
        [M, O] = r.useState(""),
        [w, k] = r.useState(!1),
        C = (0, u.bG)([A.A], () => A.A.getErrors()),
        b = f.hasUniqueUsername(),
        P = (0, S.i)(p, b, !1, f.username),
        x = r.useRef(null),
        G = r.useMemo(() => C?.username?.[0] ?? C?.discriminator?.[0], [C]);
    r.useEffect(() => {
        n === d.ip.ENTERED && x.current?.focus();
    }, [n]);
    let q = L !== f.discriminator;
    async function j(e) {
        e.preventDefault(), k(!0);
        let t = await (0, c._L)({ username: p, discriminator: N ? L : void 0, password: M });
        k(!1), t?.ok && s();
    }
    return (0, i.jsx)("form", {
        onSubmit: j,
        children: (0, i.jsx)(l.Modal, {
            onClose: s,
            transitionState: n,
            title: T.intl.string(T.t.m5or54),
            subtitle: T.intl.string(T.t.SLJvy0),
            actions: [
                { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: s },
                { variant: "primary", text: T.intl.string(T.t.i4jeWR), type: "submit", loading: w },
            ],
            children: (0, i.jsxs)(g.B, {
                gap: 16,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(g.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, i.jsx)(E.k, {
                                        label: T.intl.string(T.t.TWzdWj),
                                        error: G,
                                        name: "username",
                                        value: p,
                                        maxLength: _.d0r,
                                        onChange: I,
                                        inputRef: x,
                                        fullWidth: !0,
                                        ...((t = f.hasUniqueUsername()),
                                        (0, o.YW)(P)
                                            .with({ type: h.q.ERROR, message: o.P.select() }, (e) => ({ error: e }))
                                            .with({ type: h.q.AVAILABLE, message: o.P.select() }, (e) => ({
                                                successMessage: e,
                                            }))
                                            .otherwise(() => (t ? { helperText: T.intl.string(T.t.z7c4bP) } : {}))),
                                    }),
                                    !f.hasUniqueUsername() &&
                                        (0, i.jsx)(E.k, {
                                            name: "discriminator",
                                            "aria-label": T.intl.string(T.t.ozumaN),
                                            maxLength: 4,
                                            value: L,
                                            onChange: y,
                                            disabled: !N,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            q
                                ? (0, i.jsx)(m.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: v.Z,
                                      children: T.intl.string(T.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(E.k, {
                        label: T.intl.string(T.t.TmdnJ3),
                        error: C?.password?.[0],
                        type: "password",
                        value: M,
                        onChange: O,
                    }),
                ],
            }),
        }),
    });
}
