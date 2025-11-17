n.d(e, { Z: () => _ });
var a = n(54381),
    r = n(481060),
    i = n(488889),
    l = n(226186),
    s = n(626135),
    o = n(981631),
    c = n(308569),
    u = n(388032),
    E = n(800010);
function _(t) {
    let {
            onNext: e,
            onClose: n,
            reason: _,
            onReasonChange: d,
            freeTextResponse: A,
            setFreeTextResponse: x,
            transitionState: C,
        } = t,
        g = c.zf.map((t) => ({
            value: t,
            name: (0, i.S)(t),
        })),
        p = (0, l.u)("change_email_collect_reasons_slide");
    return (0, a.jsxs)(r.Ioy, {
        graphic: {
            type: "image",
            src: E,
        },
        title: u.intl.string(u.t["41NIIh"]),
        onClose: n,
        transitionState: C,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t["3PatSz"]),
                disabled: null == _,
                onClick: e,
            },
        ],
        children: [
            (0, a.jsx)(r.FXm, {
                value: _,
                options: g,
                onChange: (t) => {
                    s.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }),
                        d(t),
                        x(""),
                        t === c.pw.SOMETHING_ELSE &&
                            l.Z.trackExposure({ location: "change_email_collect_reasons_slide" });
                },
            }),
            p &&
                _ === c.pw.SOMETHING_ELSE &&
                (0, a.jsx)(r.Kx8, {
                    value: A,
                    maxLength: c.mF,
                    onChange: x,
                    placeholder: u.intl.string(u.t.Q8Rk7N),
                }),
        ],
    });
}
