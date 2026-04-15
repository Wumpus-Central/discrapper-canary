"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(990078),
    a = n(397927),
    o = n(890698),
    c = n(854378),
    d = n(652215);
n(436317);
var u = n(985018),
    h = n(135622),
    _ = n(885106);
function p(e) {
    let { authBoxClassName: t, name: n, onNameChange: s, onNameFocus: p, onNameBlur: g } = e;
    return (0, i.jsxs)(c.Ay, {
        className: t,
        children: [
            (0, i.jsx)(o.M, {}),
            (0, i.jsxs)(c.eB, {
                className: h.y0,
                children: [
                    (0, i.jsx)(l.m, {
                        text: u.intl.string(u.t["hBB85/"]),
                        position: "right",
                        children: (0, i.jsx)(c.pd, {
                            label: u.intl.string(u.t["9AjdkD"]),
                            autoFocus: !0,
                            className: _.QB,
                            name: "username",
                            value: n,
                            placeholder: u.intl.string(u.t["09Q8yp"]),
                            onChange: s,
                            onFocus: p,
                            onBlur: g,
                        }),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: r()(_.QX, h.E2),
                        children: u.intl.format(u.t["KI+BSb"], { termsURL: d.X7G.TERMS, privacyURL: d.X7G.PRIVACY }),
                    }),
                    (0, i.jsx)("div", {
                        className: _.Ot,
                        children: (0, i.jsx)(a.Button, {
                            text: u.intl.string(u.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: _.QX,
                        children: (0, i.jsx)(a.QWc, {
                            text: u.intl.string(u.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
