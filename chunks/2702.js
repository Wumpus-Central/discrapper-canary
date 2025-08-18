t.d(n, { default: () => w }), t(314940), t(388685);
var a = t(951288),
    r = t(647438),
    s = t(512722),
    i = t.n(s),
    l = t(954955),
    o = t.n(l),
    c = t(278074),
    u = t(442837),
    d = t(481060),
    m = t(809206),
    h = t(219496),
    x = t(575681),
    f = t(807369),
    g = t(180529),
    p = t(25990),
    b = t(594174),
    v = t(74538),
    j = t(981631),
    C = t(388032),
    _ = t(377238);
let k = (e) => {
    let { usernameStatus: n, showHint: t } = e;
    return (0, c.EQ)(n)
        .with(
            {
                type: h.K.ERROR,
                message: c.P.select(),
            },
            (e) =>
                (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: e,
                }),
        )
        .with(
            {
                type: h.K.AVAILABLE,
                message: c.P.select(),
            },
            (e) =>
                (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    children: e,
                }),
        )
        .otherwise(() =>
            t
                ? (0, a.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: C.intl.string(C.t.z7c4bG),
                  })
                : null,
        );
};
function w(e) {
    var n;
    let { transitionState: t, onClose: s } = e,
        l = (0, u.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return i()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        c = r.useMemo(() => v.ZP.canEditDiscriminator(l) && !l.hasUniqueUsername(), [l]),
        [w, U] = r.useState(!1),
        [y, E] = r.useState(l.username),
        [N, R] = r.useState(l.discriminator),
        [S, T] = r.useState(""),
        [q, W] = r.useState(!1),
        z = (0, u.e7)([p.Z], () => p.Z.getErrors()),
        B = (0, x.n)(),
        L = l.hasUniqueUsername() && B,
        M = (0, f.a)(y, L, !1, l.username),
        K = r.useRef(null),
        D = r.useMemo(() => {
            var e, n, t;
            return null != (t = null == z || null == (e = z.username) ? void 0 : e[0])
                ? t
                : null == z || null == (n = z.discriminator)
                  ? void 0
                  : n[0];
        }, [z]);
    r.useEffect(() => {
        if (t === d.Dvm.ENTERED) {
            var e;
            null == (e = K.current) || e.focus();
        }
    }, [t]);
    let J = N !== l.discriminator;
    async function Z(e) {
        e.preventDefault(), W(!0);
        let n = await (0, m.Mn)({
            username: y,
            discriminator: c ? N : void 0,
            password: S,
        });
        W(!1), (null == n ? void 0 : n.ok) && s();
    }
    let A = r.useMemo(() => o()(U, 50), []);
    return (0, a.jsxs)(d.Y0X, {
        transitionState: t,
        parentComponent: "ChangeUsernameModal",
        children: [
            (0, a.jsxs)(d.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, a.jsx)(d.X6q, {
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        className: _.title,
                        children: C.intl.string(C.t["m5or5+"]),
                    }),
                    (0, a.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: _.subtitle,
                        children: C.intl.string(C.t.SLJvy8),
                    }),
                    (0, a.jsx)(d.olH, {
                        onClick: s,
                        className: _.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)("form", {
                onSubmit: Z,
                children: [
                    (0, a.jsxs)(d.hzk, {
                        className: _.content,
                        children: [
                            (0, a.jsx)(d.xJW, {
                                title: C.intl.string(C.t.TWzdWl),
                                error: D,
                                children: (0, a.jsxs)(d.Kqy, {
                                    direction: "horizontal",
                                    gap: 4,
                                    children: [
                                        (0, a.jsx)(d.oil, {
                                            name: "username",
                                            "aria-label": C.intl.string(C.t.qqhR3N),
                                            value: y,
                                            maxLength: j.l$U,
                                            onChange: E,
                                            onFocus: () => A(!0),
                                            onBlur: () => A(!1),
                                            inputRef: K,
                                            fullWidth: !0,
                                        }),
                                        !l.hasUniqueUsername() &&
                                            (0, a.jsx)(d.oil, {
                                                name: "discriminator",
                                                "aria-label": C.intl.string(C.t.ozumaG),
                                                maxLength: 4,
                                                value: N,
                                                onChange: R,
                                                onFocus: () => A(!0),
                                                onBlur: () => A(!1),
                                                disabled: !c,
                                                leading: "#",
                                            }),
                                    ],
                                }),
                            }),
                            J
                                ? (0, a.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      className: _.discriminatorChangeWarning,
                                      children: C.intl.string(C.t.mConUV),
                                  })
                                : null,
                            L
                                ? (0, a.jsx)(g.Z, {
                                      show: (null == M ? void 0 : M.type) === h.K.ERROR || w,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, a.jsx)(k, {
                                          usernameStatus: M,
                                          showHint: l.hasUniqueUsername(),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)(d.xJW, {
                                className: _.password,
                                title: C.intl.string(C.t.TmdnJy),
                                error: null == z || null == (n = z.password) ? void 0 : n[0],
                                children: (0, a.jsx)(d.oil, {
                                    type: "password",
                                    value: S,
                                    onChange: T,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(d.mzw, {
                        children: [
                            (0, a.jsx)(d.zxk, {
                                variant: "primary",
                                text: C.intl.string(C.t.i4jeWV),
                                type: "submit",
                                loading: q,
                            }),
                            (0, a.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: _.cancel,
                                children: (0, a.jsx)(d.zxk, {
                                    variant: "secondary",
                                    text: C.intl.string(C.t["ETE/oK"]),
                                    onClick: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
