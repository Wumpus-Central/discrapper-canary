n.d(t, { Z: () => x }), n(388685);
var a = n(951288),
    s = n(647438),
    r = n(442837),
    i = n(481060),
    l = n(809206),
    o = n(25990),
    c = n(155433),
    d = n(388032),
    m = n(780187);
function x(e) {
    var t, n;
    let { emailToken: x, isSlideReady: u, onClose: _, onBack: E, onNext: N } = e,
        [p, h] = s.useState(""),
        [A, C] = s.useState(""),
        [f, j] = s.useState(!1),
        g = (0, r.e7)([o.Z], () => o.Z.getErrors()),
        S = s.useRef(null);
    async function v(e) {
        e.preventDefault(), j(!0);
        let t = await (0, l.Mn)({
            email: p,
            emailToken: x,
            password: A,
        });
        if ((j(!1), null == t ? void 0 : t.ok)) N(p);
        else {
            var n, a;
            (null == t || null == (n = t.body) ? void 0 : n.username) != null
                ? (0, c.P)()
                : (null == t || null == (a = t.body) ? void 0 : a.email_token) != null && (null == E || E());
        }
    }
    return (
        s.useEffect(() => {
            if (u) {
                var e;
                null == (e = S.current) || e.focus();
            }
        }, [u]),
        (0, a.jsxs)("form", {
            onSubmit: v,
            children: [
                (0, a.jsxs)(i.xBx, {
                    separator: !1,
                    className: m.header,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            className: m.title,
                            variant: "heading-xl/extrabold",
                            children: d.intl.string(d.t.p3280t),
                        }),
                        (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: m.subtitle,
                            children: d.intl.string(d.t["1k44EB"]),
                        }),
                        (0, a.jsx)(i.olH, {
                            onClick: _,
                            className: m.modalCloseButton,
                        }),
                    ],
                }),
                (0, a.jsx)(i.hzk, {
                    className: m.content,
                    children: (0, a.jsxs)(i.Kqy, {
                        gap: 20,
                        children: [
                            (0, a.jsx)(i.oil, {
                                label: d.intl.string(d.t["w/qqKC"]),
                                error: null == g || null == (t = g.email) ? void 0 : t[0],
                                type: "email",
                                value: p,
                                onChange: h,
                                inputRef: S,
                            }),
                            (0, a.jsx)(i.oil, {
                                label: d.intl.string(d.t.TmdnJy),
                                error: null == g || null == (n = g.password) ? void 0 : n[0],
                                type: "password",
                                value: A,
                                onChange: C,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(i.mzw, {
                    children: [
                        (0, a.jsx)(i.zxk, {
                            variant: "primary",
                            text: d.intl.string(d.t.i4jeWV),
                            type: "submit",
                            loading: f,
                        }),
                        null != E
                            ? (0, a.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: m.__invalid_cancel,
                                  children: (0, a.jsx)(i.zxk, {
                                      variant: "secondary",
                                      text: d.intl.string(d.t["13/7kZ"]),
                                      onClick: E,
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: m.__invalid_cancel,
                                  children: (0, a.jsx)(i.zxk, {
                                      variant: "secondary",
                                      text: d.intl.string(d.t["ETE/oK"]),
                                      onClick: _,
                                  }),
                              }),
                    ],
                }),
            ],
        })
    );
}
