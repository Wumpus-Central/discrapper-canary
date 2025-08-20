n.d(t, { default: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(809206),
    l = n(25990),
    c = n(155433),
    u = n(981631),
    d = n(388032),
    f = n(879488);
function _(e) {
    var t, n, _, p;
    let { transitionState: h, onSuccess: m, onClose: g, requirementsUpdated: E, noSkip: b = !1 } = e,
        [y, O] = i.useState(""),
        [v, I] = i.useState(""),
        [T, S] = i.useState(""),
        [A, C] = i.useState(null),
        [N, R] = i.useState(null),
        P = (0, a.e7)([l.Z], () => l.Z.getErrors()),
        w = (0, a.e7)([l.Z], () => l.Z.getFormState()),
        D = i.useRef(null);
    async function x(e) {
        e.preventDefault(), (0, s.b9)();
        let t = !1;
        if (
            ("" === v ? (C(d.intl.string(d.t["/7/oPT"])), (t = !0)) : C(null),
            v !== T ? (R(d.intl.string(d.t.IEKYZ2)), (t = !0)) : R(null),
            t)
        )
            return;
        let n = await (0, s.Mn)({
            password: y,
            newPassword: v,
        });
        if (null == n ? void 0 : n.ok) m();
        else {
            var r;
            (null == n || null == (r = n.body) ? void 0 : r.username) != null && (0, c.P)();
        }
    }
    return (
        i.useEffect(() => {
            if (h === o.Dvm.ENTERED) {
                var e;
                null == (e = D.current) || e.focus();
            }
        }, [h]),
        (0, r.jsxs)(o.Y0X, {
            transitionState: h,
            parentComponent: "ChangePasswordModal",
            children: [
                (0, r.jsxs)(o.xBx, {
                    separator: !1,
                    className: f.header,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            className: f.title,
                            children: d.intl.string(d.t["geta7+"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: f.subtitle,
                            children: E ? d.intl.string(d.t["37iHbW"]) : d.intl.string(d.t.iOurYm),
                        }),
                        !0 !== b &&
                            (0, r.jsx)(o.olH, {
                                onClick: g,
                                className: f.modalCloseButton,
                            }),
                    ],
                }),
                (0, r.jsxs)("form", {
                    onSubmit: x,
                    children: [
                        (0, r.jsxs)(o.hzk, {
                            className: f.content,
                            children: [
                                (0, r.jsx)(o.xJW, {
                                    title: d.intl.string(d.t.WBqMRU),
                                    error: null == P || null == (t = P.password) ? void 0 : t[0],
                                    required: !0,
                                    children: (0, r.jsx)(o.oil, {
                                        type: "password",
                                        value: y,
                                        onChange: O,
                                        inputRef: D,
                                        autoComplete: "current-password",
                                        required: !0,
                                    }),
                                }),
                                (0, r.jsx)(o.xJW, {
                                    className: f.newPassword,
                                    title: d.intl.string(d.t["8dM4FB"]),
                                    error:
                                        null !=
                                        (p =
                                            null != (_ = null == P || null == (n = P.new_password) ? void 0 : n[0])
                                                ? _
                                                : A)
                                            ? p
                                            : void 0,
                                    required: !0,
                                    children: (0, r.jsx)(o.oil, {
                                        type: "password",
                                        value: v,
                                        onChange: I,
                                        autoComplete: "new-password",
                                        required: !0,
                                    }),
                                }),
                                (0, r.jsx)(o.xJW, {
                                    className: f.newPassword,
                                    title: d.intl.string(d.t.iQG2KC),
                                    error: null != N ? N : void 0,
                                    required: !0,
                                    children: (0, r.jsx)(o.oil, {
                                        type: "password",
                                        value: T,
                                        onChange: S,
                                        autoComplete: "new-password",
                                        required: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.mzw, {
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    variant: "primary",
                                    text: d.intl.string(d.t.i4jeWV),
                                    type: "submit",
                                    loading: w === u.QZA.SUBMITTING,
                                }),
                                !0 !== b &&
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: f.cancel,
                                        children: (0, r.jsx)(o.zxk, {
                                            variant: "secondary",
                                            text: d.intl.string(d.t["ETE/oK"]),
                                            onClick: g,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
