e.d(n, { default: () => N });
var r = e(627968),
    i = e(64700),
    s = e(636537),
    l = e(109802),
    a = e(452027),
    o = e(292666),
    u = e(331322),
    d = e(834730),
    c = e(683071),
    p = e(347704),
    x = e(957565),
    g = e(652215),
    m = e(375708),
    h = e(577796);
function f(t) {
    let { name: n, value: e } = t,
        [s, o] = i.useState(l.q.DEFAULT);
    return (0, r.jsx)(a.D, {
        label: n,
        children: (0, r.jsx)(l.e, {
            value: e,
            mode: s,
            supportsCopy: x.p5,
            onCopy: () => {
                (0, x.C)(
                    e,
                    () => o(l.q.SUCCESS),
                    () => o(l.q.ERROR),
                );
            },
        }),
    });
}
function j(t) {
    let { domain: n, error: e, disabled: i, onDomainChange: s } = t;
    return (0, r.jsx)(o.k, {
        label: m.intl.string(m.t["4jIAa+"]),
        error: e,
        onChange: s,
        placeholder: "example.com",
        maxLength: 253,
        value: n,
        disabled: i,
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
                            variant: "text-md/normal",
                            children: m.intl.string(m.t["yOxxA+"]),
                        }),
                    }),
                    (0, r.jsxs)("li", {
                        children: [
                            (0, r.jsx)(d.E, {
                                tag: "span",
                                variant: "text-md/normal",
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
            (0, r.jsx)(c.w, { type: "info", children: m.intl.string(m.t.CUBxDB) }),
        ],
    });
}
function S(t) {
    let { domain: n, proof: e } = t;
    return (0, r.jsxs)(u.B, {
        gap: 16,
        children: [
            (0, r.jsx)(d.E, { tag: "span", variant: "text-md/normal", children: m.intl.string(m.t.p4ql7y) }),
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
function N(t) {
    let { onClose: n, transitionState: e } = t,
        [l, a] = i.useState(""),
        [o, u] = i.useState(""),
        [d, c] = i.useState(null),
        [x, h] = i.useState(!1),
        [f, N] = i.useState("DOMAIN"),
        [b, C] = i.useState("DNS"),
        D = i.useId();
    function v(t) {
        return t.body?.errors?.domain?._errors?.[0]?.message ?? t.body?.message ?? t.message;
    }
    function P() {
        return s.Bo.post({ url: g.Rsh.CONNECTION(g.fg2.DOMAIN, l), body: {}, rejectWithError: !1 });
    }
    async function k() {
        if ("" === l) return c(m.intl.string(m.t.eJEUvD)), !1;
        h(!0), c(null);
        try {
            return await P(), n(), !1;
        } catch (t) {
            if (t.body?.proof != null) return u(t.body.proof), !0;
            return c(v(t)), !1;
        } finally {
            h(!1);
        }
    }
    async function B() {
        h(!0), c(null);
        try {
            return await P(), !0;
        } catch (t) {
            return c(v(t)), !1;
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
                    onDomainChange: a,
                }),
            }),
            nextButtonProps: { type: "submit", text: m.intl.string(m.t.PDTjLN), form: D, loading: x },
            onNext: k,
        },
        {
            stepKey: "PROOF",
            modalProps: {
                title: m.intl.string(m.t["7lo8+e"]),
                notice: null != d ? { message: d, type: "critical" } : void 0,
            },
            body: "DNS" === b ? (0, r.jsx)(y, { domain: l, proof: o }) : (0, r.jsx)(S, { domain: l, proof: o }),
            secondaryActionButtonProps: {
                text: "DNS" === b ? m.intl.string(m.t.CkfdNx) : m.intl.string(m.t.RhJMVQ),
                onClick: () => {
                    C("DNS" === b ? "HTTP" : "DNS"), c(null);
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
            c(null), N(t);
        },
    });
}
