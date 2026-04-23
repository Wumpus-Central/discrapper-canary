n.d(t, { default: () => f }), n(801541);
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(889137),
    l = n(189213),
    u = n(17928),
    g = n(231723),
    d = n(331322),
    E = n(292666),
    m = n(834730),
    c = n(631670),
    h = n(546727),
    S = n(5052),
    A = n(836602),
    R = n(287809),
    U = n(927578),
    _ = n(652215),
    T = n(985018),
    v = n(548027);
function f(e) {
    var t;
    let { transitionState: n, onClose: r } = e,
        f = (0, u.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        N = s.useMemo(() => U.Ay.canEditDiscriminator(f) && !f.hasUniqueUsername(), [f]),
        [p, I] = s.useState(f.username),
        [L, y] = s.useState(f.discriminator),
        [M, O] = s.useState(""),
        [w, k] = s.useState(!1),
        C = (0, u.bG)([A.A], () => A.A.getErrors()),
        b = f.hasUniqueUsername(),
        P = (0, S.i)(p, b, !1, f.username),
        x = s.useRef(null),
        G = s.useMemo(() => C?.username?.[0] ?? C?.discriminator?.[0], [C]);
    s.useEffect(() => {
        n === g.ip.ENTERED && x.current?.focus();
    }, [n]);
    let q = L !== f.discriminator;
    async function j(e) {
        e.preventDefault(), k(!0);
        let t = await (0, c._L)({ username: p, discriminator: N ? L : void 0, password: M });
        k(!1), t?.ok && r();
    }
    return (0, i.jsx)("form", {
        onSubmit: j,
        children: (0, i.jsx)(l.Modal, {
            onClose: r,
            transitionState: n,
            title: T.intl.string(T.t.m5or54),
            subtitle: T.intl.string(T.t.SLJvy0),
            actions: [
                { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: r },
                { variant: "primary", text: T.intl.string(T.t.i4jeWR), type: "submit", loading: w },
            ],
            children: (0, i.jsxs)(d.B, {
                gap: 16,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.B, {
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
