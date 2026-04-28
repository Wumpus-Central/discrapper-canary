e.r(a), e.d(a, { default: () => E, openInteractionModal: () => N });
var s = e(627968),
    i = e(224640),
    n = e(20742),
    l = e(430993),
    r = e(696208),
    o = e(97808),
    d = e(778712),
    c = e(512950),
    u = e(192308),
    x = e(176634),
    p = e(298236),
    h = e(750128),
    m = e(969508),
    j = e(398817),
    f = e(818348),
    g = e(985018),
    k = e(216313);
function E(t) {
    let { title: a, onClose: e, transitionState: u } = t,
        {
            components: E,
            applicationIconURL: N,
            applicationName: v,
            submissionState: T,
            error: y,
            validators: C,
            validationErrors: I,
            setValidationErrors: b,
            onSubmit: _,
        } = (0, m.uD)(t, e);
    return (
        (0, x.A)({ onPasteFiles: f.tE, onPasteBackgroundText: f.tE }),
        (0, s.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), _();
            },
            children: (0, s.jsxs)(i.d, {
                transitionState: u,
                onClose: e,
                children: [
                    (0, s.jsx)(n.rQ, {
                        leading: (0, s.jsx)(o.eu, { src: N, size: d._3.SIZE_24, "aria-label": v, className: k.In }),
                        title: a,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, s.jsxs)(l.c, {
                        children: [
                            null != y && "" !== y
                                ? (0, s.jsx)(c.p, { messageType: c.Y.ERROR, className: k.$Q, children: y })
                                : null,
                            (0, s.jsx)(c.p, {
                                messageType: c.Y.WARNING,
                                className: k.$Q,
                                children: g.intl.format(g.t["dSTy/w"], { applicationName: v }),
                            }),
                            (0, s.jsx)("div", {
                                className: k.dK,
                                children: (0, s.jsx)(p.f5, {
                                    modal: t,
                                    validators: C,
                                    validationErrors: I,
                                    setValidationErrors: b,
                                    children: (0, j.fD)(E),
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(r.H, {
                        actions: [
                            { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: e },
                            {
                                variant: "primary",
                                text: g.intl.string(g.t.geKm7t),
                                loading: T === h.Z.IN_FLIGHT,
                                onClick: _,
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
