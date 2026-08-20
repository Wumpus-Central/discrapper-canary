e.r(a), e.d(a, { default: () => E, openInteractionModal: () => N });
var s = e(477900),
    i = e(224640),
    n = e(20742),
    l = e(430993),
    r = e(696208),
    o = e(97808),
    c = e(778712),
    d = e(512950),
    u = e(192308),
    x = e(176634),
    p = e(298236),
    h = e(750128),
    m = e(969508),
    j = e(844789),
    f = e(818348),
    g = e(375708),
    k = e(900998);
function E(t) {
    let { title: a, onClose: e, transitionState: u } = t,
        {
            components: E,
            applicationIconURL: N,
            applicationName: v,
            submissionState: T,
            error: b,
            validators: y,
            validationErrors: C,
            setValidationErrors: I,
            onSubmit: F,
        } = (0, m.uD)(t, e);
    return (
        (0, x.A)({ onPasteFiles: f.tE, onPasteBackgroundText: f.tE }),
        (0, s.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), F();
            },
            children: (0, s.jsxs)(i.d, {
                transitionState: u,
                onClose: e,
                "aria-label": a,
                children: [
                    (0, s.jsx)(n.rQ, {
                        leading: (0, s.jsx)(o.eu, { src: N, size: c._3.SIZE_24, "aria-label": v, className: k.In }),
                        title: a,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, s.jsxs)(l.c, {
                        children: [
                            null != b && "" !== b
                                ? (0, s.jsx)(d.p, { messageType: d.Y.ERROR, className: k.$Q, children: b })
                                : null,
                            (0, s.jsx)(d.p, {
                                messageType: d.Y.WARNING,
                                className: k.$Q,
                                children: g.intl.format(g.t["dSTy/w"], { applicationName: v }),
                            }),
                            (0, s.jsx)("div", {
                                className: k.dK,
                                children: (0, s.jsx)(p.f5, {
                                    modal: t,
                                    validators: y,
                                    validationErrors: C,
                                    setValidationErrors: I,
                                    children: (0, j.fD)(E),
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(r.H, {
                        actions: [
                            { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: e, autoFocus: !1 },
                            {
                                variant: "primary",
                                text: g.intl.string(g.t.geKm7t),
                                loading: T === h.Z.IN_FLIGHT,
                                onClick: F,
                                autoFocus: !1,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function N(t) {
    (0, u.openModal)((a) => (0, s.jsx)(E, { ...a, ...t }), { stackNextByDefault: !0 });
}
