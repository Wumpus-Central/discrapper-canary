"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(890698),
    l = n(146571),
    a = n(854378),
    o = n(985018),
    c = n(818050);
function d(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: d,
        password: u,
        onLoginChange: _,
        onPasswordChange: h,
        setLoginRef: g,
        setPasswordRef: p,
    } = e;
    return (0, i.jsxs)(a.Ay, {
        className: t,
        children: [
            (0, i.jsx)(r.M, {}),
            (0, i.jsxs)(a.eB, {
                className: c.QX,
                children: [
                    (0, i.jsx)(l.A, {
                        className: c.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: o.intl.string(o.t.tUjnxr),
                        onChange: _,
                        setRef: g,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: d,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, i.jsx)(a.pd, {
                        className: c.SX,
                        label: o.intl.string(o.t["CIGa+7"]),
                        onChange: h,
                        type: "password",
                        setRef: p,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: u,
                        required: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: c.QB,
                        children: (0, i.jsx)(s.Button, {
                            text: o.intl.string(o.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, i.jsx)(s.QWc, { text: o.intl.string(o.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, i.jsx)("div", {
                        className: c.a5,
                        children: (0, i.jsx)(s.QWc, {
                            text: o.intl.string(o.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
