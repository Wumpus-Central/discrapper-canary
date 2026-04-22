"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(821609),
    r = n(123292),
    l = n(890698),
    a = n(146571),
    o = n(854378),
    c = n(985018),
    d = n(818050);
function u(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: u,
        password: _,
        onLoginChange: h,
        onPasswordChange: m,
        setLoginRef: p,
        setPasswordRef: g,
    } = e;
    return (0, i.jsxs)(o.Ay, {
        className: t,
        children: [
            (0, i.jsx)(l.M, {}),
            (0, i.jsxs)(o.eB, {
                className: d.QX,
                children: [
                    (0, i.jsx)(a.A, {
                        className: d.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: c.intl.string(c.t.tUjnxr),
                        onChange: h,
                        setRef: p,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: u,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, i.jsx)(o.pd, {
                        className: d.SX,
                        label: c.intl.string(c.t["CIGa+7"]),
                        onChange: m,
                        type: "password",
                        setRef: g,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: _,
                        required: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: d.QB,
                        children: (0, i.jsx)(s.$, {
                            text: c.intl.string(c.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, i.jsx)(r.Q, { text: c.intl.string(c.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, i.jsx)("div", {
                        className: d.a5,
                        children: (0, i.jsx)(r.Q, {
                            text: c.intl.string(c.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
