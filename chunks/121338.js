n.r(t), n.d(t, { default: () => g, openInteractionModal: () => A });
var l = n(627968),
    i = n(224640),
    r = n(20742),
    a = n(430993),
    o = n(696208),
    s = n(97808),
    c = n(778712),
    u = n(512950),
    d = n(192308),
    E = n(176634),
    p = n(207963),
    _ = n(750128),
    h = n(969508),
    T = n(520586),
    I = n(818348),
    f = n(985018),
    m = n(216313);
function g(e) {
    let { title: t, onClose: n, transitionState: d } = e,
        {
            components: g,
            applicationIconURL: A,
            applicationName: C,
            submissionState: S,
            error: N,
            validators: O,
            validationErrors: L,
            setValidationErrors: y,
            onSubmit: v,
        } = (0, h.uD)(e, n);
    return (
        (0, E.A)({ onPasteFiles: I.tE, onPasteBackgroundText: I.tE }),
        (0, l.jsx)("form", {
            onSubmit: (e) => {
                e.preventDefault(), v();
            },
            children: (0, l.jsxs)(i.d, {
                transitionState: d,
                onClose: n,
                children: [
                    (0, l.jsx)(r.rQ, {
                        leading: (0, l.jsx)(s.eu, { src: A, size: c._3.SIZE_24, "aria-label": C, className: m.In }),
                        title: t,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, l.jsxs)(a.c, {
                        children: [
                            null != N && "" !== N
                                ? (0, l.jsx)(u.p, { messageType: u.Y.ERROR, className: m.$Q, children: N })
                                : null,
                            (0, l.jsx)(u.p, {
                                messageType: u.Y.WARNING,
                                className: m.$Q,
                                children: f.intl.format(f.t["dSTy/w"], { applicationName: C }),
                            }),
                            (0, l.jsx)("div", {
                                className: m.dK,
                                children: (0, l.jsx)(p.f5, {
                                    modal: e,
                                    validators: O,
                                    validationErrors: L,
                                    setValidationErrors: y,
                                    children: (0, T.fD)(g),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(o.H, {
                        actions: [
                            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n },
                            {
                                variant: "primary",
                                text: f.intl.string(f.t.geKm7t),
                                loading: S === _.Z.IN_FLIGHT,
                                onClick: v,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function A(e) {
    (0, d.openModal)((t) => (0, l.jsx)(g, { ...t, ...e }), { stackNextByDefault: !0 });
}
