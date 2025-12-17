e.d(n, { Z: () => E });
var r = e(54381),
    i = e(481060),
    a = e(488889),
    l = e(626135),
    s = e(981631),
    o = e(308569),
    c = e(388032),
    u = e(800010);
function E(t) {
    let { onNext: n, onClose: e, reason: E, onReasonChange: A, transitionState: _ } = t,
        d = o.zf.map((t) => ({
            value: t,
            name: (0, a.S)(t),
        }));
    return (0, r.jsx)(i.Ioy, {
        graphic: {
            type: "image",
            src: u,
        },
        title: c.intl.string(c.t["41NIIh"]),
        onClose: e,
        transitionState: _,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: e,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t["3PatSz"]),
                disabled: null == E,
                onClick: n,
            },
        ],
        children: (0, r.jsx)(i.FXm, {
            value: E,
            options: d,
            onChange: (t) => {
                l.default.track(s.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), A(t);
            },
        }),
    });
}
