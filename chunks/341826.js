"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(990078),
    a = n(834730),
    o = n(821609),
    c = n(123292),
    d = n(890698),
    u = n(954571),
    _ = n(854378),
    h = n(652215);
n(436317);
var m = n(985018),
    g = n(731286),
    p = n(818050);
function A(e) {
    let { authBoxClassName: t, name: n, onNameChange: s } = e;
    return (0, i.jsxs)(_.Ay, {
        className: t,
        children: [
            (0, i.jsx)(d.M, {}),
            (0, i.jsxs)(_.eB, {
                className: g.y0,
                children: [
                    (0, i.jsx)(l.m, {
                        text: m.intl.string(m.t["hBB85/"]),
                        position: "right",
                        children: (0, i.jsx)(_.pd, {
                            label: m.intl.string(m.t["9AjdkD"]),
                            autoFocus: !0,
                            className: p.QB,
                            name: "username",
                            value: n,
                            placeholder: m.intl.string(m.t["09Q8yp"]),
                            onChange: s,
                            onFocus: () => {
                                u.default.track(h.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                u.default.track(h.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, i.jsx)(a.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: r()(p.QX, g.E2),
                        children: m.intl.format(m.t["KI+BSb"], { termsURL: h.X7G.TERMS, privacyURL: h.X7G.PRIVACY }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.Ot,
                        children: (0, i.jsx)(o.$, {
                            text: m.intl.string(m.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.QX,
                        children: (0, i.jsx)(c.Q, {
                            text: m.intl.string(m.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
