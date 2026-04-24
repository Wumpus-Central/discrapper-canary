"use strict";
n.r(t), n.d(t, { default: () => E, openInteractionModal: () => I });
var i = n(627968),
    r = n(224640),
    a = n(20742),
    s = n(430993),
    l = n(696208),
    o = n(97808),
    c = n(778712),
    d = n(512950),
    u = n(192308),
    _ = n(176634),
    p = n(298236),
    f = n(750128),
    h = n(969508),
    m = n(398817),
    g = n(818348),
    b = n(985018),
    A = n(216313);
function E(e) {
    let { title: t, onClose: n, transitionState: u } = e,
        {
            components: E,
            applicationIconURL: I,
            applicationName: v,
            submissionState: S,
            error: T,
            validators: y,
            validationErrors: C,
            setValidationErrors: x,
            onSubmit: L,
        } = (0, h.uD)(e, n);
    return (
        (0, _.A)({ onPasteFiles: g.tE, onPasteBackgroundText: g.tE }),
        (0, i.jsx)("form", {
            onSubmit: (e) => {
                e.preventDefault(), L();
            },
            children: (0, i.jsxs)(r.d, {
                transitionState: u,
                onClose: n,
                children: [
                    (0, i.jsx)(a.rQ, {
                        leading: (0, i.jsx)(o.eu, { src: I, size: c._3.SIZE_24, "aria-label": v, className: A.In }),
                        title: t,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, i.jsxs)(s.c, {
                        children: [
                            null != T && "" !== T
                                ? (0, i.jsx)(d.p, { messageType: d.Y.ERROR, className: A.$Q, children: T })
                                : null,
                            (0, i.jsx)(d.p, {
                                messageType: d.Y.WARNING,
                                className: A.$Q,
                                children: b.intl.format(b.t["dSTy/w"], { applicationName: v }),
                            }),
                            (0, i.jsx)("div", {
                                className: A.dK,
                                children: (0, i.jsx)(p.f5, {
                                    modal: e,
                                    validators: y,
                                    validationErrors: C,
                                    setValidationErrors: x,
                                    children: (0, m.fD)(E),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(l.H, {
                        actions: [
                            { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: n },
                            {
                                variant: "primary",
                                text: b.intl.string(b.t.geKm7t),
                                loading: S === f.Z.IN_FLIGHT,
                                onClick: L,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function I(e) {
    (0, u.openModal)((t) => (0, i.jsx)(E, { ...t, ...e }), { stackNextByDefault: !0 });
}
