a.r(e), a.d(e, { default: () => N, openInteractionModal: () => T });
var n = a(627968),
    i = a(224640),
    s = a(20742),
    l = a(430993),
    r = a(696208),
    o = a(97808),
    d = a(778712),
    c = a(512950),
    u = a(192308),
    x = a(176634),
    m = a(298236),
    p = a(750128),
    h = a(969508),
    E = a(398817),
    j = a(818348),
    f = a(375708),
    g = a(216313);
function N(t) {
    let { title: e, onClose: a, transitionState: u } = t,
        {
            components: N,
            applicationIconURL: T,
            applicationName: k,
            submissionState: v,
            error: b,
            validators: C,
            validationErrors: I,
            setValidationErrors: y,
            onSubmit: A,
        } = (0, h.uD)(t, a);
    return (
        (0, x.A)({ onPasteFiles: j.tE, onPasteBackgroundText: j.tE }),
        (0, n.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), A();
            },
            children: (0, n.jsxs)(i.d, {
                transitionState: u,
                onClose: a,
                "aria-label": e,
                children: [
                    (0, n.jsx)(s.rQ, {
                        leading: (0, n.jsx)(o.eu, { src: T, size: d._3.SIZE_24, "aria-label": k, className: g.In }),
                        title: e,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, n.jsxs)(l.c, {
                        children: [
                            null != b && "" !== b
                                ? (0, n.jsx)(c.p, { messageType: c.Y.ERROR, className: g.$Q, children: b })
                                : null,
                            (0, n.jsx)(c.p, {
                                messageType: c.Y.WARNING,
                                className: g.$Q,
                                children: f.intl.format(f.t["dSTy/w"], { applicationName: k }),
                            }),
                            (0, n.jsx)("div", {
                                className: g.dK,
                                children: (0, n.jsx)(m.f5, {
                                    modal: t,
                                    validators: C,
                                    validationErrors: I,
                                    setValidationErrors: y,
                                    children: (0, E.fD)(N),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(r.H, {
                        actions: [
                            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: a },
                            {
                                variant: "primary",
                                text: f.intl.string(f.t.geKm7t),
                                loading: v === p.Z.IN_FLIGHT,
                                onClick: A,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function T(t) {
    (0, u.openModal)((e) => (0, n.jsx)(N, { ...e, ...t }), { stackNextByDefault: !0 });
}
