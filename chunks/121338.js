"use strict";
r.r(t), r.d(t, { default: () => E, openInteractionModal: () => T });
var i = r(627968),
    a = r(224640),
    n = r(20742),
    l = r(430993),
    s = r(696208),
    o = r(97808),
    c = r(778712),
    d = r(512950),
    u = r(192308),
    _ = r(176634),
    p = r(207963),
    h = r(750128),
    f = r(969508),
    m = r(520586),
    g = r(818348),
    b = r(985018),
    A = r(216313);
function E(e) {
    let { title: t, onClose: r, transitionState: u } = e,
        {
            components: E,
            applicationIconURL: T,
            applicationName: I,
            submissionState: v,
            error: x,
            validators: C,
            validationErrors: S,
            setValidationErrors: y,
            onSubmit: R,
        } = (0, f.uD)(e, r);
    return (
        (0, _.A)({ onPasteFiles: g.tE, onPasteBackgroundText: g.tE }),
        (0, i.jsx)("form", {
            onSubmit: (e) => {
                e.preventDefault(), R();
            },
            children: (0, i.jsxs)(a.d, {
                transitionState: u,
                onClose: r,
                children: [
                    (0, i.jsx)(n.rQ, {
                        leading: (0, i.jsx)(o.eu, { src: T, size: c._3.SIZE_24, "aria-label": I, className: A.In }),
                        title: t,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, i.jsxs)(l.c, {
                        children: [
                            null != x && "" !== x
                                ? (0, i.jsx)(d.p, { messageType: d.Y.ERROR, className: A.$Q, children: x })
                                : null,
                            (0, i.jsx)(d.p, {
                                messageType: d.Y.WARNING,
                                className: A.$Q,
                                children: b.intl.format(b.t["dSTy/w"], { applicationName: I }),
                            }),
                            (0, i.jsx)("div", {
                                className: A.dK,
                                children: (0, i.jsx)(p.f5, {
                                    modal: e,
                                    validators: C,
                                    validationErrors: S,
                                    setValidationErrors: y,
                                    children: (0, m.fD)(E),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.H, {
                        actions: [
                            { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: r },
                            {
                                variant: "primary",
                                text: b.intl.string(b.t.geKm7t),
                                loading: v === h.Z.IN_FLIGHT,
                                onClick: R,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}
function T(e) {
    (0, u.openModal)((t) => (0, i.jsx)(E, { ...t, ...e }), { stackNextByDefault: !0 });
}
