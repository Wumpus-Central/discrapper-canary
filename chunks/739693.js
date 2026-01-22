n.d(t, {
    default: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(631670),
    c = n(752319),
    u = n(592074),
    d = n(652215),
    f = n(985018);

function p(e) {
    var t, n, p, _;
    let { transitionState: h, onSuccess: m, onClose: g, requirementsUpdated: E } = e,
        [b, y] = i.useState(""),
        [O, A] = i.useState(""),
        [v, S] = i.useState(""),
        [I, T] = i.useState(null),
        [C, N] = i.useState(null),
        R = (0, s.bG)([c.A], () => c.A.getErrors()),
        w = (0, s.bG)([c.A], () => c.A.getFormState()),
        P = i.useRef(null);
    async function D(e) {
        e.preventDefault(), (0, l.x8)();
        let t = !1;
        if (
            ("" === O ? (T(f.intl.string(f.t["/7/oPU"])), (t = !0)) : T(null),
            O !== v ? (N(f.intl.string(f.t["IEKYZ/"])), (t = !0)) : N(null),
            t)
        )
            return;
        let n = await (0, l.yu)({
            password: b,
            newPassword: O,
        });
        if (null == n ? void 0 : n.ok) m();
        else {
            var r;
            (null == n || null == (r = n.body) ? void 0 : r.username) != null && (0, u.E)();
        }
    }
    return (
        i.useEffect(() => {
            if (h === o.ip4.ENTERED) {
                var e;
                null == (e = P.current) || e.focus();
            }
        }, [h]),
        (0, r.jsx)("form", {
            onSubmit: D,
            children: (0, r.jsx)(a.Modal, {
                transitionState: h,
                onClose: g,
                title: f.intl.string(f.t.geta79),
                subtitle: E ? f.intl.string(f.t["37iHbZ"]) : f.intl.string(f.t.iOurYj),
                actions: [
                    {
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oC"]),
                        onClick: g,
                    },
                    {
                        variant: "primary",
                        text: f.intl.string(f.t.i4jeWR),
                        loading: w === d.XlH.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, r.jsxs)(o.BJc, {
                    gap: 20,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            label: f.intl.string(f.t.WBqMRQ),
                            error: null == R || null == (p = R.password) ? void 0 : p[0],
                            type: "password",
                            value: b,
                            onChange: y,
                            inputRef: P,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, r.jsx)(o.ksK, {
                            label: f.intl.string(f.t["8dM4FO"]),
                            error:
                                null !=
                                (t = null != (n = null == R || null == (_ = R.new_password) ? void 0 : _[0]) ? n : I)
                                    ? t
                                    : void 0,
                            type: "password",
                            value: O,
                            onChange: A,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsx)(o.ksK, {
                            label: f.intl.string(f.t.iQG2KC),
                            error: null != C ? C : void 0,
                            type: "password",
                            value: v,
                            onChange: S,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
