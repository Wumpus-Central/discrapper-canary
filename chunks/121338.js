(e.r(a), e.d(a, { default: () => k, openInteractionModal: () => E }));
var s = e(477900),
    i = e(224640),
    n = e(20742),
    l = e(97808),
    r = e(778712),
    o = e(430993),
    c = e(683071),
    d = e(696208),
    u = e(192308),
    x = e(176634),
    h = e(298236),
    j = e(750128),
    m = e(969508),
    p = e(598444),
    g = e(818348),
    f = e(105292),
    v = e(900998);
function k(t) {
    let { title: a, onClose: e, transitionState: u } = t,
        {
            components: k,
            applicationIconURL: E,
            applicationName: b,
            submissionState: w,
            error: y,
            validators: C,
            validationErrors: N,
            setValidationErrors: F,
            onSubmit: I,
        } = (0, m.uD)(t, e);
    return (
        (0, x.A)({ onPasteFiles: g.tE, onPasteBackgroundText: g.tE }),
        (0, s.jsx)("form", {
            onSubmit: (t) => {
                (t.preventDefault(), I());
            },
            children: (0, s.jsxs)(i.d, {
                transitionState: u,
                onClose: e,
                "aria-label": a,
                children: [
                    (0, s.jsx)(n.rQ, {
                        leading: (0, s.jsx)(l.eu, { src: E, size: r._3.SIZE_24, "aria-label": b, className: v.In }),
                        title: a,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, s.jsxs)(o.c, {
                        children: [
                            null != y && "" !== y
                                ? (0, s.jsx)("div", {
                                      className: v.$Q,
                                      children: (0, s.jsx)(c.w, { type: "critical", message: y, role: "alert" }),
                                  })
                                : null,
                            (0, s.jsx)("div", {
                                className: v.$Q,
                                children: (0, s.jsx)(c.w, {
                                    type: "warning",
                                    message: f.intl.format(f.t["dSTy/w"], { applicationName: b }),
                                    role: "none",
                                }),
                            }),
                            (0, s.jsx)("div", {
                                className: v.dK,
                                children: (0, s.jsx)(h.f5, {
                                    modal: t,
                                    validators: C,
                                    validationErrors: N,
                                    setValidationErrors: F,
                                    children: (0, p.fD)(k),
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(d.H, {
                        actions: [
                            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: e, autoFocus: !1 },
                            {
                                variant: "primary",
                                text: f.intl.string(f.t.geKm7t),
                                loading: w === j.Z.IN_FLIGHT,
                                onClick: I,
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
function E(t) {
    (0, u.openModal)((a) => (0, s.jsx)(k, { ...a, ...t }), { stackNextByDefault: !0 });
}
