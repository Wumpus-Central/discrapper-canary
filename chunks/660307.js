n.d(e, { A: () => A });
var a = n(627968),
    r = n(772707),
    i = n(954197),
    s = n(230913),
    l = n(954571),
    o = n(652215),
    c = n(87404),
    E = n(985018),
    u = n(37229);
function A(t) {
    let { onNext: e, onClose: n, reason: A, onReasonChange: _, transitionState: C } = t,
        d = c.FL.map((t) => ({ value: t, name: (0, s.u)(t) }));
    return (0, a.jsx)(r.k, {
        graphic: { type: "image", src: u },
        title: E.intl.string(E.t["41NIIh"]),
        onClose: n,
        transitionState: C,
        actions: [
            { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: E.intl.string(E.t["3PatSz"]), disabled: null == A, onClick: e },
        ],
        children: (0, a.jsx)(i.z, {
            value: A,
            options: d,
            onChange: (t) => {
                l.default.track(o.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), _(t);
            },
        }),
    });
}
