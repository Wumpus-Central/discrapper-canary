e.d(n, { default: () => w });
var a = e(477900),
    r = e(582128),
    i = e(855986),
    s = e(631670),
    l = e(287809),
    o = e(129230),
    c = e(772707),
    E = e(771871),
    u = e(87404),
    _ = e(792996);
let A = {
    [u.Q9.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => _.intl.string(_.t.naBTFO),
    [u.Q9.SOMEONE_ASKED_ME_TO]: () => _.intl.string(_.t.LQ0RUP),
    [u.Q9.NEW_EMAIL]: () => _.intl.string(_.t.oOqQjw),
    [u.Q9.SOMETHING_ELSE]: () => _.intl.string(_.t.p38n1b),
};
var C = e(652215),
    g = e(661965);
function N(t) {
    let { onNext: n, onClose: e, reason: r, onReasonChange: i, transitionState: s } = t,
        l = u.FL.map((t) => ({ value: t, name: A[t]() }));
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t["41NIIh"]),
        onClose: e,
        transitionState: s,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: e },
            { variant: "primary", text: _.intl.string(_.t["3PatSz"]), disabled: null == r, onClick: n },
        ],
        children: (0, a.jsx)(E.z, {
            value: r,
            options: l,
            onChange: (t) => {
                (o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }),
                    i(t));
            },
        }),
    });
}
var S = e(834730),
    d = e(720960);
