i.d(a, { t: () => o });
var r = i(31144),
    l = i(248702);
i(236631);
var d = i(489771),
    t = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    o = ({ value: e, emailError: a, label: i, disabled: o = !1, required: n = !1, onEmailChange: s, onBlur: u }) => {
        let { t: c } = (0, r.n)();
        return (0, l.v)("div", {
            class: "IncodeEmailInput",
            children: (0, l.v)("div", {
                class: "IncodeEmailInputContainer",
                onFocusOut: u,
                children: (0, l.v)(d.t, {
                    id: "email-input",
                    type: "email",
                    value: e,
                    onInput: (e) => {
                        let a = e.target.value.trim();
                        s(a, a.length > 0 && t.test(a));
                    },
                    placeholder: c("email.placeholder"),
                    disabled: o,
                    required: n,
                    label: i,
                    "data-testid": "email-input",
                    "aria-label": i ? void 0 : "Email address",
                    "aria-invalid": a ? "true" : void 0,
                    "aria-describedby": (a ? "email-error" : void 0) || void 0,
                    autocomplete: "email",
                    error: a,
                    showErrorIcon: !0,
                }),
            }),
        });
    };
