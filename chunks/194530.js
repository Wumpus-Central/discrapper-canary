n.d(t, { default: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(809206),
    c = n(25990),
    u = n(155433),
    d = n(981631),
    f = n(388032);
function p(e) {
    var t, n, p, _;
    let { transitionState: m, onSuccess: h, onClose: g, requirementsUpdated: E } = e,
        [b, y] = i.useState(""),
        [O, v] = i.useState(""),
        [S, I] = i.useState(""),
        [T, A] = i.useState(null),
        [C, N] = i.useState(null),
        P = (0, o.e7)([c.Z], () => c.Z.getErrors()),
        R = (0, o.e7)([c.Z], () => c.Z.getFormState()),
        w = i.useRef(null);
    async function D(e) {
        e.preventDefault(), (0, l.b9)();
        let t = !1;
        if (
            ("" === O ? (A(f.intl.string(f.t["/7/oPU"])), (t = !0)) : A(null),
            O !== S ? (N(f.intl.string(f.t["IEKYZ/"])), (t = !0)) : N(null),
            t)
        )
            return;
        let n = await (0, l.Mn)({
            password: b,
            newPassword: O,
        });
        if (null == n ? void 0 : n.ok) h();
        else {
            var r;
            (null == n || null == (r = n.body) ? void 0 : r.username) != null && (0, u.P)();
        }
    }
    return (
        i.useEffect(() => {
            if (m === s.Dvm.ENTERED) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [m]),
        (0, r.jsx)("form", {
            onSubmit: D,
            children: (0, r.jsx)(a.Modal, {
                transitionState: m,
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
                        loading: R === d.QZA.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 20,
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: f.intl.string(f.t.WBqMRQ),
                            error: null == P || null == (t = P.password) ? void 0 : t[0],
                            type: "password",
                            value: b,
                            onChange: y,
                            inputRef: w,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, r.jsx)(s.oil, {
                            label: f.intl.string(f.t["8dM4FO"]),
                            error:
                                null !=
                                (_ = null != (p = null == P || null == (n = P.new_password) ? void 0 : n[0]) ? p : T)
                                    ? _
                                    : void 0,
                            type: "password",
                            value: O,
                            onChange: v,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsx)(s.oil, {
                            label: f.intl.string(f.t.iQG2KC),
                            error: null != C ? C : void 0,
                            type: "password",
                            value: S,
                            onChange: I,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
