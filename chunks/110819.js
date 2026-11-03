e.d(n, { default: () => S });
var r = e(477900),
    s = e(582128),
    i = e(636537),
    l = e(109802),
    o = e(452027),
    a = e(95477),
    u = e(331322),
    d = e(834730),
    c = e(683071),
    p = e(347704),
    x = e(957565),
    g = e(652215),
    m = e(105292),
    h = e(637219);
function f(t) {
    let { name: n, value: e } = t,
        [i, a] = s.useState(l.q.DEFAULT);
    return (0, r.jsx)(o.D, {
        label: n,
        children: (0, r.jsx)(l.e, {
            value: e,
            mode: i,
            supportsCopy: x.p5,
            onCopy: () => {
                (0, x.C)(
                    e,
                    () => a(l.q.SUCCESS),
                    () => a(l.q.ERROR),
                );
            },
        }),
    });
}
function j(t) {
    let { domain: n, error: e, disabled: s, onDomainChange: i } = t;
    return (0, r.jsx)(a.k, {
        label: m.intl.string(m.t["4jIAa+"]),
        error: e,
        onChange: i,
        placeholder: "example.com",
        maxLength: 253,
        value: n,
        disabled: s,
        required: !0,
    });
}
function y(t) {
    let { domain: n, proof: e } = t;
    return (0, r.jsxs)(u.B, {
        gap: 16,
        children: [
            (0, r.jsxs)("ol", {
                className: h.p,
                children: [
                    (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.E, {
                            tag: "span",
                            variant: "body-md/normal",
                            children: m.intl.string(m.t["yOxxA+"]),
                        }),
                    }),
                    (0, r.jsxs)("li", {
                        children: [
                            (0, r.jsx)(d.E, {
                                tag: "span",
                                variant: "body-md/normal",
                                children: m.intl.string(m.t.cSURbq),
                            }),
                            (0, r.jsxs)(u.B, {
                                gap: 12,
                                fullWidth: !1,
                                className: h.r,
                                children: [
                                    (0, r.jsx)(f, { name: m.intl.string(m.t.GL3q7k), value: `_discord.${n}` }),
                                    (0, r.jsx)(f, { name: m.intl.string(m.t.Ccmixu), value: "TXT" }),
                                    (0, r.jsx)(f, { name: m.intl.string(m.t.PVLriT), value: e }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(c.w, { type: "info", message: m.intl.string(m.t.CUBxDB), role: "none" }),
        ],
    });
}
function b(t) {
    let { domain: n, proof: e } = t;
    return (0, r.jsxs)(u.B, {
        gap: 16,
        children: [
            (0, r.jsx)(d.E, { tag: "span", variant: "body-md/normal", children: m.intl.string(m.t.p4ql7y) }),
            (0, r.jsxs)(u.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(f, { name: m.intl.string(m.t.GL3q7k), value: `https://${n}/.well-known/discord` }),
                    (0, r.jsx)(f, { name: m.intl.string(m.t.PVLriT), value: e }),
                ],
            }),
        ],
    });
}
function S(t) {
    let { onClose: n, transitionState: e } = t,
        [l, o] = s.useState(""),
        [a, u] = s.useState(""),
        [d, c] = s.useState(null),
        [x, h] = s.useState(!1),
        [f, S] = s.useState("DOMAIN"),
        [N, C] = s.useState("DNS"),
        D = s.useId();
    function v(t) {
        return t.body?.errors?.domain?._errors?.[0]?.message ?? t.body?.message ?? t.message;
    }
    function P() {
        return i.Bo.post({ url: g.Rsh.CONNECTION(g.fg2.DOMAIN, l), body: {}, rejectWithError: !1 });
    }
    async function k() {
        if ("" === l) return (c(m.intl.string(m.t.eJEUvD)), !1);
        (h(!0), c(null));
        try {
            return (await P(), n(), !1);
        } catch (t) {
            if (t.body?.proof != null) return (u(t.body.proof), !0);
            return (c(v(t)), !1);
        } finally {
            h(!1);
        }
    }
    async function B() {
        (h(!0), c(null));
        try {
            return (await P(), !0);
        } catch (t) {
            return (c(v(t)), !1);
        } finally {
            h(!1);
        }
    }
    let O = [
        {
            stepKey: "DOMAIN",
            modalProps: { title: m.intl.string(m.t["7lo8+e"]), subtitle: m.intl.string(m.t.NxPUqY) },
            body: (0, r.jsx)("form", {
                id: D,
                onSubmit: (t) => t.preventDefault(),
                noValidate: !0,
                children: (0, r.jsx)(j, {
                    domain: l,
                    error: "DOMAIN" === f ? d : null,
                    disabled: x,
                    onDomainChange: o,
                }),
            }),
            nextButtonProps: { type: "submit", text: m.intl.string(m.t.PDTjLN), form: D, loading: x },
            onNext: k,
        },
        {
            stepKey: "PROOF",
            modalProps: {
                title: m.intl.string(m.t["7lo8+e"]),
                notice: null != d ? { message: d, type: "critical", role: "alert" } : void 0,
            },
            body: "DNS" === N ? (0, r.jsx)(y, { domain: l, proof: a }) : (0, r.jsx)(b, { domain: l, proof: a }),
            secondaryActionButtonProps: {
                text: "DNS" === N ? m.intl.string(m.t.CkfdNx) : m.intl.string(m.t.RhJMVQ),
                onClick: () => {
                    (C("DNS" === N ? "HTTP" : "DNS"), c(null));
                },
            },
            nextButtonProps: { text: m.intl.string(m.t["13ofGu"]) },
            onNext: B,
        },
    ];
    return (0, r.jsx)(p.t, {
        onClose: n,
        transitionState: e,
        steps: O,
        currentStepKey: f,
        onStepChange: function (t) {
            (c(null), S(t));
        },
    });
}
