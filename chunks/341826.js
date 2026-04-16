"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(990078),
    a = n(397927),
    o = n(890698),
    c = n(954571),
    d = n(854378),
    u = n(652215);
n(436317);
var h = n(985018),
    _ = n(731286),
    p = n(818050);
function g(e) {
    let { authBoxClassName: t, name: n, onNameChange: s } = e;
    return (0, i.jsxs)(d.Ay, {
        className: t,
        children: [
            (0, i.jsx)(o.M, {}),
            (0, i.jsxs)(d.eB, {
                className: _.y0,
                children: [
                    (0, i.jsx)(l.m, {
                        text: h.intl.string(h.t["hBB85/"]),
                        position: "right",
                        children: (0, i.jsx)(d.pd, {
                            label: h.intl.string(h.t["9AjdkD"]),
                            autoFocus: !0,
                            className: p.QB,
                            name: "username",
                            value: n,
                            placeholder: h.intl.string(h.t["09Q8yp"]),
                            onChange: s,
                            onFocus: () => {
                                c.default.track(u.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                c.default.track(u.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: r()(p.QX, _.E2),
                        children: h.intl.format(h.t["KI+BSb"], { termsURL: u.X7G.TERMS, privacyURL: u.X7G.PRIVACY }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.Ot,
                        children: (0, i.jsx)(a.Button, {
                            text: h.intl.string(h.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.QX,
                        children: (0, i.jsx)(a.QWc, {
                            text: h.intl.string(h.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
