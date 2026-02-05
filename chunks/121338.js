n.r(t), n.d(t, { default: () => m, openInteractionModal: () => f });
var i = n(627968),
    r = n(158954),
    a = n(397927),
    o = n(176634),
    l = n(207963),
    _ = n(750128),
    s = n(969508),
    d = n(520586),
    c = n(818348),
    u = n(985018),
    p = n(308040);
function m(e) {
    let { title: t, onClose: n, transitionState: m } = e,
        {
            components: f,
            applicationIconURL: E,
            applicationName: I,
            submissionState: h,
            error: T,
            validators: g,
            validationErrors: C,
            setValidationErrors: x,
            onSubmit: O,
        } = (0, s.uD)(e, n);
    return (
        (0, o.A)({ onPasteFiles: c.tE, onPasteBackgroundText: c.tE }),
        (0, i.jsx)("form", {
            onSubmit: (e) => {
                e.preventDefault(), O();
            },
            children: (0, i.jsxs)(r.dWK, {
                transitionState: m,
                onClose: n,
                children: [
                    (0, i.jsx)(r.rQ0, {
                        leading: (0, i.jsx)(a.euF, { src: E, size: a._3J.SIZE_24, "aria-label": I, className: p.In }),
                        title: t,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, i.jsxs)(r.cwr, {
                        children: [
                            null != T && "" !== T
                                ? (0, i.jsx)(a.po8, { messageType: a.YCn.ERROR, className: p.$Q, children: T })
                                : null,
                            (0, i.jsx)(a.po8, {
                                messageType: a.YCn.WARNING,
                                className: p.$Q,
                                children: u.intl.format(u.t["dSTy/w"], { applicationName: I }),
                            }),
                            (0, i.jsx)("div", {
                                className: p.dK,
                                children: (0, i.jsx)(l.f5, {
                                    modal: e,
                                    validators: g,
                                    validationErrors: C,
                                    setValidationErrors: x,
                                    children: (0, d.fD)(f),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(r.H7u, {
                        actions: [
                            { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: n },
                            {
                                variant: "primary",
                                text: u.intl.string(u.t.geKm7t),
                                loading: h === _.Z.IN_FLIGHT,
                                onClick: O,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function f(e) {
    (0, a.qfG)((t) => (0, i.jsx)(m, { ...t, ...e }), { stackNextByDefault: !0 });
}
