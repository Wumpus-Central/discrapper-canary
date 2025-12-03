n.d(t, { default: () => _ }), n(314940), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(512722),
    s = n.n(a),
    o = n(278074),
    l = n(793030),
    u = n(442837),
    d = n(481060),
    g = n(809206),
    c = n(219496),
    m = n(807369),
    E = n(25990),
    f = n(594174),
    S = n(74538),
    h = n(981631),
    v = n(388032),
    O = n(377238);
function _(e) {
    var t, n;
    let { transitionState: a, onClose: _ } = e,
        y = (0, u.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        T = r.useMemo(() => S.ZP.canEditDiscriminator(y) && !y.hasUniqueUsername(), [y]),
        [p, R] = r.useState(y.username),
        [L, M] = r.useState(y.discriminator),
        [P, A] = r.useState(""),
        [b, U] = r.useState(!1),
        C = (0, u.e7)([E.Z], () => E.Z.getErrors()),
        w = y.hasUniqueUsername(),
        N = (0, m.a)(p, w, !1, y.username),
        I = r.useRef(null),
        k = r.useMemo(() => {
            var e, t, n;
            return null != (n = null == C || null == (e = C.username) ? void 0 : e[0])
                ? n
                : null == C || null == (t = C.discriminator)
                  ? void 0
                  : t[0];
        }, [C]);
    r.useEffect(() => {
        if (a === d.Dvm.ENTERED) {
            var e;
            null == (e = I.current) || e.focus();
        }
    }, [a]);
    let x = L !== y.discriminator;
    async function Z(e) {
        e.preventDefault(), U(!0);
        let t = await (0, g.Mn)({
            username: p,
            discriminator: T ? L : void 0,
            password: P,
        });
        U(!1), (null == t ? void 0 : t.ok) && _();
    }
    return (0, i.jsx)("form", {
        onSubmit: Z,
        children: (0, i.jsx)(l.Modal, {
            onClose: _,
            transitionState: a,
            title: v.intl.string(v.t.m5or54),
            subtitle: v.intl.string(v.t.SLJvy0),
            actions: [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.i4jeWR),
                    type: "submit",
                    loading: b,
                },
            ],
            children: (0, i.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.Kqy, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, i.jsx)(
                                        d.oil,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                label: v.intl.string(v.t.TWzdWj),
                                                error: k,
                                                name: "username",
                                                value: p,
                                                maxLength: h.l$U,
                                                onChange: R,
                                                inputRef: I,
                                                fullWidth: !0,
                                            },
                                            ((n = y.hasUniqueUsername()),
                                            (0, o.EQ)(N)
                                                .with(
                                                    {
                                                        type: c.K.ERROR,
                                                        message: o.P.select(),
                                                    },
                                                    (e) => ({ error: e }),
                                                )
                                                .with(
                                                    {
                                                        type: c.K.AVAILABLE,
                                                        message: o.P.select(),
                                                    },
                                                    (e) => ({ successMessage: e }),
                                                )
                                                .otherwise(() => (n ? { helperText: v.intl.string(v.t.z7c4bP) } : {}))),
                                        ),
                                    ),
                                    !y.hasUniqueUsername() &&
                                        (0, i.jsx)(d.oil, {
                                            name: "discriminator",
                                            "aria-label": v.intl.string(v.t.ozumaN),
                                            maxLength: 4,
                                            value: L,
                                            onChange: M,
                                            disabled: !T,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            x
                                ? (0, i.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: O.discriminatorChangeWarning,
                                      children: v.intl.string(v.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(d.oil, {
                        label: v.intl.string(v.t.TmdnJ3),
                        error: null == C || null == (t = C.password) ? void 0 : t[0],
                        type: "password",
                        value: P,
                        onChange: A,
                    }),
                ],
            }),
        }),
    });
}