function k(t) {
    let { email: n, onClose: e, transitionState: r } = t;
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t["8O+nF7"]),
        onClose: e,
        transitionState: r,
        actions: [{ variant: "primary", text: _.intl.string(_.t.BddRzS), onClick: e }],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(S.E, {
                    className: d.h_,
                    variant: "body-md/normal",
                    children: _.intl.format(_.t.Zvx0O3, { email: n }),
                }),
                (0, a.jsx)(S.E, { className: d.YL, variant: "body-sm/normal", children: _.intl.string(_.t.yb7itQ) }),
            ],
        }),
    });
}
var m = e(858899),
    h = e(331322),
    f = e(95477),
    x = e(123292),
    y = e(181658),
    p = e(836602),
    R = e(613412),
    v = e(499785);
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return v.A.put({
        url: C.Rsh.USER_EMAIL,
        trackedActionData: {
            event: R.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: t },
        },
        rejectWithError: !1,
    });
}
function M(t) {
    let { error: n, setEmailToken: e, setError: s, onNext: l, onClose: o, transitionState: E } = t,
        [u, A] = r.useState(!1),
        [N, S] = r.useState(""),
        [d, k] = r.useState(!1),
        M = (0, i.bG)([p.A], () => p.A.getErrors()),
        I = r.useRef(null);
    return (
        r.useEffect(() => {
            I.current?.focus();
        }, []),
        (0, a.jsx)(c.k, {
            title: _.intl.string(_.t.jMGc4J),
            subtitle: _.intl.string(_.t.SZJowy),
            graphic: { type: "image", src: g },
            transitionState: E,
            onClose: o,
            actions: [
                {
                    variant: "primary",
                    text: _.intl.string(_.t.PDTjLN),
                    loading: u,
                    onClick: async function (t) {
                        (t.preventDefault(), s(null), A(!0));
                        try {
                            let { token: t } = await (async function (t) {
                                return (
                                    await v.A.post({
                                        url: C.Rsh.USER_EMAIL_VERIFY_CODE,
                                        body: { code: t },
                                        trackedActionData: {
                                            event: R.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                                        },
                                        rejectWithError: !1,
                                    })
                                ).body;
                            })(N);
                            (e(t), l());
                        } catch (t) {
                            s(new y.A(t).getAnyErrorMessage());
                        } finally {
                            A(!1);
                        }
                    },
                },
            ],
            children: (0, a.jsxs)(h.B, {
                gap: 8,
                children: [
                    (0, a.jsx)(f.k, {
                        label: _.intl.string(_.t["8mZX6M"]),
                        error: n ?? M?.email_token?.[0],
                        value: N,
                        onChange: S,
                        inputRef: I,
                    }),
                    (0, a.jsx)(x.Q, {
                        textVariant: "body-sm/normal",
                        text: _.intl.string(_.t.K0NPQ6),
                        onClick: async function () {
                            if (!d) {
                                k(!0);
                                try {
                                    (await O(!0),
                                        (0, m.P0)({ text: _.intl.string(_.t["84yeoz"]), variant: "success" }));
                                } catch (n) {
                                    let t = new y.A(n).getAnyErrorMessage();
                                    null != t && (0, m.P0)({ text: t, variant: "critical" });
                                } finally {
                                    k(!1);
                                }
                            }
                        },
                    }),
                ],
            }),
        })
    );
}
function I(t) {
    let { onNext: n, onClose: e, transitionState: s } = t,
        [o, E] = r.useState(!1),
        u = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: _.intl.string(_.t.uFxYq0),
        onClose: e,
        transitionState: s,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: e },
            {
                variant: "primary",
                text: _.intl.string(_.t.rXV81H),
                loading: o,
                onClick: async function (t) {
                    (t.preventDefault(), E(!0));
                    try {
                        (await O(), n());
                    } catch (n) {
                        let t = new y.A(n).getAnyErrorMessage();
                        null != t && (0, m.P0)({ text: t, variant: "critical" });
                    } finally {
                        E(!1);
                    }
                },
            },
        ],
        children: (0, a.jsx)(S.E, {
            className: d.h_,
            variant: "body-md/normal",
            children: _.intl.format(_.t.oMFSgi, { oldEmail: u?.email }),
        }),
    });
}
var L = e(774914);
function T(t) {
    let { emailToken: n, onClose: e, onBack: l, onNext: o, transitionState: E } = t,
        [u, A] = r.useState(""),
        [C, N] = r.useState(""),
        [S, d] = r.useState(!1),
        k = (0, i.bG)([p.A], () => p.A.getErrors()),
        m = r.useRef(null);
    return (
        r.useEffect(() => {
            m.current?.focus();
        }, []),
        (0, a.jsx)(c.k, {
            graphic: { type: "image", src: g },
            title: _.intl.string(_.t.p3280r),
            subtitle: _.intl.string(_.t["1k44EL"]),
            onClose: e,
            transitionState: E,
            actions: [
                null != l
                    ? { variant: "secondary", text: _.intl.string(_.t["13/7kX"]), onClick: l }
                    : { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: e },
                {
                    variant: "primary",
                    text: _.intl.string(_.t.i4jeWR),
                    loading: S,
                    onClick: async function (t) {
                        (t.preventDefault(), d(!0));
                        let e = await (0, s._L)({ email: u, emailToken: n, password: C });
                        (d(!1),
                            e?.ok
                                ? o(u)
                                : e?.body?.username != null
                                  ? (0, L.E)()
                                  : e?.body?.email_token != null && l?.());
                    },
                },
            ],
            children: (0, a.jsxs)(h.B, {
                gap: 20,
                children: [
                    (0, a.jsx)(f.k, {
                        label: _.intl.string(_.t["w/qqKK"]),
                        error: k?.email?.[0],
                        type: "email",
                        value: u,
                        onChange: A,
                        inputRef: m,
                    }),
                    (0, a.jsx)(f.k, {
                        label: _.intl.string(_.t.TmdnJ3),
                        error: k?.password?.[0],
                        type: "password",
                        revealable: !0,
                        value: C,
                        onChange: N,
                    }),
                ],
            }),
        })
    );
}
var j = e(117816);
function D(t) {
    let { onNext: n, onClose: e, transitionState: r } = t;
    return (0, a.jsxs)(c.k, {
        graphic: { type: "image", src: j.A },
        title: _.intl.string(_.t.hhR7gX),
        onClose: e,
        transitionState: r,
        actions: [
            { variant: "secondary", text: _.intl.string(_.t.rwTBFs), onClick: n },
            { variant: "primary", text: _.intl.string(_.t["ETE/oC"]), onClick: e },
        ],
        children: [
            (0, a.jsx)(S.E, {
                className: d.h_,
                variant: "body-md/normal",
                children: _.intl.format(_.t.rqWXUf, { hcArticle: u.kP }),
            }),
            (0, a.jsx)(S.E, { className: d.h_, variant: "body-md/normal", children: _.intl.string(_.t["3LW10C"]) }),
        ],
    });
}
var b = e(355097);
function w(t) {
    let { transitionState: n, onClose: e } = t,
        c = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    r.useEffect(() => (o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, s.Uo)()), []);
    let E = c?.verified,
        _ = E ? b.ko.CONFIRM_START : b.ko.EMAIL_AND_PASSWORD,
        [A, g] = r.useState(_),
        [S, d] = r.useState(null),
        [m, h] = r.useState(null),
        [f, x] = r.useState(""),
        [y, p] = r.useState();
    switch (A) {
        case b.ko.CONFIRM_START:
            return (0, a.jsx)(I, { onNext: () => g(b.ko.CONFIRM_CODE), onClose: e, transitionState: n });
        case b.ko.CONFIRM_CODE:
            return (0, a.jsx)(M, {
                error: m,
                setError: h,
                setEmailToken: d,
                onNext: () => g(b.ko.CHANGE_EMAIL_REASONS),
                transitionState: n,
                onClose: e,
            });
        case b.ko.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(N, {
                onNext: () => (
                    o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: y }),
                    null != y && u.qr.has(y) ? g(b.ko.CHANGE_EMAIL_WARNING) : g(b.ko.EMAIL_AND_PASSWORD)
                ),
                transitionState: n,
                onClose: e,
                reason: y,
                onReasonChange: p,
            });
        case b.ko.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(D, {
                onNext: () => {
                    (o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: y }),
                        g(b.ko.EMAIL_AND_PASSWORD));
                },
                onClose: e,
                transitionState: n,
            });
        case b.ko.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(T, {
                emailToken: S,
                onBack: E
                    ? () => g(null != y && u.qr.has(y) ? b.ko.CHANGE_EMAIL_WARNING : b.ko.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    (o.default.track(C.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: y }),
                        x(t),
                        g(b.ko.COMPLETE));
                },
                onClose: e,
                transitionState: n,
            });
        case b.ko.COMPLETE:
            return (0, a.jsx)(k, { email: f, onClose: e, transitionState: n });
        default:
            return null;
    }
}
