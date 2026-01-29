n.d(t, {
    default: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(631670),
    c = n(836602),
    d = n(592074),
    u = n(652215),
    p = n(985018);

function _(e) {
    var t, n, _, m;
    let { transitionState: g, onSuccess: f, onClose: b, requirementsUpdated: h } = e,
        [A, E] = i.useState(""),
        [x, O] = i.useState(""),
        [C, y] = i.useState(""),
        [j, T] = i.useState(null),
        [v, S] = i.useState(null),
        { formState: I, errors: N } = (0, s.cf)([c.A], () => ({
            formState: c.A.getFormState(),
            errors: c.A.getErrors(),
        })),
        P = i.useRef(null);
    async function R(e) {
        e.preventDefault(), (0, o.x8)();
        let t = !1;
        if (
            ("" === x ? (T(p.intl.string(p.t["/7/oPU"])), (t = !0)) : T(null),
            x !== C ? (S(p.intl.string(p.t["IEKYZ/"])), (t = !0)) : S(null),
            t)
        )
            return;
        let n = await (0, o.yu)({
            password: A,
            newPassword: x,
        });
        if (null == n ? void 0 : n.ok) f();
        else {
            var r;
            (null == n || null == (r = n.body) ? void 0 : r.username) != null && (0, d.E)();
        }
    }
    return (
        i.useEffect(() => {
            if (g === a.ip4.ENTERED) {
                var e;
                null == (e = P.current) || e.focus();
            }
        }, [g]),
        (0, r.jsx)("form", {
            onSubmit: R,
            children: (0, r.jsx)(l.Modal, {
                transitionState: g,
                onClose: b,
                title: p.intl.string(p.t.geta79),
                subtitle: h ? p.intl.string(p.t["37iHbZ"]) : p.intl.string(p.t.iOurYj),
                actions: [
                    {
                        variant: "secondary",
                        text: p.intl.string(p.t["ETE/oC"]),
                        onClick: b,
                    },
                    {
                        variant: "primary",
                        text: p.intl.string(p.t.i4jeWR),
                        loading: I === u.XlH.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, r.jsxs)(a.BJc, {
                    gap: 20,
                    children: [
                        (0, r.jsx)(a.ksK, {
                            label: p.intl.string(p.t.WBqMRQ),
                            error: null == N || null == (_ = N.password) ? void 0 : _[0],
                            type: "password",
                            value: A,
                            onChange: E,
                            inputRef: P,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, r.jsx)(a.ksK, {
                            label: p.intl.string(p.t["8dM4FO"]),
                            error:
                                null !=
                                (t = null != (n = null == N || null == (m = N.new_password) ? void 0 : m[0]) ? n : j)
                                    ? t
                                    : void 0,
                            type: "password",
                            value: x,
                            onChange: O,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsx)(a.ksK, {
                            label: p.intl.string(p.t.iQG2KC),
                            error: null != v ? v : void 0,
                            type: "password",
                            value: C,
                            onChange: y,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
